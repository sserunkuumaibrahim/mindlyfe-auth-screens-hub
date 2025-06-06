
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Trophy } from 'lucide-react';

const Badges = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'earned' | 'available' | 'hidden'>('earned');

  // Mock data
  const earnedBadges = [
    { id: '1', icon: '🥇', name: 'First Week', description: 'Complete your first week' },
    { id: '2', icon: '🧘', name: 'Zen Mind', description: 'Meditate for 7 days' },
    { id: '3', icon: '📝', name: 'Word Smith', description: 'Write 10 journal entries' },
    { id: '4', icon: '🎯', name: 'Goal Getter', description: 'Set 5 wellness goals' },
    { id: '5', icon: '💪', name: 'Strong Mind', description: 'Complete mental health assessment' },
    { id: '6', icon: '🤝', name: 'Team Player', description: 'Join community discussions' }
  ];

  const progressBadges = [
    {
      id: '7',
      icon: '🏃‍♂️',
      name: 'Marathon Meditator',
      description: 'Meditate 30 days in row',
      progress: 12,
      total: 30
    },
    {
      id: '8',
      icon: '📚',
      name: 'Knowledge Seeker',
      description: 'Complete 10 resources',
      progress: 7,
      total: 10
    },
    {
      id: '9',
      icon: '🎨',
      name: 'Creative Writer',
      description: 'Write 50 journal entries',
      progress: 23,
      total: 50
    }
  ];

  const availableBadges = [
    { id: '10', icon: '🌟', name: 'Star Performer', description: 'Maintain 5 streaks simultaneously' },
    { id: '11', icon: '🎨', name: 'Creative Writer', description: 'Customize your profile' },
    { id: '12', icon: '🔥', name: 'Fire Starter', description: 'Help 5 community members' },
    { id: '13', icon: '🌈', name: 'Mood Master', description: 'Track mood for 100 days' },
    { id: '14', icon: '🎭', name: 'Emotion Explorer', description: 'Use all emotion categories' },
    { id: '15', icon: '⚡', name: 'Quick Responder', description: 'Complete daily check-ins in under 2 minutes' }
  ];

  const tabs = [
    { id: 'earned', label: 'Earned', count: earnedBadges.length },
    { id: 'available', label: 'Available', count: availableBadges.length },
    { id: 'hidden', label: 'Hidden', count: 5 }
  ];

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
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Badge Collection</h1>
            <p className="text-sm text-gray-600">Your achievements and progress</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 bg-white p-1 rounded-lg shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-mindlyfe-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Earned Badges */}
        {activeTab === 'earned' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Earned Badges ({earnedBadges.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {earnedBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-center"
                  >
                    <span className="text-3xl mb-2">{badge.icon}</span>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">{badge.name}</h4>
                    <p className="text-xs text-gray-600">{badge.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Available Badges */}
        {activeTab === 'available' && (
          <div className="space-y-6">
            {/* In Progress */}
            <Card>
              <CardHeader>
                <CardTitle>In Progress ({progressBadges.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {progressBadges.map((badge) => (
                  <div key={badge.id} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{badge.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{badge.name}</h4>
                        <p className="text-sm text-gray-600">{badge.description}</p>
                        <p className="text-sm text-blue-600 mt-1">
                          Progress: {badge.progress}/{badge.total} {badge.name.includes('Meditate') ? 'days' : badge.name.includes('resources') ? 'resources' : 'entries'}
                        </p>
                      </div>
                    </div>
                    <Progress value={(badge.progress / badge.total) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Available */}
            <Card>
              <CardHeader>
                <CardTitle>Available Badges ({availableBadges.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {availableBadges.map((badge) => (
                    <div
                      key={badge.id}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200 text-center opacity-60"
                    >
                      <span className="text-3xl mb-2 grayscale">{badge.icon}</span>
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{badge.name}</h4>
                      <p className="text-xs text-gray-600">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Hidden Badges */}
        {activeTab === 'hidden' && (
          <Card>
            <CardHeader>
              <CardTitle>Hidden Badges</CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secret Achievements</h3>
              <p className="text-gray-600 mb-4">
                Complete special activities to unlock hidden badges!
              </p>
              <p className="text-sm text-gray-500">
                5 secret badges are waiting to be discovered...
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Badges;
