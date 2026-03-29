import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, Users, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { hanumanEventsData } from '@/data/events-data';
import { getDetailedEventById, detailedEventsData } from '@/data/event-details-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const event = getDetailedEventById(slug) || hanumanEventsData.find(e => e.slug === slug);

  if (!event) {
    return { title: 'Event Not Found | Hanuman Leela' };
  }

  const eventTitle = 'name' in event ? event.name : event.title;
  const eventDescription = 'mainDescription' in event ? event.mainDescription : event.description;

  return {
    title: `${eventTitle} | Events`,
    description: eventDescription,
    alternates: { canonical: `${SITE_URL}/events/${slug}` },
    openGraph: {
      title: `${eventTitle} | Events | Hanuman Leela`,
      description: eventDescription,
      url: `${SITE_URL}/events/${slug}`,
      images: event.imageUrl ? [{ url: event.imageUrl }] : [],
    }
  };
}

interface DetailCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ title, icon, children, className }) => (
  <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm", className)}>
    <CardHeader className="pb-4">
      <CardTitle className="text-xl text-primary flex items-center">
        {icon && React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { className: "mr-3 h-6 w-6" }) : icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3 text-foreground/90 leading-relaxed">
      {children}
    </CardContent>
  </Card>
);

const SectionItem: React.FC<{ label: string; value?: string | ReactNode | string[] | number | null; className?: string }> = ({label, value, className}) => {
  if (!value) return null;
  return (
    <div className={cn("py-2", className)}>
      <h4 className="font-semibold text-secondary-foreground text-md mb-1">{label}</h4>
      <div className="text-sm text-foreground/85">{value}</div>
    </div>
  );
};

export default async function EventDetailPage(props: Props) {
  const { slug } = await props.params;
  const event = getDetailedEventById(slug);

  if (!event) {
    const summaryEvent = hanumanEventsData.find(e => e.slug === slug);
    if (!summaryEvent) notFound();
    return (
      <div className="container mx-auto py-8">
        <PageHeader title={summaryEvent.title} description={summaryEvent.description} />
        {summaryEvent.imageUrl && (
          <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-8">
            <Image 
              src={summaryEvent.imageUrl} 
              alt={summaryEvent.title} 
              fill 
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority 
              className="object-cover"
            />
          </div>
        )}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg"><Link href="/events"><ChevronLeft className="mr-2 h-5 w-5" />Back to All Events</Link></Button>
        </div>
      </div>
    );
  }

  const { festivalDetails } = event;

  return (
    <div className="container mx-auto py-8 space-y-12">
      <PageHeader title={event.name} description={event.mainDescription} />

      {event.imageUrl && (
        <div className="relative aspect-[21/9] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8 bg-muted">
            <Image
                src={event.imageUrl}
                alt={event.name}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">{event.name}</h2>
            </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <DetailCard title="Event Overview" icon={<Info />}>
          <SectionItem label="Date" value={event.date} />
          <SectionItem label="Location" value={event.location} />
          {festivalDetails?.type && <SectionItem label="Type" value={festivalDetails.type} />}
        </DetailCard>

        <DetailCard title="Key Characters" icon={<Users />}>
          <ul className="space-y-4">
            {event.characters_involved.map(char => (
              <li key={char.name} className="p-3 bg-muted/50 rounded-lg border border-border/30">
                <div className="flex items-center font-semibold text-secondary-foreground">
                   {char.name} <Badge variant="outline" className="ml-2 text-xs">{char.role}</Badge>
                </div>
                <p className="text-xs text-foreground/80 mt-1">{char.description}</p>
              </li>
            ))}
          </ul>
        </DetailCard>
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
          <Link href="/events"><ChevronLeft className="mr-2 h-5 w-5" />Back to All Events</Link>
        </Button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const detailedEventSlugs = detailedEventsData.map(event => ({ slug: event.id }));
  const summaryEventSlugs = hanumanEventsData.map(event => ({ slug: event.slug }));
  const allSlugs = [...detailedEventSlugs, ...summaryEventSlugs];
  return Array.from(new Set(allSlugs.map(s => s.slug))).map(slug => ({ slug }));
}
