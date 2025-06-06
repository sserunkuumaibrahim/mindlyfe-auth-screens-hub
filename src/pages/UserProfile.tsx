
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Heart, MessageCircle, Eye, MoreVertical, UserPlus, MessageSquare, Flag } from 'lucide-react';

interface UserProfile {
  anonymousId: string;
  pseudonym: string;
  avatarColor: string;
  isVerifiedTherapist: boolean;
  bio: string;
  location: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  isFollowing: boolean;
  isMutualFollow: boolean;
  canMessage: boolean;
}

interface UserPost {
  id: string;
  title: string;
  viewCount: number;
  reactions: { type: string; count: number }[];
  commentCount: number;
  createdAt: string;
  timeAgo: string;
}

const UserProfile = () => {
  const { anonymousId } = useParams();
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock user profile data
  const userProfile: UserProfile = {
    anonymousId: 'anon_456',
    pseudonym: 'Mindful Dreamer',
    avatarColor: '#21A9E1',
    isVerifiedTherapist: true,
    bio: '🧠 Mental health advocate\n📍 Sharing evidence-based strategies for wellness',
    location: 'Community Member since Jan 2024',
    stats: {
      posts: 45,
      followers: 234,
      following: 12,
    },
    isFollowing: false,
    isMutualFollow: false,
    canMessage: false,
  };

  // Mock user posts
  const userPosts: UserPost[] = [
    {
      id: '1',
      title: '5 Breathing Techniques for Anxiety',
      viewCount: 345,
      reactions: [{ type: 'heart', count: 67 }],
      commentCount: 23,
      createdAt: '2024-01-13T10:00:00Z',
      timeAgo: '2 days ago',
    },
    {
      id: '2',
      title: 'Understanding Anxiety Triggers',
      viewCount: 567,
      reactions: [{ type: 'heart', count: 89 }],
      commentCount: 34,
      createdAt: '2024-01-08T10:00:00Z',
      timeAgo: '1 week ago',
    },
    {
      id: '3',
      title: 'Mindfulness in Daily Life',
      viewCount: 234,
      reactions: [{ type: 'heart', count: 45 }],
      commentCount: 18,
      createdAt: '2024-01-01T10:00:00Z',
      timeAgo: '2 weeks ago',
    },
  ];

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessage = () => {
    if (userProfile.canMessage) {
      navigate(`/community/chat/${anonymousId}`);
    }
  };

  const handlePostClick = (postId: string) => {
    navigate(`/community/post/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/community')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">@{userProfile.pseudonym.toLowerCase().replace(' ', '_')}</h1>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="mb-6">
          <CardContent className="p-6 text-center">
            {/* Avatar */}
            <div 
              className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl"
              style={{ backgroundColor: userProfile.avatarColor }}
            >
              {userProfile.pseudonym.split(' ').map(word => word[0]).join('')}
            </div>

            {/* Name and Verification */}
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{userProfile.pseudonym}</h2>
              {userProfile.isVerifiedTherapist && (
                <Badge className="mt-2 bg-mindlyfe-green text-white">
                  🟢 Verified Therapist
                </Badge>
              )}
            </div>

            {/* Bio */}
            <p className="text-gray-600 mb-4 whitespace-pre-line">{userProfile.bio}</p>
            <p className="text-sm text-gray-500 mb-4">{userProfile.location}</p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userProfile.stats.posts}</div>
                <div className="text-sm text-gray-500">posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userProfile.stats.followers}</div>
                <div className="text-sm text-gray-500">followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userProfile.stats.following}</div>
                <div className="text-sm text-gray-500">following</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center">
              <Button 
                onClick={handleFollow}
                className={isFollowing ? "bg-gray-600 hover:bg-gray-700" : "bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
              <Button 
                variant="outline"
                onClick={handleMessage}
                disabled={!userProfile.canMessage}
                className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" className="border-gray-300">
                <Flag className="w-4 h-4 mr-2" />
                Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Follow to Chat Notice */}
        {!userProfile.canMessage && (
          <Card className="mb-6 bg-blue-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <p className="text-blue-800 text-sm">
                Follow to enable chat. Mutual follows can message each other privately.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Recent Posts */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts ({userProfile.stats.posts})</h3>
          
          <div className="space-y-4">
            {userPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4" onClick={() => handlePostClick(post.id)}>
                  <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
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
                    <span>{post.timeAgo}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-6">
            <Button variant="outline" className="text-mindlyfe-blue border-mindlyfe-blue hover:bg-mindlyfe-blue/10">
              Load More Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
