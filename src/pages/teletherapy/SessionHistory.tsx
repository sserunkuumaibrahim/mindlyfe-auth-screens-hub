import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Video, FileText, Play, User, Clock, Users, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';

interface Session {
  id: string;
  therapist: {
    name: string;
    title: string;
  };
  type: string;
  date: string;
  time: string;
  duration: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  hasNotes: boolean;
  hasRecording: boolean;
  sessionType: 'video' | 'audio';
}

const SessionHistory = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'cancelled'>('upcoming');

  const sessions: Session[] = [
    {
      id: 'session-1',
      therapist: {
        name: 'Dr. Sarah Johnson',
        title: 'Licensed Clinical Therapist'
      },
      type: 'Individual Therapy',
      date: 'Today',
      time: '3:00 PM - 3:50 PM',
      duration: 50,
      status: 'upcoming',
      hasNotes: false,
      hasRecording: false,
      sessionType: 'video'
    },
    {
      id: 'session-2',
      therapist: {
        name: 'Dr. Michael Chen',
        title: 'Licensed Marriage Therapist'
      },
      type: 'Couples Therapy',
      date: 'Wednesday',
      time: '2:00 PM - 2:50 PM',
      duration: 50,
      status: 'upcoming',
      hasNotes: false,
      hasRecording: false,
      sessionType: 'video'
    },
    {
      id: 'session-3',
      therapist: {
        name: 'Dr. Sarah Johnson',
        title: 'Licensed Clinical Therapist'
      },
      type: 'Individual Therapy',
      date: 'Jan 10',
      time: '3:00 PM',
      duration: 50,
      status: 'completed',
      hasNotes: true,
      hasRecording: true,
      sessionType: 'video'
    },
    {
      id: 'session-4',
      therapist: {
        name: 'Dr. Emily Davis',
        title: 'Licensed Clinical Social Worker'
      },
      type: 'Group Therapy',
      date: 'Jan 8',
      time: '6:00 PM',
      duration: 90,
      status: 'completed',
      hasNotes: true,
      hasRecording: false,
      sessionType: 'video'
    },
    {
      id: 'session-5',
      therapist: {
        name: 'Dr. James Williams',
        title: 'Licensed Professional Counselor'
      },
      type: 'Individual Therapy',
      date: 'Jan 5',
      time: '4:00 PM',
      duration: 50,
      status: 'cancelled',
      hasNotes: false,
      hasRecording: false,
      sessionType: 'video'
    }
  ];

  const filteredSessions = sessions.filter(session => session.status === activeTab);

  const handleJoinSession = (sessionId: string) => {
    navigate(`/teletherapy/session/${sessionId}`);
  };

  const handleReschedule = (sessionId: string) => {
    toast({
      title: "Reschedule Session",
      description: "Redirecting to booking page..."
    });
    // In a real app, this would navigate to reschedule flow
  };

  const handleViewNotes = (sessionId: string) => {
    toast({
      title: "Session Notes",
      description: "Opening session notes..."
    });
  };

  const handleViewRecording = (sessionId: string) => {
    toast({
      title: "Session Recording",
      description: "Loading session recording..."
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge className="bg-mindlyfe-blue text-white">Upcoming</Badge>;
      case 'completed':
        return <Badge className="bg-mindlyfe-green text-white">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header with Enhanced Navigation */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/teletherapy')}
              className="hover:bg-mindlyfe-blue/10"
            >
              <ArrowLeft className="w-5 h-5 text-mindlyfe-blue" />
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                My Therapy Sessions
              </h1>
              <p className="text-gray-600">
                Manage and track your therapy journey
              </p>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => navigate('/teletherapy')}
              className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
            >
              <Plus className="w-4 h-4 mr-2" />
              Book Session
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/teletherapy/treatment/current')}
              className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10"
            >
              <FileText className="w-4 h-4 mr-2" />
              Treatment Plan
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/teletherapy/group/upcoming')}
              className="border-purple-600 text-purple-600 hover:bg-purple-600/10"
            >
              <Users className="w-4 h-4 mr-2" />
              Group Sessions
            </Button>
          </div>
        </div>

        {/* Session Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-r from-mindlyfe-blue/10 to-mindlyfe-blue/5 border-mindlyfe-blue/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Upcoming Sessions</p>
                  <p className="text-2xl font-bold text-mindlyfe-blue">
                    {sessions.filter(s => s.status === 'upcoming').length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-mindlyfe-blue" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-mindlyfe-green/10 to-mindlyfe-green/5 border-mindlyfe-green/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed Sessions</p>
                  <p className="text-2xl font-bold text-mindlyfe-green">
                    {sessions.filter(s => s.status === 'completed').length}
                  </p>
                </div>
                <Video className="w-8 h-8 text-mindlyfe-green" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-100 to-purple-50 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Hours</p>
                  <p className="text-2xl font-bold text-purple-600">12.5</p>
                </div>
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Card className="mb-6">
          <CardContent className="p-0">
            <div className="flex border-b">
              {[
                { key: 'upcoming', label: 'Upcoming', count: sessions.filter(s => s.status === 'upcoming').length },
                { key: 'past', label: 'Past', count: sessions.filter(s => s.status === 'completed').length },
                { key: 'cancelled', label: 'Cancelled', count: sessions.filter(s => s.status === 'cancelled').length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 px-4 py-3 text-center font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'border-b-2 border-mindlyfe-blue text-mindlyfe-blue bg-mindlyfe-blue/5'
                      : 'text-gray-600 hover:text-mindlyfe-blue hover:bg-gray-50'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sessions List */}
        <div className="space-y-4">
          {filteredSessions.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No {activeTab} sessions
                </h3>
                <p className="text-gray-600 mb-4">
                  {activeTab === 'upcoming' 
                    ? "You don't have any upcoming sessions scheduled."
                    : activeTab === 'past'
                    ? "You haven't completed any sessions yet."
                    : "You don't have any cancelled sessions."
                  }
                </p>
                {activeTab === 'upcoming' && (
                  <Button
                    onClick={() => navigate('/teletherapy')}
                    className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                  >
                    Book Your First Session
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            filteredSessions.map((session) => (
              <Card key={session.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {session.therapist.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {session.therapist.title}
                            </p>
                          </div>
                          {getStatusBadge(session.status)}
                        </div>
                        
                        <div className="space-y-1 mb-3">
                          <p className="font-medium text-gray-900">{session.type}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {session.date}, {session.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {session.duration} minutes
                            </div>
                            <div className="flex items-center gap-1">
                              <Video className="w-4 h-4" />
                              {session.sessionType === 'video' ? 'Video' : 'Audio'} session
                            </div>
                          </div>
                        </div>
                        
                        {session.status === 'completed' && (
                          <div className="flex items-center gap-4 text-sm">
                            {session.hasNotes && (
                              <div className="flex items-center gap-1 text-mindlyfe-blue">
                                <FileText className="w-4 h-4" />
                                Notes available
                              </div>
                            )}
                            {session.hasRecording && (
                              <div className="flex items-center gap-1 text-mindlyfe-blue">
                                <Play className="w-4 h-4" />
                                Recording available
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 lg:flex-col lg:min-w-[120px]">
                      {session.status === 'upcoming' && (
                        <>
                          <Button
                            onClick={() => handleJoinSession(session.id)}
                            className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 flex-1 lg:flex-none"
                          >
                            Join
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleReschedule(session.id)}
                            className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10 flex-1 lg:flex-none"
                          >
                            Reschedule
                          </Button>
                        </>
                      )}
                      
                      {session.status === 'completed' && (
                        <>
                          {session.hasNotes && (
                            <Button
                              variant="outline"
                              onClick={() => handleViewNotes(session.id)}
                              className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10 flex-1 lg:flex-none"
                            >
                              View Notes
                            </Button>
                          )}
                          {session.hasRecording && (
                            <Button
                              variant="outline"
                              onClick={() => handleViewRecording(session.id)}
                              className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10 flex-1 lg:flex-none"
                            >
                              Recording
                            </Button>
                          )}
                        </>
                      )}
                      
                      {session.status === 'cancelled' && (
                        <Button
                          onClick={() => navigate('/teletherapy')}
                          className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 flex-1 lg:flex-none"
                        >
                          Book Again
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionHistory;
