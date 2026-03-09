import { defineExtension, useCommand, extensionContext } from 'reactive-vscode'
import * as vscode from 'vscode'
import { MainPanel } from './panel'
import { FlowParser } from './flowParser'

const { activate, deactivate } = defineExtension(() => {
  const context = extensionContext.value!
  console.log('Salesforce Flow Lens is now active!')

  useCommand('salesforce-flow-lens.openViewer', async (uri?: vscode.Uri) => {
    // If triggered from context menu/editor title, uri is populated
    // Otherwise fallback to the active editor
    const targetUri = uri || vscode.window.activeTextEditor?.document.uri

    if (!targetUri) {
      vscode.window.showErrorMessage('No Flex / Flow file selected.')
      return
    }

    try {
      const fileData = await vscode.workspace.fs.readFile(targetUri)
      const xmlString = new TextDecoder().decode(fileData)

      // Parse logic handled in Node backend
      const parser = new FlowParser()
      const flowGraph = parser.parse(xmlString)

      // Open the flow diff Webview Panel and pass the payload
      MainPanel.render(context.extensionUri, flowGraph, targetUri.fsPath)
    } catch (e: any) {
      vscode.window.showErrorMessage(`Failed to read Flow file: ${e.message}`)
    }
  })
})

export { activate, deactivate }
