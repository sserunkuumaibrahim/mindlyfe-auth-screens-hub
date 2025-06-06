
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Calendar, Video, User, Filter, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

interface Therapist {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  nextAvailable: string;
  image: string;
  verified: boolean;
  aiMatchScore: number;
  yearsExperience: number;
  isRecommended: boolean;
  availableToday: boolean;
}

const TherapistDiscovery = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    'Anxiety', 'Depression', 'PTSD', 'Trauma', 'Relationships', 
    'Couples', 'Family', 'Addiction', 'ADHD', 'Bipolar'
  ];

  const therapists: Therapist[] = [
    {
      id: 'dr-sarah-johnson',
      name: 'Dr. Sarah Johnson',
      title: 'Licensed Clinical Therapist',
      rating: 4.9,
      reviewCount: 127,
      specialties: ['Anxiety & Depression', 'Cognitive Behavioral', 'Trauma-Informed Care'],
      nextAvailable: 'Available today',
      image: '/lovable-uploads/38bd34bd-c9d7-4514-ab53-0e15ddd50ff6.png',
      verified: true,
      aiMatchScore: 95,
      yearsExperience: 12,
      isRecommended: true,
      availableToday: true
    },
    {
      id: 'dr-michael-chen',
      name: 'Dr. Michael Chen',
      title: 'Licensed Marriage Therapist',
      rating: 4.8,
      reviewCount: 89,
      specialties: ['Couples Therapy', 'Family Counseling', 'Communication Skills'],
      nextAvailable: 'Available tomorrow',
      image: '/lovable-uploads/6580209e-3d77-49bd-a18c-113c6584755a.png',
      verified: true,
      aiMatchScore: 88,
      yearsExperience: 10,
      isRecommended: true,
      availableToday: false
    },
    {
      id: 'dr-emily-davis',
      name: 'Dr. Emily Davis',
      title: 'Licensed Clinical Social Worker',
      rating: 4.7,
      reviewCount: 156,
      specialties: ['PTSD & Trauma', 'Group Therapy', 'Mindfulness-Based Therapy'],
      nextAvailable: 'Available today',
      image: '/lovable-uploads/e799fa0d-9c16-46bb-a217-f5bf44b1108b.png',
      verified: true,
      aiMatchScore: 92,
      yearsExperience: 8,
      isRecommended: true,
      availableToday: true
    },
    {
      id: 'dr-james-williams',
      name: 'Dr. James Williams',
      title: 'Licensed Professional Counselor',
      rating: 4.6,
      reviewCount: 73,
      specialties: ['Addiction Recovery', 'Men\'s Mental Health', 'Career Counseling'],
      nextAvailable: 'Available Wednesday',
      image: '/lovable-uploads/cf7924f0-358d-4fb0-92db-69a028877aed.png',
      verified: true,
      aiMatchScore: 85,
      yearsExperience: 15,
      isRecommended: false,
      availableToday: false
    }
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilters = selectedFilters.length === 0 || 
                          selectedFilters.some(filter => 
                            therapist.specialties.some(s => s.toLowerCase().includes(filter.toLowerCase()))
                          );
    
    return matchesSearch && matchesFilters;
  });

  // Sort by AI recommendation and availability
  const sortedTherapists = filteredTherapists.sort((a, b) => {
    if (a.isRecommended && !b.isRecommended) return -1;
    if (!a.isRecommended && b.isRecommended) return 1;
    if (a.availableToday && !b.availableToday) return -1;
    if (!a.availableToday && b.availableToday) return 1;
    return b.aiMatchScore - a.aiMatchScore;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Your Recommended Therapists
          </h1>
          <p className="text-gray-600">
            AI-powered recommendations based on your needs and preferences
          </p>
        </div>

        {/* AI Insights Banner */}
        <Card className="mb-6 border-mindlyfe-blue bg-gradient-to-r from-mindlyfe-blue/5 to-mindlyfe-green/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mindlyfe-blue rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-mindlyfe-blue">
                  Personalized for You
                </h3>
                <p className="text-sm text-gray-600">
                  Based on your assessment, we recommend specialists in anxiety and depression therapy
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search therapists by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Filter className="w-5 h-5 text-mindlyfe-blue" />
              Specialties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilters.includes(filter) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(filter)}
                  className={selectedFilters.includes(filter) 
                    ? "bg-mindlyfe-blue hover:bg-mindlyfe-blue/90" 
                    : "border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Therapist List */}
        <div className="space-y-4">
          {sortedTherapists.map((therapist) => (
            <Card key={therapist.id} className={`hover:shadow-lg transition-shadow ${
              therapist.isRecommended ? 'ring-2 ring-mindlyfe-blue/20' : ''
            }`}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Therapist Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {therapist.name}
                        </h3>
                        {therapist.verified && (
                          <Badge className="bg-mindlyfe-green text-white">
                            MindLyfe Therapist
                          </Badge>
                        )}
                        {therapist.isRecommended && (
                          <Badge className="bg-mindlyfe-blue text-white">
                            <Award className="w-3 h-3 mr-1" />
                            AI Recommended
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-2">{therapist.title}</p>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{therapist.rating}</span>
                          <span className="text-gray-500">({therapist.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-mindlyfe-blue" />
                          <span className="text-gray-700">{therapist.yearsExperience} years exp.</span>
                        </div>
                        {therapist.isRecommended && (
                          <Badge variant="secondary" className="bg-mindlyfe-blue/10 text-mindlyfe-blue">
                            {therapist.aiMatchScore}% Match
                          </Badge>
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Specialties:</p>
                        <div className="flex flex-wrap gap-1">
                          {therapist.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-mindlyfe-blue" />
                          <span className={`font-medium ${
                            therapist.availableToday ? 'text-mindlyfe-green' : 'text-mindlyfe-blue'
                          }`}>
                            {therapist.nextAvailable}
                          </span>
                        </div>
                        {therapist.availableToday && (
                          <Badge variant="outline" className="border-mindlyfe-green text-mindlyfe-green">
                            Available Today
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 md:flex-col">
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/teletherapy/profile/${therapist.id}`)}
                      className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
                    >
                      View Profile
                    </Button>
                    <Button
                      onClick={() => navigate(`/teletherapy/book/${therapist.id}`)}
                      className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                    >
                      Book Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTherapists.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-gray-500">
              No therapists found matching your criteria. Try adjusting your filters.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TherapistDiscovery;
