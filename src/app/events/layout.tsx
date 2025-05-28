import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Sacred Events & Festivals of Lord Hanuman',
  description: 'Explore significant events, festivals, and observances dedicated to Lord Hanuman, including Hanuman Jayanti, Sundara Kanda Parayanam, and weekly worship practices. Discover their importance and how devotees celebrate these auspicious occasions.',
  keywords: ['Hanuman Events', 'Hindu Festivals', 'Hanuman Jayanti', 'Sundara Kanda', 'Hanuman Worship', 'Spiritual Observances', 'Bajrangbali Festivals', 'Hindu Religious Events', 'Pujas'],
  alternates: {
    canonical: `${SITE_URL}/events`,
  },
  openGraph: {
    title: 'Sacred Events & Festivals of Lord Hanuman',
    description: 'Explore significant events, festivals, and observances dedicated to Lord Hanuman, their meanings, and celebration details.',
    url: `${SITE_URL}/events`,
    images: [
      {
        url: `${SITE_URL}/og-events.jpg`,
        width: 1200,
        height: 630,
        alt: 'Hanuman Events & Festivals Overview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sacred Events & Festivals of Lord Hanuman',
    description: 'Explore significant events, festivals, and observances dedicated to Lord Hanuman.',
    images: [`${SITE_URL}/twitter-events.jpg`], 
  },
};

export default function EventsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
