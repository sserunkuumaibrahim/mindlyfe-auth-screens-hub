# Admin Screens Documentation

## Overview
The Admin screens provide comprehensive platform administration capabilities for the MindLyfe platform. These desktop-first interfaces enable administrators to manage users, monitor system health, analyze platform metrics, configure services, and oversee all aspects of the mental health platform with advanced analytics and control features.

## 🛡️ Core Features
- Comprehensive user management and account administration
- Real-time system monitoring and health dashboards
- Advanced analytics and business intelligence reporting
- Service configuration and feature flag management
- Content moderation and community oversight
- Financial analytics and subscription management
- Security monitoring and audit logging
- Crisis intervention and emergency response tools
- Therapist verification and credential management
- Platform configuration and settings management

## 🖥️ Screen Specifications

### 1. Admin Dashboard (`/admin/dashboard`)

#### Purpose
Central command center providing real-time platform overview, key metrics, and system health monitoring.

#### Screen Layout
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [MindLyfe Admin] [Dashboard] [Users] [Analytics] [Settings] [🔔] [👤 Admin] [⚙️] │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📊 Platform Overview                                    Last Updated: 2:34 PM │ │
│ │                                                                             │ │
│ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │ │
│ │ │ Total Users │ │Active Users │ │ New Today   │ │ Revenue     │           │ │
│ │ │   45,892    │ │   12,847    │ │     247     │ │  $127,450   │           │ │
│ │ │ ↗️ +2.3%    │ │ ↗️ +5.1%    │ │ ↗️ +12%     │ │ ↗️ +8.7%    │           │ │
│ │ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘           │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ 🚨 System Health                │ │ 📈 Real-time Activity                   │ │
│ │                                 │ │                                         │ │
│ │ ✅ Auth Service        99.9%    │ │ Active Sessions: 8,247                  │ │
│ │ ✅ Chat Service        99.8%    │ │ ┌─────────────────────────────────────┐ │ │
│ │ ✅ AI Service          99.7%    │ │ │ 15 ┌─────────────────────────────┐ │ │ │
│ │ ✅ Payment Service     99.9%    │ │ │ 12 │     ╭─╮     ╭─╮           │ │ │ │
│ │ ⚠️ Teletherapy Service 98.2%    │ │ │  9 │   ╭─╯ ╰─╮ ╭─╯ ╰─╮         │ │ │ │
│ │ ✅ Community Service   99.6%    │ │ │  6 │ ╭─╯     ╰─╯     ╰─╮       │ │ │ │
│ │ ✅ Notification Service 99.8%   │ │ │  3 │╱                 ╲       │ │ │ │
│ │ ✅ Database Cluster    99.9%    │ │ │  0 └─────────────────────────────┘ │ │ │
│ │                                 │ │ │    12PM  1PM  2PM  3PM  4PM      │ │ │ │
│ │ [View Detailed Status]          │ │ └─────────────────────────────────────┘ │ │
│ └─────────────────────────────────┘ └─────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ 🚨 Critical Alerts              │ │ 📋 Recent Admin Actions                 │ │
│ │                                 │ │                                         │ │
│ │ 🔴 High CPU usage on AI-Service │ │ • User account suspended (ID: 12847)    │ │
│ │    Threshold: 85% | Current: 92%│ │   by admin@mindlyfe.org - 15 min ago   │ │
│ │    [Investigate] [Scale Up]     │ │                                         │ │
│ │                                 │ │ • Payment gateway switched to backup    │ │
│ │ 🟡 Unusual login pattern        │ │   by system - 32 min ago               │ │
│ │    Location: Nigeria            │ │                                         │ │
│ │    Attempts: 247 in 10 min      │ │ • Crisis intervention triggered         │ │
│ │    [Block IP] [Investigate]     │ │   User ID: 8934 - 1 hour ago           │ │
│ │                                 │ │                                         │ │
│ │ 🟢 Database backup completed    │ │ • Therapist credentials verified        │ │
│ │    Size: 2.4GB | Duration: 12m  │ │   Dr. Sarah Johnson - 2 hours ago      │ │
│ │                                 │ │                                         │ │
│ │ [View All Alerts]               │ │ [View Full Audit Log]                   │ │
│ └─────────────────────────────────┘ └─────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🎯 Quick Actions                                                            │ │
│ │                                                                             │ │
│ │ [👥 User Management] [📊 Analytics] [🔧 System Config] [🚨 Crisis Response] │ │
│ │ [💰 Financial Reports] [🛡️ Security Center] [📝 Content Moderation]        │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### API Integration
- **Endpoint**: `GET /admin/dashboard`
- **Real-time Metrics**: WebSocket connection for live system monitoring
- **Service Health**: Aggregated health checks from all microservices
- **Alert System**: Real-time alerts with severity levels and actions

