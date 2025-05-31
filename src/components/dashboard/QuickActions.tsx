
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
  badge?: number;
  priority: number;
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
    { id: 'chat', title: 'Chat', icon: '💬', route: '/chat', badge: 2, priority: 1 },
    { id: 'write', title: 'Write', icon: '📝', route: '/journal', priority: 2 },
    { id: 'calm', title: 'Calm', icon: '🧘', route: '/meditation', priority: 3 },
    { id: 'therapy', title: 'Therapy', icon: '🩺', route: '/therapy', priority: 4 },
    { id: 'community', title: 'Community', icon: '👥', route: '/community', badge: 5, priority: 5 },
    { id: 'learn', title: 'Learn', icon: '📚', route: '/resources', priority: 6 },
  ];

  const displayActions = actions.length > 0 ? actions : defaultActions;

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="grid grid-cols-3 gap-4">
          {displayActions.slice(0, 6).map((action) => (
            <button
              key={action.id}
              onClick={() => handleActionClick(action.route)}
              className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-primary/10 transition-colors relative"
            >
              {action.badge && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {action.badge}
                </Badge>
              )}
              <div className="text-2xl mb-1">{action.icon}</div>
              <div className="text-xs font-medium text-gray-700">{action.title}</div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
