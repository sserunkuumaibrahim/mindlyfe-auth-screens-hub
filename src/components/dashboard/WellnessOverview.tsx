
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Target, Heart, Brain } from 'lucide-react';

const WellnessOverview = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      title: 'Mood Score',
      value: '8.2',
      unit: '/10',
      change: '+0.5',
      changeLabel: 'this week',
      icon: Heart,
      color: 'from-mindlyfe-blue to-blue-600',
      bgColor: 'bg-blue-50',
      action: () => navigate('/mental-health/mood')
    },
    {
      title: 'Goal Progress',
      value: '75',
      unit: '%',
      change: '+12%',
      changeLabel: 'this month',
      icon: Target,
      color: 'from-mindlyfe-green to-green-600',
      bgColor: 'bg-green-50',
      action: () => navigate('/mental-health/goals')
    },
    {
      title: 'Wellness Streak',
      value: '12',
      unit: 'days',
      change: 'New record',
      changeLabel: '',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      action: () => navigate('/mental-health/progress')
    }
  ];

  return (
    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Wellness Overview</h2>
          <p className="text-sm sm:text-base text-gray-600">Track your mental health progress and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <button
                key={index}
                onClick={metric.action}
                className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl ${metric.bgColor} border border-white/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-left overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${metric.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-green-600 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {metric.change}
                      </div>
                      {metric.changeLabel && (
                        <div className="text-xs text-gray-500">{metric.changeLabel}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-bold text-gray-900">{metric.value}</span>
                      <span className="text-base sm:text-lg text-gray-600">{metric.unit}</span>
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900">{metric.title}</h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessOverview;
