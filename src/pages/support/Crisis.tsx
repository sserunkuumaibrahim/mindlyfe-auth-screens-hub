
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SupportHeader from '@/components/dashboard/SupportHeader';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Phone, Clock, User, CheckCircle, Users } from 'lucide-react';

const CrisisManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SupportHeader firstName="Agent" notificationCount={12} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Crisis Management</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Shield className="w-4 h-4 mr-2" />
              Protocols
            </Button>
            <Button variant="destructive">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Mode
            </Button>
          </div>
        </div>

        {/* Crisis Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🚨 Crisis Overview
              <Badge variant="destructive" className="ml-auto">Active Monitoring</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-lg border">
                <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="text-sm text-gray-600">Active Crisis</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg border">
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-orange-600">12</div>
                <div className="text-sm text-gray-600">High Risk Users</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">28</div>
                <div className="text-sm text-gray-600">Resolved Today</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">4.2 min</div>
                <div className="text-sm text-gray-600">Avg Response</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Active Crisis Situations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">🔴 Active Crisis Situations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">User ID: 8934 - Suicide Risk</div>
                      <div className="text-sm text-gray-600">Started: 2 minutes ago</div>
                    </div>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                  <div className="text-sm mb-3">
                    "I can't handle this anymore. I've been thinking about ending it all."
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="destructive">
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </Button>
                    <Button size="sm" variant="outline">
                      Emergency Services
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">User ID: 7821 - Self-harm</div>
                      <div className="text-sm text-gray-600">Started: 5 minutes ago</div>
                    </div>
                    <Badge variant="destructive">High</Badge>
                  </div>
                  <div className="text-sm mb-3">
                    Reports of self-harm behavior detected in journal entries.
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="destructive">
                      <User className="w-4 h-4 mr-1" />
                      Contact User
                    </Button>
                    <Button size="sm" variant="outline">
                      Safety Plan
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">User ID: 5647 - Emergency</div>
                      <div className="text-sm text-gray-600">Started: 8 minutes ago</div>
                    </div>
                    <Badge variant="outline">Urgent</Badge>
                  </div>
                  <div className="text-sm mb-3">
                    User reported immediate danger situation.
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="destructive">
                      Emergency Protocol
                    </Button>
                    <Button size="sm" variant="outline">
                      Location Services
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crisis Response Team */}
          <Card>
            <CardHeader>
              <CardTitle>👥 Crisis Response Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                      SJ
                    </div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-gray-600">Senior Crisis Specialist</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">Available</Badge>
                    <div className="text-xs text-gray-600">2 active cases</div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center">
                      MW
                    </div>
                    <div>
                      <div className="font-medium">Mike Wilson</div>
                      <div className="text-sm text-gray-600">Crisis Counselor</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive">In Crisis Call</Badge>
                    <div className="text-xs text-gray-600">15 min</div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      LB
                    </div>
                    <div>
                      <div className="font-medium">Lisa Brown</div>
                      <div className="text-sm text-gray-600">Emergency Coordinator</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">On Standby</Badge>
                    <div className="text-xs text-gray-600">Ready</div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center">
                      TR
                    </div>
                    <div>
                      <div className="font-medium">Tom Rodriguez</div>
                      <div className="text-sm text-gray-600">Crisis Specialist</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Break</Badge>
                    <div className="text-xs text-gray-600">Back in 10m</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crisis Protocols & Emergency Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>📋 Crisis Protocols</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Suicide Risk Assessment Protocol
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Self-Harm Intervention Guidelines
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Services Contact
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Safety Planning Procedures
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Crisis Documentation Standards
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Family/Emergency Contact Protocols
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📞 Emergency Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="font-medium text-red-600">National Suicide Prevention Lifeline</div>
                  <div className="text-lg font-bold">988</div>
                  <div className="text-sm text-gray-600">24/7 Crisis Support</div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-600">Crisis Text Line</div>
                  <div className="text-lg font-bold">Text HOME to 741741</div>
                  <div className="text-sm text-gray-600">24/7 Text Crisis Support</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-600">Emergency Services</div>
                  <div className="text-lg font-bold">911</div>
                  <div className="text-sm text-gray-600">Immediate Emergency Response</div>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-medium text-purple-600">MindLyfe Crisis Team</div>
                  <div className="text-lg font-bold">1-800-MINDLYFE</div>
                  <div className="text-sm text-gray-600">Internal Crisis Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CrisisManagement;
