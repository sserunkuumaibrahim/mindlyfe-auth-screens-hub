
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus, Heart, MessageCircle, Eye, MoreVertical } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Post {
  id: string;
  author: {
    anonymousId: string;
    pseudonym: string;
    avatarColor: string;
    isVerifiedTherapist: boolean;
  };
  title: string;
  content: string;
  visibility: 'public' | 'anonymous' | 'therapists_only' | 'private';
  tags: string[];
  viewCount: number;
  reactions: { type: string; count: number }[];
  commentCount: number;
  createdAt: string;
  timeAgo: string;
}

const Community = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Anxiety', 'Depression', 'PTSD', 'Support', 'Therapists'];

  // Mock data for community posts
  const posts: Post[] = [
    {
      id: '1',
      author: {
        anonymousId: 'anon_456',
        pseudonym: 'Mindful Dreamer',
        avatarColor: '#21A9E1',
        isVerifiedTherapist: true,
      },
      title: 'Managing Anxiety in Daily Life: 5 Practical Tips',
      content: 'As a therapist, I often see clients struggling with daily anxiety. Here are some evidence-based strategies that can help manage anxiety symptoms in everyday situations...',
      visibility: 'therapists_only',
      tags: ['anxiety', 'coping', 'therapy'],
      viewCount: 234,
      reactions: [{ type: 'heart', count: 45 }],
      commentCount: 12,
      createdAt: '2024-01-15T10:00:00Z',
      timeAgo: '2 hours ago',
    },
    {
      id: '2',
      author: {
        anonymousId: 'anon_789',
        pseudonym: 'Peaceful Warrior',
        avatarColor: '#8EBC40',
        isVerifiedTherapist: false,
      },
      title: 'My Journey with Depression',
      content: 'I wanted to share my story because I know how isolating depression can feel. Three months ago, I was at my lowest point, but with the right support and coping strategies...',
      visibility: 'anonymous',
      tags: ['depression', 'recovery', 'hope'],
      viewCount: 567,
      reactions: [{ type: 'heart', count: 89 }],
      commentCount: 23,
      createdAt: '2024-01-14T10:00:00Z',
      timeAgo: '1 day ago',
    },
    {
      id: '3',
      author: {
        anonymousId: 'anon_123',
        pseudonym: 'Brave Soul',
        avatarColor: '#FF6B9D',
        isVerifiedTherapist: false,
      },
      title: 'Breathing Exercise That Changed My Life',
      content: 'I discovered this simple 4-7-8 breathing technique and it\'s been a game changer for my anxiety. Here\'s how to do it and why it works so well...',
      visibility: 'public',
      tags: ['breathing', 'anxiety', 'tips'],
      viewCount: 345,
      reactions: [{ type: 'heart', count: 67 }],
      commentCount: 18,
      createdAt: '2024-01-12T10:00:00Z',
      timeAgo: '3 days ago',
    },
  ];

  const getVisibilityBadge = (visibility: string) => {
    const badges = {
      public: { label: 'Public', className: 'bg-green-100 text-green-800' },
      anonymous: { label: 'Anonymous', className: 'bg-blue-100 text-blue-800' },
      therapists_only: { label: 'Therapist Only', className: 'bg-purple-100 text-purple-800' },
      private: { label: 'Private', className: 'bg-gray-100 text-gray-800' },
    };
    const badge = badges[visibility as keyof typeof badges];
    return <Badge className={`text-xs ${badge.className}`}>{badge.label}</Badge>;
  };

  const handleCreatePost = () => {
    navigate('/community/create');
  };

  const handlePostClick = (postId: string) => {
    navigate(`/community/post/${postId}`);
  };

  const handleProfileClick = (anonymousId: string) => {
    navigate(`/community/profile/${anonymousId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Community</h1>
          <Button onClick={handleCreatePost} className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search community posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-mindlyfe-blue hover:bg-mindlyfe-blue/90" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                      style={{ backgroundColor: post.author.avatarColor }}
                    >
                      {post.author.pseudonym.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleProfileClick(post.author.anonymousId)}
                          className="font-semibold text-gray-900 hover:text-mindlyfe-blue"
                        >
                          {post.author.pseudonym}
                        </button>
                        {post.author.isVerifiedTherapist && (
                          <Badge className="bg-mindlyfe-green text-white text-xs">
                            🟢 Verified Therapist
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{post.timeAgo}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>

                {/* Post Content */}
                <div onClick={() => handlePostClick(post.id)}>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{post.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-mindlyfe-blue border-mindlyfe-blue">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.reactions[0]?.count || 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.commentCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.viewCount}</span>
                    </div>
                  </div>
                  {getVisibilityBadge(post.visibility)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="text-mindlyfe-blue border-mindlyfe-blue hover:bg-mindlyfe-blue/10">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Community;
