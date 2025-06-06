
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const MeditationTracker = () => {
  const meditationDays = [
    { completed: true },
    { completed: true },
    { completed: false },
    { completed: true },
    { completed: true },
    { completed: true },
    { completed: false },
    { completed: true },
    { completed: true },
    { completed: true },
    { completed: true },
    { completed: false },
    { completed: true },
    { completed: true },
    { completed: true },
  ];

  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <div className="text-orange-600 text-lg">🧘</div>
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900">Meditation</CardTitle>
            </div>
          </div>
          <TrendingUp className="w-4 h-4 text-gray-400" />
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="grid grid-cols-5 gap-2 mb-4">
          {meditationDays.map((day, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                day.completed
                  ? 'bg-orange-500 text-white'
                  : 'bg-orange-100 text-orange-300'
              }`}
            >
              {day.completed ? '✓' : '○'}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">16</div>
            <div className="text-sm text-gray-500">Days meditated in March</div>
          </div>
          <TrendingUp className="w-4 h-4 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MeditationTracker;
