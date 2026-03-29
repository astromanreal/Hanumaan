import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { StructuredData } from '@/components/seo/structured-data';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { ClientAppWrapper } from '@/components/layout/client-app-wrapper';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Hanuman Leela',
  },
  formatDetection: {
    telephone: false,
  },
  authors: [{ name: 'Hanuman Leela Team', url: SITE_URL }],
  creator: 'Sathyam Sarthak',
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
    images: ['https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg'], 
  },
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon-16x16.png', 
    apple: '/apple-touch-icon.png', 
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hanuman Leela",
    "url": SITE_URL,
    "logo": "https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg",
    "description": "A sacred portal dedicated to the divine essence of Lord Hanuman.",
    "sameAs": [
      "https://twitter.com/Sathyamsarthak",
      "https://instagram.com/srishikharji",
      "https://github.com/astromanreal"
    ]
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'} />
        <StructuredData data={organizationData} />
        <ThemeProvider>
          <TooltipProvider>
            <ClientAppWrapper>
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <Toaster />
            </ClientAppWrapper>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
