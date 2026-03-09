export interface FlowNode {
  id: string;             // Typically the API name inside <name>
  type: string;           // Custom Vue Flow type (e.g., 'Action', 'Decision', 'Screen')
  position: {             // Dagre will overwrite this, but Vue Flow requires it
    x: number;
    y: number;
  };
  data: {
    label: string;        // The human readable <label>
    apiName: string;      // The actual <name>
    nodeType: string;     // The raw XML tag, like 'recordCreates'
    description?: string; // Optional description
    status?: 'added' | 'removed' | 'modified' | 'unchanged'; // For the Diff viewer
    diffDetails?: any;    // Raw property changes if modified
    rawTarget?: any;      // The raw object from XML for properties editing
  };
}

export interface FlowEdge {
  id: string;             // SourceID_TargetID
  source: string;         // Source node API name
  target: string;         // Target node API name
  label?: string;         // Used for Decision Branches (e.g., rule name), Faults, etc.
  type?: string;          // E.g., 'smoothstep' or 'step'
  animated?: boolean;
  style?: Record<string, any>;
  data?: {
    isFault?: boolean;
    isLoopNext?: boolean;
    status?: 'added' | 'removed' | 'modified' | 'unchanged';
  };
}

export interface FlowGraph {
  nodes: FlowNode[];
  edges: FlowEdge[];
}
