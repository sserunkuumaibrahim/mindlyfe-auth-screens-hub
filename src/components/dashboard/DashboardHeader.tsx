
import React from 'react';
import { Bell, Menu, Search, Settings, User, Users } from 'lucide-react';
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
    { label: 'Home', route: '/dashboard', active: location.pathname === '/dashboard' },
    { label: 'Community', route: '/community', active: location.pathname.startsWith('/community') },
    { label: 'Teletherapy', route: '/teletherapy', active: location.pathname.startsWith('/teletherapy') },
    { label: 'Courses', route: '/courses', active: false },
    { label: 'Statistics', route: '/dashboard/analytics', active: location.pathname === '/dashboard/analytics' },
    { label: 'Music', route: '/music', active: false },
    { label: 'Sleep tracker', route: '/sleep', active: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Mindlyfe Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/0a9198ee-9723-465f-b3fd-397599a1f756.png"
                alt="Mindlyfe"
                className="h-14 w-auto md:h-16"
              />
            </div>
            
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
            {/* Search - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 border border-mindlyfe-blue/20">
              <Search className="w-4 h-4 text-mindlyfe-blue" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none w-24 lg:w-32"
              />
            </div>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-lg hover:bg-mindlyfe-blue/10"
            >
              <Search className="w-5 h-5 text-mindlyfe-blue" />
            </Button>

            {/* Community Quick Access - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/community')}
              className="lg:hidden rounded-lg hover:bg-mindlyfe-blue/10"
            >
              <Users className="w-5 h-5 text-mindlyfe-blue" />
            </Button>

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
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-mindlyfe-blue to-mindlyfe-green rounded-full flex items-center justify-center">
                <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                Hi, {firstName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
