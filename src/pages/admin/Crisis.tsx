
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { alertTriangle, shield, phone, clock } from 'lucide-react';

const CrisisManagement = () => {
  const crisisAlerts = [
    {
      id: '8934',
      level: 'critical',
      type: 'Suicide Risk Detected',
      triggered: '12 minutes ago',
      confidence: 94,
      lastActivity: '"I can\'t take this anymore" in journal entry',
      location: 'San Francisco, CA',
      emergencyContact: 'Available',
      assigned: 'Dr. Sarah Johnson',
      status: 'In Progress'
    },
    {
      id: '7821',
      level: 'high',
      type: 'Self-Harm Indicators',
      triggered: '45 minutes ago',
      confidence: 78,
      lastActivity: 'Declining mood scores, isolation keywords',
      location: 'Austin, TX',
      emergencyContact: 'Not Available',
      assigned: 'Crisis Team',
      status: 'Monitoring'
    },
    {
      id: '5647',
      level: 'medium',
      type: 'Substance Abuse Mention',
      triggered: '2 hours ago',
      confidence: 65,
      lastActivity: 'Community post mentioning alcohol dependency',
      location: 'Denver, CO',
      emergencyContact: 'Available',
      assigned: 'Unassigned',
      status: 'Pending Review'
    }
  ];

  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'critical':
        return <Badge className="bg-red-100 text-red-800">🚨 CRITICAL</Badge>;
      case 'high':
        return <Badge className="bg-orange-100 text-orange-800">🟡 HIGH RISK</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">🟡 MEDIUM RISK</Badge>;
      default:
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="Admin" notificationCount={5} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Crisis Management Center</h1>
          <Button className="bg-red-600 hover:bg-red-700">Emergency Broadcast</Button>
        </div>

        {/* Crisis Alert Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🚨 Crisis Alert Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-lg border">
                <alertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="text-sm text-gray-600">Active Alerts</div>
                <div className="text-xs text-red-600 font-medium">🔴 Critical</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg border">
                <users className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-yellow-600">23</div>
                <div className="text-sm text-gray-600">High Risk</div>
                <div className="text-xs text-yellow-600 font-medium">🟡 Monitoring</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border">
                <checkCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">7</div>
                <div className="text-sm text-gray-600">Interventions Today</div>
                <div className="text-xs text-green-600 font-medium">✅ Resolved</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border">
                <clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">4.2min</div>
                <div className="text-sm text-gray-600">Response Time</div>
                <div className="text-xs text-blue-600 font-medium">🎯 Target: 5min</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Crisis Alerts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🔴 Active Crisis Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {crisisAlerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-4 rounded-lg border ${
                  alert.level === 'critical' ? 'bg-red-50 border-red-200' :
                  alert.level === 'high' ? 'bg-orange-50 border-orange-200' :
                  'bg-yellow-50 border-yellow-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {getAlertBadge(alert.level)}
                      <span className="font-medium">User ID: {alert.id} - {alert.type}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Triggered: {alert.triggered} | AI Confidence: {alert.confidence}%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-gray-600">Last Activity:</div>
                    <div className="font-medium">{alert.lastActivity}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Location:</div>
                    <div className="font-medium">{alert.location}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Emergency Contact:</div>
                    <div className="font-medium">{alert.emergencyContact}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Assigned:</div>
                    <div className="font-medium">{alert.assigned} | Status: {alert.status}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">View Full Profile</Button>
                  <Button size="sm" variant="outline">Contact User</Button>
                  {alert.level === 'critical' && (
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">Emergency Services</Button>
                  )}
                  <Button size="sm" variant="outline">Update Status</Button>
                  {alert.assigned === 'Unassigned' && (
                    <Button size="sm" variant="outline">Assign Counselor</Button>
                  )}
                </div>
              </div>
            ))}
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
                <h4 className="font-medium mb-3">This Month:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Alerts:</span>
                    <span className="font-medium">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Critical:</span>
                    <span className="font-medium text-red-600">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High Risk:</span>
                    <span className="font-medium text-orange-600">34</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium Risk:</span>
                    <span className="font-medium text-yellow-600">43</span>
                  </div>
                  <div className="flex justify-between">
                    <span>False Positives:</span>
                    <span className="font-medium">8.2%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Response Times:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Critical:</span>
                    <span className="font-medium">Avg 3.1 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High Risk:</span>
                    <span className="font-medium">Avg 8.7 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium Risk:</span>
                    <span className="font-medium">Avg 24.3 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolution Rate:</span>
                    <span className="font-medium text-green-600">94.3%</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">View Detailed Report</Button>
            </CardContent>
          </Card>

          {/* Response Protocols */}
          <Card>
            <CardHeader>
              <CardTitle>🎯 Response Protocols</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Immediate Response (0-5 min):</h4>
                <div className="space-y-1 text-sm">
                  <div>├ AI-powered risk assessment</div>
                  <div>├ Automatic emergency contact alert</div>
                  <div>├ Crisis counselor notification</div>
                  <div>└ Platform safety measures activation</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Follow-up Response (5-30 min):</h4>
                <div className="space-y-1 text-sm">
                  <div>├ Professional intervention</div>
                  <div>├ Emergency services coordination</div>
                  <div>├ Family/emergency contact outreach</div>
                  <div>└ Continuous monitoring activation</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">Update Protocols</Button>
                <Button variant="outline" size="sm">Training Materials</Button>
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
              {[
                { icon: '📢', label: 'Emergency Broadcast' },
                { icon: '💬', label: 'Crisis Team Chat' },
                { icon: '📚', label: 'Resource Library' },
                { icon: '🎓', label: 'Training Hub' },
                { icon: '📋', label: 'Incident Reports' },
                { icon: '⚖️', label: 'Legal Documentation' },
                { icon: '🏥', label: 'External Services' },
                { icon: '📊', label: 'Analytics' }
              ].map((tool) => (
                <Button key={tool.label} variant="outline" className="h-auto p-4 flex flex-col gap-2">
                  <span className="text-lg">{tool.icon}</span>
                  <span className="text-sm">{tool.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrisisManagement;
