
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdminHeader from '@/components/dashboard/AdminHeader';
import { Badge } from '@/components/ui/badge';
import { Settings, Shield, Bell, DollarSign, Bot, BarChart3, Globe } from 'lucide-react';

const SystemConfiguration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader firstName="Admin" notificationCount={5} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">System Configuration</h1>
          <div className="flex gap-2">
            <Button variant="outline">Backup Config</Button>
            <Button>Save Changes</Button>
          </div>
        </div>

        {/* Configuration Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ⚙️ Configuration Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Settings className="w-6 h-6" />
                <span>Feature Flags</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Settings className="w-6 h-6" />
                <span>Service Settings</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Shield className="w-6 h-6" />
                <span>Security</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Bell className="w-6 h-6" />
                <span>Notifications</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <DollarSign className="w-6 h-6" />
                <span>Payment Gateways</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Bot className="w-6 h-6" />
                <span>AI Configuration</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <BarChart3 className="w-6 h-6" />
                <span>Analytics</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Globe className="w-6 h-6" />
                <span>Integrations</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feature Flags */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🚩 Feature Flags</CardTitle>
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
                  {[
                    { feature: 'New Chat Interface', status: 'Enabled', rollout: '100%', env: 'Production', color: 'green' },
                    { feature: 'Advanced AI Insights', status: 'Testing', rollout: '25%', env: 'Staging', color: 'yellow' },
                    { feature: 'Video Therapy Beta', status: 'Disabled', rollout: '0%', env: 'Development', color: 'red' },
                    { feature: 'Community Live Streaming', status: 'Testing', rollout: '10%', env: 'Production', color: 'yellow' },
                    { feature: 'Enhanced Crisis Detection', status: 'Enabled', rollout: '100%', env: 'Production', color: 'green' },
                    { feature: 'Mobile App Push v2', status: 'Testing', rollout: '50%', env: 'Production', color: 'yellow' },
                    { feature: 'Therapist Scheduling v3', status: 'Disabled', rollout: '0%', env: 'Development', color: 'red' }
                  ].map((flag, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{flag.feature}</td>
                      <td className="p-3">
                        <Badge variant={flag.color === 'green' ? 'default' : flag.color === 'yellow' ? 'outline' : 'destructive'}>
                          {flag.status}
                        </Badge>
                      </td>
                      <td className="p-3">{flag.rollout}</td>
                      <td className="p-3">{flag.env}</td>
                      <td className="p-3">
                        <Button size="sm" variant="outline">Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-2 mt-4">
              <Button>Create New Flag</Button>
              <Button variant="outline">Bulk Update</Button>
              <Button variant="outline">Export Configuration</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Service Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>🔧 Service Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Auth Service</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>JWT Expiry: 15 minutes</div>
                  <div>Refresh Token: 7 days</div>
                  <div>Max Login Attempts: 5</div>
                  <div>Session Timeout: 24 hours</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">AI Service</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Model: GPT-4</div>
                  <div>Max Tokens: 4096</div>
                  <div>Temperature: 0.7</div>
                  <div>Response Timeout: 30s</div>
                </div>
              </div>
              
              <Button className="w-full">Edit All Services</Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle>🛡️ Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Password Policy</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Min Length: 8 characters</div>
                  <div>Require Special Chars: ✅ Yes</div>
                  <div>Require Numbers: ✅ Yes</div>
                  <div>Require Uppercase: ✅ Yes</div>
                  <div>Password History: 5 passwords</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Rate Limiting</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>API Calls: 1000/hour per user</div>
                  <div>Login Attempts: 5/15min per IP</div>
                  <div>Password Reset: 3/hour per user</div>
                  <div>Registration: 10/day per IP</div>
                </div>
              </div>
              
              <Button className="w-full">Update Security Settings</Button>
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
              <div className="text-sm text-gray-600">
                <div>Last Updated: Jan 15, 2024 2:34 PM by admin@mindlyfe.org</div>
                <div>Configuration Version: v2.4.1</div>
                <div>Pending Changes: 3 configurations awaiting deployment</div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
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
