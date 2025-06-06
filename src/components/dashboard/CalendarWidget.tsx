
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar as CalendarIcon, Sparkles } from 'lucide-react';

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
      case 'therapy': return 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm';
      case 'meditation': return 'bg-green-50 text-green-700 border-green-200 shadow-sm';
      case 'appointment': return 'bg-purple-50 text-purple-700 border-purple-200 shadow-sm';
      case 'goal': return 'bg-orange-50 text-orange-700 border-orange-200 shadow-sm';
      default: return 'bg-gray-50 text-gray-700 border-gray-200 shadow-sm';
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
    <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30 pointer-events-none" />
      
      <CardHeader className="relative pb-6">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <CalendarIcon className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900">Calendar</div>
            <div className="text-sm font-medium text-gray-600">Your upcoming events</div>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative p-6 pt-0 space-y-6">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-2xl border border-gray-200/60 shadow-sm bg-white/80 backdrop-blur-sm p-4"
          modifiers={{
            hasEvent: (date) => hasEvent(date)
          }}
          modifiersStyles={{
            hasEvent: { 
              backgroundColor: 'rgb(99 102 241 / 0.15)',
              color: 'rgb(99 102 241)',
              fontWeight: 'bold',
              borderRadius: '8px',
              position: 'relative'
            }
          }}
        />
        
        {selectedDate && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-600" />
              <h4 className="font-bold text-gray-900 text-lg">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h4>
            </div>
            
            <div className="space-y-3">
              {getSelectedDateEvents().length > 0 ? (
                getSelectedDateEvents().map((event, index) => (
                  <div key={index} className="group/event relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent rounded-xl opacity-0 group-hover/event:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white/80 border border-gray-200/60 hover:border-gray-300 transition-all duration-300 hover:shadow-md">
                      <Badge variant="outline" className={`${getEventColor(event.type)} font-semibold`}>
                        {event.type}
                      </Badge>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900">{event.title}</div>
                        {event.time && (
                          <div className="text-xs text-gray-600 font-medium mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {event.time}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="text-sm font-medium text-gray-500">No events scheduled</div>
                  <div className="text-xs text-gray-400 mt-1">Enjoy your free day!</div>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
