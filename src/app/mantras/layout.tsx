import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Sacred Hanuman Mantras & Slokas - Chalisa, Bajrang Baan & More',
  description: 'Immerse yourself in a divine collection of Hanuman mantras and slokas. Explore short, medium, and longer compositions like the Hanuman Chalisa and Bajrang Baan for spiritual upliftment, protection, and devotion.',
  keywords: ['Hanuman Mantras', 'Hanuman Slokas', 'Hanuman Chalisa', 'Bajrang Baan', 'Hindu Chants', 'Devotional Hymns', 'Spiritual Mantras', 'Anjaneya Mantras', 'Maruti Stotras', 'Sanskrit Mantras', 'Hanuman Prayers', 'Panchamukhi Kavacham', 'Hanuman Ashtak'],
  alternates: {
    canonical: `${SITE_URL}/mantras`,
  },
  openGraph: {
    title: 'Sacred Hanuman Mantras & Slokas - Chalisa, Bajrang Baan & More',
    description: 'Explore a divine collection of Hanuman mantras for spiritual upliftment, protection, and devotion to Lord Hanuman.',
    url: `${SITE_URL}/mantras`,
    images: [
      {
        url: `${SITE_URL}/og-mantras.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Sacred Hanuman Mantras Collection',
      },
    ],
    type: 'website',
    section: "Devotional Mantras",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sacred Hanuman Mantras & Slokas - Chalisa, Bajrang Baan & More',
    description: 'Explore a divine collection of Hanuman mantras for spiritual upliftment and protection.',
    images: [`${SITE_URL}/twitter-mantras.jpg`], 
  },
};

export default function MantrasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
