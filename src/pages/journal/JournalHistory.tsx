
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  ArrowLeft, 
  Search, 
  Calendar, 
  Lock, 
  Edit, 
  Share, 
  Filter,
  Eye
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

const JournalHistory = () => {
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedMood, setSelectedMood] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const [entries] = useState<JournalEntry[]>([
    {
      id: 'entry-1',
      title: 'Feeling grateful today',
      excerpt: 'Today was a good day. I woke up feeling energized and ready to tackle my goals. The morning meditation session helped me center myself and focus on what truly matters...',
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
      excerpt: 'Work was particularly stressful today. Had to deal with multiple deadlines and some difficult conversations with clients. Feeling overwhelmed but trying to stay positive...',
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
      title: 'Morning thoughts and meditation',
      excerpt: 'Started the day with a 20-minute meditation session. Feeling centered and focused on my intentions for the day. Grateful for this quiet time to connect with myself...',
      mood: 4,
      moodLabel: 'Good',
      wordCount: 189,
      createdAt: '2024-01-14T07:45:00Z',
      tags: ['meditation', 'goals'],
      isPrivate: true,
      hasMedia: false
    },
    {
      id: 'entry-4',
      title: 'Therapy session breakthrough',
      excerpt: 'Had an incredible breakthrough in therapy today. Finally able to connect some dots about my anxiety patterns and where they stem from. Feeling hopeful about the future...',
      mood: 5,
      moodLabel: 'Happy',
      wordCount: 312,
      createdAt: '2024-01-13T20:30:00Z',
      tags: ['therapy', 'breakthrough'],
      isPrivate: true,
      hasMedia: false
    },
    {
      id: 'entry-5',
      title: 'Weekend family time',
      excerpt: 'Spent a wonderful weekend with family. We went hiking and had a picnic in the park. These moments remind me of what truly matters in life...',
      mood: 5,
      moodLabel: 'Very Happy',
      wordCount: 198,
      createdAt: '2024-01-13T18:00:00Z',
      tags: ['family', 'gratitude', 'nature'],
      isPrivate: true,
      hasMedia: true
    },
    {
      id: 'entry-6',
      title: 'Dealing with anxiety',
      excerpt: 'Anxiety was particularly high today. Used the breathing techniques from therapy and they really helped. Still learning to manage these feelings but making progress...',
      mood: 2,
      moodLabel: 'Sad',
      wordCount: 145,
      createdAt: '2024-01-12T16:20:00Z',
      tags: ['anxiety', 'coping', 'therapy'],
      isPrivate: true,
      hasMedia: false
    }
  ]);

  const allTags = Array.from(new Set(entries.flatMap(entry => entry.tags)));

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
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const groupEntriesByDate = (entries: JournalEntry[]) => {
    const groups: { [key: string]: JournalEntry[] } = {};
    
    entries.forEach(entry => {
      const dateKey = formatDate(entry.createdAt);
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(entry);
    });
    
    return groups;
  };

  // Filter entries based on search and filters
  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesMood = selectedMood === 'all' || entry.mood.toString() === selectedMood;
    const matchesTag = selectedTag === 'all' || entry.tags.includes(selectedTag);
    
    return matchesSearch && matchesMood && matchesTag;
  });

  const groupedEntries = groupEntriesByDate(filteredEntries);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/journal')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Entry History</h1>
              <p className="text-gray-600">Browse and search your journal entries</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search entries, tags, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Filters:</span>
                </div>
                
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedMood} onValueChange={setSelectedMood}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Mood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Moods</SelectItem>
                    <SelectItem value="5">😄 Very Happy</SelectItem>
                    <SelectItem value="4">😊 Happy</SelectItem>
                    <SelectItem value="3">😐 Neutral</SelectItem>
                    <SelectItem value="2">😟 Sad</SelectItem>
                    <SelectItem value="1">😢 Very Sad</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tags</SelectItem>
                    {allTags.map(tag => (
                      <SelectItem key={tag} value={tag}>#{tag}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredEntries.length} of {entries.length} entries
        </div>

        {/* Entries List */}
        <div className="space-y-6">
          {Object.entries(groupedEntries).map(([date, dateEntries]) => (
            <div key={date}>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 sticky top-0 bg-gray-50 py-2">
                {date}
              </h2>
              
              <div className="space-y-3">
                {dateEntries.map(entry => (
                  <Card key={entry.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-gray-600">
                              {formatTime(entry.createdAt)}
                            </span>
                            {entry.hasMedia && (
                              <Badge variant="outline" className="text-xs">
                                📷 Media
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">{entry.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{entry.excerpt}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
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
                        
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
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
                          
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/journal/entry/${entry.id}`);
                              }}
                              className="h-8 w-8 p-0"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/journal/edit/${entry.id}`);
                              }}
                              className="h-8 w-8 p-0"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Handle share
                              }}
                              className="h-8 w-8 p-0"
                            >
                              <Share className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredEntries.length > 0 && (
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10">
              Load More Entries
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No entries found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery || selectedMood !== 'all' || selectedTag !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Start writing your first journal entry'}
              </p>
              <Button
                onClick={() => navigate('/journal/write')}
                className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
              >
                Create New Entry
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default JournalHistory;
