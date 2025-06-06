
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, ChevronRight } from 'lucide-react';

interface Activity {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  icon: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  const defaultActivities = [
    {
      id: '1',
      type: 'achievement',
      title: 'Earned "Mindful Week" badge',
      timestamp: '2 hours ago',
      icon: '🏆'
    },
    {
      id: '2',
      type: 'community',
      title: '3 new community replies',
      timestamp: '4 hours ago',
      icon: '💬'
    },
    {
      id: '3',
      type: 'analytics',
      title: 'Weekly wellness report ready',
      timestamp: '1 day ago',
      icon: '📊'
    },
    {
      id: '4',
      type: 'milestone',
      title: 'Meditation goal milestone reached',
      timestamp: '1 day ago',
      icon: '🎯'
    }
  ];

  const displayActivities = activities.length > 0 ? activities : defaultActivities;

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'achievement': return 'from-yellow-400 to-orange-500';
      case 'community': return 'from-blue-400 to-cyan-500';
      case 'analytics': return 'from-purple-400 to-pink-500';
      case 'milestone': return 'from-green-400 to-emerald-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-md flex items-center justify-center">
            <Clock className="w-4 h-4 text-white" />
          </div>
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="space-y-3">
          {displayActivities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${getActivityColor(activity.type)} rounded-lg flex items-center justify-center shadow-md`}>
                <span className="text-lg">{activity.icon}</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">{activity.title}</div>
                <div className="text-xs text-gray-500 mt-1">{activity.timestamp}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
