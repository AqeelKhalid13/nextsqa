
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

export function WelcomeHeader() {
  const userName = "John Doe"; // This would typically come from authentication context
  const currentTime = new Date().getHours();
  
  const getGreeting = () => {
    if (currentTime < 12) return "Good morning";
    if (currentTime < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <Card className="border-border mb-6 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {getGreeting()}, {userName}!
            </h2>
            <p className="text-muted-foreground">
              Welcome back to your testing dashboard. Here's what's happening today.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
