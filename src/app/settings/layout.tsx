
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Application Settings - Hanuman Leela',
  description: 'Personalize your Hanuman Leela experience. Adjust themes, appearance, and other preferences.',
  robots: {
    index: false, 
    follow: true,
  },
  alternates: {
    canonical: '/settings',
  },
   openGraph: {
    title: 'Application Settings | Hanuman Leela',
    description: 'Personalize your Hanuman Leela app experience.',
    url: `${SITE_URL}/settings`,
    images: [
      {
        url: `${SITE_URL}/og-settings.jpg`, // Consider adding a default OG image for settings
        width: 1200,
        height: 630,
        alt: 'Hanuman Leela Application Settings',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Application Settings | Hanuman Leela',
    description: 'Personalize your Hanuman Leela app experience.',
    images: [`${SITE_URL}/twitter-settings.jpg`], // Consider adding a default Twitter image
  },
};

export default function SettingsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
