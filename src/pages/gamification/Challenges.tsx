
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Target, CheckCircle, Clock, Calendar } from 'lucide-react';

const Challenges = () => {
  const navigate = useNavigate();

  // Mock data
  const todayChallenges = [
    {
      id: '1',
      icon: '✅',
      title: 'Log your mood',
      description: 'Share how you\'re feeling today',
      completed: true,
      completedAt: '9:30 AM',
      points: 50
    },
    {
      id: '2',
      icon: '🔄',
      title: 'Write a journal entry',
      description: 'Share your thoughts',
      completed: false,
      points: 100,
      action: 'Start Writing'
    },
    {
      id: '3',
      icon: '⏳',
      title: 'Practice breathing',
      description: '5-minute session',
      completed: false,
      points: 75,
      action: 'Start Exercise'
    }
  ];

  const weeklyChallenge = {
    id: 'weekly_1',
    icon: '🎯',
    title: 'Wellness Warrior',
    description: 'Complete 5 therapy sessions',
    progress: 3,
    total: 5,
    reward: 'Exclusive badge',
    timeLeft: '3 days'
  };

  const challengeHistory = {
    thisWeek: { completed: 12, total: 15 },
    successRate: 80
  };

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
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Daily Challenges</h1>
            <p className="text-sm text-gray-600">Complete challenges to earn rewards</p>
          </div>
        </div>

        {/* Today's Challenge Header */}
        <Card className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6" />
              <h2 className="text-xl font-bold">Today's Challenges</h2>
            </div>
            <p className="text-blue-100">Complete 3 challenges to earn bonus points!</p>
          </CardContent>
        </Card>

        {/* Today's Challenges */}
        <div className="space-y-4 mb-6">
          {todayChallenges.map((challenge) => (
            <Card key={challenge.id} className={challenge.completed ? 'bg-green-50 border-green-200' : 'bg-white'}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{challenge.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                    {challenge.completed ? (
                      <p className="text-sm text-green-600 mt-1">
                        Completed at {challenge.completedAt} • +{challenge.points} points earned
                      </p>
                    ) : (
                      <p className="text-sm text-blue-600 mt-1">
                        Reward: +{challenge.points} points
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {challenge.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Button size="sm" className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
                        {challenge.action}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekly Challenge */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              Weekly Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">{weeklyChallenge.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{weeklyChallenge.title}</h3>
                <p className="text-gray-600">{weeklyChallenge.description}</p>
                <div className="mt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Progress: {weeklyChallenge.progress}/{weeklyChallenge.total} sessions
                    </span>
                    <span className="text-sm text-orange-600">
                      Time left: {weeklyChallenge.timeLeft}
                    </span>
                  </div>
                  <Progress value={(weeklyChallenge.progress / weeklyChallenge.total) * 100} className="h-3" />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-purple-600">
                    Reward: {weeklyChallenge.reward}
                  </span>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    <Clock className="w-3 h-3 mr-1" />
                    {weeklyChallenge.timeLeft}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenge History */}
        <Card>
          <CardHeader>
            <CardTitle>Challenge History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">
                  {challengeHistory.thisWeek.completed}/{challengeHistory.thisWeek.total}
                </div>
                <div className="text-sm text-blue-600">This Week</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">{challengeHistory.successRate}%</div>
                <div className="text-sm text-green-600">Success Rate</div>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              View All Challenges
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Challenges;
