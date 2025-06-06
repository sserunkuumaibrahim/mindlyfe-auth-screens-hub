
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: 'Insomnia recovery',
      description: 'Cognitive and behavioral techniques to manage insomnia.',
      color: 'bg-cyan-100 text-cyan-700',
      tag: 'Sleep',
      route: '/resources/paths'
    },
    {
      title: 'Anxiety relief',
      description: 'Meditations focused on calming the nervous system.',
      color: 'bg-orange-100 text-orange-700',
      tag: 'Meditation',
      route: '/mental-health/mood'
    },
    {
      title: 'Stress management',
      description: 'Learn effective stress coping strategies.',
      color: 'bg-purple-100 text-purple-700',
      tag: 'Studying',
      route: '/resources'
    }
  ];

  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">Plans</CardTitle>
          <button 
            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            onClick={() => navigate('/mental-health/goals')}
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-4">
        {plans.map((plan, index) => (
          <div key={index} className="relative">
            <div 
              className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border hover:shadow-sm transition-shadow cursor-pointer"
              onClick={() => navigate(plan.route)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${plan.color}`}>
                  {plan.tag}
                </span>
                <button className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </button>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-sm text-gray-600">{plan.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActions;
