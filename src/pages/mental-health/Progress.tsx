
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, Activity, Trophy } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const MentalHealthProgress = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState('month');

  // Mock data
  const progressData = [
    { month: 'Jan', wellness: 6.2, mood: 6.5, stress: 4.2, sleep: 5.8 },
    { month: 'Feb', wellness: 6.8, mood: 7.1, stress: 3.8, sleep: 6.2 },
    { month: 'Mar', wellness: 7.5, mood: 7.8, stress: 3.2, sleep: 6.9 },
    { month: 'Apr', wellness: 7.8, mood: 8.0, stress: 2.8, sleep: 7.1 }
  ];

  const weeklyActivity = [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 15 },
    { day: 'Wed', minutes: 60 },
    { day: 'Thu', minutes: 30 },
    { day: 'Fri', minutes: 20 },
    { day: 'Sat', minutes: 75 },
    { day: 'Sun', minutes: 25 }
  ];

  const categoryBreakdown = [
    { category: 'Mood Stability', score: 8.2, trend: 'up', progress: 82 },
    { category: 'Stress Management', score: 7.5, trend: 'up', progress: 75 },
    { category: 'Sleep Quality', score: 6.8, trend: 'same', progress: 68 },
    { category: 'Social Connection', score: 7.9, trend: 'up', progress: 79 }
  ];

  const achievements = [
    {
      id: '1',
      title: '30-day mood tracking',
      description: 'Consistently tracked mood for 30 days',
      icon: '🎯',
      earnedDate: '2 weeks ago'
    },
    {
      id: '2',
      title: 'Completed 5 goals',
      description: 'Successfully completed 5 wellness goals',
      icon: '🏆',
      earnedDate: '1 week ago'
    },
    {
      id: '3',
      title: 'Stress reduced by 20%',
      description: 'Achieved significant stress reduction',
      icon: '💪',
      earnedDate: '3 days ago'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '⬆️';
      case 'down': return '⬇️';
      default: return '➡️';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/mental-health/dashboard')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Progress Tracking</h1>
          </div>
        </div>

        {/* Time Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <Button 
            variant={timeframe === 'week' ? 'default' : 'outline'}
            onClick={() => setTimeframe('week')}
            size="sm"
          >
            Week
          </Button>
          <Button 
            variant={timeframe === 'month' ? 'default' : 'outline'}
            onClick={() => setTimeframe('month')}
            size="sm"
          >
            Month
          </Button>
          <Button 
            variant={timeframe === '3months' ? 'default' : 'outline'}
            onClick={() => setTimeframe('3months')}
            size="sm"
          >
            3 Months
          </Button>
          <Button 
            variant={timeframe === 'year' ? 'default' : 'outline'}
            onClick={() => setTimeframe('year')}
            size="sm"
          >
            Year
          </Button>
        </div>

        {/* Learning Stats */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Your Wellness Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-mindlyfe-blue mb-1">7.8/10</div>
                <div className="text-sm text-gray-600">Current Wellness</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                  ⬆️ +0.5
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mindlyfe-blue mb-1">12h 30m</div>
                <div className="text-sm text-gray-600">Total Time</div>
                <div className="text-xs text-gray-500">This month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mindlyfe-blue mb-1">7 days</div>
                <div className="text-sm text-gray-600">Current Streak</div>
                <div className="text-xs text-green-600">🔥 Personal best</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mindlyfe-blue mb-1">3</div>
                <div className="text-sm text-gray-600">Achievements</div>
                <div className="text-xs text-gray-500">This month</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Overall Wellness Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Overall Wellness Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="wellness" stroke="#3B82F6" strokeWidth={3} name="Wellness" />
                  <Line type="monotone" dataKey="mood" stroke="#10B981" strokeWidth={2} name="Mood" />
                  <Line type="monotone" dataKey="stress" stroke="#EF4444" strokeWidth={2} name="Stress" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Weekly Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
              <p className="text-sm text-gray-600">This week: 4h 30m | Goal: 5h 00m (90% complete)</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weeklyActivity.map((day) => (
                  <div key={day.day} className="flex items-center gap-3">
                    <div className="w-8 text-sm font-medium text-gray-600">{day.day}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-mindlyfe-blue h-2 rounded-full transition-all"
                        style={{ width: `${(day.minutes / 75) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 w-12">{day.minutes} min</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {categoryBreakdown.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{category.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{category.score}/10</span>
                    <span className={getTrendColor(category.trend)}>
                      {getTrendIcon(category.trend)}
                    </span>
                  </div>
                </div>
                <Progress value={category.progress} className="h-3" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center gap-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">Earned {achievement.earnedDate}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Achievements
            </Button>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex-1 bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
            Set Learning Goals
          </Button>
          <Button variant="outline" className="flex-1">
            Export Progress
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthProgress;
