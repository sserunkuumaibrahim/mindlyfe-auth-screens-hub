
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { 
  ArrowLeft, 
  Lightbulb, 
  Bookmark, 
  BookmarkCheck, 
  Star, 
  Target,
  Heart,
  Brain,
  TrendingUp,
  Calendar,
  Filter
} from 'lucide-react';

interface WritingPrompt {
  id: string;
  text: string;
  category: 'gratitude' | 'growth' | 'anxiety' | 'goals' | 'reflection' | 'daily';
  difficulty: 'easy' | 'medium' | 'hard';
  isSaved: boolean;
  isFeatured?: boolean;
  description?: string;
}

const JournalPrompts = () => {
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [savedPrompts, setSavedPrompts] = useState<Set<string>>(new Set(['prompt-2', 'prompt-5']));

  const [prompts] = useState<WritingPrompt[]>([
    {
      id: 'prompt-1',
      text: "What are three things you learned about yourself this week? How can you use these insights to grow?",
      category: 'reflection',
      difficulty: 'medium',
      isSaved: false,
      isFeatured: true,
      description: "A deep dive into self-awareness and personal development"
    },
    {
      id: 'prompt-2',
      text: "What made you smile today, even if it was something small?",
      category: 'gratitude',
      difficulty: 'easy',
      isSaved: true,
      description: "Find joy in the little moments"
    },
    {
      id: 'prompt-3',
      text: "Describe a challenge you overcame recently. What did you learn from the experience?",
      category: 'growth',
      difficulty: 'medium',
      isSaved: false,
      description: "Reflect on resilience and personal strength"
    },
    {
      id: 'prompt-4',
      text: "What would you tell your younger self about handling anxiety?",
      category: 'anxiety',
      difficulty: 'medium',
      isSaved: false,
      description: "Share wisdom with your past self"
    },
    {
      id: 'prompt-5',
      text: "What are three things you are grateful for today?",
      category: 'gratitude',
      difficulty: 'easy',
      isSaved: true,
      description: "Practice daily gratitude"
    },
    {
      id: 'prompt-6',
      text: "What goal are you most excited about right now? What's your next step?",
      category: 'goals',
      difficulty: 'easy',
      isSaved: false,
      description: "Focus on forward momentum"
    },
    {
      id: 'prompt-7',
      text: "How have your priorities changed over the past year? What drove these changes?",
      category: 'reflection',
      difficulty: 'hard',
      isSaved: false,
      description: "Examine personal evolution and growth"
    },
    {
      id: 'prompt-8',
      text: "When did you last feel truly peaceful? What contributed to that feeling?",
      category: 'daily',
      difficulty: 'easy',
      isSaved: false,
      description: "Identify sources of inner calm"
    },
    {
      id: 'prompt-9',
      text: "What patterns do you notice in your thinking when you're stressed? How can you interrupt them?",
      category: 'anxiety',
      difficulty: 'hard',
      isSaved: false,
      description: "Develop awareness of thought patterns"
    },
    {
      id: 'prompt-10',
      text: "What skill would you like to develop further? Why is it important to you?",
      category: 'goals',
      difficulty: 'medium',
      isSaved: false,
      description: "Explore personal development goals"
    }
  ]);

  const categories = [
    { value: 'all', label: 'All', icon: Filter, color: 'bg-gray-100 text-gray-800' },
    { value: 'daily', label: 'Daily', icon: Calendar, color: 'bg-blue-100 text-blue-800' },
    { value: 'gratitude', label: 'Gratitude', icon: Heart, color: 'bg-green-100 text-green-800' },
    { value: 'growth', label: 'Growth', icon: TrendingUp, color: 'bg-purple-100 text-purple-800' },
    { value: 'anxiety', label: 'Anxiety', icon: Brain, color: 'bg-red-100 text-red-800' },
    { value: 'goals', label: 'Goals', icon: Target, color: 'bg-orange-100 text-orange-800' },
    { value: 'reflection', label: 'Reflection', icon: Lightbulb, color: 'bg-yellow-100 text-yellow-800' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.value === category);
    return categoryData ? categoryData.icon : Filter;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.value === category);
    return categoryData ? categoryData.color : 'bg-gray-100 text-gray-800';
  };

  const toggleSavePrompt = (promptId: string) => {
    const newSavedPrompts = new Set(savedPrompts);
    if (newSavedPrompts.has(promptId)) {
      newSavedPrompts.delete(promptId);
    } else {
      newSavedPrompts.add(promptId);
    }
    setSavedPrompts(newSavedPrompts);
  };

  const filteredPrompts = prompts.filter(prompt => 
    selectedCategory === 'all' || prompt.category === selectedCategory
  );

  const featuredPrompt = prompts.find(prompt => prompt.isFeatured);
  const dailyPrompts = filteredPrompts.filter(prompt => !prompt.isFeatured);

  const startWriting = (prompt: WritingPrompt) => {
    navigate(`/journal/write?prompt=${encodeURIComponent(prompt.text)}`);
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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Writing Prompts</h1>
              <p className="text-gray-600">Inspiration for meaningful reflection</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-mindlyfe-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Featured Prompt */}
        {featuredPrompt && selectedCategory === 'all' && (
          <Card className="mb-6 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Featured Prompt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-800 text-lg leading-relaxed italic">
                  "{featuredPrompt.text}"
                </p>
                
                {featuredPrompt.description && (
                  <p className="text-gray-600 text-sm">
                    {featuredPrompt.description}
                  </p>
                )}
                
                <div className="flex items-center gap-3">
                  <Badge className={getCategoryColor(featuredPrompt.category)}>
                    <span className="capitalize">{featuredPrompt.category}</span>
                  </Badge>
                  <Badge className={getDifficultyColor(featuredPrompt.difficulty)}>
                    <span className="capitalize">{featuredPrompt.difficulty}</span>
                  </Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => startWriting(featuredPrompt)}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    Start Writing
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toggleSavePrompt(featuredPrompt.id)}
                    className="border-yellow-600 text-yellow-600 hover:bg-yellow-100"
                  >
                    {savedPrompts.has(featuredPrompt.id) ? (
                      <>
                        <BookmarkCheck className="w-4 h-4 mr-2" />
                        Saved
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-4 h-4 mr-2" />
                        Save for Later
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Daily Prompts */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-mindlyfe-blue" />
              {selectedCategory === 'all' ? 'All Prompts' : `${categories.find(c => c.value === selectedCategory)?.label} Prompts`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dailyPrompts.map(prompt => {
                const CategoryIcon = getCategoryIcon(prompt.category);
                return (
                  <div key={prompt.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <p className="text-gray-800 leading-relaxed">
                        "{prompt.text}"
                      </p>
                      
                      {prompt.description && (
                        <p className="text-gray-600 text-sm">
                          {prompt.description}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(prompt.category)}>
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            <span className="capitalize">{prompt.category}</span>
                          </Badge>
                          <Badge className={getDifficultyColor(prompt.difficulty)}>
                            <span className="capitalize">{prompt.difficulty}</span>
                          </Badge>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => startWriting(prompt)}
                            className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                          >
                            Write
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleSavePrompt(prompt.id)}
                            className={savedPrompts.has(prompt.id) ? 'border-mindlyfe-green text-mindlyfe-green' : 'border-gray-300'}
                          >
                            {savedPrompts.has(prompt.id) ? (
                              <BookmarkCheck className="w-4 h-4" />
                            ) : (
                              <Bookmark className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Saved Prompts Section */}
        {Array.from(savedPrompts).length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-mindlyfe-green" />
                Saved Prompts ({Array.from(savedPrompts).length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={() => {
                  // Filter to show only saved prompts
                  // This could be implemented with additional state management
                }}
                className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10"
              >
                View Saved Prompts
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Personalized Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-600" />
              Personalized Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-800 mb-3">
                Based on your recent entries and mood patterns, we've identified prompts that might resonate with your current journey.
              </p>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-100"
              >
                View Suggestions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JournalPrompts;
