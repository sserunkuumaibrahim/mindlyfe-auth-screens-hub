
import React from 'react';
import { Bell, Menu, Search, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  firstName: string;
  notificationCount?: number;
  onMenuClick?: () => void;
}

const DashboardHeader = ({ firstName, notificationCount = 0, onMenuClick }: DashboardHeaderProps) => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', active: true },
    { label: 'Therapists', active: false },
    { label: 'Courses', active: false },
    { label: 'Statistics', active: false },
    { label: 'Music', active: false },
    { label: 'Sleep tracker', active: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Mindlyfe Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/cf7924f0-358d-4fb0-92db-69a028877aed.png"
                alt="Mindlyfe"
                className="h-8 w-auto md:h-10"
              />
            </div>
            
            {/* Navigation - Hidden on small screens */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-500" />
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
              className="md:hidden rounded-lg"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard/notifications')}
              className="relative rounded-lg"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {notificationCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold bg-blue-600 border-2 border-white"
                >
                  {notificationCount > 9 ? '9+' : notificationCount}
                </Badge>
              )}
            </Button>

            {/* Profile */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
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
