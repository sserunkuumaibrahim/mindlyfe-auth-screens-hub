
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProgressItem {
  id: string;
  title: string;
  completed: boolean;
  time?: string;
  icon: string;
}

interface TodayProgressProps {
  progressItems: ProgressItem[];
}

const TodayProgress = ({ progressItems }: TodayProgressProps) => {
  const defaultItems: ProgressItem[] = [
    {
      id: '1',
      title: 'Morning mood check',
      completed: true,
      icon: '✅'
    },
    {
      id: '2',
      title: 'Therapy session',
      completed: false,
      time: '3 PM',
      icon: '⏳'
    },
    {
      id: '3',
      title: 'Meditation',
      completed: false,
      time: '5 PM',
      icon: '⏳'
    },
    {
      id: '4',
      title: 'Evening reflection',
      completed: false,
      icon: '⏳'
    }
  ];

  const displayItems = progressItems.length > 0 ? progressItems : defaultItems;

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Today's Progress</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          {displayItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <div className="flex-1">
                <div className={`text-sm font-medium ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                  {item.title}
                </div>
                {item.time && (
                  <div className="text-xs text-primary">({item.time})</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodayProgress;
