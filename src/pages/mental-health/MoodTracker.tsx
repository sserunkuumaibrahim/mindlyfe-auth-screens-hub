
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Flame } from 'lucide-react';

const MoodTracker = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const moods = [
    { value: 1, emoji: '😢', label: 'Very Bad' },
    { value: 2, emoji: '😕', label: 'Bad' },
    { value: 3, emoji: '😐', label: 'Okay' },
    { value: 4, emoji: '🙂', label: 'Good' },
    { value: 5, emoji: '😊', label: 'Very Good' }
  ];

  const emotions = [
    'Happy', 'Grateful', 'Calm', 'Excited', 'Peaceful',
    'Confident', 'Hopeful', 'Anxious', 'Sad', 'Angry',
    'Frustrated', 'Overwhelmed', 'Lonely', 'Stressed'
  ];

  const triggers = [
    'Work', 'Family', 'Health', 'Finances', 'Relationships',
    'Sleep', 'Exercise', 'Social', 'Weather', 'News'
  ];

  const handleEmotionToggle = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion)
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const handleTriggerToggle = (trigger: string) => {
    setSelectedTriggers(prev => 
      prev.includes(trigger)
        ? prev.filter(t => t !== trigger)
        : [...prev, trigger]
    );
  };

  const handleSave = () => {
    // Save mood entry logic here
    console.log({
      mood: selectedMood,
      emotions: selectedEmotions,
      triggers: selectedTriggers,
      notes
    });
    navigate('/mental-health/dashboard');
  };

  const canSave = selectedMood !== null;

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/mental-health/dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Daily Mood Check</h1>
            <p className="text-sm text-gray-600">January 15, 2024</p>
          </div>
        </div>

        {/* Mood Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How are you feeling today?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-4 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                    selectedMood === mood.value
                      ? 'border-mindlyfe-blue bg-mindlyfe-blue/10 scale-110'
                      : 'border-gray-200 hover:border-mindlyfe-blue/50'
                  }`}
                >
                  <span className="text-3xl mb-2">{mood.emoji}</span>
                  <span className="text-xs font-medium text-gray-700">{mood.value}</span>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="text-center">
                <span className="text-lg font-medium text-mindlyfe-blue">
                  Selected: {moods.find(m => m.value === selectedMood)?.emoji} {moods.find(m => m.value === selectedMood)?.label}
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Emotions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>What emotions are you feeling?</CardTitle>
            <p className="text-sm text-gray-600">Select all that apply</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {emotions.map((emotion) => (
                <Badge
                  key={emotion}
                  variant={selectedEmotions.includes(emotion) ? "default" : "secondary"}
                  className={`cursor-pointer transition-colors ${
                    selectedEmotions.includes(emotion)
                      ? 'bg-mindlyfe-blue hover:bg-mindlyfe-blue/90'
                      : 'hover:bg-gray-300'
                  }`}
                  onClick={() => handleEmotionToggle(emotion)}
                >
                  {emotion}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Triggers */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Any specific triggers today?</CardTitle>
            <p className="text-sm text-gray-600">What influenced your mood?</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {triggers.map((trigger) => (
                <Badge
                  key={trigger}
                  variant={selectedTriggers.includes(trigger) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedTriggers.includes(trigger)
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleTriggerToggle(trigger)}
                >
                  {trigger}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notes */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Notes (optional)</CardTitle>
            <p className="text-sm text-gray-600">Any additional thoughts about your day?</p>
          </CardHeader>
          <CardContent>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
              rows={4}
              placeholder="Had a great day at work and spent time with friends..."
              maxLength={500}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-500">{notes.length}/500 characters</span>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={handleSave}
            disabled={!canSave}
            className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
            size="lg"
          >
            Save Mood Entry
          </Button>

          {/* Streak Display */}
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-center gap-2">
                <Flame className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-800">7 day streak!</span>
              </div>
              <p className="text-center text-sm text-orange-700 mt-1">
                Keep it up! Consistent tracking helps identify patterns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
