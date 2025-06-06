
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdminHeader from '@/components/dashboard/AdminHeader';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Users, Clock, Activity } from 'lucide-react';

const AnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader firstName="Admin" notificationCount={5} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <div className="flex gap-2">
            <select className="px-3 py-2 border rounded-md">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
            </select>
            <Button>📥 Export</Button>
          </div>
        </div>

        {/* Analytics Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Analytics Overview
              <Badge variant="outline" className="ml-auto">Last 30 Days</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg border">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">$847,230</div>
                <div className="text-sm text-gray-600">Total Revenue</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +12.3%
                </div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">7,429</div>
                <div className="text-sm text-gray-600">New Users</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +8.7%
                </div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg border">
                <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600">68.4%</div>
                <div className="text-sm text-gray-600">Retention</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +2.1%
                </div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg border">
                <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-orange-600">24.7 min</div>
                <div className="text-sm text-gray-600">Avg Session</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +5.2%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Trends */}
          <Card>
            <CardHeader>
              <CardTitle>📈 Revenue Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Monthly Recurring Revenue</div>
              </div>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-gray-500">Revenue Chart Visualization</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Current MRR: $847,230</div>
                  <div className="text-gray-600">Growth Rate: +12.3%</div>
                </div>
                <div>
                  <div className="font-medium">Oct - Nov - Dec - Jan - Feb - Mar</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Growth */}
          <Card>
            <CardHeader>
              <CardTitle>👥 User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600">User Acquisition & Retention</div>
              </div>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-gray-500">User Growth Chart Visualization</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">New Users: 7,429</div>
                  <div className="text-gray-600">Churn: 2.3%</div>
                </div>
                <div>
                  <div className="font-medium">Oct - Nov - Dec - Jan - Feb - Mar</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Feature Usage */}
          <Card>
            <CardHeader>
              <CardTitle>🎯 Feature Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Most Used Features (30 days)</div>
              </div>
              <div className="space-y-3">
                {[
                  { feature: 'Chat/LyfBot', percentage: 89.2 },
                  { feature: 'Journaling', percentage: 76.8 },
                  { feature: 'Mood Tracking', percentage: 71.3 },
                  { feature: 'Community', percentage: 68.9 },
                  { feature: 'Meditation', percentage: 64.2 },
                  { feature: 'Therapy Sessions', percentage: 45.7 },
                  { feature: 'Resources', percentage: 38.4 },
                  { feature: 'Goal Setting', percentage: 32.1 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{index + 1}. {item.feature}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Feature Deep Dive
              </Button>
            </CardContent>
          </Card>

          {/* Mental Health Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>🏥 Mental Health Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Platform Wellness Impact</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Average Wellness Score:</span>
                  <span className="font-medium">74.2/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Users Showing Improvement:</span>
                  <span className="font-medium text-green-600">78.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Crisis Interventions:</span>
                  <span className="font-medium">23 (↓ 15%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Therapy Completion Rate:</span>
                  <span className="font-medium text-green-600">92.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average Session Rating:</span>
                  <span className="font-medium">4.7/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Goal Achievement Rate:</span>
                  <span className="font-medium">68.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Community Engagement:</span>
                  <span className="font-medium">71.2%</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Custom Reports */}
        <Card>
          <CardHeader>
            <CardTitle>📋 Custom Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'User Cohort Analysis',
                'Revenue Breakdown',
                'Therapist Performance',
                'Crisis Response Times',
                'Feature Adoption',
                'Geographic Analysis',
                'Subscription Analytics',
                'Support Ticket Analysis',
                'Content Engagement',
                'Mobile vs Web Usage',
                'Retention Analysis',
                'Churn Prediction'
              ].map((report) => (
                <Button key={report} variant="outline" className="h-auto p-4 text-sm">
                  {report}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
