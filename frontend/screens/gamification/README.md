# Gamification Screens Documentation

## Overview
The Gamification screens enhance user engagement through game-like elements including streaks, badges, achievements, and rewards. The service integrates with the MindLyfe platform to motivate users in their wellness journey through comprehensive tracking and reward systems.

## 🎮 Core Features
- Streak system for daily login, therapy attendance, meditation, and exercise
- Badge system with achievement, participation, milestone, and hidden badges
- Achievement system for wellness journey, skill building, and personal growth
- Reward system with virtual points, feature unlocks, and content access
- Leaderboard system with global, category, friend, and time-based rankings
- Activity tracking and event logging for comprehensive engagement metrics

## 📱 Screen Specifications

### 1. Achievements Dashboard (`/gamification`)

#### Purpose
Main gamification interface showing user progress, achievements, and current streaks.

#### Screen Layout
```
┌─────────────────────────────────┐
│ [☰] Your Progress         [🏆] │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Current Streaks             │ │
│ │                             │ │
│ │ 🔥 Login Streak: 12 days    │ │
│ │ 🧘 Meditation: 5 days       │ │
│ │ 👨‍⚕️ Therapy: 3 sessions    │ │
│ │ 📝 Journaling: 8 days       │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Recent Achievements         │ │
│ │                             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ 🥇 Mindful Week         │ │ │
│ │ │ Meditated 7 days        │ │ │
│ │ │ in a row                │ │ │
│ │ │ Earned: 2 hours ago     │ │ │
│ │ └─────────────────────────┘ │ │
│ │                             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ 🎯 Goal Setter          │ │ │
│ │ │ Set 5 wellness goals    │ │ │
│ │ │ Earned: Yesterday       │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Progress Overview           │ │
│ │                             │ │
│ │ 🏆 Badges: 23/50            │ │
│ │ ⭐ Points: 1,247            │ │
│ │ 📈 Level: 8                 │ │
│ │ 🎯 Rank: #156 globally      │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Quick Actions               │ │
│ │ [🏆 Badges] [🎯 Challenges] │ │
│ │ [📊 Leaderboard] [🎁 Rewards]│ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### 2. Badge Collection (`/gamification/badges`)

#### Purpose
Display earned and available badges with progress tracking and requirements.

#### Screen Layout
```
┌─────────────────────────────────┐
│ [← Back] Badge Collection       │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [Earned][Available][Hidden] │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Earned Badges (23)          │ │
│ │                             │ │
│ │ ┌─────┐ ┌─────┐ ┌─────┐     │ │
│ │ │ 🥇  │ │ 🧘  │ │ 📝  │     │ │
│ │ │First│ │Zen  │ │Word │     │ │
│ │ │Week │ │Mind │ │Smith│     │ │
│ │ └─────┘ └─────┘ └─────┘     │ │
│ │                             │ │
│ │ ┌─────┐ ┌─────┐ ┌─────┐     │ │
│ │ │ 🎯  │ │ 💪  │ │ 🤝  │     │ │
│ │ │Goal │ │Strong│ │Team │     │ │
│ │ │Getter│ │Mind │ │Player│    │ │
│ │ └─────┘ └─────┘ └─────┘     │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ In Progress (5)             │ │
│ │                             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ 🏃‍♂️ Marathon Meditator  │ │ │
│ │ │ Meditate 30 days in row │ │ │
│ │ │ Progress: 12/30 days    │ │ │
│ │ │ ████████░░░░░░░░░░░░     │ │ │
│ │ └─────────────────────────┘ │ │
│ │                             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ 📚 Knowledge Seeker     │ │ │
│ │ │ Complete 10 resources   │ │ │
│ │ │ Progress: 7/10 resources│ │ │
│ │ │ ██████████████░░░░░░     │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Available Badges (22)       │ │
│ │                             │ │
│ │ ┌─────┐ ┌─────┐ ┌─────┐     │ │
│ │ │ 🌟  │ │ 🎨  │ │ 🔥  │     │ │
│ │ │Star │ │Creative│ │Fire │    │ │
│ │ │ter  │ │Writer│ │Starter│   │ │
│ │ └─────┘ └─────┘ └─────┘     │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### 3. Daily Challenges (`/gamification/challenges`)

