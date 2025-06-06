
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Settings, ChevronRight } from 'lucide-react';

const NotificationsCenter = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'achievement',
      title: 'Achievement Unlocked',
      description: 'You earned "Mindful Week"',
      time: '2 hours ago',
      icon: '🏆',
      unread: true,
      category: 'achievement'
    },
    {
      id: 2,
      type: 'therapy',
      title: 'Session Reminder',
      description: 'Therapy with Dr. Johnson in 1 hour',
      time: '1 hour ago',
      icon: '👨‍⚕️',
      unread: true,
      category: 'therapy'
    },
    {
      id: 3,
      type: 'lyfbot',
      title: 'New Message',
      description: 'LyfBot has insights about your mood',
      time: '3 hours ago',
      icon: '💬',
      unread: true,
      category: 'system'
    },
    {
      id: 4,
      type: 'report',
      title: 'Weekly Report Ready',
      description: 'Your wellness summary is available',
      time: 'Yesterday',
      icon: '📊',
      unread: false,
      category: 'system'
    },
    {
      id: 5,
      type: 'community',
      title: 'Community Activity',
      description: '3 people liked your post',
      time: 'Yesterday',
      icon: '👥',
      unread: false,
      category: 'community'
    },
    {
      id: 6,
      type: 'milestone',
      title: 'Goal Milestone',
      description: 'Meditation streak: 10 days achieved',
      time: 'Yesterday',
      icon: '🎯',
      unread: false,
      category: 'achievement'
    },
    {
      id: 7,
      type: 'resource',
      title: 'New Resource Available',
      description: '"Managing Anxiety" course added',
      time: 'This week',
      icon: '📚',
      unread: false,
      category: 'system'
    },
    {
      id: 8,
      type: 'update',
      title: 'System Update',
      description: 'New features available in the app',
      time: 'This week',
      icon: '🔄',
      unread: false,
      category: 'system'
    }
  ];

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => n.unread).length },
    { id: 'therapy', label: 'Therapy', count: notifications.filter(n => n.category === 'therapy').length },
    { id: 'community', label: 'Community', count: notifications.filter(n => n.category === 'community').length }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unread') return notification.unread;
    return notification.category === activeFilter;
  });

  const groupedNotifications = {
    today: filteredNotifications.filter(n => n.time.includes('hour')),
    yesterday: filteredNotifications.filter(n => n.time === 'Yesterday'),
    thisWeek: filteredNotifications.filter(n => n.time === 'This week')
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'achievement': return 'from-yellow-400 to-orange-500';
      case 'therapy': return 'from-blue-400 to-cyan-500';
      case 'lyfbot': return 'from-purple-400 to-pink-500';
      case 'report': return 'from-green-400 to-emerald-500';
      case 'community': return 'from-red-400 to-pink-500';
      case 'milestone': return 'from-indigo-400 to-purple-500';
      case 'resource': return 'from-teal-400 to-cyan-500';
      case 'update': return 'from-gray-400 to-slate-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const NotificationGroup = ({ title, notifications, showIndicator = false }: { title: string, notifications: any[], showIndicator?: boolean }) => {
    if (notifications.length === 0) return null;

    return (
      <Card className="mb-4 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            {showIndicator && <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/20 hover:bg-white/70 transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${getNotificationColor(notification.type)} rounded-lg flex items-center justify-center shadow-md`}>
                  <span className="text-xl">{notification.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{notification.description}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard')}
              className="hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-white/20">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <Card className="mb-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardContent className="p-4">
            <div className="flex gap-2 overflow-x-auto">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`whitespace-nowrap ${activeFilter === filter.id ? "" : "bg-white/50"}`}
                >
                  {filter.label}
                  {filter.count > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {filter.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications Groups */}
        <NotificationGroup 
          title="Today" 
          notifications={groupedNotifications.today} 
          showIndicator={true}
        />
        <NotificationGroup 
          title="Yesterday" 
          notifications={groupedNotifications.yesterday} 
        />
        <NotificationGroup 
          title="This Week" 
          notifications={groupedNotifications.thisWeek} 
        />

        {filteredNotifications.length === 0 && (
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-600">You're all caught up!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NotificationsCenter;
