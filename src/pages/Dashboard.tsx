
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
import { progressItems, activities } from '@/data/dashboardData';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <DashboardHeader firstName="Alex" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-mindlyfe-blue to-mindlyfe-green bg-clip-text text-transparent mb-2">
            Welcome back, Alex!
          </h1>
          <p className="text-gray-600 text-lg">Here's your wellness overview for today</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-8 space-y-8">
            <WellnessOverview />
            <TodayProgress progressItems={progressItems} />
          </div>
          
          {/* Sidebar - Right Column */}
          <div className="lg:col-span-4 space-y-6">
            <CalendarWidget />
            <QuickActions />
            <UpcomingSessions />
            <RecentAccomplishments />
            <SupportCenter />
            <RecentActivity activities={activities} />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <WellnessOverview />
            <CalendarWidget />
          </div>
          <TodayProgress progressItems={progressItems} />
          <QuickActions />
          <UpcomingSessions />
          <RecentAccomplishments />
          <SupportCenter />
          <RecentActivity activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