### 2. User Management (`/admin/users`)

#### Purpose
Comprehensive user account management with advanced search, filtering, and bulk operations.

#### Screen Layout
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [MindLyfe Admin] > User Management                                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search & Filters                                                         │ │
│ │                                                                             │ │
│ │ Search: [john.doe@email.com                    ] [🔍 Search]                │ │
│ │                                                                             │ │
│ │ Filters: [All Users ▼] [All Roles ▼] [All Status ▼] [Registration Date ▼] │ │
│ │         [All Subscriptions ▼] [Risk Level ▼] [Last Active ▼] [Clear All]  │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📊 User Statistics                                                          │ │
│ │                                                                             │ │
│ │ Total: 45,892 | Active: 38,247 | Suspended: 127 | High Risk: 23           │ │
│ │ New Today: 247 | Premium: 12,847 | Therapists: 1,247 | Organizations: 89  │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 👥 User List                                              [Export] [Bulk Actions ▼] │ │
│ │                                                                             │ │
│ │ ☐ | ID      | Name              | Email                | Role      | Status | Last Active | Risk | Actions │
│ │ ├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ ☐ | 12847   | John Doe          | john.doe@email.com   | User      | Active | 2 min ago   | Low  | [👁️][✏️][🚫] │ │
│ │ ☐ | 12846   | Dr. Sarah Johnson | sarah.j@mindlyfe.org | Therapist | Active | 15 min ago  | Low  | [👁️][✏️][✅] │ │
│ │ ☐ | 12845   | Jane Smith        | jane.smith@email.com | User      | Suspended | 2 days ago | High | [👁️][✏️][🔓] │ │
│ │ ☐ | 12844   | Mike Wilson       | mike.w@company.com   | Org Admin | Active | 1 hour ago  | Low  | [👁️][✏️][🏢] │ │
│ │ ☐ | 12843   | Emma Davis        | emma.d@email.com     | User      | Active | 5 min ago   | Med  | [👁️][✏️][⚠️] │ │
│ │ ☐ | 12842   | Alex Chen         | alex.chen@email.com  | User      | Inactive| 1 week ago  | Low  | [👁️][✏️][📧] │ │
│ │ ☐ | 12841   | Lisa Brown        | lisa.b@email.com     | User      | Active | 30 min ago  | Low  | [👁️][✏️][💬] │ │
│ │                                                                             │ │
│ │ [◀ Previous] Page 1 of 2,295 [Next ▶]                    [10 per page ▼]   │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🔧 Bulk Actions                                                             │ │
│ │                                                                             │ │
│ │ Selected: 0 users                                                           │ │
│ │ [Send Email] [Suspend Accounts] [Update Subscription] [Export Selected]    │ │
│ │ [Change Role] [Reset Password] [Delete Accounts] [Add to Watchlist]        │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### API Integration
- **Endpoint**: `GET /admin/users?page=1&limit=10&search=&filters={}`
- **User Operations**: `PUT /admin/users/{userId}`, `DELETE /admin/users/{userId}`
- **Bulk Operations**: `POST /admin/users/bulk-action`
- **Export**: `GET /admin/users/export?format=csv&filters={}`

