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
  VolumeX,
  MoreHorizontal,
  Hand,
  Captions,
  X,
  Pin,
  Share,
  StopCircle,
  Camera,
  MonitorSpeaker,
  Maximize,
  Minimize,
  Grid3X3,
  UserPlus,
  Copy,
  Send
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Participant {
  id: string;
  name: string;
  role: 'host' | 'therapist' | 'participant';
  isAudioEnabled: boolean;
  isVideoEnabled: boolean;
  isHandRaised: boolean;
  isPresenting: boolean;
  avatarColor: string;
  isOnline: boolean;
}

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  time: string;
  isFile?: boolean;
  fileSize?: string;
  isOwn?: boolean;
  color?: string;
}

const VideoSession = () => {
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const { toast } = useToast();
  
  // Session controls
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [showCaptions, setShowCaptions] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<'speaker' | 'grid'>('speaker');
  
  // UI states
  const [sessionTime, setSessionTime] = useState(0);
  const [showChat, setShowChat] = useState(true);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [pinnedParticipant, setPinnedParticipant] = useState<string | null>('participant-1');
  const [volume, setVolume] = useState(100);
  const [isMobileView, setIsMobileView] = useState(false);

  // Mock data
  const [participants, setParticipants] = useState<Participant[]>([
    {
      id: 'host',
      name: 'You',
      role: 'host',
      isAudioEnabled: !isMuted,
      isVideoEnabled: isVideoOn,
      isHandRaised: isHandRaised,
      isPresenting: isScreenSharing,
      avatarColor: 'bg-blue-600',
      isOnline: true
    },
    {
      id: 'participant-1',
      name: 'Alex Chen',
      role: 'therapist',
      isAudioEnabled: true,
      isVideoEnabled: true,
      isHandRaised: false,
      isPresenting: false,
      avatarColor: 'bg-orange-500',
      isOnline: true
    },
    {
      id: 'participant-2',
      name: 'Arlene McCoy',
      role: 'participant',
      isAudioEnabled: true,
      isVideoEnabled: false,
      isHandRaised: false,
      isPresenting: false,
      avatarColor: 'bg-pink-500',
      isOnline: true
    },
    {
      id: 'participant-3',
      name: 'Cody Fisher',
      role: 'participant',
      isAudioEnabled: false,
      isVideoEnabled: true,
      isHandRaised: true,
      isPresenting: false,
      avatarColor: 'bg-blue-500',
      isOnline: true
    },
    {
      id: 'participant-4',
      name: 'Jenny Wilson',
      role: 'participant',
      isAudioEnabled: true,
      isVideoEnabled: true,
      isHandRaised: false,
      isPresenting: false,
      avatarColor: 'bg-green-500',
      isOnline: false
    }
  ]);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
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

  const [joinRequests] = useState([
    { id: '1', name: 'Andrew Nelson', avatar: '/lovable-uploads/6f7987b1-68e2-4822-8bfc-3cc76ac06353.png' }
  ]);

  // Session type detection
  const isGroupSession = participants.length > 2;

  // Responsive design
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setShowChat(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Session timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update participant states
  useEffect(() => {
    setParticipants(prev => prev.map(p => 
      p.id === 'host' 
        ? { ...p, isAudioEnabled: !isMuted, isVideoEnabled: isVideoOn, isHandRaised, isPresenting: isScreenSharing }
        : p
    ));
  }, [isMuted, isVideoOn, isHandRaised, isScreenSharing]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    toast({
      title: isScreenSharing ? "Screen Share Stopped" : "Screen Share Started",
      description: isScreenSharing ? "You stopped sharing your screen" : "You are now sharing your screen"
    });
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    toast({
      title: isRecording ? "Recording Stopped" : "Recording Started",
      description: isRecording ? "Session recording has been stopped" : "Session is now being recorded"
    });
  };

  const toggleHandRaise = () => {
    setIsHandRaised(!isHandRaised);
    toast({
      title: isHandRaised ? "Hand Lowered" : "Hand Raised",
      description: isHandRaised ? "Your hand has been lowered" : "Your hand is now raised"
    });
  };

  const handleEndSession = () => {
    toast({
      title: "Session Ended",
      description: "Your therapy session has been completed successfully."
    });
    navigate('/teletherapy/sessions');
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        sender: 'You',
        message: chatMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };
      setChatMessages(prev => [...prev, newMessage]);
      setChatMessage('');
      toast({
        title: "Message Sent",
        description: "Your message has been sent to the chat"
      });
    }
  };

  const handleAcceptJoinRequest = (requestId: string) => {
    toast({
      title: "Join Request Accepted",
      description: "Andrew Nelson has joined the session"
    });
  };

  const handleRejectJoinRequest = (requestId: string) => {
    toast({
      title: "Join Request Rejected",
      description: "Join request has been declined"
    });
  };

  const copySessionLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/teletherapy/session/${sessionId}`);
    toast({
      title: "Link Copied",
      description: "Session link has been copied to clipboard"
    });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const renderParticipantVideo = (participant: Participant, isMain = false) => (
    <div 
      key={participant.id}
      className={`relative ${isMain ? 'w-full h-full' : 'w-full h-24 md:h-32'} bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden group`}
    >
      {participant.isVideoEnabled && participant.id === 'participant-1' ? (
        <img 
          src="/lovable-uploads/6f7987b1-68e2-4822-8bfc-3cc76ac06353.png" 
          alt={participant.name} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`${isMain ? 'w-32 h-32' : 'w-12 h-12'} ${participant.avatarColor} rounded-lg flex items-center justify-center`}>
          <span className={`text-white ${isMain ? 'text-2xl' : 'text-sm'} font-medium`}>
            {participant.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      )}
      
      {/* Participant info overlay */}
      <div className="absolute bottom-2 left-2 flex items-center gap-2">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded px-2 py-1">
          <span className="text-white text-xs font-medium">{participant.name}</span>
        </div>
        {participant.role === 'therapist' && (
          <Badge className="bg-mindlyfe-blue text-white text-xs px-1 py-0">Therapist</Badge>
        )}
        {participant.role === 'host' && (
          <Badge className="bg-green-600 text-white text-xs px-1 py-0">Host</Badge>
        )}
      </div>

      {/* Status indicators */}
      <div className="absolute bottom-2 right-2 flex gap-1">
        {!participant.isAudioEnabled && (
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <MicOff className="w-3 h-3 text-white" />
          </div>
        )}
        {participant.isAudioEnabled && (
          <div className="w-6 h-6 bg-gray-800/80 rounded-full flex items-center justify-center">
            <Mic className="w-3 h-3 text-white" />
          </div>
        )}
        {participant.isHandRaised && (
          <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
            <Hand className="w-3 h-3 text-white" />
          </div>
        )}
        {participant.isPresenting && (
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <Monitor className="w-3 h-3 text-white" />
          </div>
        )}
      </div>

      {/* Pin button for main view */}
      {isMain && (
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 left-2 text-white hover:bg-gray-700/50"
          onClick={() => setPinnedParticipant(participant.id)}
        >
          <Pin className="w-4 h-4" />
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Top Bar */}
        <div className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 px-3 md:px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-mindlyfe-blue rounded-lg flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-white">Mindlyfe</span>
            {isMobileView && (
              <Badge className="bg-green-600 text-white text-xs">
                {isGroupSession ? 'Group Session' : '1-on-1 Session'}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300">{participants.filter(p => p.isOnline).length} participants</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-300 hover:text-white"
              onClick={copySessionLink}
            >
              <Share className="w-4 h-4 mr-2" />
              {!isMobileView && "Share Link"}
            </Button>
            {!isMobileView && (
              <>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  Dashboard
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  Log Out
                </Button>
              </>
            )}
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Join Request Notification */}
        {joinRequests.length > 0 && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
            {joinRequests.map(request => (
              <div key={request.id} className="bg-gray-800 rounded-lg p-3 flex items-center gap-3 shadow-lg mb-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <span className="text-white">Request to join</span>
                <span className="font-medium text-white">{request.name}</span>
                <Button 
                  size="sm" 
                  className="bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 p-0"
                  onClick={() => handleRejectJoinRequest(request.id)}
                >
                  <X className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0"
                  onClick={() => handleAcceptJoinRequest(request.id)}
                >
                  ✓
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Main Video Feed */}
        <div className="flex-1 relative bg-gray-800">
          {viewMode === 'speaker' ? (
            // Speaker View
            <div className="w-full h-full relative">
              {pinnedParticipant && renderParticipantVideo(
                participants.find(p => p.id === pinnedParticipant) || participants[1], 
                true
              )}
              
              {/* Participant Grid - Bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className={`grid gap-2 ${
                  isMobileView 
                    ? 'grid-cols-2' 
                    : participants.length <= 4 
                      ? 'grid-cols-4' 
                      : 'grid-cols-5'
                }`}>
                  {participants.slice(0, isMobileView ? 4 : 6).map(participant => 
                    renderParticipantVideo(participant)
                  )}
                </div>
              </div>
            </div>
          ) : (
            // Grid View
            <div className={`grid gap-4 p-4 h-full ${
              participants.length <= 2 
                ? 'grid-cols-1 md:grid-cols-2' 
                : participants.length <= 4 
                  ? 'grid-cols-2' 
                  : 'grid-cols-2 md:grid-cols-3'
            }`}>
              {participants.map(participant => (
                <div key={participant.id} className="h-full min-h-[200px]">
                  {renderParticipantVideo(participant, true)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Controls */}
        <div className="bg-gray-800 border-t border-gray-700 px-3 md:px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center gap-2">
              {isRecording ? (
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2"
                  onClick={toggleRecording}
                >
                  <StopCircle className="w-4 h-4 mr-2" />
                  {!isMobileView && "Stop Recording"}
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                  onClick={toggleRecording}
                >
                  <Camera className="w-4 h-4 mr-2" />
                  {!isMobileView && "Record"}
                </Button>
              )}
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className={`text-gray-300 hover:text-white hover:bg-gray-700 ${isMuted ? 'bg-red-600 text-white' : ''}`}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleVideo}
                className={`text-gray-300 hover:text-white hover:bg-gray-700 ${!isVideoOn ? 'bg-red-600 text-white' : ''}`}
              >
                {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {volume > 0 ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
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
                onClick={toggleScreenShare}
                className={`text-gray-300 hover:text-white hover:bg-gray-700 ${isScreenSharing ? 'bg-blue-600 text-white' : ''}`}
              >
                <Monitor className="w-5 h-5" />
              </Button>
              {!isMobileView && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode(viewMode === 'speaker' ? 'grid' : 'speaker')}
                    className="text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleFullscreen}
                    className="text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                  </Button>
                </>
              )}
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
                onClick={toggleHandRaise}
                className={`text-gray-300 hover:text-white hover:bg-gray-700 ${isHandRaised ? 'bg-yellow-600 text-white' : ''}`}
              >
                <Hand className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCaptions(!showCaptions)}
                className={`text-gray-300 hover:text-white hover:bg-gray-700 ${showCaptions ? 'bg-blue-600 text-white' : ''}`}
              >
                <Captions className="w-5 h-5" />
              </Button>
              {!isMobileView && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <Settings className="w-5 h-5" />
                </Button>
              )}
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
        <div className={`${isMobileView ? 'fixed inset-0 z-20' : 'w-80'} bg-gray-800 border-l border-gray-700 flex flex-col`}>
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
              <Button size="sm" className="text-gray-400 hover:text-white">
                📎
              </Button>
              <Button size="sm" className="text-gray-400 hover:text-white">
                😊
              </Button>
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={sendChatMessage}
              >
                <Send className="w-4 h-4" />
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

      {/* Captions Overlay */}
      {showCaptions && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/80 text-white p-3 rounded-lg max-w-md text-center">
          <p className="text-sm">Live captions will appear here during the session...</p>
        </div>
      )}
    </div>
  );
};

export default VideoSession;
