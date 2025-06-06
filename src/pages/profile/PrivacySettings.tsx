
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft, 
  Shield, 
  Database, 
  Users, 
  FileText,
  Trash2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PrivacySettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    profileVisibility: 'private',
    dataSharing: false,
    analyticsTracking: true,
    marketingCommunications: false,
    therapistAccess: {
      journalEntries: true,
      moodData: true,
      assessmentResults: true,
      communityActivity: false
    }
  });

  const handleToggle = (setting: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleTherapistAccessToggle = (setting: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      therapistAccess: {
        ...prev.therapistAccess,
        [setting]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    toast({
      title: "Privacy settings updated",
      description: "Your privacy preferences have been saved.",
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
            onClick={() => navigate('/profile')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Privacy Settings</h1>
        </div>

        {/* Profile Visibility */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Profile Visibility
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="public"
                  name="visibility"
                  value="public"
                  checked={settings.profileVisibility === 'public'}
                  onChange={(e) => setSettings(prev => ({ ...prev, profileVisibility: e.target.value }))}
                  className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                />
                <Label htmlFor="public">Public</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="private"
                  name="visibility"
                  value="private"
                  checked={settings.profileVisibility === 'private'}
                  onChange={(e) => setSettings(prev => ({ ...prev, profileVisibility: e.target.value }))}
                  className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                />
                <Label htmlFor="private">Private</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="friends"
                  name="visibility"
                  value="friends"
                  checked={settings.profileVisibility === 'friends'}
                  onChange={(e) => setSettings(prev => ({ ...prev, profileVisibility: e.target.value }))}
                  className="text-mindlyfe-blue focus:ring-mindlyfe-blue"
                />
                <Label htmlFor="friends">Friends Only</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Data Sharing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Share data for research</Label>
                <p className="text-sm text-gray-500">Help improve mental health research</p>
              </div>
              <Switch
                checked={settings.dataSharing}
                onCheckedChange={(checked) => handleToggle('dataSharing', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Analytics tracking</Label>
                <p className="text-sm text-gray-500">Help us improve the app experience</p>
              </div>
              <Switch
                checked={settings.analyticsTracking}
                onCheckedChange={(checked) => handleToggle('analyticsTracking', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Marketing communications</Label>
                <p className="text-sm text-gray-500">Receive promotional emails and updates</p>
              </div>
              <Switch
                checked={settings.marketingCommunications}
                onCheckedChange={(checked) => handleToggle('marketingCommunications', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Therapist Access */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Therapist Access
            </CardTitle>
            <p className="text-sm text-gray-500">Allow therapists to view:</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Journal entries</Label>
              <Switch
                checked={settings.therapistAccess.journalEntries}
                onCheckedChange={(checked) => handleTherapistAccessToggle('journalEntries', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label>Mood tracking data</Label>
              <Switch
                checked={settings.therapistAccess.moodData}
                onCheckedChange={(checked) => handleTherapistAccessToggle('moodData', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label>Assessment results</Label>
              <Switch
                checked={settings.therapistAccess.assessmentResults}
                onCheckedChange={(checked) => handleTherapistAccessToggle('assessmentResults', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label>Community activity</Label>
              <Switch
                checked={settings.therapistAccess.communityActivity}
                onCheckedChange={(checked) => handleTherapistAccessToggle('communityActivity', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full border-mindlyfe-blue text-mindlyfe-blue hover:bg-mindlyfe-blue/10"
              onClick={() => navigate('/profile/data-export')}
            >
              Export My Data
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-red-500 text-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Account
            </Button>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button 
          onClick={handleSaveSettings}
          className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default PrivacySettings;