### 3. User Profile Detail (`/admin/users/{userId}`)

#### Purpose
Detailed user profile view with comprehensive information, activity history, and administrative controls.

#### Screen Layout
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [← Back to Users] User Profile: John Doe (ID: 12847)                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ 👤 Basic Information            │ │ 📊 Account Status                       │ │
│ │                                 │ │                                         │ │
│ │ Name: John Doe                  │ │ Status: ✅ Active                       │ │
│ │ Email: john.doe@email.com       │ │ Risk Level: 🟢 Low                     │ │
│ │ Phone: +1 (555) 123-4567       │ │ Email Verified: ✅ Yes                  │ │
│ │ Date of Birth: Jan 15, 1990     │ │ 2FA Enabled: ❌ No                     │ │
│ │ Registration: Dec 1, 2023       │ │ Last Login: 2 minutes ago               │ │
│ │ Timezone: America/New_York      │ │ Login Count: 247                        │ │
│ │ Language: English               │ │ Failed Logins: 0                        │ │
│ │                                 │ │                                         │ │
│ │ [Edit Profile] [Reset Password] │ │ [Suspend Account] [Send Email]          │ │
│ └─────────────────────────────────┘ └─────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ 💳 Subscription Details         │ │ 🏥 Mental Health Profile               │ │
│ │                                 │ │                                         │ │
│ │ Plan: Premium Monthly           │ │ Wellness Score: 78/100                  │ │
│ │ Status: ✅ Active               │ │ Current Streak: 12 days                 │ │
│ │ Started: Dec 5, 2023            │ │ Total Sessions: 24                      │ │
│ │ Next Billing: Feb 5, 2024       │ │ Therapist: Dr. Sarah Johnson           │ │
│ │ Amount: $29.99/month            │ │ Last Session: Jan 12, 2024              │ │
│ │ Payment Method: Visa ****4242   │ │ Crisis Flags: None                      │ │
│ │ Lifetime Value: $89.97          │ │ Medications: 2 active                   │ │
│ │                                 │ │                                         │ │
│ │ [View Billing] [Change Plan]    │ │ [View Full History] [Crisis Protocol]   │ │
│ └─────────────────────────────────┘ └─────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📈 Activity Timeline                                                        │ │
│ │                                                                             │ │
│ │ [All Activity] [Logins] [Sessions] [Payments] [Support] [Community]        │ │
│ │                                                                             │ │
│ │ 🕐 2 minutes ago - User logged in from Chrome on Windows (IP: 192.168.1.1) │ │
│ │ 🧘 1 hour ago - Completed meditation session (10 minutes)                  │ │
│ │ 💬 2 hours ago - Started chat conversation with LyfBot                     │ │
│ │ 📝 Yesterday - Created journal entry "Feeling better today"                │ │
│ │ 👨‍⚕️ Jan 12 - Attended therapy session with Dr. Sarah Johnson (50 min)     │ │
│ │ 💳 Jan 5 - Payment processed successfully ($29.99)                         │ │
│ │ 🏆 Jan 3 - Achievement unlocked: "7-Day Streak"                            │ │
│ │ 👥 Jan 2 - Posted in Anxiety Support community                             │ │
│ │ 📧 Jan 1 - Email verification completed                                    │ │
│ │ 🎯 Dec 30 - Set wellness goal: "Daily meditation"                          │ │
│ │                                                                             │ │
│ │ [Load More] [Export Timeline]                                               │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🛡️ Security & Compliance                                                   │ │
│ │                                                                             │ │
│ │ Data Processing Consent: ✅ Granted (Dec 1, 2023)                          │ │
│ │ Marketing Consent: ❌ Declined                                              │ │
│ │ Data Export Requests: 0                                                     │ │
│ │ Data Deletion Requests: 0                                                   │ │
│ │ Privacy Settings: Standard                                                  │ │
│ │ Account Flags: None                                                         │ │
│ │                                                                             │ │
│ │ [View GDPR Data] [Process Deletion] [Update Consents] [Add Flag]           │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### API Integration
- **Endpoint**: `GET /admin/users/{userId}/profile`
- **Activity Timeline**: `GET /admin/users/{userId}/activity?type=all&limit=50`
- **Security Data**: `GET /admin/users/{userId}/security`
- **Profile Updates**: `PUT /admin/users/{userId}/profile`

