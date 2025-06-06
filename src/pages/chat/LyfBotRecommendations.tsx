
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, BookOpen, Target, Edit, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface Recommendation {
  id: string;
  category: string;
  title: string;
  description: string;
  rating: number;
  source: string;
  duration?: string;
  action: string;
}

const LyfBotRecommendations = () => {
  const navigate = useNavigate();

  const recommendations: Recommendation[] = [
    {
      id: 'rec_1',
      category: 'mindfulness',
      title: '4-7-8 Breathing',
      description: 'Recommended for anxiety',
      rating: 5,
      source: 'From LyfBot',
      duration: '5 min',
      action: 'try_now'
    },
    {
      id: 'rec_2',
      category: 'mindfulness',
      title: 'Progressive Muscle Relaxation',
      description: 'Great for sleep issues',
      rating: 5,
      source: 'From LyfBot',
      duration: '15 min',
      action: 'try_now'
    },
    {
      id: 'rec_3',
      category: 'journaling',
      title: 'Gratitude Journaling',
      description: 'What am I grateful for today?',
      rating: 4,
      source: 'Suggested by LyfBot',
      action: 'start_journaling'
    },
    {
      id: 'rec_4',
      category: 'goals',
      title: 'Improve Sleep Quality',
      description: 'Based on recent conversations',
      rating: 5,
      source: 'Personalized suggestion',
      action: 'set_goal'
    },
    {
      id: 'rec_5',
      category: 'learning',
      title: 'Understanding Anxiety',
      description: 'Article • 5 min read',
      rating: 4,
      source: 'Matches your interests',
      action: 'read'
    },
    {
      id: 'rec_6',
      category: 'learning',
      title: 'Sleep Hygiene Guide',
      description: 'Video • 8 min watch',
      rating: 5,
      source: 'Educational content',
      action: 'watch'
    }
  ];

  const categoryIcons = {
    mindfulness: '🧘',
    journaling: '📝',
    goals: '🎯',
    learning: '📚'
  };

  const categoryTitles = {
    mindfulness: 'Mindfulness & Relaxation',
    journaling: 'Journaling Prompts',
    goals: 'Goal Suggestions',
    learning: 'Learning Resources'
  };

  const handleRecommendationAction = (recommendation: Recommendation) => {
    console.log('Taking action on recommendation:', recommendation);
    
    switch (recommendation.action) {
      case 'try_now':
        // Navigate to activity or start in-app
        break;
      case 'start_journaling':
        navigate('/journal/write');
        break;
      case 'set_goal':
        navigate('/mental-health/goals');
        break;
      case 'read':
      case 'watch':
        navigate('/resources');
        break;
    }
  };

  const getActionLabel = (action: string) => {
    switch (action) {
      case 'try_now':
        return 'Try Now';
      case 'start_journaling':
        return 'Start Journaling';
      case 'set_goal':
        return 'Set Goal';
      case 'read':
        return 'Read';
      case 'watch':
        return 'Watch';
      default:
        return 'Learn More';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const groupedRecommendations = recommendations.reduce((acc, rec) => {
    if (!acc[rec.category]) {
      acc[rec.category] = [];
    }
    acc[rec.category].push(rec);
    return acc;
  }, {} as Record<string, Recommendation[]>);

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
            <h1 className="text-xl font-bold text-gray-900">LyfBot Recommendations</h1>
            <p className="text-sm text-gray-600">Personalized for your wellness journey</p>
          </div>
        </div>

        {/* Personalized Banner */}
        <Card className="mb-6 bg-gradient-to-r from-mindlyfe-blue to-mindlyfe-green text-white">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h2 className="font-semibold">Personalized for You</h2>
                <p className="text-sm opacity-90">
                  Based on your conversations and journal insights
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations by Category */}
        {Object.entries(groupedRecommendations).map(([category, recs]) => (
          <Card key={category} className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{categoryIcons[category as keyof typeof categoryIcons]}</span>
                {categoryTitles[category as keyof typeof categoryTitles]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recs.map((recommendation) => (
                <div
                  key={recommendation.id}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {recommendation.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {recommendation.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {renderStars(recommendation.rating)}
                        </div>
                        <span className="text-xs text-gray-500">
                          ({recommendation.source})
                        </span>
                      </div>
                      
                      {recommendation.duration && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {recommendation.duration}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleRecommendationAction(recommendation)}
                      size="sm"
                      className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                    >
                      {recommendation.action === 'try_now' && <Play className="w-3 h-3 mr-1" />}
                      {recommendation.action === 'start_journaling' && <Edit className="w-3 h-3 mr-1" />}
                      {recommendation.action === 'set_goal' && <Target className="w-3 h-3 mr-1" />}
                      {(recommendation.action === 'read' || recommendation.action === 'watch') && <BookOpen className="w-3 h-3 mr-1" />}
                      {getActionLabel(recommendation.action)}
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-gray-600"
                    >
                      Save for Later
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => navigate('/chat/lyfbot')}
            className="flex-1 bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
          >
            Back to LyfBot
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

export default LyfBotRecommendations;
