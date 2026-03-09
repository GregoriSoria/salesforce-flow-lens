# Salesforce Flow Lens - Design Document

## 1. Overview
The **Salesforce Flow Lens** extension brings a modern, interactive, and visually rich "Diff Viewer" for Salesforce `.flow-meta.xml` files into VS Code. It replaces the complex raw XML diff experience with a node-based interface, enabling developers to understand structural changes instantly and edit properties directly from the diff view.

## 2. Architecture & Tech Stack

### Backend (VS Code Extension)
- **Framework:** `reactive-vscode` (Leveraging Vue's Composition API for managing disposables, configurations, and extension lifecycle events smoothly).
- **Core Engine:** TypeScript-based parsers that transform `flow-meta.xml` into a normalized JSON Graph Model.
- **Diff Engine:** Analyzes changes between two versions of the JSON Graph Model based on API names (`<name>`), flagging nodes as `Added`, `Modified`, `Removed`, or `Unchanged`.

### Frontend (Webview Application)
- **Framework:** Vue 3 (Composition API) built with Vite in a separate `webview-ui` directory.
- **UI Components:**
  - **`vscode-elements`:** For native VS Code inputs, buttons, and layout consistency.
  - **PrimeVue:** For advanced UI components like DataTables for side-by-side property comparisons, Dialogs, and Menus, as well as the left sidebar for summary lists.
- **Node Visualization:** **Vue Flow** (A DOM-based node engine) is recommended over Canvas. It balances performance perfectly for Flow sizes (typically tens to hundreds of nodes) while allowing rich, editable HTML forms inside individual nodes.
  - **Auto-Layout:** We will use a directed graph layout engine like **Dagre** (integrated with Vue Flow) to automatically position the nodes in a clean, hierarchical tree structure. This ensures the visualization looks identical to Salesforce's Auto-Layout mode or the **Gearset Diff Viewer**, ignoring the messy X/Y coordinates from the raw XML.
  - **Node Design:** Custom Vue components for each node type (Decision, Action, etc.), featuring distinct icons, titles, and diff status indicators (e.g., Green '+' for Added, Yellow for Modified, Red for Removed), exactly matching the clean Gearset aesthetic.

## 3. Webview Integration & State Management
- **Communication:** Bidirectional message passing (`postMessage`) between the Node.js Extension Host and the Vue Webview context.
- **Vite Setup:** The Vite build process will bundle the Vue app into a dedicated `dist/webview` folder. The extension will read the `index.html` and inject the necessary VS Code `webview.asWebviewUri` paths along with strict Content Security Policies (CSP).
- **Reactivity:** State modifications within the Webview (e.g., editing a node's condition) will dispatch a message to the backend, updating the underlying graph and consequently re-rendering the XML file in real-time.

## 4. Key Actions / Triggers
1. **Source Control Integration:** Intercepting native diff calls or providing an action button on Git tracked `.flow-meta.xml` files.
2. **Context Menu:** Select two XML files -> Right Click -> "Compare as Flows".

## 5. Security & Isolation
- Strict CSP for Webviews (only allowing `vscode-webview-resource:` and inline styles for Vue Flow).
- No external unverified execution.

## Conclusion: Design Endorses DOM over Canvas
While Canvas guarantees blazing-fast frame-rates for thousands of elements, Salesforce Flows rarely hit such density. Using DOM simplifies form embedding, layout management during structural diff presentation, and guarantees native accessibility and integration with PrimeVue, resulting in higher development velocity and better UX.
