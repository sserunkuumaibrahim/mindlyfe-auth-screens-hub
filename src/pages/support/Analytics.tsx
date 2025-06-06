
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SupportHeader from '@/components/dashboard/SupportHeader';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Users, Star, Download } from 'lucide-react';

const SupportAnalytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SupportHeader firstName="Agent" notificationCount={12} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Support Analytics</h1>
          <div className="flex gap-2">
            <select className="px-3 py-2 border rounded-md">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
            </select>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Support Performance Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Support Performance Overview
              <Badge variant="outline" className="ml-auto">Last 30 Days</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg border">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">2,847</div>
                <div className="text-sm text-gray-600">Total Tickets</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +8.2%
                </div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg border">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600">12.3 min</div>
                <div className="text-sm text-gray-600">Avg Response</div>
                <div className="text-xs text-red-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +2.1 min
                </div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">2.4 hours</div>
                <div className="text-sm text-gray-600">Resolution</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  -0.3h
                </div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg border">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-yellow-600">4.7/5.0</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +0.2
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Ticket Volume Trends */}
          <Card>
            <CardHeader>
              <CardTitle>📈 Ticket Volume Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Daily Ticket Creation</div>
              </div>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-gray-500">Ticket Volume Chart Visualization</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Peak Hours: 2-4 PM</div>
                  <div className="text-gray-600">Average: 94 tickets/day</div>
                </div>
                <div>
                  <div className="font-medium">Mon - Tue - Wed - Thu - Fri - Sat</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>⏱️ Response Time Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Response Time Distribution</div>
              </div>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-gray-500">Response Time Chart Visualization</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Target: &lt;15 min</div>
                  <div className="text-gray-600">Current: 12.3 min</div>
                </div>
                <div>
                  <div className="font-medium">&lt;5m - 5-15m - 15-30m - 30m+ - 1h+</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Agent Performance */}
          <Card>
            <CardHeader>
              <CardTitle>👥 Agent Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Top Performers (30 days)</div>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Johnson', tickets: 156, avgTime: '1.8h', satisfaction: '4.9/5', rank: 1 },
                  { name: 'Mike Wilson', tickets: 142, avgTime: '2.1h', satisfaction: '4.8/5', rank: 2 },
                  { name: 'Lisa Brown', tickets: 134, avgTime: '2.3h', satisfaction: '4.7/5', rank: 3 },
                  { name: 'Tom Rodriguez', tickets: 128, avgTime: '2.5h', satisfaction: '4.6/5', rank: 4 },
                  { name: 'Emma Davis', tickets: 121, avgTime: '2.7h', satisfaction: '4.5/5', rank: 5 }
                ].map((agent) => (
                  <div key={agent.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {agent.rank}
                      </div>
                      <div>
                        <div className="font-medium">{agent.name}</div>
                        <div className="text-sm text-gray-600">
                          Tickets: {agent.tickets} | Avg: {agent.avgTime}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">Satisfaction: {agent.satisfaction}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Agents
              </Button>
            </CardContent>
          </Card>

          {/* Ticket Categories */}
          <Card>
            <CardHeader>
              <CardTitle>📋 Ticket Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Most Common Issues</div>
              </div>
              <div className="space-y-3">
                {[
                  { category: 'Login/Access Issues', percentage: 23.4 },
                  { category: 'Payment Problems', percentage: 18.7 },
                  { category: 'App Technical Issues', percentage: 15.2 },
                  { category: 'Account Questions', percentage: 12.8 },
                  { category: 'Therapist Scheduling', percentage: 9.3 },
                  { category: 'Billing Inquiries', percentage: 8.9 },
                  { category: 'Crisis Support', percentage: 6.2 },
                  { category: 'Feature Requests', percentage: 3.8 },
                  { category: 'Privacy/Data', percentage: 1.7 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{index + 1}. {item.category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(item.percentage / 25) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Detailed Breakdown
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Custom Reports & Insights */}
        <Card>
          <CardHeader>
            <CardTitle>📋 Custom Reports & Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Agent Performance Report',
                'Customer Satisfaction Survey',
                'Crisis Response',
                'Escalation Analysis',
                'Knowledge Base Usage',
                'Peak Time Analysis',
                'Resolution Time Trends',
                'Customer Feedback Analysis',
                'Team Productivity',
                'SLA Compliance',
                'Quality Assurance',
                'Training Effectiveness'
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

export default SupportAnalytics;