### 4. Analytics Dashboard (`/admin/analytics`)

#### Purpose
Comprehensive business intelligence and platform analytics with advanced reporting capabilities.

#### Screen Layout
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [MindLyfe Admin] > Analytics Dashboard                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📊 Analytics Overview                                [Last 30 Days ▼] [📥 Export] │ │
│ │                                                                             │ │
│ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │ │
│ │ │ Total Revenue│ │ New Users   │ │ Retention   │ │ Avg Session │           │ │
│ │ │  $847,230    │ │   7,429     │ │    68.4%    │ │   24.7 min  │           │ │
│ │ │ ↗️ +12.3%    │ │ ↗️ +8.7%    │ │ ↗️ +2.1%    │ │ ↗️ +5.2%    │           │ │
│ │ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘           │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ 📈 Revenue Trends               │ │ 👥 User Growth                          │ │
│ │                                 │ │                                         │ │
│ │ Monthly Recurring Revenue       │ │ User Acquisition & Retention            │ │
│ │ ┌─────────────────────────────┐ │ │ ┌─────────────────────────────────────┐ │ │
│ │ │ 50K ┌─────────────────────┐ │ │ │ │ 2K ┌─────────────────────────────┐ │ │ │
│ │ │ 40K │         ╭─╮         │ │ │ │ │ 1.5K│     ╭─╮     ╭─╮         │ │ │ │
│ │ │ 30K │       ╭─╯ ╰─╮       │ │ │ │ │ 1K │   ╭─╯ ╰─╮ ╭─╯ ╰─╮       │ │ │ │
│ │ │ 20K │     ╭─╯     ╰─╮     │ │ │ │ │ 500│ ╭─╯     ╰─╯     ╰─╮     │ │ │ │
│ │ │ 10K │   ╭─╯         ╰─╮   │ │ │ │ │ 0  └─────────────────────────────┘ │ │ │
│ │ │ 0   └─────────────────────┘ │ │ │ │    Oct  Nov  Dec  Jan  Feb  Mar   │ │ │ │
│ │ │     Oct Nov Dec Jan Feb Mar │ │ │ │                                     │ │ │
│ │ └─────────────────────────────┘ │ │ │ New Users: 7,429 | Churn: 2.3%     │ │ │
│ │                                 │ │ └─────────────────────────────────────┘ │ │
│ │ Current MRR: $847,230           │ │                                         │ │
│ │ Growth Rate: +12.3%             │ │                                         │ │
│ └─────────────────────────────────┘ └─────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ 🎯 Feature Usage                │ │ 🏥 Mental Health Metrics               │ │
│ │                                 │ │                                         │ │
│ │ Most Used Features (30 days)    │ │ Platform Wellness Impact               │ │
│ │                                 │ │                                         │ │
│ │ 1. Chat/LyfBot      89.2%       │ │ Average Wellness Score: 74.2/100        │ │
│ │ 2. Journaling       76.8%       │ │ Users Showing Improvement: 78.4%        │ │
│ │ 3. Mood Tracking    71.3%       │ │ Crisis Interventions: 23 (↓ 15%)       │ │
│ │ 4. Community        68.9%       │ │ Therapy Completion Rate: 92.1%          │ │
│ │ 5. Meditation       64.2%       │ │ Average Session Rating: 4.7/5           │ │
│ │ 6. Therapy Sessions 45.7%       │ │ Goal Achievement Rate: 68.3%            │ │
│ │ 7. Resources        38.4%       │ │ Community Engagement: 71.2%             │ │
│ │ 8. Goal Setting     32.1%       │ │                                         │ │
│ │                                 │ │ [View Detailed Report]                  │ │
│ │ [Feature Deep Dive]             │ │                                         │ │
│ └─────────────────────────────────┘ └─────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📋 Custom Reports                                                           │ │
│ │                                                                             │ │
│ │ [User Cohort Analysis] [Revenue Breakdown] [Therapist Performance]         │ │
│ │ [Crisis Response Times] [Feature Adoption] [Geographic Analysis]           │ │
│ │ [Subscription Analytics] [Support Ticket Analysis] [Content Engagement]    │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### API Integration
- **Endpoint**: `GET /admin/analytics/overview?period=30d`
- **Revenue Analytics**: `GET /admin/analytics/revenue?groupBy=month`
- **User Analytics**: `GET /admin/analytics/users?metrics=growth,retention,engagement`
- **Custom Reports**: `POST /admin/analytics/reports/generate`

