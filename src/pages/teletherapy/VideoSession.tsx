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
  Clock,
  Users,
  Monitor,
  Volume2,
  MoreHorizontal,
  Hand,
  Captions,
  X,
  Pin
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
  const [showChat, setShowChat] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [showCaptions, setShowCaptions] = useState(false);
  const [participants, setParticipants] = useState(10);

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

  // Mock chat messages
  const [chatMessages] = useState([
    {
      id: '1',
      sender: 'David Green',
      message: 'Lorem ipsum dolor sit amet',
      time: '11:30 AM',
      color: 'text-blue-500'
    },
    {
      id: '2',
      sender: 'Cameron Williamson',
      message: 'New Design.png',
      time: '11:30 AM',
      isFile: true,
      fileSize: '350 KB'
    },
    {
      id: '3',
      sender: 'Jenny Wilson',
      message: "Here's the link: https://dribbble.com/shots/23621139-Reclaiming-Car-Finance-landing-page",
      time: '11:30 AM',
      color: 'text-blue-500'
    },
    {
      id: '4',
      sender: 'You',
      message: 'Thank You',
      time: '11:30 AM',
      isOwn: true
    }
  ]);

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

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Top Bar */}
        <div className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-mindlyfe-blue rounded-lg flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-white">Mindlyfe</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300">{participants} participants</span>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Monitor className="w-4 h-4 mr-2" />
              Share Link
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              Log Out
            </Button>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Join Request Notification */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gray-800 rounded-lg p-3 flex items-center gap-3 shadow-lg">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <span className="text-white">Request to join</span>
            <span className="font-medium text-white">Andrew Nelson</span>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 p-0">
              <X className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0">
              ✓
            </Button>
          </div>
        </div>

        {/* Pinned indicator */}
        <div className="absolute top-20 left-4 z-10">
          <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-2">
            <Pin className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-300">Pinned</span>
          </div>
        </div>

        {/* Main Video Feed */}
        <div className="flex-1 relative bg-gray-800">
          {/* Therapist Video - Main */}
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-mindlyfe-blue/20 to-mindlyfe-green/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/6f7987b1-68e2-4822-8bfc-3cc76ac06353.png" 
                    alt="Alex Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-1 absolute bottom-4 left-4">
                  <span className="text-white font-medium">Alex Chen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Participant Grid */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="grid grid-cols-4 gap-2">
              {/* Host */}
              <div className="relative">
                <div className="w-full h-24 bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">You</span>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5">Host</Badge>
                  </div>
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <div className="w-5 h-5 bg-gray-800/80 rounded-full flex items-center justify-center">
                      <Mic className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Other participants */}
              {[
                { name: 'Arlene McCoy', bg: 'bg-pink-500' },
                { name: 'Cody Fisher', bg: 'bg-blue-500' },
                { name: 'Cody Fisher', bg: 'bg-green-500' }
              ].map((participant, index) => (
                <div key={index} className="relative">
                  <div className={`w-full h-24 ${participant.bg} rounded-lg flex items-center justify-center relative`}>
                    <span className="text-white text-xs font-medium">{participant.name}</span>
                    <div className="absolute bottom-2 left-2 flex gap-1">
                      <div className="w-5 h-5 bg-gray-800/80 rounded-full flex items-center justify-center">
                        <Mic className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="bg-gray-800 border-t border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2"
              >
                <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                Stop Recording
              </Button>
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Mic className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleVideo}
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Video className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Volume2 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowChat(!showChat)}
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleEndSession}
                className="bg-red-600 hover:bg-red-700"
              >
                <Phone className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Monitor className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Volume2 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsHandRaised(!isHandRaised)}
                className={`text-gray-300 hover:text-white hover:bg-gray-700 ${isHandRaised ? 'bg-yellow-600' : ''}`}
              >
                <Hand className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCaptions(!showCaptions)}
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Captions className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Detail
              </Button>
            </div>
          </div>

          {/* Session time */}
          <div className="text-center mt-2">
            <span className="text-xs text-gray-400">
              Session time: {formatTime(sessionTime)}
            </span>
          </div>
        </div>
      </div>

      {/* Chat Sidebar */}
      {showChat && (
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <h3 className="font-semibold text-white">Chat</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowChat(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {chatMessages.map((msg) => (
              <div key={msg.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${msg.color || 'text-white'}`}>
                    {msg.sender}
                  </span>
                  <span className="text-xs text-gray-400">to</span>
                  <span className="text-xs text-blue-400">Everyone</span>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
                
                {msg.isFile ? (
                  <div className="bg-gray-700 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white">{msg.message}</div>
                      <div className="text-xs text-gray-400">{msg.fileSize}</div>
                    </div>
                  </div>
                ) : (
                  <div className={`text-sm ${msg.isOwn ? 'text-white' : 'text-gray-300'}`}>
                    {msg.message}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-400">To:</span>
              <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                Everyone ▼
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
              />
              <Button size="sm" className="text-gray-400">
                📎
              </Button>
              <Button size="sm" className="text-gray-400">
                😊
              </Button>
            </div>
          </div>
        </div>
      )}

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
