
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, TrendingUp, Trophy, Target, Flame, Calendar, Award, Share, Download } from 'lucide-react';

const ProgressTracking = () => {
  const navigate = useNavigate();

  // Mock data
  const levelProgress = {
    currentLevel: 8,
    currentXP: 1247,
    nextLevelXP: 1500,
    xpToNext: 253
  };

  const streakPerformance = [
    { name: 'Login', current: 12, best: 18, icon: '📅' },
    { name: 'Meditation', current: 5, best: 12, icon: '🧘' },
    { name: 'Journaling', current: 8, best: 15, icon: '📝' },
    { name: 'Therapy', current: 3, best: 7, icon: '👨‍⚕️' }
  ];

  const achievementCategories = [
    { name: 'Wellness Journey', progress: 75, color: 'bg-blue-500' },
    { name: 'Skill Building', progress: 60, color: 'bg-green-500' },
    { name: 'Community Engagement', progress: 40, color: 'bg-purple-500' }
  ];

  const monthlySummary = {
    badgesEarned: 5,
    pointsGained: 847,
    challengesCompleted: 23,
    rankImprovement: 45,
    bestCategory: 'Mindfulness',
    focusArea: 'Consistency'
  };

  const weeklyActivity = [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 15 },
    { day: 'Wed', minutes: 60 },
    { day: 'Thu', minutes: 30 },
    { day: 'Fri', minutes: 20 },
    { day: 'Sat', minutes: 75 },
    { day: 'Sun', minutes: 25 }
  ];

  const streakRecoveryUsed = { used: 2, total: 5 };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/gamification')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Progress Analytics</h1>
            <p className="text-sm text-gray-600">Detailed view of your achievements</p>
          </div>
        </div>

        {/* Overall Progress */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">Level {levelProgress.currentLevel}</span>
                <span className="text-sm text-gray-600">
                  {levelProgress.currentXP.toLocaleString()}/{levelProgress.nextLevelXP.toLocaleString()} XP
                </span>
              </div>
              <Progress value={(levelProgress.currentXP / levelProgress.nextLevelXP) * 100} className="h-3" />
              <div className="text-sm text-gray-600 mt-2">
                {levelProgress.xpToNext} XP to next level
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Streak Performance */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              Streak Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {streakPerformance.map((streak, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{streak.icon}</span>
                  <span className="font-medium text-gray-900">{streak.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-mindlyfe-blue">{streak.current} days</div>
                  <div className="text-xs text-gray-500">Best: {streak.best}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <span className="text-sm text-yellow-800">Streak Recovery Used</span>
              <span className="font-bold text-yellow-700">{streakRecoveryUsed.used}/{streakRecoveryUsed.total}</span>
            </div>
          </CardContent>
        </Card>

        {/* Achievement Progress */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              Achievement Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievementCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{category.name}</span>
                  <span className="text-sm text-gray-600">{category.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${category.color}`}
                    style={{ width: `${category.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-500" />
              Weekly Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              {weeklyActivity.map((day, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-8 text-sm text-gray-600">{day.day}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(day.minutes / 75) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12">{day.minutes} min</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="font-bold text-lg text-green-600">4h 30m</div>
                <div className="text-xs text-gray-500">This week</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-blue-600">90%</div>
                <div className="text-xs text-gray-500">Goal complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Monthly Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-700">{monthlySummary.badgesEarned}</div>
                <div className="text-sm text-yellow-600">🏆 Badges earned</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">{monthlySummary.pointsGained}</div>
                <div className="text-sm text-blue-600">⭐ Points gained</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">{monthlySummary.challengesCompleted}</div>
                <div className="text-sm text-green-600">🎯 Challenges completed</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-700">+{monthlySummary.rankImprovement}</div>
                <div className="text-sm text-purple-600">📈 Rank improvement</div>
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <div className="flex justify-between">
                <span className="text-gray-600">Best category:</span>
                <span className="font-medium text-gray-900">{monthlySummary.bestCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Focus area:</span>
                <span className="font-medium text-gray-900">{monthlySummary.focusArea}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Progress
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share className="w-4 h-4" />
            Share Achievement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
