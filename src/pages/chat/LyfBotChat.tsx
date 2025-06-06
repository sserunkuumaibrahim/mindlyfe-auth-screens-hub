import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, Send, Mic, Smile, MoreVertical, ThumbsUp, ThumbsDown, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface LyfBotMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  metadata?: {
    crisisDetected?: boolean;
    recommendationsIncluded?: string[];
    journalInsightsUsed?: boolean;
    responseTime?: number;
  };
  feedback?: {
    helpful: boolean;
    accurate: boolean;
    appropriate: boolean;
  };
}

const LyfBotChat = () => {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock conversation data
  const [messages] = useState<LyfBotMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m LyfBot, your AI mental health assistant. I\'m here to support your wellness journey. How are you feeling today?',
      timestamp: '10:00',
      metadata: {
        crisisDetected: false,
        journalInsightsUsed: false,
        responseTime: 0.8
      }
    },
    {
      id: '2',
      role: 'user',
      content: 'I\'ve been feeling anxious about work lately. It\'s affecting my sleep.',
      timestamp: '10:02'
    },
    {
      id: '3',
      role: 'assistant',
      content: 'I understand work anxiety can be overwhelming. Based on your recent journal entries, I notice this has been a recurring theme. Here are some strategies that might help:\n\n🧘 Progressive muscle relaxation before bed\n📝 Write down tomorrow\'s priorities tonight\n🌙 Try the 4-7-8 breathing technique\n\nWould you like me to guide you through any of these?',
      timestamp: '10:03',
      metadata: {
        crisisDetected: false,
        recommendationsIncluded: ['breathing_exercise', 'sleep_hygiene', 'journaling'],
        journalInsightsUsed: true,
        responseTime: 1.2
      }
    }
  ]);

  const quickSuggestions = [
    'Breathing Exercise',
    'Sleep Hygiene Tips',
    'Work Stress Management',
    'Crisis Support'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message to LyfBot:', newMessage);
      setIsTyping(true);
      
      // Simulate AI response delay
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFeedback = (messageId: string, helpful: boolean) => {
    console.log('Feedback for message:', messageId, 'Helpful:', helpful);
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setNewMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 lg:py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/chat')}
              className="rounded-full hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green flex items-center justify-center text-white font-bold text-lg lg:text-xl">
              🤖
            </div>
            
            <div>
              <h2 className="font-semibold text-gray-900 text-lg lg:text-xl">LyfBot</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Your AI Mental Health Guide</span>
                {isTyping && (
                  <>
                    <span>•</span>
                    <span className="text-mindlyfe-blue">Typing...</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/chat/lyfbot/history')}
              className="rounded-full hover:bg-gray-100"
            >
              <MoreVertical className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/chat/lyfbot/settings')}
              className="rounded-full hover:bg-gray-100"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-4 lg:py-6 space-y-4 lg:space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 lg:gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green flex items-center justify-center text-white text-sm lg:text-base font-bold flex-shrink-0">
                  🤖
                </div>
              )}
              
              <div className={`max-w-xs sm:max-w-md lg:max-w-lg ${message.role === 'user' ? 'mr-8 lg:mr-10' : 'ml-0'}`}>
                <Card className={`${message.role === 'user' ? 'bg-mindlyfe-blue text-white border-mindlyfe-blue' : 'bg-white border-gray-200'} shadow-sm`}>
                  <CardContent className="p-3 lg:p-4">
                    <p className="text-sm lg:text-base whitespace-pre-line">{message.content}</p>
                  </CardContent>
                </Card>
                
                <div className={`flex items-center gap-2 mt-2 text-xs lg:text-sm text-gray-500 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  <span>{message.timestamp}</span>
                  {message.metadata?.crisisDetected && (
                    <Badge variant="destructive" className="text-xs">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Crisis Support Available
                    </Badge>
                  )}
                </div>
                
                {/* AI Message Metadata */}
                {message.role === 'assistant' && message.metadata && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {message.metadata.journalInsightsUsed && (
                      <Badge variant="outline" className="text-xs border-mindlyfe-blue text-mindlyfe-blue">
                        📝 Journal Insights
                      </Badge>
                    )}
                    {message.metadata.recommendationsIncluded && message.metadata.recommendationsIncluded.length > 0 && (
                      <Badge variant="outline" className="text-xs border-mindlyfe-green text-mindlyfe-green">
                        💡 Recommendations
                      </Badge>
                    )}
                  </div>
                )}
                
                {/* Feedback for AI messages */}
                {message.role === 'assistant' && (
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFeedback(message.id, true)}
                      className="h-6 lg:h-8 px-2 lg:px-3 text-xs lg:text-sm hover:bg-green-50 hover:text-green-600"
                    >
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      Helpful
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFeedback(message.id, false)}
                      className="h-6 lg:h-8 px-2 lg:px-3 text-xs lg:text-sm hover:bg-red-50 hover:text-red-600"
                    >
                      <ThumbsDown className="w-3 h-3 mr-1" />
                      Not helpful
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green flex items-center justify-center text-white text-sm lg:text-base font-bold flex-shrink-0">
                🤖
              </div>
              <Card className="bg-white border-gray-200 shadow-sm max-w-xs">
                <CardContent className="p-3 lg:p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="bg-gray-100 px-4 py-3 lg:py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 overflow-x-auto">
            {quickSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickSuggestion(suggestion)}
                className="whitespace-nowrap flex-shrink-0 text-xs lg:text-sm border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue hover:text-white"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 lg:py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="flex-1 relative">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="w-full px-4 py-2 lg:py-3 pr-20 lg:pr-24 border border-gray-200 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent text-sm lg:text-base"
                rows={1}
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
              className="rounded-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 disabled:opacity-50 w-10 h-10 lg:w-12 lg:h-12"
            >
              <Send className="w-4 h-4 lg:w-5 lg:h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-gray-50 px-4 py-2 lg:py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs lg:text-sm text-gray-600">
          <span>🔒 Secure & Private • AI responses may take a moment</span>
        </div>
      </div>
    </div>
  );
};

export default LyfBotChat;
