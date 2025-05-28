import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Panchamukhi Hanuman - The Five-Faced Lord of Protection',
  description: "Explore the profound symbolism of Panchamukhi Hanuman (Five-Faced Hanuman). Learn about each divine face (Hanuman, Narasimha, Garuda, Varaha, Hayagriva) and their unique protective blessings and powers against all evils.",
  keywords: ['Panchamukhi Hanuman', 'Five Faced Hanuman', 'Hanuman Forms', 'Narasimha', 'Garuda', 'Varaha', 'Hayagriva', 'Hindu Deities', 'Hanuman Protection', 'Mahiravana Story', 'Hanuman Kavacham'],
  alternates: {
    canonical: `${SITE_URL}/panchamukhi-hanuman`,
  },
  openGraph: {
    title: 'Panchamukhi Hanuman - The Five-Faced Lord of Protection',
    description: "Explore the symbolism of Panchamukhi Hanuman. Learn about each divine face, their powers, and the significance of this mighty form.",
    url: `${SITE_URL}/panchamukhi-hanuman`,
    images: [
      {
        url: 'https://i.pinimg.com/736x/1f/92/14/1f9214b8cbf36cc1a96d0127ce01ec65.jpg',
        width: 736,
        height: 1104,
        alt: 'Panchamukhi Hanuman - The Five-Faced Form',
      },
    ],
    type: 'article',
    section: "Hindu Deities"
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panchamukhi Hanuman - The Five-Faced Lord of Protection',
    description: "Explore the profound symbolism of Panchamukhi Hanuman and his five divine faces, each offering unique blessings.",
    images: ['https://i.pinimg.com/736x/1f/92/14/1f9214b8cbf36cc1a96d0127ce01ec65.jpg'],
  },
};

export default function PanchamukhiHanumanLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
