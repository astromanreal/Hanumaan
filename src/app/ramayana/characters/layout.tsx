import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Characters of the Ramayana - Divine Figures & Legends',
  description: 'Explore the divine characters of the Ramayana. From Lord Rama and Mata Sita to Hanuman and Ravana, discover their roles, traits, and significance in the epic saga.',
  keywords: ['Ramayana Characters', 'Lord Rama', 'Mata Sita', 'Hanuman', 'Lakshmana', 'Ravana', 'Bharata', 'Sugriva', 'Vibhishana', 'Hindu Epics', 'Divine Figures'],
  alternates: {
    canonical: `${SITE_URL}/ramayana/characters`,
  },
  openGraph: {
    title: 'Characters of the Ramayana - Divine Figures & Legends',
    description: 'A comprehensive gallery of the major figures from the epic Ramayana.',
    url: `${SITE_URL}/ramayana/characters`,
    images: [
      {
        url: 'https://i.pinimg.com/736x/30/c9/6f/30c96f2e99eaa8a8dd379ed1aa306935.jpg',
        width: 1200,
        height: 630,
        alt: 'Characters of the Ramayana',
      },
    ],
    type: 'website',
  },
};

export default function CharactersLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