### 5. System Configuration (`/admin/settings`)

#### Purpose
Platform-wide configuration management including feature flags, service settings, and system parameters.

#### Screen Layout
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [MindLyfe Admin] > System Configuration                                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ⚙️ Configuration Categories                                                 │ │
│ │                                                                             │ │
│ │ [🚩 Feature Flags] [🔧 Service Settings] [🛡️ Security] [📧 Notifications]  │ │
│ │ [💳 Payment Gateways] [🤖 AI Configuration] [📊 Analytics] [🌐 Integrations] │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🚩 Feature Flags                                                           │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Feature                    │ Status    │ Rollout │ Environment │ Actions │ │ │
│ │ │────────────────────────────│───────────│─────────│─────────────│─────────│ │ │
│ │ │ New Chat Interface         │ ✅ Enabled │ 100%    │ Production  │ [Edit]  │ │ │
│ │ │ Advanced AI Insights       │ 🟡 Testing │ 25%     │ Staging     │ [Edit]  │ │ │
│ │ │ Video Therapy Beta         │ ❌ Disabled│ 0%      │ Development │ [Edit]  │ │ │
│ │ │ Community Live Streaming   │ 🟡 Testing │ 10%     │ Production  │ [Edit]  │ │ │
│ │ │ Enhanced Crisis Detection  │ ✅ Enabled │ 100%    │ Production  │ [Edit]  │ │ │
│ │ │ Mobile App Push v2         │ 🟡 Testing │ 50%     │ Production  │ [Edit]  │ │ │
│ │ │ Therapist Scheduling v3    │ ❌ Disabled│ 0%      │ Development │ [Edit]  │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ [Create New Flag] [Bulk Update] [Export Configuration]                     │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ 🔧 Service Configuration        │ │ 🛡️ Security Settings                   │ │
│ │                                 │ │                                         │ │
│ │ Auth Service                    │ │ Password Policy                         │ │
│ │ ├ JWT Expiry: 15 minutes        │ │ ├ Min Length: 8 characters              │ │
│ │ ├ Refresh Token: 7 days         │ │ ├ Require Special Chars: ✅ Yes         │ │
│ │ ├ Max Login Attempts: 5         │ │ ├ Require Numbers: ✅ Yes               │ │
│ │ └ Session Timeout: 24 hours     │ │ ├ Require Uppercase: ✅ Yes             │ │
│ │                                 │ │ └ Password History: 5 passwords        │ │
│ │ AI Service                      │ │                                         │ │
│ │ ├ Model: GPT-4                  │ │ Rate Limiting                           │ │
│ │ ├ Max Tokens: 4096              │ │ ├ API Calls: 1000/hour per user        │ │
│ │ ├ Temperature: 0.7              │ │ ├ Login Attempts: 5/15min per IP       │ │
│ │ └ Response Timeout: 30s         │ │ ├ Password Reset: 3/hour per user      │ │
│ │                                 │ │ └ Registration: 10/day per IP          │ │
│ │ [Edit All Services]             │ │                                         │ │
│ │                                 │ │ [Update Security Settings]              │ │
│ └─────────────────────────────────┘ └─────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 💾 Configuration Management                                                 │ │
│ │                                                                             │ │
│ │ Last Updated: Jan 15, 2024 2:34 PM by admin@mindlyfe.org                   │ │
│ │ Configuration Version: v2.4.1                                               │ │
│ │ Pending Changes: 3 configurations awaiting deployment                       │ │
│ │                                                                             │ │
│ │ [Save All Changes] [Deploy to Staging] [Deploy to Production] [Rollback]   │ │
│ │ [Export Backup] [Import Configuration] [View Change History]               │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### API Integration
- **Endpoint**: `GET /admin/settings/feature-flags`
- **Service Config**: `GET /admin/settings/services`
- **Security Settings**: `GET /admin/settings/security`
- **Configuration Updates**: `PUT /admin/settings/{category}`

