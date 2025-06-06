
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const MoodTracker = () => {
  const sleepData = [
    { day: 'Mon', hours: 7.2 },
    { day: 'Tue', hours: 8.1 },
    { day: 'Wed', hours: 6.8 },
    { day: 'Thu', hours: 7.9 },
    { day: 'Fri', hours: 8.5 },
    { day: 'Sat', hours: 7.3 },
    { day: 'Sun', hours: 8.2 },
  ];

  const maxHours = Math.max(...sleepData.map(d => d.hours));

  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <div className="text-cyan-600 text-lg">😴</div>
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900">Sleep level</CardTitle>
            </div>
          </div>
          <TrendingUp className="w-4 h-4 text-gray-400" />
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-end gap-2 h-20 mb-4">
          {sleepData.map((item, index) => (
            <div key={item.day} className="flex-1 flex flex-col items-center gap-1">
              <div 
                className="w-full bg-cyan-200 rounded-sm transition-all duration-500"
                style={{ height: `${(item.hours / maxHours) * 60}px` }}
              />
              <span className="text-xs text-gray-500">{item.day}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">8h</div>
            <div className="text-sm text-gray-500">Average sleep duration in March</div>
          </div>
          <TrendingUp className="w-4 h-4 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
