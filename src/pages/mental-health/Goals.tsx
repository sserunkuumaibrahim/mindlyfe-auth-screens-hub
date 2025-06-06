
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Target, Trophy } from 'lucide-react';

const MentalHealthGoals = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  // Mock data
  const activeGoals = [
    {
      id: '1',
      title: '🧘 Daily Meditation',
      description: 'Meditate for 10 minutes every day',
      progress: 71,
      current: 5,
      target: 7,
      unit: 'days',
      category: 'mindfulness',
      dueDate: 'This week',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: '2',
      title: '📝 Journal 3x/week',
      description: 'Write in journal at least 3 times per week',
      progress: 67,
      current: 2,
      target: 3,
      unit: 'entries',
      category: 'reflection',
      dueDate: 'End of week',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: '3',
      title: '🚶 Walk 30min daily',
      description: 'Take a 30-minute walk every day',
      progress: 57,
      current: 4,
      target: 7,
      unit: 'days',
      category: 'exercise',
      dueDate: 'This week',
      color: 'bg-green-100 text-green-800'
    }
  ];

  const completedGoals = [
    {
      id: '4',
      title: '💤 Better Sleep Schedule',
      description: 'Go to bed before 11 PM for 2 weeks',
      completedDate: '2024-01-10',
      category: 'sleep'
    },
    {
      id: '5',
      title: '📱 Digital Detox Weekend',
      description: 'No social media for entire weekend',
      completedDate: '2024-01-08',
      category: 'digital_wellness'
    }
  ];

  const goalTemplates = [
    'Improve sleep schedule',
    'Reduce anxiety levels',
    'Build social connections',
    'Practice mindfulness',
    'Exercise regularly',
    'Eat healthier meals',
    'Limit screen time',
    'Practice gratitude'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Wellness Goals</h1>
          </div>
          <Button className="flex items-center gap-2 bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
            <Plus className="w-4 h-4" />
            New Goal
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-6 bg-white p-1 rounded-lg w-full overflow-x-auto">
          <Button 
            variant={activeTab === 'active' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('active')}
            size="sm"
            className="whitespace-nowrap flex-1 sm:flex-none"
          >
            Active Goals
          </Button>
          <Button 
            variant={activeTab === 'completed' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('completed')}
            size="sm"
            className="whitespace-nowrap flex-1 sm:flex-none"
          >
            Completed
          </Button>
          <Button 
            variant={activeTab === 'templates' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('templates')}
            size="sm"
            className="whitespace-nowrap flex-1 sm:flex-none"
          >
            Templates
          </Button>
        </div>

        {/* Active Goals Tab */}
        {activeTab === 'active' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Active Goals ({activeGoals.length})
                </CardTitle>
                <p className="text-sm text-gray-600">Track your progress towards wellness goals</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeGoals.map((goal) => (
                  <div key={goal.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                            <Badge className={goal.color}>
                              {goal.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
                          <div className="flex flex-col xs:flex-row xs:items-center gap-2 text-sm text-gray-500">
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
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Completed Goals Tab */}
        {activeTab === 'completed' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Completed Goals ({completedGoals.length})
                </CardTitle>
                <p className="text-sm text-gray-600">Celebrate your achievements</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {completedGoals.map((goal) => (
                  <div key={goal.id} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
                    <div className="text-2xl">🏆</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                      <p className="text-sm text-gray-600">{goal.description}</p>
                      <p className="text-xs text-gray-500 mt-1">Completed {goal.completedDate}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {goal.category}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>All Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">12 Goals Completed</h3>
                  <p className="text-gray-600 mb-4">You're making great progress on your wellness journey!</p>
                  <Button variant="outline">View All Achievements</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Goal Templates</CardTitle>
                <p className="text-sm text-gray-600">Quick start your wellness journey with proven goal templates</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {goalTemplates.map((template, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-mindlyfe-blue rounded-full"></div>
                      <span className="font-medium text-gray-900">{template}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Use Template
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Goal</CardTitle>
                <p className="text-sm text-gray-600">Create your own personalized wellness goal</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Custom Goal
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthGoals;
