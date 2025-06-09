
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Globe, TestTube } from 'lucide-react';

const StartTestingPage = () => {
  const [testUrl, setTestUrl] = useState('');
  const [testType, setTestType] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleStartTest = () => {
    setIsRunning(true);
    console.log('Starting test for:', testUrl, 'Type:', testType);
    // Simulate test execution
    setTimeout(() => {
      setIsRunning(false);
    }, 3000);
  };

  const testInstructions = [
    {
      step: 1,
      title: "Enter Website URL",
      description: "Provide the URL of the website or application you want to test"
    },
    {
      step: 2,
      title: "Select Test Type",
      description: "Choose the type of testing you want to perform (UI, Performance, Security, etc.)"
    },
    {
      step: 3,
      title: "Configure Parameters",
      description: "Set up test parameters like browser type, device simulation, and test duration"
    },
    {
      step: 4,
      title: "Run Tests",
      description: "Execute the tests and monitor real-time progress and results"
    },
    {
      step: 5,
      title: "Review Results",
      description: "Analyze test results, view reports, and export findings for your team"
    }
  ];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">Start Testing</h1>
              <p className="text-sm text-muted-foreground">Begin your automated testing process</p>
            </div>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Quick Start Form */}
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <TestTube className="w-5 h-5" />
                  Quick Start Testing
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Get started with automated testing in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="url">Website URL</Label>
                  <Input
                    id="url"
                    placeholder="https://example.com"
                    value={testUrl}
                    onChange={(e) => setTestUrl(e.target.value)}
                    className="hover:border-primary/50 transition-colors duration-200"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="test-type">Test Type</Label>
                  <Select value={testType} onValueChange={setTestType}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                      <SelectValue placeholder="Select test type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ui">UI Testing</SelectItem>
                      <SelectItem value="performance">Performance Testing</SelectItem>
                      <SelectItem value="security">Security Testing</SelectItem>
                      <SelectItem value="accessibility">Accessibility Testing</SelectItem>
                      <SelectItem value="cross-browser">Cross-Browser Testing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={handleStartTest}
                  disabled={!testUrl || !testType || isRunning}
                  className="w-full hover:scale-105 transition-transform duration-200"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isRunning ? 'Running Tests...' : 'Start Testing'}
                </Button>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  How It Works
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Follow these simple steps to get the most out of our testing platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testInstructions.map((instruction) => (
                    <div 
                      key={instruction.step} 
                      className="flex gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        {instruction.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{instruction.title}</h3>
                        <p className="text-sm text-muted-foreground">{instruction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Test Progress (shown when running) */}
            {isRunning && (
              <Card className="border-border animate-pulse">
                <CardHeader>
                  <CardTitle className="text-foreground">Test in Progress</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Running tests on {testUrl}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default StartTestingPage;
