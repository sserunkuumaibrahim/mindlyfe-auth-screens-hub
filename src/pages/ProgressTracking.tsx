
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Target, Trophy, Calendar, Plus } from 'lucide-react';

const ProgressTracking = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('current');

  // Current goals data
  const currentGoals = [
    {
      id: '1',
      title: 'Daily meditation',
      description: 'Meditate for 10 minutes daily',
      progress: 80,
      current: 12,
      target: 15,
      unit: 'days',
      category: 'mindfulness',
      dueDate: '2024-02-15'
    },
    {
      id: '2',
      title: 'Weekly journaling',
      description: 'Write in journal 4 times per week',
      progress: 100,
      current: 4,
      target: 4,
      unit: 'entries',
      category: 'reflection',
      dueDate: '2024-02-10'
    },
    {
      id: '3',
      title: 'Community engagement',
      description: 'Post or comment in community 15 times',
      progress: 53,
      current: 8,
      target: 15,
      unit: 'posts',
      category: 'social',
      dueDate: '2024-02-20'
    },
    {
      id: '4',
      title: 'Mindfulness practice',
      description: 'Complete mindfulness exercises daily',
      progress: 100,
      current: 21,
      target: 21,
      unit: 'days',
      category: 'mindfulness',
      dueDate: '2024-02-05'
    },
    {
      id: '5',
      title: 'Therapy consistency',
      description: 'Attend 8 therapy sessions this month',
      progress: 75,
      current: 6,
      target: 8,
      unit: 'sessions',
      category: 'therapy',
      dueDate: '2024-02-28'
    }
  ];

  // Completed milestones
  const milestones = [
    {
      id: '1',
      title: '30-Day Meditation Streak',
      description: 'Meditated consecutively for 30 days',
      completedDate: '2024-01-15',
      category: 'mindfulness',
      badge: '🧘'
    },
    {
      id: '2',
      title: 'Completed Anxiety Management Course',
      description: 'Finished all modules of the anxiety course',
      completedDate: '2024-01-10',
      category: 'learning',
      badge: '📚'
    },
    {
      id: '3',
      title: 'First Community Post',
      description: 'Made your first post in the community',
      completedDate: '2024-01-05',
      category: 'social',
      badge: '🤝'
    },
    {
      id: '4',
      title: 'Week of Wellness',
      description: 'Completed all daily wellness activities for a week',
      completedDate: '2024-01-20',
      category: 'wellness',
      badge: '🌟'
    }
  ];

  // Upcoming milestones
  const upcomingMilestones = [
    {
      id: '1',
      title: '50-Day Login Streak',
      description: 'Log in consistently for 50 days',
      daysRemaining: 3,
      category: 'engagement'
    },
    {
      id: '2',
      title: 'Complete CBT Module',
      description: 'Finish Cognitive Behavioral Therapy course',
      sessionsRemaining: 2,
      category: 'learning'
    },
    {
      id: '3',
      title: 'Community Leader',
      description: 'Help 10 community members',
      helpersRemaining: 4,
      category: 'social'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      mindfulness: 'bg-purple-100 text-purple-800',
      reflection: 'bg-blue-100 text-blue-800',
      social: 'bg-green-100 text-green-800',
      therapy: 'bg-pink-100 text-pink-800',
      wellness: 'bg-orange-100 text-orange-800',
      learning: 'bg-indigo-100 text-indigo-800',
      engagement: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Progress Tracking</h1>
          </div>
          
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Set New Goal
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-8 bg-white p-1 rounded-lg w-fit">
          <Button 
            variant={activeTab === 'current' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('current')}
            size="sm"
          >
            Current Goals
          </Button>
          <Button 
            variant={activeTab === 'milestones' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('milestones')}
            size="sm"
          >
            Milestones
          </Button>
          <Button 
            variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('upcoming')}
            size="sm"
          >
            Upcoming
          </Button>
        </div>

        {/* Current Goals Tab */}
        {activeTab === 'current' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Current Goals ({currentGoals.filter(g => g.progress === 100).length}/{currentGoals.length} completed)
                </CardTitle>
                <p className="text-sm text-gray-600">Track your progress towards wellness goals</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentGoals.map((goal) => (
                  <div key={goal.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(goal.category)}`}>
                            {goal.category}
                          </span>
                          {goal.progress === 100 && (
                            <span className="text-green-600 text-lg">✅</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Due: {goal.dueDate}</span>
                          <span>{goal.current}/{goal.target} {goal.unit}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-bold text-gray-900">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-3" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Milestones Tab */}
        {activeTab === 'milestones' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Achieved Milestones
                </CardTitle>
                <p className="text-sm text-gray-600">Celebrate your wellness achievements</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                    <div className="text-3xl">{milestone.badge}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                      <p className="text-xs text-gray-500 mt-1">Completed {milestone.completedDate}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(milestone.category)}`}>
                      {milestone.category}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Upcoming Milestones Tab */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Upcoming Milestones
                </CardTitle>
                <p className="text-sm text-gray-600">Goals you're working towards</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingMilestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                    <div className="text-right">
                      {milestone.daysRemaining && (
                        <div className="text-sm font-bold text-blue-600">{milestone.daysRemaining} days left</div>
                      )}
                      {milestone.sessionsRemaining && (
                        <div className="text-sm font-bold text-blue-600">{milestone.sessionsRemaining} sessions left</div>
                      )}
                      {milestone.helpersRemaining && (
                        <div className="text-sm font-bold text-blue-600">{milestone.helpersRemaining} more to help</div>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(milestone.category)}`}>
                        {milestone.category}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracking;
