
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessMetrics from '@/components/dashboard/WellnessMetrics';
import TodayProgress from '@/components/dashboard/TodayProgress';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentActivity from '@/components/dashboard/RecentActivity';
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
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
      onTouchStart={handleTouchStart}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <DashboardHeader 
        firstName={user.firstName}
        notificationCount={notificationCount}
      />
      
      <main className="relative z-10 px-4 py-6 pb-20 space-y-6">
        {isRefreshing && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent"></div>
              <p className="text-sm font-medium text-gray-700">Refreshing...</p>
            </div>
          </div>
        )}
        
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
        
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <QuickActions actions={quickActions} />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <RecentActivity activities={recentActivity} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
