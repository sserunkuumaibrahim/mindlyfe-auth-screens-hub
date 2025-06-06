
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SupportHeader from '@/components/dashboard/SupportHeader';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Download, MoreHorizontal } from 'lucide-react';

const TicketManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SupportHeader firstName="Agent" notificationCount={12} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Ticket Management</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button>Create Ticket</Button>
          </div>
        </div>

        {/* Search & Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🔍 Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="ticket ID, user email, keywords..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  />
                </div>
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <select className="px-3 py-2 border rounded-md">
                  <option>All Status</option>
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                  <option>Closed</option>
                </select>
                <select className="px-3 py-2 border rounded-md">
                  <option>All Priority</option>
                  <option>Crisis</option>
                  <option>High</option>
                  <option>Normal</option>
                  <option>Low</option>
                </select>
                <select className="px-3 py-2 border rounded-md">
                  <option>All Categories</option>
                  <option>Technical</option>
                  <option>Billing</option>
                  <option>Account</option>
                  <option>Crisis</option>
                </select>
                <select className="px-3 py-2 border rounded-md">
                  <option>Assigned To</option>
                  <option>Me</option>
                  <option>Unassigned</option>
                  <option>Sarah Johnson</option>
                  <option>Mike Wilson</option>
                </select>
                <Button variant="outline">Clear All</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ticket Statistics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📊 Ticket Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">
              Total: 1,247 | Open: 247 | In Progress: 89 | Resolved: 911 | Urgent: 7
              <br />
              My Tickets: 18 | Unassigned: 34 | Overdue: 5 | Avg Resolution: 2.4h
            </div>
          </CardContent>
        </Card>

        {/* Ticket List */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex justify-between">
              🎫 Ticket List
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Export</Button>
                <Button variant="outline" size="sm">Bulk Actions</Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">
                      <input type="checkbox" />
                    </th>
                    <th className="text-left p-3">ID</th>
                    <th className="text-left p-3">Priority</th>
                    <th className="text-left p-3">Subject</th>
                    <th className="text-left p-3">User</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Assigned</th>
                    <th className="text-left p-3">Updated</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 'T-8934', priority: 'Crisis', subject: 'Suicide ideation support', user: 'john.doe', status: 'Open', assigned: 'Sarah J.', updated: '2m ago', priorityColor: 'red' },
                    { id: 'T-8933', priority: 'High', subject: 'Payment failed repeatedly', user: 'jane.smith', status: 'Progress', assigned: 'Mike W.', updated: '15m ago', priorityColor: 'orange' },
                    { id: 'T-8932', priority: 'Normal', subject: "Can't access therapist", user: 'alex.chen', status: 'Open', assigned: 'Unassigned', updated: '1h ago', priorityColor: 'green' },
                    { id: 'T-8931', priority: 'High', subject: 'App crashes during session', user: 'emma.davis', status: 'Progress', assigned: 'Lisa B.', updated: '2h ago', priorityColor: 'orange' },
                    { id: 'T-8930', priority: 'Normal', subject: 'Question about subscription', user: 'mike.wilson', status: 'Resolved', assigned: 'Tom R.', updated: '3h ago', priorityColor: 'green' },
                    { id: 'T-8929', priority: 'Crisis', subject: 'Self-harm content reported', user: 'user.anon', status: 'Progress', assigned: 'Crisis T.', updated: '4h ago', priorityColor: 'red' },
                    { id: 'T-8928', priority: 'Normal', subject: 'Password reset not working', user: 'lisa.brown', status: 'Open', assigned: 'Unassigned', updated: '5h ago', priorityColor: 'green' }
                  ].map((ticket, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <input type="checkbox" />
                      </td>
                      <td className="p-3 font-medium">{ticket.id}</td>
                      <td className="p-3">
                        <Badge variant={ticket.priorityColor === 'red' ? 'destructive' : ticket.priorityColor === 'orange' ? 'outline' : 'default'}>
                          {ticket.priority}
                        </Badge>
                      </td>
                      <td className="p-3">{ticket.subject}</td>
                      <td className="p-3">{ticket.user}</td>
                      <td className="p-3">
                        <Badge variant={ticket.status === 'Resolved' ? 'default' : 'outline'}>
                          {ticket.status}
                        </Badge>
                      </td>
                      <td className="p-3">{ticket.assigned}</td>
                      <td className="p-3">{ticket.updated}</td>
                      <td className="p-3">
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-600">
                Page 1 of 125 | Showing 25 tickets
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bulk Actions */}
        <Card>
          <CardHeader>
            <CardTitle>🔧 Bulk Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 mb-4">
              Selected: 0 tickets
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">Assign to Agent</Button>
              <Button variant="outline" size="sm">Change Priority</Button>
              <Button variant="outline" size="sm">Update Status</Button>
              <Button variant="outline" size="sm">Add Tags</Button>
              <Button variant="outline" size="sm">Export</Button>
              <Button variant="outline" size="sm">Send Update</Button>
              <Button variant="outline" size="sm">Escalate</Button>
              <Button variant="outline" size="sm">Close Tickets</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TicketManagement;
