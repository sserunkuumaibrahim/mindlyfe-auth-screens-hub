
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface QuickAction {
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  textColor: string;
}

interface QuickAccessActionsProps {
  actions: QuickAction[];
}

const QuickAccessActions = ({ actions }: QuickAccessActionsProps) => {
  const navigate = useNavigate();

  const handleQuickActionClick = (route: string) => {
    console.log('Quick action navigation to:', route);
    navigate(route);
  };

  return (
    <div className="mt-8 pb-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <button 
              key={index}
              onClick={() => handleQuickActionClick(action.route)}
              className={`p-4 rounded-lg text-center transition-colors ${action.color}`}
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              <div className={`text-sm font-medium ${action.textColor}`}>{action.title}</div>
              <div className="text-xs text-gray-600 mt-1">{action.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccessActions;
