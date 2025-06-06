
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, PenTool, Brain, Users, Heart, BookOpen } from 'lucide-react';

interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
  description?: string;
  color: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions = ({ actions }: QuickActionsProps) => {
  const navigate = useNavigate();

  const handleActionClick = (route: string) => {
    navigate(route);
  };

  const iconComponents = {
    '💬': MessageCircle,
    '📝': PenTool,
    '🧘': Brain,
    '👥': Users,
    '❤️': Heart,
    '📚': BookOpen,
  };

  const defaultActions = [
    { 
      id: 'lyfbot-chat', 
      title: 'Chat with LyfBot', 
      icon: '💬', 
      route: '/lyfbot',
      description: 'Get AI-powered support',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'journal', 
      title: 'Journal Entry', 
      icon: '📝', 
      route: '/journal',
      description: 'Reflect on your day',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'meditation', 
      title: 'Start Meditation', 
      icon: '🧘', 
      route: '/meditation',
      description: 'Find your calm',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'community', 
      title: 'Community', 
      icon: '👥', 
      route: '/community',
      description: 'Connect with others',
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 'wellness', 
      title: 'Wellness Check', 
      icon: '❤️', 
      route: '/wellness',
      description: 'Track your mood',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      id: 'resources', 
      title: 'Learn & Grow', 
      icon: '📚', 
      route: '/resources',
      description: 'Explore resources',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const displayActions = actions.length > 0 ? actions : defaultActions;

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center">
            <span className="text-white text-sm">⚡</span>
          </div>
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="grid grid-cols-2 gap-4">
          {displayActions.map((action, index) => {
            const IconComponent = iconComponents[action.icon as keyof typeof iconComponents] || MessageCircle;
            return (
              <Button
                key={action.id}
                variant="outline"
                onClick={() => handleActionClick(action.route)}
                className="h-auto p-4 flex flex-col items-center gap-3 border-0 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-sm">{action.title}</div>
                  {action.description && (
                    <div className="text-xs text-gray-600 mt-1">{action.description}</div>
                  )}
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
