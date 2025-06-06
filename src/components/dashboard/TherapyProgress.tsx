
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const TherapyProgress = () => {
  const monthlyData = [
    { month: 'Oct', sessions: 7, color: 'bg-red-200' },
    { month: 'Nov', sessions: 4, color: 'bg-red-300' },
    { month: 'Dec', sessions: 8, color: 'bg-blue-200' },
    { month: 'Jan', sessions: 12, color: 'bg-blue-400' },
    { month: 'Feb', sessions: 2, color: 'bg-blue-100' },
    { month: 'Mar', sessions: 12, color: 'bg-blue-400' },
  ];

  const maxSessions = Math.max(...monthlyData.map(d => d.sessions));

  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">Therapy tracker</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <select className="text-sm text-gray-600 bg-transparent border-0 outline-none">
              <option>6 months</option>
              <option>12 months</option>
            </select>
            <TrendingUp className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="relative mb-6">
          <div className="absolute top-4 left-0 right-0 flex items-center">
            <div className="flex-1 h-px bg-gray-100"></div>
            <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
              50% ⚡
            </div>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>
          
          <div className="pt-8">
            <div className="text-sm text-gray-600 mb-2">Avg 3 sessions / week</div>
            <div className="flex items-end gap-4 h-32">
              {monthlyData.map((item, index) => (
                <div key={item.month} className="flex flex-col items-center gap-2 flex-1">
                  <div 
                    className={`w-full ${item.color} rounded-t-lg transition-all duration-500`}
                    style={{ height: `${(item.sessions / maxSessions) * 100}px` }}
                  />
                  <div className="text-xs text-gray-600">{item.month}</div>
                  <div className="text-xs font-medium text-gray-900">{item.sessions}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TherapyProgress;
