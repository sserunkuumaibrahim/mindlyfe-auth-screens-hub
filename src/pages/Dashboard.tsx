
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessOverview from '@/components/dashboard/WellnessOverview';
import TodayProgress from '@/components/dashboard/TodayProgress';
import UpcomingSessions from '@/components/dashboard/UpcomingSessions';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';
import Recommendations from '@/components/dashboard/Recommendations';
import SupportCenter from '@/components/dashboard/SupportCenter';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="Alex" />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <WellnessOverview />
            <TodayProgress />
            <RecentActivity />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <UpcomingSessions />
            <QuickActions />
            <SupportCenter />
            <Recommendations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
