
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, Database, Palette } from 'lucide-react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    emailReports: true,
    slackIntegration: false,
    testFailures: true,
    weeklyDigest: true
  });

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Test Lead'
  });

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">Settings</h1>
              <p className="text-sm text-muted-foreground">Manage your account and application preferences</p>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="data" className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Data
                </TabsTrigger>
                <TabsTrigger value="appearance" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Appearance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Input 
                        id="role" 
                        value={profile.role}
                        onChange={(e) => setProfile({...profile, role: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-reports">Email Reports</Label>
                        <p className="text-sm text-muted-foreground">Receive daily and weekly test reports via email</p>
                      </div>
                      <Switch 
                        id="email-reports"
                        checked={notifications.emailReports}
                        onCheckedChange={(checked) => setNotifications({...notifications, emailReports: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="slack-integration">Slack Integration</Label>
                        <p className="text-sm text-muted-foreground">Send notifications to Slack channels</p>
                      </div>
                      <Switch 
                        id="slack-integration"
                        checked={notifications.slackIntegration}
                        onCheckedChange={(checked) => setNotifications({...notifications, slackIntegration: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="test-failures">Test Failure Alerts</Label>
                        <p className="text-sm text-muted-foreground">Immediate notifications for test failures</p>
                      </div>
                      <Switch 
                        id="test-failures"
                        checked={notifications.testFailures}
                        onCheckedChange={(checked) => setNotifications({...notifications, testFailures: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="weekly-digest">Weekly Digest</Label>
                        <p className="text-sm text-muted-foreground">Summary of testing activities and metrics</p>
                      </div>
                      <Switch 
                        id="weekly-digest"
                        checked={notifications.weeklyDigest}
                        onCheckedChange={(checked) => setNotifications({...notifications, weeklyDigest: checked})}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">Security Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" className="mt-1" />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
                      Update Password
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="data">
                <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">Data Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-foreground">Export Data</h3>
                      <p className="text-sm text-muted-foreground">Download your testing data and reports</p>
                      <Button variant="outline" className="hover:scale-105 transition-transform duration-200">
                        Export All Data
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-foreground">Data Retention</h3>
                      <p className="text-sm text-muted-foreground">Configure how long to keep test data</p>
                      <Input placeholder="90 days" className="max-w-xs" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appearance">
                <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">Appearance Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Theme</Label>
                      <p className="text-sm text-muted-foreground mb-2">Choose your preferred theme</p>
                      <div className="flex gap-2">
                        <Button variant="outline" className="hover:scale-105 transition-transform duration-200">Light</Button>
                        <Button variant="outline" className="hover:scale-105 transition-transform duration-200">Dark</Button>
                        <Button variant="outline" className="hover:scale-105 transition-transform duration-200">System</Button>
                      </div>
                    </div>
                    <div>
                      <Label>Dashboard Layout</Label>
                      <p className="text-sm text-muted-foreground mb-2">Customize your dashboard layout</p>
                      <div className="flex gap-2">
                        <Button variant="outline" className="hover:scale-105 transition-transform duration-200">Compact</Button>
                        <Button variant="outline" className="hover:scale-105 transition-transform duration-200">Standard</Button>
                        <Button variant="outline" className="hover:scale-105 transition-transform duration-200">Expanded</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default SettingsPage;
