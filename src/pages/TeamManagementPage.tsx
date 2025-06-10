
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { UserPlus, Mail, Shield, User, Search, Filter, Edit, Trash2, Eye, Settings } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const TeamManagementPage = () => {
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      role: 'Test Lead',
      status: 'Active',
      joinDate: '2023-01-15',
      testsExecuted: 145,
      bugsFound: 23,
      department: 'QA',
      permissions: ['read', 'write', 'admin'],
      lastActive: '2024-01-15 14:30'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@company.com',
      role: 'Senior Tester',
      status: 'Active',
      joinDate: '2023-03-22',
      testsExecuted: 98,
      bugsFound: 15,
      department: 'QA',
      permissions: ['read', 'write'],
      lastActive: '2024-01-15 16:45'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      role: 'Automation Engineer',
      status: 'Active',
      joinDate: '2023-06-10',
      testsExecuted: 76,
      bugsFound: 12,
      department: 'Engineering',
      permissions: ['read', 'write'],
      lastActive: '2024-01-15 12:20'
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emily.brown@company.com',
      role: 'Junior Tester',
      status: 'Inactive',
      joinDate: '2023-09-05',
      testsExecuted: 34,
      bugsFound: 8,
      department: 'QA',
      permissions: ['read'],
      lastActive: '2024-01-10 09:15'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      role: '',
      department: 'QA',
      permissions: []
    }
  });

  const editForm = useForm();

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || member.department === departmentFilter;
    
    return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
  });

  const handleInviteMember = (data) => {
    const newMember = {
      id: teamMembers.length + 1,
      ...data,
      status: 'Active',
      joinDate: new Date().toISOString().split('T')[0],
      testsExecuted: 0,
      bugsFound: 0,
      permissions: data.permissions || ['read'],
      lastActive: new Date().toISOString().slice(0, 16).replace('T', ' ')
    };
    
    setTeamMembers([...teamMembers, newMember]);
    setIsInviteDialogOpen(false);
    form.reset();
    
    toast({
      title: "Member Invited",
      description: `Invitation sent to ${data.email}`,
    });
  };

  const handleEditMember = (data) => {
    setTeamMembers(prev => prev.map(member => 
      member.id === selectedMember.id ? { ...member, ...data } : member
    ));
    setIsEditDialogOpen(false);
    editForm.reset();
    
    toast({
      title: "Member Updated",
      description: "Member details have been updated successfully.",
    });
  };

  const handleStatusToggle = (memberId) => {
    setTeamMembers(prev => prev.map(member => 
      member.id === memberId 
        ? { ...member, status: member.status === 'Active' ? 'Inactive' : 'Active' }
        : member
    ));
    
    toast({
      title: "Status Updated",
      description: "Member status has been updated.",
    });
  };

  const handleDeleteMember = (memberId) => {
    setTeamMembers(prev => prev.filter(member => member.id !== memberId));
    
    toast({
      title: "Member Removed",
      description: "Team member has been removed from the project.",
    });
  };

  const getRoleIcon = (role) => {
    if (role.includes('Lead')) return <Shield className="w-4 h-4" />;
    return <User className="w-4 h-4" />;
  };

  const getRoleColor = (role) => {
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

  const roles = ['all', ...new Set(teamMembers.map(m => m.role))];
  const departments = ['all', ...new Set(teamMembers.map(m => m.department))];

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
            <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Invite Member
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite Team Member</DialogTitle>
                  <DialogDescription>Send an invitation to join your testing team</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleInviteMember)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Test Lead">Test Lead</SelectItem>
                              <SelectItem value="Senior Tester">Senior Tester</SelectItem>
                              <SelectItem value="Automation Engineer">Automation Engineer</SelectItem>
                              <SelectItem value="Junior Tester">Junior Tester</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="QA">QA</SelectItem>
                              <SelectItem value="Engineering">Engineering</SelectItem>
                              <SelectItem value="Product">Product</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-2 pt-4">
                      <Button type="submit" className="flex-1">Send Invitation</Button>
                      <Button type="button" variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
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
                { title: 'Total Members', value: teamMembers.length, color: 'bg-blue-500' },
                { title: 'Active', value: teamMembers.filter(m => m.status === 'Active').length, color: 'bg-green-500' },
                { title: 'Inactive', value: teamMembers.filter(m => m.status === 'Inactive').length, color: 'bg-red-500' },
                { title: 'Total Tests', value: teamMembers.reduce((sum, m) => sum + m.testsExecuted, 0), color: 'bg-purple-500' }
              ].map((stat) => (
                <Card key={stat.title} className="hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                        <User className="w-5 h-5 text-white" />
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
                      placeholder="Search members..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map(role => (
                        <SelectItem key={role} value={role}>
                          {role === 'all' ? 'All Roles' : role}
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
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map(dept => (
                        <SelectItem key={dept} value={dept}>
                          {dept === 'all' ? 'All Departments' : dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setRoleFilter('all');
                      setStatusFilter('all');
                      setDepartmentFilter('all');
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Members Grid */}
            <div className="grid gap-6">
              {filteredMembers.map((member) => (
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
                          <div className="flex items-center gap-1 text-white">
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
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Department</p>
                        <p className="text-foreground font-medium">{member.department}</p>
                      </div>
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
                        <p className="text-muted-foreground">Last Active</p>
                        <p className="text-foreground font-medium">{member.lastActive}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setSelectedMember(member);
                          editForm.reset(member);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setSelectedMember(member);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleStatusToggle(member.id)}
                      >
                        {member.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeleteMember(member.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>

      {/* Edit Member Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Team Member</DialogTitle>
            <DialogDescription>Update member details and permissions</DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(handleEditMember)} className="space-y-4">
              <FormField
                control={editForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Test Lead">Test Lead</SelectItem>
                        <SelectItem value="Senior Tester">Senior Tester</SelectItem>
                        <SelectItem value="Automation Engineer">Automation Engineer</SelectItem>
                        <SelectItem value="Junior Tester">Junior Tester</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="QA">QA</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Product">Product</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2 pt-4">
                <Button type="submit" className="flex-1">Update Member</Button>
                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* View Profile Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedMember?.name} - Profile</DialogTitle>
            <DialogDescription>Team member details and activity</DialogDescription>
          </DialogHeader>
          {selectedMember && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {selectedMember.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedMember.name}</h3>
                  <p className="text-muted-foreground">{selectedMember.email}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge>{selectedMember.role}</Badge>
                    <Badge variant="outline">{selectedMember.department}</Badge>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Join Date</h4>
                  <p className="text-muted-foreground">{selectedMember.joinDate}</p>
                </div>
                <div>
                  <h4 className="font-medium">Status</h4>
                  <Badge variant={selectedMember.status === 'Active' ? 'default' : 'secondary'}>
                    {selectedMember.status}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-medium">Tests Executed</h4>
                  <p className="text-muted-foreground">{selectedMember.testsExecuted}</p>
                </div>
                <div>
                  <h4 className="font-medium">Bugs Found</h4>
                  <p className="text-muted-foreground">{selectedMember.bugsFound}</p>
                </div>
                <div>
                  <h4 className="font-medium">Performance Rate</h4>
                  <p className="text-green-600 font-medium">
                    {((selectedMember.bugsFound / selectedMember.testsExecuted) * 100).toFixed(1)}%
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Last Active</h4>
                  <p className="text-muted-foreground">{selectedMember.lastActive}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Permissions</h4>
                <div className="flex gap-2 mt-2">
                  {selectedMember.permissions.map(permission => (
                    <Badge key={permission} variant="outline">{permission}</Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamManagementPage;
