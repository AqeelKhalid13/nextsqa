
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserPlus, Mail, Shield, User } from 'lucide-react';

const TeamManagementPage = () => {
  const [teamMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      role: 'Test Lead',
      status: 'Active',
      joinDate: '2023-01-15',
      testsExecuted: 145,
      bugsFound: 23
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@company.com',
      role: 'Senior Tester',
      status: 'Active',
      joinDate: '2023-03-22',
      testsExecuted: 98,
      bugsFound: 15
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      role: 'Automation Engineer',
      status: 'Active',
      joinDate: '2023-06-10',
      testsExecuted: 76,
      bugsFound: 12
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emily.brown@company.com',
      role: 'Junior Tester',
      status: 'Inactive',
      joinDate: '2023-09-05',
      testsExecuted: 34,
      bugsFound: 8
    }
  ]);

  const getRoleIcon = (role: string) => {
    if (role.includes('Lead')) return <Shield className="w-4 h-4" />;
    return <User className="w-4 h-4" />;
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Test Lead':
        return 'bg-purple-500';
      case 'Senior Tester':
        return 'bg-blue-500';
      case 'Automation Engineer':
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
              <h1 className="text-xl font-semibold text-foreground">Team Management</h1>
              <p className="text-sm text-muted-foreground">Manage your testing team and permissions</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
              <UserPlus className="w-4 h-4 mr-2" />
              Invite Member
            </Button>
          </header>
          
          <main className="flex-1 p-6">
            <div className="grid gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-foreground">{member.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{member.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className={getRoleColor(member.role)}>
                          <div className="flex items-center gap-1">
                            {getRoleIcon(member.role)}
                            {member.role}
                          </div>
                        </Badge>
                        <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Join Date</p>
                        <p className="text-foreground font-medium">{member.joinDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Tests Executed</p>
                        <p className="text-foreground font-medium">{member.testsExecuted}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Bugs Found</p>
                        <p className="text-foreground font-medium">{member.bugsFound}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Performance</p>
                        <p className="text-green-600 font-medium">
                          {((member.bugsFound / member.testsExecuted) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200">
                        Edit Permissions
                      </Button>
                      <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-200">
                        View Profile
                      </Button>
                      {member.status === 'Inactive' && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform duration-200">
                          Reactivate
                        </Button>
                      )}
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

export default TeamManagementPage;
