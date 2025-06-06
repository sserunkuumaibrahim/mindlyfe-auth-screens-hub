
import React from 'react';
import { Bell, Menu, Search, User, Settings, Headphones, Users, BarChart3, BookOpen, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate, useLocation } from 'react-router-dom';

interface SupportHeaderProps {
  firstName: string;
  notificationCount?: number;
  onMenuClick?: () => void;
}

const SupportHeader = ({ firstName, notificationCount = 0, onMenuClick }: SupportHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', route: '/support/dashboard', active: location.pathname === '/support/dashboard', icon: BarChart3 },
    { label: 'Tickets', route: '/support/tickets', active: location.pathname === '/support/tickets', icon: Headphones },
    { label: 'Users', route: '/support/users', active: location.pathname === '/support/users', icon: Users },
    { label: 'Knowledge Base', route: '/support/knowledge-base', active: location.pathname === '/support/knowledge-base', icon: BookOpen },
    { label: 'Analytics', route: '/support/analytics', active: location.pathname === '/support/analytics', icon: BarChart3 },
    { label: 'Crisis', route: '/support/crisis', active: location.pathname === '/support/crisis', icon: AlertTriangle },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-8">
            {/* Support Logo */}
            <div className="flex items-center gap-2">
              <Headphones className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MindLyfe Support</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.route)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      item.active
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="lg:hidden hover:bg-blue-50"
            >
              <Menu className="w-5 h-5 text-blue-600" />
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 border border-blue-200">
              <Search className="w-4 h-4 text-blue-600" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none w-32"
              />
            </div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-lg hover:bg-blue-50"
            >
              <Bell className="w-5 h-5 text-blue-600" />
              {notificationCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold bg-blue-600 border-2 border-white"
                >
                  {notificationCount > 9 ? '9+' : notificationCount}
                </Badge>
              )}
            </Button>

            {/* Profile */}
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-1 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                {firstName}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHeader;
