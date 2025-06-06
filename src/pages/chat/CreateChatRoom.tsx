
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check, Users, MessageSquare, Shield, Video, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface ChatPartner {
  id: string;
  name: string;
  avatarColor: string;
  status: 'online' | 'offline';
  isTherapist: boolean;
}

const CreateChatRoom = () => {
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState<'direct' | 'group' | 'support' | 'therapy'>('direct');
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');
  const [privacyLevel, setPrivacyLevel] = useState<'private' | 'public' | 'encrypted'>('private');
  const [enableModeration, setEnableModeration] = useState(false);
  const [anonymousMessaging, setAnonymousMessaging] = useState(false);
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock chat partners data
  const chatPartners: ChatPartner[] = [
    {
      id: 'user_1',
      name: 'Mindful Dreamer',
      avatarColor: '#21A9E1',
      status: 'online',
      isTherapist: false
    },
    {
      id: 'user_2',
      name: 'Peaceful Warrior',
      avatarColor: '#8EBC40',
      status: 'online',
      isTherapist: false
    },
    {
      id: 'user_3',
      name: 'Brave Soul',
      avatarColor: '#FF6B9D',
      status: 'offline',
      isTherapist: false
    },
    {
      id: 'therapist_1',
      name: 'Dr. Sarah Johnson',
      avatarColor: '#9B59B6',
      status: 'online',
      isTherapist: true
    },
    {
      id: 'user_4',
      name: 'Hopeful Heart',
      avatarColor: '#E67E22',
      status: 'online',
      isTherapist: false
    }
  ];

  const roomTypes = [
    { id: 'direct' as const, label: 'Direct Message', description: 'One-on-one conversation', icon: MessageSquare },
    { id: 'group' as const, label: 'Group Chat', description: 'Chat with multiple people', icon: Users },
    { id: 'support' as const, label: 'Support Group', description: 'Moderated support community', icon: Shield },
    { id: 'therapy' as const, label: 'Therapy Session', description: 'Private session chat', icon: Video }
  ];

  const privacyOptions = [
    { id: 'private' as const, label: 'Private', description: 'Invite only' },
    { id: 'public' as const, label: 'Public', description: 'Anyone can join' },
    { id: 'encrypted' as const, label: 'Encrypted', description: 'End-to-end encrypted' }
  ];

  const filteredPartners = chatPartners.filter(partner =>
    partner.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePartnerToggle = (partnerId: string) => {
    setSelectedPartners(prev =>
      prev.includes(partnerId)
        ? prev.filter(id => id !== partnerId)
        : [...prev, partnerId]
    );
  };

  const handleCreateRoom = () => {
    if (roomType === 'direct' && selectedPartners.length !== 1) {
      alert('Please select exactly one person for direct message');
      return;
    }
    
    if (roomType !== 'direct' && !roomName.trim()) {
      alert('Please enter a room name');
      return;
    }

    // In real app, this would create the room via API
    console.log('Creating room:', {
      type: roomType,
      name: roomName,
      description,
      privacyLevel,
      enableModeration,
      anonymousMessaging,
      participants: selectedPartners
    });

    // Navigate to the new room (mock room ID)
    navigate('/chat/room/new_room_123');
  };

  const getSelectedPartnerNames = () => {
    return selectedPartners
      .map(id => chatPartners.find(p => p.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/chat')}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Create Chat Room</h1>
          <Button
            onClick={handleCreateRoom}
            size="icon"
            className="rounded-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
          >
            <Check className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Room Type */}
          <Card>
            <CardHeader>
              <CardTitle>Room Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {roomTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <label
                    key={type.id}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="roomType"
                      value={type.id}
                      checked={roomType === type.id}
                      onChange={(e) => setRoomType(e.target.value as any)}
                      className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                    />
                    <Icon className="w-5 h-5 text-mindlyfe-blue" />
                    <div>
                      <span className="font-medium">{type.label}</span>
                      <p className="text-sm text-gray-500">{type.description}</p>
                    </div>
                  </label>
                );
              })}
            </CardContent>
          </Card>

          {/* Room Name */}
          {roomType !== 'direct' && (
            <Card>
              <CardHeader>
                <CardTitle>Room Name</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  placeholder="Enter room name..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                />
              </CardContent>
            </Card>
          )}

          {/* Description */}
          {roomType !== 'direct' && (
            <Card>
              <CardHeader>
                <CardTitle>Description (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the purpose of this room..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent resize-none"
                />
              </CardContent>
            </Card>
          )}

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {privacyOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="privacyLevel"
                      value={option.id}
                      checked={privacyLevel === option.id}
                      onChange={(e) => setPrivacyLevel(e.target.value as any)}
                      className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                    />
                    <div>
                      <span className="font-medium">{option.label}</span>
                      <p className="text-sm text-gray-500">{option.description}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Enable moderation</h4>
                    <p className="text-sm text-gray-600">Require approval for messages</p>
                  </div>
                  <Switch
                    checked={enableModeration}
                    onCheckedChange={setEnableModeration}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Anonymous messaging</h4>
                    <p className="text-sm text-gray-600">Hide real names in chat</p>
                  </div>
                  <Switch
                    checked={anonymousMessaging}
                    onCheckedChange={setAnonymousMessaging}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add Participants */}
          <Card>
            <CardHeader>
              <CardTitle>
                Add Participants
                {roomType === 'direct' ? ' (Select 1)' : ''}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search chat partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                />
              </div>

              {/* Selected Partners */}
              {selectedPartners.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Selected ({selectedPartners.length}):
                  </p>
                  <p className="text-sm text-gray-600">{getSelectedPartnerNames()}</p>
                </div>
              )}

              {/* Partners List */}
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {filteredPartners.map((partner) => (
                  <label
                    key={partner.id}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type={roomType === 'direct' ? 'radio' : 'checkbox'}
                      name={roomType === 'direct' ? 'directPartner' : undefined}
                      checked={selectedPartners.includes(partner.id)}
                      onChange={() => handlePartnerToggle(partner.id)}
                      className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                    />
                    
                    <div className="relative">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                        style={{ backgroundColor: partner.avatarColor }}
                      >
                        {partner.name.split(' ').map(word => word[0]).join('')}
                      </div>
                      {partner.status === 'online' && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{partner.name}</span>
                        {partner.isTherapist && (
                          <Badge className="bg-mindlyfe-green text-white text-xs">
                            Therapist
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        {partner.status === 'online' ? 'Active now' : 'Last seen recently'}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              {filteredPartners.length === 0 && (
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No chat partners found</h3>
                  <p className="text-gray-600 mb-4">Follow users in the community to start chatting</p>
                  <Button
                    onClick={() => navigate('/community')}
                    variant="outline"
                    className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue hover:text-white"
                  >
                    Go to Community
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Create Button */}
          <Button
            onClick={handleCreateRoom}
            className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
            disabled={
              (roomType === 'direct' && selectedPartners.length !== 1) ||
              (roomType !== 'direct' && !roomName.trim())
            }
          >
            Create Room
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateChatRoom;
