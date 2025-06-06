
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';

const UpcomingSessions = () => {
  const navigate = useNavigate();

  const upcomingSessions = [
    {
      id: 1,
      therapist: 'Dr. Sarah Johnson',
      specialty: 'Clinical Psychologist',
      date: 'Today',
      time: '2:00 PM',
      type: 'Video Session',
      status: 'confirmed'
    },
    {
      id: 2,
      therapist: 'Dr. Michael Chen',
      specialty: 'Anxiety Specialist',
      date: 'Tomorrow',
      time: '10:30 AM',
      type: 'Phone Session',
      status: 'confirmed'
    },
    {
      id: 3,
      therapist: 'Dr. Emily Rodriguez',
      specialty: 'Depression Therapy',
      date: 'Friday',
      time: '3:15 PM',
      type: 'Video Session',
      status: 'pending'
    }
  ];

  const handleJoinSession = (sessionId: number) => {
    navigate(`/teletherapy/session/${sessionId}`);
  };

  const handleMessageTherapist = (therapistId: number) => {
    navigate(`/teletherapy/profile/${therapistId}`);
  };

  const handleBookSession = () => {
    navigate('/teletherapy');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-mindlyfe-blue" />
          Upcoming Sessions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{session.therapist}</h4>
                  <p className="text-sm text-gray-600">{session.specialty}</p>
                </div>
                <Badge 
                  variant={session.status === 'confirmed' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {session.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {session.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {session.time}
                </div>
                <div className="flex items-center gap-1">
                  <Video className="w-4 h-4" />
                  {session.type}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleJoinSession(session.id)}
                  className="flex-1 bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                >
                  <Video className="w-4 h-4 mr-1" />
                  Join
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleMessageTherapist(session.id)}
                  className="flex-1"
                >
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Message
                </Button>
              </div>
            </div>
          ))}
          
          <Button 
            onClick={handleBookSession}
            variant="outline" 
            className="w-full mt-4"
          >
            Book New Session
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingSessions;
