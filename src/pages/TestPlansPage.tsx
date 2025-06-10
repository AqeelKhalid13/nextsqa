
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Plus, Calendar, Users, Target, Edit, Trash2, Eye, Copy, Filter, Search } from 'lucide-react';

interface TestPlan {
  id: number;
  name: string;
  description: string;
  status: string;
  progress: number;
  startDate: string;
  endDate: string;
  testCases: number;
  assignedTesters: number;
  priority: string;
}

const TestPlansPage = () => {
  const { toast } = useToast();
  const [testPlans, setTestPlans] = useState<TestPlan[]>([
    {
      id: 1,
      name: 'Sprint 24 Testing Plan',
      description: 'Comprehensive testing plan for Q1 2024 sprint deliverables',
      status: 'Active',
      progress: 75,
      startDate: '2024-01-15',
      endDate: '2024-01-30',
      testCases: 45,
      assignedTesters: 3,
      priority: 'High'
    },
    {
      id: 2,
      name: 'API Integration Testing',
      description: 'Testing plan for new API endpoints and integrations',
      status: 'Draft',
      progress: 30,
      startDate: '2024-02-01',
      endDate: '2024-02-15',
      testCases: 28,
      assignedTesters: 2,
      priority: 'Medium'
    },
    {
      id: 3,
      name: 'Security Audit Testing',
      description: 'Comprehensive security testing and vulnerability assessment',
      status: 'Completed',
      progress: 100,
      startDate: '2024-01-01',
      endDate: '2024-01-14',
      testCases: 62,
      assignedTesters: 5,
      priority: 'Critical'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<TestPlan | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'Draft',
    startDate: '',
    endDate: '',
    priority: 'Medium',
    assignedTesters: 1
  });

  const filteredPlans = testPlans.filter(plan => {
    const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || plan.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || plan.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleCreatePlan = () => {
    const newPlan: TestPlan = {
      id: testPlans.length + 1,
      name: formData.name,
      description: formData.description,
      status: formData.status,
      progress: 0,
      startDate: formData.startDate,
      endDate: formData.endDate,
      testCases: 0,
      assignedTesters: formData.assignedTesters,
      priority: formData.priority
    };

    setTestPlans([...testPlans, newPlan]);
    setIsCreateDialogOpen(false);
    setFormData({
      name: '',
      description: '',
      status: 'Draft',
      startDate: '',
      endDate: '',
      priority: 'Medium',
      assignedTesters: 1
    });
    
    toast({
      title: "Success",
      description: "Test plan created successfully!",
    });
  };

  const handleEditPlan = () => {
    if (!selectedPlan) return;

    setTestPlans(prev => prev.map(plan => 
      plan.id === selectedPlan.id 
        ? { ...plan, ...formData }
        : plan
    ));
    
    setIsEditDialogOpen(false);
    setSelectedPlan(null);
    
    toast({
      title: "Success",
      description: "Test plan updated successfully!",
    });
  };

  const handleDeletePlan = (planId: number) => {
    setTestPlans(prev => prev.filter(plan => plan.id !== planId));
    
    toast({
      title: "Success",
      description: "Test plan deleted successfully!",
    });
  };

  const handleDuplicatePlan = (plan: TestPlan) => {
    const duplicatedPlan: TestPlan = {
      ...plan,
      id: testPlans.length + 1,
      name: `${plan.name} (Copy)`,
      status: 'Draft',
      progress: 0
    };

    setTestPlans([...testPlans, duplicatedPlan]);
    
    toast({
      title: "Success",
      description: "Test plan duplicated successfully!",
    });
  };

  const openEditDialog = (plan: TestPlan) => {
    setSelectedPlan(plan);
    setFormData({
      name: plan.name,
      description: plan.description,
      status: plan.status,
      startDate: plan.startDate,
      endDate: plan.endDate,
      priority: plan.priority,
      assignedTesters: plan.assignedTesters
    });
    setIsEditDialogOpen(true);
  };

  const openViewDialog = (plan: TestPlan) => {
    setSelectedPlan(plan);
    setIsViewDialogOpen(true);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      default:
        return 'bg-green-100 text-green-800 hover:bg-green-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-blue-500';
      case 'Completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
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
              <h1 className="text-xl font-semibold text-foreground">Test Plans</h1>
              <p className="text-sm text-muted-foreground">Organize and manage your testing strategies</p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Test Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Test Plan</DialogTitle>
                  <DialogDescription>
                    Create a comprehensive testing plan for your project.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
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
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="status" className="text-right">Status</Label>
                      <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="startDate" className="text-right">Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="endDate" className="text-right">End Date</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreatePlan}>
                    Create Plan
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: 'Total Plans', value: testPlans.length, color: 'bg-blue-500' },
                { title: 'Active', value: testPlans.filter(p => p.status === 'Active').length, color: 'bg-green-500' },
                { title: 'Draft', value: testPlans.filter(p => p.status === 'Draft').length, color: 'bg-yellow-500' },
                { title: 'Completed', value: testPlans.filter(p => p.status === 'Completed').length, color: 'bg-purple-500' }
              ].map((stat) => (
                <Card key={stat.title} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center`}>
                        <Target className="w-6 h-6 text-white" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search test plans..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 hover:border-primary/50 transition-colors duration-200"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setStatusFilter('all');
                      setPriorityFilter('all');
                    }}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              {filteredPlans.map((plan) => (
                <Card key={plan.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-foreground">{plan.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge className={getPriorityColor(plan.priority)}>
                          {plan.priority}
                        </Badge>
                        <Badge variant={plan.status === 'Active' ? 'default' : 'secondary'}>
                          {plan.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{plan.description}</p>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground">{plan.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getStatusColor(plan.status)}`}
                          style={{ width: `${plan.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-muted-foreground">Start Date</p>
                            <p className="text-foreground font-medium">{plan.startDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-muted-foreground">End Date</p>
                            <p className="text-foreground font-medium">{plan.endDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-muted-foreground">Test Cases</p>
                            <p className="text-foreground font-medium">{plan.testCases}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-muted-foreground">Testers</p>
                            <p className="text-foreground font-medium">{plan.assignedTesters}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
                          onClick={() => openViewDialog(plan)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="hover:scale-105 transition-transform duration-200"
                          onClick={() => openEditDialog(plan)}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Plan
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-105 transition-transform duration-200"
                          onClick={() => handleDuplicatePlan(plan)}
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Duplicate
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="hover:scale-105 transition-transform duration-200 text-red-600 hover:text-red-700"
                          onClick={() => handleDeletePlan(plan.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Edit Dialog */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Edit Test Plan</DialogTitle>
                  <DialogDescription>
                    Update the test plan details.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-name" className="text-right">Name</Label>
                    <Input
                      id="edit-name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="edit-status" className="text-right">Status</Label>
                      <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="edit-startDate" className="text-right">Start Date</Label>
                      <Input
                        id="edit-startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="edit-endDate" className="text-right">End Date</Label>
                      <Input
                        id="edit-endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleEditPlan}>
                    Update Plan
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* View Dialog */}
            <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    {selectedPlan?.name}
                  </DialogTitle>
                  <DialogDescription>
                    Detailed view of the test plan
                  </DialogDescription>
                </DialogHeader>
                {selectedPlan && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Basic Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Status:</span>
                            <Badge variant={selectedPlan.status === 'Active' ? 'default' : 'secondary'}>
                              {selectedPlan.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Priority:</span>
                            <Badge className={getPriorityColor(selectedPlan.priority)}>
                              {selectedPlan.priority}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Progress:</span>
                            <span>{selectedPlan.progress}%</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Timeline & Resources</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Start Date:</span>
                            <span>{selectedPlan.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">End Date:</span>
                            <span>{selectedPlan.endDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Test Cases:</span>
                            <span>{selectedPlan.testCases}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Assigned Testers:</span>
                            <span>{selectedPlan.assignedTesters}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-sm text-muted-foreground bg-accent/30 p-4 rounded-lg">
                        {selectedPlan.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Progress Overview</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Overall Progress</span>
                          <span>{selectedPlan.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-300 ${getStatusColor(selectedPlan.status)}`}
                            style={{ width: `${selectedPlan.progress}%` }}
                          ></div>
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

export default TestPlansPage;
