
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, Activity, Target, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WellnessDashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const weeklyMoodData = [
    { day: 'Mon', mood: 4, energy: 3, stress: 6 },
    { day: 'Tue', mood: 5, energy: 4, stress: 4 },
    { day: 'Wed', mood: 3, energy: 3, stress: 7 },
    { day: 'Thu', mood: 5, energy: 5, stress: 3 },
    { day: 'Fri', mood: 4, energy: 4, stress: 5 },
    { day: 'Sat', mood: 5, energy: 5, stress: 2 },
    { day: 'Sun', mood: 4, energy: 4, stress: 3 }
  ];

  const metrics = [
    { label: 'Average Mood', value: '4.2/5', trend: 'up', icon: '😊' },
    { label: 'Sleep Quality', value: '3.8/5', trend: 'same', icon: '😴' },
    { label: 'Stress Level', value: '2.1/5', trend: 'down', icon: '😌' },
    { label: 'Energy Level', value: '4.0/5', trend: 'up', icon: '⚡' }
  ];

  const insights = [
    {
      type: 'positive',
      title: 'Your mood improves on days when you exercise',
      description: 'Data shows a 23% higher mood score on exercise days'
    },
    {
      type: 'suggestion',
      title: 'Consider scheduling therapy sessions on Mondays',
      description: 'Stress tends to be higher at the beginning of the week'
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
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Wellness Dashboard</h1>
        </div>

        {/* Current Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-mindlyfe-blue" />
              Current Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-1">😊</div>
                <div className="font-semibold text-lg">Overall Wellness: Good</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-semibold text-lg">Risk Level: Low</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">📅</div>
                <div className="font-semibold text-lg">Last Check-in: Today</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Mood Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                This Week's Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={weeklyMoodData}>
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

          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{metric.icon}</span>
                    <span className="font-medium">{metric.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{metric.value}</span>
                    <span className={getTrendColor(metric.trend)}>
                      {getTrendIcon(metric.trend)}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-600" />
              AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {insight.type === 'positive' ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    ) : (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                    <p className="text-gray-600 text-sm">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Insights
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button
                variant="outline"
                onClick={() => navigate('/mental-health/mood')}
                className="h-20 flex flex-col items-center justify-center gap-2"
              >
                <span className="text-2xl">😊</span>
                <span className="text-sm">Log Mood</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/mental-health/assessment')}
                className="h-20 flex flex-col items-center justify-center gap-2"
              >
                <span className="text-2xl">📝</span>
                <span className="text-sm">Take Assessment</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/mental-health/goals')}
                className="h-20 flex flex-col items-center justify-center gap-2"
              >
                <span className="text-2xl">🎯</span>
                <span className="text-sm">Set Goal</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/teletherapy')}
                className="h-20 flex flex-col items-center justify-center gap-2"
              >
                <span className="text-2xl">👨‍⚕️</span>
                <span className="text-sm">Book Therapy</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Crisis Support Banner */}
        <Card className="mt-6 bg-red-50 border-red-200">
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

export default WellnessDashboard;
