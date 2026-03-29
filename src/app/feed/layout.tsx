import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Divine Feed - Explore the Ramayana Journey',
  description: 'A modern, scrollable feed of Ramayana insights, character spotlights, sacred mantras, and epic events. Stay connected with the divine journey.',
  alternates: {
    canonical: `${SITE_URL}/feed`,
  },
  openGraph: {
    title: 'Divine Feed | Hanuman Leela',
    description: 'Explore a dynamic stream of Ramayana stories, characters, and mantras.',
    url: `${SITE_URL}/feed`,
    images: [
      {
        url: 'https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg',
        width: 736,
        height: 920,
        alt: 'Divine Feed - Hanuman Leela',
      },
    ],
    type: 'website',
  },
};

export default function FeedLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
