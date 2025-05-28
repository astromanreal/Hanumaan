import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hanuman Leela – Divine Strength, Devotion & Wisdom',
    template: '%s | Hanuman Leela',
  },
  description: 'Explore the divine essence of Sri Hanuman: his life, teachings, mantras, and the epic Ramayana. A sacred portal to connect with Bajrangbali and deepen your spiritual journey.',
  keywords: [
    'Hanuman', 'Hanuman Leela', 'Bajrangbali', 'Sri Rama', 'Sita', 'Ramayana', 'Hinduism', 'Devotion', 'Spiritual',
    'Mantras', 'Hanuman Chalisa', 'Bajrang Baan', 'Hindu Deities', 'Indian Epics', 'Ashta Siddhis',
    'Panchamukhi Hanuman', 'Hindu Festivals', 'Hanuman Jayanti', 'Spiritual Teachings', 'Divine Strength', 'Wisdom',
    'Anjaneya', 'Maruti', 'Pawan Putra', 'Sankat Mochan', 'Hindu Mythology', 'Bhakti Yoga', 'Valmiki Ramayana',
    'Tulsidas Ramcharitmanas'
  ],
  authors: [{ name: 'Hanuman Leela Team', url: SITE_URL }],
  creator: 'Hanuman Leela Team',
  publisher: 'Hanuman Leela Portal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Hanuman Leela – Divine Strength, Devotion & Wisdom',
    description: 'Explore the divine essence of Sri Hanuman: his life, teachings, mantras, and the epic Ramayana. A sacred portal to connect with Bajrangbali.',
    url: SITE_URL,
    siteName: 'Hanuman Leela',
    images: [
      {
        url: 'https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg', 
        width: 736,
        height: 920,
        alt: 'Hanuman Leela - Portal of Devotion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanuman Leela – Divine Strength, Devotion & Wisdom',
    description: 'Explore the divine essence of Sri Hanuman: his life, teachings, mantras, and the epic Ramayana.',
    // siteId: '@yourTwitterHandle', // Replace with your Twitter handle ID if available
    // creator: '@yourTwitterHandle', // Replace with your Twitter handle if available
    images: ['https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg'], 
  },
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon-16x16.png', 
    apple: '/apple-touch-icon.png', 
  },
  manifest: `${SITE_URL}/site.webmanifest`, 
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <ThemeProvider>
          <TooltipProvider>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
