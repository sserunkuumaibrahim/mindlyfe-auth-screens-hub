
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Headphones, Book, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SupportCenter = () => {
  const navigate = useNavigate();

  const recentTickets = [
    { id: 'T-123', subject: 'Login issue', status: 'Resolved', time: '2 hours ago' },
    { id: 'T-124', subject: 'Payment question', status: 'Open', time: '1 day ago' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Headphones className="w-5 h-5 text-blue-600" />
          Support Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col gap-2"
              onClick={() => navigate('/chat')}
            >
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <span className="text-sm">Live Chat</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col gap-2"
              onClick={() => navigate('/resources')}
            >
              <Book className="w-6 h-6 text-green-600" />
              <span className="text-sm">Help Center</span>
            </Button>
          </div>

          {/* Emergency Support */}
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="font-medium text-red-600">Need immediate help?</span>
            </div>
            <div className="text-sm text-gray-600 mb-3">
              If you're experiencing a mental health crisis, we're here 24/7.
            </div>
            <Button 
              size="sm" 
              variant="destructive"
              onClick={() => navigate('/mental-health/crisis')}
            >
              Crisis Support
            </Button>
          </div>

          {/* Recent Support Activity */}
          <div>
            <h4 className="font-medium mb-3">Recent Tickets</h4>
            <div className="space-y-2">
              {recentTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{ticket.id}</div>
                    <div className="text-xs text-gray-600">{ticket.subject}</div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={ticket.status === 'Resolved' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {ticket.status === 'Resolved' ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <Clock className="w-3 h-3 mr-1" />
                      )}
                      {ticket.status}
                    </Badge>
                    <div className="text-xs text-gray-500">{ticket.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="pt-3 border-t">
            <div className="text-sm text-gray-600 mb-2">Need more help?</div>
            <div className="flex gap-2 text-xs">
              <Button size="sm" variant="outline">
                Submit Ticket
              </Button>
              <Button size="sm" variant="outline">
                FAQ
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportCenter;
