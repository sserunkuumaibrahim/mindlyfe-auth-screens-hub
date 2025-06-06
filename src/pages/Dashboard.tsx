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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, BookOpen, MessageSquare, Users, Brain, Target, Award } from 'lucide-react';

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
    { id: '1', type: 'journal', title: 'Completed morning reflection', timestamp: '2 hours ago', icon: '📝' },
    { id: '2', type: 'therapy', title: 'Session with Dr. Johnson', timestamp: '1 day ago', icon: '💬' },
    { id: '3', type: 'meditation', title: '15-minute mindfulness', timestamp: '2 days ago', icon: '🧘' },
    { id: '4', type: 'community', title: 'Posted in support group', timestamp: '3 days ago', icon: '👥' },
  ];

  const recommendations = [
    { id: '1', title: 'Breathing Exercise', description: 'Try a 5-minute breathing exercise', type: 'exercise', route: '/mental-health/mood', priority: 'high' as const },
    { id: '2', title: 'Sleep Hygiene Tips', description: 'Improve your sleep quality', type: 'article', route: '/resources', priority: 'medium' as const },
    { id: '3', title: 'Gratitude Journal', description: 'Start a daily gratitude practice', type: 'activity', route: '/journal/write', priority: 'low' as const },
  ];

  const desktopFeatures = [
    {
      title: 'Mental Health Assessment',
      description: 'Complete comprehensive mental health evaluations',
      icon: '🧠',
      route: '/mental-health/assessment',
      color: 'bg-blue-50 border-blue-200',
      stats: '5 assessments completed'
    },
    {
      title: 'Mood Tracking',
      description: 'Track your daily mood and emotional patterns',
      icon: '🎭',
      route: '/mental-health/mood',
      color: 'bg-purple-50 border-purple-200',
      stats: '12 day streak'
    },
    {
      title: 'Wellness Goals',
      description: 'Set and track your mental wellness objectives',
      icon: '🎯',
      route: '/mental-health/goals',
      color: 'bg-green-50 border-green-200',
      stats: '3 active goals'
    },
    {
      title: 'Crisis Support',
      description: 'Immediate help when you need it most',
      icon: '🚨',
      route: '/mental-health/crisis',
      color: 'bg-red-50 border-red-200',
      stats: '24/7 available'
    },
    {
      title: 'Gamification',
      description: 'Earn badges and track achievements',
      icon: '🏆',
      route: '/gamification',
      color: 'bg-yellow-50 border-yellow-200',
      stats: '15 badges earned'
    },
    {
      title: 'Analytics',
      description: 'View detailed wellness analytics and insights',
      icon: '📊',
      route: '/dashboard/analytics',
      color: 'bg-indigo-50 border-indigo-200',
      stats: 'Weekly report ready'
    }
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

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Desktop Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
            <p className="text-gray-600">Here's your wellness overview for today</p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              <WellnessOverview />
              <TodayProgress progressItems={progressItems} />
              
              {/* Desktop Features Grid */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-mindlyfe-blue" />
                    Mental Health Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {desktopFeatures.map((feature, index) => (
                      <button
                        key={index}
                        onClick={() => navigate(feature.route)}
                        className={`p-4 rounded-lg border-2 text-left hover:shadow-md transition-all ${feature.color}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{feature.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                            <Badge variant="outline" className="text-xs">
                              {feature.stats}
                            </Badge>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <UpcomingSessions />
              <QuickActions />
              <SupportCenter />
              <RecentActivity activities={activities} />
              <Recommendations recommendations={recommendations} />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-6">
            <WellnessOverview />
            <TodayProgress progressItems={progressItems} />
            <UpcomingSessions />
            <QuickActions />
            <SupportCenter />
            <RecentActivity activities={activities} />
            <Recommendations recommendations={recommendations} />
          </div>

          {/* Mobile Bottom Actions */}
          <div className="mt-8 pb-6">
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
    </div>
  );
};

export default Dashboard;
