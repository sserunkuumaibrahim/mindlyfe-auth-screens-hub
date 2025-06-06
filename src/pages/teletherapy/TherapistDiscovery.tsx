
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Calendar, Video, User, Filter } from 'lucide-react';
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
  pricePerSession: number;
  verified: boolean;
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
      nextAvailable: 'Today 3:00 PM',
      image: '/lovable-uploads/38bd34bd-c9d7-4514-ab53-0e15ddd50ff6.png',
      pricePerSession: 120,
      verified: true
    },
    {
      id: 'dr-michael-chen',
      name: 'Dr. Michael Chen',
      title: 'Licensed Marriage Therapist',
      rating: 4.8,
      reviewCount: 89,
      specialties: ['Couples Therapy', 'Family Counseling', 'Communication Skills'],
      nextAvailable: 'Tomorrow 10:00 AM',
      image: '/lovable-uploads/6580209e-3d77-49bd-a18c-113c6584755a.png',
      pricePerSession: 140,
      verified: true
    },
    {
      id: 'dr-emily-davis',
      name: 'Dr. Emily Davis',
      title: 'Licensed Clinical Social Worker',
      rating: 4.7,
      reviewCount: 156,
      specialties: ['PTSD & Trauma', 'Group Therapy', 'Mindfulness-Based Therapy'],
      nextAvailable: 'Today 5:00 PM',
      image: '/lovable-uploads/e799fa0d-9c16-46bb-a217-f5bf44b1108b.png',
      pricePerSession: 110,
      verified: true
    },
    {
      id: 'dr-james-williams',
      name: 'Dr. James Williams',
      title: 'Licensed Professional Counselor',
      rating: 4.6,
      reviewCount: 73,
      specialties: ['Addiction Recovery', 'Men\'s Mental Health', 'Career Counseling'],
      nextAvailable: 'Wednesday 2:00 PM',
      image: '/lovable-uploads/cf7924f0-358d-4fb0-92db-69a028877aed.png',
      pricePerSession: 100,
      verified: true
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

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Find Your Therapist
          </h1>
          <p className="text-gray-600">
            Connect with licensed mental health professionals
          </p>
        </div>

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
          {filteredTherapists.map((therapist) => (
            <Card key={therapist.id} className="hover:shadow-lg transition-shadow">
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
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-2">{therapist.title}</p>
                      
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{therapist.rating}</span>
                        <span className="text-gray-500">({therapist.reviewCount} reviews)</span>
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
                          <span className="text-gray-700">Next Available:</span>
                          <span className="font-medium text-mindlyfe-blue">
                            {therapist.nextAvailable}
                          </span>
                        </div>
                        <div className="text-gray-700">
                          ${therapist.pricePerSession}/session
                        </div>
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
                      Book Now
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
