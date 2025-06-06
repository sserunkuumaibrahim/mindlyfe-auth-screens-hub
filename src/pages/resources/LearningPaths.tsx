
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  ArrowLeft, 
  BookOpen, 
  Target, 
  Clock, 
  Star, 
  Trophy,
  Plus,
  Play,
  Brain,
  Shield,
  Moon,
  Heart,
  Users,
  Zap
} from 'lucide-react';

interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  totalModules: number;
  completedModules?: number;
  estimatedWeeks: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  completions: number;
  progress?: number;
  nextModule?: string;
  isActive?: boolean;
  icon: React.ReactNode;
  color: string;
}

const LearningPaths = () => {
  const navigate = useNavigate();
  
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'recommended' | 'completed'>('all');

  const activePaths: LearningPath[] = [
    {
      id: 'path-1',
      title: 'Anxiety Management',
      description: 'Comprehensive strategies for understanding and managing anxiety',
      category: 'anxiety',
      totalModules: 10,
      completedModules: 6,
      estimatedWeeks: 8,
      difficulty: 'beginner',
      rating: 4.8,
      completions: 1245,
      progress: 60,
      nextModule: 'Breathing Techniques',
      isActive: true,
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'path-2',
      title: 'Mindfulness Basics',
      description: 'Learn fundamental mindfulness and meditation practices',
      category: 'mindfulness',
      totalModules: 8,
      completedModules: 3,
      estimatedWeeks: 6,
      difficulty: 'beginner',
      rating: 4.7,
      completions: 892,
      progress: 30,
      nextModule: 'Body Scan Meditation',
      isActive: true,
      icon: <Target className="w-6 h-6" />,
      color: 'bg-green-100 text-green-800'
    }
  ];

  const recommendedPaths: LearningPath[] = [
    {
      id: 'path-3',
      title: 'Building Resilience',
      description: 'Learn to bounce back from life\'s challenges and build mental strength',
      category: 'coping',
      totalModules: 12,
      estimatedWeeks: 6,
      difficulty: 'beginner',
      rating: 4.8,
      completions: 345,
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      id: 'path-4',
      title: 'Better Sleep Habits',
      description: 'Improve sleep quality and overcome insomnia with proven techniques',
      category: 'sleep',
      totalModules: 8,
      estimatedWeeks: 4,
      difficulty: 'beginner',
      rating: 4.6,
      completions: 278,
      icon: <Moon className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'path-5',
      title: 'Emotional Regulation',
      description: 'Master techniques for managing intense emotions and mood swings',
      category: 'emotional',
      totalModules: 10,
      estimatedWeeks: 7,
      difficulty: 'intermediate',
      rating: 4.9,
      completions: 567,
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-pink-100 text-pink-800'
    },
    {
      id: 'path-6',
      title: 'Social Confidence',
      description: 'Build confidence in social situations and improve relationships',
      category: 'social',
      totalModules: 9,
      estimatedWeeks: 5,
      difficulty: 'intermediate',
      rating: 4.5,
      completions: 234,
      icon: <Users className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  const categories = [
    { id: 'anxiety', label: 'Anxiety', count: 3 },
    { id: 'depression', label: 'Depression', count: 2 },
    { id: 'stress', label: 'Stress', count: 4 },
    { id: 'relationships', label: 'Relationships', count: 3 },
    { id: 'self-care', label: 'Self-Care', count: 5 },
    { id: 'trauma', label: 'Trauma', count: 2 },
    { id: 'addiction', label: 'Addiction', count: 2 },
    { id: 'grief', label: 'Grief', count: 1 }
  ];

  const completedPaths = 2;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatEstimatedCompletion = (weeks: number, progress?: number) => {
    if (!progress) return `${weeks} weeks`;
    const remainingWeeks = Math.ceil(weeks * (1 - progress / 100));
    return `${remainingWeeks} weeks`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/resources')}
            className="shrink-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Learning Paths</h1>
            <p className="text-gray-600 mt-1">Structured journeys for mental health growth</p>
          </div>
        </div>

        {/* Active Learning Paths */}
        {activePaths.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-mindlyfe-blue" />
                Your Active Paths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activePaths.map(path => (
                <div key={path.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${path.color}`}>
                      {path.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{path.title}</h3>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{path.description}</p>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>{path.completedModules} of {path.totalModules} modules complete</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <p>Next: {path.nextModule}</p>
                          <p>Est. completion: {formatEstimatedCompletion(path.estimatedWeeks, path.progress)}</p>
                        </div>
                        <Button 
                          onClick={() => navigate(`/resources/path/${path.id}`)}
                          className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                        >
                          Continue Learning
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Recommended Paths */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-600" />
              Recommended Paths
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedPaths.map(path => (
              <div key={path.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${path.color}`}>
                    {path.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{path.title}</h3>
                      <Badge className={getDifficultyColor(path.difficulty)}>
                        {path.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{path.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {path.totalModules} modules
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {path.estimatedWeeks} weeks
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{path.rating} ({path.completions} completions)</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <p>"{path.description}"</p>
                      </div>
                      <Button 
                        onClick={() => navigate(`/resources/path/${path.id}`)}
                        className="bg-mindlyfe-green hover:bg-mindlyfe-green/90"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Path
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Browse Categories */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-mindlyfe-blue" />
              Browse All Paths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant="outline"
                  onClick={() => navigate(`/resources/paths/category/${category.id}`)}
                  className="justify-between h-auto py-3"
                >
                  <span className="capitalize">{category.label}</span>
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Completed Paths */}
        {completedPaths > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                Completed Paths ({completedPaths})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <Trophy className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Great job on your progress!</h3>
                <p className="text-gray-600 mb-4">You've completed {completedPaths} learning paths</p>
                <Button 
                  onClick={() => navigate('/resources/progress')}
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
                >
                  View Certificates
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LearningPaths;
