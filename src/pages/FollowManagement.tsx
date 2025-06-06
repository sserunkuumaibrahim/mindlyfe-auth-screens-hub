
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, MessageSquare, UserMinus } from 'lucide-react';

interface FollowUser {
  anonymousId: string;
  pseudonym: string;
  avatarColor: string;
  isVerifiedTherapist: boolean;
  description: string;
  mutualSince?: string;
  chatEnabled: boolean;
}

const FollowManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'following' | 'followers' | 'mutual'>('mutual');
  const [privacySettings, setPrivacySettings] = useState({
    allowFollowNotifications: true,
    allowMutualFollowChat: true,
    showRealNameInChat: true,
    autoFollowBack: false,
  });

  // Mock follow statistics
  const stats = {
    following: 23,
    followers: 45,
    mutual: 12,
    chatPartners: 12,
  };

  // Mock mutual follows data
  const mutualFollows: FollowUser[] = [
    {
      anonymousId: 'anon_456',
      pseudonym: 'Mindful Dreamer',
      avatarColor: '#21A9E1',
      isVerifiedTherapist: true,
      description: 'Verified Therapist',
      mutualSince: 'Jan 2024',
      chatEnabled: true,
    },
    {
      anonymousId: 'anon_789',
      pseudonym: 'Peaceful Warrior',
      avatarColor: '#8EBC40',
      isVerifiedTherapist: false,
      description: 'Active community member',
      mutualSince: 'Dec 2023',
      chatEnabled: true,
    },
    {
      anonymousId: 'anon_123',
      pseudonym: 'Brave Soul',
      avatarColor: '#FF6B9D',
      isVerifiedTherapist: false,
      description: 'Anxiety support advocate',
      mutualSince: 'Nov 2023',
      chatEnabled: true,
    },
  ];

  const handleMessage = (anonymousId: string) => {
    navigate(`/community/chat/${anonymousId}`);
  };

  const handleUnfollow = (anonymousId: string) => {
    console.log('Unfollow user:', anonymousId);
  };

  const handlePrivacyChange = (setting: string, value: boolean) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: value,
    }));
  };

  const tabs = [
    { id: 'following' as const, label: 'Following', count: stats.following },
    { id: 'followers' as const, label: 'Followers', count: stats.followers },
    { id: 'mutual' as const, label: 'Mutual', count: stats.mutual },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/community')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Follow Management</h1>
        </div>

        {/* Follow Statistics */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Follow Statistics</h2>
            
            <div className="grid grid-cols-4 gap-4 text-center mb-4">
              <div>
                <div className="text-2xl font-bold text-mindlyfe-blue">{stats.following}</div>
                <div className="text-sm text-gray-500">Following</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-mindlyfe-green">{stats.followers}</div>
                <div className="text-sm text-gray-500">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{stats.mutual}</div>
                <div className="text-sm text-gray-500">Mutual</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">{stats.chatPartners}</div>
                <div className="text-sm text-gray-500">Chat Partners</div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 text-center">
              Chat Partners: {stats.chatPartners} (Mutual follows only)
            </p>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div className="flex mb-6 bg-white rounded-lg p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-mindlyfe-blue text-white'
                  : 'text-gray-600 hover:text-mindlyfe-blue hover:bg-mindlyfe-blue/10'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Mutual Follows List */}
        {activeTab === 'mutual' && (
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Mutual Follows ({stats.mutual})</h3>
            
            {mutualFollows.map((user) => (
              <Card key={user.anonymousId} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                        style={{ backgroundColor: user.avatarColor }}
                      >
                        {user.pseudonym.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-900">{user.pseudonym}</h4>
                          {user.isVerifiedTherapist && (
                            <Badge className="bg-mindlyfe-green text-white text-xs">
                              🟢 Verified Therapist
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{user.description}</p>
                        <p className="text-xs text-gray-500">Mutual since: {user.mutualSince}</p>
                        {user.chatEnabled && (
                          <p className="text-xs text-green-600">✅ Chat enabled</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleMessage(user.anonymousId)}
                        className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                      >
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleUnfollow(user.anonymousId)}
                        className="border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        <UserMinus className="w-4 h-4 mr-1" />
                        Unfollow
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Privacy Settings */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Allow follow notifications</h4>
                  <p className="text-sm text-gray-600">Get notified when someone follows you</p>
                </div>
                <Switch
                  checked={privacySettings.allowFollowNotifications}
                  onCheckedChange={(checked) => handlePrivacyChange('allowFollowNotifications', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Allow mutual follow chat</h4>
                  <p className="text-sm text-gray-600">Enable messaging with mutual follows</p>
                </div>
                <Switch
                  checked={privacySettings.allowMutualFollowChat}
                  onCheckedChange={(checked) => handlePrivacyChange('allowMutualFollowChat', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Show real name in chat</h4>
                  <p className="text-sm text-gray-600">Display your real name to chat partners</p>
                </div>
                <Switch
                  checked={privacySettings.showRealNameInChat}
                  onCheckedChange={(checked) => handlePrivacyChange('showRealNameInChat', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Auto-follow back</h4>
                  <p className="text-sm text-gray-600">Automatically follow users who follow you</p>
                </div>
                <Switch
                  checked={privacySettings.autoFollowBack}
                  onCheckedChange={(checked) => handlePrivacyChange('autoFollowBack', checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FollowManagement;
