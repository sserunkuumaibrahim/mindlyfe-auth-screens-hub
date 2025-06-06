
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, Activity, Brain, MessageCircle, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const WellnessAnalytics = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('7days');

  const moodData = [
    { day: 'Mon', mood: 6.5, energy: 7.2 },
    { day: 'Tue', mood: 7.8, energy: 8.1 },
    { day: 'Wed', mood: 8.2, energy: 7.5 },
    { day: 'Thu', mood: 7.1, energy: 6.8 },
    { day: 'Fri', mood: 8.5, energy: 8.9 },
    { day: 'Sat', mood: 9.2, energy: 9.1 },
    { day: 'Sun', mood: 8.7, energy: 8.3 }
  ];

  const activityData = [
    { activity: 'Meditation', count: 5, color: '#10b981' },
    { activity: 'Journal', count: 7, color: '#8b5cf6' },
    { activity: 'Therapy', count: 2, color: '#3b82f6' },
    { activity: 'LyfBot', count: 12, color: '#f59e0b' },
    { activity: 'Community', count: 15, color: '#ef4444' }
  ];

  const insights = [
    {
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      title: "Mood Pattern Discovery",
      description: "Your mood improves significantly on days with meditation sessions"
    },
    {
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      title: "Therapy Correlation",
      description: "Therapy sessions show positive correlation with wellness score improvements"
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      title: "Routine Recommendation",
      description: "Consider adding morning meditation for consistency in mood patterns"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/dashboard')}
            className="hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Wellness Analytics</h1>
        </div>

        {/* Time Period Selector */}
        <Card className="mb-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardContent className="p-4">
            <div className="flex gap-2">
              {['7days', '30days', '3months'].map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                  className={selectedPeriod === period ? "" : "bg-white/50"}
                >
                  {period === '7days' ? '7 Days' : period === '30days' ? '30 Days' : '3 Months'}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mood Tracking Chart */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Mood Tracking
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">7.2/10</span>
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  ↗️ +0.8
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis domain={[0, 10]} stroke="#64748b" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="mood" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="energy" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Activity Summary */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                Activity Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="activity" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Insights & Recommendations */}
        <Card className="mt-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-500" />
              Insights & Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-white/20">
                  <div className="flex-shrink-0 mt-1">
                    {insight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WellnessAnalytics;
