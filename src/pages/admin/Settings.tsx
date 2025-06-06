
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Settings, Shield, Bell, DollarSign } from 'lucide-react';

const SystemConfiguration = () => {
  const [activeTab, setActiveTab] = useState('feature-flags');

  const featureFlags = [
    {
      name: 'New Chat Interface',
      status: 'enabled',
      rollout: 100,
      environment: 'Production'
    },
    {
      name: 'Advanced AI Insights',
      status: 'testing',
      rollout: 25,
      environment: 'Staging'
    },
    {
      name: 'Video Therapy Beta',
      status: 'disabled',
      rollout: 0,
      environment: 'Development'
    },
    {
      name: 'Community Live Streaming',
      status: 'testing',
      rollout: 10,
      environment: 'Production'
    },
    {
      name: 'Enhanced Crisis Detection',
      status: 'enabled',
      rollout: 100,
      environment: 'Production'
    },
    {
      name: 'Mobile App Push v2',
      status: 'testing',
      rollout: 50,
      environment: 'Production'
    },
    {
      name: 'Therapist Scheduling v3',
      status: 'disabled',
      rollout: 0,
      environment: 'Development'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'enabled':
        return <Badge className="bg-green-100 text-green-800">✅ Enabled</Badge>;
      case 'testing':
        return <Badge className="bg-yellow-100 text-yellow-800">🟡 Testing</Badge>;
      case 'disabled':
        return <Badge className="bg-red-100 text-red-800">❌ Disabled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="Admin" notificationCount={5} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">System Configuration</h1>
          <Button>Save All Changes</Button>
        </div>

        {/* Configuration Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>⚙️ Configuration Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'feature-flags', icon: '🚩', label: 'Feature Flags' },
                { id: 'service-settings', icon: '🔧', label: 'Service Settings' },
                { id: 'security', icon: '🛡️', label: 'Security' },
                { id: 'notifications', icon: '📧', label: 'Notifications' },
                { id: 'payment-gateways', icon: '💳', label: 'Payment Gateways' },
                { id: 'ai-config', icon: '🤖', label: 'AI Configuration' },
                { id: 'analytics', icon: '📊', label: 'Analytics' },
                { id: 'integrations', icon: '🌐', label: 'Integrations' }
              ].map((category) => (
                <Button
                  key={category.id}
                  variant={activeTab === category.id ? "default" : "outline"}
                  onClick={() => setActiveTab(category.id)}
                  className="h-auto p-4 flex flex-col gap-2"
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm">{category.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {activeTab === 'feature-flags' && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>🚩 Feature Flags</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Create New Flag</Button>
                  <Button variant="outline" size="sm">Bulk Update</Button>
                  <Button variant="outline" size="sm">Export Configuration</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Feature</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Rollout</th>
                      <th className="text-left p-3">Environment</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureFlags.map((flag, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{flag.name}</td>
                        <td className="p-3">{getStatusBadge(flag.status)}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${flag.rollout}%` }}
                              />
                            </div>
                            <span className="text-sm">{flag.rollout}%</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <Badge variant="outline">{flag.environment}</Badge>
                        </td>
                        <td className="p-3">
                          <Button size="sm" variant="outline">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Service Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>🔧 Service Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Auth Service</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>JWT Expiry:</span>
                    <span>15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Refresh Token:</span>
                    <span>7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Login Attempts:</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session Timeout:</span>
                    <span>24 hours</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">AI Service</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Model:</span>
                    <span>GPT-4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Tokens:</span>
                    <span>4096</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Temperature:</span>
                    <span>0.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Timeout:</span>
                    <span>30s</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">Edit All Services</Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle>🛡️ Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Password Policy</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Min Length:</span>
                    <span>8 characters</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Require Special Chars:</span>
                    <span>✅ Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Require Numbers:</span>
                    <span>✅ Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Require Uppercase:</span>
                    <span>✅ Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Password History:</span>
                    <span>5 passwords</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Rate Limiting</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>API Calls:</span>
                    <span>1000/hour per user</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Login Attempts:</span>
                    <span>5/15min per IP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Password Reset:</span>
                    <span>3/hour per user</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registration:</span>
                    <span>10/day per IP</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">Update Security Settings</Button>
            </CardContent>
          </Card>
        </div>

        {/* Configuration Management */}
        <Card>
          <CardHeader>
            <CardTitle>💾 Configuration Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Last Updated:</span>
                  <div className="font-medium">Jan 15, 2024 2:34 PM by admin@mindlyfe.org</div>
                </div>
                <div>
                  <span className="text-gray-600">Configuration Version:</span>
                  <div className="font-medium">v2.4.1</div>
                </div>
                <div>
                  <span className="text-gray-600">Pending Changes:</span>
                  <div className="font-medium text-yellow-600">3 configurations awaiting deployment</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button>Save All Changes</Button>
                <Button variant="outline">Deploy to Staging</Button>
                <Button variant="outline">Deploy to Production</Button>
                <Button variant="outline">Rollback</Button>
                <Button variant="outline">Export Backup</Button>
                <Button variant="outline">Import Configuration</Button>
                <Button variant="outline">View Change History</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemConfiguration;
