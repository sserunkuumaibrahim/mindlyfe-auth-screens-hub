
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const SubscriptionPlans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 'Free',
      period: 'Forever',
      icon: '🆓',
      current: true,
      features: [
        { name: 'Basic journaling', included: true },
        { name: 'Community access', included: true },
        { name: 'Limited AI insights', included: true },
        { name: 'Basic resources', included: true },
        { name: 'Unlimited therapy', included: false },
        { name: 'Premium AI features', included: false },
        { name: 'Advanced analytics', included: false },
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '$29.99',
      period: 'month',
      icon: '⭐',
      popular: true,
      features: [
        { name: 'Everything in Basic', included: true },
        { name: 'Unlimited therapy', included: true },
        { name: 'Advanced AI insights', included: true },
        { name: 'Premium resources', included: true },
        { name: 'Priority support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Export capabilities', included: true },
      ]
    },
    {
      id: 'family',
      name: 'Family Plan',
      price: '$79.99',
      period: 'month',
      icon: '👨‍👩‍👧‍👦',
      subtitle: '4 users',
      features: [
        { name: 'Everything in Premium', included: true },
        { name: 'Up to 4 family members', included: true },
        { name: 'Shared family dashboard', included: true },
        { name: 'Parental controls', included: true },
        { name: 'Family therapy sessions', included: true },
        { name: 'Cross-member insights', included: true },
        { name: 'Save 33% vs individual', included: true },
      ]
    }
  ];

  const handleSelectPlan = (planId: string) => {
    if (planId === 'basic') return; // Already on basic
    navigate('/profile/payment-checkout', { state: { planId } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
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
            <h1 className="text-2xl font-bold text-gray-900">Choose Your Plan</h1>
            <p className="text-gray-600">Upgrade to unlock premium features</p>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white rounded-lg p-1 border">
            <Button variant="default" size="sm" className="bg-mindlyfe-blue">
              Monthly
            </Button>
            <Button variant="ghost" size="sm">
              Yearly
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                Save 20%
              </Badge>
            </Button>
            <Button variant="ghost" size="sm">
              Family
            </Button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${plan.popular ? 'border-mindlyfe-blue shadow-lg scale-105' : ''} ${plan.current ? 'border-green-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-mindlyfe-blue text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">{plan.icon}</div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                {plan.subtitle && (
                  <p className="text-sm text-gray-600">{plan.subtitle}</p>
                )}
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period !== 'Forever' && (
                    <span className="text-gray-600">/{plan.period}</span>
                  )}
                </div>
                {plan.id === 'premium' && (
                  <p className="text-sm text-green-600 mt-1">Save 20% with yearly</p>
                )}
                {plan.id === 'family' && (
                  <p className="text-sm text-green-600 mt-1">Save 33% vs individual</p>
                )}
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full ${
                    plan.current 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : plan.popular
                      ? 'bg-mindlyfe-blue hover:bg-mindlyfe-blue/90'
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : plan.id === 'family' ? 'Choose Family Plan' : 'Upgrade Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-600 mb-4">
          🔒 Secure payment • Cancel anytime • 30-day money-back guarantee
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Can I change plans anytime?</h4>
              <p className="text-sm text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">What payment methods do you accept?</h4>
              <p className="text-sm text-gray-600">We accept all major credit cards, PayPal, and mobile money payments in supported regions.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Is there a free trial?</h4>
              <p className="text-sm text-gray-600">Our Basic plan is free forever. Premium plans come with a 14-day free trial.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
