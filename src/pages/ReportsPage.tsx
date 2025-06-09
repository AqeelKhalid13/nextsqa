
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Calendar, Share2 } from 'lucide-react';

const ReportsPage = () => {
  const [reports] = useState([
    {
      id: 1,
      name: 'Weekly Test Summary',
      type: 'Summary',
      generatedDate: '2024-01-15',
      status: 'Ready',
      format: 'PDF',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Bug Analysis Report',
      type: 'Analysis',
      generatedDate: '2024-01-14',
      status: 'Ready',
      format: 'Excel',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'Test Coverage Report',
      type: 'Coverage',
      generatedDate: '2024-01-13',
      status: 'Generating',
      format: 'PDF',
      size: '-'
    },
    {
      id: 4,
      name: 'Performance Metrics',
      type: 'Performance',
      generatedDate: '2024-01-12',
      status: 'Ready',
      format: 'CSV',
      size: '856 KB'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready':
        return 'default';
      case 'Generating':
        return 'secondary';
      default:
        return 'outline';
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
              <h1 className="text-xl font-semibold text-foreground">Reports</h1>
              <p className="text-sm text-muted-foreground">Generate and download testing reports</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </header>
          
          <main className="flex-1 p-6">
            <div className="grid gap-6">
              {reports.map((report) => (
                <Card key={report.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <CardTitle className="text-foreground">{report.name}</CardTitle>
                      </div>
                      <Badge variant={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Type</p>
                        <p className="text-foreground font-medium">{report.type}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-muted-foreground">Generated</p>
                          <p className="text-foreground font-medium">{report.generatedDate}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Format</p>
                        <p className="text-foreground font-medium">{report.format}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Size</p>
                        <p className="text-foreground font-medium">{report.size}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
                        disabled={report.status !== 'Ready'}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="hover:scale-105 transition-transform duration-200"
                        disabled={report.status !== 'Ready'}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="hover:scale-105 transition-transform duration-200"
                      >
                        View Details
                      </Button>
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

export default ReportsPage;
