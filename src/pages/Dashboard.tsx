
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessOverview from '@/components/dashboard/WellnessOverview';
import TodayProgress from '@/components/dashboard/TodayProgress';
import UpcomingSessions from '@/components/dashboard/UpcomingSessions';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';
import Recommendations from '@/components/dashboard/Recommendations';
import SupportCenter from '@/components/dashboard/SupportCenter';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Sample data for components with proper interfaces
  const progressItems = [
    { id: '1', title: 'Daily Meditation', completed: true, time: '10 min', icon: '🧘' },
    { id: '2', title: 'Journal Entry', completed: false, time: '15 min', icon: '📝' },
    { id: '3', title: 'Therapy Session', completed: true, time: '60 min', icon: '💬' },
    { id: '4', title: 'Mindfulness Exercise', completed: false, time: '5 min', icon: '🌸' },
  ];

  const activities = [
    { id: '1', type: 'journal', title: 'Completed morning reflection', time: '2 hours ago', timestamp: new Date(), icon: '📝' },
    { id: '2', type: 'therapy', title: 'Session with Dr. Johnson', time: '1 day ago', timestamp: new Date(), icon: '💬' },
    { id: '3', type: 'meditation', title: '15-minute mindfulness', time: '2 days ago', timestamp: new Date(), icon: '🧘' },
    { id: '4', type: 'community', title: 'Posted in support group', time: '3 days ago', timestamp: new Date(), icon: '👥' },
  ];

  const recommendations = [
    { id: '1', title: 'Breathing Exercise', description: 'Try a 5-minute breathing exercise', type: 'exercise', route: '/mental-health/mood', priority: 'high' },
    { id: '2', title: 'Sleep Hygiene Tips', description: 'Improve your sleep quality', type: 'article', route: '/resources', priority: 'medium' },
    { id: '3', title: 'Gratitude Journal', description: 'Start a daily gratitude practice', type: 'activity', route: '/journal/write', priority: 'low' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="Alex" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Mobile Welcome Section */}
        <div className="block lg:hidden mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Here's your wellness overview for today</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Content - Takes up more space on desktop */}
          <div className="lg:col-span-8 space-y-6 lg:space-y-8">
            {/* Welcome Section - Desktop only */}
            <div className="hidden lg:block">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
              <p className="text-gray-600">Here's your wellness overview for today</p>
            </div>

            <WellnessOverview />
            <TodayProgress progressItems={progressItems} />
            
            {/* Mobile-optimized Recent Activity */}
            <div className="block lg:hidden">
              <RecentActivity activities={activities} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:space-y-8">
            <UpcomingSessions />
            <QuickActions />
            
            {/* Support Center - Higher priority on mobile */}
            <div className="order-first lg:order-none">
              <SupportCenter />
            </div>
            
            {/* Desktop Recent Activity */}
            <div className="hidden lg:block">
              <RecentActivity activities={activities} />
            </div>
            
            <Recommendations recommendations={recommendations} />
          </div>
        </div>

        {/* Mobile Bottom Actions */}
        <div className="block lg:hidden mt-8 pb-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => navigate('/chat/lyfbot')}
                className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors"
              >
                <div className="text-2xl mb-2">🤖</div>
                <div className="text-sm font-medium text-blue-700">Chat with AI</div>
              </button>
              <button 
                onClick={() => navigate('/teletherapy')}
                className="p-4 bg-green-50 rounded-lg text-center hover:bg-green-100 transition-colors"
              >
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm font-medium text-green-700">Therapists</div>
              </button>
              <button 
                onClick={() => navigate('/journal')}
                className="p-4 bg-purple-50 rounded-lg text-center hover:bg-purple-100 transition-colors"
              >
                <div className="text-2xl mb-2">📔</div>
                <div className="text-sm font-medium text-purple-700">Journal</div>
              </button>
              <button 
                onClick={() => navigate('/mental-health/mood')}
                className="p-4 bg-orange-50 rounded-lg text-center hover:bg-orange-100 transition-colors"
              >
                <div className="text-2xl mb-2">🎭</div>
                <div className="text-sm font-medium text-orange-700">Mood Tracker</div>
              </button>
              <button 
                onClick={() => navigate('/community')}
                className="p-4 bg-indigo-50 rounded-lg text-center hover:bg-indigo-100 transition-colors"
              >
                <div className="text-2xl mb-2">👥</div>
                <div className="text-sm font-medium text-indigo-700">Community</div>
              </button>
              <button 
                onClick={() => navigate('/resources')}
                className="p-4 bg-cyan-50 rounded-lg text-center hover:bg-cyan-100 transition-colors"
              >
                <div className="text-2xl mb-2">📚</div>
                <div className="text-sm font-medium text-cyan-700">Resources</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
