
import React from 'react';
import { Bell, Menu, User, Users, BookOpen, FileText, Video, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate, useLocation } from 'react-router-dom';

interface DashboardHeaderProps {
  firstName: string;
  notificationCount?: number;
  onMenuClick?: () => void;
}

const DashboardHeader = ({ firstName, notificationCount = 0, onMenuClick }: DashboardHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Teletherapy', route: '/teletherapy', active: location.pathname.startsWith('/teletherapy') },
    { label: 'Chat', route: '/chat', active: location.pathname.startsWith('/chat') },
    { label: 'Journal', route: '/journal', active: location.pathname.startsWith('/journal') },
    { label: 'Resources', route: '/resources', active: location.pathname.startsWith('/resources') },
    { label: 'Community', route: '/community', active: location.pathname.startsWith('/community') },
  ];

  const mobileQuickActions = [
    { label: 'Teletherapy', route: '/teletherapy', icon: Video },
    { label: 'Chat', route: '/chat', icon: MessageSquare },
    { label: 'Journal', route: '/journal', icon: FileText },
    { label: 'Resources', route: '/resources', icon: BookOpen },
    { label: 'Community', route: '/community', icon: Users },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Mindlyfe Logo - Clickable */}
            <button 
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/0a9198ee-9723-465f-b3fd-397599a1f756.png"
                alt="Mindlyfe"
                className="h-12 w-auto md:h-14"
              />
            </button>
            
            {/* Navigation - Hidden on small screens */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.route)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? 'bg-mindlyfe-blue text-white'
                      : 'text-gray-600 hover:text-mindlyfe-blue hover:bg-mindlyfe-blue/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="lg:hidden hover:bg-mindlyfe-blue/10"
            >
              <Menu className="w-5 h-5 text-mindlyfe-blue" />
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Quick Access Buttons */}
            <div className="flex lg:hidden gap-1">
              {mobileQuickActions.map((action) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={action.label}
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(action.route)}
                    className="rounded-lg hover:bg-mindlyfe-blue/10"
                    title={action.label}
                  >
                    <IconComponent className="w-4 h-4 text-mindlyfe-blue" />
                  </Button>
                );
              })}
            </div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard/notifications')}
              className="relative rounded-lg hover:bg-mindlyfe-blue/10"
            >
              <Bell className="w-5 h-5 text-mindlyfe-blue" />
              {notificationCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold bg-mindlyfe-green border-2 border-white"
                >
                  {notificationCount > 9 ? '9+' : notificationCount}
                </Badge>
              )}
            </Button>

            {/* Profile */}
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2 md:gap-3 hover:bg-gray-50 rounded-lg p-1 transition-colors"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-full flex items-center justify-center">
                <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                Hi, {firstName}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
