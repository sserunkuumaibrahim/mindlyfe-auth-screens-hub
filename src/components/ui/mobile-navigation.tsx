
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Users, MessageSquare, Brain, User } from 'lucide-react';

const MobileNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: 'Home',
      path: '/dashboard',
      activeColor: 'text-mindlyfe-blue'
    },
    {
      icon: Users,
      label: 'Community',
      path: '/community',
      activeColor: 'text-mindlyfe-green'
    },
    {
      icon: MessageSquare,
      label: 'Chat',
      path: '/chat',
      activeColor: 'text-purple-500'
    },
    {
      icon: Brain,
      label: 'LyfBot',
      path: '/chat/lyfbot',
      activeColor: 'text-orange-500'
    },
    {
      icon: User,
      label: 'Profile',
      path: '/profile',
      activeColor: 'text-indigo-500'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50 md:hidden">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.path);
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                active ? 'bg-gray-50' : 'hover:bg-gray-50'
              }`}
            >
              <IconComponent 
                className={`w-5 h-5 ${
                  active ? item.activeColor : 'text-gray-500'
                }`} 
              />
              <span 
                className={`text-xs font-medium ${
                  active ? item.activeColor : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
