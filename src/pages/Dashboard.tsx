
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WellnessOverview from '@/components/dashboard/WellnessOverview';
import TodayProgress from '@/components/dashboard/TodayProgress';
import UpcomingSessions from '@/components/dashboard/UpcomingSessions';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';
import Recommendations from '@/components/dashboard/Recommendations';
import SupportCenter from '@/components/dashboard/SupportCenter';
import MainFeatures from '@/components/dashboard/MainFeatures';
import QuickAccessActions from '@/components/dashboard/QuickAccessActions';
import { progressItems, activities, recommendations, mainFeatures, quickAccessActions } from '@/data/dashboardData';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="Alex" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Mobile Welcome Section */}
        <div className="block lg:hidden mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Here's your wellness overview for today</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Desktop Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
            <p className="text-gray-600">Here's your wellness overview for today</p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              <WellnessOverview />
              <TodayProgress progressItems={progressItems} />
              <MainFeatures features={mainFeatures} />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <UpcomingSessions />
              <QuickActions />
              <SupportCenter />
              <RecentActivity activities={activities} />
              <Recommendations recommendations={recommendations} />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-6">
            <WellnessOverview />
            <TodayProgress progressItems={progressItems} />
            <UpcomingSessions />
            <QuickActions />
            <SupportCenter />
            <RecentActivity activities={activities} />
            <Recommendations recommendations={recommendations} />
          </div>

          {/* Mobile Bottom Actions */}
          <QuickAccessActions actions={quickAccessActions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
