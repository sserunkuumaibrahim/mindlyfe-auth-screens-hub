
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Video, BookOpen, Users, Brain, Phone } from 'lucide-react';

const QuickActions = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: 'Chat with LyfBot',
      description: 'AI mental health support',
      icon: <Brain className="w-5 h-5" />,
      action: () => navigate('/chat/lyfbot'),
      gradient: 'from-mindlyfe-blue to-blue-600',
      bgGradient: 'from-mindlyfe-blue/10 to-blue-50'
    },
    {
      title: 'Message Therapist',
      description: 'Connect instantly',
      icon: <MessageSquare className="w-5 h-5" />,
      action: () => navigate('/teletherapy'),
      gradient: 'from-mindlyfe-green to-green-600',
      bgGradient: 'from-mindlyfe-green/10 to-green-50'
    },
    {
      title: 'Video Session',
      description: 'Join therapy call',
      icon: <Video className="w-5 h-5" />,
      action: () => navigate('/teletherapy/sessions'),
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    {
      title: 'Journal Entry',
      description: 'Write thoughts',
      icon: <BookOpen className="w-5 h-5" />,
      action: () => navigate('/journal/write'),
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50'
    },
    {
      title: 'Community',
      description: 'Connect with others',
      icon: <Users className="w-5 h-5" />,
      action: () => navigate('/community'),
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100'
    },
    {
      title: 'Crisis Support',
      description: '24/7 emergency help',
      icon: <Phone className="w-5 h-5" />,
      action: () => navigate('/mental-health/crisis'),
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100'
    }
  ];

  return (
    <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-mindlyfe-blue/5 via-transparent to-mindlyfe-green/5" />
      
      <CardHeader className="relative">
        <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              onClick={action.action}
              variant="ghost"
              className={`h-auto p-4 flex flex-col gap-3 text-left bg-gradient-to-br ${action.bgGradient} border border-white/50 hover:shadow-md hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                {action.icon}
              </div>
              <div className="space-y-1">
                <div className="font-medium text-sm text-gray-900">{action.title}</div>
                <div className="text-xs text-gray-600">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
