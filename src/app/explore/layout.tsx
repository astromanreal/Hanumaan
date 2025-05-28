import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Explore Hanuman Leela - Divine Journey, Mantras, Epics',
  description: "Navigate through the various dimensions of Lord Hanuman's divine life, teachings, sacred mantras, epics like Ramayana, and significant events. Each section offers unique insights into his profound legacy.",
  keywords: ['Explore Hanuman', 'Hanuman Journey', 'Ramayana Summary', 'Hanuman Mantras', 'Panchamukhi Hanuman', 'Ashta Siddhis', 'Hanuman Events', 'Spiritual Exploration', 'Hindu Teachings', 'Divine Path'],
  alternates: {
    canonical: `${SITE_URL}/explore`,
  },
  openGraph: {
    title: 'Explore Hanuman Leela - Divine Journey, Mantras, Epics',
    description: "Navigate through the various dimensions of Lord Hanuman's divine life, teachings, and sacred epics on Hanuman Leela.",
    url: `${SITE_URL}/explore`,
    images: [
      {
        url: `${SITE_URL}/og-explore.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Explore the World of Hanuman Leela',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Hanuman Leela - Divine Journey, Mantras, Epics',
    description: "Navigate through the various dimensions of Lord Hanuman's divine life and teachings.",
    images: [`${SITE_URL}/twitter-explore.jpg`], 
  },
};

export default function ExploreLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
