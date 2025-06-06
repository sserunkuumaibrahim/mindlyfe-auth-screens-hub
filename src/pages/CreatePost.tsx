
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreatePost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [visibility, setVisibility] = useState('public');
  const [allowComments, setAllowComments] = useState(true);
  const [allowReactions, setAllowReactions] = useState(true);
  const [allowSharing, setAllowSharing] = useState(false);
  const [notifyOnInteractions, setNotifyOnInteractions] = useState(true);

  const suggestedTags = ['depression', 'support', 'therapy', 'coping', 'anxiety', 'mindfulness', 'recovery', 'hope'];
  const maxContentLength = 2000;

  const handleAddTag = (tag: string) => {
    if (tag && !tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag.toLowerCase()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      handleAddTag(currentTag.trim());
    }
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft saved",
      description: "Your post has been saved as a draft.",
    });
    navigate('/community');
  };

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in both title and content.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Post published",
      description: "Your post has been published to the community.",
    });
    navigate('/community');
  };

  const visibilityOptions = [
    { id: 'public', label: 'Public (Everyone)', description: 'Visible to all community members' },
    { id: 'anonymous', label: 'Anonymous (No therapists)', description: 'Visible to non-therapist members only' },
    { id: 'therapists_only', label: 'Therapists Only', description: 'Only verified therapists can see this' },
    { id: 'private', label: 'Private (Draft)', description: 'Only you can see this post' },
  ];

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
            <h1 className="text-2xl font-bold text-gray-900">Create Post</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSaveDraft}>
              Save Draft
            </Button>
            <Button onClick={handlePublish} className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
              Publish
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Post Title */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Post Title</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="What would you like to share about?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
              />
            </CardContent>
          </Card>

          {/* Post Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Share your thoughts, experiences, or advice with the community..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[200px] resize-none"
                maxLength={maxContentLength}
              />
              <div className="text-sm text-gray-500 mt-2">
                {content.length}/{maxContentLength} characters
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-mindlyfe-blue border-mindlyfe-blue">
                      #{tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-2 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                
                <Input
                  placeholder="Add tags (press Enter)..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={tags.length >= 5}
                />
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-gray-600">Suggested:</span>
                  {suggestedTags
                    .filter(tag => !tags.includes(tag))
                    .slice(0, 5)
                    .map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleAddTag(tag)}
                        className="text-sm text-mindlyfe-blue hover:bg-mindlyfe-blue/10 px-2 py-1 rounded"
                        disabled={tags.length >= 5}
                      >
                        {tag}
                      </button>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visibility */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {visibilityOptions.map((option) => (
                  <label key={option.id} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      value={option.id}
                      checked={visibility === option.id}
                      onChange={(e) => setVisibility(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowComments}
                    onChange={(e) => setAllowComments(e.target.checked)}
                  />
                  <span className="text-gray-700">Allow comments</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowReactions}
                    onChange={(e) => setAllowReactions(e.target.checked)}
                  />
                  <span className="text-gray-700">Allow reactions</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowSharing}
                    onChange={(e) => setAllowSharing(e.target.checked)}
                  />
                  <span className="text-gray-700">Allow sharing</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifyOnInteractions}
                    onChange={(e) => setNotifyOnInteractions(e.target.checked)}
                  />
                  <span className="text-gray-700">Notify on interactions</span>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
