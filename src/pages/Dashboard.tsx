
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessOverview from '@/components/dashboard/WellnessOverview';
import MoodTracker from '@/components/dashboard/MoodTracker';
import TherapyProgress from '@/components/dashboard/TherapyProgress';
import MeditationTracker from '@/components/dashboard/MeditationTracker';
import UpcomingSessions from '@/components/dashboard/UpcomingSessions';
import QuickActions from '@/components/dashboard/QuickActions';
import CalendarWidget from '@/components/dashboard/CalendarWidget';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data - in real app this would come from API
  const user = {
    firstName: 'John',
    lastName: 'Doe',
  };

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Dashboard updated",
        description: "Your wellness data has been refreshed.",
      });
    } catch (error) {
      toast({
        title: "Refresh failed",
        description: "Unable to update dashboard data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRefreshing(false);
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader 
        firstName={user.firstName}
        notificationCount={3}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {isRefreshing && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-2xl px-6 py-4 shadow-lg border">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent"></div>
              <p className="text-sm font-medium text-gray-700">Refreshing dashboard...</p>
            </div>
          </div>
        )}
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Left Column - Main Widgets */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-6">
            <WellnessOverview />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MoodTracker />
              <MeditationTracker />
            </div>
            <TherapyProgress />
          </div>
          
          {/* Middle Column - Calendar */}
          <div className="lg:col-span-1 xl:col-span-1 space-y-6">
            <CalendarWidget />
            <UpcomingSessions />
          </div>
          
          {/* Right Column - Actions & Plans */}
          <div className="lg:col-span-3 xl:col-span-1 space-y-6">
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
