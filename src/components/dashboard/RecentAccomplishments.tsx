
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Calendar, Star } from 'lucide-react';

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
      title: '15-minute mindfulness',
      description: 'Daily meditation completed',
      timestamp: '2 days ago',
      type: 'achievement',
      icon: Trophy,
      points: 30
    },
    {
      id: 4,
      title: 'Posted in support group',
      description: 'Community engagement',
      timestamp: '3 days ago',
      type: 'community',
      icon: Calendar,
      points: 15
    }
  ];

  const getAccomplishmentColor = (type: string) => {
    switch (type) {
      case 'mindfulness': return 'from-mindlyfe-blue/20 to-mindlyfe-blue/10 border-mindlyfe-blue/30';
      case 'therapy': return 'from-mindlyfe-green/20 to-mindlyfe-green/10 border-mindlyfe-green/30';
      case 'achievement': return 'from-amber-50 to-yellow-50 border-amber-200';
      case 'community': return 'from-purple-50 to-indigo-50 border-purple-200';
      default: return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'mindfulness': return 'text-mindlyfe-blue';
      case 'therapy': return 'text-mindlyfe-green';
      case 'achievement': return 'text-amber-600';
      case 'community': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-mindlyfe-blue/5 via-transparent to-mindlyfe-green/5" />
      
      <CardHeader className="relative pb-4">
        <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-lg flex items-center justify-center">
            <Trophy className="w-4 h-4 text-white" />
          </div>
          Recent Accomplishments
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative space-y-3">
        {accomplishments.map((accomplishment) => {
          const IconComponent = accomplishment.icon;
          return (
            <div 
              key={accomplishment.id}
              className={`p-4 rounded-xl bg-gradient-to-r ${getAccomplishmentColor(accomplishment.type)} border hover:scale-[1.02] transition-all duration-200 cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center ${getIconColor(accomplishment.type)}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{accomplishment.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{accomplishment.description}</p>
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      +{accomplishment.points}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{accomplishment.timestamp}</div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RecentAccomplishments;
