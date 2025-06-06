
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle, Phone, MessageCircle, Bot, Shield } from 'lucide-react';

const CrisisAssessment = () => {
  const navigate = useNavigate();
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

  const crisisResources = [
    {
      type: 'hotline',
      title: 'Crisis Hotline',
      subtitle: '988 Suicide & Crisis Lifeline',
      description: 'Free, confidential, 24/7 treatment referral service',
      action: 'Call Now',
      icon: Phone,
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      type: 'text',
      title: 'Crisis Text Line',
      subtitle: 'Text HOME to 741741',
      description: 'Free, 24/7 crisis support via text message',
      action: 'Text Now',
      icon: MessageCircle,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      type: 'chat',
      title: 'Talk to LyfBot',
      subtitle: 'Immediate AI support',
      description: 'Get immediate guidance and coping strategies',
      action: 'Start Chat',
      icon: Bot,
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const professionalHelp = [
    'Find Emergency Therapist',
    'Locate Crisis Center',
    'Contact My Therapist'
  ];

  const safetyPlanning = [
    'Create Safety Plan',
    'View My Safety Plan'
  ];

  const handleEmergencyCall = () => {
    window.location.href = 'tel:911';
  };

  const handleCrisisHotline = () => {
    window.location.href = 'tel:988';
  };

  const handleCrisisText = () => {
    window.location.href = 'sms:741741?body=HOME';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/mental-health/dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Crisis Assessment</h1>
        </div>

        {/* Emergency Banner */}
        <Card className="mb-6 bg-red-50 border-red-300">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-red-800 text-lg">If you're in immediate danger</p>
                <p className="text-red-700">Please call 911 or go to your nearest emergency room</p>
              </div>
            </div>
            <Button 
              onClick={handleEmergencyCall}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Services (911)
            </Button>
          </CardContent>
        </Card>

        {/* Quick Safety Check */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Quick Safety Check
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="font-medium text-gray-900 mb-4">
                Are you having thoughts of hurting yourself or others?
              </p>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => setSelectedResponse('yes')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedResponse === 'yes'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <span className="font-medium text-red-700">Yes</span>
                  <p className="text-sm text-red-600 mt-1">I am having thoughts of self-harm or harming others</p>
                </button>
                <button
                  onClick={() => setSelectedResponse('no')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedResponse === 'no'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <span className="font-medium text-green-700">No</span>
                  <p className="text-sm text-green-600 mt-1">I am not having thoughts of self-harm</p>
                </button>
                <button
                  onClick={() => setSelectedResponse('unsure')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedResponse === 'unsure'
                      ? 'border-yellow-500 bg-yellow-50'
                      : 'border-gray-200 hover:border-yellow-300'
                  }`}
                >
                  <span className="font-medium text-yellow-700">Not Sure</span>
                  <p className="text-sm text-yellow-600 mt-1">I'm experiencing difficult thoughts but not sure about harm</p>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Immediate Support */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Immediate Support</CardTitle>
            <p className="text-sm text-gray-600">Get help right now from trained professionals</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {crisisResources.map((resource, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <resource.icon className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                    <p className="font-medium text-gray-700">{resource.subtitle}</p>
                    <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                  </div>
                </div>
                <Button 
                  className={`w-full ${resource.color} text-white`}
                  onClick={() => {
                    if (resource.type === 'hotline') handleCrisisHotline();
                    else if (resource.type === 'text') handleCrisisText();
                    else if (resource.type === 'chat') navigate('/chat');
                  }}
                >
                  {resource.action}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Professional Help */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Professional Help</CardTitle>
            <p className="text-sm text-gray-600">Connect with mental health professionals</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {professionalHelp.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto p-4"
                onClick={() => {
                  if (option.includes('Therapist')) navigate('/teletherapy');
                  // Add other navigation logic as needed
                }}
              >
                {option}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Safety Planning */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Safety Planning
            </CardTitle>
            <p className="text-sm text-gray-600">Create a plan to keep yourself safe during difficult times</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {safetyPlanning.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto p-4 border-green-200 hover:bg-green-50"
              >
                {option}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Additional Resources Info */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <span className="font-medium">Remember:</span> You are not alone. Mental health crises are temporary, 
            and help is always available. These feelings can and will pass with proper support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrisisAssessment;
