
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, Trophy, Clock, Plus } from 'lucide-react';

const ProgressTracking = () => {
  const navigate = useNavigate();

  const currentGoals = [
    {
      id: 1,
      title: 'Daily meditation',
      progress: 80,
      current: 12,
      target: 15,
      unit: 'days',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 2,
      title: 'Weekly journaling',
      progress: 100,
      current: 4,
      target: 4,
      unit: 'weeks',
      color: 'from-purple-400 to-pink-500',
      completed: true
    },
    {
      id: 3,
      title: 'Community engagement',
      progress: 53,
      current: 8,
      target: 15,
      unit: 'posts',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 4,
      title: 'Mindfulness practice',
      progress: 100,
      current: 21,
      target: 21,
      unit: 'days',
      color: 'from-indigo-400 to-purple-500',
      completed: true
    },
    {
      id: 5,
      title: 'Therapy consistency',
      progress: 75,
      current: 6,
      target: 8,
      unit: 'sessions',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const milestones = [
    {
      id: 1,
      title: '30-Day Meditation Streak',
      date: 'Jan 15, 2024',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Completed Anxiety Course',
      date: 'Jan 10, 2024',
      icon: '📚'
    },
    {
      id: 3,
      title: 'First Community Post',
      date: 'Jan 5, 2024',
      icon: '🤝'
    }
  ];

  const upcomingMilestones = [
    {
      id: 1,
      title: '50-Day Login Streak',
      remaining: '3 days remaining',
      icon: '🎯'
    },
    {
      id: 2,
      title: 'Complete CBT Module',
      remaining: '2 sessions remaining',
      icon: '📖'
    }
  ];

  const completedGoals = currentGoals.filter(goal => goal.completed);
  const activeGoals = currentGoals.filter(goal => !goal.completed);

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
          <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
        </div>

        {/* Current Goals */}
        <Card className="mb-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                Current Goals ({completedGoals.length}/{currentGoals.length})
              </CardTitle>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                <Plus className="w-4 h-4 mr-2" />
                Add Goal
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentGoals.map((goal) => (
                <div key={goal.id} className="p-4 rounded-xl bg-white/50 border border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                    {goal.completed && (
                      <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                        ✅ Completed
                      </Badge>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <Progress value={goal.progress} className="h-3" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                    <span className="font-semibold text-gray-900">
                      {goal.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Milestones Achieved */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Milestones Achieved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/20">
                    <div className="text-2xl">{milestone.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                      <p className="text-sm text-gray-600">Completed {milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Milestones */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Upcoming Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMilestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/20">
                    <div className="text-2xl">{milestone.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                      <p className="text-sm text-orange-600 font-medium">{milestone.remaining}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <Button variant="outline" className="bg-white/50">
            Set New Goal
          </Button>
          <Button variant="outline" className="bg-white/50">
            View All Goals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
