
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface WellnessMetricsProps {
  moodScore: number;
  streakDays: number;
  weeklyGoalProgress: number;
  totalSessions: number;
  lastActivity: Date;
  riskLevel: 'low' | 'medium' | 'high';
}

const WellnessMetrics = ({ 
  moodScore, 
  streakDays, 
  weeklyGoalProgress 
}: WellnessMetricsProps) => {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Wellness Summary</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-1">😊</div>
            <div className="text-xl font-bold text-primary">{moodScore}</div>
            <div className="text-xs text-gray-600">Mood</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-xl font-bold text-secondary">{streakDays}</div>
            <div className="text-xs text-gray-600">Days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">📈</div>
            <div className="text-xl font-bold text-primary">{weeklyGoalProgress}%</div>
            <div className="text-xs text-gray-600">Goal</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessMetrics;
