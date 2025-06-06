
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Lock, 
  Users, 
  Bot, 
  Database, 
  Shield, 
  Key, 
  Download,
  Trash2,
  AlertTriangle,
  FileText,
  Cloud,
  Fingerprint,
  Clock
} from 'lucide-react';

const JournalPrivacy = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    defaultPrivacy: 'private',
    shareWithTherapist: true,
    shareMoodTrends: true,
    shareEntrySummaries: false,
    aiAnalysis: true,
    moodPredictions: true,
    writingSuggestions: true,
    autoBackup: true,
    retentionPeriod: 'forever',
    requireAuth: true,
    biometricLock: true,
    autoLockTime: 5
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your privacy settings have been updated successfully."
    });
  };

  const exportData = () => {
    toast({
      title: "Export Started",
      description: "Your journal data export will be ready for download shortly."
    });
  };

  const deleteAllEntries = () => {
    // This would typically show a confirmation dialog
    toast({
      title: "Deletion Confirmed",
      description: "All journal entries have been permanently deleted.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader firstName="John" notificationCount={3} />
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/journal')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Privacy Settings</h1>
              <p className="text-gray-600">Control how your journal data is used and shared</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Default Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-mindlyfe-blue" />
                Default Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Choose the default privacy level for new journal entries.
                </p>
                
                <div className="space-y-3">
                  {[
                    { value: 'private', label: 'Private (only you)', description: 'Only visible to you', icon: Lock },
                    { value: 'therapist', label: 'Share with therapist', description: 'Visible to you and your therapist', icon: Users },
                    { value: 'community', label: 'Anonymous community share', description: 'Shared anonymously with community', icon: Users }
                  ].map(option => (
                    <label
                      key={option.value}
                      className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        settings.defaultPrivacy === option.value
                          ? 'border-mindlyfe-blue bg-mindlyfe-blue/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="defaultPrivacy"
                        value={option.value}
                        checked={settings.defaultPrivacy === option.value}
                        onChange={(e) => updateSetting('defaultPrivacy', e.target.value)}
                        className="mt-1"
                      />
                      <div className="flex items-center gap-2">
                        <option.icon className="w-4 h-4 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.description}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <Button
                  onClick={() => updateSetting('defaultPrivacy', settings.defaultPrivacy)}
                  className="bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
                >
                  Update Default
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Therapist Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-mindlyfe-green" />
                Therapist Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Control what journal information is shared with your assigned therapist.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Share journal insights</div>
                      <div className="text-sm text-gray-600">Allow therapist to see AI-generated insights from your entries</div>
                    </div>
                    <Switch
                      checked={settings.shareWithTherapist}
                      onCheckedChange={(checked) => updateSetting('shareWithTherapist', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Share mood trends</div>
                      <div className="text-sm text-gray-600">Share mood patterns and trends over time</div>
                    </div>
                    <Switch
                      checked={settings.shareMoodTrends}
                      onCheckedChange={(checked) => updateSetting('shareMoodTrends', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Share entry summaries</div>
                      <div className="text-sm text-gray-600">Share AI-generated summaries of journal entries</div>
                    </div>
                    <Switch
                      checked={settings.shareEntrySummaries}
                      onCheckedChange={(checked) => updateSetting('shareEntrySummaries', checked)}
                    />
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="border-mindlyfe-green text-mindlyfe-green hover:bg-mindlyfe-green/10"
                >
                  Manage Sharing
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-600" />
                AI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Control how AI analyzes your journal entries to provide insights and suggestions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Allow AI to analyze entries for insights</div>
                      <div className="text-sm text-gray-600">Enable AI analysis to identify patterns and provide personalized insights</div>
                    </div>
                    <Switch
                      checked={settings.aiAnalysis}
                      onCheckedChange={(checked) => updateSetting('aiAnalysis', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Include in mood predictions</div>
                      <div className="text-sm text-gray-600">Use entry content to improve mood prediction accuracy</div>
                    </div>
                    <Switch
                      checked={settings.moodPredictions}
                      onCheckedChange={(checked) => updateSetting('moodPredictions', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Generate writing suggestions</div>
                      <div className="text-sm text-gray-600">Receive AI-powered prompts and writing suggestions based on your entries</div>
                    </div>
                    <Switch
                      checked={settings.writingSuggestions}
                      onCheckedChange={(checked) => updateSetting('writingSuggestions', checked)}
                    />
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm text-purple-800">
                    <strong>Privacy Note:</strong> All AI analysis is performed securely and your personal data is never used to train external models without your explicit consent.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-orange-600" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Auto-backup entries</div>
                    <div className="text-sm text-gray-600">Automatically backup your entries to secure cloud storage</div>
                  </div>
                  <Switch
                    checked={settings.autoBackup}
                    onCheckedChange={(checked) => updateSetting('autoBackup', checked)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-gray-900">Data retention period</div>
                  <Select value={settings.retentionPeriod} onValueChange={(value) => updateSetting('retentionPeriod', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="forever">Keep forever</SelectItem>
                      <SelectItem value="5years">5 years</SelectItem>
                      <SelectItem value="3years">3 years</SelectItem>
                      <SelectItem value="1year">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-sm text-gray-600">How long to keep your journal entries</div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={exportData}
                    className="border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export All Data
                  </Button>
                  <Button
                    variant="outline"
                    onClick={deleteAllEntries}
                    className="border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete All Entries
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Require authentication</div>
                    <div className="text-sm text-gray-600">Require login to access journal entries</div>
                  </div>
                  <Switch
                    checked={settings.requireAuth}
                    onCheckedChange={(checked) => updateSetting('requireAuth', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Biometric lock</div>
                    <div className="text-sm text-gray-600">Use fingerprint or face recognition for additional security</div>
                  </div>
                  <Switch
                    checked={settings.biometricLock}
                    onCheckedChange={(checked) => updateSetting('biometricLock', checked)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-gray-900">Auto-lock after</div>
                  <Select value={settings.autoLockTime.toString()} onValueChange={(value) => updateSetting('autoLockTime', parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 minute</SelectItem>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-sm text-gray-600">Automatically lock the app after this period of inactivity</div>
                </div>

                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <div className="text-sm text-red-800">
                      <strong>Important:</strong> All journal entries are encrypted and stored securely. Your privacy is our top priority.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Settings */}
          <div className="flex justify-end">
            <Button
              onClick={saveSettings}
              className="bg-mindlyfe-green hover:bg-mindlyfe-green/90"
            >
              <FileText className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPrivacy;
