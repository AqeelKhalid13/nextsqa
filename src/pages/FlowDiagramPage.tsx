
import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const initialNodes = [
  // Authentication Flow
  {
    id: 'login',
    type: 'input',
    data: { label: 'Login Page' },
    position: { x: 50, y: 50 },
    style: { backgroundColor: '#e3f2fd', border: '2px solid #1976d2' },
  },
  {
    id: 'auth',
    data: { label: 'Authentication\nService' },
    position: { x: 50, y: 150 },
    style: { backgroundColor: '#fff3e0', border: '2px solid #f57c00' },
  },
  
  // Main Dashboard
  {
    id: 'dashboard',
    data: { label: 'Dashboard\n(Central Hub)' },
    position: { x: 300, y: 250 },
    style: { backgroundColor: '#e8f5e8', border: '3px solid #388e3c', width: 150, height: 80 },
  },
  
  // Testing Flow
  {
    id: 'start-testing',
    data: { label: 'Start Testing\n(URL Input)' },
    position: { x: 600, y: 100 },
    style: { backgroundColor: '#f3e5f5', border: '2px solid #7b1fa2' },
  },
  {
    id: 'test-cases',
    data: { label: 'Test Cases\nManagement' },
    position: { x: 800, y: 200 },
    style: { backgroundColor: '#fff8e1', border: '2px solid #ffa000' },
  },
  {
    id: 'test-execution',
    data: { label: 'Test Execution\n& Results' },
    position: { x: 1000, y: 300 },
    style: { backgroundColor: '#e1f5fe', border: '2px solid #0288d1' },
  },
  {
    id: 'test-plans',
    data: { label: 'Test Plans\n& Suites' },
    position: { x: 800, y: 400 },
    style: { backgroundColor: '#fce4ec', border: '2px solid #c2185b' },
  },
  
  // Bug & Quality Management
  {
    id: 'bug-reports',
    data: { label: 'Bug Reports\n& Tracking' },
    position: { x: 600, y: 500 },
    style: { backgroundColor: '#ffebee', border: '2px solid #d32f2f' },
  },
  {
    id: 'quality-metrics',
    data: { label: 'Quality Metrics\n& KPIs' },
    position: { x: 400, y: 600 },
    style: { backgroundColor: '#e0f2f1', border: '2px solid #00796b' },
  },
  
  // Reporting & Analytics
  {
    id: 'analytics',
    data: { label: 'Analytics\n& Insights' },
    position: { x: 100, y: 400 },
    style: { backgroundColor: '#f1f8e9', border: '2px solid #689f38' },
  },
  {
    id: 'reports',
    data: { label: 'Reports\n& Export' },
    position: { x: 100, y: 300 },
    style: { backgroundColor: '#fff3e0', border: '2px solid #ff8f00' },
  },
  
  // Automation & Integration
  {
    id: 'automation',
    data: { label: 'Test Automation\n& Scheduling' },
    position: { x: 1200, y: 200 },
    style: { backgroundColor: '#e8eaf6', border: '2px solid #3f51b5' },
  },
  {
    id: 'integrations',
    data: { label: 'Third-party\nIntegrations' },
    position: { x: 1200, y: 400 },
    style: { backgroundColor: '#fafafa', border: '2px solid #616161' },
  },
  
  // Team & Management
  {
    id: 'team',
    data: { label: 'Team Management\n& Roles' },
    position: { x: 50, y: 500 },
    style: { backgroundColor: '#e3f2fd', border: '2px solid #1565c0' },
  },
  {
    id: 'version-control',
    data: { label: 'Version Control\n& History' },
    position: { x: 300, y: 500 },
    style: { backgroundColor: '#f9fbe7', border: '2px solid #827717' },
  },
  
  // Settings & Profile
  {
    id: 'settings',
    data: { label: 'Settings &\nConfiguration' },
    position: { x: 50, y: 600 },
    style: { backgroundColor: '#f3e5f5', border: '2px solid #512da8' },
  },
  {
    id: 'profile',
    data: { label: 'User Profile\n& Preferences' },
    position: { x: 200, y: 700 },
    style: { backgroundColor: '#fff8e1', border: '2px solid #ef6c00' },
  },
  
  // Data Storage
  {
    id: 'database',
    data: { label: 'Database\n(Test Data, Results,\nUser Data)' },
    position: { x: 600, y: 700 },
    style: { backgroundColor: '#f5f5f5', border: '3px solid #424242', width: 200, height: 100 },
  },
];

