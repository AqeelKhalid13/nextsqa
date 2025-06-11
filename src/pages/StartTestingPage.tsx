import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Play, Globe, TestTube, Settings, Clock, Target, Zap, Pause, Square, CheckCircle, Monitor, Camera } from 'lucide-react';

const StartTestingPage = () => {
  const navigate = useNavigate();
  const [testConfig, setTestConfig] = useState({
    url: '',
    testType: '',
    browsers: [] as string[],
    testDuration: '30',
    environment: '',
    notifications: true,
    autoRetry: false,
    parallelExecution: true,
    testInstructions: ''
  });
  const [isRunning, setIsRunning] = useState(false);
  const [testProgress, setTestProgress] = useState(0);
  const [currentTest, setCurrentTest] = useState('');
  const [testLogs, setTestLogs] = useState<string[]>([]);
  const [screenshots, setScreenshots] = useState<{step: string, url: string, timestamp: string}[]>([]);
  const [browserView, setBrowserView] = useState('');

  const handleStartTest = () => {
    setIsRunning(true);
    setTestProgress(0);
    setTestLogs(['Test execution started...']);
    setScreenshots([]);
    setBrowserView(testConfig.url);
    console.log('Starting test with config:', testConfig);
    
    // Simulate test execution with user instructions
    const testSteps = testConfig.testInstructions ? 
      testConfig.testInstructions.split('\n').filter(step => step.trim()) :
      [
        'Loading target website...',
        'Checking page responsiveness...',
        'Testing navigation elements...',
        'Validating form inputs...',
        'Running accessibility checks...',
        'Capturing final screenshot...'
      ];

    let currentStep = 0;
    const progressInterval = setInterval(() => {
      setTestProgress(prev => {
        const increment = 100 / testSteps.length;
        const newProgress = Math.min(prev + increment, 100);
        
        if (currentStep < testSteps.length) {
          const step = testSteps[currentStep];
          setCurrentTest(step);
          setTestLogs(prevLogs => [...prevLogs, `[${new Date().toLocaleTimeString()}] ${step}`]);
          
          // Simulate screenshot capture
          setScreenshots(prevShots => [...prevShots, {
            step: step,
            url: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7c3RlcH08L3RleHQ+PC9zdmc+`,
            timestamp: new Date().toLocaleTimeString()
          }]);
          
          currentStep++;
        }
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsRunning(false);
          setTestProgress(100);
          setCurrentTest('Test completed successfully!');
          setTestLogs(prevLogs => [...prevLogs, `[${new Date().toLocaleTimeString()}] Test execution completed successfully!`]);
          
          // Store test results for reports page
          const testResults = {
            id: Date.now(),
            name: `Test - ${testConfig.url}`,
            logs: testLogs,
            screenshots: screenshots,
            config: testConfig,
            completedAt: new Date().toISOString()
          };
          
          const existingResults = JSON.parse(localStorage.getItem('testResults') || '[]');
          localStorage.setItem('testResults', JSON.stringify([testResults, ...existingResults]));
          
          setTimeout(() => {
            navigate('/reports');
          }, 2000);
          return 100;
        }
        return newProgress;
      });
    }, 1500);
  };

  const handlePauseTest = () => {
    setIsRunning(false);
    setTestLogs(prev => [...prev, 'Test execution paused']);
  };

  const handleStopTest = () => {
    setIsRunning(false);
    setTestProgress(0);
    setCurrentTest('');
    setTestLogs(['Test execution stopped']);
    setScreenshots([]);
    setBrowserView('');
  };

  const testInstructions = [
    {
      step: 1,
      title: "Enter Website URL",
      description: "Provide the URL of the website or application you want to test",
      icon: Globe
    },
    {
      step: 2,
      title: "Select Test Type",
      description: "Choose the type of testing you want to perform (UI, Performance, Security, etc.)",
      icon: TestTube
    },
    {
      step: 3,
      title: "Configure Parameters",
      description: "Set up test parameters like browser type, device simulation, and test duration",
      icon: Settings
    },
    {
      step: 4,
      title: "Run Tests",
      description: "Execute the tests and monitor real-time progress and results",
      icon: Play
    },
    {
      step: 5,
      title: "Review Results",
      description: "Analyze test results, view reports, and export findings for your team",
      icon: Target
    }
  ];

  const testTypes = [
    { value: 'ui', label: 'UI Testing', description: 'Test user interface elements and interactions' },
    { value: 'performance', label: 'Performance Testing', description: 'Measure load times and responsiveness' },
    { value: 'security', label: 'Security Testing', description: 'Identify vulnerabilities and security issues' },
    { value: 'accessibility', label: 'Accessibility Testing', description: 'Check compliance with accessibility standards' },
    { value: 'cross-browser', label: 'Cross-Browser Testing', description: 'Test across multiple browsers and devices' },
    { value: 'api', label: 'API Testing', description: 'Validate API endpoints and responses' },
    { value: 'regression', label: 'Regression Testing', description: 'Ensure new changes don\'t break existing features' }
  ];

  const browsers = [
    { id: 'chrome', name: 'Chrome' },
    { id: 'firefox', name: 'Firefox' },
    { id: 'safari', name: 'Safari' },
    { id: 'edge', name: 'Edge' },
    { id: 'mobile-chrome', name: 'Mobile Chrome' },
    { id: 'mobile-safari', name: 'Mobile Safari' }
  ];

  const handleBrowserChange = (browserId: string, checked: boolean) => {
    setTestConfig(prev => ({
      ...prev,
      browsers: checked 
        ? [...prev.browsers, browserId]
        : prev.browsers.filter(b => b !== browserId)
    }));
  };

  const environments = [
    { value: 'production', label: 'Production' },
    { value: 'staging', label: 'Staging' },
    { value: 'development', label: 'Development' },
    { value: 'testing', label: 'Testing' },
    { value: 'local', label: 'Local' }
  ];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">AI Testing</h1>
              <p className="text-sm text-muted-foreground">Begin your automated AI testing process</p>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <div className={`grid gap-6 ${isRunning ? 'grid-cols-3' : 'grid-cols-1'}`}>
              {/* Configuration Panel */}
              <div className={`space-y-6 ${isRunning ? 'col-span-1' : 'col-span-1'}`}>
                <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Quick Test Configuration
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Set up and launch your test in minutes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Basic Configuration */}
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="url">Website URL *</Label>
                          <Input
                            id="url"
                            placeholder="https://example.com"
                            value={testConfig.url}
                            onChange={(e) => setTestConfig(prev => ({ ...prev, url: e.target.value }))}
                            className="hover:border-primary/50 transition-colors duration-200"
                            disabled={isRunning}
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="test-type">Test Type *</Label>
                          <Select 
                            value={testConfig.testType} 
                            onValueChange={(value) => setTestConfig(prev => ({ ...prev, testType: value }))}
                            disabled={isRunning}
                          >
                            <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                              <SelectValue placeholder="Select test type" />
                            </SelectTrigger>
                            <SelectContent>
                              {testTypes.map(type => (
                                <SelectItem key={type.value} value={type.value}>
                                  <div>
                                    <p className="font-medium">{type.label}</p>
                                    <p className="text-xs text-muted-foreground">{type.description}</p>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="instructions">Test Instructions</Label>
                          <Textarea
                            id="instructions"
                            placeholder="Enter step-by-step instructions for the test (one step per line)..."
                            value={testConfig.testInstructions}
                            onChange={(e) => setTestConfig(prev => ({ ...prev, testInstructions: e.target.value }))}
                            className="hover:border-primary/50 transition-colors duration-200 min-h-20"
                            disabled={isRunning}
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="duration">Test Duration (minutes)</Label>
                          <Select 
                            value={testConfig.testDuration} 
                            onValueChange={(value) => setTestConfig(prev => ({ ...prev, testDuration: value }))}
                            disabled={isRunning}
                          >
                            <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="60">1 hour</SelectItem>
                              <SelectItem value="120">2 hours</SelectItem>
                              <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="environment">Environment</Label>
                          <Select 
                            value={testConfig.environment} 
                            onValueChange={(value) => setTestConfig(prev => ({ ...prev, environment: value }))}
                            disabled={isRunning}
                          >
                            <SelectTrigger className="hover:border-primary/50 transition-colors duration-200">
                              <SelectValue placeholder="Select environment" />
                            </SelectTrigger>
                            <SelectContent>
                              {environments.map(env => (
                                <SelectItem key={env.value} value={env.value}>
                                  {env.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Advanced Configuration */}
                      <div className="space-y-4">
                        <div>
                          <Label className="text-base font-medium mb-3 block">Browser Selection</Label>
                          <div className="grid grid-cols-2 gap-3">
                            {browsers.map(browser => (
                              <div key={browser.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={browser.id}
                                  checked={testConfig.browsers.includes(browser.id)}
                                  onCheckedChange={(checked) => handleBrowserChange(browser.id, checked as boolean)}
                                  disabled={isRunning}
                                />
                                <Label htmlFor={browser.id} className="text-sm font-normal cursor-pointer hover:text-primary transition-colors duration-200">
                                  {browser.name}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-base font-medium">Test Options</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="notifications"
                                checked={testConfig.notifications}
                                onCheckedChange={(checked) => setTestConfig(prev => ({ ...prev, notifications: checked as boolean }))}
                                disabled={isRunning}
                              />
                              <Label htmlFor="notifications" className="text-sm cursor-pointer hover:text-primary transition-colors duration-200">
                                Send notifications when test completes
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="autoRetry"
                                checked={testConfig.autoRetry}
                                onCheckedChange={(checked) => setTestConfig(prev => ({ ...prev, autoRetry: checked as boolean }))}
                                disabled={isRunning}
                              />
                              <Label htmlFor="autoRetry" className="text-sm cursor-pointer hover:text-primary transition-colors duration-200">
                                Auto-retry failed tests
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="parallelExecution"
                                checked={testConfig.parallelExecution}
                                onCheckedChange={(checked) => setTestConfig(prev => ({ ...prev, parallelExecution: checked as boolean }))}
                                disabled={isRunning}
                              />
                              <Label htmlFor="parallelExecution" className="text-sm cursor-pointer hover:text-primary transition-colors duration-200">
                                Enable parallel execution
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={handleStartTest}
                        disabled={!testConfig.url || !testConfig.testType || isRunning}
                        className="hover:scale-105 transition-transform duration-200"
                        size="lg"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Testing
                      </Button>
                      {isRunning && (
                        <>
                          <Button 
                            onClick={handlePauseTest}
                            variant="outline"
                            className="hover:scale-105 transition-transform duration-200"
                            size="lg"
                          >
                            <Pause className="w-4 h-4 mr-2" />
                            Pause
                          </Button>
                          <Button 
                            onClick={handleStopTest}
                            variant="destructive"
                            className="hover:scale-105 transition-transform duration-200"
                            size="lg"
                          >
                            <Square className="w-4 h-4 mr-2" />
                            Stop
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* How It Works - Only show when not running */}
                {!isRunning && (
                  <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <TestTube className="w-5 h-5" />
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
                            className="flex gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 hover:scale-105 transition-all duration-200"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                              {instruction.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <instruction.icon className="w-4 h-4 text-primary" />
                                <h3 className="font-semibold text-foreground">{instruction.title}</h3>
                              </div>
                              <p className="text-sm text-muted-foreground">{instruction.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Live Browser Preview Panel - Only show when running - Takes 2/3 of screen */}
              {isRunning && (
                <div className="space-y-6 col-span-2">
                  {/* Browser Window */}
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <Monitor className="w-5 h-5 text-blue-500" />
                        Live Browser Preview
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Simulated browser window showing test execution
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                        {/* Browser UI */}
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-t-lg px-4 py-2 flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-white dark:bg-gray-600 rounded px-3 py-1 text-sm">
                            {browserView}
                          </div>
                        </div>
                        {/* Browser Content */}
                        <div className="bg-white dark:bg-gray-900 rounded-b-lg p-6 min-h-96 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-foreground font-medium">{currentTest || 'Initializing browser...'}</p>
                            <p className="text-sm text-muted-foreground mt-2">Testing: {testConfig.url}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Test Progress */}
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        Test Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Overall Progress</span>
                          <span className="text-sm text-muted-foreground">{Math.round(testProgress)}%</span>
                        </div>
                        <Progress value={testProgress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Screenshots Captured</p>
                          <p className="font-medium">{screenshots.length}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Test Status</p>
                          <p className="font-medium text-blue-600">Running</p>
                        </div>
                      </div>

                      {testProgress === 100 && (
                        <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium text-green-800 dark:text-green-200">Test Completed Successfully!</p>
                            <p className="text-sm text-green-600 dark:text-green-300">Redirecting to reports page...</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Live Screenshots */}
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        Live Screenshots
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {screenshots.map((screenshot, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg">
                            <img 
                              src={screenshot.url} 
                              alt={screenshot.step}
                              className="w-16 h-12 rounded object-cover"
                            />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{screenshot.step}</p>
                              <p className="text-xs text-muted-foreground">{screenshot.timestamp}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default StartTestingPage;
