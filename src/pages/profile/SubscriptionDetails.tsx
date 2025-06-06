
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Calendar, Users, Settings, AlertTriangle, RefreshCw, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const SubscriptionDetails = () => {
  const navigate = useNavigate();
  const [emailReceipts, setEmailReceipts] = useState(true);
  const [autoRenewal, setAutoRenewal] = useState(true);
  const [billingNotifications, setBillingNotifications] = useState(true);

  const subscription = {
    plan: 'Premium Plan',
    price: 29.99,
    period: 'month',
    status: 'active',
    startDate: '2023-12-15',
    nextBilling: '2024-02-15',
    paymentMethod: 'Visa •••• 4242'
  };

  const usage = {
    therapySessions: { used: 4, limit: 'unlimited' },
    aiConversations: { used: 45, limit: 'unlimited' },
    premiumResources: { used: 12, limit: 'unlimited' },
    advancedAnalytics: true
  };

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
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Subscription Details</h1>
            <p className="text-sm text-gray-600">Manage your current subscription</p>
          </div>
        </div>

        {/* Current Plan */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    ⭐ {subscription.plan}
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </h3>
                  <p className="text-sm text-gray-600">
                    ${subscription.price}/{subscription.period}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/profile/subscription-plans')}
                >
                  <Edit className="w-3 h-3 mr-1" />
                  Change Plan
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-600">Active since</p>
                  <p className="font-medium">
                    {new Date(subscription.startDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Next billing</p>
                  <p className="font-medium">
                    {new Date(subscription.nextBilling).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Payment method</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{subscription.paymentMethod}</span>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan Management */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Plan Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate('/profile/subscription-plans')}
            >
              <Users className="w-4 h-4 mr-2" />
              Upgrade to Family Plan
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Switch to Yearly (Save 20%)
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate('/profile/payment-methods')}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Change Payment Method
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Settings className="w-4 h-4 mr-2" />
              Update Billing Address
            </Button>
          </CardContent>
        </Card>

        {/* Usage This Month */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Usage This Month</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">🎥 Therapy sessions</span>
              <span className="font-medium">
                {usage.therapySessions.used}/{usage.therapySessions.limit}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700">🤖 AI conversations</span>
              <span className="font-medium">
                {usage.aiConversations.used}/{usage.aiConversations.limit}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700">📚 Premium resources</span>
              <span className="font-medium">
                {usage.premiumResources.used}/{usage.premiumResources.limit}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700">📊 Advanced analytics</span>
              <Badge className="bg-green-100 text-green-800">Enabled</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Billing Preferences */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Billing Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Email receipts</span>
                <span className="text-lg">📧</span>
              </div>
              <Switch 
                checked={emailReceipts} 
                onCheckedChange={setEmailReceipts}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Auto-renewal</span>
                <span className="text-lg">🔄</span>
              </div>
              <Switch 
                checked={autoRenewal} 
                onCheckedChange={setAutoRenewal}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Billing notifications</span>
                <span className="text-lg">🔔</span>
              </div>
              <Switch 
                checked={billingNotifications} 
                onCheckedChange={setBillingNotifications}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-3 mb-6">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate('/profile/billing-history')}
          >
            View Billing History
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate('/profile/payment-methods')}
          >
            Manage Payment Methods
          </Button>
        </div>

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
              <RefreshCw className="w-4 h-4 mr-2" />
              Pause Subscription
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-red-500 text-red-600 hover:bg-red-50"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Cancel Subscription
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
