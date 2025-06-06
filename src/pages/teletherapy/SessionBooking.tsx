
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Video, Mic, FileText, Star, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';

const SessionBooking = () => {
  const navigate = useNavigate();
  const { therapistId } = useParams();
  const { toast } = useToast();
  
  const [selectedSessionType, setSelectedSessionType] = useState('individual');
  const [selectedTime, setSelectedTime] = useState('');
  const [preferences, setPreferences] = useState({
    video: true,
    audio: false,
    recording: true,
    notes: true
  });

  // Mock therapist data
  const therapist = {
    id: therapistId,
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Therapist',
    rating: 4.9,
    reviewCount: 127,
    pricePerSession: 120,
    sessionDuration: 50
  };

  const sessionTypes = [
    { id: 'individual', label: 'Individual Therapy', price: 120 },
    { id: 'couples', label: 'Couples Therapy', price: 140 },
    { id: 'group', label: 'Group Therapy', price: 80 },
    { id: 'family', label: 'Family Therapy', price: 160 }
  ];

  const availableTimes = [
    {
      date: 'Today, Jan 15',
      slots: ['3:00 PM', '4:00 PM']
    },
    {
      date: 'Tomorrow, Jan 16', 
      slots: ['10:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
    },
    {
      date: 'Wednesday, Jan 17',
      slots: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM']
    }
  ];

  const handleBookSession = () => {
    if (!selectedTime) {
      toast({
        title: "Please select a time",
        description: "Choose an available time slot to proceed.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Session booked successfully!",
      description: `Your ${sessionTypes.find(t => t.id === selectedSessionType)?.label} with ${therapist.name} is confirmed.`
    });

    // Navigate to sessions page
    navigate('/teletherapy/sessions');
  };

  const selectedSessionTypeData = sessionTypes.find(t => t.id === selectedSessionType);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/teletherapy')}
            className="hover:bg-mindlyfe-blue/10"
          >
            <ArrowLeft className="w-5 h-5 text-mindlyfe-blue" />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Book Session
          </h1>
        </div>

        <div className="space-y-6">
          {/* Therapist Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{therapist.name}</h2>
                  <p className="text-gray-600">{therapist.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{therapist.rating}</span>
                    <span className="text-gray-500">({therapist.reviewCount} reviews)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    ${therapist.pricePerSession}/session • {therapist.sessionDuration} minutes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Session Type */}
          <Card>
            <CardHeader>
              <CardTitle>Session Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sessionTypes.map((type) => (
                <label
                  key={type.id}
                  className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="sessionType"
                      value={type.id}
                      checked={selectedSessionType === type.id}
                      onChange={(e) => setSelectedSessionType(e.target.value)}
                      className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                    />
                    <span className="font-medium">{type.label}</span>
                  </div>
                  <span className="text-mindlyfe-blue font-medium">${type.price}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Available Times */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-mindlyfe-blue" />
                Available Times
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableTimes.map((day) => (
                <div key={day.date}>
                  <h3 className="font-medium text-gray-900 mb-2">{day.date}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {day.slots.map((time) => (
                      <Button
                        key={`${day.date}-${time}`}
                        variant={selectedTime === `${day.date}-${time}` ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(`${day.date}-${time}`)}
                        className={
                          selectedTime === `${day.date}-${time}`
                            ? "bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                            : "border-gray-300 hover:bg-mindlyfe-blue/10"
                        }
                      >
                        <Clock className="w-4 h-4 mr-1" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Session Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Session Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.video}
                  onChange={(e) => setPreferences(prev => ({...prev, video: e.target.checked}))}
                  className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                />
                <Video className="w-5 h-5 text-mindlyfe-blue" />
                <span>Video session</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.audio}
                  onChange={(e) => setPreferences(prev => ({...prev, audio: e.target.checked}))}
                  className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                />
                <Mic className="w-5 h-5 text-mindlyfe-blue" />
                <span>Audio only</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.recording}
                  onChange={(e) => setPreferences(prev => ({...prev, recording: e.target.checked}))}
                  className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                />
                <Video className="w-5 h-5 text-mindlyfe-blue" />
                <span>Session recording</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.notes}
                  onChange={(e) => setPreferences(prev => ({...prev, notes: e.target.checked}))}
                  className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                />
                <FileText className="w-5 h-5 text-mindlyfe-blue" />
                <span>Follow-up notes</span>
              </label>
            </CardContent>
          </Card>

          {/* Booking Summary & Action */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {selectedSessionTypeData?.label} with {therapist.name}
                  </h3>
                  {selectedTime && (
                    <p className="text-gray-600">
                      {selectedTime.replace('-', ' at ')}
                    </p>
                  )}
                  <p className="text-2xl font-bold text-mindlyfe-blue mt-2">
                    ${selectedSessionTypeData?.price}
                  </p>
                </div>
                
                <Button
                  onClick={handleBookSession}
                  size="lg"
                  className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 w-full sm:w-auto"
                >
                  Book Session - ${selectedSessionTypeData?.price}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SessionBooking;
