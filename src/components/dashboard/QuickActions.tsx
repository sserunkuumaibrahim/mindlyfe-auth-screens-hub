
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Video, BookOpen, Users, Brain, Phone } from 'lucide-react';

const QuickActions = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: 'Chat with LyfBot',
      description: 'AI mental health support',
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      action: () => navigate('/chat/lyfbot'),
      gradient: 'from-mindlyfe-blue to-blue-600'
    },
    {
      title: 'Message Therapist',
      description: 'Connect instantly',
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      action: () => navigate('/teletherapy'),
      gradient: 'from-mindlyfe-green to-green-600'
    },
    {
      title: 'Video Session',
      description: 'Join therapy call',
      icon: <Video className="w-5 h-5 sm:w-6 sm:h-6" />,
      action: () => navigate('/teletherapy/sessions'),
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Journal Entry',
      description: 'Write thoughts',
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      action: () => navigate('/journal/write'),
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      title: 'Community',
      description: 'Connect with others',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      action: () => navigate('/community'),
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Crisis Support',
      description: '24/7 emergency help',
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      action: () => navigate('/mental-health/crisis'),
      gradient: 'from-red-500 to-red-600'
    }
  ];

  return (
    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Quick Actions</h3>
          <p className="text-xs sm:text-sm text-gray-600">Access your most-used features</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              onClick={action.action}
              variant="ghost"
              className="h-auto p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 text-left bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300 hover:border-gray-300"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${action.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg`}>
                {action.icon}
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <div className="font-semibold text-xs sm:text-sm text-gray-900">{action.title}</div>
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
