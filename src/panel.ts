import * as vscode from 'vscode'
import { getNonce } from './utils'
import { FlowGraph } from './flowTypes'

export class MainPanel {
  public static currentPanel: MainPanel | undefined
  private readonly _panel: vscode.WebviewPanel
  private _disposables: vscode.Disposable[] = []
  private _currentFlowGraph: FlowGraph | undefined

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel

    // Listen for when the panel is disposed
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables)

    // Handle messages from the webview
    this._panel.webview.onDidReceiveMessage(async (message) => {
      switch (message.type) {
        case 'webviewReady':
          if (this._currentFlowGraph) {
            this._panel.webview.postMessage({ type: 'loadFlow', data: this._currentFlowGraph })
          }
          break
        case 'selectFileToCompare':
          const fileUri = await vscode.window.showOpenDialog({
            canSelectMany: false,
            openLabel: 'Aperte para Selecionar Target Flow',
            filters: { 'Salesforce Flow': ['flow-meta.xml'] }
          })
          if (fileUri && fileUri[0] && this._currentFlowGraph) {
            try {
              const targetDoc = await vscode.workspace.fs.readFile(fileUri[0])
              const xmlTargetString = new TextDecoder().decode(targetDoc)
              
              const { FlowParser } = await import('./flowParser')
              const { FlowDiffEngine } = await import('./flowDiffEngine')
              
              const parser = new FlowParser()
              const targetFlowGraph = parser.parse(xmlTargetString)
              
              const diffEngine = new FlowDiffEngine()
              const diffGraph = diffEngine.generateDiff(this._currentFlowGraph, targetFlowGraph)
              
              this._panel.webview.postMessage({ type: 'loadDiff', data: diffGraph })
            } catch (err: any) {
              vscode.window.showErrorMessage(`Falha ao calcular Diff: ${err.message}`)
            }
          }
          break
        case 'info':
          vscode.window.showInformationMessage(message.value)
          break
        case 'error':
          vscode.window.showErrorMessage(message.value)
          break
      }
    }, null, this._disposables)

    // Update the HTML content inside the webview
    this._update(extensionUri)
  }

  public loadFlow(flowGraph: FlowGraph) {
    this._currentFlowGraph = flowGraph
    this._panel.webview.postMessage({ type: 'loadFlow', data: flowGraph })
  }

  public static render(extensionUri: vscode.Uri, flowGraph: FlowGraph, filePath: string) {
    if (MainPanel.currentPanel) {
      MainPanel.currentPanel._panel.reveal(vscode.ViewColumn.One)
      MainPanel.currentPanel.loadFlow(flowGraph)
    } else {
      const panel = vscode.window.createWebviewPanel(
        'flowLensDiff',
        `Flow Lens: ${filePath.split('/').pop() || filePath.split('\\').pop()}`,
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
          localResourceRoots: [
            vscode.Uri.joinPath(extensionUri, 'webview-ui', 'build')
          ]
        }
      )

      MainPanel.currentPanel = new MainPanel(panel, extensionUri)
      MainPanel.currentPanel.loadFlow(flowGraph)
    }
  }

  public dispose() {
    MainPanel.currentPanel = undefined

    this._panel.dispose()

    while (this._disposables.length) {
      const x = this._disposables.pop()
      if (x) {
        x.dispose()
      }
    }
  }

  private _update(extensionUri: vscode.Uri) {
    const webview = this._panel.webview
    this._panel.webview.html = this._getHtmlForWebview(webview, extensionUri)
  }

  private _getHtmlForWebview(webview: vscode.Webview, extensionUri: vscode.Uri) {
    // Determine paths for the Vue App built by Vite
    // We configured Vite to output strictly to `assets/index.js` and `assets/index.css`
    const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'webview-ui', 'build', 'assets', 'index.js'))
    const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'webview-ui', 'build', 'assets', 'index.css'))

    const nonce = getNonce()

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- 
          Use a content security policy to only allow loading styles from our extension directory,
          and only allow scripts that have a specific nonce.
        -->
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; font-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
        <title>Flow Lens</title>
        <link rel="stylesheet" href="${styleUri}">
      </head>
      <body>
        <div id="app"></div>
        <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
      </body>
      </html>
    `
  }
}
