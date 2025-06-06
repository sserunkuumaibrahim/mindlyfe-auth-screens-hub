
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdminHeader from '@/components/dashboard/AdminHeader';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Phone, Clock, Users, CheckCircle, TrendingUp } from 'lucide-react';

const CrisisManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader firstName="Admin" notificationCount={5} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-red-600">Crisis Management Center</h1>
          <div className="flex gap-2">
            <Button variant="outline" className="text-red-600 border-red-600">Emergency Broadcast</Button>
            <Button className="bg-red-600 hover:bg-red-700">Crisis Team Chat</Button>
          </div>
        </div>

        {/* Crisis Alert Dashboard */}
        <Card className="mb-8 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              🚨 Crisis Alert Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="text-sm text-gray-600">Active Alerts</div>
                <div className="text-xs text-red-600 font-medium mt-1">🔴 Critical</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <Users className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-yellow-600">23</div>
                <div className="text-sm text-gray-600">High Risk</div>
                <div className="text-xs text-yellow-600 font-medium mt-1">🟡 Monitoring</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">7</div>
                <div className="text-sm text-gray-600">Interventions Today</div>
                <div className="text-xs text-green-600 font-medium mt-1">✅ Resolved</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">4.2 min</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
                <div className="text-xs text-green-600 flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  🎯 Target: 5min
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Crisis Alerts */}
        <Card className="mb-8 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              🔴 Active Crisis Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Critical Alert */}
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-red-900 text-lg">🚨 CRITICAL - User ID: 8934 - Suicide Risk Detected</div>
                  <div className="text-red-700 text-sm">Triggered: 12 minutes ago | AI Confidence: 94%</div>
                  <div className="text-red-700 text-sm">Last Activity: "I can't take this anymore" in journal entry</div>
                  <div className="text-red-700 text-sm">Location: San Francisco, CA | Emergency Contact: Available</div>
                  <div className="text-red-700 text-sm">Assigned: Dr. Sarah Johnson | Status: In Progress</div>
                </div>
                <Badge variant="destructive">CRITICAL</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-red-600 text-red-600">View Full Profile</Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">Contact User</Button>
                <Button size="sm" variant="outline" className="border-red-600 text-red-600">Emergency Services</Button>
                <Button size="sm" variant="outline">Update Status</Button>
              </div>
            </div>

            {/* High Risk Alert */}
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-yellow-900 text-lg">🟡 HIGH RISK - User ID: 7821 - Self-Harm Indicators</div>
                  <div className="text-yellow-700 text-sm">Triggered: 45 minutes ago | AI Confidence: 78%</div>
                  <div className="text-yellow-700 text-sm">Pattern: Declining mood scores, isolation keywords</div>
                  <div className="text-yellow-700 text-sm">Location: Austin, TX | Emergency Contact: Not Available</div>
                  <div className="text-yellow-700 text-sm">Assigned: Crisis Team | Status: Monitoring</div>
                </div>
                <Badge className="bg-yellow-600">HIGH RISK</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">View Full Profile</Button>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">Escalate</Button>
                <Button size="sm" variant="outline">Assign Therapist</Button>
                <Button size="sm" variant="outline">Send Resources</Button>
              </div>
            </div>

            {/* Medium Risk Alert */}
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-orange-900 text-lg">🟡 MEDIUM RISK - User ID: 5647 - Substance Abuse Mention</div>
                  <div className="text-orange-700 text-sm">Triggered: 2 hours ago | AI Confidence: 65%</div>
                  <div className="text-orange-700 text-sm">Context: Community post mentioning alcohol dependency</div>
                  <div className="text-orange-700 text-sm">Location: Denver, CO | Emergency Contact: Available</div>
                  <div className="text-orange-700 text-sm">Assigned: Unassigned | Status: Pending Review</div>
                </div>
                <Badge className="bg-orange-600">MEDIUM RISK</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">View Full Profile</Button>
                <Button size="sm" variant="outline">Assign Counselor</Button>
                <Button size="sm" variant="outline">Send Resources</Button>
                <Button size="sm" variant="outline">Mark Reviewed</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Crisis Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>📊 Crisis Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">This Month:</h4>
                <div className="space-y-1 text-sm">
                  <div>Total Alerts: 89</div>
                  <div>Critical: 12</div>
                  <div>High Risk: 34</div>
                  <div>Medium Risk: 43</div>
                  <div>False Positives: 8.2%</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Response Times:</h4>
                <div className="space-y-1 text-sm">
                  <div>Critical: Avg 3.1 min</div>
                  <div>High Risk: Avg 8.7 min</div>
                  <div>Medium Risk: Avg 24.3 min</div>
                  <div>Resolution Rate: 94.3%</div>
                </div>
              </div>
              
              <Button className="w-full">View Detailed Report</Button>
            </CardContent>
          </Card>

          {/* Response Protocols */}
          <Card>
            <CardHeader>
              <CardTitle>🎯 Response Protocols</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Immediate Response (0-5 min):</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>• AI-powered risk assessment</div>
                  <div>• Automatic emergency contact alert</div>
                  <div>• Crisis counselor notification</div>
                  <div>• Platform safety measures activation</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Follow-up Response (5-30 min):</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>• Professional intervention</div>
                  <div>• Emergency services coordination</div>
                  <div>• Family/emergency contact outreach</div>
                  <div>• Continuous monitoring activation</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline">Update Protocols</Button>
                <Button variant="outline">Training Materials</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crisis Management Tools */}
        <Card>
          <CardHeader>
            <CardTitle>🛠️ Crisis Management Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Phone className="w-6 h-6" />
                <span>Emergency Broadcast</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Users className="w-6 h-6" />
                <span>Crisis Team Chat</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Shield className="w-6 h-6" />
                <span>Resource Library</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Training Hub</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <AlertTriangle className="w-6 h-6" />
                <span>Incident Reports</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Shield className="w-6 h-6" />
                <span>Legal Documentation</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Phone className="w-6 h-6" />
                <span>External Services</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <TrendingUp className="w-6 h-6" />
                <span>Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrisisManagement;
