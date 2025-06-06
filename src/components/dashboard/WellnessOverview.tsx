
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Zap } from 'lucide-react';

const WellnessOverview = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-sm">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Mindful Meditation</h2>
            <p className="text-gray-600">Focus and clarity sounds</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="relative">
          <div className="w-32 h-32 mx-auto mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgb(255 255 255 / 0.3)"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgb(59 130 246)"
                strokeWidth="8"
                strokeDasharray={`${78 * 2.83} ${(100 - 78) * 2.83}`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">78</div>
                <div className="text-xs text-gray-600">Score</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
            </button>
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
            </button>
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessOverview;
