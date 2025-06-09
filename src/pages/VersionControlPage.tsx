
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GitBranch, GitCommit, GitMerge, Calendar } from 'lucide-react';

const VersionControlPage = () => {
  const [branches] = useState([
    {
      id: 1,
      name: 'main',
      lastCommit: 'Fix login validation tests',
      author: 'John Doe',
      date: '2024-01-15',
      status: 'Protected',
      testsPassing: 45,
      testsTotal: 47
    },
    {
      id: 2,
      name: 'feature/user-registration',
      lastCommit: 'Add user registration test cases',
      author: 'Sarah Wilson',
      date: '2024-01-14',
      status: 'Active',
      testsPassing: 23,
      testsTotal: 25
    },
    {
      id: 3,
      name: 'bugfix/payment-integration',
      lastCommit: 'Update payment flow tests',
      author: 'Mike Chen',
      date: '2024-01-13',
      status: 'Ready for merge',
      testsPassing: 18,
      testsTotal: 18
    },
    {
      id: 4,
      name: 'feature/api-v2',
      lastCommit: 'Initial API v2 test structure',
      author: 'Emily Brown',
      date: '2024-01-12',
      status: 'In progress',
      testsPassing: 8,
      testsTotal: 15
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Protected':
        return 'default';
      case 'Ready for merge':
        return 'default';
      case 'Active':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getTestStatus = (passing: number, total: number) => {
    const percentage = (passing / total) * 100;
    if (percentage === 100) return { color: 'text-green-600', status: 'All passing' };
    if (percentage >= 80) return { color: 'text-yellow-600', status: 'Mostly passing' };
    return { color: 'text-red-600', status: 'Some failing' };
  };

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
            <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
              <GitBranch className="w-4 h-4 mr-2" />
              Create Branch
            </Button>
          </header>
          
          <main className="flex-1 p-6">
            <div className="grid gap-6">
              {branches.map((branch) => {
                const testStatus = getTestStatus(branch.testsPassing, branch.testsTotal);
                return (
                  <Card key={branch.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <GitBranch className="w-5 h-5 text-primary" />
                          <CardTitle className="text-foreground">{branch.name}</CardTitle>
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
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
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
                            <p className="text-muted-foreground">Test Status</p>
                            <p className={`font-medium ${testStatus.color}`}>
                              {branch.testsPassing}/{branch.testsTotal} passing
                            </p>
                          </div>
                        </div>
                        
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
                        
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                            Run Tests
                          </Button>
                          {branch.status === 'Ready for merge' && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform duration-200">
                              <GitMerge className="w-4 h-4 mr-2" />
                              Merge
                            </Button>
                          )}
                          <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200">
                            View Changes
                          </Button>
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
    </div>
  );
};

export default VersionControlPage;
