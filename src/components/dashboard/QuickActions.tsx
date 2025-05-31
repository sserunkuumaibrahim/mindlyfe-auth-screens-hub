
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
  description?: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions = ({ actions }: QuickActionsProps) => {
  const navigate = useNavigate();

  const handleActionClick = (route: string) => {
    navigate(route);
  };

  const defaultActions = [
    { 
      id: 'lyfbot-chat', 
      title: 'Chat with LyfBot', 
      icon: '💬', 
      route: '/lyfbot',
      description: 'Get AI-powered support and insights'
    },
    { 
      id: 'journal', 
      title: 'Journal Entry', 
      icon: '📝', 
      route: '/journal',
      description: 'Reflect on your thoughts and feelings'
    },
    { 
      id: 'meditation', 
      title: 'Start Meditation', 
      icon: '🧘', 
      route: '/meditation',
      description: 'Find calm with guided sessions'
    },
    { 
      id: 'community', 
      title: 'Community Feed', 
      icon: '👥', 
      route: '/community',
      description: 'Connect with others on similar journeys'
    }
  ];

  const displayActions = actions.length > 0 ? actions : defaultActions;

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          {displayActions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              onClick={() => handleActionClick(action.route)}
              className="w-full p-4 h-auto flex items-center gap-3 text-left hover:bg-primary/5"
            >
              <span className="text-2xl">{action.icon}</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{action.title}</div>
                {action.description && (
                  <div className="text-xs text-gray-600 mt-1">{action.description}</div>
                )}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
