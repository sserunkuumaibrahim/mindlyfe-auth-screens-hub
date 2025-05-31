
import React from 'react';
import { Bell, Menu } from 'lucide-react';
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
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            {getGreeting()}, {firstName}
          </h1>
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate('/dashboard/notifications')}
        className="relative"
      >
        <Bell className="w-5 h-5" />
        {notificationCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            {notificationCount > 9 ? '9+' : notificationCount}
          </Badge>
        )}
      </Button>
    </div>
  );
};

export default DashboardHeader;
