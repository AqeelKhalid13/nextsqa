
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Bug } from 'lucide-react';

const BugReportsPage = () => {
  const [bugs] = useState([
    { 
      id: 1, 
      title: 'Login button not responsive', 
      severity: 'High', 
      status: 'Open', 
      assignee: 'John Doe',
      reportedDate: '2024-01-15'
    },
    { 
      id: 2, 
      title: 'Form validation error', 
      severity: 'Medium', 
      status: 'In Progress', 
      assignee: 'Jane Smith',
      reportedDate: '2024-01-14'
    },
    { 
      id: 3, 
      title: 'Dashboard loading slow', 
      severity: 'Low', 
      status: 'Resolved', 
      assignee: 'Mike Johnson',
      reportedDate: '2024-01-13'
    }
  ]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
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
          
          <main className="flex-1 p-6">
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Bug className="w-5 h-5" />
                  All Bug Reports
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage and track all reported bugs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assignee</TableHead>
                      <TableHead>Reported Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bugs.map((bug) => (
                      <TableRow key={bug.id} className="hover:bg-accent/50 transition-colors duration-200">
                        <TableCell className="font-medium">{bug.title}</TableCell>
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
                        <TableCell>{bug.reportedDate}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
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
