
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      title: 'Earned "Mindful Week"',
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
      title: 'Weekly report ready',
      timestamp: '1 day ago',
      icon: '📊'
    },
    {
      id: '4',
      type: 'milestone',
      title: 'Goal milestone reached',
      timestamp: '1 day ago',
      icon: '🎯'
    }
  ];

  const displayActivities = activities.length > 0 ? activities : defaultActivities;

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          {displayActivities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3 py-2">
              <div className="text-lg">{activity.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                <div className="text-xs text-gray-500">{activity.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
