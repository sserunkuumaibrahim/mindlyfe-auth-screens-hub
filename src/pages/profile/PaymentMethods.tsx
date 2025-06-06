
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const PaymentMethods = () => {
  const navigate = useNavigate();
  const [selectedGateway, setSelectedGateway] = useState('stripe');
  const [selectedCurrency, setSelectedCurrency] = useState('usd');

  const savedMethods = [
    {
      id: '1',
      type: 'card',
      name: 'Visa •••• 4242',
      details: 'Expires 12/25',
      isDefault: true,
      gateway: 'stripe',
      currency: 'USD'
    },
    {
      id: '2',
      type: 'mobile',
      name: 'M-Pesa Mobile Money',
      details: '+254 7XX XXX XXX',
      isDefault: false,
      gateway: 'dpo',
      currency: 'KES'
    }
  ];

  const gateways = [
    { id: 'stripe', name: 'Stripe', recommended: true },
    { id: 'dpo', name: 'DPO Pay (Africa)' },
    { id: 'paypal', name: 'PayPal' },
    { id: 'square', name: 'Square' }
  ];

  const currencies = [
    { code: 'usd', name: 'USD - US Dollar', region: '🌍 Global' },
    { code: 'eur', name: 'EUR - Euro', region: '🌍 Global' },
    { code: 'gbp', name: 'GBP - British Pound', region: '🌍 Global' },
    { code: 'kes', name: 'KES - Kenya Shilling', region: '🌍 Africa' },
    { code: 'ugx', name: 'UGX - Uganda Shilling', region: '🌍 Africa' },
    { code: 'tzs', name: 'TZS - Tanzania Shilling', region: '🌍 Africa' },
    { code: 'inr', name: 'INR - Indian Rupee', region: '🌍 Asia' }
  ];

  const handleRemoveMethod = (methodId: string) => {
    console.log('Removing payment method:', methodId);
    // Implementation for removing payment method
  };

  const handleSetDefault = (methodId: string) => {
    console.log('Setting default payment method:', methodId);
    // Implementation for setting default payment method
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
            <h1 className="text-xl font-bold text-gray-900">Payment Methods</h1>
            <p className="text-sm text-gray-600">Manage your payment options</p>
          </div>
        </div>

        {/* Saved Payment Methods */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Saved Payment Methods</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {savedMethods.map((method) => (
              <div key={method.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {method.type === 'card' ? (
                      <CreditCard className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Smartphone className="w-5 h-5 text-green-600" />
                    )}
                    <div>
                      <h3 className="font-medium text-gray-900">{method.name}</h3>
                      <p className="text-sm text-gray-600">{method.details}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {method.gateway.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {method.currency}
                        </Badge>
                        {method.isDefault && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Default
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleRemoveMethod(method.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
                
                {!method.isDefault && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-2 text-blue-600"
                    onClick={() => handleSetDefault(method.id)}
                  >
                    Set as Default
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Add New Payment Method */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Gateway
              </label>
              <Select value={selectedGateway} onValueChange={setSelectedGateway}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gateway" />
                </SelectTrigger>
                <SelectContent>
                  {gateways.map((gateway) => (
                    <SelectItem key={gateway.id} value={gateway.id}>
                      {gateway.name} {gateway.recommended && '(Recommended)'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Type
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="paymentType" value="card" defaultChecked className="mr-2" />
                  <span className="text-sm">Credit/Debit Card</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="paymentType" value="mobile" className="mr-2" />
                  <span className="text-sm">Mobile Money (DPO Pay)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="paymentType" value="bank" className="mr-2" />
                  <span className="text-sm">Bank Transfer</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="paymentType" value="paypal" className="mr-2" />
                  <span className="text-sm">PayPal</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency
              </label>
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.region} {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90">
              Add Payment Method
            </Button>
          </CardContent>
        </Card>

        {/* Supported Currencies */}
        <Card>
          <CardHeader>
            <CardTitle>Supported Currencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">🌍 Global</h4>
                <p className="text-gray-600">USD, EUR, GBP</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">🌍 Africa</h4>
                <p className="text-gray-600">KES, UGX, TZS, RWF, GHS, NGN</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">🌍 Asia</h4>
                <p className="text-gray-600">INR, SGD, MYR</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentMethods;
