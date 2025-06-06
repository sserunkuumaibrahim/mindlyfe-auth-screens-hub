
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react';

interface AssessmentQuestion {
  id: string;
  type: 'scale' | 'multiple_choice' | 'text' | 'boolean';
  category: string;
  question: string;
  description?: string;
  options?: string[];
  scale?: {
    min: number;
    max: number;
    labels: string[];
  };
  required: boolean;
}

const MentalHealthAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});

  // Mock assessment questions
  const questions: AssessmentQuestion[] = [
    {
      id: 'phq9_1',
      type: 'multiple_choice',
      category: 'depression',
      question: 'Over the past 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?',
      options: [
        'Not at all',
        'Several days',
        'More than half the days',
        'Nearly every day'
      ],
      required: true
    },
    {
      id: 'gad7_1',
      type: 'multiple_choice',
      category: 'anxiety',
      question: 'Over the past 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?',
      options: [
        'Not at all',
        'Several days',
        'More than half the days',
        'Nearly every day'
      ],
      required: true
    },
    {
      id: 'stress_1',
      type: 'scale',
      category: 'stress',
      question: 'On a scale of 1-10, how would you rate your current stress level?',
      scale: {
        min: 1,
        max: 10,
        labels: ['Very Low', 'Low', 'Moderate', 'High', 'Very High']
      },
      required: true
    },
    {
      id: 'sleep_1',
      type: 'multiple_choice',
      category: 'sleep',
      question: 'How would you describe your sleep quality over the past week?',
      options: [
        'Very poor',
        'Poor',
        'Fair',
        'Good',
        'Excellent'
      ],
      required: true
    },
    {
      id: 'social_1',
      type: 'multiple_choice',
      category: 'social',
      question: 'How often do you feel lonely or isolated?',
      options: [
        'Never',
        'Rarely',
        'Sometimes',
        'Often',
        'Always'
      ],
      required: true
    }
  ];

  const currentQ = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer: any) => {
    setResponses(prev => ({
      ...prev,
      [currentQ.id]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Complete assessment
      navigate('/mental-health/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const canProceed = responses[currentQ.id] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Mental Health Assessment</h1>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <Progress value={progressPercentage} className="h-2 mb-2" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{Math.round(progressPercentage)}% Complete</span>
            <span>Question {currentQuestion + 1} of {questions.length}</span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">{currentQ.question}</CardTitle>
            {currentQ.description && (
              <p className="text-sm text-gray-600">{currentQ.description}</p>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQ.type === 'multiple_choice' && (
              <div className="space-y-3">
                {currentQ.options?.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name={currentQ.id}
                      value={option}
                      checked={responses[currentQ.id] === option}
                      onChange={() => handleAnswer(option)}
                      className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {currentQ.type === 'scale' && currentQ.scale && (
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{currentQ.scale.labels[0]}</span>
                  <span>{currentQ.scale.labels[currentQ.scale.labels.length - 1]}</span>
                </div>
                <div className="flex justify-between">
                  {Array.from({ length: currentQ.scale.max - currentQ.scale.min + 1 }, (_, i) => {
                    const value = currentQ.scale!.min + i;
                    return (
                      <button
                        key={value}
                        onClick={() => handleAnswer(value)}
                        className={`w-10 h-10 rounded-full border-2 text-sm font-medium transition-colors ${
                          responses[currentQ.id] === value
                            ? 'bg-mindlyfe-blue text-white border-mindlyfe-blue'
                            : 'border-gray-300 hover:border-mindlyfe-blue'
                        }`}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Optional notes */}
            <div className="pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional notes (optional)
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                rows={3}
                placeholder="Any additional context you'd like to share..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mb-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2 bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
          >
            {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Disclaimer */}
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-orange-800">
                <p className="font-medium mb-1">Important Notice</p>
                <p>This assessment is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with any questions you may have regarding a medical condition.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MentalHealthAssessment;
