
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessMetrics from '@/components/dashboard/WellnessMetrics';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentActivity from '@/components/dashboard/RecentActivity';
import Recommendations from '@/components/dashboard/Recommendations';
import { useToast } from '@/hooks/use-toast';

interface WellnessMetrics {
  moodScore: number;
  streakDays: number;
  weeklyGoalProgress: number;
  totalSessions: number;
  lastActivity: Date;
  riskLevel: 'low' | 'medium' | 'high';
}

interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
  badge?: number;
  priority: number;
}

interface Activity {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  icon: string;
}

interface Recommendation {
  id: string;
  type: string;
  title: string;
  description: string;
  route: string;
  priority: 'high' | 'medium' | 'low';
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data - in real app this would come from API
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: '',
  };

  const wellnessData: WellnessMetrics = {
    moodScore: 8.2,
    streakDays: 7,
    weeklyGoalProgress: 75,
    totalSessions: 42,
    lastActivity: new Date(),
    riskLevel: 'low',
  };

  const quickActions: QuickAction[] = [];
  const recentActivity: Activity[] = [];
  const recommendations: Recommendation[] = [];
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

  const handleViewAllActivity = () => {
    navigate('/dashboard/activity');
  };

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
      className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5"
      onTouchStart={handleTouchStart}
    >
      <DashboardHeader 
        firstName={user.firstName}
        notificationCount={notificationCount}
      />
      
      <main className="px-4 py-6 pb-20">
        {isRefreshing && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            <p className="text-sm text-gray-600 mt-2">Refreshing...</p>
          </div>
        )}
        
        <WellnessMetrics
          moodScore={wellnessData.moodScore}
          streakDays={wellnessData.streakDays}
          weeklyGoalProgress={wellnessData.weeklyGoalProgress}
          totalSessions={wellnessData.totalSessions}
          lastActivity={wellnessData.lastActivity}
          riskLevel={wellnessData.riskLevel}
        />
        
        <QuickActions actions={quickActions} />
        
        <RecentActivity 
          activities={recentActivity}
          onViewAll={handleViewAllActivity}
        />
        
        <Recommendations recommendations={recommendations} />
      </main>
    </div>
  );
};

export default Dashboard;
