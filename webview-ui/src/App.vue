<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import { Controls } from '@vue-flow/controls'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/minimap/dist/style.css'
import '@vue-flow/controls/dist/style.css'
import dagre from 'dagre'

// The VsCode API can only be acquired once per session
const vscode = (window as any).acquireVsCodeApi ? (window as any).acquireVsCodeApi() : null

const nodes = ref<any[]>([])
const edges = ref<any[]>([])

const { fitView } = useVueFlow()

const layoutGraph = (rawNodes: any[], rawEdges: any[]) => {
  const g = new dagre.graphlib.Graph()
  g.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 50 })
  g.setDefaultEdgeLabel(() => ({}))

  rawNodes.forEach((node) => {
    // dagre requires width and height to calculate layout
    g.setNode(node.id, { width: 150, height: 50 })
  })

  rawEdges.forEach((edge) => {
    g.setEdge(edge.source, edge.target)
  })

  dagre.layout(g)

  const positionedNodes = rawNodes.map((node) => {
    const nodeWithPosition = g.node(node.id)
    
    // Apply styling based on Diff Engine Status
    let customClass = 'node-standard'
    if (node.data?.status === 'added') customClass = 'node-added'
    else if (node.data?.status === 'removed') customClass = 'node-removed'
    else if (node.data?.status === 'modified') customClass = 'node-modified'
    else if (node.data?.status === 'unchanged') customClass = 'node-unchanged'
    
    return {
      ...node,
      class: customClass,
      position: {
        x: nodeWithPosition.x - 75, // center offset
        y: nodeWithPosition.y - 25,
      },
    }
  })

  // Style Edges based on diff status
  const styledEdges = rawEdges.map((edge) => {
    let strokeColor = 'var(--vscode-editor-foreground)'
    let edgeOpacity = 1
    
    if (edge.data?.status === 'added') strokeColor = 'var(--vscode-testing-iconPassed)'
    else if (edge.data?.status === 'removed') {
      strokeColor = 'var(--vscode-testing-iconFailed)'
      edgeOpacity = 0.5
    }
    
    return {
      ...edge,
      style: {
        ...edge.style,
        stroke: edge.data?.stroke || strokeColor,
        opacity: edgeOpacity
      }
    }
  })

  nodes.value = positionedNodes
  edges.value = styledEdges
  
  setTimeout(() => {
    fitView()
  }, 100)
}

const originalNodes = ref<any[]>([])
const originalEdges = ref<any[]>([])

onMounted(() => {
  window.addEventListener('message', (event) => {
    const message = event.data
    switch (message.type) {
      case 'loadFlow':
        const flowGraph = message.data
        if (flowGraph && flowGraph.nodes && flowGraph.edges) {
          originalNodes.value = flowGraph.nodes
          originalEdges.value = flowGraph.edges
          isComparing.value = false
          layoutGraph(flowGraph.nodes, flowGraph.edges)
        }
        break
      case 'loadDiff':
        const diffGraph = message.data
        if (diffGraph && diffGraph.nodes && diffGraph.edges) {
          isComparing.value = true
          layoutGraph(diffGraph.nodes, diffGraph.edges)
        }
        break
    }
  })

  // Signal that webview is ready to receive messages
  if (vscode) {
    vscode.postMessage({ type: 'webviewReady' })
  }
})

const isComparing = ref(false)

const triggerCompare = () => {
  if (vscode) {
    vscode.postMessage({ type: 'selectFileToCompare' })
  }
}

const exitDiff = () => {
  isComparing.value = false
  if (originalNodes.value.length > 0) {
    layoutGraph(originalNodes.value, originalEdges.value)
  }
}
</script>

<template>
  <div class="flow-container">
    <div class="toolbar">
      <h2 style="margin: 0; font-size: 14px; font-weight: 500;">
        Flow Lens {{ isComparing ? '- Diff Mode' : '' }}
      </h2>
      <vscode-button @click="triggerCompare" v-if="!isComparing">
        Compare With...
      </vscode-button>
      <vscode-button appearance="secondary" @click="exitDiff" v-else>
        Exit Diff
      </vscode-button>
    </div>
    
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :min-zoom="0.2"
      :max-zoom="4"
      fit-view-on-init
      class="vue-flow-wrapper"
    >
      <MiniMap />
      <Controls />
    </VueFlow>
  </div>
</template>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.flow-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--vscode-editor-background);
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: var(--vscode-editor-inactiveSelectionBackground);
  border-bottom: 1px solid var(--vscode-panel-border);
  color: var(--vscode-editor-foreground);
}

.vue-flow-wrapper {
  flex-grow: 1;
  width: 100%;
}

/* Base Node Styling Overrides to match Salesforce / Gearset */
.vue-flow__node {
  border-radius: 4px;
  font-family: var(--vscode-font-family);
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: var(--vscode-editorWidget-background);
  color: var(--vscode-editorWidget-foreground);
  border: 1px solid var(--vscode-editorWidget-border);
  transition: all 0.2s ease;
}

/* Diff Status Colors using VS Code built-in semantic variables */
.vue-flow__node.node-added {
  border-color: var(--vscode-testing-iconPassed);
  border-width: 2px;
  background-color: var(--vscode-diffEditor-insertedLineBackground);
}

.vue-flow__node.node-removed {
  border-color: var(--vscode-testing-iconFailed);
  border-width: 2px;
  background-color: var(--vscode-diffEditor-removedLineBackground);
  opacity: 0.8;
  text-decoration: line-through;
}

.vue-flow__node.node-modified {
  border-color: var(--vscode-editorWarning-foreground);
  border-width: 2px;
}

.vue-flow__node.node-unchanged {
  opacity: 0.6;
}
</style>
