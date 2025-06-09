
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { TestCaseDialog } from '@/components/test-cases/TestCaseDialog';

const TestCasesPage = () => {
  const [testCases, setTestCases] = useState([
    { id: 1, title: 'Login Functionality Test', description: 'Test user login with valid credentials', status: 'Active', priority: 'High' },
    { id: 2, title: 'Dashboard Load Test', description: 'Verify dashboard loads correctly', status: 'Active', priority: 'Medium' },
    { id: 3, title: 'Form Validation Test', description: 'Test form validation rules', status: 'Draft', priority: 'Low' },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCase, setEditingCase] = useState(null);

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

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">Test Cases</h1>
              <p className="text-sm text-muted-foreground">Manage your test cases</p>
            </div>
            <Button 
              onClick={() => setDialogOpen(true)}
              className="hover:scale-105 transition-transform duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Test Case
            </Button>
          </header>
          
          <main className="flex-1 p-6">
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">Test Cases</CardTitle>
                <CardDescription className="text-muted-foreground">
                  All your test cases in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {testCases.map((testCase) => (
                      <TableRow key={testCase.id} className="hover:bg-accent/50 transition-colors duration-200">
                        <TableCell className="font-medium">{testCase.title}</TableCell>
                        <TableCell>{testCase.description}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            testCase.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {testCase.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            testCase.priority === 'High' ? 'bg-red-100 text-red-800' : 
                            testCase.priority === 'Medium' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {testCase.priority}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
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
