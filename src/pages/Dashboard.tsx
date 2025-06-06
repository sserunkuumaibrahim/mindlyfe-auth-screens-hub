
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Activity, 
  Target, 
  FileText, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Video,
  Calendar,
  TrendingUp,
  AlertCircle,
  Plus
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const user = {
    firstName: 'John'
  };

  const todayStats = {
    moodScore: 4,
    moodEmoji: '🙂',
    streakDays: 7,
    goalsCompleted: 2,
    totalGoals: 5
  };

  const quickActions = [
    {
      title: 'Log Mood',
      description: 'Track your daily mood',
      icon: Activity,
      route: '/mental-health/mood',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Mental Health Check',
      description: 'Take wellness assessment',
      icon: Brain,
      route: '/mental-health/assessment',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'Journal Entry',
      description: 'Write in your journal',
      icon: FileText,
      route: '/journal/write',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Browse Resources',
      description: 'Explore learning materials',
      icon: BookOpen,
      route: '/resources',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  const recentActivity = [
    { action: 'Completed mood check', time: '2 hours ago', type: 'mood' },
    { action: 'Finished anxiety assessment', time: '1 day ago', type: 'assessment' },
    { action: 'Wrote journal entry', time: '1 day ago', type: 'journal' },
    { action: 'Completed meditation goal', time: '2 days ago', type: 'goal' }
  ];

  const upcomingSessions = [
    {
      id: '1',
      type: 'Individual Therapy',
      therapist: 'Dr. Sarah Johnson',
      date: 'Today',
      time: '3:00 PM',
      status: 'confirmed'
    },
    {
      id: '2',
      type: 'Group Session',
      therapist: 'Dr. Michael Chen',
      date: 'Tomorrow',
      time: '10:00 AM',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName={user.firstName} notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.firstName}! 👋
          </h1>
          <p className="text-gray-600">Here's your wellness overview for today</p>
        </div>

        {/* Today's Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">{todayStats.moodEmoji}</div>
              <div className="font-semibold text-lg">Today's Mood</div>
              <div className="text-sm text-gray-600">{todayStats.moodScore}/5</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="font-semibold text-lg">Streak</div>
              <div className="text-sm text-gray-600">{todayStats.streakDays} days</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold text-lg">Goals Progress</div>
              <div className="text-sm text-gray-600">
                {todayStats.goalsCompleted}/{todayStats.totalGoals} completed
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-semibold text-lg">Wellness Score</div>
              <div className="text-sm text-gray-600">7.8/10 ⬆️</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => navigate(action.route)}
                    className="h-24 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all"
                  >
                    <action.icon className="w-6 h-6 text-gray-600" />
                    <div className="text-center">
                      <div className="font-semibold text-sm">{action.title}</div>
                      <div className="text-xs text-gray-500">{action.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm">{session.type}</h4>
                    <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                      {session.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{session.therapist}</p>
                  <p className="text-xs text-gray-500">{session.date} at {session.time}</p>
                </div>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => navigate('/teletherapy')}
              >
                View All Sessions
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-2">
                  <div className="w-2 h-2 bg-mindlyfe-blue rounded-full flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => navigate('/mental-health/progress')}
              >
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Wellness Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Wellness Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                onClick={() => navigate('/mental-health/dashboard')}
                className="w-full justify-start"
              >
                <Brain className="w-4 h-4 mr-2" />
                Mental Health Dashboard
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/mental-health/goals')}
                className="w-full justify-start"
              >
                <Target className="w-4 h-4 mr-2" />
                Wellness Goals
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/dashboard/analytics')}
                className="w-full justify-start"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics & Insights
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/community')}
                className="w-full justify-start"
              >
                <Users className="w-4 h-4 mr-2" />
                Community Support
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Crisis Support Banner */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-red-800">Need immediate support?</p>
                <p className="text-sm text-red-700">If you're experiencing a mental health crisis, help is available 24/7.</p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/mental-health/crisis')}
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                Get Help
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
