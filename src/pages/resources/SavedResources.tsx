
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  ArrowLeft, 
  Heart, 
  Download, 
  Search, 
  FolderPlus,
  Folder,
  Clock,
  Star,
  Trash2,
  FileText,
  Video,
  Headphones,
  BookOpen,
  StickyNote
} from 'lucide-react';

interface SavedResource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'audio' | 'worksheet';
  duration: number;
  rating?: number;
  savedDate: string;
  isDownloaded?: boolean;
  collectionId?: string;
  fileSize?: string;
}

interface Collection {
  id: string;
  name: string;
  itemCount: number;
  createdDate: string;
  description?: string;
}

const SavedResources = () => {
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'downloads' | 'collections' | 'notes'>('bookmarks');
  const [searchQuery, setSearchQuery] = useState('');

  const collections: Collection[] = [
    {
      id: 'col-1',
      name: 'Anxiety Resources',
      itemCount: 12,
      createdDate: '2024-01-05',
      description: 'Comprehensive collection of anxiety management resources'
    },
    {
      id: 'col-2',
      name: 'Meditation Library',
      itemCount: 8,
      createdDate: '2024-12-20',
      description: 'Guided meditations and mindfulness exercises'
    },
    {
      id: 'col-3',
      name: 'Sleep Resources',
      itemCount: 5,
      createdDate: '2024-01-10',
      description: 'Resources for better sleep and insomnia management'
    }
  ];

  const bookmarkedResources: SavedResource[] = [
    {
      id: 'bookmark-1',
      title: 'Cognitive Behavioral Techniques for Anxiety',
      type: 'article',
      duration: 8,
      rating: 4.9,
      savedDate: '2024-01-13',
      collectionId: 'col-1'
    },
    {
      id: 'bookmark-2',
      title: 'Sleep Meditation for Anxiety Relief',
      type: 'audio',
      duration: 20,
      rating: 4.7,
      savedDate: '2024-01-07',
      collectionId: 'col-2'
    },
    {
      id: 'bookmark-3',
      title: 'Workplace Stress Assessment',
      type: 'worksheet',
      duration: 10,
      savedDate: '2024-01-05'
    },
    {
      id: 'bookmark-4',
      title: 'Breathing Techniques Demo',
      type: 'video',
      duration: 12,
      rating: 4.8,
      savedDate: '2024-01-02',
      collectionId: 'col-1'
    }
  ];

  const downloadedResources: SavedResource[] = [
    {
      id: 'download-1',
      title: 'Managing Anxiety in the Workplace',
      type: 'video',
      duration: 15,
      rating: 4.8,
      savedDate: '2024-01-14',
      isDownloaded: true,
      fileSize: '45 MB'
    },
    {
      id: 'download-2',
      title: 'Mindfulness Guide PDF',
      type: 'article',
      duration: 12,
      rating: 4.6,
      savedDate: '2024-01-10',
      isDownloaded: true,
      fileSize: '2.3 MB'
    },
    {
      id: 'download-3',
      title: 'Relaxation Audio Pack',
      type: 'audio',
      duration: 35,
      rating: 4.9,
      savedDate: '2024-01-08',
      isDownloaded: true,
      fileSize: '28 MB'
    }
  ];

  const totalStorageUsed = 234; // MB
  const storageLimit = 1024; // MB (1 GB)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'audio': return <Headphones className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'worksheet': return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays === 2) return '2 days ago';
    if (diffDays <= 7) return `${diffDays} days ago`;
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const storagePercentage = (totalStorageUsed / storageLimit) * 100;

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
              onClick={() => navigate('/resources')}
              className="shrink-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Saved Resources</h1>
              <p className="text-gray-600 mt-1">Manage your bookmarks, downloads, and collections</p>
            </div>
          </div>
          
          <Button variant="ghost" size="icon">
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
                placeholder="Search saved resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
              />
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {[
                { id: 'bookmarks', label: 'Bookmarks', icon: Heart, count: bookmarkedResources.length },
                { id: 'downloads', label: 'Downloads', icon: Download, count: downloadedResources.length },
                { id: 'collections', label: 'Collections', icon: Folder, count: collections.length },
                { id: 'notes', label: 'Notes', icon: StickyNote, count: 3 }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-mindlyfe-blue text-mindlyfe-blue'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  <Badge variant="secondary" className="ml-1">
                    {tab.count}
                  </Badge>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'collections' && (
          <div className="space-y-6">
            {/* Create Collection Button */}
            <Card>
              <CardContent className="p-4">
                <Button className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
                  <FolderPlus className="w-4 h-4 mr-2" />
                  Create New Collection
                </Button>
              </CardContent>
            </Card>

            {/* Collections List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Folder className="w-5 h-5 text-mindlyfe-blue" />
                  My Collections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {collections.map(collection => (
                  <div
                    key={collection.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/resources/collection/${collection.id}`)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-mindlyfe-blue/10 rounded-lg flex items-center justify-center">
                          <Folder className="w-5 h-5 text-mindlyfe-blue" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{collection.name}</h3>
                          <p className="text-sm text-gray-600">{collection.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <span>{collection.itemCount} items</span>
                            <span>Created {formatDate(collection.createdDate)}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Collection
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'bookmarks' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                Recent Bookmarks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bookmarkedResources.map(resource => (
                <div
                  key={resource.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        {getTypeIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">{resource.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="capitalize">{resource.type}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {resource.duration} min
                          </span>
                          {resource.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500" />
                              <span>{resource.rating}</span>
                            </div>
                          )}
                          <span>Bookmarked {formatDate(resource.savedDate)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => navigate(`/resources/view/${resource.id}`)}
                      >
                        {resource.type === 'video' ? 'Watch' : resource.type === 'audio' ? 'Listen' : 'Read'}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Folder className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {activeTab === 'downloads' && (
          <div className="space-y-6">
            {/* Storage Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-green-600" />
                  Storage Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Used: {totalStorageUsed} MB</span>
                    <span>Available: {storageLimit - totalStorageUsed} MB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${storagePercentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {storagePercentage.toFixed(1)}% of {storageLimit / 1024} GB used
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Manage Storage
                </Button>
              </CardContent>
            </Card>

            {/* Downloaded Content */}
            <Card>
              <CardHeader>
                <CardTitle>Downloaded Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {downloadedResources.map(resource => (
                  <div
                    key={resource.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          {getTypeIcon(resource.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{resource.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="capitalize">{resource.type}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {resource.duration} min
                            </span>
                            <span>{resource.fileSize}</span>
                            <span>Downloaded {formatDate(resource.savedDate)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm"
                          onClick={() => navigate(`/resources/view/${resource.id}`)}
                        >
                          {resource.type === 'video' ? 'Watch' : resource.type === 'audio' ? 'Listen' : 'Read'}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Folder className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'notes' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <StickyNote className="w-5 h-5 text-yellow-600" />
                Personal Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <StickyNote className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">No notes yet</h3>
                <p className="text-gray-600 mb-4">
                  Start adding personal notes while viewing resources to collect your insights
                </p>
                <Button 
                  onClick={() => navigate('/resources')}
                  variant="outline"
                >
                  Browse Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SavedResources;
