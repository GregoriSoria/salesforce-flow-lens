import { FlowGraph, FlowNode, FlowEdge } from './flowTypes';

export class FlowDiffEngine {
  /**
   * Compares two Flow Graphs and returns a unified Diff Graph containing nodes
   * marked as added, removed, modified, or unchanged.
   */
  public generateDiff(sourceGraph: FlowGraph, targetGraph: FlowGraph): FlowGraph {
    const diffNodes: FlowNode[] = [];
    const diffEdges: FlowEdge[] = [];

    const sourceNodesMap = new Map<string, FlowNode>(
      sourceGraph.nodes.map(n => [n.id, n])
    );
    const targetNodesMap = new Map<string, FlowNode>(
      targetGraph.nodes.map(n => [n.id, n])
    );

    // 1. Find Added and Modified / Unchanged nodes
    targetGraph.nodes.forEach(targetNode => {
      const sourceNode = sourceNodesMap.get(targetNode.id);
      
      if (!sourceNode) {
        // Node exists in Target but not Source -> Added
        targetNode.data.status = 'added';
        diffNodes.push(targetNode);
      } else {
        // Node exists in both, determine if modified
        const modifications = this.compareAttributes(sourceNode.data.rawTarget, targetNode.data.rawTarget);
        
        if (Object.keys(modifications).length > 0) {
          targetNode.data.status = 'modified';
          targetNode.data.diffDetails = modifications;
        } else {
          targetNode.data.status = 'unchanged';
        }
        diffNodes.push(targetNode);
      }
    });

    // 2. Find Removed nodes
    sourceGraph.nodes.forEach(sourceNode => {
      if (!targetNodesMap.has(sourceNode.id)) {
        // Node exists in Source but not Target -> Removed
        sourceNode.data.status = 'removed';
        diffNodes.push(sourceNode);
      }
    });

    // 3. Process Edges (Simplified diff logic for edges)
    // We basically keep all edges from Target, plus any edges from Source that were removed
    // For visual clarity, an edge connecting to a 'removed' node is also 'removed'
    const targetEdgesSet = new Set(targetGraph.edges.map(e => e.id));
    
    targetGraph.edges.forEach(e => {
      diffEdges.push({ ...e, data: { ...e.data, status: 'added' } }); // Assuming added/verified in target
    });

    sourceGraph.edges.forEach(e => {
      if (!targetEdgesSet.has(e.id)) {
        diffEdges.push({ ...e, data: { ...e.data, status: 'removed' } });
      }
    });

    // TODO: Improve edge modified status logic if a target references a changed parameter in the edge

    return {
      nodes: diffNodes,
      edges: diffEdges
    };
  }

  /**
   * A rudimentary Deep Diff generator that ignores position and structural connector differences,
   * focusing solely on logical configuration (variables, targets, types).
   */
  private compareAttributes(sourceRaw: any, targetRaw: any): any {
    const diffs: any = {};
    
    // Ignore these XML keys when strictly comparing modification properties
    // because X/Y changes don't affect Flow Logic
    const ignoredKeys = ['locationX', 'locationY', 'connector', 'faultConnector', 'defaultConnector'];

    for (const key of Object.keys(targetRaw)) {
      if (ignoredKeys.includes(key)) continue;

      const srcVal = sourceRaw[key];
      const tgtVal = targetRaw[key];

      // If they are objects, JSON stringify for a simple equality check 
      // (in a real production app we'd deep compare)
      if (typeof tgtVal === 'object' && tgtVal !== null) {
        if (JSON.stringify(srcVal) !== JSON.stringify(tgtVal)) {
          diffs[key] = { old: srcVal, new: tgtVal };
        }
      } else if (srcVal !== tgtVal) {
        // Primitives mismatch
        diffs[key] = { old: srcVal, new: tgtVal };
      }
    }

    return diffs;
  }
}
