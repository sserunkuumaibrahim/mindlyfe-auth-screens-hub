
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MessageSquare, 
  FileText, 
  Settings, 
  Phone,
  Shield,
  Clock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const VideoSession = () => {
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const { toast } = useToast();
  
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [sessionTime, setSessionTime] = useState(0);
  const [notes, setNotes] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // Mock session data
  const session = {
    id: sessionId,
    therapist: {
      name: 'Dr. Sarah Johnson',
      title: 'Licensed Clinical Therapist'
    },
    type: 'Individual Therapy',
    duration: 50 * 60, // 50 minutes in seconds
    startTime: new Date().toISOString()
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins}:00`;
  };

  const handleEndSession = () => {
    toast({
      title: "Session Ended",
      description: "Your therapy session has been completed successfully."
    });
    navigate('/teletherapy/sessions');
  };

  const handleSaveNotes = () => {
    toast({
      title: "Notes Saved",
      description: "Your session notes have been saved securely."
    });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    toast({
      title: isMuted ? "Microphone On" : "Microphone Off",
      description: isMuted ? "You are now unmuted" : "You are now muted"
    });
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    toast({
      title: isVideoOn ? "Camera Off" : "Camera On", 
      description: isVideoOn ? "Your camera is now off" : "Your camera is now on"
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Session with {session.therapist.name}</span>
            <Badge className="bg-mindlyfe-blue text-white">
              {session.type}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>{formatTime(sessionTime)} / {formatDuration(session.duration)}</span>
            </div>
            
            <Button
              variant="destructive"
              onClick={handleEndSession}
              className="bg-red-600 hover:bg-red-700"
            >
              <Phone className="w-4 h-4 mr-2" />
              End Session
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Therapist Video */}
          <div className="flex-1 bg-gray-800 relative">
            <div className="absolute inset-4 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {session.therapist.name}
                </h3>
                <p className="text-white/80">{session.therapist.title}</p>
              </div>
            </div>
            
            {/* Video Quality Indicator */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-600 text-white">
                HD Quality
              </Badge>
            </div>
          </div>

          {/* User Video */}
          <div className="h-48 bg-gray-700 relative border-t border-gray-600">
            <div className="absolute inset-4 bg-gray-600 rounded-lg flex items-center justify-center">
              {isVideoOn ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-mindlyfe-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Your Video</p>
                </div>
              ) : (
                <div className="text-center">
                  <VideoOff className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Camera Off</p>
                </div>
              )}
            </div>
          </div>

          {/* Session Controls */}
          <div className="bg-gray-800 p-4 border-t border-gray-700">
            <div className="flex items-center justify-center gap-3">
              <Button
                variant={isMuted ? "destructive" : "outline"}
                size="lg"
                onClick={toggleMute}
                className={isMuted ? "bg-red-600 hover:bg-red-700" : "border-gray-600 hover:bg-gray-700"}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>
              
              <Button
                variant={!isVideoOn ? "destructive" : "outline"}
                size="lg"
                onClick={toggleVideo}
                className={!isVideoOn ? "bg-red-600 hover:bg-red-700" : "border-gray-600 hover:bg-gray-700"}
              >
                {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowChat(!showChat)}
                className="border-gray-600 hover:bg-gray-700"
              >
                <MessageSquare className="w-5 h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowNotes(!showNotes)}
                className="border-gray-600 hover:bg-gray-700"
              >
                <FileText className="w-5 h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 hover:bg-gray-700"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        {(showNotes || showChat) && (
          <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            {/* Panel Header */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex gap-2">
                <Button
                  variant={showNotes ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {setShowNotes(true); setShowChat(false);}}
                  className={showNotes ? "bg-mindlyfe-blue" : "text-gray-400"}
                >
                  Notes
                </Button>
                <Button
                  variant={showChat ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {setShowChat(true); setShowNotes(false);}}
                  className={showChat ? "bg-mindlyfe-blue" : "text-gray-400"}
                >
                  Chat
                </Button>
              </div>
            </div>

            {/* Panel Content */}
            <div className="flex-1 p-4">
              {showNotes && (
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Session Notes (Private)</h3>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Today we discussed..."
                    className="w-full h-64 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                  />
                  <Button
                    onClick={handleSaveNotes}
                    className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                  >
                    Save Notes
                  </Button>
                </div>
              )}

              {showChat && (
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Session Chat</h3>
                  <div className="h-64 bg-gray-700 rounded-lg p-3 space-y-2 overflow-y-auto">
                    <div className="text-sm">
                      <span className="text-mindlyfe-blue font-medium">Dr. Johnson:</span>
                      <span className="text-gray-300 ml-2">How are you feeling today?</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-mindlyfe-green font-medium">You:</span>
                      <span className="text-gray-300 ml-2">I'm doing better, thank you.</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                    />
                    <Button size="sm" className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
                      Send
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Security Notice */}
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Shield className="w-4 h-4" />
          <span>Secure & HIPAA Compliant</span>
        </div>
      </div>
    </div>
  );
};

export default VideoSession;
