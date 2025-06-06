
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, Flame, Target, Star, Award, Gift } from 'lucide-react';

const Gamification = () => {
  const navigate = useNavigate();

  // Mock data
  const streaks = [
    { icon: '🔥', name: 'Login Streak', count: 12, unit: 'days' },
    { icon: '🧘', name: 'Meditation', count: 5, unit: 'days' },
    { icon: '👨‍⚕️', name: 'Therapy', count: 3, unit: 'sessions' },
    { icon: '📝', name: 'Journaling', count: 8, unit: 'days' }
  ];

  const recentAchievements = [
    {
      id: '1',
      icon: '🥇',
      title: 'Mindful Week',
      description: 'Meditated 7 days in a row',
      earned: '2 hours ago'
    },
    {
      id: '2',
      icon: '🎯',
      title: 'Goal Setter',
      description: 'Set 5 wellness goals',
      earned: 'Yesterday'
    }
  ];

  const stats = {
    badges: { earned: 23, total: 50 },
    points: 1247,
    level: 8,
    rank: 156
  };

  const quickActions = [
    { icon: Trophy, title: 'Badges', route: '/gamification/badges' },
    { icon: Target, title: 'Challenges', route: '/gamification/challenges' },
    { icon: Star, title: 'Leaderboard', route: '/gamification/leaderboard' },
    { icon: Gift, title: 'Rewards', route: '/gamification/rewards' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
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
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Your Progress</h1>
            <p className="text-sm text-gray-600">Achievements and rewards</p>
          </div>
          <Trophy className="w-6 h-6 text-yellow-500 ml-auto" />
        </div>

        {/* Current Streaks */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              Current Streaks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {streaks.map((streak, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{streak.icon}</span>
                  <span className="font-medium text-gray-900">{streak.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-mindlyfe-blue">{streak.count}</div>
                  <div className="text-xs text-gray-500">{streak.unit}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAchievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                <span className="text-3xl">{achievement.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-purple-600 mt-1">Earned: {achievement.earned}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Progress Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-700">{stats.badges.earned}/{stats.badges.total}</div>
                <div className="text-sm text-yellow-600">🏆 Badges</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">{stats.points.toLocaleString()}</div>
                <div className="text-sm text-blue-600">⭐ Points</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">{stats.level}</div>
                <div className="text-sm text-green-600">📈 Level</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-700">#{stats.rank}</div>
                <div className="text-sm text-purple-600">🎯 Global Rank</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => navigate(action.route)}
                  className="h-20 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all"
                >
                  <action.icon className="w-6 h-6 text-gray-600" />
                  <span className="text-sm font-medium">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gamification;
