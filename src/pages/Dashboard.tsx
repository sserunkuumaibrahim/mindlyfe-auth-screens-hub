
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/50">
      <DashboardHeader firstName="Alex" notificationCount={3} />
      
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Hero Section */}
        <div className="bg-gradient-to-r from-mindlyfe-blue via-mindlyfe-blue/90 to-mindlyfe-green rounded-3xl p-8 text-white shadow-2xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-3">Welcome back, Alex!</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your wellness journey continues. Here's your personalized overview for today.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Primary Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Wellness Overview */}
            <WellnessOverview />
            
            {/* Today's Progress */}
            <TodayProgress progressItems={progressItems} />
          </div>

          {/* Right Column - Secondary Content */}
          <div className="lg:col-span-4 space-y-8">
            {/* Calendar */}
            <CalendarWidget />
            
            {/* Quick Actions */}
            <QuickActions />
          </div>
        </div>

        {/* Second Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Upcoming Sessions */}
          <div className="lg:col-span-6">
            <UpcomingSessions />
          </div>
          
          {/* Recent Accomplishments */}
          <div className="lg:col-span-6">
            <RecentAccomplishments />
          </div>
        </div>

        {/* Third Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
    </div>
  );
};

export default Dashboard;
