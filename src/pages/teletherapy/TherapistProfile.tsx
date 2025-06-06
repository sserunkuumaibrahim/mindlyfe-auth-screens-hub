
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Video, MessageCircle, Award, BookOpen, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';

const TherapistProfile = () => {
  const navigate = useNavigate();
  const { therapistId } = useParams();
  const { toast } = useToast();

  // Mock therapist data
  const therapist = {
    id: therapistId,
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Therapist',
    image: '/lovable-uploads/e799fa0d-9c16-46bb-a217-f5bf44b1108b.png',
    rating: 4.9,
    reviewCount: 127,
    yearsExperience: 12,
    sessionsCompleted: 1200,
    specialties: [
      'Anxiety & Panic Disorders',
      'Depression & Mood Disorders', 
      'Trauma & PTSD',
      'Cognitive Behavioral Therapy',
      'Mindfulness-Based Therapy'
    ],
    languages: ['English', 'Spanish'],
    education: [
      'PhD in Clinical Psychology - Stanford University',
      'Licensed Clinical Social Worker (LCSW)',
      'Certified CBT Therapist'
    ],
    approach: "I believe in creating a safe, non-judgmental space where clients can explore their thoughts and feelings. My approach combines evidence-based techniques with personalized care to help you achieve your mental health goals.",
    availability: {
      today: ['2:00 PM', '3:00 PM', '4:00 PM'],
      tomorrow: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      thisWeek: 12
    },
    aiMatchScore: 95,
    matchReasons: [
      'Specializes in your primary concern: Anxiety',
      'Uses your preferred therapy approach: CBT',
      'Available during your preferred times',
      'High success rate with similar cases'
    ]
  };

  const handleBookSession = () => {
    navigate(`/teletherapy/book/${therapist.id}`);
  };

  const handleSendMessage = () => {
    toast({
      title: "Message Sent",
      description: `Your message has been sent to ${therapist.name}. They'll respond within 24 hours.`
    });
  };

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
            Therapist Profile
          </h1>
        </div>

        <div className="space-y-6">
          {/* AI Recommendation Banner */}
          <Card className="border-mindlyfe-blue bg-gradient-to-r from-mindlyfe-blue/5 to-mindlyfe-green/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-mindlyfe-blue rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-mindlyfe-blue">
                    {therapist.aiMatchScore}% AI Match
                  </h3>
                  <p className="text-sm text-gray-600">
                    Highly recommended for your needs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Profile */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-full flex items-center justify-center">
                    <img 
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        {therapist.name}
                      </h2>
                      <p className="text-lg text-gray-600 mb-2">{therapist.title}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{therapist.rating}</span>
                          <span>({therapist.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4 text-mindlyfe-blue" />
                          <span>{therapist.yearsExperience} years experience</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-mindlyfe-green" />
                          <span>{therapist.sessionsCompleted}+ sessions</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-mindlyfe-green text-white">
                      MindLyfe Therapist
                    </Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleBookSession}
                      className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 flex-1"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Session
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleSendMessage}
                      className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10 flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Match Reasons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-mindlyfe-blue" />
                Why We Recommend Dr. Johnson
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {therapist.matchReasons.map((reason, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-mindlyfe-green rounded-full"></div>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-mindlyfe-blue" />
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Available Today</h4>
                  <div className="flex flex-wrap gap-2">
                    {therapist.availability.today.map((time) => (
                      <Badge key={time} variant="outline" className="border-mindlyfe-green text-mindlyfe-green">
                        {time}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Available Tomorrow</h4>
                  <div className="flex flex-wrap gap-2">
                    {therapist.availability.tomorrow.map((time) => (
                      <Badge key={time} variant="outline" className="border-mindlyfe-green text-mindlyfe-green">
                        {time}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-mindlyfe-blue/10 p-3 rounded-lg">
                  <p className="text-sm text-mindlyfe-blue">
                    <strong>{therapist.availability.thisWeek} slots</strong> available this week
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specialties */}
          <Card>
            <CardHeader>
              <CardTitle>Specialties & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {therapist.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="bg-mindlyfe-blue/10 text-mindlyfe-blue">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Approach */}
          <Card>
            <CardHeader>
              <CardTitle>Therapeutic Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{therapist.approach}</p>
            </CardContent>
          </Card>

          {/* Education & Credentials */}
          <Card>
            <CardHeader>
              <CardTitle>Education & Credentials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {therapist.education.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-mindlyfe-blue rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                {therapist.languages.map((language) => (
                  <Badge key={language} variant="outline" className="border-mindlyfe-blue text-mindlyfe-blue">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
