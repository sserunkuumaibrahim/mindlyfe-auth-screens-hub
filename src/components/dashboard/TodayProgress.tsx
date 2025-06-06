
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Circle } from 'lucide-react';

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
      icon: '😊'
    },
    {
      id: '2',
      title: 'Therapy session',
      completed: false,
      time: '3 PM',
      icon: '🩺'
    },
    {
      id: '3',
      title: 'Meditation',
      completed: false,
      time: '5 PM',
      icon: '🧘'
    },
    {
      id: '4',
      title: 'Evening reflection',
      completed: false,
      icon: '✨'
    }
  ];

  const displayItems = progressItems.length > 0 ? progressItems : defaultItems;
  const completedCount = displayItems.filter(item => item.completed).length;
  const progressPercentage = (completedCount / displayItems.length) * 100;

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-md flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            Today's Progress
          </CardTitle>
          <div className="text-sm font-semibold text-gray-600">
            {completedCount}/{displayItems.length}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <div 
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          {displayItems.map((item, index) => (
            <div 
              key={item.id} 
              className="flex items-center gap-4 p-3 rounded-xl bg-white/50 border border-white/20 hover:bg-white/70 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                {item.completed ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </div>
              <div className="flex-1">
                <div className={`text-sm font-medium ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                  {item.title}
                </div>
                {item.time && !item.completed && (
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary font-medium">{item.time}</span>
                  </div>
                )}
              </div>
              <div className="text-xl">{item.icon}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodayProgress;
