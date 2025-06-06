
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SupportHeader from '@/components/dashboard/SupportHeader';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Activity, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Headphones,
  MessageSquare,
  FileText,
  Settings
} from 'lucide-react';

const SupportDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SupportHeader firstName="Agent" notificationCount={12} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Support Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline">📊 Reports</Button>
            <Button>🚨 Crisis Mode</Button>
          </div>
        </div>

        {/* Support Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Support Overview
              <Badge variant="outline" className="ml-auto">Real-time</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg border">
                <Headphones className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">247</div>
                <div className="text-sm text-gray-600">Open Tickets</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +12 today
                </div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">18</div>
                <div className="text-sm text-gray-600">My Tickets</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +3 assigned
                </div>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg border">
                <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-red-600">7</div>
                <div className="text-sm text-gray-600">Urgent</div>
                <div className="text-xs text-red-600 flex items-center justify-center gap-1 mt-1">
                  ⚠️ Critical
                </div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg border">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600">12 min</div>
                <div className="text-sm text-gray-600">Avg Response</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  🎯 Target: 15min
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Priority Queue */}
          <Card>
            <CardHeader>
              <CardTitle>🚨 Priority Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-red-600 mb-2">🔴 Crisis Support (3)</h4>
                  <div className="space-y-2 text-sm text-gray-600 pl-4">
                    <div className="flex justify-between">
                      <span>User 8934: Suicide risk</span>
                      <Badge variant="destructive">2m ago</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>User 7821: Self-harm</span>
                      <Badge variant="destructive">5m ago</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>User 5647: Emergency</span>
                      <Badge variant="destructive">8m ago</Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-orange-600 mb-2">🟡 Urgent (4)</h4>
                  <div className="space-y-2 text-sm text-gray-600 pl-4">
                    <div>Payment issues</div>
                    <div>Account locked</div>
                    <div>Therapist unavailable</div>
                    <div>App not working</div>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4">View All Priority</Button>
            </CardContent>
          </Card>

          {/* Today's Activity */}
          <Card>
            <CardHeader>
              <CardTitle>📈 Today's Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Tickets Created:</span>
                  <span className="font-medium">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tickets Resolved:</span>
                  <span className="font-medium text-green-600">76</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average Resolution:</span>
                  <span className="font-medium">2.4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Customer Satisfaction:</span>
                  <span className="font-medium text-green-600">4.7/5</span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500">Activity Chart Visualization</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Team Status */}
          <Card>
            <CardHeader>
              <CardTitle>👥 Team Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-2">Online Agents: 12/15</div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Available:</span>
                      <span className="text-green-600">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Busy:</span>
                      <span className="text-orange-600">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>In Crisis Call:</span>
                      <span className="text-red-600">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Break:</span>
                      <span className="text-gray-600">3</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Queue Status:</div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>General:</span>
                      <span>23 waiting</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Technical:</span>
                      <span>12 waiting</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Billing:</span>
                      <span>8 waiting</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Crisis:</span>
                      <span className="text-green-600">0 waiting</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Team Details
              </Button>
            </CardContent>
          </Card>

          {/* Recent Escalations */}
          <Card>
            <CardHeader>
              <CardTitle>📋 Recent Escalations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">Payment gateway failure</div>
                  <div className="text-gray-600">Escalated to Tech Team - 1 hour ago</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Therapist licensing issue</div>
                  <div className="text-gray-600">Escalated to Legal - 2 hours ago</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">User data export request</div>
                  <div className="text-gray-600">Escalated to Privacy Team - 3h ago</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Crisis intervention protocol</div>
                  <div className="text-gray-600">Escalated to Crisis Team - 4h ago</div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Escalations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>🎯 Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <FileText className="w-6 h-6" />
                <span>Create Ticket</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <MessageSquare className="w-6 h-6" />
                <span>Live Chat</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <AlertTriangle className="w-6 h-6" />
                <span>Crisis Response</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Users className="w-6 h-6" />
                <span>User Lookup</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupportDashboard;
