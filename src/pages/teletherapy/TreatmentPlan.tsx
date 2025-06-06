
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Target, 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  Edit,
  Plus,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: 'active' | 'completed' | 'paused';
  targetWeeks: number;
  currentWeek: number;
}

interface Milestone {
  id: string;
  title: string;
  week: number;
  completed: boolean;
  date?: string;
}

interface Exercise {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  dueDate?: string;
}

const TreatmentPlan = () => {
  const navigate = useNavigate();
  const { therapistId } = useParams();
  const { toast } = useToast();

  const therapist = {
    id: therapistId,
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Therapist'
  };

  const goals: Goal[] = [
    {
      id: 'goal-1',
      title: 'Reduce anxiety symptoms',
      description: 'Decrease daily anxiety levels using CBT techniques and mindfulness practices',
      progress: 75,
      status: 'active',
      targetWeeks: 8,
      currentWeek: 6
    },
    {
      id: 'goal-2',
      title: 'Improve sleep quality',
      description: 'Establish consistent sleep hygiene and reduce sleep-related anxiety',
      progress: 45,
      status: 'active',
      targetWeeks: 6,
      currentWeek: 3
    },
    {
      id: 'goal-3',
      title: 'Develop coping strategies',
      description: 'Build a toolkit of healthy coping mechanisms for stress management',
      progress: 60,
      status: 'active',
      targetWeeks: 10,
      currentWeek: 6
    }
  ];

  const milestones: Milestone[] = [
    {
      id: 'milestone-1',
      title: 'Anxiety Assessment',
      week: 6,
      completed: false,
      date: 'Jan 22, 2024'
    },
    {
      id: 'milestone-2',
      title: 'Sleep Study Review',
      week: 8,
      completed: false,
      date: 'Feb 5, 2024'
    },
    {
      id: 'milestone-3',
      title: 'Progress Evaluation',
      week: 10,
      completed: false,
      date: 'Feb 19, 2024'
    }
  ];

  const exercises: Exercise[] = [
    {
      id: 'ex-1',
      title: 'Daily mood tracking',
      description: 'Record mood levels and anxiety triggers in journal',
      status: 'completed'
    },
    {
      id: 'ex-2',
      title: 'Breathing exercises',
      description: 'Practice 4-7-8 breathing technique twice daily',
      status: 'completed'
    },
    {
      id: 'ex-3',
      title: 'Cognitive restructuring',
      description: 'Identify and challenge negative thought patterns',
      status: 'in-progress',
      dueDate: 'Jan 20, 2024'
    },
    {
      id: 'ex-4',
      title: 'Sleep hygiene practice',
      description: 'Implement bedtime routine and limit screen time before bed',
      status: 'pending',
      dueDate: 'Jan 25, 2024'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-mindlyfe-green" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-mindlyfe-green text-white">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-500 text-white">In Progress</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'active':
        return <Badge className="bg-mindlyfe-blue text-white">Active</Badge>;
      default:
        return null;
    }
  };

  const handleUpdateGoals = () => {
    toast({
      title: "Goals Updated",
      description: "Your treatment goals have been updated successfully."
    });
  };

  const handleScheduleSession = () => {
    navigate(`/teletherapy/book/${therapistId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/teletherapy/sessions')}
            className="hover:bg-mindlyfe-blue/10"
          >
            <ArrowLeft className="w-5 h-5 text-mindlyfe-blue" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Treatment Plan
            </h1>
            <p className="text-gray-600">with {therapist.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Treatment Goals */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-mindlyfe-blue" />
                  Treatment Goals
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUpdateGoals}
                  className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Update Goals
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {goals.map((goal) => (
                  <div key={goal.id} className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                          {getStatusBadge(goal.status)}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{goal.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Progress: {goal.progress}% complete</span>
                          <span>Week {goal.currentWeek} of {goal.targetWeeks}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-mindlyfe-blue">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Homework & Exercises */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-mindlyfe-blue" />
                  Homework & Exercises
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {exercises.map((exercise) => (
                  <div key={exercise.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                    {getStatusIcon(exercise.status)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900">{exercise.title}</h4>
                        {getStatusBadge(exercise.status)}
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{exercise.description}</p>
                      {exercise.dueDate && (
                        <p className="text-xs text-gray-500">Due: {exercise.dueDate}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Milestones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-mindlyfe-blue" />
                  Upcoming Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-mindlyfe-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-mindlyfe-blue">
                        W{milestone.week}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-gray-500">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Session Notes Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-mindlyfe-blue" />
                  Session Notes Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Last updated: Jan 10, 2024
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    • Significant progress in anxiety management
                  </p>
                  <p className="text-gray-700">
                    • Sleep quality showing improvement
                  </p>
                  <p className="text-gray-700">
                    • Continue with breathing exercises
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
                >
                  View Full Notes
                </Button>
              </CardContent>
            </Card>

            {/* Progress Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-mindlyfe-blue" />
                  Overall Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-mindlyfe-blue mb-1">
                    60%
                  </div>
                  <p className="text-sm text-gray-600">
                    Treatment Plan Completion
                  </p>
                </div>
                <Progress value={60} className="h-3 mb-4" />
                <div className="text-xs text-gray-500 text-center">
                  Estimated completion: March 2024
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                onClick={handleScheduleSession}
                className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Session
              </Button>
              <Button
                variant="outline"
                className="w-full border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Goal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPlan;
