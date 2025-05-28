import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Ashta Siddhis of Hanuman - The Eight Divine Powers',
  description: "Discover the Ashta Siddhis (eight supernatural powers) possessed by Lord Hanuman, as mentioned in Yogic and Puranic texts. Learn about Anima, Mahima, Garima, Laghima, Prapti, Prakamya, Ishitva, and Vashitva, and their spiritual significance.",
  keywords: ['Ashta Siddhis', 'Hanuman Powers', 'Eight Siddhis', 'Anima Siddhi', 'Mahima Siddhi', 'Garima Siddhi', 'Laghima Siddhi', 'Prapti Siddhi', 'Prakamya Siddhi', 'Ishitva Siddhi', 'Vashitva Siddhi', 'Yogic Powers', 'Supernatural Powers Hanuman', 'Spiritual Perfections', 'Hanuman Chalisa Siddhis'],
  alternates: {
    canonical: `${SITE_URL}/ashta-siddhis`,
  },
  openGraph: {
    title: 'Ashta Siddhis of Hanuman - The Eight Divine Powers',
    description: 'Explore the eight supernatural powers (Ashta Siddhis) of Lord Hanuman and their deep spiritual significance in Hindu scriptures.',
    url: `${SITE_URL}/ashta-siddhis`,
    images: [
      {
        url: `${SITE_URL}/og-ashta-siddhis.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Ashta Siddhis - Eight Divine Powers of Hanuman',
      },
    ],
    type: 'article',
    publishedTime: new Date().toISOString(), // Add a published time for articles
    authors: [`${SITE_URL}/about`], // Link to an author page if available
    section: "Spirituality",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashta Siddhis of Hanuman - The Eight Divine Powers',
    description: 'Discover the eight supernatural powers possessed by Lord Hanuman and their meaning.',
    images: [`${SITE_URL}/twitter-ashta-siddhis.jpg`],
  },
};

export default function AshtaSiddhisLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
