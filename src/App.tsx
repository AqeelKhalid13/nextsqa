
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import HowItWorksPage from "./pages/HowItWorksPage";
import FeaturesPage from "./pages/FeaturesPage";
import UseCasesPage from "./pages/UseCasesPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TestCasesPage from "./pages/TestCasesPage";
import BugReportsPage from "./pages/BugReportsPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import StartTestingPage from "./pages/StartTestingPage";
import TestExecutionPage from "./pages/TestExecutionPage";
import TestPlansPage from "./pages/TestPlansPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ReportsPage from "./pages/ReportsPage";
import TeamManagementPage from "./pages/TeamManagementPage";
import VersionControlPage from "./pages/VersionControlPage";
import AutomationPage from "./pages/AutomationPage";
import QualityMetricsPage from "./pages/QualityMetricsPage";
import SettingsPage from "./pages/SettingsPage";
import FlowDiagramPage from "./pages/FlowDiagramPage";
import SupportPage from "./pages/SupportPage";
import CommunityPage from "./pages/CommunityPage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider delayDuration={0}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<BlogDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/start-testing" element={<StartTestingPage />} />
            <Route path="/test-cases" element={<TestCasesPage />} />
            <Route path="/test-execution" element={<TestExecutionPage />} />
            <Route path="/bug-reports" element={<BugReportsPage />} />
            <Route path="/test-plans" element={<TestPlansPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/team" element={<TeamManagementPage />} />
            <Route path="/version-control" element={<VersionControlPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/quality-metrics" element={<QualityMetricsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/flow-diagram" element={<FlowDiagramPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/community" element={<CommunityPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
