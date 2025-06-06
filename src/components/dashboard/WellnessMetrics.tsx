
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Target, Flame, Activity } from 'lucide-react';

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
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-500" />;
      case 'declining': return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default: return <TrendingUp className="w-4 h-4 text-green-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-400 to-emerald-500';
    if (score >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Wellness Summary</h2>
        </div>
        
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="text-center">
            <div className={`text-4xl font-bold bg-gradient-to-r ${getScoreColor(overallScore)} bg-clip-text text-transparent mb-3`}>
              {overallScore}/100
            </div>
            <div className="relative">
              <Progress value={overallScore} className="h-3 bg-gray-100" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm"></div>
            </div>
            <p className="text-sm text-gray-600 mt-2 font-medium">Overall Wellness Score</p>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">{goalsCompleted}/{totalGoals}</div>
              <div className="text-xs text-gray-600 font-medium">Goals</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
              <Flame className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">{currentStreak}</div>
              <div className="text-xs text-gray-600 font-medium">Day Streak</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="flex items-center justify-center mb-2">
                {getTrendIcon(moodTrend)}
              </div>
              <div className="text-lg font-bold text-gray-900 capitalize">{moodTrend}</div>
              <div className="text-xs text-gray-600 font-medium">Mood</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessMetrics;
