
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, PenTool, Brain, Users, Heart, BookOpen, Zap, Sparkles } from 'lucide-react';

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
      description: 'AI-powered support',
      color: 'from-blue-500 via-blue-600 to-cyan-600'
    },
    { 
      id: 'journal', 
      title: 'Journal Entry', 
      icon: '📝', 
      route: '/journal',
      description: 'Reflect on your day',
      color: 'from-purple-500 via-purple-600 to-pink-600'
    },
    { 
      id: 'meditation', 
      title: 'Start Meditation', 
      icon: '🧘', 
      route: '/meditation',
      description: 'Find your calm',
      color: 'from-green-500 via-green-600 to-emerald-600'
    },
    { 
      id: 'community', 
      title: 'Community', 
      icon: '👥', 
      route: '/community',
      description: 'Connect with others',
      color: 'from-orange-500 via-orange-600 to-red-600'
    },
    { 
      id: 'wellness', 
      title: 'Wellness Check', 
      icon: '❤️', 
      route: '/wellness',
      description: 'Track your mood',
      color: 'from-pink-500 via-pink-600 to-rose-600'
    },
    { 
      id: 'resources', 
      title: 'Learn & Grow', 
      icon: '📚', 
      route: '/resources',
      description: 'Explore resources',
      color: 'from-indigo-500 via-indigo-600 to-purple-600'
    }
  ];

  const displayActions = actions.length > 0 ? actions : defaultActions;

  return (
    <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 pointer-events-none" />
      
      <CardHeader className="relative pb-6">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary-light to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900">Quick Actions</div>
            <div className="text-sm font-medium text-gray-600">Fast access to key features</div>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative p-6 pt-0">
        <div className="grid grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4">
          {displayActions.map((action, index) => {
            const IconComponent = iconComponents[action.icon as keyof typeof iconComponents] || MessageCircle;
            return (
              <Button
                key={action.id}
                variant="outline"
                onClick={() => handleActionClick(action.route)}
                className="group/action relative h-auto p-6 flex flex-col items-center gap-4 border-0 bg-white/80 hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-md overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Action background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/30 opacity-0 group-hover/action:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center shadow-lg group-hover/action:shadow-2xl transition-all duration-300 group-hover/action:scale-110`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-0 group-hover/action:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <div className="text-center relative">
                  <div className="font-bold text-gray-900 text-sm mb-1">{action.title}</div>
                  {action.description && (
                    <div className="text-xs text-gray-600 font-medium">{action.description}</div>
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
