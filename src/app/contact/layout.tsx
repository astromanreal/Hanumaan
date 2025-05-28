import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Contact Us - Hanuman Leela',
  description: "Get in touch with the Hanuman Leela team. We'd love to hear from you. Find our email, phone, and social media links for questions, feedback, or connections.",
  keywords: ['Contact Hanuman Leela', 'Hanuman Leela Support', 'Spiritual Queries', 'Feedback', 'Hinduism Contact', 'Get In Touch', 'Connect Hanuman Leela'],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us - Hanuman Leela',
    description: "Reach out to the Hanuman Leela team for inquiries, feedback, or to connect.",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: `${SITE_URL}/og-contact.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Contact Hanuman Leela Team',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Hanuman Leela',
    description: "Reach out to the Hanuman Leela team for inquiries, feedback, or to connect.",
    images: [`${SITE_URL}/twitter-contact.jpg`], 
  },
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
