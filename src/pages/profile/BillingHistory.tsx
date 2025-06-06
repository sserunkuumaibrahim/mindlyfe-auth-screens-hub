
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Eye, RefreshCw, CreditCard, CheckCircle, X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const BillingHistory = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('3months');

  const transactions = [
    {
      id: 'INV-2024-001',
      type: 'subscription',
      description: 'Premium Subscription',
      amount: 32.54,
      currency: 'USD',
      date: '2024-01-15',
      status: 'successful',
      gateway: 'Stripe',
      paymentMethod: 'Visa •••• 4242'
    },
    {
      id: 'INV-2024-002',
      type: 'therapy',
      description: 'Therapy Session - Dr. Sarah Johnson',
      amount: 120.00,
      currency: 'USD',
      date: '2024-01-10',
      status: 'successful',
      gateway: 'Stripe',
      paymentMethod: 'Visa •••• 4242'
    },
    {
      id: 'INV-2024-003',
      type: 'subscription',
      description: 'Premium Subscription',
      amount: 29.99,
      currency: 'USD',
      date: '2024-01-05',
      status: 'failed',
      gateway: 'DPO Pay',
      paymentMethod: 'M-Pesa',
      failureReason: 'Insufficient funds'
    },
    {
      id: 'INV-2023-015',
      type: 'subscription',
      description: 'Premium Subscription',
      amount: 32.54,
      currency: 'USD',
      date: '2023-12-15',
      status: 'successful',
      gateway: 'Stripe',
      paymentMethod: 'Visa •••• 4242'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'successful':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'failed':
        return <X className="w-4 h-4 text-red-500" />;
      case 'pending':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <CreditCard className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'successful':
        return <Badge className="bg-green-100 text-green-800">Successful</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (selectedFilter === 'all') return true;
    return transaction.status === selectedFilter;
  });

  const monthlyStats = {
    totalPaid: 182.53,
    successfulPayments: 4,
    failedPayments: 1,
    nextBilling: '2024-02-15'
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
            <h1 className="text-xl font-bold text-gray-900">Billing History</h1>
            <p className="text-sm text-gray-600">View your payment history and receipts</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex gap-2">
            {['all', 'successful', 'failed', 'pending'].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? 'bg-mindlyfe-blue' : ''}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2">
            {[
              { value: '1month', label: 'This Month' },
              { value: '3months', label: 'Last 3 Months' },
              { value: '6months', label: 'Last 6 Months' },
              { value: 'year', label: 'This Year' }
            ].map((period) => (
              <Button
                key={period.value}
                variant={selectedPeriod === period.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPeriod(period.value)}
                className={selectedPeriod === period.value ? 'bg-mindlyfe-blue' : ''}
              >
                {period.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Monthly Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Monthly Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">${monthlyStats.totalPaid}</p>
                <p className="text-sm text-gray-600">Total Paid</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{monthlyStats.successfulPayments}</p>
                <p className="text-sm text-gray-600">Successful</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">{monthlyStats.failedPayments}</p>
                <p className="text-sm text-gray-600">Failed</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900">{monthlyStats.nextBilling}</p>
                <p className="text-sm text-gray-600">Next Billing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTransactions.map((transaction) => (
                <div key={transaction.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getStatusIcon(transaction.status)}
                      <div>
                        <h3 className="font-medium text-gray-900">{transaction.description}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(transaction.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {transaction.gateway}
                          </Badge>
                          <span className="text-xs text-gray-500">{transaction.paymentMethod}</span>
                        </div>
                        {transaction.failureReason && (
                          <p className="text-xs text-red-600 mt-1">{transaction.failureReason}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${transaction.amount.toFixed(2)} {transaction.currency}
                      </p>
                      <div className="mt-1">
                        {getStatusBadge(transaction.status)}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{transaction.id}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      Download
                    </Button>
                    {transaction.status === 'failed' && (
                      <Button size="sm" className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90 flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" />
                        Retry
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Statements
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Tax Summary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;
