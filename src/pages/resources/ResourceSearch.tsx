
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Heart, 
  Download,
  FileText,
  Video,
  Headphones,
  BookOpen,
  X
} from 'lucide-react';

interface SearchResource {
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
  tags: string[];
}

interface SearchFilters {
  type: string;
  duration: string;
  difficulty: string;
  rating: number;
  category: string;
}

const ResourceSearch = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResource[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  
  const [filters, setFilters] = useState<SearchFilters>({
    type: 'all',
    duration: 'any',
    difficulty: 'all',
    rating: 0,
    category: 'all'
  });

  // Mock search results
  const mockResults: SearchResource[] = [
    {
      id: 'search-1',
      title: '5-Minute Anxiety Relief Techniques',
      description: 'Quick and effective techniques for immediate anxiety relief that you can use anywhere',
      type: 'article',
      category: 'anxiety',
      duration: 5,
      difficulty: 'beginner',
      rating: 4.9,
      reviewCount: 156,
      isBookmarked: false,
      isDownloaded: false,
      tags: ['anxiety', 'quick-relief', 'breathing', 'grounding']
    },
    {
      id: 'search-2',
      title: 'Guided Anxiety Coping Meditation',
      description: 'A calming 15-minute guided meditation specifically designed for managing anxiety',
      type: 'audio',
      category: 'mindfulness',
      duration: 15,
      difficulty: 'beginner',
      rating: 4.7,
      reviewCount: 89,
      isBookmarked: true,
      isDownloaded: false,
      tags: ['meditation', 'anxiety', 'mindfulness', 'guided']
    },
    {
      id: 'search-3',
      title: 'Anxiety Thought Record Worksheet',
      description: 'Interactive worksheet to help track and challenge anxious thoughts using CBT techniques',
      type: 'worksheet',
      category: 'anxiety',
      duration: 20,
      difficulty: 'intermediate',
      rating: 4.8,
      reviewCount: 234,
      isBookmarked: false,
      isDownloaded: true,
      tags: ['cbt', 'thought-record', 'anxiety', 'worksheet']
    },
    {
      id: 'search-4',
      title: 'Understanding Anxiety: Video Series',
      description: 'Comprehensive video series explaining the science behind anxiety and effective coping strategies',
      type: 'video',
      category: 'anxiety',
      duration: 25,
      difficulty: 'intermediate',
      rating: 4.9,
      reviewCount: 312,
      isBookmarked: false,
      isDownloaded: false,
      tags: ['anxiety', 'education', 'coping', 'science']
    },
    {
      id: 'search-5',
      title: 'Workplace Stress and Anxiety Management',
      description: 'Practical strategies for managing anxiety and stress in professional environments',
      type: 'course',
      category: 'anxiety',
      duration: 45,
      difficulty: 'advanced',
      rating: 4.6,
      reviewCount: 78,
      isBookmarked: true,
      isDownloaded: false,
      tags: ['workplace', 'anxiety', 'stress', 'professional']
    }
  ];

  useEffect(() => {
    if (searchQuery) {
      performSearch();
    }
  }, [searchQuery, filters]);

  const performSearch = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter mock results based on search query and filters
    let filtered = mockResults.filter(resource => 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Apply filters
    if (filters.type !== 'all') {
      filtered = filtered.filter(resource => resource.type === filters.type);
    }
    if (filters.difficulty !== 'all') {
      filtered = filtered.filter(resource => resource.difficulty === filters.difficulty);
    }
    if (filters.category !== 'all') {
      filtered = filtered.filter(resource => resource.category === filters.category);
    }
    if (filters.rating > 0) {
      filtered = filtered.filter(resource => resource.rating >= filters.rating);
    }
    if (filters.duration !== 'any') {
      const [min, max] = filters.duration.split('-').map(Number);
      filtered = filtered.filter(resource => {
        if (max) {
          return resource.duration >= min && resource.duration <= max;
        } else {
          return resource.duration >= min;
        }
      });
    }

    setSearchResults(filtered);
    setTotalResults(filtered.length);
    setIsLoading(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'audio': return <Headphones className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'exercise': return <BookOpen className="w-4 h-4" />;
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

  const clearFilters = () => {
    setFilters({
      type: 'all',
      duration: 'any',
      difficulty: 'all',
      rating: 0,
      category: 'all'
    });
  };

  const hasActiveFilters = filters.type !== 'all' || filters.duration !== 'any' || 
                          filters.difficulty !== 'all' || filters.rating > 0 || 
                          filters.category !== 'all';

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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Search Resources</h1>
            <p className="text-gray-600 mt-1">Find the perfect resources for your mental health journey</p>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for resources, topics, or techniques..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      performSearch();
                    }
                  }}
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={`${hasActiveFilters ? 'border-mindlyfe-blue text-mindlyfe-blue' : ''}`}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-2">
                    Active
                  </Badge>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters Panel */}
        {showFilters && (
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Filters</CardTitle>
                <div className="flex items-center gap-2">
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <X className="w-4 h-4 mr-2" />
                      Clear All
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="article">Articles</option>
                    <option value="video">Videos</option>
                    <option value="audio">Audio</option>
                    <option value="worksheet">Worksheets</option>
                    <option value="course">Courses</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select
                    value={filters.duration}
                    onChange={(e) => setFilters(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                  >
                    <option value="any">Any Duration</option>
                    <option value="0-5">Under 5 minutes</option>
                    <option value="5-15">5-15 minutes</option>
                    <option value="15-30">15-30 minutes</option>
                    <option value="30">30+ minutes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={filters.difficulty}
                    onChange={(e) => setFilters(prev => ({ ...prev, difficulty: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="anxiety">Anxiety</option>
                    <option value="depression">Depression</option>
                    <option value="stress">Stress</option>
                    <option value="mindfulness">Mindfulness</option>
                    <option value="relationships">Relationships</option>
                    <option value="sleep">Sleep</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                  <select
                    value={filters.rating}
                    onChange={(e) => setFilters(prev => ({ ...prev, rating: Number(e.target.value) }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                  >
                    <option value={0}>Any Rating</option>
                    <option value={4}>4+ Stars</option>
                    <option value={4.5}>4.5+ Stars</option>
                    <option value={4.8}>4.8+ Stars</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={performSearch}
                className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
              >
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Search Results */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                Search Results
                {searchQuery && (
                  <span className="text-base font-normal text-gray-600 ml-2">
                    for "{searchQuery}"
                  </span>
                )}
              </CardTitle>
              {!isLoading && (
                <Badge variant="secondary">
                  {totalResults} results
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-mindlyfe-blue mx-auto mb-4"></div>
                <p className="text-gray-600">Searching resources...</p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-8">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    clearFilters();
                  }}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {searchResults.map(resource => (
                  <div
                    key={resource.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/resources/view/${resource.id}`)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          {getTypeIcon(resource.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{resource.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center gap-1 capitalize">
                              {getTypeIcon(resource.type)}
                              {resource.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {resource.duration} min
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500" />
                              <span>{resource.rating} ({resource.reviewCount} reviews)</span>
                            </div>
                            <Badge className={getDifficultyColor(resource.difficulty)}>
                              {resource.difficulty}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {resource.tags.slice(0, 3).map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                            {resource.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{resource.tags.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/resources/view/${resource.id}`);
                          }}
                        >
                          {resource.type === 'video' ? 'Watch' : 
                           resource.type === 'audio' ? 'Listen' : 
                           resource.type === 'worksheet' ? 'Use' : 'Read'}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className={resource.isBookmarked ? 'text-red-600' : 'text-gray-400'}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className={resource.isDownloaded ? 'text-green-600' : 'text-gray-400'}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {searchResults.length > 0 && (
                  <div className="text-center pt-4">
                    <Button variant="outline">
                      Load More Results
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResourceSearch;
