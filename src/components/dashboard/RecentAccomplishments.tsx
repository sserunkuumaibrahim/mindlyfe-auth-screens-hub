
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Calendar, Star, Award, CheckCircle } from 'lucide-react';

const RecentAccomplishments = () => {
  const accomplishments = [
    {
      id: 1,
      title: 'Completed morning reflection',
      description: 'Mindful start to your day',
      timestamp: '2 hours ago',
      type: 'mindfulness',
      icon: Star,
      points: 25
    },
    {
      id: 2,
      title: 'Session with Dr. Johnson',
      description: 'Therapy milestone reached',
      timestamp: '1 day ago',
      type: 'therapy',
      icon: Target,
      points: 50
    },
    {
      id: 3,
      title: '15-minute meditation',
      description: 'Daily goal completed',
      timestamp: '2 days ago',
      type: 'achievement',
      icon: Trophy,
      points: 30
    },
    {
      id: 4,
      title: 'Community support',
      description: 'Helped a fellow member',
      timestamp: '3 days ago',
      type: 'community',
      icon: Award,
      points: 15
    }
  ];

  const getAccomplishmentStyle = (type: string) => {
    switch (type) {
      case 'mindfulness': return {
        bg: 'bg-blue-50',
        icon: 'text-mindlyfe-blue',
        border: 'border-blue-200'
      };
      case 'therapy': return {
        bg: 'bg-green-50',
        icon: 'text-mindlyfe-green',
        border: 'border-green-200'
      };
      case 'achievement': return {
        bg: 'bg-amber-50',
        icon: 'text-amber-600',
        border: 'border-amber-200'
      };
      case 'community': return {
        bg: 'bg-purple-50',
        icon: 'text-purple-600',
        border: 'border-purple-200'
      };
      default: return {
        bg: 'bg-gray-50',
        icon: 'text-gray-600',
        border: 'border-gray-200'
      };
    }
  };

  return (
    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-lg flex items-center justify-center">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Recent Accomplishments</h3>
            <p className="text-sm text-gray-600">Your latest achievements</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {accomplishments.map((accomplishment) => {
            const IconComponent = accomplishment.icon;
            const style = getAccomplishmentStyle(accomplishment.type);
            return (
              <div 
                key={accomplishment.id}
                className={`p-4 rounded-xl ${style.bg} ${style.border} border hover:shadow-md transition-all duration-200 cursor-pointer group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center ${style.icon} shadow-sm group-hover:shadow-md transition-shadow`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{accomplishment.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{accomplishment.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs font-medium bg-white/80">
                        +{accomplishment.points}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-500">{accomplishment.timestamp}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAccomplishments;
