
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TestExecutionChart } from '@/components/dashboard/charts/TestExecutionChart';
import { BugStatusChart } from '@/components/dashboard/charts/BugStatusChart';
import { QualityMetricsChart } from '@/components/dashboard/charts/QualityMetricsChart';
import { TrendingUp, TrendingDown, Target, Clock } from 'lucide-react';

const AnalyticsPage = () => {
  const metrics = [
    {
      title: 'Test Pass Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Target
    },
    {
      title: 'Avg. Execution Time',
      value: '42 min',
      change: '-8.3%',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Bug Detection Rate',
      value: '87.5%',
      change: '+5.2%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Code Coverage',
      value: '89.1%',
      change: '+1.8%',
      trend: 'up',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">Analytics</h1>
              <p className="text-sm text-muted-foreground">Detailed insights and performance metrics</p>
            </div>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <Card key={metric.title} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{metric.title}</p>
                        <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {metric.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          )}
                          <span className={`text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground">Test Execution Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <TestExecutionChart />
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground">Bug Status Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <BugStatusChart />
                </CardContent>
              </Card>
            </div>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">Quality Metrics Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <QualityMetricsChart />
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default AnalyticsPage;
