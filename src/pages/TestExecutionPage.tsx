
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Square, Clock, CheckCircle, XCircle } from 'lucide-react';

const TestExecutionPage = () => {
  const [executions] = useState([
    {
      id: 1,
      name: 'Login Functionality Test Suite',
      status: 'Running',
      progress: 65,
      startTime: '2024-01-15 10:30 AM',
      estimatedCompletion: '2024-01-15 11:45 AM',
      passed: 8,
      failed: 2,
      total: 15
    },
    {
      id: 2,
      name: 'API Integration Tests',
      status: 'Completed',
      progress: 100,
      startTime: '2024-01-15 09:00 AM',
      estimatedCompletion: '2024-01-15 10:15 AM',
      passed: 12,
      failed: 0,
      total: 12
    },
    {
      id: 3,
      name: 'UI Regression Tests',
      status: 'Pending',
      progress: 0,
      startTime: '-',
      estimatedCompletion: '-',
      passed: 0,
      failed: 0,
      total: 25
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Running':
        return <Play className="w-4 h-4 text-blue-500" />;
      case 'Completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Failed':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running':
        return 'bg-blue-500';
      case 'Completed':
        return 'bg-green-500';
      case 'Failed':
        return 'bg-red-500';
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
              <h1 className="text-xl font-semibold text-foreground">Test Execution</h1>
              <p className="text-sm text-muted-foreground">Monitor and manage test execution sessions</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
              Start New Execution
            </Button>
          </header>
          
          <main className="flex-1 p-6">
            <div className="grid gap-6">
              {executions.map((execution) => (
                <Card key={execution.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(execution.status)}
                        <CardTitle className="text-foreground">{execution.name}</CardTitle>
                      </div>
                      <Badge variant={execution.status === 'Completed' ? 'default' : 'secondary'}>
                        {execution.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground">{execution.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getStatusColor(execution.status)}`}
                          style={{ width: `${execution.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Start Time</p>
                          <p className="text-foreground font-medium">{execution.startTime}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Est. Completion</p>
                          <p className="text-foreground font-medium">{execution.estimatedCompletion}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Passed</p>
                          <p className="text-green-600 font-medium">{execution.passed}/{execution.total}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Failed</p>
                          <p className="text-red-600 font-medium">{execution.failed}/{execution.total}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        {execution.status === 'Running' && (
                          <>
                            <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200">
                              <Pause className="w-4 h-4 mr-2" />
                              Pause
                            </Button>
                            <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200">
                              <Square className="w-4 h-4 mr-2" />
                              Stop
                            </Button>
                          </>
                        )}
                        {execution.status === 'Pending' && (
                          <Button size="sm" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                            <Play className="w-4 h-4 mr-2" />
                            Start
                          </Button>
                        )}
                        <Button size="sm" variant="ghost" className="hover:scale-105 transition-transform duration-200">
                          View Details
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
    </div>
  );
};

export default TestExecutionPage;