const initialEdges = [
  // Authentication flow
  { id: 'e1', source: 'login', target: 'auth', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2', source: 'auth', target: 'dashboard', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Dashboard connections to main features
  { id: 'e3', source: 'dashboard', target: 'start-testing', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4', source: 'dashboard', target: 'test-cases', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5', source: 'dashboard', target: 'reports', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6', source: 'dashboard', target: 'analytics', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Testing workflow
  { id: 'e7', source: 'start-testing', target: 'test-cases', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8', source: 'test-cases', target: 'test-execution', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e9', source: 'test-cases', target: 'test-plans', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e10', source: 'test-execution', target: 'bug-reports', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Quality and metrics flow
  { id: 'e11', source: 'test-execution', target: 'quality-metrics', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e12', source: 'bug-reports', target: 'quality-metrics', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e13', source: 'quality-metrics', target: 'analytics', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Automation connections
  { id: 'e14', source: 'test-cases', target: 'automation', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e15', source: 'automation', target: 'integrations', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Team and version control
  { id: 'e16', source: 'dashboard', target: 'team', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e17', source: 'test-cases', target: 'version-control', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e18', source: 'team', target: 'settings', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Settings and profile
  { id: 'e19', source: 'auth', target: 'profile', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e20', source: 'settings', target: 'profile', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Database connections (bidirectional data flow)
  { id: 'e21', source: 'test-execution', target: 'database', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e22', source: 'bug-reports', target: 'database', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e23', source: 'test-cases', target: 'database', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e24', source: 'quality-metrics', target: 'database', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e25', source: 'profile', target: 'database', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Reporting connections
  { id: 'e26', source: 'analytics', target: 'reports', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e27', source: 'quality-metrics', target: 'reports', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
];

const FlowDiagramPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">NextSQA System Flow Diagram</h1>
            <p className="text-muted-foreground">
              This diagram shows how data flows between different components of the NextSQA testing platform and how each page connects with others.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-100 border-2 border-blue-600 rounded"></div>
                  <span className="text-xs">User login & authentication</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Testing Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-100 border-2 border-purple-600 rounded"></div>
                    <span className="text-xs">Test creation & execution</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-100 border-2 border-orange-600 rounded"></div>
                    <span className="text-xs">Test management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quality & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-100 border-2 border-red-600 rounded"></div>
                    <span className="text-xs">Bug tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-100 border-2 border-green-600 rounded"></div>
                    <span className="text-xs">Analytics & metrics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-indigo-100 border-2 border-indigo-600 rounded"></div>
                    <span className="text-xs">Team & automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-100 border-2 border-gray-600 rounded"></div>
                    <span className="text-xs">Data storage</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="h-[800px]">
            <CardHeader>
              <CardTitle>System Architecture & Data Flow</CardTitle>
            </CardHeader>
            <CardContent className="h-full p-0">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                attributionPosition="bottom-left"
                className="bg-gray-50 dark:bg-gray-900"
              >
                <Background color="#aaa" gap={16} />
                <Controls />
                <MiniMap 
                  nodeColor={(node) => {
                    if (node.id === 'dashboard') return '#4caf50';
                    if (node.id === 'database') return '#424242';
                    return '#e0e0e0';
                  }}
                />
              </ReactFlow>
            </CardContent>
          </Card>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Flow Explanation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold">1. Authentication Flow</h4>
                    <p className="text-muted-foreground">Users login → Authentication service validates → Redirects to Dashboard</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">2. Testing Workflow</h4>
                    <p className="text-muted-foreground">Start Testing → Create Test Cases → Execute Tests → Generate Reports → Track Bugs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">3. Quality Management</h4>
                    <p className="text-muted-foreground">Test Results → Quality Metrics → Analytics → Reports for stakeholders</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Integration Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold">Central Hub</h4>
                    <p className="text-muted-foreground">Dashboard serves as the main navigation point connecting all features</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Storage</h4>
                    <p className="text-muted-foreground">All components store and retrieve data from the central database</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cross-Feature Communication</h4>
                    <p className="text-muted-foreground">Test cases connect to execution, bugs link to quality metrics, and everything feeds into reporting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagramPage;
