
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import AdminHeader from '@/components/dashboard/AdminHeader';
import { Search, Users, CheckCircle, AlertTriangle, UserX } from 'lucide-react';

const UserManagement = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const mockUsers = [
    {
      id: '12847',
      name: 'John Doe',
      email: 'john.doe@email.com',
      role: 'User',
      status: 'Active',
      lastActive: '2 min ago',
      risk: 'Low'
    },
    {
      id: '12846',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.j@mindlyfe.org',
      role: 'Therapist',
      status: 'Active',
      lastActive: '15 min ago',
      risk: 'Low'
    },
    {
      id: '12845',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      role: 'User',
      status: 'Suspended',
      lastActive: '2 days ago',
      risk: 'High'
    },
    {
      id: '12844',
      name: 'Mike Wilson',
      email: 'mike.w@company.com',
      role: 'Org Admin',
      status: 'Active',
      lastActive: '1 hour ago',
      risk: 'Low'
    },
    {
      id: '12843',
      name: 'Emma Davis',
      email: 'emma.d@email.com',
      role: 'User',
      status: 'Active',
      lastActive: '5 min ago',
      risk: 'Medium'
    }
  ];

  const handleUserSelect = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'destructive';
      case 'Medium': return 'outline';
      case 'Low': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Suspended': return <UserX className="w-4 h-4 text-red-500" />;
      case 'Inactive': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default: return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader firstName="Admin" notificationCount={5} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">User Management</h1>
          <Button>Export Users</Button>
        </div>

        {/* Search & Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🔍 Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input 
                    placeholder="Search by name, email, or ID..." 
                    className="pl-10"
                  />
                </div>
                <Button>🔍 Search</Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <select className="px-3 py-2 border rounded-md">
                  <option>All Users</option>
                  <option>Active Users</option>
                  <option>Suspended Users</option>
                </select>
                <select className="px-3 py-2 border rounded-md">
                  <option>All Roles</option>
                  <option>Users</option>
                  <option>Therapists</option>
                  <option>Admins</option>
                </select>
                <select className="px-3 py-2 border rounded-md">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Suspended</option>
                  <option>Inactive</option>
                </select>
                <select className="px-3 py-2 border rounded-md">
                  <option>Risk Level</option>
                  <option>High Risk</option>
                  <option>Medium Risk</option>
                  <option>Low Risk</option>
                </select>
                <Button variant="outline" size="sm">Clear All</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Statistics */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>📊 User Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
              <div>
                <div className="text-lg font-bold">45,892</div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-600">38,247</div>
                <div className="text-sm text-gray-600">Active</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-600">127</div>
                <div className="text-sm text-gray-600">Suspended</div>
              </div>
              <div>
                <div className="text-lg font-bold text-orange-600">23</div>
                <div className="text-sm text-gray-600">High Risk</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-600">247</div>
                <div className="text-sm text-gray-600">New Today</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-600">12,847</div>
                <div className="text-sm text-gray-600">Premium</div>
              </div>
              <div>
                <div className="text-lg font-bold text-indigo-600">1,247</div>
                <div className="text-sm text-gray-600">Therapists</div>
              </div>
              <div>
                <div className="text-lg font-bold text-pink-600">89</div>
                <div className="text-sm text-gray-600">Organizations</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User List */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                👥 User List
              </CardTitle>
              <div className="flex gap-2">
                <select className="px-3 py-2 border rounded-md text-sm">
                  <option>Bulk Actions</option>
                  <option>Send Email</option>
                  <option>Suspend Accounts</option>
                  <option>Update Subscription</option>
                  <option>Export Selected</option>
                </select>
                <Button variant="outline" size="sm">Apply</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">
                      <input 
                        type="checkbox" 
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedUsers(mockUsers.map(u => u.id));
                          } else {
                            setSelectedUsers([]);
                          }
                        }}
                      />
                    </th>
                    <th className="text-left p-3">ID</th>
                    <th className="text-left p-3">Name</th>
                    <th className="text-left p-3">Email</th>
                    <th className="text-left p-3">Role</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Last Active</th>
                    <th className="text-left p-3">Risk</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <input 
                          type="checkbox" 
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => handleUserSelect(user.id)}
                        />
                      </td>
                      <td className="p-3 font-mono text-sm">{user.id}</td>
                      <td className="p-3 font-medium">{user.name}</td>
                      <td className="p-3 text-sm text-gray-600">{user.email}</td>
                      <td className="p-3">
                        <Badge variant="outline">{user.role}</Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(user.status)}
                          <span className="text-sm">{user.status}</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-gray-600">{user.lastActive}</td>
                      <td className="p-3">
                        <Badge variant={getRiskBadgeColor(user.risk)}>{user.risk}</Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">👁️</Button>
                          <Button size="sm" variant="outline">✏️</Button>
                          <Button size="sm" variant="outline">🚫</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">◀ Previous</Button>
                <span className="text-sm text-gray-600">Page 1 of 2,295</span>
                <Button variant="outline" size="sm">Next ▶</Button>
              </div>
              <select className="px-3 py-2 border rounded-md text-sm">
                <option>10 per page</option>
                <option>25 per page</option>
                <option>50 per page</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>🔧 Bulk Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <span className="text-sm">Selected: {selectedUsers.length} users</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Send Email</Button>
                  <Button size="sm" variant="outline">Suspend Accounts</Button>
                  <Button size="sm" variant="outline">Update Subscription</Button>
                  <Button size="sm" variant="outline">Export Selected</Button>
                  <Button size="sm" variant="outline">Change Role</Button>
                  <Button size="sm" variant="outline">Reset Password</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
