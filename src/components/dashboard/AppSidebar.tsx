
import React from 'react';
import { 
  Home, 
  FileText, 
  Bug, 
  Settings, 
  Users, 
  BarChart3, 
  Shield, 
  Clock, 
  GitBranch,
  Database,
  Activity,
  Target
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Test Cases",
    url: "/test-cases",
    icon: FileText,
  },
  {
    title: "Test Execution",
    url: "/test-execution",
    icon: Activity,
  },
  {
    title: "Bug Reports",
    url: "/bug-reports",
    icon: Bug,
  },
  {
    title: "Test Plans",
    url: "/test-plans",
    icon: Target,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: Database,
  },
  {
    title: "Team Management",
    url: "/team",
    icon: Users,
  },
  {
    title: "Version Control",
    url: "/version-control",
    icon: GitBranch,
  },
  {
    title: "Automation",
    url: "/automation",
    icon: Clock,
  },
  {
    title: "Quality Metrics",
    url: "/quality-metrics",
    icon: Shield,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">NextSQA</h2>
            <p className="text-xs text-muted-foreground">Quality Assurance</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-foreground hover:bg-accent hover:text-accent-foreground">
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">
          © 2024 NextSQA Platform
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
