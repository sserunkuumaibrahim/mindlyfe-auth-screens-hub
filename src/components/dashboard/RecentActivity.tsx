
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, ChevronRight, Sparkles, Activity } from 'lucide-react';

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
      case 'achievement': return 'from-yellow-500 via-amber-500 to-orange-600';
      case 'community': return 'from-blue-500 via-blue-600 to-cyan-600';
      case 'analytics': return 'from-purple-500 via-purple-600 to-pink-600';
      case 'milestone': return 'from-green-500 via-green-600 to-emerald-600';
      default: return 'from-gray-500 via-gray-600 to-gray-700';
    }
  };

  const getActivityBackground = (type: string) => {
    switch (type) {
      case 'achievement': return 'from-yellow-50 to-amber-50 border-yellow-200';
      case 'community': return 'from-blue-50 to-cyan-50 border-blue-200';
      case 'analytics': return 'from-purple-50 to-pink-50 border-purple-200';
      case 'milestone': return 'from-green-50 to-emerald-50 border-green-200';
      default: return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  return (
    <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 pointer-events-none" />
      
      <CardHeader className="relative pb-6">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900">Recent Activity</div>
            <div className="text-sm font-medium text-gray-600">Your latest achievements</div>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative p-6 pt-0">
        <div className="space-y-4">
          {displayActivities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="group/activity relative cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent rounded-xl opacity-0 group-hover/activity:opacity-100 transition-opacity duration-300"></div>
              <div className={`relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${getActivityBackground(activity.type)} border hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}>
                <div className="relative">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getActivityColor(activity.type)} rounded-xl flex items-center justify-center shadow-lg group-hover/activity:shadow-xl transition-shadow duration-300`}>
                    <span className="text-xl">{activity.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-0 group-hover/activity:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-900 mb-1">{activity.title}</div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <div className="text-xs text-gray-600 font-medium">{activity.timestamp}</div>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover/activity:text-gray-600 group-hover/activity:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
