
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessMetrics from '@/components/dashboard/WellnessMetrics';
import TodayProgress from '@/components/dashboard/TodayProgress';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentActivity from '@/components/dashboard/RecentActivity';
import CalendarWidget from '@/components/dashboard/CalendarWidget';
import { useToast } from '@/hooks/use-toast';

interface ProgressItem {
  id: string;
  title: string;
  completed: boolean;
  time?: string;
  icon: string;
}

interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
  description?: string;
  color: string;
}

interface Activity {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  icon: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data - in real app this would come from API
  const user = {
    firstName: 'John',
    lastName: 'Doe',
  };

  const wellnessData = {
    overallScore: 78,
    goalsCompleted: 3,
    totalGoals: 5,
    currentStreak: 12,
    moodTrend: 'improving' as const,
  };

  const progressItems: ProgressItem[] = [];
  const quickActions: QuickAction[] = [];
  const recentActivity: Activity[] = [];
  const notificationCount = 3;

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // Simulate API call
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

  // Pull-to-refresh handler
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startY = touch.clientY;
    
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const currentY = touch.clientY;
      const pullDistance = currentY - startY;
      
      if (pullDistance > 100 && window.scrollY === 0) {
        handleRefresh();
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative"
      onTouchStart={handleTouchStart}
    >
      {/* Professional background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-indigo-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <DashboardHeader 
        firstName={user.firstName}
        notificationCount={notificationCount}
      />
      
      <div className="relative z-10 max-w-8xl mx-auto px-4 lg:px-8 py-8 pb-20">
        {isRefreshing && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-2xl px-8 py-4 shadow-2xl border border-gray-200/50 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent"></div>
              <p className="text-sm font-semibold text-gray-700">Refreshing dashboard...</p>
            </div>
          </div>
        )}
        
        {/* Desktop: 3-column layout, Mobile: single column with optimized spacing */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Primary Content */}
          <div className="xl:col-span-5 space-y-6 lg:space-y-8">
            <div className="animate-fade-in">
              <WellnessMetrics
                overallScore={wellnessData.overallScore}
                goalsCompleted={wellnessData.goalsCompleted}
                totalGoals={wellnessData.totalGoals}
                currentStreak={wellnessData.currentStreak}
                moodTrend={wellnessData.moodTrend}
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <TodayProgress progressItems={progressItems} />
            </div>
          </div>
          
          {/* Middle Column - Calendar (Desktop only) */}
          <div className="hidden xl:block xl:col-span-3 space-y-6 lg:space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <CalendarWidget />
            </div>
          </div>
          
          {/* Right Column - Secondary Content */}
          <div className="xl:col-span-4 space-y-6 lg:space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <QuickActions actions={quickActions} />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <RecentActivity activities={recentActivity} />
            </div>

            {/* Mobile Calendar */}
            <div className="animate-fade-in xl:hidden" style={{ animationDelay: '0.25s' }}>
              <CalendarWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
