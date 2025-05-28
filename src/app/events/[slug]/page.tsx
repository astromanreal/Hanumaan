
// src/app/events/[slug]/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { hanumanEventsData } from '@/data/events-data';
import { getDetailedEventById, detailedEventsData } from '@/data/event-details-data'; // Ensure detailedEventsData is imported
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

interface DetailCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}


export default function EventDetailPage({ 
  params,
  searchParams // searchParams is optional and might not be used, but good to include for completeness
}: { 
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const event = getDetailedEventById(params.slug);

  if (!event) {
    notFound();
  }
  
  return (
 <div className="container mx-auto py-8">
 <PageHeader title={event.name || 'Event Found'} description="Simplified view of the event." />
    </div>
  );
}

export async function generateStaticParams() {
  // Using detailedEventsData which should have `id` matching `slug` from hanumanEventsData
  const detailedEventSlugs = detailedEventsData.map(event => ({ slug: event.id }));
  // Fallback for events that might only be in hanumanEventsData
  const summaryEventSlugs = hanumanEventsData.map(event => ({ slug: event.slug }));
  
  const allSlugsSet = new Set([...detailedEventSlugs.map(s => s.slug), ...summaryEventSlugs.map(s => s.slug)]);
  
  return Array.from(allSlugsSet).map(slug => ({ slug }));
}

    