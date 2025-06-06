
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, Download, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const planName = location.state?.planName || 'Premium Plan';
  const amount = location.state?.amount || '32.54';

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600">
            Welcome to your new {planName}. Your subscription is now active.
          </p>
        </div>

        {/* Payment Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment Confirmation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Plan</span>
              <span className="font-medium">{planName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Amount Paid</span>
              <span className="font-medium">${amount} USD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Payment Method</span>
              <span className="font-medium">Visa •••• 4242</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Transaction ID</span>
              <span className="font-medium">TXN-2024-001234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Date</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Next Billing</span>
              <span className="font-medium">
                {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-blue-600">1</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Explore Premium Features</h4>
                <p className="text-sm text-gray-600">Access unlimited therapy sessions, advanced AI insights, and premium resources.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-blue-600">2</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Set Up Your Profile</h4>
                <p className="text-sm text-gray-600">Complete your wellness profile to get personalized recommendations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-blue-600">3</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Book Your First Session</h4>
                <p className="text-sm text-gray-600">Schedule a therapy session with one of our licensed professionals.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
          >
            Go to Dashboard
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Receipt
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share className="w-4 h-4" />
              Share Success
            </Button>
          </div>
          
          <Button
            variant="outline"
            onClick={() => navigate('/profile/subscription-details')}
            className="w-full"
          >
            Manage Subscription
          </Button>
        </div>

        {/* Support */}
        <div className="text-center mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Our support team is here to help you get the most out of your subscription.
          </p>
          <Button variant="outline" size="sm">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
