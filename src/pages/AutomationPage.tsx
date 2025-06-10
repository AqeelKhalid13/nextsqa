
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Bot, Play, Clock, Settings, Search, Filter, Plus, Eye, Trash2, Pause, StopCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const AutomationPage = () => {
  const { toast } = useToast();
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: 'Nightly Regression Suite',
      description: 'Automated regression testing that runs every night at 2 AM',
      status: 'Active',
      lastRun: '2024-01-15 02:00 AM',
      nextRun: '2024-01-16 02:00 AM',
      successRate: 95,
      schedule: 'Daily at 2:00 AM',
      type: 'Regression',
      environment: 'Production',
      totalRuns: 45,
      avgDuration: '2.5 hours'
    },
    {
      id: 2,
      name: 'API Integration Tests',
      description: 'Automated API testing after each deployment',
      status: 'Active',
      lastRun: '2024-01-15 03:30 PM',
      nextRun: 'On deployment',
      successRate: 98,
      schedule: 'On deployment trigger',
      type: 'Integration',
      environment: 'Staging',
      totalRuns: 123,
      avgDuration: '45 minutes'
    },
    {
      id: 3,
      name: 'Performance Load Tests',
      description: 'Weekly performance and load testing automation',
      status: 'Paused',
      lastRun: '2024-01-08 10:00 AM',
      nextRun: 'Paused',
      successRate: 87,
      schedule: 'Weekly on Mondays',
      type: 'Performance',
      environment: 'Staging',
      totalRuns: 12,
      avgDuration: '4 hours'
    },
    {
      id: 4,
      name: 'Security Scan Tests',
      description: 'Automated security vulnerability scanning',
      status: 'Active',
      lastRun: '2024-01-14 06:00 AM',
      nextRun: '2024-01-17 06:00 AM',
      successRate: 92,
      schedule: 'Every 3 days at 6:00 AM',
      type: 'Security',
      environment: 'Production',
      totalRuns: 34,
      avgDuration: '1.5 hours'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [environmentFilter, setEnvironmentFilter] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedAutomation, setSelectedAutomation] = useState(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      type: '',
      environment: 'Staging',
      schedule: ''
    }
  });

  const configForm = useForm();

  const filteredAutomations = automations.filter(automation => {
    const matchesSearch = automation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         automation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || automation.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || automation.status === statusFilter;
    const matchesEnvironment = environmentFilter === 'all' || automation.environment === environmentFilter;
    
    return matchesSearch && matchesType && matchesStatus && matchesEnvironment;
  });

  const handleCreateAutomation = (data) => {
    const newAutomation = {
      id: automations.length + 1,
      ...data,
      status: 'Active',
      lastRun: 'Never',
      nextRun: 'Scheduled',
      successRate: 0,
      totalRuns: 0,
      avgDuration: '0 minutes'
    };
    
    setAutomations([newAutomation, ...automations]);
    setIsCreateDialogOpen(false);
    form.reset();
    
    toast({
      title: "Automation Created",
      description: `${data.name} has been created and scheduled.`,
    });
  };

  const handleRunAutomation = (automationId) => {
    setAutomations(prev => prev.map(automation => 
      automation.id === automationId 
        ? { 
            ...automation, 
            status: 'Running',
            lastRun: new Date().toLocaleString(),
            totalRuns: automation.totalRuns + 1
          }
        : automation
    ));
    
    toast({
      title: "Automation Started",
      description: "The automation test suite is now running.",
    });

    // Simulate automation completion
    setTimeout(() => {
      setAutomations(prev => prev.map(automation => 
        automation.id === automationId 
          ? { ...automation, status: 'Active' }
          : automation
      ));
    }, 5000);
  };

  const handlePauseAutomation = (automationId) => {
    setAutomations(prev => prev.map(automation => 
      automation.id === automationId 
        ? { ...automation, status: automation.status === 'Paused' ? 'Active' : 'Paused' }
        : automation
    ));
    
    const automation = automations.find(a => a.id === automationId);
    toast({
      title: automation?.status === 'Paused' ? "Automation Resumed" : "Automation Paused",
      description: `${automation?.name} has been ${automation?.status === 'Paused' ? 'resumed' : 'paused'}.`,
    });
  };

  const handleStopAutomation = (automationId) => {
    setAutomations(prev => prev.map(automation => 
      automation.id === automationId 
        ? { ...automation, status: 'Stopped' }
        : automation
    ));
    
    toast({
      title: "Automation Stopped",
      description: "The automation has been stopped.",
    });
  };

  const handleDeleteAutomation = (automationId) => {
    setAutomations(prev => prev.filter(automation => automation.id !== automationId));
    
    toast({
      title: "Automation Deleted",
      description: "The automation has been successfully deleted.",
    });
  };

  const handleConfigureAutomation = (data) => {
    setAutomations(prev => prev.map(automation => 
      automation.id === selectedAutomation.id ? { ...automation, ...data } : automation
    ));
    setIsConfigDialogOpen(false);
    configForm.reset();
    
    toast({
      title: "Configuration Updated",
      description: "Automation configuration has been updated.",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Running':
        return 'default';
      case 'Paused':
        return 'secondary';
      case 'Stopped':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getSuccessRateColor = (rate) => {
    if (rate >= 95) return 'text-green-600';
    if (rate >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const types = ['all', ...new Set(automations.map(a => a.type))];
  const environments = ['all', ...new Set(automations.map(a => a.environment))];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">Automation</h1>
              <p className="text-sm text-muted-foreground">Manage automated testing schedules and workflows</p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Automation
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Automation</DialogTitle>
                  <DialogDescription>Set up a new automated testing workflow</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleCreateAutomation)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Automation Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter automation name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter description" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select automation type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Regression">Regression</SelectItem>
                              <SelectItem value="Integration">Integration</SelectItem>
                              <SelectItem value="Performance">Performance</SelectItem>
                              <SelectItem value="Security">Security</SelectItem>
                              <SelectItem value="Unit">Unit</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="environment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Environment</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select environment" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Development">Development</SelectItem>
                              <SelectItem value="Staging">Staging</SelectItem>
                              <SelectItem value="Production">Production</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="schedule"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Schedule</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Daily at 2:00 AM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-2 pt-4">
                      <Button type="submit" className="flex-1">Create Automation</Button>
                      <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: 'Total Automations', value: automations.length, color: 'bg-blue-500' },
                { title: 'Active', value: automations.filter(a => a.status === 'Active').length, color: 'bg-green-500' },
                { title: 'Paused', value: automations.filter(a => a.status === 'Paused').length, color: 'bg-yellow-500' },
                { title: 'Avg Success Rate', value: `${Math.round(automations.reduce((sum, a) => sum + a.successRate, 0) / automations.length)}%`, color: 'bg-purple-500' }
              ].map((stat) => (
                <Card key={stat.title} className="hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filters */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters & Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search automations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map(type => (
                        <SelectItem key={type} value={type}>
                          {type === 'all' ? 'All Types' : type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Paused">Paused</SelectItem>
                      <SelectItem value="Running">Running</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={environmentFilter} onValueChange={setEnvironmentFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Environment" />
                    </SelectTrigger>
                    <SelectContent>
                      {environments.map(env => (
                        <SelectItem key={env} value={env}>
                          {env === 'all' ? 'All Environments' : env}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setTypeFilter('all');
                      setStatusFilter('all');
                      setEnvironmentFilter('all');
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Automations Grid */}
            <div className="grid gap-6">
              {filteredAutomations.map((automation) => (
                <Card key={automation.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bot className="w-5 h-5 text-primary" />
                        <div>
                          <CardTitle className="text-foreground">{automation.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{automation.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{automation.type}</Badge>
                        <Badge variant={getStatusColor(automation.status)}>
                          {automation.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-muted-foreground">Schedule</p>
                            <p className="text-foreground font-medium">{automation.schedule}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Run</p>
                          <p className="text-foreground font-medium">{automation.lastRun}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Next Run</p>
                          <p className="text-foreground font-medium">{automation.nextRun}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Environment</p>
                          <p className="text-foreground font-medium">{automation.environment}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Success Rate</p>
                          <p className={`font-medium ${getSuccessRateColor(automation.successRate)}`}>
                            {automation.successRate}%
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Total Runs</p>
                          <p className="text-foreground font-medium">{automation.totalRuns}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Avg Duration</p>
                          <p className="text-foreground font-medium">{automation.avgDuration}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Success Rate</span>
                        <span className="text-foreground">{automation.successRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            automation.successRate >= 95 ? 'bg-green-500' : 
                            automation.successRate >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${automation.successRate}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex gap-2 pt-2 flex-wrap">
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => handleRunAutomation(automation.id)}
                          disabled={automation.status === 'Running'}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Run Now
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handlePauseAutomation(automation.id)}
                        >
                          <Pause className="w-4 h-4 mr-2" />
                          {automation.status === 'Paused' ? 'Resume' : 'Pause'}
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleStopAutomation(automation.id)}
                          disabled={automation.status !== 'Running'}
                        >
                          <StopCircle className="w-4 h-4 mr-2" />
                          Stop
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            setSelectedAutomation(automation);
                            setIsViewDialogOpen(true);
                          }}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            setSelectedAutomation(automation);
                            configForm.reset(automation);
                            setIsConfigDialogOpen(true);
                          }}
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Configure
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleDeleteAutomation(automation.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>

      {/* View Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedAutomation?.name}</DialogTitle>
            <DialogDescription>Automation details and execution history</DialogDescription>
          </DialogHeader>
          {selectedAutomation && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Type</h4>
                  <p className="text-muted-foreground">{selectedAutomation.type}</p>
                </div>
                <div>
                  <h4 className="font-medium">Status</h4>
                  <Badge variant={getStatusColor(selectedAutomation.status)}>{selectedAutomation.status}</Badge>
                </div>
                <div>
                  <h4 className="font-medium">Environment</h4>
                  <p className="text-muted-foreground">{selectedAutomation.environment}</p>
                </div>
                <div>
                  <h4 className="font-medium">Schedule</h4>
                  <p className="text-muted-foreground">{selectedAutomation.schedule}</p>
                </div>
                <div>
                  <h4 className="font-medium">Success Rate</h4>
                  <p className={`font-medium ${getSuccessRateColor(selectedAutomation.successRate)}`}>
                    {selectedAutomation.successRate}%
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Total Runs</h4>
                  <p className="text-muted-foreground">{selectedAutomation.totalRuns}</p>
                </div>
                <div>
                  <h4 className="font-medium">Average Duration</h4>
                  <p className="text-muted-foreground">{selectedAutomation.avgDuration}</p>
                </div>
                <div>
                  <h4 className="font-medium">Last Run</h4>
                  <p className="text-muted-foreground">{selectedAutomation.lastRun}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Description</h4>
                <p className="text-muted-foreground">{selectedAutomation.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Configure Dialog */}
      <Dialog open={isConfigDialogOpen} onOpenChange={setIsConfigDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configure Automation</DialogTitle>
            <DialogDescription>Update automation settings and schedule</DialogDescription>
          </DialogHeader>
          <Form {...configForm}>
            <form onSubmit={configForm.handleSubmit(handleConfigureAutomation)} className="space-y-4">
              <FormField
                control={configForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={configForm.control}
                name="schedule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Schedule</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={configForm.control}
                name="environment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Environment</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Development">Development</SelectItem>
                        <SelectItem value="Staging">Staging</SelectItem>
                        <SelectItem value="Production">Production</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2 pt-4">
                <Button type="submit" className="flex-1">Update Configuration</Button>
                <Button type="button" variant="outline" onClick={() => setIsConfigDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AutomationPage;
