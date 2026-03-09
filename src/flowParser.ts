import { XMLParser } from 'fast-xml-parser';
import { FlowGraph, FlowNode, FlowEdge } from './flowTypes';

const NODE_TYPES = [
  'actionCalls', 'apexPluginCalls', 'assignments', 'collectionProcessors',
  'decisions', 'loops', 'recordCreates', 'recordDeletes', 'recordLookups',
  'recordUpdates', 'screens', 'steps', 'subflows', 'waits', 'start'
];

export class FlowParser {
  private parser: XMLParser;

  constructor() {
    this.parser = new XMLParser({
      ignoreAttributes: false,
      parseAttributeValue: true,
      isArray: (name, jpath, isLeafNode, isAttribute) => {
        // Salesforce flows can have multiple of these types, force them to be arrays even if there's only one
        if (NODE_TYPES.includes(name) || name === 'rules' || name === 'connector' || name === 'faultConnector') {
          return true;
        }
        return false;
      }
    });
  }

  public parse(xmlString: string): FlowGraph {
    const rawJSON = this.parser.parse(xmlString);
    const flowObj = rawJSON.Flow;

    if (!flowObj) {
      throw new Error('Invalid Salesforce Flow file: Missing <Flow> root element.');
    }

    const graph: FlowGraph = {
      nodes: [],
      edges: []
    };

    // Parse every known node category
    NODE_TYPES.forEach(type => {
      const elements = flowObj[type] || [];
      elements.forEach((el: any) => {
        const node = this.createNode(el, type);
        graph.nodes.push(node);
        this.extractEdges(el, node.id, graph.edges);
      });
    });

    return graph;
  }

  private createNode(rawEl: any, type: string): FlowNode {
    // Some elements like <start> might not have a <name>. Let's fallback to 'Start'
    const apiName = rawEl.name || 'Start';
    const label = rawEl.label || rawEl.name || 'Start';
    
    // Map XML elements to Custom Vue Flow Component types
    const vueFlowType = this.mapNodeTypeToVueComponent(type);

    return {
      id: apiName,
      type: vueFlowType,
      position: { x: Number(rawEl.locationX) || 0, y: Number(rawEl.locationY) || 0 }, // Dagre vai calcular dps
      data: {
        label,
        apiName,
        nodeType: type,
        description: rawEl.description,
        rawTarget: rawEl
      }
    };
  }

  private extractEdges(rawEl: any, sourceId: string, edges: FlowEdge[]) {
    // Standard connector
    if (rawEl.connector && rawEl.connector.length > 0) {
      const target = rawEl.connector[0]?.targetReference || rawEl.connector?.targetReference;
      if (target) {
        edges.push(this.createEdge(sourceId, target, undefined, undefined, { isStandard: true }));
      }
    } else if (rawEl.connector && rawEl.connector.targetReference) { // Em casos onde não for array
      edges.push(this.createEdge(sourceId, rawEl.connector.targetReference, undefined, undefined, { isStandard: true }));
    }

    // Fault connector
    if (rawEl.faultConnector && rawEl.faultConnector.length > 0) {
      const target = rawEl.faultConnector[0]?.targetReference || rawEl.faultConnector?.targetReference;
      if (target) {
        edges.push(this.createEdge(sourceId, target, 'Fault', { stroke: '#ff0000' }, { isFault: true }));
      }
    } else if (rawEl.faultConnector && rawEl.faultConnector.targetReference) {
      edges.push(this.createEdge(sourceId, rawEl.faultConnector.targetReference, 'Fault', { stroke: '#ff0000' }, { isFault: true }));
    }

    // Decisions have <rules> with connectors, and a <defaultConnector>
    if (rawEl.rules) {
      const rulesArray = Array.isArray(rawEl.rules) ? rawEl.rules : [rawEl.rules];
      rulesArray.forEach((rule: any) => {
        const target = rule.connector?.[0]?.targetReference || rule.connector?.targetReference;
        if (target) {
          edges.push(this.createEdge(sourceId, target, rule.name || rule.label || 'Condition'));
        }
      });
    }
    
    if (rawEl.defaultConnector && rawEl.defaultConnector.targetReference) {
      edges.push(this.createEdge(sourceId, rawEl.defaultConnector.targetReference, 'Default'));
    }

    // Loops have <nextValueConnector> and <noMoreValuesConnector>
    if (rawEl.nextValueConnector && rawEl.nextValueConnector.targetReference) {
      edges.push(this.createEdge(sourceId, rawEl.nextValueConnector.targetReference, 'For Each', undefined, { isLoopNext: true }));
    }
    if (rawEl.noMoreValuesConnector && rawEl.noMoreValuesConnector.targetReference) {
      edges.push(this.createEdge(sourceId, rawEl.noMoreValuesConnector.targetReference, 'After Last'));
    }
  }

  private createEdge(source: string, target: string, label?: string, style?: any, data?: any): FlowEdge {
    return {
      id: `${source}_${target}_${label || ''}`,
      source,
      target,
      label,
      type: 'smoothstep', // Default edge style for Vue Flow
      style,
      data
    };
  }

  private mapNodeTypeToVueComponent(rawType: string): string {
    // We will build these specific Vue components in the frontend later
    switch (rawType) {
      case 'decisions': return 'decisionNode';
      case 'actionCalls': case 'apexPluginCalls': return 'actionNode';
      case 'recordCreates': case 'recordUpdates': case 'recordDeletes': return 'dataNode';
      case 'screens': return 'screenNode';
      case 'start': return 'startNode';
      case 'loops': return 'loopNode';
      case 'assignments': return 'assignmentNode';
      default: return 'customNode';
    }
  }
}
