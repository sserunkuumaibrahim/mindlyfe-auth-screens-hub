
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle } from 'lucide-react';

const UpcomingSessions = () => {
  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <CardTitle className="text-sm font-medium text-gray-900">Therapy</CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact doctor</h3>
            <p className="text-sm text-gray-600 mb-4">
              Dr. Jae is online - message or book your session.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/e799fa0d-9c16-46bb-a217-f5bf44b1108b.png"
              alt="Dr. Jae"
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="absolute bottom-3 left-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
              Exp 10y
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
              <MessageCircle className="w-4 h-4" />
              Message
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4" />
              Call
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingSessions;
