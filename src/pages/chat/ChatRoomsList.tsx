import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, MessageSquare, Users, Shield, Lock, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface ChatRoom {
  id: string;
  name: string;
  type: 'direct' | 'group' | 'support' | 'therapy';
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isEncrypted: boolean;
  isModerated: boolean;
  participants: number;
  avatarColor: string;
  status: 'online' | 'offline' | 'busy';
}

const ChatRoomsList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock chat rooms data
  const chatRooms: ChatRoom[] = [
    {
      id: 'lyfbot',
      name: 'LyfBot',
      type: 'therapy',
      lastMessage: 'I\'m here to support your wellness journey. How are you feeling today?',
      lastMessageTime: 'Always available',
      unreadCount: 0,
      isEncrypted: true,
      isModerated: false,
      participants: 2,
      avatarColor: 'linear-gradient(45deg, #21A9E1, #8EBC40)',
      status: 'online'
    },
    {
      id: 'room_1',
      name: 'Anxiety Support Group',
      type: 'support',
      lastMessage: 'Thanks for sharing your experience...',
      lastMessageTime: '2:30 PM',
      unreadCount: 3,
      isEncrypted: true,
      isModerated: true,
      participants: 8,
      avatarColor: '#21A9E1',
      status: 'online'
    },
    {
      id: 'room_2',
      name: 'Dr. Sarah Johnson',
      type: 'therapy',
      lastMessage: 'See you at our session tomorrow',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      isEncrypted: true,
      isModerated: false,
      participants: 2,
      avatarColor: '#8EBC40',
      status: 'offline'
    },
    {
      id: 'room_3',
      name: 'Mindful Dreamer',
      type: 'direct',
      lastMessage: 'Hope you\'re doing well today',
      lastMessageTime: '1 week ago',
      unreadCount: 0,
      isEncrypted: true,
      isModerated: false,
      participants: 2,
      avatarColor: '#FF6B9D',
      status: 'online'
    },
    {
      id: 'room_4',
      name: 'Depression Support',
      type: 'support',
      lastMessage: 'Mike: That\'s really helpful advice',
      lastMessageTime: '2 days ago',
      unreadCount: 1,
      isEncrypted: true,
      isModerated: true,
      participants: 12,
      avatarColor: '#9B59B6',
      status: 'online'
    },
    {
      id: 'room_5',
      name: 'Wellness Warriors',
      type: 'group',
      lastMessage: 'Let\'s schedule our next meetup',
      lastMessageTime: '3 days ago',
      unreadCount: 0,
      isEncrypted: false,
      isModerated: false,
      participants: 6,
      avatarColor: '#E67E22',
      status: 'online'
    }
  ];

  const getRoomIcon = (type: string) => {
    switch (type) {
      case 'direct':
        return <MessageSquare className="w-4 h-4" />;
      case 'group':
        return <Users className="w-4 h-4" />;
      case 'support':
        return <Shield className="w-4 h-4" />;
      case 'therapy':
        return <Video className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getRoomTypeLabel = (type: string) => {
    switch (type) {
      case 'direct':
        return 'Direct Message';
      case 'group':
        return 'Group Chat';
      case 'support':
        return 'Support Group';
      case 'therapy':
        return 'Therapy Session';
      default:
        return 'Chat';
    }
  };

  const handleRoomClick = (room: ChatRoom) => {
    if (room.id === 'lyfbot') {
      navigate('/chat/lyfbot');
    } else {
      navigate(`/chat/room/${room.id}`);
    }
  };

  const filteredRooms = chatRooms.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Chats</h1>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/chat/partners')}
              className="rounded-full hover:bg-mindlyfe-blue/10"
            >
              <Search className="w-5 h-5 text-mindlyfe-blue" />
            </Button>
            <Button
              onClick={() => navigate('/chat/create')}
              size="icon"
              className="rounded-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
          />
        </div>

        {/* Chat Rooms List */}
        <div className="space-y-2">
          {filteredRooms.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No chats found</h3>
              <p className="text-gray-600 mb-4">Start a conversation with someone from your community</p>
              <Button
                onClick={() => navigate('/chat/partners')}
                className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
              >
                Find Chat Partners
              </Button>
            </div>
          ) : (
            filteredRooms.map((room) => (
              <Card
                key={room.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleRoomClick(room)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                          room.id === 'lyfbot' ? 'bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green' : ''
                        }`}
                        style={room.id !== 'lyfbot' ? { backgroundColor: room.avatarColor } : {}}
                      >
                        {room.id === 'lyfbot' ? (
                          '🤖'
                        ) : room.type === 'direct' ? 
                          room.name.split(' ').map(word => word[0]).join('') :
                          getRoomIcon(room.type)
                        }
                      </div>
                      {room.status === 'online' && room.type === 'direct' && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                      {room.id === 'lyfbot' && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 truncate">{room.name}</h3>
                          <div className="flex items-center gap-1">
                            {room.isEncrypted && (
                              <Lock className="w-3 h-3 text-mindlyfe-green" />
                            )}
                            {room.isModerated && (
                              <Shield className="w-3 h-3 text-mindlyfe-blue" />
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{room.lastMessageTime}</span>
                          {room.unreadCount > 0 && (
                            <Badge className="bg-mindlyfe-green text-white min-w-[20px] h-5 text-xs">
                              {room.unreadCount}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate flex-1 mr-2">
                          {room.lastMessage}
                        </p>
                        <Badge variant="outline" className="text-xs border-mindlyfe-blue/30 text-mindlyfe-blue">
                          {getRoomTypeLabel(room.type)}
                        </Badge>
                      </div>

                      {room.type !== 'direct' && (
                        <p className="text-xs text-gray-500 mt-1">
                          {room.participants} participants
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Quick Action */}
        {filteredRooms.length > 0 && (
          <div className="mt-6">
            <Button
              onClick={() => navigate('/chat/create')}
              className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRoomsList;
