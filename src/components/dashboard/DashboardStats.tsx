
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, FileText, Bug, Users, CheckCircle } from 'lucide-react';

const stats = [
  {
    title: "Total Test Cases",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: FileText,
    color: "text-blue-600"
  },
  {
    title: "Active Bugs",
    value: "23",
    change: "-8%",
    trend: "down",
    icon: Bug,
    color: "text-red-600"
  },
  {
    title: "Test Coverage",
    value: "87%",
    change: "+5%",
    trend: "up",
    icon: CheckCircle,
    color: "text-green-600"
  },
  {
    title: "Team Members",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Users,
    color: "text-purple-600"
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stat.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                {stat.change}
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
