
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SupportHeader from '@/components/dashboard/SupportHeader';
import { Badge } from '@/components/ui/badge';
import { Search, User, Phone, Mail, MessageSquare, Lock, Unlock, CreditCard, RotateCcw, AlertTriangle } from 'lucide-react';

const UserAssistance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SupportHeader firstName="Agent" notificationCount={12} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">User Assistance</h1>
          <div className="flex gap-2">
            <Button variant="outline">Recent Support</Button>
            <Button>Crisis Users</Button>
          </div>
        </div>

        {/* User Lookup */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🔍 User Lookup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <select className="px-3 py-2 border rounded-md">
                  <option>Email</option>
                  <option>User ID</option>
                  <option>Phone</option>
                  <option>Name</option>
                </select>
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="john.doe@email.com"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  />
                </div>
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">Recent Support</Button>
                <Button variant="outline" size="sm">High Risk</Button>
                <Button variant="outline" size="sm">Premium Users</Button>
                <Button variant="outline" size="sm">Active Issues</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Profile */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>👤 User Profile: John Doe (ID: 12847)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Basic Information */}
              <div>
                <h4 className="font-medium mb-3">Basic Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span>john.doe@email.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registration:</span>
                    <span>Dec 1, 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Login:</span>
                    <span>5 minutes ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timezone:</span>
                    <span>America/Los_Angeles</span>
                  </div>
                </div>
              </div>

              {/* Account Status */}
              <div>
                <h4 className="font-medium mb-3">Account Status</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge variant="default">✅ Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Risk Level:</span>
                    <Badge variant="destructive">🔴 Critical</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subscription:</span>
                    <span>Premium Monthly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Status:</span>
                    <Badge variant="default">✅ Current</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Support Tickets:</span>
                    <span>3 open</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Contact:</span>
                    <span>2 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Mental Health Profile */}
              <div>
                <h4 className="font-medium mb-3">Mental Health Profile</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wellness Score:</span>
                    <span className="text-red-600">45/100 (↓ Low)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Therapist:</span>
                    <span>Dr. Johnson</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Session:</span>
                    <span>Jan 12, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Crisis Flags:</span>
                    <Badge variant="destructive">🚨 Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Contact:</span>
                    <span>Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Safety Plan:</span>
                    <Badge variant="destructive">❌ Not Created</Badge>
                  </div>
                </div>
              </div>

              {/* Platform Usage */}
              <div>
                <h4 className="font-medium mb-3">Platform Usage</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Daily Active:</span>
                    <span>89 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sessions:</span>
                    <span>24 completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Journal Entries:</span>
                    <span>156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Community Posts:</span>
                    <span>23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">LyfBot Conversations:</span>
                    <span>89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Activity:</span>
                    <span>5 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🎯 Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <User className="w-6 h-6" />
                <span className="text-xs">Create Ticket</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <MessageSquare className="w-6 h-6" />
                <span className="text-xs">Start Chat</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Mail className="w-6 h-6" />
                <span className="text-xs">Send Email</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Phone className="w-6 h-6" />
                <span className="text-xs">Schedule Call</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Lock className="w-6 h-6" />
                <span className="text-xs">Lock Account</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <CreditCard className="w-6 h-6" />
                <span className="text-xs">Billing Help</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <AlertTriangle className="w-6 h-6" />
                <span className="text-xs">Crisis Protocol</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <User className="w-6 h-6" />
                <span className="text-xs">Assign Therapist</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity & Support History */}
        <Card>
          <CardHeader>
            <CardTitle>📈 Recent Activity & Support History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Button variant="outline" size="sm">All Activity</Button>
              <Button variant="outline" size="sm">Support Tickets</Button>
              <Button variant="outline" size="sm">Crisis Events</Button>
              <Button variant="outline" size="sm">Account Changes</Button>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                <div>
                  <div className="font-medium">2 minutes ago - Crisis alert triggered (suicide ideation)</div>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <User className="w-4 h-4 text-gray-600 mt-0.5" />
                <div>5 minutes ago - User logged in from mobile app</div>
              </div>
              <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <User className="w-4 h-4 text-gray-600 mt-0.5" />
                <div>1 hour ago - Created journal entry with concerning content</div>
              </div>
              <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <User className="w-4 h-4 text-gray-600 mt-0.5" />
                <div>Yesterday - Missed therapy session with Dr. Johnson</div>
              </div>
              <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <User className="w-4 h-4 text-gray-600 mt-0.5" />
                <div>2 days ago - Support ticket T-8932 created (payment issue)</div>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">Load More</Button>
              <Button variant="outline" size="sm">Export History</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserAssistance;
