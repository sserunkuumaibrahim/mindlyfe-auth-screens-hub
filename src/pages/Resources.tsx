
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  Search, 
  BookOpen, 
  Video, 
  Headphones, 
  FileText, 
  Target,
  Heart,
  Download,
  Star,
  Clock,
  Play,
  TrendingUp,
  Brain,
  Smile,
  Shield,
  Users,
  Zap,
  Moon
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'audio' | 'exercise' | 'worksheet' | 'course';
  category: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  reviewCount: number;
  isBookmarked: boolean;
  isDownloaded: boolean;
  progress?: number;
  thumbnail: string;
}

interface ResourceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  resourceCount: number;
}

const Resources = () => {
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ResourceCategory[] = [
    {
      id: 'anxiety',
      name: 'Anxiety',
      description: 'Resources for managing anxiety and panic',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-800',
      resourceCount: 156
    },
    {
      id: 'depression',
      name: 'Depression',
      description: 'Understanding and coping with depression',
      icon: <Smile className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-800',
      resourceCount: 89
    },
    {
      id: 'stress',
      name: 'Stress',
      description: 'Stress management techniques',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-800',
      resourceCount: 234
    },
    {
      id: 'mindfulness',
      name: 'Mindfulness',
      description: 'Meditation and mindfulness practices',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-green-100 text-green-800',
      resourceCount: 78
    },
    {
      id: 'coping',
      name: 'Coping Skills',
      description: 'Building resilience and coping strategies',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-indigo-100 text-indigo-800',
      resourceCount: 145
    },
    {
      id: 'relationships',
      name: 'Relationships',
      description: 'Improving social connections',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-pink-100 text-pink-800',
      resourceCount: 67
    }
  ];

  const featuredResource: Resource = {
    id: 'featured-1',
    title: 'Managing Anxiety in the Workplace',
    description: 'Practical strategies for handling work-related anxiety and stress',
    type: 'video',
    category: 'anxiety',
    duration: 15,
    difficulty: 'beginner',
    rating: 4.8,
    reviewCount: 234,
    isBookmarked: false,
    isDownloaded: false,
    thumbnail: '/lovable-uploads/featured-resource.jpg'
  };

  const recommendations: Resource[] = [
    {
      id: 'rec-1',
      title: 'Cognitive Behavioral Techniques for Anxiety',
      description: 'Evidence-based CBT strategies for managing anxious thoughts',
      type: 'article',
      category: 'anxiety',
      duration: 8,
      difficulty: 'beginner',
      rating: 4.9,
      reviewCount: 156,
      isBookmarked: true,
      isDownloaded: false,
      thumbnail: '/lovable-uploads/cbt-article.jpg'
    },
    {
      id: 'rec-2',
      title: 'Sleep Meditation for Anxiety Relief',
      description: 'Guided meditation to calm anxiety and improve sleep quality',
      type: 'audio',
      category: 'mindfulness',
      duration: 20,
      difficulty: 'beginner',
      rating: 4.7,
      reviewCount: 89,
      isBookmarked: false,
      isDownloaded: true,
      thumbnail: '/lovable-uploads/sleep-meditation.jpg'
    }
  ];

  const continueResource = {
    title: 'Anxiety Management Course',
    progress: 60,
    nextModule: 'Breathing Techniques'
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'audio': return <Headphones className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'exercise': return <Target className="w-4 h-4" />;
      case 'worksheet': return <BookOpen className="w-4 h-4" />;
      case 'course': return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Resources</h1>
            <p className="text-gray-600 mt-1">Discover content to support your mental health journey</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/resources/search')}
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    navigate(`/resources/search?q=${encodeURIComponent(searchQuery)}`);
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Featured Resource */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-600" />
              Featured This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-mindlyfe-blue/10 to-mindlyfe-green/10 p-4 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-mindlyfe-blue/20 rounded-lg flex items-center justify-center">
                  {getTypeIcon(featuredResource.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{featuredResource.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{featuredResource.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      {getTypeIcon(featuredResource.type)}
                      {featuredResource.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredResource.duration} min
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{featuredResource.rating}</span>
                      <span>({featuredResource.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate(`/resources/view/${featuredResource.id}`)}
                    className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Browse Categories */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-mindlyfe-blue" />
              Browse Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map(category => (
                <div
                  key={category.id}
                  onClick={() => navigate(`/resources/category/${category.id}`)}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{category.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {category.resourceCount} resources
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Resources */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-mindlyfe-green" />
              Recommended for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map(resource => (
                <div
                  key={resource.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/resources/view/${resource.id}`)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {getTypeIcon(resource.type)}
                        <h3 className="font-medium text-gray-900">{resource.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="capitalize">{resource.type}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {resource.duration} min
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>{resource.rating} ({resource.reviewCount})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={getDifficultyColor(resource.difficulty)}>
                      {resource.difficulty}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        {resource.type === 'video' ? 'Watch' : resource.type === 'audio' ? 'Listen' : 'Read'}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className={resource.isBookmarked ? 'text-red-600' : 'text-gray-400'}
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className={resource.isDownloaded ? 'text-green-600' : 'text-gray-400'}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Continue Learning */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              Continue Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{continueResource.title}</h3>
                <Badge className="bg-purple-100 text-purple-800">In Progress</Badge>
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                  <span>Progress: {continueResource.progress}% complete</span>
                  <span>{continueResource.progress}/100</span>
                </div>
                <Progress value={continueResource.progress} className="h-2" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Next: {continueResource.nextModule}
              </p>
              <Button 
                onClick={() => navigate('/resources/paths')}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Continue Course
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access Buttons */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button
            variant="outline"
            onClick={() => navigate('/resources/paths')}
            className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
          >
            Learning Paths
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/resources/saved')}
            className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10"
          >
            Saved Items
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/resources/progress')}
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            My Progress
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/resources/search')}
            className="border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            Search All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
