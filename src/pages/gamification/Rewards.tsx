
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Gift, Lock, Sparkles, Clock } from 'lucide-react';

const Rewards = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'available' | 'claimed' | 'expired'>('available');

  const userPoints = 1247;

  // Mock data
  const featureUnlocks = [
    {
      id: '1',
      icon: '🎨',
      title: 'Custom Profile Theme',
      description: 'Personalize your profile appearance',
      cost: 500,
      available: true
    },
    {
      id: '2',
      icon: '🔒',
      title: 'Premium Resources',
      description: 'Access exclusive content for 30 days',
      cost: 1000,
      available: true
    },
    {
      id: '3',
      icon: '🎭',
      title: 'Avatar Customization',
      description: 'Unlock special avatar options',
      cost: 750,
      available: true
    }
  ];

  const streakProtection = [
    {
      id: '4',
      icon: '❄️',
      title: 'Streak Freeze',
      description: 'Protect your streak for 1 day',
      cost: 200,
      available: true
    },
    {
      id: '5',
      icon: '🛡️',
      title: 'Double Streak Shield',
      description: 'Protect 2 streaks for 1 day',
      cost: 350,
      available: true
    }
  ];

  const specialOffers = [
    {
      id: '6',
      icon: '🎁',
      title: 'Mystery Box',
      description: 'Random reward inside',
      cost: 300,
      timeLeft: '2 days',
      limited: true
    },
    {
      id: '7',
      icon: '✨',
      title: 'Weekend Bonus',
      description: '2x points for weekend activities',
      cost: 400,
      timeLeft: '5 days',
      limited: true
    }
  ];

  const claimedRewards = [
    {
      id: '8',
      title: 'Profile Theme',
      claimedAt: 'Jan 10, 2024',
      type: 'Feature'
    },
    {
      id: '9',
      title: 'Streak Freeze',
      claimedAt: 'Jan 8, 2024',
      type: 'Protection'
    }
  ];

  const handleRedeem = (reward: any) => {
    if (userPoints >= reward.cost) {
      // Handle redemption logic
      console.log(`Redeeming ${reward.title} for ${reward.cost} points`);
    }
  };

  const tabs = [
    { id: 'available', label: 'Available' },
    { id: 'claimed', label: 'Claimed' },
    { id: 'expired', label: 'Expired' }
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
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Rewards Store</h1>
            <p className="text-sm text-gray-600">Redeem your points for rewards</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-lg font-bold text-mindlyfe-blue">
              <Star className="w-5 h-5" />
              {userPoints.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">Your Points</div>
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
              {tab.label}
            </button>
          ))}
        </div>

        {/* Available Rewards */}
        {activeTab === 'available' && (
          <div className="space-y-6">
            {/* Feature Unlocks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  Feature Unlocks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {featureUnlocks.map((reward) => (
                  <div key={reward.id} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="text-3xl">{reward.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                      <p className="text-sm text-gray-600">{reward.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-bold text-mindlyfe-blue">{reward.cost} points</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleRedeem(reward)}
                      disabled={userPoints < reward.cost}
                      className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 disabled:opacity-50"
                    >
                      {userPoints >= reward.cost ? 'Redeem' : 'Not enough points'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Streak Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-500" />
                  Streak Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {streakProtection.map((reward) => (
                  <div key={reward.id} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-3xl">{reward.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                      <p className="text-sm text-gray-600">{reward.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-bold text-mindlyfe-blue">{reward.cost} points</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleRedeem(reward)}
                      disabled={userPoints < reward.cost}
                      className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 disabled:opacity-50"
                    >
                      {userPoints >= reward.cost ? 'Redeem' : 'Not enough points'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-orange-500" />
                  Special Offers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {specialOffers.map((reward) => (
                  <div key={reward.id} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <span className="text-3xl">{reward.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                        {reward.limited && (
                          <Badge variant="outline" className="border-orange-300 text-orange-700">
                            <Clock className="w-3 h-3 mr-1" />
                            {reward.timeLeft}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{reward.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-bold text-mindlyfe-blue">{reward.cost} points</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleRedeem(reward)}
                      disabled={userPoints < reward.cost}
                      className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 disabled:opacity-50"
                    >
                      {userPoints >= reward.cost ? 'Redeem' : 'Not enough points'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Claimed Rewards */}
        {activeTab === 'claimed' && (
          <Card>
            <CardHeader>
              <CardTitle>Claimed Rewards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {claimedRewards.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                    <p className="text-sm text-gray-600">{reward.type} • Claimed {reward.claimedAt}</p>
                  </div>
                  <Badge variant="outline" className="border-green-300 text-green-700">
                    Active
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Expired Rewards */}
        {activeTab === 'expired' && (
          <Card>
            <CardHeader>
              <CardTitle>Expired Rewards</CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-4">⏰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Expired Rewards</h3>
              <p className="text-gray-600">
                You haven't missed any limited-time offers yet!
              </p>
            </CardContent>
          </Card>
        )}

        {/* Earn More Points Button */}
        <Button 
          variant="outline" 
          className="w-full mt-6"
          onClick={() => navigate('/gamification/challenges')}
        >
          Earn More Points
        </Button>
      </div>
    </div>
  );
};

export default Rewards;
