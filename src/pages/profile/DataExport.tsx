
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Clock,
  CheckCircle,
  AlertTriangle,
  Trash2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DataExport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedData, setSelectedData] = useState({
    profile: true,
    journal: true,
    moodTracking: true,
    assessments: true,
    therapyNotes: true,
    communityPosts: true,
    chatConversations: true,
    paymentHistory: true,
    systemLogs: false
  });

  const [exportFormat, setExportFormat] = useState('pdf');
  const [isRequesting, setIsRequesting] = useState(false);

  const dataTypes = [
    { key: 'profile', label: 'Profile information', description: 'Personal details and settings' },
    { key: 'journal', label: 'Journal entries', description: 'All your journal posts and reflections' },
    { key: 'moodTracking', label: 'Mood tracking data', description: 'Mood scores and emotional patterns' },
    { key: 'assessments', label: 'Assessment results', description: 'Mental health assessment scores' },
    { key: 'therapyNotes', label: 'Therapy session notes', description: 'Notes from therapy sessions' },
    { key: 'communityPosts', label: 'Community posts', description: 'Your posts and interactions' },
    { key: 'chatConversations', label: 'Chat conversations', description: 'Chat history and messages' },
    { key: 'paymentHistory', label: 'Payment history', description: 'Billing and subscription records' },
    { key: 'systemLogs', label: 'System logs', description: 'Technical usage data' }
  ];

  const formats = [
    { value: 'json', label: 'JSON (Machine readable)', description: 'Best for importing into other systems' },
    { value: 'pdf', label: 'PDF (Human readable)', description: 'Easy to read and print' },
    { value: 'csv', label: 'CSV (Spreadsheet)', description: 'Import into Excel or Google Sheets' }
  ];

  const previousExports = [
    {
      id: 'export_123',
      date: 'Jan 15, 2024',
      status: 'ready',
      format: 'PDF',
      size: '2.5 MB',
      expiresAt: 'Feb 15, 2024'
    },
    {
      id: 'export_456',
      date: 'Dec 20, 2023',
      status: 'expired',
      format: 'JSON',
      size: '1.8 MB',
      expiresAt: 'Jan 20, 2024'
    }
  ];

  const handleDataToggle = (key: string, checked: boolean) => {
    setSelectedData(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  const handleRequestExport = async () => {
    setIsRequesting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Export request submitted",
        description: "We'll email you when your data export is ready (up to 30 days).",
      });
      
      setIsRequesting(false);
    } catch (error) {
      toast({
        title: "Export request failed",
        description: "Please try again later.",
        variant: "destructive",
      });
      setIsRequesting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'expired': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready': return <CheckCircle className="w-3 h-3" />;
      case 'processing': return <Clock className="w-3 h-3" />;
      case 'expired': return <AlertTriangle className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
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
          <h1 className="text-2xl font-bold text-gray-900">Export My Data</h1>
        </div>

        {/* Info Card */}
        <Card className="mb-6 bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-900">Data Export Request</h3>
                <p className="text-sm text-blue-700 mt-1">
                  Download a complete copy of all your data from MindLyfe. This includes your personal information, journal entries, and activity history.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select Data Types */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Data Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dataTypes.map((dataType) => (
              <div key={dataType.key} className="flex items-start space-x-3">
                <Checkbox
                  id={dataType.key}
                  checked={selectedData[dataType.key as keyof typeof selectedData]}
                  onCheckedChange={(checked) => handleDataToggle(dataType.key, checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor={dataType.key} className="text-sm font-medium cursor-pointer">
                    {dataType.label}
                  </Label>
                  <p className="text-xs text-gray-500 mt-1">{dataType.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Export Format */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Export Format</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {formats.map((format) => (
              <div key={format.value} className="flex items-start space-x-3">
                <input
                  type="radio"
                  id={format.value}
                  name="format"
                  value={format.value}
                  checked={exportFormat === format.value}
                  onChange={(e) => setExportFormat(e.target.value)}
                  className="mt-1 text-mindlyfe-blue focus:ring-mindlyfe-blue"
                />
                <div className="flex-1">
                  <Label htmlFor={format.value} className="text-sm font-medium cursor-pointer">
                    {format.label}
                  </Label>
                  <p className="text-xs text-gray-500 mt-1">{format.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Request Export */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <Button 
              onClick={handleRequestExport}
              disabled={isRequesting}
              className="w-full bg-mindlyfe-blue hover:bg-mindlyfe-blue/90"
            >
              <Download className="w-4 h-4 mr-2" />
              {isRequesting ? 'Requesting Export...' : 'Request Export'}
            </Button>
            
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  Processing may take up to 30 days. We'll email you when your export is ready.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Previous Exports */}
        <Card>
          <CardHeader>
            <CardTitle>Previous Exports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {previousExports.length > 0 ? (
              previousExports.map((exportItem) => (
                <div key={exportItem.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{exportItem.date}</span>
                      <Badge className={getStatusColor(exportItem.status)}>
                        {getStatusIcon(exportItem.status)}
                        <span className="ml-1 capitalize">{exportItem.status}</span>
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{exportItem.format}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Size: {exportItem.size} • Expires: {exportItem.expiresAt}
                    </span>
                    <div className="flex gap-2">
                      {exportItem.status === 'ready' && (
                        <Button variant="outline" size="sm">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-3 h-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No previous exports</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataExport;
