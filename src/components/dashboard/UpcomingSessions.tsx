
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Bot } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const UpcomingSessions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock data for therapists and Lyfbot
  const therapists = [
    {
      id: 'lyfbot',
      name: 'Lyfbot',
      type: 'AI Assistant',
      image: null,
      experience: 'AI',
      isBot: true,
      description: 'Your AI therapy companion, available 24/7'
    },
    {
      id: '1',
      name: 'Dr. Jae',
      type: 'Clinical Psychologist',
      image: '/lovable-uploads/e799fa0d-9c16-46bb-a217-f5bf44b1108b.png',
      experience: '10y',
      isBot: false,
      description: 'Specializes in anxiety and depression therapy'
    },
    {
      id: '2',
      name: 'Dr. Sarah Chen',
      type: 'Cognitive Behavioral Therapist',
      image: '/lovable-uploads/66c73288-a843-485b-bbc5-7187cb067e2d.png',
      experience: '8y',
      isBot: false,
      description: 'Expert in CBT and mindfulness techniques'
    },
    {
      id: '3',
      name: 'Dr. Michael Torres',
      type: 'Family Therapist',
      image: '/lovable-uploads/38bd34bd-c9d7-4514-ab53-0e15ddd50ff6.png',
      experience: '12y',
      isBot: false,
      description: 'Specializes in family and relationship counseling'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % therapists.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [therapists.length]);

  const currentTherapist = therapists[currentIndex];

  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <CardTitle className="text-sm font-medium text-gray-900">Recommended Therapy</CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + therapists.length) % therapists.length)}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-3 h-3 text-gray-600" />
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % therapists.length)}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-3 h-3 text-gray-600" />
            </button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              {currentTherapist.isBot && <Bot className="w-4 h-4 text-blue-500 animate-pulse" />}
              {currentTherapist.name}
            </h3>
            <p className="text-xs text-gray-500 mb-1">{currentTherapist.type}</p>
            <p className="text-sm text-gray-600 mb-4">
              {currentTherapist.description}
            </p>
          </div>
          
          <div className="relative">
            {currentTherapist.isBot ? (
              <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Bot className="w-12 h-12 text-white mx-auto mb-2 animate-bounce" />
                  <div className="text-white text-xs font-medium">AI Assistant</div>
                </div>
              </div>
            ) : (
              <img 
                src={currentTherapist.image}
                alt={currentTherapist.name}
                className="w-full h-32 object-cover rounded-lg"
              />
            )}
            <div className="absolute bottom-3 left-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
              {currentTherapist.isBot ? 'AI' : `Exp ${currentTherapist.experience}`}
            </div>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center gap-1 mb-4">
            {therapists.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
              <MessageCircle className="w-4 h-4" />
              {currentTherapist.isBot ? 'Chat with AI' : 'Message'}
            </button>
            {!currentTherapist.isBot && (
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                <Phone className="w-4 h-4" />
                Call
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingSessions;