#### Purpose
Display daily and weekly challenges with progress tracking and rewards.

#### Screen Layout
```
┌─────────────────────────────────┐
│ [← Back] Daily Challenges       │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Today's Challenges          │ │
│ │ Complete 3 to earn bonus!   │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ ✅ Log your mood            │ │
│ │    Completed at 9:30 AM     │ │
│ │    +50 points earned        │ │
│ │ └────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 🔄 Write a journal entry    │ │
│ │    Share your thoughts      │ │
│ │    Reward: +100 points      │ │
│ │    [Start Writing]          │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ ⏳ Practice breathing       │ │
│ │    5-minute session         │ │
│ │    Reward: +75 points       │ │
│ │    [Start Exercise]         │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Weekly Challenge            │ │
│ │                             │ │
│ │ 🎯 Wellness Warrior         │ │
│ │ Complete 5 therapy sessions │ │
│ │ Progress: 3/5 sessions      │ │
│ │ ████████████░░░░░░░░         │ │
│ │ Reward: Exclusive badge     │ │
│ │ Time left: 3 days           │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Challenge History           │ │
│ │ This week: 12/15 completed  │ │
│ │ Success rate: 80%           │ │
│ │ [View All Challenges]       │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### 4. Leaderboards (`/gamification/leaderboard`)

#### Purpose
Display rankings and competitive elements with friend comparisons.

#### Screen Layout
```
┌─────────────────────────────────┐
│ [← Back] Leaderboards           │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [Global][Friends][Category] │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ This Week's Top Performers  │ │
│ │                             │ │
│ │ 🥇 1. MindfulWarrior        │ │
│ │    2,847 points             │ │
│ │                             │ │
│ │ 🥈 2. ZenMaster             │ │
│ │    2,634 points             │ │
│ │                             │ │
│ │ 🥉 3. WellnessChamp         │ │
│ │    2,521 points             │ │
│ │                             │ │
│ │ 4. PeacefulSoul             │ │
│ │    2,398 points             │ │
│ │                             │ │
│ │ 5. HealthyMind              │ │
│ │    2,287 points             │ │
│ │                             │ │
│ │ ...                         │ │
│ │                             │ │
│ │ 156. You                    │ │
│ │     1,247 points            │ │
│ │     ↗️ +23 from last week   │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Your Friends (5)            │ │
│ │                             │ │
│ │ 1. Alex - 1,456 points      │ │
│ │ 2. You - 1,247 points       │ │
│ │ 3. Sam - 1,123 points       │ │
│ │ 4. Jordan - 987 points      │ │
│ │ 5. Casey - 834 points       │ │
│ └─────────────────────────────┘ │
│                                 │
│ [Invite Friends] [View Categories]│
└─────────────────────────────────┘
```

### 5. Rewards Store (`/gamification/rewards`)

#### Purpose
Display available rewards and allow users to redeem points for benefits.

#### Screen Layout
```
┌─────────────────────────────────┐
│ [← Back] Rewards Store          │
│ Your Points: 1,247 ⭐           │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [Available][Claimed][Expired]│ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Feature Unlocks             │ │
│ │                             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ 🎨 Custom Profile Theme │ │ │
│ │ │ Personalize your        │ │ │
│ │ │ profile appearance      │ │ │
│ │ │ Cost: 500 points        │ │ │
│ │ │ [Redeem]                │ │ │
│ │ └─────────────────────────┘ │ │
│ │                             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ 🔒 Premium Resources    │ │ │
│ │ │ Access exclusive        │ │ │
│ │ │ content for 30 days     │ │ │
│ │ │ Cost: 1,000 points      │ │ │
│ │ │ [Redeem]                │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Streak Protection           │ │
│ │                             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ ❄️ Streak Freeze        │ │ │
│ │ │ Protect your streak     │ │ │
│ │ │ for 1 day               │ │ │
│ │ │ Cost: 200 points        │ │ │
│ │ │ [Redeem]                │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Special Offers              │ │
│ │                             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ 🎁 Mystery Box          │ │ │
│ │ │ Random reward inside    │ │ │
│ │ │ Cost: 300 points        │ │ │
│ │ │ Limited: 2 days left    │ │ │
│ │ │ [Redeem]                │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
│                                 │
│ [Earn More Points]              │
└─────────────────────────────────┘
```

### 6. Progress Tracking (`/gamification/progress`)

#### Purpose
Detailed view of user progress across all gamification elements with analytics.

#### Screen Layout
```
┌─────────────────────────────────┐
│ [← Back] Progress Analytics     │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Overall Progress            │ │
│ │                             │ │
│ │ Level 8 (1,247/1,500 XP)    │ │
│ │ ████████████████░░░░         │ │
│ │ 253 XP to next level        │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Streak Performance          │ │
│ │                             │ │
│ │ 📈 Login: 12 days (Best: 18)│ │
│ │ 🧘 Meditation: 5 days       │ │
│ │ 📝 Journaling: 8 days       │ │
│ │ 👨‍⚕️ Therapy: 3 sessions    │ │
│ │                             │ │
│ │ Streak Recovery Used: 2/5   │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Achievement Progress        │ │
│ │                             │ │
│ │ Wellness Journey: 75%       │ │
│ │ ████████████████████░░░░     │ │
│ │                             │ │
│ │ Skill Building: 60%         │ │
│ │ ████████████████░░░░░░░░     │ │
│ │                             │ │
│ │ Community Engagement: 40%   │ │
│ │ ████████████░░░░░░░░░░░░     │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Monthly Summary             │ │
│ │                             │ │
│ │ 🏆 Badges earned: 5         │ │
│ │ ⭐ Points gained: 847       │ │
│ │ 🎯 Challenges completed: 23 │ │
│ │ 📈 Rank improvement: +45    │ │
│ │                             │ │
│ │ Best category: Mindfulness  │ │
│ │ Focus area: Consistency     │ │
│ └─────────────────────────────┘ │
│                                 │
│ [Export Progress] [Share        │
│ Achievement]                    │
└─────────────────────────────────┘
```

## 🔄 Screen Flow Patterns

### Gamification Navigation Flow
```
Achievements Dashboard
├─ View Badges → Badge Collection → Progress Tracking → Rewards
├─ Daily Challenges → Complete Challenge → Earn Points → Redeem Rewards
├─ Leaderboards → Friend Comparison → Competitive Motivation → Engagement
└─ Progress Analytics → Performance Review → Goal Setting → Improvement

