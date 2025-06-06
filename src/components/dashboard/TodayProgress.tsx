
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Circle, Sparkles, TrendingUp } from 'lucide-react';

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
    <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 pointer-events-none" />
      
      <CardHeader className="relative pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Today's Progress</div>
              <div className="text-sm font-medium text-gray-600">Keep up the momentum!</div>
            </div>
          </CardTitle>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{completedCount}</div>
              <div className="text-xs font-semibold text-gray-600">/{displayItems.length}</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm font-bold text-gray-900">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 h-3 rounded-full transition-all duration-700 ease-out shadow-sm relative overflow-hidden"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative p-6 pt-0">
        <div className="space-y-4">
          {displayItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group/item relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white/80 border border-gray-200/60 hover:border-gray-300 transition-all duration-300 hover:shadow-md">
                <div className="flex-shrink-0">
                  {item.completed ? (
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200">
                      <Circle className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className={`text-sm font-semibold transition-all duration-200 ${
                    item.completed 
                      ? 'text-gray-500 line-through' 
                      : 'text-gray-900'
                  }`}>
                    {item.title}
                  </div>
                  {item.time && !item.completed && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="text-2xl">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodayProgress;
