
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, AlertTriangle, Bug } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'test_completed',
      description: 'UI Test Suite completed successfully',
      time: '2 minutes ago',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'bug_found',
      description: 'New bug found in login process',
      time: '15 minutes ago',
      icon: Bug,
      color: 'text-red-600'
    },
    {
      id: 3,
      type: 'test_started',
      description: 'Performance test started on homepage',
      time: '1 hour ago',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      id: 4,
      type: 'warning',
      description: 'High memory usage detected',
      time: '2 hours ago',
      icon: AlertTriangle,
      color: 'text-orange-600'
    }
  ];

  return (
    <Card className="border-border hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200"
            >
              <activity.icon className={`w-5 h-5 ${activity.color}`} />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
