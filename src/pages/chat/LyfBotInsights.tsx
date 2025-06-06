
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, MessageSquare, Target, Download, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const LyfBotInsights = () => {
  const navigate = useNavigate();

  const progressStats = {
    conversationsThisMonth: 24,
    moodTrend: 'improving',
    goalsAchieved: { completed: 3, total: 5 },
    averageSessionLength: '12 min'
  };

  const topicBreakdown = [
    { topic: 'Work Stress', percentage: 45, color: 'bg-red-400' },
    { topic: 'Sleep Issues', percentage: 30, color: 'bg-blue-400' },
    { topic: 'Anxiety Management', percentage: 25, color: 'bg-green-400' }
  ];

  const helpfulStrategies = [
    'Breathing exercises',
    'Progressive muscle relaxation',
    'Journaling prompts',
    'Sleep hygiene routine'
  ];

  const recommendedToTry = [
    'Mindfulness meditation',
    'Sleep hygiene routine',
    'Structured problem-solving',
    'Social connection activities'
  ];

  const crisisHistory = {
    interventions: 0,
    emergencyContactsUsed: 0,
    status: 'safe'
  };

  const weeklyData = [
    { day: 'Mon', conversations: 4, mood: 6 },
    { day: 'Tue', conversations: 3, mood: 7 },
    { day: 'Wed', conversations: 5, mood: 5 },
    { day: 'Thu', conversations: 2, mood: 8 },
    { day: 'Fri', conversations: 3, mood: 7 },
    { day: 'Sat', conversations: 1, mood: 9 },
    { day: 'Sun', conversations: 2, mood: 8 }
  ];

  const handleExportInsights = () => {
    console.log('Exporting insights');
    // In real app, this would generate and download a report
  };

  const handleShareWithTherapist = () => {
    console.log('Sharing insights with therapist');
    // In real app, this would send insights to therapist
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/chat/lyfbot')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Conversation Insights</h1>
            <p className="text-sm text-gray-600">Your progress with LyfBot</p>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              Your Progress with LyfBot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">
                  {progressStats.conversationsThisMonth}
                </div>
                <div className="text-sm text-blue-600">📊 Conversations this month</div>
              </div>
              
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-700 flex items-center justify-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {progressStats.moodTrend}
                </div>
                <div className="text-sm text-green-600">📈 Mood trend (2 weeks)</div>
              </div>
              
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-lg font-bold text-purple-700">
                  {progressStats.goalsAchieved.completed}/{progressStats.goalsAchieved.total}
                </div>
                <div className="text-sm text-purple-600">🎯 Goals achieved</div>
              </div>
              
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-lg font-bold text-yellow-700">
                  {progressStats.averageSessionLength}
                </div>
                <div className="text-sm text-yellow-600">⏱️ Avg session</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activity Chart */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium w-8">{day.day}</span>
                  <div className="flex-1 mx-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-mindlyfe-blue h-2 rounded-full"
                          style={{ width: `${(day.conversations / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-8">{day.conversations}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">😊</span>
                    <span className="text-sm font-medium">{day.mood}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Topics */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Common Topics Discussed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topicBreakdown.map((topic, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{index + 1}. {topic.topic}</span>
                  <span className="text-sm text-gray-600">{topic.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${topic.color} h-2 rounded-full`}
                    style={{ width: `${topic.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Helpful Strategies */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Helpful Strategies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                ⭐ Most effective for you:
              </h3>
              <div className="space-y-2">
                {helpfulStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                📝 Recommended to try:
              </h3>
              <div className="space-y-2">
                {recommendedToTry.map((strategy, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crisis Support History */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-green-500" />
              Crisis Support History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-green-800">🆘 Crisis interventions</div>
                  <div className="text-sm text-green-600">This month</div>
                </div>
                <div className="text-2xl font-bold text-green-700">
                  {crisisHistory.interventions}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-green-600">
                <span>✅</span>
                <span>All conversations have been safe</span>
              </div>
              
              <div className="text-sm text-gray-600">
                📞 Emergency contacts used: {crisisHistory.emergencyContactsUsed}
                <br />
                <span className="text-green-600">No emergency support needed this month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights Actions */}
        <div className="flex gap-3">
          <Button
            onClick={handleExportInsights}
            variant="outline"
            className="flex-1 border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue hover:text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Insights
          </Button>
          <Button
            onClick={handleShareWithTherapist}
            variant="outline"
            className="flex-1 border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green hover:text-white"
          >
            <Share className="w-4 h-4 mr-2" />
            Share with Therapist
          </Button>
        </div>

        {/* Back to LyfBot */}
        <Button
          onClick={() => navigate('/chat/lyfbot')}
          className="w-full mt-4 bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Back to LyfBot
        </Button>
      </div>
    </div>
  );
};

export default LyfBotInsights;
