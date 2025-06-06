
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Save, 
  Camera, 
  Mic, 
  MapPin, 
  Tag, 
  Lock, 
  Users, 
  Globe,
  Bot,
  Plus,
  X
} from 'lucide-react';

const JournalWrite = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState<number | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [privacy, setPrivacy] = useState<'private' | 'therapist' | 'community'>('private');
  const [wordCount, setWordCount] = useState(0);
  const [aiSuggestion, setAiSuggestion] = useState('');

  const prompt = searchParams.get('prompt');
  const mode = searchParams.get('mode');

  useEffect(() => {
    if (prompt) {
      setContent(`Prompt: "${prompt}"\n\n`);
    }
  }, [prompt]);

  useEffect(() => {
    const words = content.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordCount(content.trim() ? words : 0);
    
    // Simulate AI suggestion based on content
    if (content.length > 100 && content.includes('meditation')) {
      setAiSuggestion("Consider exploring what specific aspects of meditation helped you most today.");
    } else if (content.length > 100 && content.includes('anxious')) {
      setAiSuggestion("What coping strategies have you found most helpful when feeling anxious?");
    } else {
      setAiSuggestion('');
    }
  }, [content]);

  const moodOptions = [
    { value: 1, emoji: '😢', label: 'Very Sad' },
    { value: 2, emoji: '😟', label: 'Sad' },
    { value: 3, emoji: '😐', label: 'Neutral' },
    { value: 4, emoji: '😊', label: 'Happy' },
    { value: 5, emoji: '😄', label: 'Very Happy' }
  ];

  const privacyOptions = [
    { value: 'private', icon: Lock, label: 'Private (only you)', description: 'Only visible to you' },
    { value: 'therapist', icon: Users, label: 'Share with therapist', description: 'Visible to you and your therapist' },
    { value: 'community', icon: Globe, label: 'Anonymous community share', description: 'Shared anonymously with community' }
  ];

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const saveDraft = () => {
    toast({
      title: "Draft Saved",
      description: "Your journal entry has been saved as a draft."
    });
  };

  const publishEntry = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Missing Information",
        description: "Please add a title and some content before publishing.",
        variant: "destructive"
      });
      return;
    }

    if (mood === null) {
      toast({
        title: "Mood Required",
        description: "Please select how you're feeling today.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Entry Published",
      description: "Your journal entry has been saved successfully."
    });
    
    navigate('/journal');
  };

  const useSuggestion = () => {
    setContent(content + '\n\n' + aiSuggestion);
    setAiSuggestion('');
  };

  const getReadingTime = () => {
    const wordsPerMinute = 200;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  };

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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {mode === 'voice' ? 'Voice Journal' : mode === 'photo' ? 'Photo Journal' : 'New Entry'}
              </h1>
              <p className="text-gray-600">Express your thoughts and feelings</p>
            </div>
          </div>
          
          <Button 
            variant="outline"
            onClick={saveDraft}
            className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
        </div>

        <div className="space-y-6">
          {/* Title */}
          <Card>
            <CardContent className="p-4">
              <Input
                placeholder="Give your entry a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg font-medium border-none shadow-none p-0 focus-visible:ring-0"
              />
            </CardContent>
          </Card>

          {/* Mood Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How are you feeling?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 justify-center md:justify-start">
                {moodOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setMood(option.value)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors ${
                      mood === option.value
                        ? 'bg-mindlyfe-blue text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card>
            <CardContent className="p-4">
              <Textarea
                placeholder="Start writing your thoughts..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] text-base border-none shadow-none p-0 resize-none focus-visible:ring-0"
              />
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>📝 {wordCount} words</span>
                  {wordCount > 0 && (
                    <span>📖 {getReadingTime()} min read</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    <Camera className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    <MapPin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Tag className="w-5 h-5" />
                Tags
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button onClick={() => removeTag(tag)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={addTag} size="sm" variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lock className="w-5 h-5" />
                Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {privacyOptions.map(option => (
                  <label
                    key={option.value}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      privacy === option.value
                        ? 'border-mindlyfe-blue bg-mindlyfe-blue/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="privacy"
                      value={option.value}
                      checked={privacy === option.value}
                      onChange={(e) => setPrivacy(e.target.value as any)}
                      className="mt-1"
                    />
                    <div className="flex items-center gap-2">
                      <option.icon className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Suggestions */}
          {aiSuggestion && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="w-5 h-5 text-purple-600" />
                  AI Suggestion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-gray-800 mb-3">"{aiSuggestion}"</p>
                  <Button
                    onClick={useSuggestion}
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Use Suggestion
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={saveDraft}
              variant="outline"
              className="flex-1 border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
            >
              Save Draft
            </Button>
            <Button
              onClick={publishEntry}
              className="flex-1 bg-mindlyfe-green hover:bg-mindlyfe-green/90"
            >
              Publish Entry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalWrite;
