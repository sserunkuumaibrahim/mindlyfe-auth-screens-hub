
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  ArrowLeft, 
  Heart, 
  Download, 
  Share, 
  Star, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Settings, 
  CheckCircle,
  Clock,
  User,
  Target,
  BookOpen,
  FileText,
  Video,
  Headphones
} from 'lucide-react';

const ResourceViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(525); // 8:45 in seconds
  const [duration] = useState(900); // 15:00 in seconds
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Mock resource data
  const resource = {
    id: id || 'resource-1',
    title: 'Managing Anxiety in the Workplace',
    description: 'Practical strategies for handling work-related anxiety and building confidence in professional settings',
    type: 'video' as const,
    category: 'anxiety',
    duration: 15,
    difficulty: 'beginner' as const,
    rating: 4.8,
    reviewCount: 234,
    author: {
      name: 'Dr. Sarah Johnson',
      credentials: 'PhD, Licensed Psychologist',
      avatar: '/lovable-uploads/therapist1.jpg'
    },
    tags: ['anxiety', 'workplace', 'coping', 'confidence'],
    keyTakeaways: [
      'Identify anxiety triggers in work environment',
      'Practice breathing techniques during stressful moments',
      'Set healthy boundaries with colleagues and supervisors',
      'Communicate your needs clearly and assertively',
      'Use grounding techniques during meetings or presentations'
    ],
    practiceExercise: {
      title: '4-7-8 Breathing Technique',
      description: 'Practice this calming breathing exercise for 2 minutes to reduce workplace anxiety',
      duration: 2
    },
    relatedResources: [
      {
        id: 'related-1',
        title: 'Workplace Stress Assessment Quiz',
        type: 'worksheet',
        duration: 5
      },
      {
        id: 'related-2',
        title: 'Setting Professional Boundaries Guide',
        type: 'article',
        duration: 8
      },
      {
        id: 'related-3',
        title: 'Anxiety Tracking Worksheet',
        type: 'worksheet',
        duration: 10
      }
    ]
  };

  const [personalNote, setPersonalNote] = useState('');

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleDownload = () => {
    setIsDownloaded(!isDownloaded);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'audio': return <Headphones className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'worksheet': return <BookOpen className="w-4 h-4" />;
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
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/resources')}
            className="shrink-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleBookmark}
              className={isBookmarked ? 'text-red-600' : 'text-gray-400'}
            >
              <Heart className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDownload}
              className={isDownloaded ? 'text-green-600' : 'text-gray-400'}
            >
              <Download className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Resource Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-mindlyfe-blue/10 rounded-lg flex items-center justify-center">
                {getTypeIcon(resource.type)}
              </div>
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h1>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{resource.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{resource.rating} ({resource.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration} min</span>
                  </div>
                  <Badge className={getDifficultyColor(resource.difficulty)}>
                    {resource.difficulty}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Player */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="w-5 h-5 text-mindlyfe-blue" />
              Video Player
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Video Container */}
            <div className="bg-black rounded-lg mb-4 aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8" />
                </div>
                <p className="text-lg font-medium">Video Content</p>
                <p className="text-sm opacity-75">Managing Anxiety in the Workplace</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <Progress value={progressPercentage} className="h-2 mb-2" />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <Button variant="ghost" size="icon">
                <SkipBack className="w-5 h-5" />
              </Button>
              <Button
                onClick={togglePlayPause}
                className="w-12 h-12 rounded-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Volume2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-mindlyfe-green" />
              Key Takeaways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-4">
              {resource.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-mindlyfe-green mt-0.5 shrink-0" />
                  <span className="text-gray-700">{takeaway}</span>
                </li>
              ))}
            </ul>
            
            <div className="border-t pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add Personal Note
              </label>
              <textarea
                value={personalNote}
                onChange={(e) => setPersonalNote(e.target.value)}
                placeholder="Write your thoughts or insights from this resource..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent resize-none"
                rows={3}
              />
              <Button size="sm" className="mt-2">
                Save Note
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Practice Exercise */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-600" />
              Practice Exercise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-medium text-gray-900 mb-2">{resource.practiceExercise.title}</h3>
              <p className="text-gray-600 mb-4">{resource.practiceExercise.description}</p>
              <div className="flex items-center gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Play className="w-4 h-4 mr-2" />
                  Start Exercise
                </Button>
                <Button variant="outline">
                  Skip for Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Resources */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-600" />
              Related Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {resource.relatedResources.map(related => (
                <div
                  key={related.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => navigate(`/resources/view/${related.id}`)}
                >
                  <div className="flex items-center gap-3">
                    {getTypeIcon(related.type)}
                    <div>
                      <h4 className="font-medium text-gray-900">{related.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="capitalize">{related.type}</span>
                        <span>•</span>
                        <span>{related.duration} min</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
            
            <Button
              variant="outline"
              onClick={() => navigate(`/resources/search?related=${resource.id}`)}
              className="w-full mt-4"
            >
              View All Related
            </Button>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={() => {
              // Mark as complete logic
              navigate('/resources/progress');
            }}
            className="flex-1 bg-mindlyfe-green hover:bg-mindlyfe-green/90"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark as Complete
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/resources')}
            className="flex-1"
          >
            Next Resource
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourceViewer;
