import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Settings, Bell, Filter, MoreVertical } from 'lucide-react';

// Notifications data
interface Notification {
  id: string;
  type?: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  category: string;
  icon: string;
  action?: string;
}

const NotificationsCenter = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  // Notifications data
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'achievement',
      title: 'Achievement Unlocked',
      message: 'You earned "Mindful Week" badge for meditating 7 days in a row!',
      timestamp: '2 hours ago',
      read: false,
      category: 'achievement',
      icon: '🏆',
      action: 'View Badge'
    },
    {
      id: '2',
      title: 'Session Reminder',
      message: 'Your therapy session with Dr. Johnson starts in 1 hour',
      timestamp: '1 hour ago',
      read: false,
      category: 'therapy',
      icon: '👨‍⚕️',
      action: 'Join Session'
    },
    {
      id: '3',
      type: 'ai',
      title: 'LyfBot Insights',
      message: 'LyfBot noticed improvements in your mood patterns and has new insights to share',
      timestamp: '3 hours ago',
      read: false,
      category: 'ai',
      icon: '🤖',
      action: 'View Insights'
    },
    {
      id: '4',
      type: 'community',
      title: 'Community Activity',
      message: '3 people liked your post about mindfulness techniques',
      timestamp: '5 hours ago',
      read: true,
      category: 'community',
      icon: '👥',
      action: 'View Post'
    },
    {
      id: '5',
      type: 'report',
      title: 'Weekly Report Ready',
      message: 'Your personalized wellness summary for this week is available',
      timestamp: '1 day ago',
      read: true,
      category: 'analytics',
      icon: '📊',
      action: 'View Report'
    },
    {
      id: '6',
      type: 'milestone',
      title: 'Goal Milestone',
      message: 'Congratulations! You achieved your 10-day meditation streak',
      timestamp: '1 day ago',
      read: true,
      category: 'achievement',
      icon: '🎯',
      action: 'View Progress'
    },
    {
      id: '7',
      type: 'resource',
      title: 'New Resource Available',
      message: '"Managing Anxiety" course has been added to your recommended resources',
      timestamp: '2 days ago',
      read: true,
      category: 'learning',
      icon: '📚',
      action: 'View Course'
    },
    {
      id: '8',
      type: 'system',
      title: 'System Update',
      message: 'New features are now available in the MindLyfe app',
      timestamp: '3 days ago',
      read: true,
      category: 'system',
      icon: '🔄',
      action: 'Learn More'
    }
  ];

  const filterOptions = [
    { key: 'all', label: 'All', count: notifications.length },
    { key: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { key: 'therapy', label: 'Therapy', count: notifications.filter(n => n.category === 'therapy').length },
    { key: 'community', label: 'Community', count: notifications.filter(n => n.category === 'community').length },
    { key: 'achievement', label: 'Achievements', count: notifications.filter(n => n.category === 'achievement').length }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unread') return !notification.read;
    return notification.category === activeFilter;
  });

  const groupedNotifications: Record<string, Notification[]> = filteredNotifications.reduce((groups, notification) => {
    const timeGroup = getTimeGroup(notification.timestamp);
    if (!groups[timeGroup]) {
      groups[timeGroup] = [];
    }
    groups[timeGroup].push(notification);
    return groups;
  }, {} as Record<string, Notification[]>);

  function getTimeGroup(timestamp: string): string {
    if (timestamp.includes('hour')) return 'Today';
    if (timestamp.includes('1 day')) return 'Yesterday';
    if (timestamp.includes('days')) return 'This Week';
    return 'Older';
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      achievement: 'bg-yellow-100 text-yellow-800',
      therapy: 'bg-blue-100 text-blue-800',
      community: 'bg-green-100 text-green-800',
      ai: 'bg-purple-100 text-purple-800',
      analytics: 'bg-indigo-100 text-indigo-800',
      learning: 'bg-pink-100 text-pink-800',
      system: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            </div>
          </div>
          
          <Button variant="outline" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <Button
                  key={option.key}
                  variant={activeFilter === option.key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(option.key)}
                  className="flex items-center gap-2"
                >
                  {option.label}
                  {option.count > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {option.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-6">
          {Object.entries(groupedNotifications).map(([timeGroup, groupNotifications]) => (
            <Card key={timeGroup}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {timeGroup}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                {groupNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer ${
                      !notification.read 
                        ? 'bg-blue-50 border-blue-200 hover:bg-blue-100' 
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl flex-shrink-0">{notification.icon}</div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notification.title}
                              </h3>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-gray-500">{notification.timestamp}</span>
                              <Badge variant="secondary" className={getCategoryColor(notification.category)}>
                                {notification.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {notification.action && (
                              <Button variant="outline" size="sm">
                                {notification.action}
                              </Button>
                            )}
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNotifications.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-600">You're all caught up! No new notifications to show.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NotificationsCenter;
