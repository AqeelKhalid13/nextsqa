
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slack, Github, Search, Filter, Settings, CheckCircle, AlertCircle } from 'lucide-react';

const IntegrationsPage = () => {
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: 'Slack',
      description: 'Get real-time notifications about test results, bug reports, and team updates in your Slack channels',
      icon: Slack,
      connected: true,
      category: 'Communication',
      setupDate: '2024-01-10',
      lastSync: '2024-01-15 14:30',
      status: 'Active',
      notifications: 245,
      features: ['Test notifications', 'Bug alerts', 'Team mentions', 'Daily reports']
    },
    {
      id: 2,
      name: 'GitHub',
      description: 'Automatically sync test cases with GitHub repositories, link issues to bugs, and track test coverage',
      icon: Github,
      connected: true,
      category: 'Version Control',
      setupDate: '2024-01-08',
      lastSync: '2024-01-15 16:45',
      status: 'Active',
      notifications: 156,
      features: ['Repository sync', 'Issue linking', 'PR testing', 'Coverage reports']
    },
    {
      id: 3,
      name: 'Jira',
      description: 'Seamlessly link test cases to Jira tickets, track testing progress, and manage sprint deliverables',
      icon: () => <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">J</div>,
      connected: false,
      category: 'Project Management',
      setupDate: null,
      lastSync: null,
      status: 'Available',
      notifications: 0,
      features: ['Ticket linking', 'Sprint tracking', 'Progress sync', 'Requirement mapping']
    },
    {
      id: 4,
      name: 'Jenkins',
      description: 'Trigger automated test suites through Jenkins CI/CD pipelines and get build-specific test reports',
      icon: () => <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold">JK</div>,
      connected: false,
      category: 'CI/CD',
      setupDate: null,
      lastSync: null,
      status: 'Available',
      notifications: 0,
      features: ['Pipeline integration', 'Automated testing', 'Build reports', 'Deployment validation']
    },
    {
      id: 5,
      name: 'Selenium Grid',
      description: 'Execute tests across multiple browsers and environments using Selenium Grid infrastructure',
      icon: () => <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">S</div>,
      connected: true,
      category: 'Testing',
      setupDate: '2024-01-12',
      lastSync: '2024-01-15 12:20',
      status: 'Active',
      notifications: 89,
      features: ['Cross-browser testing', 'Parallel execution', 'Remote testing', 'Grid management']
    },
    {
      id: 6,
      name: 'Microsoft Teams',
      description: 'Collaborate with your team through Microsoft Teams with automated notifications and status updates',
      icon: () => <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">T</div>,
      connected: false,
      category: 'Communication',
      setupDate: null,
      lastSync: null,
      status: 'Available',
      notifications: 0,
      features: ['Team notifications', 'Status updates', 'Meeting integration', 'File sharing']
    },
    {
      id: 7,
      name: 'Docker',
      description: 'Containerize test environments and ensure consistent testing across different deployment scenarios',
      icon: () => <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">D</div>,
      connected: false,
      category: 'Infrastructure',
      setupDate: null,
      lastSync: null,
      status: 'Available',
      notifications: 0,
      features: ['Environment isolation', 'Container testing', 'Deployment testing', 'Resource management']
    },
    {
      id: 8,
      name: 'Postman',
      description: 'Import API collections from Postman and run automated API tests with comprehensive validation',
      icon: () => <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">P</div>,
      connected: false,
      category: 'API Testing',
      setupDate: null,
      lastSync: null,
      status: 'Available',
      notifications: 0,
      features: ['Collection import', 'API testing', 'Response validation', 'Test automation']
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || integration.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'connected' && integration.connected) ||
                         (statusFilter === 'available' && !integration.connected);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleConnect = (integrationId) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { 
            ...integration, 
            connected: true, 
            status: 'Active',
            setupDate: new Date().toISOString().split('T')[0],
            lastSync: new Date().toISOString().slice(0, 16).replace('T', ' ')
          }
        : integration
    ));
    console.log(`Connecting to integration ${integrationId}`);
  };

  const handleDisconnect = (integrationId) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { 
            ...integration, 
            connected: false, 
            status: 'Available',
            setupDate: null,
            lastSync: null,
            notifications: 0
          }
        : integration
    ));
    console.log(`Disconnecting from integration ${integrationId}`);
  };

  const categories = ['all', ...new Set(integrations.map(i => i.category))];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">Integrations</h1>
              <p className="text-sm text-muted-foreground">Connect with your favorite tools and platforms</p>
            </div>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  title: 'Connected', 
                  value: integrations.filter(i => i.connected).length, 
                  total: integrations.length,
                  color: 'bg-green-500',
                  icon: CheckCircle
                },
                { 
                  title: 'Available', 
                  value: integrations.filter(i => !i.connected).length, 
                  total: integrations.length,
                  color: 'bg-blue-500',
                  icon: AlertCircle
                },
                { 
                  title: 'Total Notifications', 
                  value: integrations.reduce((sum, i) => sum + i.notifications, 0), 
                  total: '',
                  color: 'bg-purple-500',
                  icon: Settings
                }
              ].map((stat) => (
                <Card key={stat.title} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                          {stat.total && <span className="text-sm font-normal text-muted-foreground">/{stat.total}</span>}
                        </p>
                      </div>
                      <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filters */}
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters & Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search integrations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 hover:border-primary/50 transition-colors duration-200"
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="connected">Connected</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setCategoryFilter('all');
                      setStatusFilter('all');
                    }}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Integrations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIntegrations.map((integration) => (
                <Card key={integration.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <integration.icon className="w-6 h-6" />
                        <div>
                          <CardTitle className="text-foreground">{integration.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1 hover:bg-accent transition-colors duration-200">
                            {integration.category}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant={integration.connected ? "default" : "outline"}>
                        {integration.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground">
                      {integration.description}
                    </CardDescription>
                    
                    {integration.connected && (
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Setup Date</p>
                          <p className="font-medium">{integration.setupDate}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Sync</p>
                          <p className="font-medium">{integration.lastSync}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Notifications</p>
                          <p className="font-medium">{integration.notifications}</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {integration.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs hover:bg-accent transition-colors duration-200">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className={`flex-1 hover:scale-105 transition-transform duration-200 ${
                          integration.connected ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary/90'
                        }`}
                        onClick={() => integration.connected ? handleDisconnect(integration.id) : handleConnect(integration.id)}
                      >
                        {integration.connected ? 'Disconnect' : 'Connect'}
                      </Button>
                      {integration.connected && (
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="hover:scale-105 transition-transform duration-200"
                        >
                          <Settings className="w-4 h-4" />
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

export default IntegrationsPage;
