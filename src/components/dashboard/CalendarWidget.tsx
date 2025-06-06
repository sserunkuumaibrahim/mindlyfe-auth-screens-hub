
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarEvent {
  date: Date;
  title: string;
  type: 'therapy' | 'meditation' | 'appointment' | 'goal';
  time?: string;
}

interface CalendarWidgetProps {
  events?: CalendarEvent[];
}

const CalendarWidget = ({ events = [] }: CalendarWidgetProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const defaultEvents: CalendarEvent[] = [
    {
      date: new Date(),
      title: 'Therapy Session',
      type: 'therapy',
      time: '3:00 PM'
    },
    {
      date: new Date(Date.now() + 24 * 60 * 60 * 1000),
      title: 'Meditation Goal',
      type: 'meditation',
      time: '7:00 AM'
    },
    {
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      title: 'Weekly Check-in',
      type: 'appointment',
      time: '10:00 AM'
    }
  ];

  const displayEvents = events.length > 0 ? events : defaultEvents;

  const getEventColor = (type: string) => {
    switch (type) {
      case 'therapy': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'meditation': return 'bg-green-100 text-green-800 border-green-200';
      case 'appointment': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'goal': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const hasEvent = (date: Date) => {
    return displayEvents.some(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const getSelectedDateEvents = () => {
    if (!selectedDate) return [];
    return displayEvents.filter(event => 
      event.date.toDateString() === selectedDate.toDateString()
    );
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-md flex items-center justify-center">
            <span className="text-white text-sm">📅</span>
          </div>
          Calendar
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border border-white/20"
            modifiers={{
              hasEvent: (date) => hasEvent(date)
            }}
            modifiersStyles={{
              hasEvent: { 
                backgroundColor: 'rgb(99 102 241 / 0.1)',
                color: 'rgb(99 102 241)',
                fontWeight: 'bold'
              }
            }}
          />
          
          {selectedDate && (
            <div className="mt-4 space-y-3">
              <h4 className="font-semibold text-gray-900">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h4>
              
              <div className="space-y-2">
                {getSelectedDateEvents().length > 0 ? (
                  getSelectedDateEvents().map((event, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-white/20">
                      <Badge variant="outline" className={getEventColor(event.type)}>
                        {event.type}
                      </Badge>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        {event.time && (
                          <div className="text-xs text-gray-600">{event.time}</div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 text-center py-4">
                    No events scheduled for this day
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
