
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
import { GitBranch, GitCommit, GitMerge, Calendar, Search, Filter, Plus, Eye, Trash2, RefreshCw } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const VersionControlPage = () => {
  const { toast } = useToast();
  const [branches, setBranches] = useState([
    {
      id: 1,
      name: 'main',
      lastCommit: 'Fix login validation tests',
      author: 'John Doe',
      date: '2024-01-15',
      status: 'Protected',
      testsPassing: 45,
      testsTotal: 47,
      commits: 156,
      mergedPRs: 23,
      description: 'Main production branch with stable releases'
    },
    {
      id: 2,
      name: 'feature/user-registration',
      lastCommit: 'Add user registration test cases',
      author: 'Sarah Wilson',
      date: '2024-01-14',
      status: 'Active',
      testsPassing: 23,
      testsTotal: 25,
      commits: 8,
      mergedPRs: 0,
      description: 'User registration feature development and testing'
    },
    {
      id: 3,
      name: 'bugfix/payment-integration',
      lastCommit: 'Update payment flow tests',
      author: 'Mike Chen',
      date: '2024-01-13',
      status: 'Ready for merge',
      testsPassing: 18,
      testsTotal: 18,
      commits: 5,
      mergedPRs: 0,
      description: 'Payment integration bug fixes and test updates'
    },
    {
      id: 4,
      name: 'feature/api-v2',
      lastCommit: 'Initial API v2 test structure',
      author: 'Emily Brown',
      date: '2024-01-12',
      status: 'In progress',
      testsPassing: 8,
      testsTotal: 15,
      commits: 12,
      mergedPRs: 0,
      description: 'API version 2 development with comprehensive testing'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [authorFilter, setAuthorFilter] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      baseBranch: 'main',
      description: ''
    }
  });

  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || branch.status === statusFilter;
    const matchesAuthor = authorFilter === 'all' || branch.author === authorFilter;
    
    return matchesSearch && matchesStatus && matchesAuthor;
  });

  const handleCreateBranch = (data) => {
    const newBranch = {
      id: branches.length + 1,
      ...data,
      lastCommit: 'Initial commit',
      author: 'Current User',
      date: new Date().toISOString().split('T')[0],
      status: 'Active',
      testsPassing: 0,
      testsTotal: 0,
      commits: 1,
      mergedPRs: 0
    };
    
    setBranches([newBranch, ...branches]);
    setIsCreateDialogOpen(false);
    form.reset();
    
    toast({
      title: "Branch Created",
      description: `Branch '${data.name}' has been created successfully.`,
    });
  };

  const handleRunTests = (branchId) => {
    setBranches(prev => prev.map(branch => 
      branch.id === branchId 
        ? { ...branch, testsPassing: branch.testsTotal, status: branch.testsPassing === branch.testsTotal ? 'Ready for merge' : branch.status }
        : branch
    ));
    
    toast({
      title: "Tests Running",
      description: "Test execution started for the branch.",
    });
  };

  const handleMergeBranch = (branchId) => {
    const branch = branches.find(b => b.id === branchId);
    if (branch?.status === 'Ready for merge') {
      setBranches(prev => prev.map(b => 
        b.id === branchId ? { ...b, status: 'Merged', mergedPRs: b.mergedPRs + 1 } : b
      ));
      
      toast({
        title: "Branch Merged",
        description: `Branch '${branch.name}' has been merged successfully.`,
      });
    }
  };

  const handleDeleteBranch = (branchId) => {
    const branch = branches.find(b => b.id === branchId);
    if (branch?.name !== 'main') {
      setBranches(prev => prev.filter(b => b.id !== branchId));
      
      toast({
        title: "Branch Deleted",
        description: `Branch '${branch.name}' has been deleted.`,
      });
    } else {
      toast({
        title: "Cannot Delete",
        description: "Main branch cannot be deleted.",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Protected':
        return 'default';
      case 'Ready for merge':
        return 'default';
      case 'Active':
        return 'secondary';
      case 'Merged':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getTestStatus = (passing, total) => {
    if (total === 0) return { color: 'text-gray-500', status: 'No tests' };
    const percentage = (passing / total) * 100;
    if (percentage === 100) return { color: 'text-green-600', status: 'All passing' };
    if (percentage >= 80) return { color: 'text-yellow-600', status: 'Mostly passing' };
    return { color: 'text-red-600', status: 'Some failing' };
  };

  const statuses = ['all', ...new Set(branches.map(b => b.status))];
  const authors = ['all', ...new Set(branches.map(b => b.author))];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">Version Control</h1>
              <p className="text-sm text-muted-foreground">Manage test versions and branch testing</p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Branch
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Branch</DialogTitle>
                  <DialogDescription>Create a new branch for feature development or testing</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleCreateBranch)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Branch Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., feature/new-functionality" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="baseBranch"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Base Branch</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select base branch" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {branches.map(branch => (
                                <SelectItem key={branch.id} value={branch.name}>
                                  {branch.name}
                                </SelectItem>
                              ))}
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
                            <Input placeholder="Brief description of the branch purpose" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-2 pt-4">
                      <Button type="submit" className="flex-1">Create Branch</Button>
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
                { title: 'Total Branches', value: branches.length, color: 'bg-blue-500' },
                { title: 'Active', value: branches.filter(b => b.status === 'Active').length, color: 'bg-green-500' },
                { title: 'Ready to Merge', value: branches.filter(b => b.status === 'Ready for merge').length, color: 'bg-yellow-500' },
                { title: 'Total Commits', value: branches.reduce((sum, b) => sum + b.commits, 0), color: 'bg-purple-500' }
              ].map((stat) => (
                <Card key={stat.title} className="hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                        <GitBranch className="w-5 h-5 text-white" />
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search branches..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status === 'all' ? 'All Status' : status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={authorFilter} onValueChange={setAuthorFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Author" />
                    </SelectTrigger>
                    <SelectContent>
                      {authors.map(author => (
                        <SelectItem key={author} value={author}>
                          {author === 'all' ? 'All Authors' : author}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setStatusFilter('all');
                      setAuthorFilter('all');
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Branches Grid */}
            <div className="grid gap-6">
              {filteredBranches.map((branch) => {
                const testStatus = getTestStatus(branch.testsPassing, branch.testsTotal);
                return (
                  <Card key={branch.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <GitBranch className="w-5 h-5 text-primary" />
                          <div>
                            <CardTitle className="text-foreground">{branch.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{branch.description}</p>
                          </div>
                        </div>
                        <Badge variant={getStatusColor(branch.status)}>
                          {branch.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                          <GitCommit className="w-4 h-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{branch.lastCommit}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Author</p>
                            <p className="text-foreground font-medium">{branch.author}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Last Update</p>
                              <p className="text-foreground font-medium">{branch.date}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Commits</p>
                            <p className="text-foreground font-medium">{branch.commits}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Test Status</p>
                            <p className={`font-medium ${testStatus.color}`}>
                              {branch.testsPassing}/{branch.testsTotal} passing
                            </p>
                          </div>
                        </div>
                        
                        {branch.testsTotal > 0 && (
                          <>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Test Progress</span>
                              <span className="text-foreground">
                                {((branch.testsPassing / branch.testsTotal) * 100).toFixed(0)}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  branch.testsPassing === branch.testsTotal ? 'bg-green-500' : 'bg-yellow-500'
                                }`}
                                style={{ width: `${(branch.testsPassing / branch.testsTotal) * 100}%` }}
                              ></div>
                            </div>
                          </>
                        )}
                        
                        <div className="flex gap-2 pt-2 flex-wrap">
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => handleRunTests(branch.id)}
                          >
                            Run Tests
                          </Button>
                          {branch.status === 'Ready for merge' && (
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleMergeBranch(branch.id)}
                            >
                              <GitMerge className="w-4 h-4 mr-2" />
                              Merge
                            </Button>
                          )}
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              setSelectedBranch(branch);
                              setIsViewDialogOpen(true);
                            }}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          {branch.name !== 'main' && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleDeleteBranch(branch.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>

      {/* View Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedBranch?.name}</DialogTitle>
            <DialogDescription>Branch details and commit history</DialogDescription>
          </DialogHeader>
          {selectedBranch && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Status</h4>
                  <Badge variant={getStatusColor(selectedBranch.status)}>{selectedBranch.status}</Badge>
                </div>
                <div>
                  <h4 className="font-medium">Author</h4>
                  <p className="text-muted-foreground">{selectedBranch.author}</p>
                </div>
                <div>
                  <h4 className="font-medium">Last Update</h4>
                  <p className="text-muted-foreground">{selectedBranch.date}</p>
                </div>
                <div>
                  <h4 className="font-medium">Commits</h4>
                  <p className="text-muted-foreground">{selectedBranch.commits}</p>
                </div>
                <div>
                  <h4 className="font-medium">Tests</h4>
                  <p className="text-muted-foreground">
                    {selectedBranch.testsPassing}/{selectedBranch.testsTotal} passing
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Merged PRs</h4>
                  <p className="text-muted-foreground">{selectedBranch.mergedPRs}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Description</h4>
                <p className="text-muted-foreground">{selectedBranch.description}</p>
              </div>
              <div>
                <h4 className="font-medium">Last Commit</h4>
                <p className="text-muted-foreground">{selectedBranch.lastCommit}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VersionControlPage;
