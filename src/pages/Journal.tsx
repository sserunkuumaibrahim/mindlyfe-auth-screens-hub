
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  Plus, 
  FileText, 
  TrendingUp, 
  Calendar, 
  Settings,
  Mic,
  Camera,
  MapPin,
  Heart,
  Lock,
  BarChart3,
  History,
  Lightbulb
} from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  excerpt: string;
  mood: number;
  moodLabel: string;
  wordCount: number;
  createdAt: string;
  tags: string[];
  isPrivate: boolean;
  hasMedia: boolean;
}

interface JournalAnalytics {
  totalEntries: number;
  currentStreak: number;
  longestStreak: number;
  averageMood: number;
  entriesThisMonth: number;
}

const Journal = () => {
  const navigate = useNavigate();
  
  const [analytics] = useState<JournalAnalytics>({
    totalEntries: 156,
    currentStreak: 7,
    longestStreak: 23,
    averageMood: 4.2,
    entriesThisMonth: 23
  });

  const [recentEntries] = useState<JournalEntry[]>([
    {
      id: 'entry-1',
      title: 'Feeling grateful today',
      excerpt: 'Today was a good day. I woke up feeling energized and ready to tackle my goals...',
      mood: 5,
      moodLabel: 'Happy',
      wordCount: 156,
      createdAt: '2024-01-15T14:30:00Z',
      tags: ['gratitude', 'work'],
      isPrivate: true,
      hasMedia: false
    },
    {
      id: 'entry-2',
      title: 'Challenging day at work',
      excerpt: 'Work was particularly stressful today. Had to deal with multiple deadlines...',
      mood: 3,
      moodLabel: 'Neutral',
      wordCount: 234,
      createdAt: '2024-01-14T21:15:00Z',
      tags: ['anxiety', 'coping'],
      isPrivate: true,
      hasMedia: false
    },
    {
      id: 'entry-3',
      title: 'Morning thoughts',
      excerpt: 'Started the day with meditation. Feeling centered and focused...',
      mood: 4,
      moodLabel: 'Good',
      wordCount: 189,
      createdAt: '2024-01-14T07:45:00Z',
      tags: ['meditation', 'goals'],
      isPrivate: true,
      hasMedia: false
    }
  ]);

  const todaysPrompt = "What are three things you are grateful for today?";

  const getMoodEmoji = (mood: number) => {
    const emojis = ['😢', '😟', '😐', '😊', '😄'];
    return emojis[mood - 1] || '😐';
  };

  const getMoodColor = (mood: number) => {
    if (mood >= 4) return 'text-green-600';
    if (mood === 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    return date.toLocaleDateString();
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Journal</h1>
            <p className="text-gray-600 mt-1">Your personal space for reflection and growth</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/journal/privacy')}
            className="text-gray-600 hover:text-gray-900"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Analytics Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-mindlyfe-blue" />
              Your Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-mindlyfe-blue">🔥{analytics.currentStreak}</div>
                <div className="text-sm text-gray-600">Day streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mindlyfe-green">📝{analytics.entriesThisMonth}</div>
                <div className="text-sm text-gray-600">This month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">😊{analytics.averageMood.toFixed(1)}</div>
                <div className="text-sm text-gray-600">Avg mood</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">📚{analytics.totalEntries}</div>
                <div className="text-sm text-gray-600">Total entries</div>
              </div>
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => navigate('/journal/analytics')}
                className="w-full border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                View Full Analytics
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-mindlyfe-green" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button
                onClick={() => navigate('/journal/write')}
                className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 h-auto py-3 flex-col gap-2"
              >
                <FileText className="w-5 h-5" />
                <span className="text-sm">New Entry</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/journal/write?mode=voice')}
                className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10 h-auto py-3 flex-col gap-2"
              >
                <Mic className="w-5 h-5" />
                <span className="text-sm">Voice Note</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/journal/write?mode=photo')}
                className="border-purple-600 text-purple-600 hover:bg-purple-50 h-auto py-3 flex-col gap-2"
              >
                <Camera className="w-5 h-5" />
                <span className="text-sm">Photo Journal</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/journal/write?mode=mood')}
                className="border-orange-600 text-orange-600 hover:bg-orange-50 h-auto py-3 flex-col gap-2"
              >
                <Heart className="w-5 h-5" />
                <span className="text-sm">Mood Check</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Today's Prompt */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Today's Prompt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-800 mb-4 italic">"{todaysPrompt}"</p>
              <div className="flex gap-2">
                <Button
                  onClick={() => navigate('/journal/write?prompt=' + encodeURIComponent(todaysPrompt))}
                  className="bg-yellow-600 hover:bg-yellow-700"
                >
                  Start Writing
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/journal/prompts')}
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
                >
                  More Prompts
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Entries */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-mindlyfe-blue" />
                Recent Entries
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/journal/history')}
                className="text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
              >
                <History className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEntries.map(entry => (
                <div
                  key={entry.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/journal/entry/${entry.id}`)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {formatDate(entry.createdAt)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatTime(entry.createdAt)}
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">{entry.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{entry.excerpt}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-lg">{getMoodEmoji(entry.mood)}</span>
                        <span className={`text-sm font-medium ${getMoodColor(entry.mood)}`}>
                          {entry.moodLabel}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {entry.wordCount} words
                      </span>
                      {entry.isPrivate && (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {entry.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {entry.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{entry.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => navigate('/journal/history')}
                className="w-full border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
              >
                <History className="w-4 h-4 mr-2" />
                View All Entries
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Journal;
