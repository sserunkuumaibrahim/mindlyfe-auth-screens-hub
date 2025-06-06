
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle, Eye, Trash2, Check, X } from 'lucide-react';

interface ReportedContent {
  id: string;
  author: {
    anonymousId: string;
    pseudonym: string;
    avatarColor: string;
  };
  content: string;
  type: 'post' | 'comment';
  reportCount: number;
  reportReasons: string[];
  reportedAt: string;
  status: 'pending' | 'reviewed' | 'resolved';
}

const ContentModeration = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'pending' | 'reviewed' | 'all'>('pending');

  // Mock reported content data
  const reportedContent: ReportedContent[] = [
    {
      id: 'report_1',
      author: {
        anonymousId: 'anon_999',
        pseudonym: 'Anonymous User',
        avatarColor: '#666666',
      },
      content: 'This is inappropriate content that violates community guidelines...',
      type: 'post',
      reportCount: 3,
      reportReasons: ['Spam/Off-topic', 'Inappropriate content'],
      reportedAt: '2024-01-15T10:00:00Z',
      status: 'pending',
    },
    {
      id: 'report_2',
      author: {
        anonymousId: 'anon_789',
        pseudonym: 'Peaceful Warrior',
        avatarColor: '#8EBC40',
      },
      content: 'Content that might be triggering to some users without proper warnings...',
      type: 'post',
      reportCount: 2,
      reportReasons: ['Harmful content', 'Missing content warning'],
      reportedAt: '2024-01-14T15:30:00Z',
      status: 'pending',
    },
  ];

  const [guidelines] = useState([
    { id: 1, text: 'No personal attacks', checked: true },
    { id: 2, text: 'No spam or self-promotion', checked: true },
    { id: 3, text: 'Respect privacy', checked: true },
    { id: 4, text: 'Mental health focus', checked: true },
    { id: 5, text: 'Professional boundaries', checked: true },
  ]);

  const handleModerationAction = (reportId: string, action: 'warn' | 'remove' | 'keep' | 'restrict' | 'ban' | 'content-warning') => {
    console.log(`Taking action ${action} on report ${reportId}`);
  };

  const handleReviewContent = (reportId: string) => {
    console.log(`Reviewing content ${reportId}`);
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      pending: 'bg-yellow-100 text-yellow-800',
      reviewed: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800',
    };
    return (
      <Badge className={statusStyles[status as keyof typeof statusStyles]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const filteredContent = reportedContent.filter(item => 
    filter === 'all' || item.status === filter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/community')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Content Moderation</h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex mb-6 bg-white rounded-lg p-1 shadow-sm">
          {(['pending', 'reviewed', 'all'] as const).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === filterOption
                  ? 'bg-mindlyfe-blue text-white'
                  : 'text-gray-600 hover:text-mindlyfe-blue hover:bg-mindlyfe-blue/10'
              }`}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              {filterOption === 'pending' && (
                <Badge className="ml-2 bg-red-500 text-white text-xs">
                  {reportedContent.filter(item => item.status === 'pending').length}
                </Badge>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reported Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Reported Content ({filteredContent.length})
                </h3>
                
                <div className="space-y-4">
                  {filteredContent.map((item) => (
                    <Card key={item.id} className="border-l-4 border-l-red-500">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                              style={{ backgroundColor: item.author.avatarColor }}
                            >
                              {item.author.pseudonym.split(' ').map(word => word[0]).join('')}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{item.author.pseudonym}</h4>
                              <p className="text-sm text-gray-500">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
                            </div>
                          </div>
                          {getStatusBadge(item.status)}
                        </div>

                        <div className="mb-3">
                          <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-lg">
                            "{item.content}"
                          </p>
                        </div>

                        <div className="mb-3">
                          <p className="text-sm text-red-600 font-medium">
                            Reports: {item.reportCount} users
                          </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.reportReasons.map((reason, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-red-200 text-red-700">
                                {reason}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReviewContent(item.id)}
                            className="border-blue-300 text-blue-700 hover:bg-blue-50"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Review
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleModerationAction(item.id, 'remove')}
                            className="border-red-300 text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Remove
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleModerationAction(item.id, 'keep')}
                            className="border-green-300 text-green-700 hover:bg-green-50"
                          >
                            <Check className="w-4 h-4 mr-1" />
                            Keep
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {filteredContent.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                      <p>No reported content to review</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Moderation Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Moderation Actions</h3>
                
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                    onClick={() => handleModerationAction('', 'warn')}
                  >
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Warn User
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-red-300 text-red-700 hover:bg-red-50"
                    onClick={() => handleModerationAction('', 'remove')}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove Post
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-orange-300 text-orange-700 hover:bg-orange-50"
                    onClick={() => handleModerationAction('', 'restrict')}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Restrict User
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-800 text-gray-800 hover:bg-gray-50"
                    onClick={() => handleModerationAction('', 'ban')}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Ban User
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-purple-300 text-purple-700 hover:bg-purple-50"
                    onClick={() => handleModerationAction('', 'content-warning')}
                  >
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Add Content Warning
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
                
                <div className="space-y-3">
                  {guidelines.map((guideline) => (
                    <div key={guideline.id} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{guideline.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModeration;
