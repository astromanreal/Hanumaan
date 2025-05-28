
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'My Spiritual Journey - Profile',
  description: 'Manage your spiritual journey, track remembered mantras, focused Siddhis, and progress on Hanuman Leela.',
  robots: {
    index: false, 
    follow: true,
  },
  alternates: {
    canonical: '/profile',
  },
  openGraph: {
    title: 'My Spiritual Journey - Profile | Hanuman Leela',
    description: 'Manage your spiritual journey and track progress on Hanuman Leela.',
    url: `${SITE_URL}/profile`,
    images: [
      {
        url: `${SITE_URL}/og-profile.jpg`, // Consider adding a default OG image for profile
        width: 1200,
        height: 630,
        alt: 'Hanuman Leela User Profile',
      },
    ],
    type: 'profile', // Open Graph profile type
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Spiritual Journey - Profile | Hanuman Leela',
    description: 'Manage your spiritual journey and track progress on Hanuman Leela.',
    images: [`${SITE_URL}/twitter-profile.jpg`], // Consider adding a default Twitter image
  },
};

export default function ProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
