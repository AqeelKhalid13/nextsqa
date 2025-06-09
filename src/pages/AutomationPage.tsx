
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Play, Clock, Settings } from 'lucide-react';

const AutomationPage = () => {
  const [automations] = useState([
    {
      id: 1,
      name: 'Nightly Regression Suite',
      description: 'Automated regression testing that runs every night at 2 AM',
      status: 'Active',
      lastRun: '2024-01-15 02:00 AM',
      nextRun: '2024-01-16 02:00 AM',
      successRate: 95,
      schedule: 'Daily at 2:00 AM'
    },
    {
      id: 2,
      name: 'API Integration Tests',
      description: 'Automated API testing after each deployment',
      status: 'Active',
      lastRun: '2024-01-15 03:30 PM',
      nextRun: 'On deployment',
      successRate: 98,
      schedule: 'On deployment trigger'
    },
    {
      id: 3,
      name: 'Performance Load Tests',
      description: 'Weekly performance and load testing automation',
      status: 'Paused',
      lastRun: '2024-01-08 10:00 AM',
      nextRun: 'Paused',
      successRate: 87,
      schedule: 'Weekly on Mondays'
    },
    {
      id: 4,
      name: 'Security Scan Tests',
      description: 'Automated security vulnerability scanning',
      status: 'Active',
      lastRun: '2024-01-14 06:00 AM',
      nextRun: '2024-01-17 06:00 AM',
      successRate: 92,
      schedule: 'Every 3 days at 6:00 AM'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Paused':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 95) return 'text-green-600';
    if (rate >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

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
            <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
              <Bot className="w-4 h-4 mr-2" />
              Create Automation
            </Button>
          </header>
          
          <main className="flex-1 p-6">
            <div className="grid gap-6">
              {automations.map((automation) => (
                <Card key={automation.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bot className="w-5 h-5 text-primary" />
                        <CardTitle className="text-foreground">{automation.name}</CardTitle>
                      </div>
                      <Badge variant={getStatusColor(automation.status)}>
                        {automation.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{automation.description}</p>
                      
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
                          <p className="text-muted-foreground">Success Rate</p>
                          <p className={`font-medium ${getSuccessRateColor(automation.successRate)}`}>
                            {automation.successRate}%
                          </p>
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
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                          <Play className="w-4 h-4 mr-2" />
                          Run Now
                        </Button>
                        {automation.status === 'Paused' ? (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform duration-200">
                            Resume
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200">
                            Pause
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200">
                          <Settings className="w-4 h-4 mr-2" />
                          Configure
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

export default AutomationPage;
