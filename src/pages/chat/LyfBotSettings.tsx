
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Download, Trash2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const LyfBotSettings = () => {
  const navigate = useNavigate();
  
  // Settings state
  const [settings, setSettings] = useState({
    responseStyle: 'supportive',
    responseLength: 'detailed',
    includeRecommendations: true,
    useJournalInsights: true,
    saveConversationHistory: true,
    shareInsightsWithJournal: true,
    crisisDetection: true,
    dataRetentionPeriod: '6_months',
    dailyCheckInReminders: true,
    weeklyProgressSummaries: true,
    crisisSupportAlerts: true
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    console.log('Saving LyfBot settings:', settings);
    // In real app, this would save to backend
  };

  const handleExportConversations = () => {
    console.log('Exporting conversations');
    // In real app, this would trigger download
  };

  const handleClearHistory = () => {
    console.log('Clearing conversation history');
    // In real app, this would show confirmation dialog
  };

  const handleResetPreferences = () => {
    console.log('Resetting preferences');
    // Reset to defaults
    setSettings({
      responseStyle: 'supportive',
      responseLength: 'detailed',
      includeRecommendations: true,
      useJournalInsights: true,
      saveConversationHistory: true,
      shareInsightsWithJournal: true,
      crisisDetection: true,
      dataRetentionPeriod: '6_months',
      dailyCheckInReminders: true,
      weeklyProgressSummaries: true,
      crisisSupportAlerts: true
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/chat/lyfbot')}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">LyfBot Settings</h1>
            <p className="text-sm text-gray-600">Customize your AI assistant</p>
          </div>
        </div>

        {/* Conversation Preferences */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Conversation Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Response Style
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="responseStyle"
                    value="supportive"
                    checked={settings.responseStyle === 'supportive'}
                    onChange={(e) => handleSettingChange('responseStyle', e.target.value)}
                    className="text-mindlyfe-blue"
                  />
                  <span className="text-sm">Supportive & Empathetic</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="responseStyle"
                    value="direct"
                    checked={settings.responseStyle === 'direct'}
                    onChange={(e) => handleSettingChange('responseStyle', e.target.value)}
                    className="text-mindlyfe-blue"
                  />
                  <span className="text-sm">Direct & Solution-focused</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="responseStyle"
                    value="gentle"
                    checked={settings.responseStyle === 'gentle'}
                    onChange={(e) => handleSettingChange('responseStyle', e.target.value)}
                    className="text-mindlyfe-blue"
                  />
                  <span className="text-sm">Gentle & Encouraging</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Response Length
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="responseLength"
                    value="brief"
                    checked={settings.responseLength === 'brief'}
                    onChange={(e) => handleSettingChange('responseLength', e.target.value)}
                    className="text-mindlyfe-blue"
                  />
                  <span className="text-sm">Brief</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="responseLength"
                    value="detailed"
                    checked={settings.responseLength === 'detailed'}
                    onChange={(e) => handleSettingChange('responseLength', e.target.value)}
                    className="text-mindlyfe-blue"
                  />
                  <span className="text-sm">Detailed</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="responseLength"
                    value="comprehensive"
                    checked={settings.responseLength === 'comprehensive'}
                    onChange={(e) => handleSettingChange('responseLength', e.target.value)}
                    className="text-mindlyfe-blue"
                  />
                  <span className="text-sm">Comprehensive</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Include Recommendations</div>
                <div className="text-sm text-gray-600">💡 Provide activity suggestions</div>
              </div>
              <Switch
                checked={settings.includeRecommendations}
                onCheckedChange={(checked) => handleSettingChange('includeRecommendations', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Use Journal Insights</div>
                <div className="text-sm text-gray-600">📝 Reference your journal entries</div>
              </div>
              <Switch
                checked={settings.useJournalInsights}
                onCheckedChange={(checked) => handleSettingChange('useJournalInsights', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Data */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Privacy & Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Save Conversation History</div>
                <div className="text-sm text-gray-600">💾 Keep chat history for insights</div>
              </div>
              <Switch
                checked={settings.saveConversationHistory}
                onCheckedChange={(checked) => handleSettingChange('saveConversationHistory', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Share Insights with Journal</div>
                <div className="text-sm text-gray-600">🔗 Connect LyfBot insights to journal</div>
              </div>
              <Switch
                checked={settings.shareInsightsWithJournal}
                onCheckedChange={(checked) => handleSettingChange('shareInsightsWithJournal', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Crisis Detection</div>
                <div className="text-sm text-gray-600">🚨 Monitor for crisis language</div>
              </div>
              <Switch
                checked={settings.crisisDetection}
                onCheckedChange={(checked) => handleSettingChange('crisisDetection', checked)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Data Retention Period
              </label>
              <Select
                value={settings.dataRetentionPeriod}
                onValueChange={(value) => handleSettingChange('dataRetentionPeriod', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3_months">3 months</SelectItem>
                  <SelectItem value="6_months">6 months</SelectItem>
                  <SelectItem value="1_year">1 year</SelectItem>
                  <SelectItem value="indefinite">Indefinite</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Daily Check-in Reminders</div>
                <div className="text-sm text-gray-600">🔔 Gentle daily prompts</div>
              </div>
              <Switch
                checked={settings.dailyCheckInReminders}
                onCheckedChange={(checked) => handleSettingChange('dailyCheckInReminders', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Weekly Progress Summaries</div>
                <div className="text-sm text-gray-600">📊 Weekly insights and progress</div>
              </div>
              <Switch
                checked={settings.weeklyProgressSummaries}
                onCheckedChange={(checked) => handleSettingChange('weeklyProgressSummaries', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Crisis Support Alerts</div>
                <div className="text-sm text-gray-600">🆘 Emergency support notifications</div>
              </div>
              <Switch
                checked={settings.crisisSupportAlerts}
                onCheckedChange={(checked) => handleSettingChange('crisisSupportAlerts', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={handleExportConversations}
              variant="outline"
              className="w-full justify-start"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Conversations
            </Button>
            
            <Button
              onClick={handleClearHistory}
              variant="outline"
              className="w-full justify-start text-orange-600 border-orange-200 hover:bg-orange-50"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear History
            </Button>
            
            <Button
              onClick={handleResetPreferences}
              variant="outline"
              className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Preferences
            </Button>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button
          onClick={handleSaveSettings}
          className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default LyfBotSettings;
