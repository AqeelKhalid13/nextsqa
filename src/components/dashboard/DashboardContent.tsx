
import React from 'react';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TestExecutionChart } from './charts/TestExecutionChart';
import { BugStatusChart } from './charts/BugStatusChart';
import { QualityMetricsChart } from './charts/QualityMetricsChart';
import { DashboardStats } from './DashboardStats';

export function DashboardContent() {
  return (
    <SidebarInset className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
        <SidebarTrigger className="text-foreground" />
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Overview of your testing activities</p>
        </div>
      </header>
      
      <main className="flex-1 p-6 space-y-6">
        {/* Stats Cards */}
        <DashboardStats />
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Test Execution Overview</CardTitle>
              <CardDescription className="text-muted-foreground">
                Weekly test execution trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TestExecutionChart />
            </CardContent>
          </Card>
          
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Bug Status Distribution</CardTitle>
              <CardDescription className="text-muted-foreground">
                Current bug status breakdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BugStatusChart />
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Quality Metrics</CardTitle>
            <CardDescription className="text-muted-foreground">
              Monthly quality trends and metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <QualityMetricsChart />
          </CardContent>
        </Card>
      </main>
    </SidebarInset>
  );
}
