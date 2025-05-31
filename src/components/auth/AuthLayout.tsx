
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  backTo?: string;
}

const AuthLayout = ({ children, title, subtitle, showBackButton = true, backTo = "/" }: AuthLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#21A9E1]/5 to-[#8EBC40]/5">
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Header */}
        {showBackButton && (
          <div className="mb-8">
            <button
              onClick={() => navigate(backTo)}
              className="flex items-center text-gray-600 hover:text-[#21A9E1] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>
        )}

        {/* Logo/Brand Area */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/66c73288-a843-485b-bbc5-7187cb067e2d.png" 
              alt="MindLyfe - Live Better" 
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-600 text-sm leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
