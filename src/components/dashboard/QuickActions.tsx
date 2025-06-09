
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Plus, FileText, Settings } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      title: 'Start New Test',
      description: 'Begin a new testing session',
      icon: Play,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Create Test Case',
      description: 'Add a new test case',
      icon: Plus,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'View Reports',
      description: 'Check latest test reports',
      icon: FileText,
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Settings',
      description: 'Configure your preferences',
      icon: Settings,
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ];

  return (
    <Card className="border-border hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-foreground">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className={`h-auto p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200 ${action.color} text-white border-none`}
            >
              <action.icon className="w-6 h-6" />
              <div className="text-center">
                <div className="font-semibold text-sm">{action.title}</div>
                <div className="text-xs opacity-90">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
