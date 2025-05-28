import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: "The Divine Journey of Hanuman - Life & Legacy",
  description: "Explore the epic life of Lord Hanuman, from his divine birth and childhood exploits to his pivotal role in the Ramayana, his presence in the Mahabharata, and his eternal significance as a Chiranjivi.",
  keywords: ["Hanuman Journey", "Life of Hanuman", "Hanuman Ramayana", "Hanuman Mahabharata", "Hanuman Birth", "Hanuman Powers", "Hanuman Devotion", "Bajrangbali Life Story", "Chiranjeevi Hanuman", "Hanuman Leelas"],
  alternates: {
    canonical: `${SITE_URL}/journey`,
  },
  openGraph: {
    title: "The Divine Journey of Hanuman - Life, Legacy & Teachings",
    description: "Trace the epic life of Lord Hanuman, from his divine birth and childhood to his pivotal role in ancient epics like Ramayana and Mahabharata.",
    url: `${SITE_URL}/journey`,
    images: [
      {
        url: 'https://i.pinimg.com/736x/13/57/bc/1357bcf3df4dd696c765aba5c71f70ad.jpg', 
        width: 736,
        height: 736,
        alt: "Hanuman's Divine Journey Through Epics",
      },
    ],
    type: 'article',
    section: 'Hindu Mythology',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Divine Journey of Hanuman - Life & Legacy",
    description: "Explore the epic life of Lord Hanuman, from his divine birth to his pivotal role in ancient epics and his eternal blessings.",
    images: ['https://i.pinimg.com/736x/13/57/bc/1357bcf3df4dd696c765aba5c71f70ad.jpg'], 
  },
};

export default function JourneyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
