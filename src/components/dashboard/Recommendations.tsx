
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Recommendation {
  id: string;
  type: string;
  title: string;
  description: string;
  route: string;
  priority: 'high' | 'medium' | 'low';
}

interface RecommendationsProps {
  recommendations: Recommendation[];
}

const Recommendations = ({ recommendations }: RecommendationsProps) => {
  const navigate = useNavigate();

  const defaultRecommendations = [
    {
      id: '1',
      type: 'course',
      title: 'Stress Management Course',
      description: 'Learn effective stress reduction techniques',
      route: '/courses/stress-management',
      priority: 'high' as const
    },
    {
      id: '2',
      type: 'connection',
      title: 'Connect with Sarah M.',
      description: 'Fellow community member with similar interests',
      route: '/community/profile/sarah-m',
      priority: 'medium' as const
    },
    {
      id: '3',
      type: 'activity',
      title: 'Evening Reflection',
      description: 'Take time to reflect on your day',
      route: '/reflection/evening',
      priority: 'medium' as const
    }
  ];

  const displayRecommendations = recommendations.length > 0 ? recommendations : defaultRecommendations;

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Recommended for You</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          {displayRecommendations.slice(0, 3).map((rec) => (
            <Button
              key={rec.id}
              variant="outline"
              onClick={() => navigate(rec.route)}
              className="w-full p-4 h-auto flex-col items-start text-left hover:bg-primary/5"
            >
              <div className="font-medium text-gray-900 mb-1">{rec.title}</div>
              <div className="text-xs text-gray-600">{rec.description}</div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Recommendations;
