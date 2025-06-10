
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Download, FileText, Calendar, Share2, Search, Filter, Plus, Eye, Trash2, RefreshCw } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const ReportsPage = () => {
  const { toast } = useToast();
  const [reports, setReports] = useState([
    {
      id: 1,
      name: 'Weekly Test Summary',
      type: 'Summary',
      generatedDate: '2024-01-15',
      status: 'Ready',
      format: 'PDF',
      size: '2.4 MB',
      description: 'Comprehensive weekly testing summary with metrics and insights',
      author: 'John Doe',
      downloads: 45,
      shared: true
    },
    {
      id: 2,
      name: 'Bug Analysis Report',
      type: 'Analysis',
      generatedDate: '2024-01-14',
      status: 'Ready',
      format: 'Excel',
      size: '1.8 MB',
      description: 'Detailed analysis of bug patterns and resolution times',
      author: 'Sarah Wilson',
      downloads: 23,
      shared: false
    },
    {
      id: 3,
      name: 'Test Coverage Report',
      type: 'Coverage',
      generatedDate: '2024-01-13',
      status: 'Generating',
      format: 'PDF',
      size: '-',
      description: 'Code coverage analysis for all test suites',
      author: 'Mike Chen',
      downloads: 0,
      shared: false
    },
    {
      id: 4,
      name: 'Performance Metrics',
      type: 'Performance',
      generatedDate: '2024-01-12',
      status: 'Ready',
      format: 'CSV',
      size: '856 KB',
      description: 'Performance benchmarks and load testing results',
      author: 'Emily Brown',
      downloads: 67,
      shared: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [formatFilter, setFormatFilter] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      type: '',
      format: 'PDF',
      description: ''
    }
  });

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || report.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    const matchesFormat = formatFilter === 'all' || report.format === formatFilter;
    
    return matchesSearch && matchesType && matchesStatus && matchesFormat;
  });

  const handleCreateReport = (data) => {
    const newReport = {
      id: reports.length + 1,
      ...data,
      generatedDate: new Date().toISOString().split('T')[0],
      status: 'Generating',
      size: '-',
      author: 'Current User',
      downloads: 0,
      shared: false
    };
    
    setReports([newReport, ...reports]);
    setIsCreateDialogOpen(false);
    form.reset();
    
    toast({
      title: "Report Created",
      description: "Your report is being generated and will be ready soon.",
    });

    // Simulate report generation
    setTimeout(() => {
      setReports(prev => prev.map(report => 
        report.id === newReport.id 
          ? { ...report, status: 'Ready', size: '1.2 MB' }
          : report
      ));
    }, 3000);
  };

  const handleDownload = (reportId) => {
    const report = reports.find(r => r.id === reportId);
    if (report?.status === 'Ready') {
      setReports(prev => prev.map(r => 
        r.id === reportId ? { ...r, downloads: r.downloads + 1 } : r
      ));
      toast({
        title: "Download Started",
        description: `Downloading ${report.name}...`,
      });
    }
  };

  const handleShare = (reportId) => {
    setReports(prev => prev.map(r => 
      r.id === reportId ? { ...r, shared: !r.shared } : r
    ));
    toast({
      title: "Share Status Updated",
      description: "Report sharing settings have been updated.",
    });
  };

  const handleDelete = (reportId) => {
    setReports(prev => prev.filter(r => r.id !== reportId));
    toast({
      title: "Report Deleted",
      description: "The report has been successfully deleted.",
    });
  };

  const handleRegenerateReport = (reportId) => {
    setReports(prev => prev.map(r => 
      r.id === reportId ? { ...r, status: 'Generating', size: '-' } : r
    ));
    
    toast({
      title: "Regenerating Report",
      description: "The report is being regenerated with latest data.",
    });

    setTimeout(() => {
      setReports(prev => prev.map(report => 
        report.id === reportId 
          ? { ...report, status: 'Ready', size: '1.5 MB', generatedDate: new Date().toISOString().split('T')[0] }
          : report
      ));
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready':
        return 'default';
      case 'Generating':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const reportTypes = ['all', ...new Set(reports.map(r => r.type))];
  const formats = ['all', ...new Set(reports.map(r => r.format))];

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
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                  <Plus className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Generate New Report</DialogTitle>
                  <DialogDescription>Create a new testing report with custom parameters</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleCreateReport)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Report Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter report name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Report Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select report type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Summary">Summary</SelectItem>
                              <SelectItem value="Analysis">Analysis</SelectItem>
                              <SelectItem value="Coverage">Coverage</SelectItem>
                              <SelectItem value="Performance">Performance</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="format"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Format</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select format" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="PDF">PDF</SelectItem>
                              <SelectItem value="Excel">Excel</SelectItem>
                              <SelectItem value="CSV">CSV</SelectItem>
                              <SelectItem value="HTML">HTML</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter report description" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-2 pt-4">
                      <Button type="submit" className="flex-1">Generate Report</Button>
                      <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: 'Total Reports', value: reports.length, color: 'bg-blue-500' },
                { title: 'Ready', value: reports.filter(r => r.status === 'Ready').length, color: 'bg-green-500' },
                { title: 'Generating', value: reports.filter(r => r.status === 'Generating').length, color: 'bg-yellow-500' },
                { title: 'Total Downloads', value: reports.reduce((sum, r) => sum + r.downloads, 0), color: 'bg-purple-500' }
              ].map((stat) => (
                <Card key={stat.title} className="hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filters */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters & Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search reports..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTypes.map(type => (
                        <SelectItem key={type} value={type}>
                          {type === 'all' ? 'All Types' : type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Ready">Ready</SelectItem>
                      <SelectItem value="Generating">Generating</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={formatFilter} onValueChange={setFormatFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Format" />
                    </SelectTrigger>
                    <SelectContent>
                      {formats.map(format => (
                        <SelectItem key={format} value={format}>
                          {format === 'all' ? 'All Formats' : format}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setTypeFilter('all');
                      setStatusFilter('all');
                      setFormatFilter('all');
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reports Grid */}
            <div className="grid gap-6">
              {filteredReports.map((report) => (
                <Card key={report.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <CardTitle className="text-foreground">{report.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{report.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        {report.shared && <Badge variant="outline">Shared</Badge>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm mb-4">
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
                      <div>
                        <p className="text-muted-foreground">Downloads</p>
                        <p className="text-foreground font-medium">{report.downloads}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90"
                        disabled={report.status !== 'Ready'}
                        onClick={() => handleDownload(report.id)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        disabled={report.status !== 'Ready'}
                        onClick={() => handleShare(report.id)}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        {report.shared ? 'Unshare' : 'Share'}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setSelectedReport(report);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleRegenerateReport(report.id)}
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Regenerate
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDelete(report.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>

      {/* View Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedReport?.name}</DialogTitle>
            <DialogDescription>Report Details and Information</DialogDescription>
          </DialogHeader>
          {selectedReport && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Type</h4>
                  <p className="text-muted-foreground">{selectedReport.type}</p>
                </div>
                <div>
                  <h4 className="font-medium">Status</h4>
                  <Badge variant={getStatusColor(selectedReport.status)}>{selectedReport.status}</Badge>
                </div>
                <div>
                  <h4 className="font-medium">Format</h4>
                  <p className="text-muted-foreground">{selectedReport.format}</p>
                </div>
                <div>
                  <h4 className="font-medium">Size</h4>
                  <p className="text-muted-foreground">{selectedReport.size}</p>
                </div>
                <div>
                  <h4 className="font-medium">Author</h4>
                  <p className="text-muted-foreground">{selectedReport.author}</p>
                </div>
                <div>
                  <h4 className="font-medium">Downloads</h4>
                  <p className="text-muted-foreground">{selectedReport.downloads}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Description</h4>
                <p className="text-muted-foreground">{selectedReport.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReportsPage;
