
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QualityMetricsChart } from '@/components/dashboard/charts/QualityMetricsChart';
import { Target, TrendingUp, Shield, Award } from 'lucide-react';

const QualityMetricsPage = () => {
  const qualityMetrics = [
    {
      title: 'Defect Density',
      value: '0.12',
      unit: 'defects/KLOC',
      target: '< 0.15',
      status: 'good',
      icon: Target
    },
    {
      title: 'Test Coverage',
      value: '89.1%',
      unit: '',
      target: '> 85%',
      status: 'good',
      icon: Shield
    },
    {
      title: 'Mean Time to Resolution',
      value: '2.3',
      unit: 'days',
      target: '< 3 days',
      status: 'good',
      icon: TrendingUp
    },
    {
      title: 'Quality Score',
      value: '92',
      unit: '/100',
      target: '> 90',
      status: 'excellent',
      icon: Award
    }
  ];

  const detailedMetrics = [
    {
      category: 'Testing Efficiency',
      metrics: [
        { name: 'Test Execution Rate', value: '95.2%', trend: 'up' },
        { name: 'Test Case Pass Rate', value: '91.8%', trend: 'up' },
        { name: 'Automation Coverage', value: '78.5%', trend: 'up' },
        { name: 'Test Maintenance Effort', value: '12%', trend: 'down' }
      ]
    },
    {
      category: 'Defect Management',
      metrics: [
        { name: 'Critical Bugs', value: '2', trend: 'down' },
        { name: 'Bug Resolution Time', value: '1.8 days', trend: 'down' },
        { name: 'Reopened Issues', value: '5%', trend: 'down' },
        { name: 'Escaped Defects', value: '3', trend: 'stable' }
      ]
    },
    {
      category: 'Code Quality',
      metrics: [
        { name: 'Code Coverage', value: '87.3%', trend: 'up' },
        { name: 'Cyclomatic Complexity', value: '4.2', trend: 'stable' },
        { name: 'Technical Debt', value: '18 hours', trend: 'down' },
        { name: 'Security Score', value: '94/100', trend: 'up' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'border-green-500 bg-green-50';
      case 'good':
        return 'border-blue-500 bg-blue-50';
      case 'warning':
        return 'border-yellow-500 bg-yellow-50';
      default:
        return 'border-red-500 bg-red-50';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
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
              <h1 className="text-xl font-semibold text-foreground">Quality Metrics</h1>
              <p className="text-sm text-muted-foreground">Monitor and track quality indicators</p>
            </div>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Key Quality Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityMetrics.map((metric) => (
                <Card key={metric.title} className={`border-2 hover:shadow-lg hover:scale-105 transition-all duration-300 ${getStatusColor(metric.status)}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{metric.title}</p>
                        <p className="text-2xl font-bold text-foreground">
                          {metric.value}
                          <span className="text-sm font-normal text-muted-foreground ml-1">
                            {metric.unit}
                          </span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Target: {metric.target}
                        </p>
                      </div>
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quality Metrics Chart */}
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">Quality Trends Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <QualityMetricsChart />
              </CardContent>
            </Card>

            {/* Detailed Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {detailedMetrics.map((category) => (
                <Card key={category.category} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.metrics.map((metric) => (
                        <div key={metric.name} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-foreground">{metric.name}</p>
                            <p className="text-lg font-bold text-foreground">{metric.value}</p>
                          </div>
                          {getTrendIcon(metric.trend)}
                        </div>
                      ))}
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

export default QualityMetricsPage;
