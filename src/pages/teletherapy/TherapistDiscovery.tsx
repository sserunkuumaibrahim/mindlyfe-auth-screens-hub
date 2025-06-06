import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, Calendar, Clock, Video, Users, FileText, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';

interface Therapist {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  reviews: number;
  availability: string;
  profilePic: string;
}

const mockTherapists: Therapist[] = [
  {
    id: 'therapist-1',
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Psychologist',
    specialties: ['Anxiety', 'Depression', 'Stress Management'],
    rating: 4.8,
    reviews: 120,
    availability: 'Mon-Fri, 9 AM - 5 PM',
    profilePic: '/lovable-uploads/therapist1.jpg'
  },
  {
    id: 'therapist-2',
    name: 'Dr. Michael Chen',
    title: 'Licensed Marriage and Family Therapist',
    specialties: ['Relationship Issues', 'Family Conflict', 'Couples Therapy'],
    rating: 4.5,
    reviews: 95,
    availability: 'Tue-Sat, 10 AM - 6 PM',
    profilePic: '/lovable-uploads/therapist2.jpg'
  },
  {
    id: 'therapist-3',
    name: 'Dr. Emily Davis',
    title: 'Licensed Clinical Social Worker',
    specialties: ['Trauma', 'PTSD', 'Grief'],
    rating: 4.9,
    reviews: 150,
    availability: 'Mon-Fri, 1 PM - 9 PM',
    profilePic: '/lovable-uploads/therapist3.jpg'
  },
  {
    id: 'therapist-4',
    name: 'Dr. James Williams',
    title: 'Licensed Professional Counselor',
    specialties: ['Addiction', 'Substance Abuse', 'Recovery'],
    rating: 4.6,
    reviews: 110,
    availability: 'Wed-Sun, 10 AM - 7 PM',
    profilePic: '/lovable-uploads/therapist4.jpg'
  },
  {
    id: 'therapist-5',
    name: 'Dr. Jessica Brown',
    title: 'Licensed Mental Health Counselor',
    specialties: ['Self-Esteem', 'Personal Growth', 'Life Transitions'],
    rating: 4.7,
    reviews: 130,
    availability: 'Mon-Fri, 8 AM - 4 PM',
    profilePic: '/lovable-uploads/therapist5.jpg'
  }
];

const specialtiesList = ['Anxiety', 'Depression', 'Stress Management', 'Relationship Issues', 'Family Conflict', 'Couples Therapy', 'Trauma', 'PTSD', 'Grief', 'Addiction', 'Substance Abuse', 'Recovery', 'Self-Esteem', 'Personal Growth', 'Life Transitions'];

const TherapistDiscovery = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  const filteredTherapists = mockTherapists.filter(therapist => {
    const searchMatch = therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        therapist.title.toLowerCase().includes(searchQuery.toLowerCase());

    const specialtyMatch = selectedSpecialties.length === 0 ||
                           therapist.specialties.some(specialty => selectedSpecialties.includes(specialty));

    const availabilityMatch = availabilityFilter === 'all' ||
                              therapist.availability.toLowerCase().includes(availabilityFilter.toLowerCase());

    return searchMatch && specialtyMatch && availabilityMatch;
  });

  const handleSpecialtyFilter = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header with Navigation */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Find Your Therapist
            </h1>
            <p className="text-gray-600">
              Connect with licensed professionals who understand your needs
            </p>
          </div>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => navigate('/teletherapy/sessions')}
              className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
            >
              <History className="w-4 h-4 mr-2" />
              My Sessions
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/teletherapy/treatment/current')}
              className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10"
            >
              <FileText className="w-4 h-4 mr-2" />
              Treatment Plan
            </Button>
          </div>
        </div>

        {/* AI Recommendations Banner */}
        <Card className="mb-6 bg-gradient-to-r from-mindlyfe-blue/10 to-mindlyfe-green/10 border-mindlyfe-blue/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mindlyfe-blue rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI-Powered Recommendations</h3>
                <p className="text-sm text-gray-600">
                  Based on your preferences and needs, we've curated the best matches for you
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Search */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Search Bar */}
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for therapists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border rounded-lg focus:ring-mindlyfe-blue focus:border-mindlyfe-blue"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Filter Button */}
          <Button
            variant="outline"
            className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
          >
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {/* Specialties Filter */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter by Specialties</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {specialtiesList.map(specialty => (
              <Button
                key={specialty}
                variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
                onClick={() => handleSpecialtyFilter(specialty)}
                className={selectedSpecialties.includes(specialty) ? "bg-mindlyfe-blue text-white" : "border-gray-300 text-gray-700"}
              >
                {specialty}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Availability Filter */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter by Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Button
                variant={availabilityFilter === 'all' ? "default" : "outline"}
                onClick={() => setAvailabilityFilter('all')}
                className={availabilityFilter === 'all' ? "bg-mindlyfe-blue text-white" : "border-gray-300 text-gray-700"}
              >
                Any
              </Button>
              <Button
                variant={availabilityFilter === 'weekdays' ? "default" : "outline"}
                onClick={() => setAvailabilityFilter('weekdays')}
                className={availabilityFilter === 'weekdays' ? "bg-mindlyfe-blue text-white" : "border-gray-300 text-gray-700"}
              >
                Weekdays
              </Button>
              <Button
                variant={availabilityFilter === 'weekends' ? "default" : "outline"}
                onClick={() => setAvailabilityFilter('weekends')}
                className={availabilityFilter === 'weekends' ? "bg-mindlyfe-blue text-white" : "border-gray-300 text-gray-700"}
              >
                Weekends
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Therapist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTherapists.map(therapist => (
            <Card key={therapist.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={therapist.profilePic}
                  alt={therapist.name}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <CardTitle className="text-lg font-semibold">{therapist.name}</CardTitle>
                <p className="text-gray-600">{therapist.title}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{therapist.rating} ({therapist.reviews} reviews)</span>
                </div>
                <div className="mb-3">
                  {therapist.specialties.map(specialty => (
                    <Badge key={specialty} className="mr-1">{specialty}</Badge>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Availability: {therapist.availability}
                </p>
                <Button
                  onClick={() => navigate(`/teletherapy/profile/${therapist.id}`)}
                  className="w-full mt-4 bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapistDiscovery;
