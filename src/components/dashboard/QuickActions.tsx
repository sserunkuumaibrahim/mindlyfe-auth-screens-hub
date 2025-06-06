
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Video, Phone, BookOpen, Users, Brain } from 'lucide-react';

const QuickActions = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: 'Chat with LyfBot',
      description: 'Get instant AI mental health support',
      icon: <Brain className="w-5 h-5" />,
      action: () => navigate('/chat/lyfbot'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Message Therapist',
      description: 'Connect with your therapist',
      icon: <MessageSquare className="w-5 h-5" />,
      action: () => navigate('/teletherapy'),
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Video Session',
      description: 'Join a therapy session',
      icon: <Video className="w-5 h-5" />,
      action: () => navigate('/teletherapy/sessions'),
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Journal Entry',
      description: 'Write your thoughts',
      icon: <BookOpen className="w-5 h-5" />,
      action: () => navigate('/journal/write'),
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      title: 'Community',
      description: 'Connect with others',
      icon: <Users className="w-5 h-5" />,
      action: () => navigate('/community'),
      color: 'bg-indigo-600 hover:bg-indigo-700'
    },
    {
      title: 'Crisis Support',
      description: '24/7 emergency help',
      icon: <Phone className="w-5 h-5" />,
      action: () => navigate('/mental-health/crisis'),
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              onClick={action.action}
              className={`h-auto p-3 flex flex-col gap-2 text-left ${action.color} text-white`}
            >
              {action.icon}
              <div>
                <div className="font-medium text-sm">{action.title}</div>
                <div className="text-xs opacity-90">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
