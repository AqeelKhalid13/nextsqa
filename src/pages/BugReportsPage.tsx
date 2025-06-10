
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Bug, Search, Filter, Eye, MessageSquare, Paperclip } from 'lucide-react';

interface BugReport {
  id: number;
  title: string;
  severity: string;
  status: string;
  assignee: string;
  reportedDate: string;
  reporter: string;
  environment: string;
  browser: string;
  priority: string;
  comments: number;
  attachments: number;
  description?: string;
  stepsToReproduce?: string;
  expectedResult?: string;
  actualResult?: string;
}

const BugReportsPage = () => {
  const { toast } = useToast();
  const [bugs, setBugs] = useState<BugReport[]>([
    { 
      id: 1, 
      title: 'Login button not responsive', 
      severity: 'High', 
      status: 'Open', 
      assignee: 'John Doe',
      reportedDate: '2024-01-15',
      reporter: 'Sarah Wilson',
      environment: 'Production',
      browser: 'Chrome',
      priority: 'High',
      comments: 3,
      attachments: 2,
      description: 'The login button becomes unresponsive after multiple clicks',
      stepsToReproduce: '1. Navigate to login page\n2. Click login button multiple times\n3. Observe button becomes unresponsive',
      expectedResult: 'Button should remain responsive',
      actualResult: 'Button becomes unresponsive after 3-4 clicks'
    },
    { 
      id: 2, 
      title: 'Form validation error', 
      severity: 'Medium', 
      status: 'In Progress', 
      assignee: 'Jane Smith',
      reportedDate: '2024-01-14',
      reporter: 'Mike Johnson',
      environment: 'Staging',
      browser: 'Firefox',
      priority: 'Medium',
      comments: 5,
      attachments: 1,
      description: 'Form validation shows incorrect error messages',
      stepsToReproduce: '1. Fill form with invalid data\n2. Submit form\n3. Check error messages',
      expectedResult: 'Correct validation messages should appear',
      actualResult: 'Generic error message appears instead of specific ones'
    },
    { 
      id: 3, 
      title: 'Dashboard loading slow', 
      severity: 'Low', 
      status: 'Resolved', 
      assignee: 'Mike Johnson',
      reportedDate: '2024-01-13',
      reporter: 'Emily Brown',
      environment: 'Production',
      browser: 'Safari',
      priority: 'Low',
      comments: 2,
      attachments: 0,
      description: 'Dashboard takes too long to load',
      stepsToReproduce: '1. Login to application\n2. Navigate to dashboard\n3. Observe loading time',
      expectedResult: 'Dashboard should load within 2 seconds',
      actualResult: 'Dashboard takes 5-7 seconds to load'
    },
    { 
      id: 4, 
      title: 'API timeout error', 
      severity: 'Critical', 
      status: 'Open', 
      assignee: 'Alex Brown',
      reportedDate: '2024-01-12',
      reporter: 'David Wilson',
      environment: 'Production',
      browser: 'Edge',
      priority: 'Critical',
      comments: 8,
      attachments: 3,
      description: 'API calls timeout frequently causing data loss',
      stepsToReproduce: '1. Make API call\n2. Wait for response\n3. Observe timeout error',
      expectedResult: 'API should respond within timeout limit',
      actualResult: 'API times out frequently'
    },
    { 
      id: 5, 
      title: 'Mobile UI alignment issue', 
      severity: 'Medium', 
      status: 'Testing', 
      assignee: 'Sarah Wilson',
      reportedDate: '2024-01-11',
      reporter: 'Lisa Johnson',
      environment: 'Development',
      browser: 'Mobile Chrome',
      priority: 'Medium',
      comments: 4,
      attachments: 5,
      description: 'UI elements misaligned on mobile devices',
      stepsToReproduce: '1. Open app on mobile device\n2. Navigate to main page\n3. Observe alignment issues',
      expectedResult: 'UI should be properly aligned',
      actualResult: 'Elements are overlapping and misaligned'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [environmentFilter, setEnvironmentFilter] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedBug, setSelectedBug] = useState<BugReport | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Medium',
    priority: 'Medium',
    environment: 'Development',
    browser: 'Chrome',
    stepsToReproduce: '',
    expectedResult: '',
    actualResult: '',
    assignee: 'John Doe'
  });

  const filteredBugs = bugs.filter(bug => {
    const matchesSearch = bug.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bug.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bug.reporter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || bug.severity === severityFilter;
    const matchesStatus = statusFilter === 'all' || bug.status === statusFilter;
    const matchesEnvironment = environmentFilter === 'all' || bug.environment === environmentFilter;
    
    return matchesSearch && matchesSeverity && matchesStatus && matchesEnvironment;
  });

  const handleCreateBug = () => {
    const newBug: BugReport = {
      id: bugs.length + 1,
      title: formData.title,
      description: formData.description,
      severity: formData.severity,
      status: 'Open',
      assignee: formData.assignee,
      reportedDate: new Date().toISOString().split('T')[0],
      reporter: 'Current User',
      environment: formData.environment,
      browser: formData.browser,
      priority: formData.priority,
      comments: 0,
      attachments: 0,
      stepsToReproduce: formData.stepsToReproduce,
      expectedResult: formData.expectedResult,
      actualResult: formData.actualResult
    };

    setBugs([...bugs, newBug]);
    setIsCreateDialogOpen(false);
    setFormData({
      title: '',
      description: '',
      severity: 'Medium',
      priority: 'Medium',
      environment: 'Development',
      browser: 'Chrome',
      stepsToReproduce: '',
      expectedResult: '',
      actualResult: '',
      assignee: 'John Doe'
    });
    
    toast({
      title: "Success",
      description: "Bug report created successfully!",
    });
  };

  const handleEditBug = () => {
    if (!selectedBug) return;

    setBugs(prev => prev.map(bug => 
      bug.id === selectedBug.id 
        ? { ...bug, ...formData }
        : bug
    ));
    
    setIsEditDialogOpen(false);
    setSelectedBug(null);
    
    toast({
      title: "Success",
      description: "Bug report updated successfully!",
    });
  };

  const handleDeleteBug = (bugId: number) => {
    setBugs(prev => prev.filter(bug => bug.id !== bugId));
    
    toast({
      title: "Success",
      description: "Bug report deleted successfully!",
    });
  };

  const openEditDialog = (bug: BugReport) => {
    setSelectedBug(bug);
    setFormData({
      title: bug.title,
      description: bug.description || '',
      severity: bug.severity,
      priority: bug.priority,
      environment: bug.environment,
      browser: bug.browser,
      stepsToReproduce: bug.stepsToReproduce || '',
      expectedResult: bug.expectedResult || '',
      actualResult: bug.actualResult || '',
      assignee: bug.assignee
    });
    setIsEditDialogOpen(true);
  };

  const openViewDialog = (bug: BugReport) => {
    setSelectedBug(bug);
    setIsViewDialogOpen(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800 hover:bg-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Low': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800 hover:bg-red-200';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Testing': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Resolved': return 'bg-green-100 text-green-800 hover:bg-green-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">Bug Reports</h1>
              <p className="text-sm text-muted-foreground">Track and manage bug reports</p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="hover:scale-105 transition-transform duration-200">
                  <Plus className="w-4 h-4 mr-2" />
                  Report Bug
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Report New Bug</DialogTitle>
                  <DialogDescription>
                    Provide detailed information about the bug you encountered.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="col-span-3"
                      placeholder="Brief description of the bug"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="col-span-3"
                      placeholder="Detailed description of the bug"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="severity" className="text-right">Severity</Label>
                      <Select value={formData.severity} onValueChange={(value) => setFormData({...formData, severity: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="priority" className="text-right">Priority</Label>
                      <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="environment" className="text-right">Environment</Label>
                      <Select value={formData.environment} onValueChange={(value) => setFormData({...formData, environment: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Development">Development</SelectItem>
                          <SelectItem value="Staging">Staging</SelectItem>
                          <SelectItem value="Production">Production</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="browser" className="text-right">Browser</Label>
                      <Select value={formData.browser} onValueChange={(value) => setFormData({...formData, browser: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Chrome">Chrome</SelectItem>
                          <SelectItem value="Firefox">Firefox</SelectItem>
                          <SelectItem value="Safari">Safari</SelectItem>
                          <SelectItem value="Edge">Edge</SelectItem>
                          <SelectItem value="Mobile Chrome">Mobile Chrome</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="stepsToReproduce" className="text-right">Steps to Reproduce</Label>
                    <Textarea
                      id="stepsToReproduce"
                      value={formData.stepsToReproduce}
                      onChange={(e) => setFormData({...formData, stepsToReproduce: e.target.value})}
                      className="col-span-3"
                      placeholder="1. Step one&#10;2. Step two&#10;3. Step three"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="expectedResult" className="text-right">Expected Result</Label>
                    <Textarea
                      id="expectedResult"
                      value={formData.expectedResult}
                      onChange={(e) => setFormData({...formData, expectedResult: e.target.value})}
                      className="col-span-3"
                      placeholder="What should happen"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="actualResult" className="text-right">Actual Result</Label>
                    <Textarea
                      id="actualResult"
                      value={formData.actualResult}
                      onChange={(e) => setFormData({...formData, actualResult: e.target.value})}
                      className="col-span-3"
                      placeholder="What actually happens"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="assignee" className="text-right">Assign To</Label>
                    <Select value={formData.assignee} onValueChange={(value) => setFormData({...formData, assignee: value})}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="John Doe">John Doe</SelectItem>
                        <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                        <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
                        <SelectItem value="Alex Brown">Alex Brown</SelectItem>
                        <SelectItem value="Sarah Wilson">Sarah Wilson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateBug}>
                    Create Bug Report
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: 'Total Bugs', value: bugs.length, color: 'bg-blue-500' },
                { title: 'Open', value: bugs.filter(b => b.status === 'Open').length, color: 'bg-red-500' },
                { title: 'In Progress', value: bugs.filter(b => b.status === 'In Progress').length, color: 'bg-yellow-500' },
                { title: 'Resolved', value: bugs.filter(b => b.status === 'Resolved').length, color: 'bg-green-500' }
              ].map((stat) => (
                <Card key={stat.title} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center`}>
                        <Bug className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filters and Search */}
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters & Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search bugs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 hover:border-primary/50 transition-colors duration-200"
                    />
                  </div>
                  <Select value={severityFilter} onValueChange={setSeverityFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severity</SelectItem>
                      <SelectItem value="Critical">Critical</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Testing">Testing</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={environmentFilter} onValueChange={setEnvironmentFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Environment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Environments</SelectItem>
                      <SelectItem value="Production">Production</SelectItem>
                      <SelectItem value="Staging">Staging</SelectItem>
                      <SelectItem value="Development">Development</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSeverityFilter('all');
                      setStatusFilter('all');
                      setEnvironmentFilter('all');
                    }}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bug Reports Table */}
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Bug className="w-5 h-5" />
                  Bug Reports ({filteredBugs.length})
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage and track all reported bugs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Bug Details</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assignee</TableHead>
                      <TableHead>Environment</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBugs.map((bug) => (
                      <TableRow key={bug.id} className="hover:bg-accent/50 transition-colors duration-200">
                        <TableCell>
                          <div>
                            <p className="font-medium">{bug.title}</p>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>Reporter: {bug.reporter}</p>
                              <p>Reported: {bug.reportedDate}</p>
                              <p>Browser: {bug.browser}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getSeverityColor(bug.severity)}>
                            {bug.severity}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(bug.status)}>
                            {bug.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{bug.assignee}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="hover:bg-accent transition-colors duration-200">
                            {bug.environment}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>{bug.comments} comments</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Paperclip className="w-3 h-3" />
                              <span>{bug.attachments} attachments</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="hover:scale-105 transition-transform duration-200"
                              onClick={() => openViewDialog(bug)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="hover:scale-105 transition-transform duration-200"
                              onClick={() => openEditDialog(bug)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="hover:scale-105 transition-transform duration-200 text-red-600 hover:text-red-700"
                              onClick={() => handleDeleteBug(bug.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Edit Dialog */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Edit Bug Report</DialogTitle>
                  <DialogDescription>
                    Update the bug report details.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-title" className="text-right">Title</Label>
                    <Input
                      id="edit-title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-description" className="text-right">Description</Label>
                    <Textarea
                      id="edit-description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="edit-severity" className="text-right">Severity</Label>
                      <Select value={formData.severity} onValueChange={(value) => setFormData({...formData, severity: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="edit-priority" className="text-right">Priority</Label>
                      <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="edit-environment" className="text-right">Environment</Label>
                      <Select value={formData.environment} onValueChange={(value) => setFormData({...formData, environment: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Development">Development</SelectItem>
                          <SelectItem value="Staging">Staging</SelectItem>
                          <SelectItem value="Production">Production</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="edit-browser" className="text-right">Browser</Label>
                      <Select value={formData.browser} onValueChange={(value) => setFormData({...formData, browser: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Chrome">Chrome</SelectItem>
                          <SelectItem value="Firefox">Firefox</SelectItem>
                          <SelectItem value="Safari">Safari</SelectItem>
                          <SelectItem value="Edge">Edge</SelectItem>
                          <SelectItem value="Mobile Chrome">Mobile Chrome</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-assignee" className="text-right">Assign To</Label>
                    <Select value={formData.assignee} onValueChange={(value) => setFormData({...formData, assignee: value})}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="John Doe">John Doe</SelectItem>
                        <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                        <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
                        <SelectItem value="Alex Brown">Alex Brown</SelectItem>
                        <SelectItem value="Sarah Wilson">Sarah Wilson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleEditBug}>
                    Update Bug Report
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* View Dialog */}
            <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Bug className="w-5 h-5" />
                    {selectedBug?.title}
                  </DialogTitle>
                  <DialogDescription>
                    Detailed view of the bug report
                  </DialogDescription>
                </DialogHeader>
                {selectedBug && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Bug Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Status:</span>
                            <Badge className={getStatusColor(selectedBug.status)}>
                              {selectedBug.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Severity:</span>
                            <Badge className={getSeverityColor(selectedBug.severity)}>
                              {selectedBug.severity}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Priority:</span>
                            <Badge className={getSeverityColor(selectedBug.priority)}>
                              {selectedBug.priority}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Environment:</span>
                            <span>{selectedBug.environment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Browser:</span>
                            <span>{selectedBug.browser}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Assignment & Timeline</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Reporter:</span>
                            <span>{selectedBug.reporter}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Assignee:</span>
                            <span>{selectedBug.assignee}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Reported Date:</span>
                            <span>{selectedBug.reportedDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Comments:</span>
                            <span>{selectedBug.comments}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Attachments:</span>
                            <span>{selectedBug.attachments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-sm text-muted-foreground bg-accent/30 p-4 rounded-lg">
                        {selectedBug.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Steps to Reproduce</h4>
                      <div className="text-sm bg-accent/30 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap text-muted-foreground">
                          {selectedBug.stepsToReproduce}
                        </pre>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Expected Result</h4>
                        <div className="text-sm bg-green-50 p-4 rounded-lg border border-green-200">
                          <pre className="whitespace-pre-wrap text-green-800">
                            {selectedBug.expectedResult}
                          </pre>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Actual Result</h4>
                        <div className="text-sm bg-red-50 p-4 rounded-lg border border-red-200">
                          <pre className="whitespace-pre-wrap text-red-800">
                            {selectedBug.actualResult}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default BugReportsPage;
