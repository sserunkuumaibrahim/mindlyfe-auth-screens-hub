
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, TrendingUp, Users, Crown } from 'lucide-react';

const Leaderboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'global' | 'friends' | 'category'>('global');

  // Mock data
  const globalLeaders = [
    { rank: 1, name: 'MindfulWarrior', points: 2847, badge: '🥇' },
    { rank: 2, name: 'ZenMaster', points: 2634, badge: '🥈' },
    { rank: 3, name: 'WellnessChamp', points: 2521, badge: '🥉' },
    { rank: 4, name: 'PeacefulSoul', points: 2398, badge: '' },
    { rank: 5, name: 'HealthyMind', points: 2287, badge: '' },
    { rank: 6, name: 'CalmSeeker', points: 2156, badge: '' },
    { rank: 7, name: 'MindBodySoul', points: 2043, badge: '' },
    { rank: 8, name: 'InnerPeace', points: 1934, badge: '' }
  ];

  const userRank = {
    rank: 156,
    points: 1247,
    change: 23,
    trending: 'up'
  };

  const friends = [
    { rank: 1, name: 'Alex', points: 1456 },
    { rank: 2, name: 'You', points: 1247 },
    { rank: 3, name: 'Sam', points: 1123 },
    { rank: 4, name: 'Jordan', points: 987 },
    { rank: 5, name: 'Casey', points: 834 }
  ];

  const categories = [
    { name: 'Mindfulness', icon: '🧘', leaders: 3 },
    { name: 'Journaling', icon: '📝', leaders: 5 },
    { name: 'Therapy Goals', icon: '🎯', leaders: 2 },
    { name: 'Community', icon: '👥', leaders: 8 }
  ];

  const tabs = [
    { id: 'global', label: 'Global', icon: Star },
    { id: 'friends', label: 'Friends', icon: Users },
    { id: 'category', label: 'Category', icon: TrendingUp }
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
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Leaderboards</h1>
            <p className="text-sm text-gray-600">See how you compare</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 bg-white p-1 rounded-lg shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-mindlyfe-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Global Leaderboard */}
        {activeTab === 'global' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  This Week's Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {globalLeaders.map((leader) => (
                  <div
                    key={leader.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      leader.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {leader.badge && <span className="text-2xl">{leader.badge}</span>}
                      <span className="font-bold text-gray-900">{leader.rank}.</span>
                      <span className="font-medium text-gray-900 truncate">{leader.name}</span>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="font-bold text-mindlyfe-blue">{leader.points.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>
                  </div>
                ))}
                <div className="text-center py-2">
                  <span className="text-gray-500">...</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{userRank.rank}.</span>
                    <span className="font-medium text-gray-900">You</span>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="font-bold text-mindlyfe-blue">{userRank.points.toLocaleString()}</div>
                    <div className="text-xs text-green-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +{userRank.change} from last week
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Friends Leaderboard */}
        {activeTab === 'friends' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Your Friends ({friends.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {friends.map((friend) => (
                <div
                  key={friend.rank}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    friend.name === 'You' ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">{friend.rank}.</span>
                    <span className={`font-medium ${friend.name === 'You' ? 'text-blue-700' : 'text-gray-900'}`}>
                      {friend.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-mindlyfe-blue">{friend.points.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Category Leaderboard */}
        {activeTab === 'category' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">Top {category.leaders} leaders</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button variant="outline" className="w-full">
            Invite Friends
          </Button>
          <Button variant="outline" className="w-full">
            View Categories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
