
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Bug, Search, Filter, Eye, MessageSquare } from 'lucide-react';

const BugReportsPage = () => {
  const [bugs, setBugs] = useState([
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
      attachments: 2
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
      attachments: 1
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
      attachments: 0
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
      attachments: 3
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
      attachments: 5
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [environmentFilter, setEnvironmentFilter] = useState('all');

  const filteredBugs = bugs.filter(bug => {
    const matchesSearch = bug.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bug.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bug.reporter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || bug.severity === severityFilter;
    const matchesStatus = statusFilter === 'all' || bug.status === statusFilter;
    const matchesEnvironment = environmentFilter === 'all' || bug.environment === environmentFilter;
    
    return matchesSearch && matchesSeverity && matchesStatus && matchesEnvironment;
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800 hover:bg-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Low': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getStatusColor = (status) => {
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
            <Button className="hover:scale-105 transition-transform duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Report Bug
            </Button>
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
                            <div className="text-muted-foreground">
                              {bug.attachments} attachments
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="hover:scale-105 transition-transform duration-200"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="hover:scale-105 transition-transform duration-200"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="hover:scale-105 transition-transform duration-200 text-red-600 hover:text-red-700"
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
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default BugReportsPage;
