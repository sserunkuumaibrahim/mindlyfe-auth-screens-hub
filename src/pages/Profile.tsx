
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Settings, 
  Shield, 
  Bell, 
  Database, 
  Activity,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Edit
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    avatar: null,
    joinedDate: '2024-01-01',
    lastActive: '2024-01-15T10:30:00Z',
    bio: 'Mental health advocate and wellness enthusiast'
  };

  const accountStatus = {
    emailVerified: true,
    profileComplete: true,
    mfaEnabled: false,
    subscriptionActive: true
  };

  const recentActivity = [
    { action: 'Profile updated', date: '2 days ago' },
    { action: 'Privacy settings changed', date: '1 week ago' },
    { action: 'Password changed', date: '2 weeks ago' }
  ];

  const quickActions = [
    { 
      icon: Shield, 
      label: 'Privacy', 
      route: '/profile/privacy',
      color: 'text-blue-600'
    },
    { 
      icon: Bell, 
      label: 'Notifications', 
      route: '/profile/notifications',
      color: 'text-green-600'
    },
    { 
      icon: Database, 
      label: 'Data', 
      route: '/profile/data-export',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName={user.firstName} notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/profile/account')}
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="mb-6">
          <CardContent className="p-6 text-center">
            <Avatar className="w-20 h-20 mx-auto mb-4">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-xl bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green text-white">
                {user.firstName[0]}{user.lastName[0]}
              </AvatarFallback>
            </Avatar>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600 mb-2">{user.email}</p>
            <p className="text-sm text-gray-500 mb-4">
              Member since {new Date(user.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
            
            {user.bio && (
              <p className="text-gray-700 mb-4 text-sm">{user.bio}</p>
            )}
            
            <Button 
              onClick={() => navigate('/profile/edit')}
              className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Account Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Account Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Verified</span>
              {accountStatus.emailVerified ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Unverified
                </Badge>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Profile Complete</span>
              {accountStatus.profileComplete ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Complete
                </Badge>
              ) : (
                <Badge variant="outline">Incomplete</Badge>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Two-Factor Authentication</span>
              {accountStatus.mfaEnabled ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Enabled
                </Badge>
              ) : (
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Not Enabled
                </Badge>
              )}
            </div>
            
            {!accountStatus.mfaEnabled && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-3 border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
                onClick={() => navigate('/profile/account')}
              >
                Improve Security
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => navigate(action.route)}
                  className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <action.icon className={`w-6 h-6 mb-2 ${action.color}`} />
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{activity.action}</span>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </div>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-3 text-mindlyfe-blue border-mindlyfe-blue hover:bg-mindlyfe-blue/10"
            >
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
