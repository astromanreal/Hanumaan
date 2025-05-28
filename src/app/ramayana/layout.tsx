import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'The Ramayana & Mahabharata - Epic Sagas of India',
  description: "Explore summaries of the Ramayana Kandas and Mahabharata Parvas. Discover timeless lessons of dharma, devotion, and the integral role of Lord Hanuman in these sacred Hindu epics.",
  keywords: ['Ramayana', 'Mahabharata', 'Hindu Epics', 'Kandas', 'Parvas', 'Rama', 'Sita', 'Hanuman', 'Krishna', 'Arjuna', 'Indian Mythology', 'Dharma', 'Valmiki Ramayana', 'Vyasa Mahabharata'],
  alternates: {
    canonical: `${SITE_URL}/ramayana`,
  },
  openGraph: {
    title: 'The Ramayana & Mahabharata - Epic Sagas of India',
    description: 'Explore summaries of the Ramayana Kandas and Mahabharata Parvas, uncovering timeless lessons and the role of Lord Hanuman.',
    url: `${SITE_URL}/ramayana`,
    images: [
      {
        url: `${SITE_URL}/og-epics.jpg`, 
        width: 1200,
        height: 630,
        alt: 'The Ramayana and Mahabharata - Sacred Indian Epics',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ramayana & Mahabharata - Epic Sagas of India',
    description: 'Explore summaries of the Ramayana Kandas and Mahabharata Parvas.',
    images: [`${SITE_URL}/twitter-epics.jpg`], 
  },
};

export default function RamayanaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
