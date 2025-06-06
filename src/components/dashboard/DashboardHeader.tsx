
import React from 'react';
import { Bell, Menu, User, Search, Settings } from 'lucide-react';
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
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="lg:hidden hover:bg-gray-100/80 transition-all duration-200 rounded-xl"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-light to-secondary rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-white/50">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-600">{getGreeting()}</p>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">{firstName}</h1>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-gray-100/80 transition-all duration-200 rounded-xl"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-gray-100/80 transition-all duration-200 rounded-xl"
            >
              <Settings className="w-5 h-5 text-gray-700" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard/notifications')}
              className="relative hover:bg-gray-100/80 transition-all duration-200 rounded-xl"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              {notificationCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold animate-pulse bg-gradient-to-r from-red-500 to-pink-500 border-2 border-white shadow-lg"
                >
                  {notificationCount > 9 ? '9+' : notificationCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
