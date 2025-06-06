
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Brain, TrendingUp, Activity, Target } from 'lucide-react';

const WellnessOverview = () => {
  const navigate = useNavigate();

  const handleNavigateToMood = () => {
    navigate('/mental-health/mood');
  };

  const handleNavigateToGoals = () => {
    navigate('/mental-health/goals');
  };

  const handleNavigateToAssessment = () => {
    navigate('/mental-health/assessment');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-mindlyfe-blue" />
          Mental Health Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mood Tracking */}
          <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Mood Tracking</h3>
            <p className="text-sm text-gray-600 mb-3">Track your daily emotional patterns</p>
            <Badge variant="outline" className="mb-3">12 day streak</Badge>
            <Button 
              onClick={handleNavigateToMood}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Track Mood
            </Button>
          </div>

          {/* Wellness Goals */}
          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Wellness Goals</h3>
            <p className="text-sm text-gray-600 mb-3">Set and track your mental health objectives</p>
            <Badge variant="outline" className="mb-3">3 active goals</Badge>
            <Button 
              onClick={handleNavigateToGoals}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              View Goals
            </Button>
          </div>

          {/* Assessment Progress */}
          <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Health Assessment</h3>
            <p className="text-sm text-gray-600 mb-3">Complete mental health evaluations</p>
            <Badge variant="outline" className="mb-3">5 completed</Badge>
            <Button 
              onClick={handleNavigateToAssessment}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Take Assessment
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessOverview;
