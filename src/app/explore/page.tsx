// src/app/explore/page.tsx
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { Button } from '@/components/ui/button';
import { Home, BookOpen, Music, Layers, Zap, ArrowRight, Footprints, CalendarDays } from 'lucide-react';
import React from 'react';
// Removed Metadata import

const features = [
  {
    id: 'home',
    title: 'Homepage',
    icon: <Home className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />,
    descriptionText: "Return to the main portal and rediscover the divine essence of Sri Hanuman, his strength, devotion, and wisdom.",
    href: '/',
  },
  {
    id: 'ramayana',
    title: 'The Epic of Ramayana',
    icon: <BookOpen className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />,
    descriptionText: "Explore a summary of the timeless Ramayana saga, focusing on key events and Lord Hanuman's integral role.",
    href: '/ramayana',
  },
  {
    id: 'hanuman-journey',
    title: "Hanuman's Divine Journey",
    icon: <Footprints className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />,
    descriptionText: "Trace the epic life of Lord Hanuman, from his divine birth and childhood to his pivotal role in the Ramayana and beyond.",
    href: '/journey',
  },
  {
    id: 'mantras',
    title: 'Sacred Mantras & Slokas',
    icon: <Music className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />,
    descriptionText: "Immerse in a collection of powerful Hanuman mantras (Chalisa, Bajrang Baan, etc.) for peace and spiritual growth.",
    href: '/mantras',
  },
  {
    id: 'panchamukhi',
    title: 'Panchamukhi Hanuman',
    icon: <Layers className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />,
    descriptionText: "Explore the symbolism of the Five-Faced Hanuman, each face representing a unique divine quality and offering protection.",
    href: '/panchamukhi-hanuman',
  },
  {
    id: 'ashta-siddhis',
    title: 'Ashta Siddhis: Divine Powers',
    icon: <Zap className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />,
    descriptionText: "Discover the eight great spiritual perfections (Ashta Siddhis) embodied by Lord Hanuman and their significance.",
    href: '/ashta-siddhis',
  },
  {
    id: 'events',
    title: 'Sacred Events & Festivals',
    icon: <CalendarDays className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />,
    descriptionText: "Learn about important events and festivals dedicated to Lord Hanuman, and how they are celebrated.",
    href: '/events',
  },
];

export default function ExplorePage() {
  return (
    <div>
      <PageHeader
        title="Explore Hanuman Leela"
        description="Navigate through the various dimensions of Lord Hanuman's divine life and teachings. Each section offers a unique insight into his profound legacy."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <DevotionalCard
            key={feature.id}
            title={feature.title}
            content={
              <div className="flex flex-col items-center text-center space-y-3 flex-grow pt-4 pb-2">
                <div className="p-4 bg-primary/10 rounded-full mb-3 inline-block shadow-md group-hover:bg-primary/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed min-h-[50px] px-3">
                  {feature.descriptionText}
                </p>
              </div>
            }
            actions={
              <Button asChild variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={feature.href}>
                  Explore Section <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            }
            className="flex flex-col h-full bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/30 group"
            contentClassName="flex-grow flex flex-col justify-between" 
            headerClassName="pb-2 pt-5 text-center" 
            titleClassName="text-xl !text-primary font-semibold group-hover:text-accent transition-colors duration-300"
            footerClassName="p-4"
          />
        ))}
      </div>
    </div>
  );
}
