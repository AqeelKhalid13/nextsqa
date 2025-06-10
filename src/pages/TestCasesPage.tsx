
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
import { Plus, Edit, Trash2, Search, Filter, Eye } from 'lucide-react';
import { TestCaseDialog } from '@/components/test-cases/TestCaseDialog';

const TestCasesPage = () => {
  const [testCases, setTestCases] = useState([
    { 
      id: 1, 
      title: 'User Login Validation', 
      description: 'Verify user can login with valid credentials and error handling for invalid ones', 
      status: 'Active', 
      priority: 'High',
      type: 'Functional',
      assignedTo: 'John Doe',
      createdDate: '2024-01-15',
      lastModified: '2024-01-15',
      estimatedTime: '30 minutes',
      actualTime: '25 minutes',
      tags: ['login', 'authentication'],
      steps: [
        'Navigate to login page',
        'Enter valid username and password',
        'Click login button',
        'Verify successful login',
        'Test invalid credentials',
        'Verify error message display',
        'Test password reset functionality',
        'Verify session timeout'
      ],
      expectedResult: 'User should be able to login with valid credentials and see appropriate error messages for invalid attempts',
      testData: 'Valid: user@test.com/password123, Invalid: wrong@test.com/wrongpass',
      environment: 'Chrome Browser, Windows 10',
      category: 'Authentication'
    },
    { 
      id: 2, 
      title: 'Dashboard Performance Test', 
      description: 'Verify dashboard loads within acceptable time limits and displays correct data', 
      status: 'Active', 
      priority: 'Medium',
      type: 'Performance',
      assignedTo: 'Jane Smith',
      createdDate: '2024-01-14',
      lastModified: '2024-01-14',
      estimatedTime: '45 minutes',
      actualTime: '40 minutes',
      tags: ['performance', 'dashboard'],
      steps: [
        'Login to application',
        'Navigate to dashboard',
        'Measure page load time',
        'Verify all widgets load',
        'Check data accuracy'
      ],
      expectedResult: 'Dashboard should load within 3 seconds and display accurate data',
      testData: 'User with dashboard access privileges',
      environment: 'Chrome Browser, Windows 10',
      category: 'Performance'
    },
    { 
      id: 3, 
      title: 'Form Validation Rules', 
      description: 'Test all form validation rules for user registration form', 
      status: 'Draft', 
      priority: 'Low',
      type: 'Functional',
      assignedTo: 'Mike Johnson',
      createdDate: '2024-01-13',
      lastModified: '2024-01-13',
      estimatedTime: '60 minutes',
      actualTime: '',
      tags: ['validation', 'forms'],
      steps: [
        'Navigate to registration form',
        'Test required field validation',
        'Test email format validation',
        'Test password strength rules',
        'Test phone number format',
        'Submit form with valid data',
        'Verify successful registration'
      ],
      expectedResult: 'Form should validate all fields correctly and prevent submission with invalid data',
      testData: 'Various valid and invalid input combinations',
      environment: 'Multiple browsers',
      category: 'Validation'
    }
  ]);
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCase, setEditingCase] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredTestCases = testCases.filter(testCase => {
    const matchesSearch = testCase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testCase.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testCase.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || testCase.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || testCase.priority === priorityFilter;
    const matchesType = typeFilter === 'all' || testCase.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesType;
  });

  const handleEdit = (testCase) => {
    setEditingCase(testCase);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    setTestCases(testCases.filter(tc => tc.id !== id));
  };

  const handleSave = (testCase) => {
    if (editingCase) {
      setTestCases(testCases.map(tc => tc.id === editingCase.id ? { ...testCase, id: editingCase.id } : tc));
    } else {
      setTestCases([...testCases, { ...testCase, id: Date.now() }]);
    }
    setDialogOpen(false);
    setEditingCase(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Draft': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Inactive': return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800 hover:bg-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'Medium': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Low': return 'bg-green-100 text-green-800 hover:bg-green-200';
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
              <h1 className="text-xl font-semibold text-foreground">Test Cases</h1>
              <p className="text-sm text-muted-foreground">Manage and execute your test cases</p>
            </div>
            <Button 
              onClick={() => setDialogOpen(true)}
              className="hover:scale-105 transition-transform duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Test Case
            </Button>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
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
                      placeholder="Search test cases..."
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
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="Critical">Critical</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Functional">Functional</SelectItem>
                      <SelectItem value="Performance">Performance</SelectItem>
                      <SelectItem value="API">API</SelectItem>
                      <SelectItem value="Security">Security</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setStatusFilter('all');
                      setPriorityFilter('all');
                      setTypeFilter('all');
                    }}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Test Cases Table */}
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">Test Cases ({filteredTestCases.length})</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage and execute all your test cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Created Date</TableHead>
                      <TableHead>Steps</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTestCases.map((testCase) => (
                      <TableRow key={testCase.id} className="hover:bg-accent/50 transition-colors duration-200">
                        <TableCell>
                          <div>
                            <p className="font-medium">{testCase.title}</p>
                            <p className="text-sm text-muted-foreground">{testCase.description}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="hover:bg-accent transition-colors duration-200">
                            {testCase.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(testCase.status)}>
                            {testCase.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(testCase.priority)}>
                            {testCase.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{testCase.assignedTo}</TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{testCase.createdDate}</p>
                            <p className="text-xs text-muted-foreground">{testCase.estimatedTime}</p>
                          </div>
                        </TableCell>
                        <TableCell>{testCase.steps.length}</TableCell>
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
                              onClick={() => handleEdit(testCase)}
                              className="hover:scale-105 transition-transform duration-200"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => handleDelete(testCase.id)}
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
        
        <TestCaseDialog 
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          testCase={editingCase}
          onSave={handleSave}
        />
      </SidebarProvider>
    </div>
  );
};

export default TestCasesPage;