### 6. Crisis Management (`/admin/crisis`)

#### Purpose
Emergency response dashboard for crisis intervention, high-risk user monitoring, and emergency protocols.

#### Screen Layout
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [MindLyfe Admin] > Crisis Management Center                                    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🚨 Crisis Alert Dashboard                                                  │ │
│ │                                                                             │ │
│ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │ │
│ │ │ Active Alerts│ │ High Risk   │ │ Interventions│ │ Response Time│           │ │
│ │ │      3       │ │     23      │ │ Today: 7    │ │  Avg: 4.2min │           │ │
│ │ │ 🔴 Critical  │ │ 🟡 Monitoring│ │ ✅ Resolved │ │ 🎯 Target: 5min│          │ │
│ │ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘           │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🔴 Active Crisis Alerts                                                    │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🚨 CRITICAL - User ID: 8934 - Suicide Risk Detected                    │ │ │
│ │ │ Triggered: 12 minutes ago | AI Confidence: 94%                         │ │ │
│ │ │ Last Activity: "I can't take this anymore" in journal entry             │ │ │
│ │ │ Location: San Francisco, CA | Emergency Contact: Available              │ │ │
│ │ │ Assigned: Dr. Sarah Johnson | Status: In Progress                       │ │ │
│ │ │ [View Full Profile] [Contact User] [Emergency Services] [Update Status] │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🟡 HIGH RISK - User ID: 7821 - Self-Harm Indicators                    │ │ │
│ │ │ Triggered: 45 minutes ago | AI Confidence: 78%                         │ │ │
│ │ │ Pattern: Declining mood scores, isolation keywords                      │ │ │
│ │ │ Location: Austin, TX | Emergency Contact: Not Available                 │ │ │
│ │ │ Assigned: Crisis Team | Status: Monitoring                             │ │ │
│ │ │ [View Full Profile] [Escalate] [Assign Therapist] [Send Resources]     │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🟡 MEDIUM RISK - User ID: 5647 - Substance Abuse Mention               │ │ │
│ │ │ Triggered: 2 hours ago | AI Confidence: 65%                            │ │ │
│ │ │ Context: Community post mentioning alcohol dependency                   │ │ │
│ │ │ Location: Denver, CO | Emergency Contact: Available                     │ │ │
│ │ │ Assigned: Unassigned | Status: Pending Review                          │ │ │
│ │ │ [View Full Profile] [Assign Counselor] [Send Resources] [Mark Reviewed] │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ 📊 Crisis Analytics             │ │ 🎯 Response Protocols                   │ │
│ │                                 │ │                                         │ │
│ │ This Month:                     │ │ Immediate Response (0-5 min):           │ │
│ │ ├ Total Alerts: 89             │ │ ├ AI-powered risk assessment             │ │
│ │ ├ Critical: 12                 │ │ ├ Automatic emergency contact alert      │ │
│ │ ├ High Risk: 34                │ │ ├ Crisis counselor notification          │ │
│ │ ├ Medium Risk: 43              │ │ └ Platform safety measures activation    │ │
│ │ └ False Positives: 8.2%        │ │                                         │ │
│ │                                 │ │ Follow-up Response (5-30 min):          │ │
│ │ Response Times:                 │ │ ├ Professional intervention              │ │
│ │ ├ Critical: Avg 3.1 min        │ │ ├ Emergency services coordination        │ │
│ │ ├ High Risk: Avg 8.7 min       │ │ ├ Family/emergency contact outreach      │ │
│ │ ├ Medium Risk: Avg 24.3 min    │ │ └ Continuous monitoring activation       │ │
│ │ └ Resolution Rate: 94.3%       │ │                                         │ │
│ │                                 │ │ [Update Protocols] [Training Materials] │ │
│ │ [View Detailed Report]          │ │                                         │ │
│ └─────────────────────────────────┘ └─────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🛠️ Crisis Management Tools                                                 │ │
│ │                                                                             │ │
│ │ [Emergency Broadcast] [Crisis Team Chat] [Resource Library] [Training Hub] │ │
│ │ [Incident Reports] [Legal Documentation] [External Services] [Analytics]   │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### API Integration
- **Endpoint**: `GET /admin/crisis/alerts?status=active`
- **Crisis Response**: `POST /admin/crisis/respond/{alertId}`
- **Risk Assessment**: `GET /admin/crisis/risk-analysis/{userId}`
- **Emergency Protocols**: `POST /admin/crisis/emergency-action`

