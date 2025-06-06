
export const progressItems = [
  { id: '1', title: 'Daily Meditation', completed: true, time: '10 min', icon: '🧘' },
  { id: '2', title: 'Journal Entry', completed: false, time: '15 min', icon: '📝' },
  { id: '3', title: 'Therapy Session', completed: true, time: '60 min', icon: '💬' },
  { id: '4', title: 'Mindfulness Exercise', completed: false, time: '5 min', icon: '🌸' },
];

export const activities = [
  { id: '1', type: 'journal', title: 'Completed morning reflection', timestamp: '2 hours ago', icon: '📝' },
  { id: '2', type: 'therapy', title: 'Session with Dr. Johnson', timestamp: '1 day ago', icon: '💬' },
  { id: '3', type: 'meditation', title: '15-minute mindfulness', timestamp: '2 days ago', icon: '🧘' },
  { id: '4', type: 'community', title: 'Posted in support group', timestamp: '3 days ago', icon: '👥' },
];

export const recommendations = [
  { id: '1', title: 'Breathing Exercise', description: 'Try a 5-minute breathing exercise', type: 'exercise', route: '/mental-health/mood', priority: 'high' as const },
  { id: '2', title: 'Sleep Hygiene Tips', description: 'Improve your sleep quality', type: 'article', route: '/resources', priority: 'medium' as const },
  { id: '3', title: 'Gratitude Journal', description: 'Start a daily gratitude practice', type: 'activity', route: '/journal/write', priority: 'low' as const },
];

export const mainFeatures = [
  {
    title: 'Mental Health Assessment',
    description: 'Complete comprehensive mental health evaluations',
    icon: '🧠',
    route: '/mental-health/assessment',
    color: 'bg-blue-50 border-blue-200',
    stats: '5 assessments completed'
  },
  {
    title: 'Mood Tracking',
    description: 'Track your daily mood and emotional patterns',
    icon: '🎭',
    route: '/mental-health/mood',
    color: 'bg-purple-50 border-purple-200',
    stats: '12 day streak'
  },
  {
    title: 'LyfBot AI Assistant',
    description: 'Chat with our AI mental health companion 24/7',
    icon: '🤖',
    route: '/chat/lyfbot',
    color: 'bg-green-50 border-green-200',
    stats: 'Always available'
  },
  {
    title: 'Teletherapy Sessions',
    description: 'Connect with licensed therapists online',
    icon: '💬',
    route: '/teletherapy',
    color: 'bg-indigo-50 border-indigo-200',
    stats: '3 upcoming sessions'
  },
  {
    title: 'Wellness Goals',
    description: 'Set and track your mental wellness objectives',
    icon: '🎯',
    route: '/mental-health/goals',
    color: 'bg-orange-50 border-orange-200',
    stats: '3 active goals'
  },
  {
    title: 'Community Support',
    description: 'Connect with others on their wellness journey',
    icon: '👥',
    route: '/community',
    color: 'bg-pink-50 border-pink-200',
    stats: '150+ members'
  }
];

export const quickAccessActions = [
  {
    title: 'Chat with LyfBot',
    description: 'Get instant AI support',
    icon: '🤖',
    route: '/chat/lyfbot',
    color: 'bg-blue-50 hover:bg-blue-100',
    textColor: 'text-blue-700'
  },
  {
    title: 'Find Therapists',
    description: 'Browse available therapists',
    icon: '👩‍⚕️',
    route: '/teletherapy',
    color: 'bg-green-50 hover:bg-green-100',
    textColor: 'text-green-700'
  },
  {
    title: 'Write Journal',
    description: 'Record your thoughts',
    icon: '📔',
    route: '/journal/write',
    color: 'bg-purple-50 hover:bg-purple-100',
    textColor: 'text-purple-700'
  },
  {
    title: 'Track Mood',
    description: 'Log your current mood',
    icon: '🎭',
    route: '/mental-health/mood',
    color: 'bg-orange-50 hover:bg-orange-100',
    textColor: 'text-orange-700'
  },
  {
    title: 'Join Community',
    description: 'Connect with others',
    icon: '👥',
    route: '/community',
    color: 'bg-indigo-50 hover:bg-indigo-100',
    textColor: 'text-indigo-700'
  },
  {
    title: 'Browse Resources',
    description: 'Explore wellness content',
    icon: '📚',
    route: '/resources',
    color: 'bg-cyan-50 hover:bg-cyan-100',
    textColor: 'text-cyan-700'
  }
];
