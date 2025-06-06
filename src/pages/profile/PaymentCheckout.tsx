
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Lock, Shield, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const PaymentCheckout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedGateway, setSelectedGateway] = useState('stripe');
  const [saveCard, setSaveCard] = useState(true);
  const [processing, setProcessing] = useState(false);

  const planId = location.state?.planId || 'premium';
  
  const planDetails = {
    premium: { name: 'Premium Plan (Monthly)', price: 29.99 },
    family: { name: 'Family Plan (Monthly)', price: 79.99 }
  };

  const plan = planDetails[planId as keyof typeof planDetails];
  const tax = plan.price * 0.085; // 8.5% tax
  const total = plan.price + tax;

  const gateways = [
    { id: 'stripe', name: 'Stripe', recommended: true, icon: '💳' },
    { id: 'dpo', name: 'DPO Pay (Africa)', icon: '🌍' },
    { id: 'paypal', name: 'PayPal', icon: '💰' }
  ];

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      navigate('/profile/payment-success', { 
        state: { 
          planName: plan.name, 
          amount: total.toFixed(2) 
        } 
      });
    }, 3000);
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
            onClick={() => navigate('/profile/subscription-plans')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Complete Payment</h1>
            <p className="text-sm text-gray-600">Secure checkout process</p>
          </div>
        </div>

        {/* Order Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">{plan.name}</span>
                <span className="font-medium">${plan.price.toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (8.5%)</span>
                <span className="text-gray-600">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Gateway Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment Gateway</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {gateways.map((gateway) => (
                <label key={gateway.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="gateway"
                    value={gateway.id}
                    checked={selectedGateway === gateway.id}
                    onChange={(e) => setSelectedGateway(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-lg mr-3">{gateway.icon}</span>
                  <span className="font-medium">{gateway.name}</span>
                  {gateway.recommended && (
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Recommended
                    </span>
                  )}
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="mt-1"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="cardholderName">Cardholder Name</Label>
              <Input
                id="cardholderName"
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Save for future payments</span>
            </label>
          </CardContent>
        </Card>

        {/* Security Features */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-600" />
                <span>256-bit SSL encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>PCI DSS compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Fraud detection active</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>3D Secure enabled</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={processing}
          className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 py-3 text-lg"
        >
          {processing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing Payment...
            </div>
          ) : (
            `Complete Payment - $${total.toFixed(2)}`
          )}
        </Button>

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-600 mt-4">
          🔒 Your payment is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default PaymentCheckout;
