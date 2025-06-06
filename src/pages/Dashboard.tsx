
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessMetrics from '@/components/dashboard/WellnessMetrics';
import TodayProgress from '@/components/dashboard/TodayProgress';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentActivity from '@/components/dashboard/RecentActivity';
import Recommendations from '@/components/dashboard/Recommendations';
import CalendarWidget from '@/components/dashboard/CalendarWidget';
import UpcomingSessions from '@/components/dashboard/UpcomingSessions';
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

  // Wellness metrics data
  const wellnessData = {
    overallScore: 78,
    goalsCompleted: 3,
    totalGoals: 5,
    currentStreak: 12,
    moodTrend: 'improving' as const
  };

  // Progress tracking data
  const progressData = [
    {
      id: '1',
      title: 'Morning mood check',
      completed: true,
      icon: '😊'
    },
    {
      id: '2',
      title: 'Therapy session',
      completed: false,
      time: '3 PM',
      icon: '🩺'
    },
    {
      id: '3',
      title: 'Meditation',
      completed: false,
      time: '5 PM',
      icon: '🧘'
    },
    {
      id: '4',
      title: 'Evening reflection',
      completed: false,
      icon: '✨'
    }
  ];

  // Recent activity data
  const recentActivities = [
    {
      id: '1',
      type: 'achievement',
      title: 'Earned "Mindful Week" badge',
      timestamp: '2 hours ago',
      icon: '🏆'
    },
    {
      id: '2',
      type: 'community',
      title: '3 new community replies',
      timestamp: '4 hours ago',
      icon: '💬'
    },
    {
      id: '3',
      type: 'analytics',
      title: 'Weekly wellness report ready',
      timestamp: '1 day ago',
      icon: '📊'
    },
    {
      id: '4',
      type: 'milestone',
      title: 'Meditation goal milestone reached',
      timestamp: '1 day ago',
      icon: '🎯'
    }
  ];

  // Recommendations data
  const recommendations = [
    {
      id: '1',
      type: 'course',
      title: 'Stress Management Course',
      description: 'Learn effective stress reduction techniques',
      route: '/courses/stress-management',
      priority: 'high' as const
    },
    {
      id: '2',
      type: 'connection',
      title: 'Connect with Sarah M.',
      description: 'Fellow community member with similar interests',
      route: '/community/profile/sarah-m',
      priority: 'medium' as const
    },
    {
      id: '3',
      type: 'activity',
      title: 'Evening Reflection',
      description: 'Take time to reflect on your day',
      route: '/reflection/evening',
      priority: 'medium' as const
    }
  ];

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
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-8">
        {isRefreshing && (
          <div className="fixed top-16 sm:top-20 md:top-24 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-primary border-t-transparent"></div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">Refreshing dashboard...</p>
            </div>
          </div>
        )}
        
        {/* Main Grid Layout - Fully Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-4 md:gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-4 md:space-y-6">
            {/* Wellness Metrics - Full Width */}
            <WellnessMetrics 
              overallScore={wellnessData.overallScore}
              goalsCompleted={wellnessData.goalsCompleted}
              totalGoals={wellnessData.totalGoals}
              currentStreak={wellnessData.currentStreak}
              moodTrend={wellnessData.moodTrend}
            />
            
            {/* Progress & Activity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <TodayProgress progressItems={progressData} />
              <RecentActivity activities={recentActivities} />
            </div>
            
            {/* Recommendations - Full Width on Mobile */}
            <Recommendations recommendations={recommendations} />
          </div>
          
          {/* Right Column - Sidebar Content */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-4 md:space-y-6">
            {/* Calendar Widget */}
            <CalendarWidget />
            
            {/* Upcoming Sessions */}
            <UpcomingSessions />
            
            {/* Quick Actions - Mobile: Full Width, Desktop: Sidebar */}
            <div className="lg:block">
              <QuickActions />
            </div>
          </div>
        </div>

        {/* Action Buttons - Responsive Layout */}
        <div className="mt-6 md:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <button 
              onClick={() => navigate('/dashboard/analytics')}
              className="w-full px-4 md:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm md:text-base"
            >
              View Analytics
            </button>
            <button 
              onClick={() => navigate('/dashboard/progress')}
              className="w-full px-4 md:px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm md:text-base"
            >
              Track Progress
            </button>
            <button 
              onClick={() => navigate('/dashboard/notifications')}
              className="w-full px-4 md:px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm md:text-base"
            >
              Notifications
            </button>
            <button 
              onClick={handleRefresh}
              className="w-full px-4 md:px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold text-sm md:text-base"
              disabled={isRefreshing}
            >
              {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
