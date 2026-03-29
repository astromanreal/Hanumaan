import { MetadataRoute } from 'next';
import { hanumanEventsData } from '@/data/events-data';
import { ramayanaKandas } from '@/data/epics-data';
import { getAllMantras } from '@/data/mantras';
import { charactersData } from '@/data/characters-data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/feed',
    '/explore',
    '/events',
    '/ramayana',
    '/characters',
    '/journey',
    '/mantras',
    '/ashta-siddhis',
    '/contact',
    '/panchamukhi-hanuman',
    '/profile',
    '/settings',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const eventRoutes = hanumanEventsData.map((event) => ({
    url: `${SITE_URL}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const kandaRoutes = ramayanaKandas.map((kanda) => ({
    url: `${SITE_URL}/ramayana/${kanda.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const mantraRoutes = getAllMantras()
    .filter(mantra => mantra.detailPageUrl)
    .map((mantra) => ({
      url: `${SITE_URL}${mantra.detailPageUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const characterRoutes = charactersData.map((char) => ({
    url: `${SITE_URL}/characters/${char.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes, 
    ...eventRoutes, 
    ...kandaRoutes, 
    ...mantraRoutes, 
    ...characterRoutes
  ];
}
