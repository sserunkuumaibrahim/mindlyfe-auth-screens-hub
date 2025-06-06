
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface ChatPartner {
  id: string;
  pseudonym: string;
  avatarColor: string;
  isVerifiedTherapist: boolean;
  description: string;
  lastActive: string;
  mutualSince: string;
  status: 'online' | 'offline' | 'busy';
  hasActiveChat: boolean;
}

const ChatPartners = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock mutual follows who can chat
  const mutualFollows: ChatPartner[] = [
    {
      id: 'anon_456',
      pseudonym: 'Mindful Dreamer',
      avatarColor: '#21A9E1',
      isVerifiedTherapist: false,
      description: 'Active community member',
      lastActive: '2 hours ago',
      mutualSince: 'Jan 2024',
      status: 'online',
      hasActiveChat: true
    },
    {
      id: 'anon_789',
      pseudonym: 'Peaceful Warrior',
      avatarColor: '#8EBC40',
      isVerifiedTherapist: false,
      description: 'Anxiety support advocate',
      lastActive: '1 day ago',
      mutualSince: 'Dec 2023',
      status: 'offline',
      hasActiveChat: false
    },
    {
      id: 'anon_123',
      pseudonym: 'Brave Soul',
      avatarColor: '#FF6B9D',
      isVerifiedTherapist: false,
      description: 'Depression recovery journey',
      lastActive: '3 hours ago',
      mutualSince: 'Nov 2023',
      status: 'online',
      hasActiveChat: false
    },
    {
      id: 'anon_555',
      pseudonym: 'Hopeful Heart',
      avatarColor: '#E67E22',
      isVerifiedTherapist: false,
      description: 'Meditation enthusiast',
      lastActive: '5 hours ago',
      mutualSince: 'Jan 2024',
      status: 'busy',
      hasActiveChat: false
    }
  ];

  // Mock therapists
  const therapists: ChatPartner[] = [
    {
      id: 'therapist_1',
      pseudonym: 'Dr. Sarah Johnson',
      avatarColor: '#9B59B6',
      isVerifiedTherapist: true,
      description: 'Licensed Clinical Therapist',
      lastActive: 'Active now',
      mutualSince: 'Current client',
      status: 'online',
      hasActiveChat: true
    },
    {
      id: 'therapist_2',
      pseudonym: 'Dr. Michael Chen',
      avatarColor: '#34495E',
      isVerifiedTherapist: true,
      description: 'Licensed Marriage Therapist',
      lastActive: '1 hour ago',
      mutualSince: 'Past sessions',
      status: 'offline',
      hasActiveChat: false
    }
  ];

  const filteredMutuals = mutualFollows.filter(partner =>
    partner.pseudonym.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTherapists = therapists.filter(therapist =>
    therapist.pseudonym.toLowerCase().includes(searchQuery.toLowerCase()) ||
    therapist.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStartChat = (partnerId: string, partnerName: string) => {
    // In real app, this would check if chat exists or create new one
    console.log('Starting chat with:', partnerId);
    
    // For demo, navigate to a mock chat room
    navigate(`/chat/room/${partnerId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'busy':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const totalPartners = filteredMutuals.length + filteredTherapists.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/chat')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Chat Partners</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search chat partners..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
          />
        </div>

        {/* Results Summary */}
        <div className="mb-6 text-sm text-gray-600">
          {totalPartners} chat partner{totalPartners !== 1 ? 's' : ''} available
        </div>

        {/* Mutual Follows Section */}
        {filteredMutuals.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Mutual Follows ({filteredMutuals.length})
            </h2>
            
            <div className="space-y-3">
              {filteredMutuals.map((partner) => (
                <Card key={partner.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                            style={{ backgroundColor: partner.avatarColor }}
                          >
                            {partner.pseudonym.split(' ').map(word => word[0]).join('')}
                          </div>
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(partner.status)} border-2 border-white rounded-full`}></div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{partner.pseudonym}</h3>
                            {partner.hasActiveChat && (
                              <Badge variant="outline" className="text-xs border-mindlyfe-blue text-mindlyfe-blue">
                                Active chat
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{partner.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Last active: {partner.lastActive}</span>
                            <span>Mutual since: {partner.mutualSince}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleStartChat(partner.id, partner.pseudonym)}
                          className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                        >
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {partner.hasActiveChat ? 'Continue' : 'Message'}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate(`/community/profile/${partner.id}`)}
                          className="border-gray-300 text-gray-600 hover:bg-gray-50"
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Therapists Section */}
        {filteredTherapists.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Therapists ({filteredTherapists.length})
            </h2>
            
            <div className="space-y-3">
              {filteredTherapists.map((therapist) => (
                <Card key={therapist.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                            style={{ backgroundColor: therapist.avatarColor }}
                          >
                            {therapist.pseudonym.split(' ').map(word => word[0]).join('')}
                          </div>
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(therapist.status)} border-2 border-white rounded-full`}></div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{therapist.pseudonym}</h3>
                            <Badge className="bg-mindlyfe-green text-white text-xs">
                              🟢 Verified Therapist
                            </Badge>
                            {therapist.hasActiveChat && (
                              <Badge variant="outline" className="text-xs border-mindlyfe-blue text-mindlyfe-blue">
                                Active chat
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{therapist.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Last active: {therapist.lastActive}</span>
                            <span>{therapist.mutualSince}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleStartChat(therapist.id, therapist.pseudonym)}
                          className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                        >
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {therapist.hasActiveChat ? 'Continue' : 'Message'}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate(`/teletherapy/profile/${therapist.id}`)}
                          className="border-gray-300 text-gray-600 hover:bg-gray-50"
                        >
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {totalPartners === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No chat partners found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery 
                ? 'Try a different search term or clear your search'
                : 'Follow users in the community to start chatting with them'
              }
            </p>
            <div className="flex gap-3 justify-center">
              {searchQuery && (
                <Button
                  onClick={() => setSearchQuery('')}
                  variant="outline"
                  className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue hover:text-white"
                >
                  Clear Search
                </Button>
              )}
              <Button
                onClick={() => navigate('/community')}
                className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
              >
                Go to Community
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPartners;
