
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Status Bar Area */}
      <div className="h-11 bg-white flex items-center justify-between px-4 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      {showBackButton && (
        <div className="bg-white px-4 py-3 border-b border-gray-100">
          <button
            onClick={() => navigate(backTo)}
            className="flex items-center gap-3 text-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 bg-white mx-4 my-6 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-8 h-full">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              <span className="text-red-500">Hello</span>
              <br />
              <span className="text-black">{title}!</span>
            </h1>
            {subtitle && (
              <p className="text-gray-600 text-base">
                {subtitle}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            {children}
          </div>
        </div>
      </main>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
