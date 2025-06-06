
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
import { Brain, Target, Award, MessageSquare, Video, Users, BookOpen } from 'lucide-react';

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

  const mainFeatures = [
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
      title: 'LyfBot AI Assistant',
      description: 'Chat with our AI mental health companion 24/7',
      icon: '🤖',
      route: '/chat/lyfbot',
      color: 'bg-green-50 border-green-200',
      stats: 'Always available'
    },
    {
      title: 'Teletherapy Sessions',
      description: 'Connect with licensed therapists online',
      icon: '💬',
      route: '/teletherapy',
      color: 'bg-indigo-50 border-indigo-200',
      stats: '3 upcoming sessions'
    },
    {
      title: 'Wellness Goals',
      description: 'Set and track your mental wellness objectives',
      icon: '🎯',
      route: '/mental-health/goals',
      color: 'bg-orange-50 border-orange-200',
      stats: '3 active goals'
    },
    {
      title: 'Community Support',
      description: 'Connect with others on their wellness journey',
      icon: '👥',
      route: '/community',
      color: 'bg-pink-50 border-pink-200',
      stats: '150+ members'
    }
  ];

  const quickAccessActions = [
    {
      title: 'Chat with LyfBot',
      description: 'Get instant AI support',
      icon: '🤖',
      route: '/chat/lyfbot',
      color: 'bg-blue-50 hover:bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      title: 'Find Therapists',
      description: 'Browse available therapists',
      icon: '👩‍⚕️',
      route: '/teletherapy',
      color: 'bg-green-50 hover:bg-green-100',
      textColor: 'text-green-700'
    },
    {
      title: 'Write Journal',
      description: 'Record your thoughts',
      icon: '📔',
      route: '/journal/write',
      color: 'bg-purple-50 hover:bg-purple-100',
      textColor: 'text-purple-700'
    },
    {
      title: 'Track Mood',
      description: 'Log your current mood',
      icon: '🎭',
      route: '/mental-health/mood',
      color: 'bg-orange-50 hover:bg-orange-100',
      textColor: 'text-orange-700'
    },
    {
      title: 'Join Community',
      description: 'Connect with others',
      icon: '👥',
      route: '/community',
      color: 'bg-indigo-50 hover:bg-indigo-100',
      textColor: 'text-indigo-700'
    },
    {
      title: 'Browse Resources',
      description: 'Explore wellness content',
      icon: '📚',
      route: '/resources',
      color: 'bg-cyan-50 hover:bg-cyan-100',
      textColor: 'text-cyan-700'
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
              
              {/* Main Features Grid */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-mindlyfe-blue" />
                    Your Wellness Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mainFeatures.map((feature, index) => (
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
                {quickAccessActions.map((action, index) => (
                  <button 
                    key={index}
                    onClick={() => navigate(action.route)}
                    className={`p-4 rounded-lg text-center transition-colors ${action.color}`}
                  >
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <div className={`text-sm font-medium ${action.textColor}`}>{action.title}</div>
                    <div className="text-xs text-gray-600 mt-1">{action.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
