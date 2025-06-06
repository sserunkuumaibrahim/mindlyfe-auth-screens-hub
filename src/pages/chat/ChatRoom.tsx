
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Settings, Smile, Paperclip, Mic, Send, Lock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isOwnMessage: boolean;
  reactions?: { emoji: string; count: number; users: string[] }[];
  replyTo?: { id: string; content: string; senderName: string };
  status: 'sending' | 'sent' | 'delivered' | 'read';
}

const ChatRoom = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock room data
  const roomData = {
    id: roomId,
    name: 'Anxiety Support Group',
    type: 'support',
    participants: 8,
    isEncrypted: true,
    isModerated: true,
    description: 'A safe space to share experiences and support each other'
  };

  // Mock messages data
  const [messages] = useState<Message[]>([
    {
      id: '1',
      senderId: 'moderator_1',
      senderName: 'Dr. Johnson (Moderator)',
      senderAvatar: '#8EBC40',
      content: 'Welcome everyone to today\'s group session. Let\'s start with check-ins. How is everyone feeling today?',
      timestamp: '10:00',
      isOwnMessage: false,
      status: 'read'
    },
    {
      id: '2',
      senderId: 'user_2',
      senderName: 'Mindful Dreamer',
      senderAvatar: '#21A9E1',
      content: 'I\'ve been practicing the breathing techniques we discussed last week and they\'re really helping with my morning anxiety.',
      timestamp: '10:02',
      isOwnMessage: false,
      reactions: [{ emoji: '❤️', count: 3, users: ['user_3', 'user_4', 'moderator_1'] }],
      status: 'read'
    },
    {
      id: '3',
      senderId: 'user_3',
      senderName: 'Peaceful Warrior',
      senderAvatar: '#FF6B9D',
      content: 'That\'s great to hear! I\'m still struggling with morning anxiety. Could you share which breathing technique works best for you?',
      timestamp: '10:03',
      isOwnMessage: false,
      status: 'read'
    },
    {
      id: '4',
      senderId: 'current_user',
      senderName: 'You',
      senderAvatar: '#9B59B6',
      content: 'I can relate to that. What helps me is the 4-7-8 technique. Breathe in for 4, hold for 7, exhale for 8. It really calms my nervous system.',
      timestamp: '10:04',
      isOwnMessage: true,
      status: 'read'
    },
    {
      id: '5',
      senderId: 'user_4',
      senderName: 'Brave Soul',
      senderAvatar: '#E67E22',
      content: 'Thank you for sharing that! I\'m going to try it. Does anyone have tips for dealing with anxiety at work?',
      timestamp: '10:05',
      isOwnMessage: false,
      status: 'delivered'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In real app, this would send the message via socket
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return '✓';
      case 'delivered':
        return '✓✓';
      case 'read':
        return '✓✓';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/chat')}
              className="rounded-full hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: '#21A9E1' }}
            >
              <Shield className="w-5 h-5" />
            </div>
            
            <div>
              <h2 className="font-semibold text-gray-900">{roomData.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{roomData.participants} participants</span>
                {roomData.isModerated && (
                  <>
                    <span>•</span>
                    <span>Moderated</span>
                  </>
                )}
                {isTyping && (
                  <>
                    <span>•</span>
                    <span className="text-mindlyfe-blue">Someone is typing...</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/chat/room/${roomId}/settings`)}
            className="rounded-full hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.isOwnMessage ? 'flex-row-reverse' : ''}`}
            >
              {!message.isOwnMessage && (
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                  style={{ backgroundColor: message.senderAvatar }}
                >
                  {message.senderName.split(' ').map(word => word[0]).join('')}
                </div>
              )}
              
              <div className={`max-w-xs sm:max-w-md ${message.isOwnMessage ? 'mr-8' : 'ml-0'}`}>
                {!message.isOwnMessage && (
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    {message.senderName}
                  </div>
                )}
                
                <div
                  className={`rounded-lg px-3 py-2 ${
                    message.isOwnMessage
                      ? 'bg-mindlyfe-blue text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                
                <div className={`flex items-center gap-2 mt-1 text-xs text-gray-500 ${message.isOwnMessage ? 'justify-end' : ''}`}>
                  <span>{message.timestamp}</span>
                  {message.isOwnMessage && (
                    <span className={message.status === 'read' ? 'text-mindlyfe-blue' : ''}>
                      {getStatusIcon(message.status)}
                    </span>
                  )}
                </div>
                
                {message.reactions && message.reactions.length > 0 && (
                  <div className="flex gap-1 mt-2">
                    {message.reactions.map((reaction, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                      >
                        {reaction.emoji} {reaction.count}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100"
            >
              <Paperclip className="w-5 h-5 text-gray-500" />
            </Button>
            
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full px-4 py-2 pr-20 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-8 h-8 hover:bg-gray-100"
                >
                  <Smile className="w-4 h-4 text-gray-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-8 h-8 hover:bg-gray-100"
                >
                  <Mic className="w-4 h-4 text-gray-500" />
                </Button>
              </div>
            </div>
            
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              size="icon"
              className="rounded-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-gray-50 px-4 py-2">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs text-gray-600">
          <Lock className="w-3 h-3" />
          <span>End-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
