
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Target, Flame, Activity, Sparkles } from 'lucide-react';

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
      case 'improving': return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-600" />;
      case 'declining': return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default: return <TrendingUp className="w-4 h-4 text-emerald-600" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-emerald-500 to-green-600';
    if (score >= 60) return 'from-amber-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'improving': return 'from-emerald-50 to-green-50 border-emerald-200';
      case 'stable': return 'from-blue-50 to-indigo-50 border-blue-200';
      case 'declining': return 'from-red-50 to-pink-50 border-red-200';
      default: return 'from-emerald-50 to-green-50 border-emerald-200';
    }
  };

  return (
    <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 hover:-translate-y-1">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 pointer-events-none" />
      
      <CardContent className="relative p-8">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-light to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Wellness Summary</h2>
              <p className="text-sm text-gray-600 font-medium">Your daily wellness overview</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Overall Score - Enhanced */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className={`text-6xl font-black bg-gradient-to-r ${getScoreColor(overallScore)} bg-clip-text text-transparent tracking-tight`}>
                {overallScore}
              </div>
              <span className="text-2xl font-bold text-gray-400 ml-1">/100</span>
              <div className="absolute -top-3 -right-8">
                <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
            
            <div className="relative max-w-xs mx-auto">
              <Progress 
                value={overallScore} 
                className="h-4 bg-gray-100 shadow-inner rounded-full overflow-hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm font-semibold text-gray-700 tracking-wide">Overall Wellness Score</p>
          </div>
          
          {/* Enhanced Metrics Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Goals Metric */}
            <div className="group/metric relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300"></div>
              <div className="relative text-center p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-2xl border border-blue-100/60 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover/metric:shadow-xl transition-shadow duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">{goalsCompleted}/{totalGoals}</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Goals Complete</div>
              </div>
            </div>
            
            {/* Streak Metric */}
            <div className="group/metric relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300"></div>
              <div className="relative text-center p-6 bg-gradient-to-br from-orange-50/80 to-red-50/80 rounded-2xl border border-orange-100/60 hover:border-orange-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover/metric:shadow-xl transition-shadow duration-300">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">{currentStreak}</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Day Streak</div>
              </div>
            </div>
            
            {/* Mood Metric */}
            <div className="group/metric relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${getTrendColor(moodTrend)} rounded-2xl opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300`}></div>
              <div className={`relative text-center p-6 bg-gradient-to-br ${getTrendColor(moodTrend)} rounded-2xl border hover:scale-105 transition-all duration-300`}>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover/metric:shadow-xl transition-shadow duration-300">
                  {getTrendIcon(moodTrend)}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1 capitalize">{moodTrend}</div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Mood Trend</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessMetrics;
