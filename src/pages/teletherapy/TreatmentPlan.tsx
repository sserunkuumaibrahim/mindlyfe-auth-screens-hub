import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Target, FileText, TrendingUp, CheckCircle, Circle, User, Brain, Heart, Download, Edit, Plus, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress as ProgressBar } from '@/components/ui/progress';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';

interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'behavioral' | 'emotional' | 'cognitive' | 'social';
  targetDate: string;
  progress: number;
  status: 'active' | 'completed' | 'paused';
  milestones: Milestone[];
}

interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  completedDate?: string;
}

interface Session {
  id: string;
  date: string;
  type: 'individual' | 'group';
  duration: number;
  focus: string;
  notes: string;
  homework?: string;
}

const TreatmentPlan = () => {
  const navigate = useNavigate();
  const { therapistId } = useParams();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState<'overview' | 'goals' | 'sessions' | 'progress'>('overview');

  // Mock data
  const therapist = {
    id: therapistId || 'therapist-1',
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Psychologist',
    avatar: '/lovable-uploads/therapist1.jpg'
  };

  const treatmentPlan = {
    id: 'plan-1',
    startDate: '2024-01-15',
    estimatedDuration: '6 months',
    primaryDiagnosis: 'Generalized Anxiety Disorder',
    secondaryDiagnosis: 'Mild Depression',
    treatmentApproach: 'Cognitive Behavioral Therapy (CBT)',
    overallProgress: 65,
    nextSession: '2024-01-22T14:00:00Z'
  };

  const [goals] = useState<Goal[]>([
    {
      id: 'goal-1',
      title: 'Reduce Anxiety Symptoms',
      description: 'Learn and implement coping strategies to manage daily anxiety',
      category: 'emotional',
      targetDate: '2024-03-15',
      progress: 75,
      status: 'active',
      milestones: [
        { id: 'm1', title: 'Learn breathing techniques', completed: true, completedDate: '2024-01-20' },
        { id: 'm2', title: 'Practice mindfulness daily', completed: true, completedDate: '2024-01-25' },
        { id: 'm3', title: 'Use grounding techniques in stressful situations', completed: false },
        { id: 'm4', title: 'Maintain anxiety journal for 2 weeks', completed: false }
      ]
    },
    {
      id: 'goal-2',
      title: 'Improve Social Interactions',
      description: 'Build confidence in social situations and strengthen relationships',
      category: 'social',
      targetDate: '2024-04-01',
      progress: 45,
      status: 'active',
      milestones: [
        { id: 'm5', title: 'Attend one social gathering per week', completed: true, completedDate: '2024-01-18' },
        { id: 'm6', title: 'Practice assertiveness techniques', completed: false },
        { id: 'm7', title: 'Join a community group or activity', completed: false }
      ]
    },
    {
      id: 'goal-3',
      title: 'Develop Healthy Sleep Patterns',
      description: 'Establish consistent sleep routine and improve sleep quality',
      category: 'behavioral',
      targetDate: '2024-02-29',
      progress: 90,
      status: 'active',
      milestones: [
        { id: 'm8', title: 'Create bedtime routine', completed: true, completedDate: '2024-01-16' },
        { id: 'm9', title: 'Limit screen time before bed', completed: true, completedDate: '2024-01-20' },
        { id: 'm10', title: 'Maintain consistent sleep schedule for 3 weeks', completed: true, completedDate: '2024-02-05' }
      ]
    }
  ]);

  const [sessions] = useState<Session[]>([
    {
      id: 'session-1',
      date: '2024-01-15',
      type: 'individual',
      duration: 50,
      focus: 'Initial Assessment & Goal Setting',
      notes: 'Discussed primary concerns about anxiety. Established initial treatment goals.',
      homework: 'Complete anxiety assessment worksheet'
    },
    {
      id: 'session-2',
      date: '2024-01-22',
      type: 'individual',
      duration: 50,
      focus: 'Introduction to CBT Techniques',
      notes: 'Introduced cognitive restructuring. Practiced identifying negative thought patterns.',
      homework: 'Track anxious thoughts using thought record'
    },
    {
      id: 'session-3',
      date: '2024-01-29',
      type: 'group',
      duration: 90,
      focus: 'Group Therapy - Social Anxiety',
      notes: 'Participated in group discussion about social anxiety triggers.',
      homework: 'Practice one social interaction this week'
    }
  ]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'emotional': return <Heart className="w-4 h-4" />;
      case 'behavioral': return <Target className="w-4 h-4" />;
      case 'cognitive': return <Brain className="w-4 h-4" />;
      case 'social': return <User className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'emotional': return 'bg-red-100 text-red-800';
      case 'behavioral': return 'bg-blue-100 text-blue-800';
      case 'cognitive': return 'bg-purple-100 text-purple-800';
      case 'social': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const downloadPlan = () => {
    toast({
      title: "Download Started",
      description: "Your treatment plan PDF is being generated..."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/teletherapy')}
              className="shrink-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Treatment Plan
              </h1>
              <p className="text-gray-600">
                With {therapist.name}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => navigate('/teletherapy/sessions')}
              className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
            >
              <History className="w-4 h-4 mr-2" />
              Session History
            </Button>
            <Button
              variant="outline"
              onClick={downloadPlan}
              className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Plan
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: FileText },
                { id: 'goals', label: 'Goals & Milestones', icon: Target },
                { id: 'sessions', label: 'Session History', icon: Calendar },
                { id: 'progress', label: 'Progress Tracking', icon: TrendingUp }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-mindlyfe-blue text-mindlyfe-blue'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Treatment Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-mindlyfe-blue" />
                  Treatment Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Start Date</label>
                    <p className="text-gray-900">{new Date(treatmentPlan.startDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Estimated Duration</label>
                    <p className="text-gray-900">{treatmentPlan.estimatedDuration}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Primary Diagnosis</label>
                    <p className="text-gray-900">{treatmentPlan.primaryDiagnosis}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Treatment Approach</label>
                    <p className="text-gray-900">{treatmentPlan.treatmentApproach}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Overall Progress</label>
                  <div className="mt-2 flex items-center gap-3">
                    <ProgressBar value={treatmentPlan.overallProgress} className="flex-1" />
                    <span className="text-sm font-medium text-gray-900">{treatmentPlan.overallProgress}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Goals Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Active Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {goals.filter(goal => goal.status === 'active').map(goal => (
                    <div key={goal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${getCategoryColor(goal.category)}`}>
                          {getCategoryIcon(goal.category)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{goal.title}</h4>
                          <p className="text-sm text-gray-600">{goal.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <ProgressBar value={goal.progress} className="w-20" />
                          <span className="text-sm font-medium text-gray-900">{goal.progress}%</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Due: {new Date(goal.targetDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Treatment Goals</h2>
              <Button className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Goal
              </Button>
            </div>

            <div className="space-y-6">
              {goals.map(goal => (
                <Card key={goal.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${getCategoryColor(goal.category)}`}>
                          {getCategoryIcon(goal.category)}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{goal.title}</CardTitle>
                          <p className="text-gray-600 mt-1">{goal.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={goal.status === 'active' ? 'default' : 'secondary'}>
                          {goal.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">{goal.progress}%</span>
                      </div>
                      <ProgressBar value={goal.progress} />
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Milestones</h4>
                        <div className="space-y-2">
                          {goal.milestones.map(milestone => (
                            <div key={milestone.id} className="flex items-center gap-3">
                              {milestone.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : (
                                <Circle className="w-5 h-5 text-gray-400" />
                              )}
                              <span className={`flex-1 ${milestone.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                {milestone.title}
                              </span>
                              {milestone.completed && milestone.completedDate && (
                                <span className="text-xs text-gray-500">
                                  {new Date(milestone.completedDate).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Target Date: {new Date(goal.targetDate).toLocaleDateString()}</span>
                        <Badge className={getCategoryColor(goal.category)}>
                          {goal.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sessions' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Session History</h2>
            
            <div className="space-y-4">
              {sessions.map(session => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-mindlyfe-blue/10 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-mindlyfe-blue" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{session.focus}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <span>{new Date(session.date).toLocaleDateString()}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {session.duration} minutes
                            </span>
                            <Badge variant={session.type === 'individual' ? 'default' : 'secondary'}>
                              {session.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Session Notes</label>
                        <p className="text-gray-900 mt-1">{session.notes}</p>
                      </div>
                      
                      {session.homework && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Homework Assignment</label>
                          <p className="text-gray-900 mt-1">{session.homework}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Progress Tracking</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Overall Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mindlyfe-blue mb-2">
                      {treatmentPlan.overallProgress}%
                    </div>
                    <ProgressBar value={treatmentPlan.overallProgress} className="mb-2" />
                    <p className="text-sm text-gray-600">Treatment completion</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Goals Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {goals.filter(g => g.status === 'completed').length}
                    </div>
                    <p className="text-sm text-gray-600">of {goals.length} goals</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sessions Attended</CardHeader>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mindlyfe-green mb-2">
                      {sessions.length}
                    </div>
                    <p className="text-sm text-gray-600">Total sessions</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Goal Progress Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {goals.map(goal => (
                    <div key={goal.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${getCategoryColor(goal.category)}`}>
                          {getCategoryIcon(goal.category)}
                        </div>
                        <span className="font-medium text-gray-900">{goal.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ProgressBar value={goal.progress} className="w-32" />
                        <span className="text-sm font-medium text-gray-900 w-12">
                          {goal.progress}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentPlan;
