
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, Users, Target } from 'lucide-react';

const TestPlansPage = () => {
  const [testPlans] = useState([
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-500';
      case 'High':
        return 'bg-orange-500';
      case 'Medium':
        return 'bg-yellow-500';
      default:
        return 'bg-green-500';
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
            <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Create Test Plan
            </Button>
          </header>
          
          <main className="flex-1 p-6">
            <div className="grid gap-6">
              {testPlans.map((plan) => (
                <Card key={plan.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-foreground">{plan.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline" className={getPriorityColor(plan.priority)}>
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
                        <Button size="sm" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200">
                          Edit Plan
                        </Button>
                        <Button size="sm" variant="ghost" className="hover:scale-105 transition-transform duration-200">
                          Duplicate
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

export default TestPlansPage;