## 🔄 Screen Flow Patterns

### Admin Navigation Flow
```
Admin Dashboard
├─ User Management → User Profile → Account Actions → Audit Trail
├─ Analytics Dashboard → Custom Reports → Data Export → Business Intelligence
├─ System Configuration → Feature Flags → Service Settings → Deployment
├─ Crisis Management → Alert Response → Emergency Protocols → Follow-up
├─ Content Moderation → Community Oversight → Content Review → Actions
└─ Security Center → Threat Detection → Incident Response → Compliance

Administrative Workflows
├─ User Support → Issue Investigation → Resolution → Documentation
├─ System Monitoring → Alert Response → Problem Resolution → Post-mortem
├─ Configuration Changes → Testing → Staging → Production Deployment
└─ Crisis Response → Assessment → Intervention → Follow-up → Reporting
```

## 📊 Performance Metrics

### Admin Interface Performance
- **Dashboard Load Time**: < 3 seconds for initial load
- **Data Refresh**: < 1 second for real-time updates
- **Search Performance**: < 500ms for user searches
- **Export Generation**: < 30 seconds for large datasets

### Administrative Efficiency
- **Crisis Response Time**: < 5 minutes average
- **User Issue Resolution**: < 24 hours average
- **System Configuration Changes**: < 15 minutes deployment
- **Report Generation**: < 2 minutes for standard reports

## 🔒 Security & Privacy

### Admin Access Control
- **Multi-Factor Authentication**: Required for all admin accounts
- **Role-Based Permissions**: Granular access control by admin role
- **Session Management**: Secure session handling with timeout
- **Audit Logging**: Complete audit trail of all admin actions

### Data Protection
- **Encrypted Data Access**: All sensitive data encrypted in transit and at rest
- **GDPR Compliance**: Tools for data subject rights and compliance
- **HIPAA Compliance**: Healthcare data protection and audit trails
- **Access Monitoring**: Real-time monitoring of admin data access

### System Security
- **Threat Detection**: Real-time security threat monitoring
- **Incident Response**: Automated and manual incident response tools
- **Compliance Reporting**: Automated compliance report generation
- **Security Audits**: Regular security audit tools and reporting

---

This documentation provides comprehensive coverage of all admin screens with desktop-first design, focusing on platform administration, user management, analytics, crisis response, and system configuration for the MindLyfe platform. 