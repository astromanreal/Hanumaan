// src/app/events/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { hanumanEventsData } from '@/data/events-data';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ListChecks } from 'lucide-react';
// Removed Metadata import

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title="Sacred Events & Festivals"
        description="Explore significant events, festivals, and observances dedicated to Lord Hanuman. Discover their importance and how devotees celebrate these auspicious occasions."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hanumanEventsData.map((event) => (
          <DevotionalCard
            key={event.id}
            title={event.title}
            imageUrl={event.imageUrl}
            imageHint={event.imageHint}
            className="flex flex-col h-full bg-card/80 backdrop-blur-sm shadow-xl border border-primary/20 hover:shadow-primary/30 hover:border-primary/50 active:shadow-primary/40 active:border-primary/70 active:scale-[0.98] transition-all duration-200"
            headerClassName="pb-3 pt-5"
            titleClassName="text-xl flex items-center"
            contentClassName="flex-grow p-5 space-y-4 flex flex-col" 
            content={
              <>
                <div className="flex items-center space-x-2 mb-3">
                  {React.isValidElement(event.icon) ? React.cloneElement(event.icon as React.ReactElement, { className: "h-5 w-5 text-accent" }) : event.icon}
                  <Badge variant="secondary" className="text-xs">{event.date}</Badge>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed min-h-[60px] flex-grow">{event.description}</p>
                
                {event.significance && event.significance.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-semibold text-md text-secondary-foreground mb-2 flex items-center">
                      <ListChecks className="h-5 w-5 mr-2 text-accent" />
                      Key Significance:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-xs text-foreground/70 pl-2">
                      {event.significance.slice(0,2).map((item, index) => ( // Show max 2 for brevity
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            }
            actions={
              <div className="mt-auto pt-4"> {/* Added wrapper and margin-top */}
                <Button asChild variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/events/${event.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
