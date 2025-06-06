
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Activity, Target, TrendingUp } from 'lucide-react';

const WellnessOverview = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      title: 'Mood Score',
      value: '8.2',
      unit: '/10',
      description: 'Above your average',
      trend: '+0.5 this week',
      color: 'from-mindlyfe-blue to-blue-600',
      bgColor: 'from-mindlyfe-blue/10 to-blue-50',
      icon: Activity,
      action: () => navigate('/mental-health/mood')
    },
    {
      title: 'Goal Progress',
      value: '75',
      unit: '%',
      description: '3 of 4 goals on track',
      trend: '+12% this month',
      color: 'from-mindlyfe-green to-green-600',
      bgColor: 'from-mindlyfe-green/10 to-green-50',
      icon: Target,
      action: () => navigate('/mental-health/goals')
    },
    {
      title: 'Wellness Streak',
      value: '12',
      unit: 'days',
      description: 'Personal best!',
      trend: 'New record',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      icon: TrendingUp,
      action: () => navigate('/mental-health/progress')
    }
  ];

  return (
    <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-mindlyfe-blue/5 via-transparent to-mindlyfe-green/5" />
      
      <CardHeader className="relative">
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-mindlyfe-blue to-mindlyfe-green bg-clip-text text-transparent">
          Your Wellness Overview
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <button
                key={index}
                onClick={metric.action}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${metric.bgColor} border border-white/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-left`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs font-medium bg-white/80">
                    {metric.trend}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                    <span className="text-sm text-gray-600">{metric.unit}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{metric.title}</h3>
                  <p className="text-sm text-gray-600">{metric.description}</p>
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
