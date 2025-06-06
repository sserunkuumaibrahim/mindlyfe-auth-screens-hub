
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, 
  Bell, 
  Smartphone, 
  Mail, 
  MessageSquare,
  Clock,
  Heart,
  Calendar,
  Users,
  Bot,
  AlertTriangle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NotificationSettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    delivery: {
      push: true,
      email: true,
      sms: false
    },
    content: {
      healthReminders: true,
      appointmentReminders: true,
      communityActivity: true,
      lyfbotMessages: true,
      crisisAlerts: true
    },
    quietHours: {
      enabled: true,
      from: '22:00',
      to: '07:00',
      timezone: 'auto'
    }
  });

  const handleDeliveryToggle = (method: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      delivery: {
        ...prev.delivery,
        [method]: value
      }
    }));
  };

  const handleContentToggle = (type: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      content: {
        ...prev.content,
        [type]: value
      }
    }));
  };

  const handleQuietHoursChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      quietHours: {
        ...prev.quietHours,
        [field]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been saved.",
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
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>

        {/* Delivery Methods */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Delivery Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-mindlyfe-blue" />
                <div>
                  <Label>Push notifications</Label>
                  <p className="text-sm text-gray-500">Get notifications on your device</p>
                </div>
              </div>
              <Switch
                checked={settings.delivery.push}
                onCheckedChange={(checked) => handleDeliveryToggle('push', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-mindlyfe-green" />
                <div>
                  <Label>Email notifications</Label>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
              </div>
              <Switch
                checked={settings.delivery.email}
                onCheckedChange={(checked) => handleDeliveryToggle('email', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <div>
                  <Label>SMS notifications</Label>
                  <p className="text-sm text-gray-500">Get text messages for urgent updates</p>
                </div>
              </div>
              <Switch
                checked={settings.delivery.sms}
                onCheckedChange={(checked) => handleDeliveryToggle('sms', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Content Types */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Content Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-red-500" />
                <div>
                  <Label>Health reminders</Label>
                  <p className="text-sm text-gray-500">Medication, mood check-ins, etc.</p>
                </div>
              </div>
              <Switch
                checked={settings.content.healthReminders}
                onCheckedChange={(checked) => handleContentToggle('healthReminders', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-mindlyfe-blue" />
                <div>
                  <Label>Appointment reminders</Label>
                  <p className="text-sm text-gray-500">Therapy sessions and consultations</p>
                </div>
              </div>
              <Switch
                checked={settings.content.appointmentReminders}
                onCheckedChange={(checked) => handleContentToggle('appointmentReminders', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-mindlyfe-green" />
                <div>
                  <Label>Community activity</Label>
                  <p className="text-sm text-gray-500">Comments, likes, and new posts</p>
                </div>
              </div>
              <Switch
                checked={settings.content.communityActivity}
                onCheckedChange={(checked) => handleContentToggle('communityActivity', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="w-5 h-5 text-purple-600" />
                <div>
                  <Label>LyfBot messages</Label>
                  <p className="text-sm text-gray-500">AI assistant check-ins and tips</p>
                </div>
              </div>
              <Switch
                checked={settings.content.lyfbotMessages}
                onCheckedChange={(checked) => handleContentToggle('lyfbotMessages', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <div>
                  <Label>Crisis alerts</Label>
                  <p className="text-sm text-gray-500">Emergency support and resources</p>
                  <p className="text-xs text-red-600 font-medium">(Required)</p>
                </div>
              </div>
              <Switch
                checked={settings.content.crisisAlerts}
                onCheckedChange={(checked) => handleContentToggle('crisisAlerts', checked)}
                disabled={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quiet Hours */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Quiet Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Enable quiet hours</Label>
              <Switch
                checked={settings.quietHours.enabled}
                onCheckedChange={(checked) => handleQuietHoursChange('enabled', checked)}
              />
            </div>
            
            {settings.quietHours.enabled && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from-time">From</Label>
                    <Input
                      id="from-time"
                      type="time"
                      value={settings.quietHours.from}
                      onChange={(e) => handleQuietHoursChange('from', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="to-time">To</Label>
                    <Input
                      id="to-time"
                      type="time"
                      value={settings.quietHours.to}
                      onChange={(e) => handleQuietHoursChange('to', e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <select
                    id="timezone"
                    value={settings.quietHours.timezone}
                    onChange={(e) => handleQuietHoursChange('timezone', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mindlyfe-blue focus:border-transparent"
                  >
                    <option value="auto">Auto-detect</option>
                    <option value="EST">Eastern Time (EST)</option>
                    <option value="CST">Central Time (CST)</option>
                    <option value="MST">Mountain Time (MST)</option>
                    <option value="PST">Pacific Time (PST)</option>
                  </select>
                </div>
              </>
            )}
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

export default NotificationSettings;
