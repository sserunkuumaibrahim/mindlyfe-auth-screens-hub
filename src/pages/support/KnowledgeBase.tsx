
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SupportHeader from '@/components/dashboard/SupportHeader';
import { Search, BookOpen, AlertTriangle, Settings, CreditCard, User, Plus, BarChart3 } from 'lucide-react';

const KnowledgeBase = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SupportHeader firstName="Agent" notificationCount={12} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Knowledge Base</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Article
            </Button>
          </div>
        </div>

        {/* Search Knowledge Base */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🔍 Search Knowledge Base
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="crisis intervention procedures..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  />
                </div>
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 flex-wrap">
                  <select className="px-3 py-2 border rounded-md">
                    <option>All Categories</option>
                    <option>Crisis Support</option>
                    <option>Technical</option>
                    <option>Billing</option>
                    <option>Account Help</option>
                  </select>
                  <Button variant="outline" size="sm">Clear All</Button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-sm text-gray-600">Tags:</span>
                  <Button variant="outline" size="sm">procedures</Button>
                  <Button variant="outline" size="sm">crisis</Button>
                  <Button variant="outline" size="sm">emergency</Button>
                  <Button variant="outline" size="sm">protocols</Button>
                  <Button variant="outline" size="sm">training</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Base Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📚 Knowledge Base Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Crisis Support */}
              <div className="p-6 bg-red-50 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold">🚨 Crisis Support (47 articles)</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• Suicide Risk Assessment</div>
                  <div>• Crisis Intervention Protocols</div>
                  <div>• Emergency Contact Procedures</div>
                  <div>• Safety Planning Guidelines</div>
                  <div>• Legal Requirements</div>
                  <div>• Documentation Standards</div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Crisis Articles
                </Button>
              </div>

              {/* Technical Support */}
              <div className="p-6 bg-blue-50 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">🔧 Technical Support (89 articles)</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• App Troubleshooting</div>
                  <div>• Login Issues</div>
                  <div>• Payment Gateway Errors</div>
                  <div>• Video Session Problems</div>
                  <div>• Mobile App Issues</div>
                  <div>• Browser Compatibility</div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Technical Articles
                </Button>
              </div>

              {/* Billing Support */}
              <div className="p-6 bg-green-50 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">💳 Billing Support (34 articles)</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• Subscription Management</div>
                  <div>• Payment Processing Issues</div>
                  <div>• Refund Procedures</div>
                  <div>• Billing Disputes</div>
                  <div>• Family Plan Management</div>
                  <div>• Promo Codes & Discounts</div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Billing Articles
                </Button>
              </div>

              {/* Account Help */}
              <div className="p-6 bg-purple-50 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold">👤 Account Help (56 articles)</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• Account Recovery</div>
                  <div>• Profile Management</div>
                  <div>• Privacy Settings</div>
                  <div>• Data Export/Deletion</div>
                  <div>• Therapist Matching</div>
                  <div>• Notification Settings</div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Account Articles
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recently Updated Articles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📖 Recently Updated Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Crisis Intervention Protocol v3.2</div>
                  <div className="text-sm text-gray-600">Updated 2 hours ago by Crisis Team</div>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Payment Gateway Troubleshooting</div>
                  <div className="text-sm text-gray-600">Updated yesterday by Tech Team</div>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Therapist Verification Process</div>
                  <div className="text-sm text-gray-600">Updated 2 days ago by Admin Team</div>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">User Data Privacy Guidelines</div>
                  <div className="text-sm text-gray-600">Updated 3 days ago by Legal Team</div>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Mobile App Error Codes</div>
                  <div className="text-sm text-gray-600">Updated 1 week ago by Development Team</div>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access Tools */}
        <Card>
          <CardHeader>
            <CardTitle>🎯 Quick Access Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Plus className="w-6 h-6" />
                <span>Create Article</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <BarChart3 className="w-6 h-6" />
                <span>Usage Analytics</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <BookOpen className="w-6 h-6" />
                <span>Templates</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <AlertTriangle className="w-6 h-6" />
                <span>Emergency Procedures</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KnowledgeBase;
