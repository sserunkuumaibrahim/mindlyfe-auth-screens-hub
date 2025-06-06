
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Heart, MessageCircle, Eye, MoreVertical, Send, Smile, Paperclip } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  author: {
    anonymousId: string;
    pseudonym: string;
    avatarColor: string;
    isVerifiedTherapist: boolean;
  };
  content: string;
  reactions: { type: string; count: number }[];
  timeAgo: string;
}

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [newComment, setNewComment] = useState('');
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  // Mock post data
  const post = {
    id: '1',
    author: {
      anonymousId: 'anon_456',
      pseudonym: 'Mindful Dreamer',
      avatarColor: '#21A9E1',
      isVerifiedTherapist: true,
    },
    title: 'Managing Anxiety in Daily Life: 5 Practical Tips',
    content: `As a therapist, I often see clients struggling with daily anxiety. Here are some evidence-based strategies that can help manage anxiety symptoms in everyday situations:

1. Deep breathing exercises - The 4-7-8 technique can be particularly effective
2. Progressive muscle relaxation - Start from your toes and work your way up
3. Grounding techniques - Use the 5-4-3-2-1 method to stay present
4. Mindfulness meditation - Even 5 minutes can make a difference
5. Regular exercise - Physical activity is a natural anxiety reducer

Remember, these techniques work best when practiced regularly, not just during anxious moments. If your anxiety is significantly impacting your daily life, please consider reaching out to a mental health professional.`,
    visibility: 'therapists_only',
    tags: ['anxiety', 'coping', 'therapy'],
    viewCount: 234,
    reactions: [
      { type: 'helpful', count: 45 },
      { type: 'like', count: 23 },
      { type: 'support', count: 12 },
      { type: 'insight', count: 8 },
    ],
    commentCount: 12,
    timeAgo: '2 hours ago',
  };

  const comments: Comment[] = [
    {
      id: '1',
      author: {
        anonymousId: 'anon_789',
        pseudonym: 'Peaceful Warrior',
        avatarColor: '#8EBC40',
        isVerifiedTherapist: false,
      },
      content: 'Thank you for sharing this. The breathing exercises have been really helpful for me during panic attacks.',
      reactions: [{ type: 'heart', count: 8 }],
      timeAgo: '1 hour ago',
    },
    {
      id: '2',
      author: {
        anonymousId: 'anon_123',
        pseudonym: 'Brave Soul',
        avatarColor: '#FF6B9D',
        isVerifiedTherapist: false,
      },
      content: 'As someone who has struggled with anxiety for years, I can confirm these techniques work! The grounding method especially helps me.',
      reactions: [{ type: 'heart', count: 5 }],
      timeAgo: '30 minutes ago',
    },
  ];

  const reactionTypes = [
    { type: 'helpful', emoji: '❤️', label: 'Helpful' },
    { type: 'like', emoji: '👍', label: 'Like' },
    { type: 'support', emoji: '🤗', label: 'Support' },
    { type: 'insight', emoji: '💡', label: 'Insight' },
  ];

  const handleFollow = () => {
    toast({
      title: "Following user",
      description: `You are now following ${post.author.pseudonym}`,
    });
  };

  const handleMessage = () => {
    navigate(`/community/chat/${post.author.anonymousId}`);
  };

  const handleReaction = (reactionType: string) => {
    setSelectedReaction(selectedReaction === reactionType ? null : reactionType);
    toast({
      title: "Reaction added",
      description: `You reacted with ${reactionType}`,
    });
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    
    toast({
      title: "Comment posted",
      description: "Your comment has been added to the discussion.",
    });
    setNewComment('');
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate('/community')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Post Details</h1>
          </div>
          <Button variant="ghost" size="sm">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>

        {/* Post Content */}
        <Card className="mb-6">
          <CardContent className="p-6">
            {/* Author Info */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{ backgroundColor: post.author.avatarColor }}
                >
                  {post.author.pseudonym.split(' ').map(word => word[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{post.author.pseudonym}</span>
                    {post.author.isVerifiedTherapist && (
                      <Badge className="bg-mindlyfe-green text-white text-xs">
                        🟢 Verified Therapist
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{post.timeAgo}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handleFollow}>
                  Follow
                </Button>
                <Button size="sm" variant="outline" onClick={handleMessage}>
                  Message
                </Button>
              </div>
            </div>

            {/* Post Title and Content */}
            <h2 className="text-xl font-bold mb-4 text-gray-900">{post.title}</h2>
            <div className="text-gray-700 mb-4 whitespace-pre-wrap">{post.content}</div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-mindlyfe-blue border-mindlyfe-blue">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{post.reactions.reduce((sum, r) => sum + r.count, 0)}</span>
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

        {/* Reactions */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Reactions</h3>
            <div className="flex gap-3 mb-3">
              {reactionTypes.map((reaction) => {
                const count = post.reactions.find(r => r.type === reaction.type)?.count || 0;
                return (
                  <div key={reaction.type} className="text-sm">
                    {reaction.emoji} {reaction.label} ({count})
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2">
              {reactionTypes.map((reaction) => (
                <Button
                  key={reaction.type}
                  size="sm"
                  variant={selectedReaction === reaction.type ? "default" : "outline"}
                  onClick={() => handleReaction(reaction.type)}
                  className={selectedReaction === reaction.type ? "bg-mindlyfe-blue" : ""}
                >
                  {reaction.emoji} {reaction.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comments */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Comments ({comments.length})</h3>
            
            <div className="space-y-4 mb-4">
              {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs"
                      style={{ backgroundColor: comment.author.avatarColor }}
                    >
                      {comment.author.pseudonym.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{comment.author.pseudonym}</span>
                        {comment.author.isVerifiedTherapist && (
                          <Badge className="bg-mindlyfe-green text-white text-xs">🟢</Badge>
                        )}
                        <span className="text-xs text-gray-500">{comment.timeAgo}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{comment.content}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <button className="flex items-center gap-1 hover:text-mindlyfe-blue">
                          <Heart className="w-3 h-3" />
                          <span>{comment.reactions[0]?.count || 0}</span>
                        </button>
                        <button className="hover:text-mindlyfe-blue">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" size="sm" className="w-full">
              Load More Comments
            </Button>
          </CardContent>
        </Card>

        {/* Add Comment */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-3">
              <Input
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSubmitComment()}
              />
              <Button variant="ghost" size="sm">
                <Smile className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button size="sm" onClick={handleSubmitComment} className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostDetails;