Engagement Loop
├─ Activity Completion → Points Earned → Badge Progress → Achievement Unlock
├─ Streak Maintenance → Milestone Reached → Reward Earned → Motivation Boost
├─ Challenge Participation → Competition → Ranking → Social Recognition
└─ Progress Tracking → Analytics → Insights → Goal Adjustment

Reward System Flow
├─ Point Accumulation → Reward Selection → Redemption → Feature Unlock
├─ Badge Collection → Achievement Display → Social Sharing → Recognition
└─ Streak Protection → Consistency Maintenance → Long-term Engagement
```

## 📊 Performance Metrics

### Engagement Metrics
- **Daily Active Users**: Users engaging with gamification features daily
- **Streak Completion Rate**: Percentage of streaks maintained
- **Challenge Participation**: Users completing daily/weekly challenges
- **Badge Earning Rate**: Average badges earned per user per month

### Motivation Effectiveness
- **Activity Increase**: Improvement in core platform usage
- **Retention Rate**: User retention through gamification
- **Goal Achievement**: Completion rate of wellness goals
- **Social Engagement**: Friend connections and leaderboard participation

## 🔒 Security & Privacy

### Data Protection
- Activity tracking with user consent
- Anonymous leaderboard participation options
- Secure point and reward transaction logging
- Privacy controls for achievement sharing

### Fair Play
- Anti-gaming measures for point earning
- Streak validation and fraud prevention
- Leaderboard integrity monitoring
- Reward redemption verification

---

This documentation provides comprehensive coverage of all gamification screens based on the actual backend implementation, focusing on streaks, badges, achievements, rewards, and leaderboards to enhance user engagement in their mental health journey. 