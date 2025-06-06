
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Archive, MoreVertical, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  messageCount: number;
  lastMessageAt: string;
  status: 'active' | 'archived';
  topics: string[];
}

const LyfBotHistory = () => {
  const navigate = useNavigate();

  // Mock conversation history
  const conversations: Conversation[] = [
    {
      id: 'conv_1',
      title: 'Work Anxiety Support',
      lastMessage: 'I understand work anxiety can be overwhelming...',
      messageCount: 15,
      lastMessageAt: 'Today',
      status: 'active',
      topics: ['anxiety', 'work_stress', 'sleep']
    },
    {
      id: 'conv_2',
      title: 'Sleep Improvement',
      lastMessage: 'Let\'s work on your sleep routine...',
      messageCount: 23,
      lastMessageAt: 'Yesterday',
      status: 'active',
      topics: ['sleep', 'relaxation', 'routine']
    },
    {
      id: 'conv_3',
      title: 'Coping Strategies',
      lastMessage: 'Here are some techniques that...',
      messageCount: 8,
      lastMessageAt: '3 days ago',
      status: 'active',
      topics: ['coping', 'mindfulness', 'breathing']
    },
    {
      id: 'conv_4',
      title: 'Daily Check-in',
      lastMessage: 'How did your day go?',
      messageCount: 5,
      lastMessageAt: '1 week ago',
      status: 'archived',
      topics: ['mood', 'daily_reflection']
    }
  ];

  const stats = {
    totalConversations: 12,
    totalMessages: 156,
    mostDiscussed: 'Anxiety',
    progressTrend: 'Improving'
  };

  const handleContinueConversation = (conversationId: string) => {
    navigate('/chat/lyfbot');
  };

  const handleArchiveConversation = (conversationId: string) => {
    console.log('Archiving conversation:', conversationId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/chat/lyfbot')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Conversation History</h1>
            <p className="text-sm text-gray-600">Your chats with LyfBot</p>
          </div>
        </div>

        {/* Conversation Insights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Conversation Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">{stats.totalConversations}</div>
                <div className="text-sm text-blue-600">📊 Total conversations</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">{stats.totalMessages}</div>
                <div className="text-sm text-green-600">💬 Total messages</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-lg font-bold text-purple-700">{stats.mostDiscussed}</div>
                <div className="text-sm text-purple-600">📈 Most discussed</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-lg font-bold text-yellow-700 flex items-center justify-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {stats.progressTrend}
                </div>
                <div className="text-sm text-yellow-600">🎯 Progress</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Conversations */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Conversations</h2>
          
          <div className="space-y-3">
            {conversations.filter(conv => conv.status === 'active').map((conversation) => (
              <Card key={conversation.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        🤖
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{conversation.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          "{conversation.lastMessage}"
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-2">
                          {conversation.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic.replace('_', ' ')}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{conversation.messageCount} messages • {conversation.lastMessageAt}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-3">
                      <Button
                        size="sm"
                        onClick={() => handleContinueConversation(conversation.id)}
                        className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 text-xs"
                      >
                        Continue
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleArchiveConversation(conversation.id)}
                        className="text-xs"
                      >
                        <Archive className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Archived Conversations */}
        {conversations.some(conv => conv.status === 'archived') && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Archived Conversations</h2>
            
            <div className="space-y-3">
              {conversations.filter(conv => conv.status === 'archived').map((conversation) => (
                <Card key={conversation.id} className="opacity-75">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-8 h-8 text-gray-400" />
                        <div>
                          <h3 className="font-medium text-gray-700">{conversation.title}</h3>
                          <p className="text-sm text-gray-500">
                            {conversation.messageCount} messages • {conversation.lastMessageAt}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleContinueConversation(conversation.id)}
                        className="text-xs"
                      >
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => navigate('/chat/lyfbot')}
            className="flex-1 bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Start New Conversation
          </Button>
          <Button
            onClick={() => navigate('/chat/lyfbot/insights')}
            variant="outline"
            className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue hover:text-white"
          >
            View Insights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LyfBotHistory;
