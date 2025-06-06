import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Activity, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Shield 
} from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="Admin" notificationCount={5} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Platform Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Platform Overview
              <Badge variant="outline" className="ml-auto">Last Updated: 2:34 PM</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">45,892</div>
                <div className="text-sm text-gray-600">Total Users</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +2.3%
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">12,847</div>
                <div className="text-sm text-gray-600">Active Users</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +5.1%
                </div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">247</div>
                <div className="text-sm text-gray-600">New Today</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12%
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">$127,450</div>
                <div className="text-sm text-gray-600">Revenue</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +8.7%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* System Health */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚨 System Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: 'Auth Service', status: 99.9, color: 'green' },
                { name: 'Chat Service', status: 99.8, color: 'green' },
                { name: 'AI Service', status: 99.7, color: 'green' },
                { name: 'Payment Service', status: 99.9, color: 'green' },
                { name: 'Teletherapy Service', status: 98.2, color: 'yellow' },
                { name: 'Community Service', status: 99.6, color: 'green' },
                { name: 'Notification Service', status: 99.8, color: 'green' },
                { name: 'Database Cluster', status: 99.9, color: 'green' }
              ].map((service) => (
                <div key={service.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {service.color === 'green' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    )}
                    <span className="text-sm">{service.name}</span>
                  </div>
                  <span className="text-sm font-medium">{service.status}%</span>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Detailed Status
              </Button>
            </CardContent>
          </Card>

          {/* Real-time Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📈 Real-time Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-lg font-semibold">Active Sessions: 8,247</div>
              </div>
              <div className="h-32 bg-gray-100 rounded-lg flex items-end justify-center p-4">
                <div className="text-sm text-gray-500">Live activity chart visualization</div>
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center">
                12PM - 1PM - 2PM - 3PM - 4PM
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Critical Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚨 Critical Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-red-900">🔴 High CPU usage on AI-Service</div>
                    <div className="text-sm text-red-700">Threshold: 85% | Current: 92%</div>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline">Investigate</Button>
                  <Button size="sm" variant="outline">Scale Up</Button>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-yellow-900">🟡 Unusual login pattern</div>
                    <div className="text-sm text-yellow-700">Location: Nigeria | Attempts: 247 in 10 min</div>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline">Block IP</Button>
                  <Button size="sm" variant="outline">Investigate</Button>
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="font-medium text-green-900">🟢 Database backup completed</div>
                <div className="text-sm text-green-700">Size: 2.4GB | Duration: 12m</div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Recent Admin Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📋 Recent Admin Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  action: 'User account suspended (ID: 12847)',
                  admin: 'admin@mindlyfe.org',
                  time: '15 min ago'
                },
                {
                  action: 'Payment gateway switched to backup',
                  admin: 'system',
                  time: '32 min ago'
                },
                {
                  action: 'Crisis intervention triggered',
                  admin: 'User ID: 8934',
                  time: '1 hour ago'
                },
                {
                  action: 'Therapist credentials verified',
                  admin: 'Dr. Sarah Johnson',
                  time: '2 hours ago'
                }
              ].map((item, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium">{item.action}</div>
                  <div className="text-gray-500">by {item.admin} - {item.time}</div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Full Audit Log
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎯 Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Users className="w-6 h-6" />
                <span>User Management</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Activity className="w-6 h-6" />
                <span>Analytics</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Shield className="w-6 h-6" />
                <span>System Config</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <AlertTriangle className="w-6 h-6" />
                <span>Crisis Response</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <DollarSign className="w-6 h-6" />
                <span>Financial Reports</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Shield className="w-6 h-6" />
                <span>Security Center</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Clock className="w-6 h-6" />
                <span>Content Moderation</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Activity className="w-6 h-6" />
                <span>Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
