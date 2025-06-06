
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MessageSquare, 
  FileText, 
  Hand,
  Users,
  Phone,
  Plus
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Participant {
  id: string;
  name: string;
  isHost: boolean;
  isMuted: boolean;
  hasVideo: boolean;
  handRaised: boolean;
}

const GroupSession = () => {
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const { toast } = useToast();
  
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: '1', sender: 'Dr. Johnson', message: 'Welcome everyone to our anxiety support group', isHost: true },
    { id: '2', sender: 'Alex', message: 'Thank you for hosting this session', isHost: false },
    { id: '3', sender: 'Sam', message: 'Happy to be here', isHost: false }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const participants: Participant[] = [
    { id: 'host', name: 'Dr. Johnson', isHost: true, isMuted: false, hasVideo: true, handRaised: false },
    { id: 'you', name: 'You', isHost: false, isMuted: isMuted, hasVideo: isVideoOn, handRaised: handRaised },
    { id: 'alex', name: 'Alex', isHost: false, isMuted: true, hasVideo: true, handRaised: false },
    { id: 'sam', name: 'Sam', isHost: false, isMuted: false, hasVideo: true, handRaised: true },
    { id: 'maya', name: 'Maya', isHost: false, isMuted: false, hasVideo: false, handRaised: false },
    { id: 'jordan', name: 'Jordan', isHost: false, isMuted: true, hasVideo: true, handRaised: false }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: 'You',
        message: newMessage,
        isHost: false
      }]);
      setNewMessage('');
    }
  };

  const handleRaiseHand = () => {
    setHandRaised(!handRaised);
    toast({
      title: handRaised ? "Hand Lowered" : "Hand Raised",
      description: handRaised ? "You lowered your hand" : "You raised your hand to speak"
    });
  };

  const handleCreateBreakout = () => {
    toast({
      title: "Breakout Room Created",
      description: "A new breakout room has been created for smaller group discussion."
    });
  };

  const handleLeaveSession = () => {
    toast({
      title: "Left Session",
      description: "You have left the group therapy session."
    });
    navigate('/teletherapy/sessions');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Group Therapy Session</span>
            <Badge className="bg-mindlyfe-blue text-white">
              Anxiety Support Group
            </Badge>
            <span className="text-sm text-gray-400">25:30</span>
          </div>
          
          <Button
            variant="destructive"
            onClick={handleLeaveSession}
            className="bg-red-600 hover:bg-red-700"
          >
            <Phone className="w-4 h-4 mr-2" />
            Leave
          </Button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Host Video */}
          <div className="h-64 bg-gray-800 relative border-b border-gray-700">
            <div className="absolute inset-4 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Dr. Johnson (Host)
                </h3>
                <p className="text-white/80 text-sm">Leading the discussion</p>
              </div>
            </div>
          </div>

          {/* Participants Grid */}
          <div className="flex-1 p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-mindlyfe-blue" />
                Participants ({participants.length}/8)
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {participants.slice(1).map((participant) => (
                <Card key={participant.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="relative">
                      <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                        {participant.hasVideo ? (
                          <div className="w-12 h-12 bg-mindlyfe-blue rounded-full flex items-center justify-center">
                            <Video className="w-6 h-6 text-white" />
                          </div>
                        ) : (
                          <VideoOff className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                      
                      {/* Status Indicators */}
                      <div className="absolute top-2 right-2 flex gap-1">
                        {participant.isMuted && (
                          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <MicOff className="w-3 h-3 text-white" />
                          </div>
                        )}
                        {participant.handRaised && (
                          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Hand className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="text-center">
                        <p className="text-white font-medium text-sm">
                          {participant.name}
                        </p>
                        {participant.id === 'you' && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            You
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Session Controls */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center justify-center gap-3">
                <Button
                  variant={isMuted ? "destructive" : "outline"}
                  size="lg"
                  onClick={() => setIsMuted(!isMuted)}
                  className={isMuted ? "bg-red-600 hover:bg-red-700" : "border-gray-600 hover:bg-gray-700"}
                >
                  {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </Button>
                
                <Button
                  variant={!isVideoOn ? "destructive" : "outline"}
                  size="lg"
                  onClick={() => setIsVideoOn(!isVideoOn)}
                  className={!isVideoOn ? "bg-red-600 hover:bg-red-700" : "border-gray-600 hover:bg-gray-700"}
                >
                  {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </Button>
                
                <Button
                  variant={handRaised ? "default" : "outline"}
                  size="lg"
                  onClick={handleRaiseHand}
                  className={handRaised ? "bg-yellow-500 hover:bg-yellow-600" : "border-gray-600 hover:bg-gray-700"}
                >
                  <Hand className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex justify-center gap-3 mt-4">
                <Button
                  onClick={handleCreateBreakout}
                  className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Breakout Room
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-medium text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-mindlyfe-blue" />
              Group Chat
            </h3>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {chatMessages.map((msg) => (
              <div key={msg.id} className="text-sm">
                <span className={`font-medium ${msg.isHost ? 'text-mindlyfe-blue' : 'text-mindlyfe-green'}`}>
                  {msg.sender}:
                </span>
                <p className="text-gray-300 mt-1">{msg.message}</p>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type message..."
                className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
              />
              <Button 
                onClick={handleSendMessage}
                size="sm" 
                className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSession;
