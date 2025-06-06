
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare, AlertTriangle, Heart, Shield, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const LyfBotCrisis = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    {
      name: '988 Suicide & Crisis Lifeline',
      description: '24/7 free and confidential support',
      phone: '988',
      textNumber: '741741',
      available: '24/7',
      type: 'hotline'
    },
    {
      name: 'Crisis Text Line',
      description: 'Text HOME to get support',
      phone: '741741',
      keyword: 'HOME',
      available: '24/7',
      type: 'text'
    },
    {
      name: 'Emergency Services',
      description: 'For immediate danger',
      phone: '911',
      available: '24/7',
      type: 'emergency'
    }
  ];

  const copingTools = [
    {
      icon: '🧘',
      title: 'Breathing Exercise',
      description: '4-7-8 breathing technique',
      action: 'start_breathing'
    },
    {
      icon: '🎵',
      title: 'Calming Sounds',
      description: 'Nature sounds and meditation music',
      action: 'play_sounds'
    },
    {
      icon: '📝',
      title: 'Safety Planning',
      description: 'Create or review your safety plan',
      action: 'safety_plan'
    },
    {
      icon: '🤝',
      title: 'Trusted Contacts',
      description: 'Call someone you trust',
      action: 'contact_support'
    }
  ];

  const handleEmergencyCall = (phone: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `tel:${phone}`;
    }
  };

  const handleTextCrisis = (number: string, keyword: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `sms:${number}?body=${keyword}`;
    }
  };

  const handleCopingTool = (action: string) => {
    console.log('Starting coping tool:', action);
    switch (action) {
      case 'start_breathing':
        // Navigate to breathing exercise
        break;
      case 'play_sounds':
        // Navigate to calming sounds
        break;
      case 'safety_plan':
        // Navigate to safety planning
        break;
      case 'contact_support':
        // Show trusted contacts
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/chat/lyfbot')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Crisis Support
            </h1>
            <p className="text-sm text-gray-600">Immediate help and resources</p>
          </div>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-700">
            <strong>If you're in immediate danger, please call 911</strong>
          </AlertDescription>
        </Alert>

        {/* Emergency Button */}
        <Card className="mb-6 border-red-200">
          <CardContent className="p-4">
            <Button
              onClick={() => handleEmergencyCall('911')}
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Emergency Services (911)
            </Button>
          </CardContent>
        </Card>

        {/* Crisis Support Options */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Immediate Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                    <p className="text-xs text-green-600">Available {contact.available}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {contact.type === 'text' ? (
                    <Button
                      onClick={() => handleTextCrisis(contact.phone, contact.keyword || '')}
                      size="sm"
                      className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Text {contact.keyword}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleEmergencyCall(contact.phone)}
                      size="sm"
                      className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call {contact.phone}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Professional Help */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              Professional Help
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={() => navigate('/teletherapy')}
              variant="outline"
              className="w-full justify-start"
            >
              <Users className="w-4 h-4 mr-2" />
              Find Emergency Therapist
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact My Therapist
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Locate Crisis Center
            </Button>
          </CardContent>
        </Card>

        {/* Immediate Coping Tools */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-green-500" />
              Immediate Coping Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {copingTools.map((tool, index) => (
                <Button
                  key={index}
                  onClick={() => handleCopingTool(tool.action)}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center text-center hover:bg-green-50 hover:border-green-200"
                >
                  <span className="text-2xl mb-2">{tool.icon}</span>
                  <span className="font-medium text-sm">{tool.title}</span>
                  <span className="text-xs text-gray-600 mt-1">{tool.description}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Planning */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-500" />
              Safety Planning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <FileText className="w-4 h-4 mr-2" />
              Create Safety Plan
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <FileText className="w-4 h-4 mr-2" />
              View My Safety Plan
            </Button>
          </CardContent>
        </Card>

        {/* Continue with LyfBot */}
        <Card>
          <CardContent className="p-4">
            <div className="text-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                🤖
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Continue with LyfBot</h3>
              <p className="text-sm text-gray-600 mb-4">
                I'll stay here with you. Let's talk through this together while you get professional support.
              </p>
            </div>
            
            <Button
              onClick={() => navigate('/chat/lyfbot')}
              className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Continue Conversation
            </Button>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            🔒 This conversation is confidential and secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default LyfBotCrisis;
