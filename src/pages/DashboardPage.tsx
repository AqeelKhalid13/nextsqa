
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { DashboardContent } from '@/components/dashboard/DashboardContent';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <SidebarProvider>
        <AppSidebar />
        <DashboardContent />
      </SidebarProvider>
    </div>
  );
};

export default DashboardPage;
