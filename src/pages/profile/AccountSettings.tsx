
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Shield, 
  CreditCard, 
  Link2, 
  Key,
  Fingerprint,
  Monitor,
  AlertTriangle,
  Trash2,
  CheckCircle,
  X
} from 'lucide-react';

const AccountSettings = () => {
  const navigate = useNavigate();

  const subscription = {
    plan: 'Premium',
    status: 'active',
    nextBilling: 'Feb 15, 2024',
    amount: '$19.99/month'
  };

  const connectedAccounts = [
    { name: 'Google', connected: true, icon: '🟢' },
    { name: 'Apple', connected: false, icon: '🍎' },
    { name: 'Facebook', connected: false, icon: '📘' }
  ];

  const activeSessions = [
    { device: 'iPhone 15 Pro', location: 'New York, NY', lastActive: '2 hours ago', current: true },
    { device: 'MacBook Pro', location: 'New York, NY', lastActive: '1 day ago', current: false },
    { device: 'iPad Air', location: 'New York, NY', lastActive: '3 days ago', current: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/profile')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        </div>

        {/* Security */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Key className="w-4 h-4 mr-2" />
              Change Password
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Shield className="w-4 h-4 mr-2" />
              Two-Factor Authentication
              <Badge variant="outline" className="ml-auto text-orange-600 border-orange-300">
                Not Enabled
              </Badge>
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Fingerprint className="w-4 h-4 mr-2" />
              Biometric Settings
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Monitor className="w-4 h-4 mr-2" />
              Active Sessions
            </Button>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Subscription
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Current Plan: {subscription.plan}</p>
                <p className="text-sm text-gray-500">Next billing: {subscription.nextBilling}</p>
              </div>
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>
            
            <div className="pt-3 border-t space-y-2">
              <Button variant="outline" className="w-full">
                Manage Subscription
              </Button>
              <Button variant="outline" className="w-full">
                Billing History
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Connected Accounts */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Link2 className="w-5 h-5 mr-2" />
              Connected Accounts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {connectedAccounts.map((account, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{account.icon}</span>
                  <span className="font-medium">{account.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {account.connected ? (
                    <>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Connected
                      </Badge>
                      <Button variant="outline" size="sm">
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-3">
              Manage Connections
            </Button>
          </CardContent>
        </Card>

        {/* Active Sessions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Monitor className="w-5 h-5 mr-2" />
              Active Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium flex items-center gap-2">
                    {session.device}
                    {session.current && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        Current
                      </Badge>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">{session.location}</p>
                  <p className="text-xs text-gray-400">Last active: {session.lastActive}</p>
                </div>
                {!session.current && (
                  <Button variant="outline" size="sm">
                    <X className="w-3 h-3 mr-1" />
                    End Session
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Danger Zone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
            >
              Deactivate Account
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-red-500 text-red-600 hover:bg-red-50"
              onClick={() => navigate('/profile/privacy')}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountSettings;
