
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { 
  ArrowLeft, 
  TrendingUp, 
  Calendar, 
  Heart, 
  FileText, 
  Download, 
  Share,
  Target,
  Zap
} from 'lucide-react';

const JournalAnalytics = () => {
  const navigate = useNavigate();
  
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  // Mock data
  const moodTrendData = [
    { date: '1', mood: 3, entries: 1 },
    { date: '5', mood: 4, entries: 2 },
    { date: '10', mood: 2, entries: 1 },
    { date: '15', mood: 5, entries: 3 },
    { date: '20', mood: 4, entries: 2 },
    { date: '25', mood: 4, entries: 1 },
    { date: '30', mood: 5, entries: 2 }
  ];

  const weeklyFrequency = [
    { day: 'Mon', entries: 8 },
    { day: 'Tue', entries: 6 },
    { day: 'Wed', entries: 8 },
    { day: 'Thu', entries: 4 },
    { day: 'Fri', entries: 6 },
    { day: 'Sat', entries: 10 },
    { day: 'Sun', entries: 12 }
  ];

  const topEmotions = [
    { emotion: 'Grateful', frequency: 45, color: 'bg-green-100 text-green-800' },
    { emotion: 'Anxious', frequency: 32, color: 'bg-red-100 text-red-800' },
    { emotion: 'Hopeful', frequency: 28, color: 'bg-blue-100 text-blue-800' },
    { emotion: 'Content', frequency: 25, color: 'bg-purple-100 text-purple-800' },
    { emotion: 'Excited', frequency: 22, color: 'bg-yellow-100 text-yellow-800' }
  ];

  const popularTags = [
    'gratitude', 'work', 'anxiety', 'meditation', 'goals', 
    'family', 'therapy', 'progress', 'hope', 'growth'
  ];

  const analytics = {
    totalEntries: 156,
    currentStreak: 7,
    longestStreak: 23,
    averageWords: 234,
    averageMood: 4.2,
    moodTrend: 'improving',
    bestWritingDay: 'Sunday',
    totalWords: 36504
  };

  const getMoodLabel = (mood: number) => {
    if (mood >= 4.5) return 'Excellent';
    if (mood >= 4) return 'Good';
    if (mood >= 3) return 'Neutral';
    if (mood >= 2) return 'Low';
    return 'Very Low';
  };

  const getMoodColor = (mood: number) => {
    if (mood >= 4) return 'text-green-600';
    if (mood >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'improving' ? '↗️' : trend === 'declining' ? '↘️' : '➡️';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/journal')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Journal Analytics</h1>
              <p className="text-gray-600">Insights into your writing and emotional journey</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button
              variant="outline"
              className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
            >
              <Share className="w-4 h-4 mr-2" />
              Share Progress
            </Button>
          </div>
        </div>

        {/* Period Selector */}
        <div className="mb-6">
          <div className="flex gap-2">
            {[
              { value: '7d', label: '7 Days' },
              { value: '30d', label: '30 Days' },
              { value: '90d', label: '90 Days' },
              { value: '1y', label: '1 Year' }
            ].map(period => (
              <Button
                key={period.value}
                variant={selectedPeriod === period.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPeriod(period.value as any)}
                className={selectedPeriod === period.value ? 'bg-mindlyfe-blue hover:bg-mindlyfe-blue/90' : ''}
              >
                {period.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Overview Stats */}
          <div className="space-y-6">
            {/* Writing Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-mindlyfe-blue" />
                  Writing Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-mindlyfe-blue">{analytics.totalEntries}</div>
                  <div className="text-sm text-gray-600">Total entries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-mindlyfe-green">🔥{analytics.currentStreak}</div>
                  <div className="text-sm text-gray-600">Current streak</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{analytics.longestStreak}</div>
                  <div className="text-sm text-gray-600">Longest streak</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{analytics.averageWords}</div>
                  <div className="text-sm text-gray-600">Average words</div>
                </div>
              </CardContent>
            </Card>

            {/* Mood Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Mood Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className={`text-2xl font-bold ${getMoodColor(analytics.averageMood)}`}>
                    {analytics.averageMood.toFixed(1)}/5
                  </div>
                  <div className="text-sm text-gray-600">
                    Average mood ({getMoodLabel(analytics.averageMood)})
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getTrendIcon(analytics.moodTrend)}</span>
                  <div>
                    <div className="font-medium text-gray-900 capitalize">{analytics.moodTrend}</div>
                    <div className="text-sm text-gray-600">Trend</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Emotions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Top Emotions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topEmotions.map((emotion, index) => (
                    <div key={emotion.emotion} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">{index + 1}.</span>
                        <Badge className={emotion.color}>
                          {emotion.emotion}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-600">{emotion.frequency} mentions</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle & Right Columns - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-mindlyfe-blue" />
                  Mood Trends ({selectedPeriod})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={moodTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[1, 5]} />
                      <Tooltip 
                        formatter={(value, name) => [value, name === 'mood' ? 'Mood' : 'Entries']}
                        labelFormatter={(label) => `Day ${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="mood" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">
                      Average mood: {analytics.averageMood.toFixed(1)}/5 ({getMoodLabel(analytics.averageMood)})
                    </span>
                  </div>
                  <div className="text-sm text-blue-700 mt-1">
                    Trend: {getTrendIcon(analytics.moodTrend)} {analytics.moodTrend}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Writing Frequency */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-mindlyfe-green" />
                  Writing Frequency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyFrequency}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip formatter={(value) => [value, 'Entries']} />
                      <Bar dataKey="entries" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900">
                      Best writing day: {analytics.bestWritingDay}
                    </span>
                  </div>
                  <div className="text-sm text-green-700 mt-1">
                    You write most consistently on weekends
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm font-medium text-purple-900">
                    Most used themes: Gratitude, Personal Growth, Mental Health
                  </div>
                  <div className="text-sm text-purple-700 mt-1">
                    Your writing focuses on positive reflection and self-improvement
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalAnalytics;
