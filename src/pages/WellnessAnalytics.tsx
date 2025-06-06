
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Brain, Activity, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const WellnessAnalytics = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState('30');

  // Mock data for mood tracking
  const moodData = [
    { day: 'Mon', mood: 7, energy: 6, stress: 4 },
    { day: 'Tue', mood: 8, energy: 7, stress: 3 },
    { day: 'Wed', mood: 6, energy: 5, stress: 6 },
    { day: 'Thu', mood: 9, energy: 8, stress: 2 },
    { day: 'Fri', mood: 7, energy: 6, stress: 4 },
    { day: 'Sat', mood: 8, energy: 7, stress: 3 },
    { day: 'Sun', mood: 9, energy: 8, stress: 2 },
  ];

  // Activity summary data
  const activityData = [
    { name: 'Meditation', sessions: 15, growth: '+20%' },
    { name: 'Therapy', sessions: 4, growth: '+15%' },
    { name: 'Journaling', sessions: 12, growth: '+30%' },
    { name: 'Community', posts: 8, growth: '+10%' },
    { name: 'LyfBot', conversations: 25, growth: '+40%' }
  ];

  // Insights data
  const insights = [
    {
      type: 'correlation',
      title: 'Mood improves on meditation days',
      description: 'Your mood scores are 23% higher on days when you meditate.',
      icon: <Brain className="w-5 h-5 text-blue-600" />
    },
    {
      type: 'pattern',
      title: 'Therapy sessions boost wellness',
      description: 'Wellness scores increase by 15% in the week following therapy.',
      icon: <TrendingUp className="w-5 h-5 text-green-600" />
    },
    {
      type: 'recommendation',
      title: 'Consider morning routine',
      description: 'Adding a morning routine could improve consistency by 30%.',
      icon: <Target className="w-5 h-5 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - Responsive */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Dashboard</span>
              <span className="sm:hidden">Back</span>
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Wellness Analytics</h1>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Button 
              variant={timeframe === '7' ? 'default' : 'outline'} 
              onClick={() => setTimeframe('7')}
              size="sm"
              className="whitespace-nowrap"
            >
              7 Days
            </Button>
            <Button 
              variant={timeframe === '30' ? 'default' : 'outline'} 
              onClick={() => setTimeframe('30')}
              size="sm"
              className="whitespace-nowrap"
            >
              30 Days
            </Button>
            <Button 
              variant={timeframe === '90' ? 'default' : 'outline'} 
              onClick={() => setTimeframe('90')}
              size="sm"
              className="whitespace-nowrap"
            >
              3 Months
            </Button>
          </div>
        </div>

        {/* Charts Grid - Responsive */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Mood Tracking Chart - Full Width on Mobile */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Activity className="w-5 h-5 text-blue-600" />
                Mood & Wellness Trends
              </CardTitle>
              <p className="text-sm text-gray-600">
                Average mood: 7.6/10 (↗️ +0.8 from last week)
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="mood" stroke="#3B82F6" strokeWidth={3} name="Mood" />
                  <Line type="monotone" dataKey="energy" stroke="#10B981" strokeWidth={2} name="Energy" />
                  <Line type="monotone" dataKey="stress" stroke="#EF4444" strokeWidth={2} name="Stress" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Activity Summary - Responsive */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl">Activity Summary</CardTitle>
              <p className="text-sm text-gray-600">Last 30 days</p>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              {activityData.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-900 text-sm md:text-base">{activity.name}</div>
                    <div className="text-xs md:text-sm text-gray-600 truncate">
                      {activity.sessions ? `${activity.sessions} sessions` : `${activity.posts} posts`}
                      {activity.conversations && `${activity.conversations} conversations`}
                    </div>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-green-600 ml-2">{activity.growth}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Insights & Recommendations - Responsive */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl">AI Insights & Recommendations</CardTitle>
              <p className="text-sm text-gray-600">Personalized insights based on your data</p>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">{insight.icon}</div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{insight.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Weekly Patterns - Full Width */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg md:text-xl">Weekly Activity Patterns</CardTitle>
            <p className="text-sm text-gray-600">Your wellness activities throughout the week</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180} className="md:h-[200px]">
              <BarChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="mood" fill="#3B82F6" name="Mood Score" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WellnessAnalytics;
