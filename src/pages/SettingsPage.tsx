
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Bell, Shield, Database, Palette, Camera, Key, Globe, CreditCard, Trash2, Download, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SettingsPage = () => {
  const { toast } = useToast();
  
  const [notifications, setNotifications] = useState({
    emailReports: true,
    slackIntegration: false,
    testFailures: true,
    weeklyDigest: true,
    pushNotifications: true,
    teamUpdates: false,
    maintenanceAlerts: true
  });

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Test Lead',
    department: 'Quality Assurance',
    timezone: 'UTC-8',
    language: 'English',
    avatar: '/placeholder.svg'
  });

  const [security, setSecurity] = useState({
    twoFactorEnabled: false,
    sessionTimeout: '30',
    ipWhitelist: '',
    loginAlerts: true
  });

  const [preferences, setPreferences] = useState({
    theme: 'system',
    layout: 'standard',
    sidebarCollapsed: false,
    compactMode: false,
    animationsEnabled: true
  });

  const [dataSettings, setDataSettings] = useState({
    retentionPeriod: '90',
    autoBackup: true,
    exportFormat: 'json',
    compressionEnabled: true
  });

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handleSaveSecurity = () => {
    toast({
      title: "Security Settings Updated",
      description: "Your security settings have been updated successfully.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Export Started",
      description: "Your data export has been initiated. You'll receive an email when it's ready.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion Requested",
      description: "Please check your email to confirm account deletion.",
      variant: "destructive",
    });
  };

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
                <div className="space-y-6">
                  <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Profile Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Avatar Section */}
                      <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={profile.avatar} alt="Profile Avatar" />
                          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                            {profile.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Camera className="w-4 h-4" />
                            Change Avatar
                          </Button>
                          <p className="text-xs text-muted-foreground">
                            JPG, GIF or PNG. 1MB max.
                          </p>
                        </div>
                      </div>

                      <Separator />

                      {/* Basic Information */}
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
                        <div>
                          <Label htmlFor="role">Role</Label>
                          <Input 
                            id="role" 
                            value={profile.role}
                            onChange={(e) => setProfile({...profile, role: e.target.value})}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="department">Department</Label>
                          <Input 
                            id="department" 
                            value={profile.department}
                            onChange={(e) => setProfile({...profile, department: e.target.value})}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select value={profile.timezone} onValueChange={(value) => setProfile({...profile, timezone: value})}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="UTC-12">UTC-12</SelectItem>
                              <SelectItem value="UTC-8">UTC-8 (PST)</SelectItem>
                              <SelectItem value="UTC-5">UTC-5 (EST)</SelectItem>
                              <SelectItem value="UTC+0">UTC+0 (GMT)</SelectItem>
                              <SelectItem value="UTC+5:30">UTC+5:30 (IST)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="language">Language</Label>
                          <Select value={profile.language} onValueChange={(value) => setProfile({...profile, language: value})}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="English">English</SelectItem>
                              <SelectItem value="Spanish">Spanish</SelectItem>
                              <SelectItem value="French">French</SelectItem>
                              <SelectItem value="German">German</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button 
                        onClick={handleSaveProfile}
                        className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
                      >
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Account Status */}
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Account Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Account Type</p>
                          <p className="text-sm text-muted-foreground">Professional Plan</p>
                        </div>
                        <Badge variant="default">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Member Since</p>
                          <p className="text-sm text-muted-foreground">January 15, 2024</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      <div className="space-y-4">
                        {Object.entries({
                          emailReports: 'Daily and weekly test reports',
                          testFailures: 'Immediate notifications for test failures',
                          weeklyDigest: 'Summary of testing activities and metrics',
                          teamUpdates: 'Team member activities and updates',
                          maintenanceAlerts: 'System maintenance and downtime alerts'
                        }).map(([key, description]) => (
                          <div key={key} className="flex items-center justify-between">
                            <div>
                              <Label htmlFor={key}>{description}</Label>
                            </div>
                            <Switch 
                              id={key}
                              checked={notifications[key as keyof typeof notifications]}
                              onCheckedChange={(checked) => setNotifications({...notifications, [key]: checked})}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Push Notifications</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="pushNotifications">Browser push notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                        </div>
                        <Switch 
                          id="pushNotifications"
                          checked={notifications.pushNotifications}
                          onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Integrations</h3>
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
                    </div>

                    <Button 
                      onClick={handleSaveNotifications}
                      className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
                    >
                      Save Notification Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <div className="space-y-6">
                  <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <Key className="w-5 h-5" />
                        Password & Authentication
                      </CardTitle>
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

                  <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Security Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                        </div>
                        <Switch 
                          id="two-factor"
                          checked={security.twoFactorEnabled}
                          onCheckedChange={(checked) => setSecurity({...security, twoFactorEnabled: checked})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                        <Select value={security.sessionTimeout} onValueChange={(value) => setSecurity({...security, sessionTimeout: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                            <SelectItem value="120">2 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="login-alerts">Login Alerts</Label>
                          <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                        </div>
                        <Switch 
                          id="login-alerts"
                          checked={security.loginAlerts}
                          onCheckedChange={(checked) => setSecurity({...security, loginAlerts: checked})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ip-whitelist">IP Whitelist</Label>
                        <Input 
                          id="ip-whitelist" 
                          placeholder="192.168.1.1, 10.0.0.1"
                          value={security.ipWhitelist}
                          onChange={(e) => setSecurity({...security, ipWhitelist: e.target.value})}
                        />
                        <p className="text-sm text-muted-foreground">Comma-separated list of allowed IP addresses</p>
                      </div>

                      <Button 
                        onClick={handleSaveSecurity}
                        className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
                      >
                        Save Security Settings
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="data">
                <div className="space-y-6">
                  <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Data Export
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Export Format</Label>
                        <Select value={dataSettings.exportFormat} onValueChange={(value) => setDataSettings({...dataSettings, exportFormat: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="json">JSON</SelectItem>
                            <SelectItem value="csv">CSV</SelectItem>
                            <SelectItem value="xml">XML</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button 
                        onClick={handleExportData}
                        variant="outline" 
                        className="hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Export All Data
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <Database className="w-5 h-5" />
                        Data Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="retention">Data Retention Period</Label>
                        <Select value={dataSettings.retentionPeriod} onValueChange={(value) => setDataSettings({...dataSettings, retentionPeriod: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 days</SelectItem>
                            <SelectItem value="90">90 days</SelectItem>
                            <SelectItem value="180">6 months</SelectItem>
                            <SelectItem value="365">1 year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-backup">Automatic Backup</Label>
                          <p className="text-sm text-muted-foreground">Automatically backup your data daily</p>
                        </div>
                        <Switch 
                          id="auto-backup"
                          checked={dataSettings.autoBackup}
                          onCheckedChange={(checked) => setDataSettings({...dataSettings, autoBackup: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="compression">Data Compression</Label>
                          <p className="text-sm text-muted-foreground">Compress exported data to save space</p>
                        </div>
                        <Switch 
                          id="compression"
                          checked={dataSettings.compressionEnabled}
                          onCheckedChange={(checked) => setDataSettings({...dataSettings, compressionEnabled: checked})}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border border-red-200 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Trash2 className="w-5 h-5" />
                        Danger Zone
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-red-600">Delete Account</h3>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <Button 
                          variant="destructive" 
                          onClick={handleDeleteAccount}
                          className="hover:scale-105 transition-transform duration-200"
                        >
                          Delete Account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="appearance">
                <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Appearance Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label>Theme</Label>
                        <p className="text-sm text-muted-foreground mb-2">Choose your preferred theme</p>
                        <div className="flex gap-2">
                          <Button 
                            variant={preferences.theme === 'light' ? 'default' : 'outline'} 
                            onClick={() => setPreferences({...preferences, theme: 'light'})}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            Light
                          </Button>
                          <Button 
                            variant={preferences.theme === 'dark' ? 'default' : 'outline'} 
                            onClick={() => setPreferences({...preferences, theme: 'dark'})}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            Dark
                          </Button>
                          <Button 
                            variant={preferences.theme === 'system' ? 'default' : 'outline'} 
                            onClick={() => setPreferences({...preferences, theme: 'system'})}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            System
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label>Dashboard Layout</Label>
                        <p className="text-sm text-muted-foreground mb-2">Customize your dashboard layout</p>
                        <div className="flex gap-2">
                          <Button 
                            variant={preferences.layout === 'compact' ? 'default' : 'outline'} 
                            onClick={() => setPreferences({...preferences, layout: 'compact'})}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            Compact
                          </Button>
                          <Button 
                            variant={preferences.layout === 'standard' ? 'default' : 'outline'} 
                            onClick={() => setPreferences({...preferences, layout: 'standard'})}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            Standard
                          </Button>
                          <Button 
                            variant={preferences.layout === 'expanded' ? 'default' : 'outline'} 
                            onClick={() => setPreferences({...preferences, layout: 'expanded'})}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            Expanded
                          </Button>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Interface Preferences</h3>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="compact-mode">Compact Mode</Label>
                            <p className="text-sm text-muted-foreground">Reduce spacing and padding throughout the interface</p>
                          </div>
                          <Switch 
                            id="compact-mode"
                            checked={preferences.compactMode}
                            onCheckedChange={(checked) => setPreferences({...preferences, compactMode: checked})}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="animations">Enable Animations</Label>
                            <p className="text-sm text-muted-foreground">Show smooth transitions and animations</p>
                          </div>
                          <Switch 
                            id="animations"
                            checked={preferences.animationsEnabled}
                            onCheckedChange={(checked) => setPreferences({...preferences, animationsEnabled: checked})}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="sidebar-collapsed">Sidebar Auto-collapse</Label>
                            <p className="text-sm text-muted-foreground">Automatically collapse sidebar on smaller screens</p>
                          </div>
                          <Switch 
                            id="sidebar-collapsed"
                            checked={preferences.sidebarCollapsed}
                            onCheckedChange={(checked) => setPreferences({...preferences, sidebarCollapsed: checked})}
                          />
                        </div>
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
