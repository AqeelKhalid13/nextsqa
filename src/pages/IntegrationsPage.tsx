
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slack, Github } from 'lucide-react';

const IntegrationsPage = () => {
  const [integrations] = useState([
    {
      id: 1,
      name: 'Slack',
      description: 'Get notifications about test results and bugs in your Slack channels',
      icon: Slack,
      connected: false,
      category: 'Communication'
    },
    {
      id: 2,
      name: 'GitHub',
      description: 'Sync test cases with your GitHub repositories and issues',
      icon: Github,
      connected: true,
      category: 'Version Control'
    },
    {
      id: 3,
      name: 'Jira',
      description: 'Link test cases to Jira tickets and track progress',
      icon: () => <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">J</div>,
      connected: false,
      category: 'Project Management'
    },
    {
      id: 4,
      name: 'Jenkins',
      description: 'Trigger automated tests through Jenkins CI/CD pipelines',
      icon: () => <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold">JK</div>,
      connected: false,
      category: 'CI/CD'
    },
    {
      id: 5,
      name: 'Selenium Grid',
      description: 'Execute tests across multiple browsers and environments',
      icon: () => <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">S</div>,
      connected: false,
      category: 'Testing'
    },
    {
      id: 6,
      name: 'Teams',
      description: 'Microsoft Teams integration for notifications and collaboration',
      icon: () => <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">T</div>,
      connected: false,
      category: 'Communication'
    }
  ]);

  const handleConnect = (integrationId) => {
    console.log(`Connecting to integration ${integrationId}`);
  };

  const handleDisconnect = (integrationId) => {
    console.log(`Disconnecting from integration ${integrationId}`);
  };

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
          
          <main className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <Card key={integration.id} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <integration.icon className="w-6 h-6" />
                        <div>
                          <CardTitle className="text-foreground">{integration.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {integration.category}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant={integration.connected ? "default" : "outline"}>
                        {integration.connected ? "Connected" : "Available"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">
                      {integration.description}
                    </CardDescription>
                    <Button 
                      className={`w-full hover:scale-105 transition-transform duration-200 ${
                        integration.connected ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary/90'
                      }`}
                      onClick={() => integration.connected ? handleDisconnect(integration.id) : handleConnect(integration.id)}
                    >
                      {integration.connected ? 'Disconnect' : 'Connect'}
                    </Button>
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
