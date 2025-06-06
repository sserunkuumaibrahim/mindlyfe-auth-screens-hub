
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  ArrowLeft, 
  TrendingUp, 
  Trophy, 
  Target, 
  Calendar, 
  Clock,
  BookOpen,
  Star,
  Award,
  Download,
  Share
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LearningStats {
  totalCompleted: number;
  totalLearningTime: number; // in minutes
  currentStreak: number;
  certificatesEarned: number;
  weeklyGoal: number; // in minutes
  weeklyProgress: number; // in minutes
}

interface ActivePath {
  id: string;
  title: string;
  progress: number;
  completedModules: number;
  totalModules: number;
  estimatedCompletion: string;
  category: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const ResourceProgress = () => {
  const navigate = useNavigate();
  
  const stats: LearningStats = {
    totalCompleted: 45,
    totalLearningTime: 750, // 12.5 hours
    currentStreak: 7,
    certificatesEarned: 3,
    weeklyGoal: 300, // 5 hours
    weeklyProgress: 270 // 4.5 hours
  };

  const activePaths: ActivePath[] = [
    {
      id: 'path-1',
      title: 'Anxiety Management',
      progress: 60,
      completedModules: 6,
      totalModules: 10,
      estimatedCompletion: '2024-01-29',
      category: 'anxiety'
    },
    {
      id: 'path-2',
      title: 'Mindfulness Basics',
      progress: 30,
      completedModules: 3,
      totalModules: 8,
      estimatedCompletion: '2024-02-15',
      category: 'mindfulness'
    },
    {
      id: 'path-3',
      title: 'Sleep Improvement',
      progress: 85,
      completedModules: 7,
      totalModules: 8,
      estimatedCompletion: '2024-01-20',
      category: 'sleep'
    }
  ];

  const weeklyActivityData = [
    { day: 'Mon', minutes: 45, label: 'Monday' },
    { day: 'Tue', minutes: 15, label: 'Tuesday' },
    { day: 'Wed', minutes: 60, label: 'Wednesday' },
    { day: 'Thu', minutes: 30, label: 'Thursday' },
    { day: 'Fri', minutes: 20, label: 'Friday' },
    { day: 'Sat', minutes: 75, label: 'Saturday' },
    { day: 'Sun', minutes: 25, label: 'Sunday' }
  ];

  const recentAchievements: Achievement[] = [
    {
      id: 'ach-1',
      title: 'Consistent Learner',
      description: '7-day learning streak',
      icon: '🎯',
      earnedAt: '2024-01-13',
      rarity: 'rare'
    },
    {
      id: 'ach-2',
      title: 'Knowledge Seeker',
      description: 'Completed 25 resources',
      icon: '📚',
      earnedAt: '2024-01-08',
      rarity: 'common'
    },
    {
      id: 'ach-3',
      title: 'Mindfulness Master',
      description: 'Completed mindfulness learning path',
      icon: '🧘',
      earnedAt: '2024-01-05',
      rarity: 'epic'
    },
    {
      id: 'ach-4',
      title: 'Early Bird',
      description: 'Completed 5 morning sessions',
      icon: '🌅',
      earnedAt: '2024-01-03',
      rarity: 'common'
    }
  ];

  const formatLearningTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins}m`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}m`;
  };

  const formatEstimatedCompletion = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 7) return `${diffDays} days`;
    return `${Math.ceil(diffDays / 7)} weeks`;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const weeklyGoalPercentage = (stats.weeklyProgress / stats.weeklyGoal) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/resources')}
            className="shrink-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Learning Progress</h1>
            <p className="text-gray-600 mt-1">Track your mental health learning journey</p>
          </div>
        </div>

        {/* Learning Stats Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-mindlyfe-blue" />
              Your Learning Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-mindlyfe-blue">🔥{stats.currentStreak}</div>
                <div className="text-sm text-gray-600">Day streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mindlyfe-green">📚{stats.totalCompleted}</div>
                <div className="text-sm text-gray-600">Resources completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">⏱️{formatLearningTime(stats.totalLearningTime)}</div>
                <div className="text-sm text-gray-600">Total learning time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">🏆{stats.certificatesEarned}</div>
                <div className="text-sm text-gray-600">Certificates earned</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Learning Paths */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-mindlyfe-green" />
              Active Learning Paths
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activePaths.map(path => (
              <div key={path.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">{path.title}</h3>
                  <Badge variant="secondary" className="capitalize">
                    {path.category}
                  </Badge>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>{path.completedModules} of {path.totalModules} modules</span>
                    <span>{path.progress}%</span>
                  </div>
                  <Progress value={path.progress} className="h-2" />
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    Est. completion: {formatEstimatedCompletion(path.estimatedCompletion)}
                  </span>
                  <Button 
                    size="sm"
                    onClick={() => navigate(`/resources/path/${path.id}`)}
                    className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Weekly Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>This week: {formatLearningTime(stats.weeklyProgress)}</span>
                <span>Goal: {formatLearningTime(stats.weeklyGoal)}</span>
              </div>
              <Progress value={weeklyGoalPercentage} className="h-2 mb-1" />
              <p className="text-xs text-gray-500">
                {weeklyGoalPercentage.toFixed(0)}% of weekly goal completed
              </p>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value: number) => [formatLearningTime(value), 'Learning Time']}
                    labelFormatter={(label) => weeklyActivityData.find(d => d.day === label)?.label}
                  />
                  <Bar dataKey="minutes" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-7 gap-1 text-xs">
              {weeklyActivityData.map(day => (
                <div key={day.day} className="text-center">
                  <div className="font-medium text-gray-900">{day.day}</div>
                  <div className="text-gray-600">{formatLearningTime(day.minutes)}</div>
                </div>
              ))}
            </div>
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
            {recentAchievements.map(achievement => (
              <div key={achievement.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <Badge className={getRarityColor(achievement.rarity)}>
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Earned {new Date(achievement.earnedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              onClick={() => navigate('/resources/achievements')}
              className="w-full mt-4"
            >
              <Award className="w-4 h-4 mr-2" />
              View All Achievements
            </Button>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            onClick={() => navigate('/resources/goals')}
            className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
          >
            <Target className="w-4 h-4 mr-2" />
            Set Learning Goals
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              // Export progress logic
              console.log('Exporting progress...');
            }}
            className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Progress
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourceProgress;
