
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface WellnessMetricsProps {
  overallScore: number;
  goalsCompleted: number;
  totalGoals: number;
  currentStreak: number;
  moodTrend: 'improving' | 'stable' | 'declining';
}

const WellnessMetrics = ({ 
  overallScore, 
  goalsCompleted, 
  totalGoals, 
  currentStreak, 
  moodTrend 
}: WellnessMetricsProps) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return '📈';
      case 'stable': return '➡️';
      case 'declining': return '📉';
      default: return '📈';
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🌟</span>
          <h2 className="text-lg font-semibold text-gray-900">Wellness Summary</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">
              Overall Score: {overallScore}/100
            </div>
            <Progress value={overallScore} className="h-3" />
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">🎯</span>
                <span className="text-sm font-medium">Goals:</span>
              </div>
              <span className="text-sm font-bold">{goalsCompleted}/{totalGoals} completed</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔥</span>
                <span className="text-sm font-medium">Current streak:</span>
              </div>
              <span className="text-sm font-bold">{currentStreak} days</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getTrendIcon(moodTrend)}</span>
                <span className="text-sm font-medium">Mood trend:</span>
              </div>
              <span className="text-sm font-bold capitalize">{moodTrend}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessMetrics;
