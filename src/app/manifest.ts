import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hanuman Leela – Divine Strength, Devotion & Wisdom',
    short_name: 'Hanuman Leela',
    description: 'Explore the divine essence of Sri Hanuman: his life, teachings, mantras, and the epic Ramayana.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffcf5', // Warm light background
    theme_color: '#f97316',      // Saffron primary color
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
