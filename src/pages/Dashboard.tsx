
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessOverview from '@/components/dashboard/WellnessOverview';
import TodayProgress from '@/components/dashboard/TodayProgress';
import UpcomingSessions from '@/components/dashboard/UpcomingSessions';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';
import SupportCenter from '@/components/dashboard/SupportCenter';
import CalendarWidget from '@/components/dashboard/CalendarWidget';
import RecentAccomplishments from '@/components/dashboard/RecentAccomplishments';
import MobileNavigation from '@/components/ui/mobile-navigation';
import PWAInstallPrompt from '@/components/ui/pwa-install-prompt';
import { progressItems, activities } from '@/data/dashboardData';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/50 pb-20 md:pb-0">
      <DashboardHeader firstName="Alex" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Welcome Hero Section */}
        <div className="bg-gradient-to-r from-mindlyfe-blue via-mindlyfe-blue/90 to-mindlyfe-green rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Welcome back, Alex!</h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              Your wellness journey continues. Here's your personalized overview for today.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Primary Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Wellness Overview */}
            <WellnessOverview />
            
            {/* Today's Progress */}
            <TodayProgress progressItems={progressItems} />
          </div>

          {/* Right Column - Secondary Content */}
          <div className="lg:col-span-4 space-y-6">
            {/* Calendar */}
            <CalendarWidget />
            
            {/* Quick Actions */}
            <QuickActions />
          </div>
        </div>

        {/* Second Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Sessions */}
          <UpcomingSessions />
          
          {/* Recent Accomplishments */}
          <RecentAccomplishments />
        </div>

        {/* Third Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-8">
            <RecentActivity activities={activities} />
          </div>
          
          {/* Support Center */}
          <div className="lg:col-span-4">
            <SupportCenter />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation />
      
      {/* PWA Install Prompt */}
      <PWAInstallPrompt />
    </div>
  );
};

export default Dashboard;
