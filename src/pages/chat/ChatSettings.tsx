
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';

const ChatSettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    readReceipts: true,
    anonymousMessaging: true,
    realNameInTherapy: true,
    messageEncryption: true,
    messageNotifications: true,
    groupNotifications: true,
    therapyNotifications: true,
    supportNotifications: true,
    autoDeleteMessages: 'never',
    messageBackup: true
  });

  const handleSettingChange = (key: string, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleExportHistory = () => {
    toast({
      title: "Export started",
      description: "Your chat history export will be ready soon. You'll receive an email when it's complete."
    });
  };

  const handleClearMessages = () => {
    if (confirm('Are you sure you want to clear all messages? This action cannot be undone.')) {
      toast({
        title: "Messages cleared",
        description: "All your chat messages have been deleted.",
        variant: "destructive"
      });
    }
  };

  const autoDeleteOptions = [
    { value: 'never', label: 'Never' },
    { value: '24h', label: '24 hours' },
    { value: '7d', label: '7 days' },
    { value: '30d', label: '30 days' },
    { value: '90d', label: '90 days' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/chat')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Chat Settings</h1>
        </div>

        <div className="space-y-6">
          {/* Privacy & Security */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Read receipts</h4>
                  <p className="text-sm text-gray-600">Let others see when you've read their messages</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.readReceipts}
                    onCheckedChange={(checked) => handleSettingChange('readReceipts', checked)}
                  />
                  <span className="text-sm text-gray-500">✓✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Anonymous messaging</h4>
                  <p className="text-sm text-gray-600">Use your community pseudonym in chats</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.anonymousMessaging}
                    onCheckedChange={(checked) => handleSettingChange('anonymousMessaging', checked)}
                  />
                  <span className="text-sm text-gray-500">👤</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Real name in therapy chats</h4>
                  <p className="text-sm text-gray-600">Show your real name to therapists</p>
                  <Badge className="bg-mindlyfe-green text-white text-xs mt-1">
                    Recommended for therapy
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.realNameInTherapy}
                    onCheckedChange={(checked) => handleSettingChange('realNameInTherapy', checked)}
                  />
                  <span className="text-sm text-gray-500">👨‍⚕️</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Message encryption</h4>
                  <p className="text-sm text-gray-600">End-to-end encrypt all conversations</p>
                  <Badge className="bg-mindlyfe-blue text-white text-xs mt-1">
                    Always enabled
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.messageEncryption}
                    disabled={true}
                    onCheckedChange={(checked) => handleSettingChange('messageEncryption', checked)}
                  />
                  <span className="text-sm text-gray-500">🔒</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Message notifications</h4>
                  <p className="text-sm text-gray-600">Get notified about new messages</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.messageNotifications}
                    onCheckedChange={(checked) => handleSettingChange('messageNotifications', checked)}
                  />
                  <span className="text-sm text-gray-500">🔔</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Group notifications</h4>
                  <p className="text-sm text-gray-600">Notifications from group chats</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.groupNotifications}
                    onCheckedChange={(checked) => handleSettingChange('groupNotifications', checked)}
                  />
                  <span className="text-sm text-gray-500">👥</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Therapy notifications</h4>
                  <p className="text-sm text-gray-600">Messages from therapists</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.therapyNotifications}
                    onCheckedChange={(checked) => handleSettingChange('therapyNotifications', checked)}
                  />
                  <span className="text-sm text-gray-500">👨‍⚕️</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Support group notifications</h4>
                  <p className="text-sm text-gray-600">Messages from support groups</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.supportNotifications}
                    onCheckedChange={(checked) => handleSettingChange('supportNotifications', checked)}
                  />
                  <span className="text-sm text-gray-500">🤝</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Message Management */}
          <Card>
            <CardHeader>
              <CardTitle>Message Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Auto-delete messages</h4>
                  <p className="text-sm text-gray-600">Automatically delete old messages</p>
                </div>
                <select
                  value={settings.autoDeleteMessages}
                  onChange={(e) => handleSettingChange('autoDeleteMessages', e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                >
                  {autoDeleteOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Message backup</h4>
                  <p className="text-sm text-gray-600">Backup messages to secure cloud storage</p>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={settings.messageBackup}
                    onCheckedChange={(checked) => handleSettingChange('messageBackup', checked)}
                  />
                  <span className="text-sm text-gray-500">☁️</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <Button
                  onClick={handleExportHistory}
                  variant="outline"
                  className="w-full border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export Chat History
                </Button>

                <Button
                  onClick={handleClearMessages}
                  variant="outline"
                  className="w-full border-red-300 text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All Messages
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Settings */}
          <Button
            onClick={() => {
              toast({
                title: "Settings saved",
                description: "Your chat preferences have been updated."
              });
            }}
            className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
          >
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatSettings;
