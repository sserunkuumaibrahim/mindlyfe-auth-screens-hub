
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      {/* Header */}
      <header className="w-full p-4 sm:p-6">
        <div className="max-w-md mx-auto flex items-center justify-between">
          {showBackButton && (
            <button
              onClick={() => navigate(backTo)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </button>
          )}
          <div className="flex items-center gap-2 ml-auto">
            <img 
              src="/lovable-uploads/ff3ae5f5-a853-4169-b2db-a115e2dddf35.png" 
              alt="MindLyfe" 
              className="w-8 h-8"
            />
            <span className="text-lg font-semibold text-gray-800">MindLyfe</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md">
          {/* Title Section */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="text-gray-600 text-base sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center">
        <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
          <span>🔒 Secure login with rate limiting protection</span>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
