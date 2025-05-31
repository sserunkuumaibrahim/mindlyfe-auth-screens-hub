
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Activity {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  icon: string;
}

interface RecentActivityProps {
  activities: Activity[];
  onViewAll: () => void;
}

const RecentActivity = ({ activities, onViewAll }: RecentActivityProps) => {
  const defaultActivities = [
    {
      id: '1',
      type: 'mood_check',
      title: 'Completed mood check',
      timestamp: '2 hours ago',
      icon: '😊'
    },
    {
      id: '2',
      type: 'meditation',
      title: '10 min meditation',
      timestamp: '4 hours ago',
      icon: '🧘'
    },
    {
      id: '3',
      type: 'journal',
      title: 'Journal entry written',
      timestamp: '1 day ago',
      icon: '📝'
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
          {displayActivities.slice(0, 3).map((activity) => (
            <div key={activity.id} className="flex items-center gap-3 py-2">
              <div className="text-lg">{activity.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                <div className="text-xs text-gray-500">{activity.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          onClick={onViewAll}
          className="w-full mt-4 text-primary hover:text-primary-dark"
        >
          View All
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
