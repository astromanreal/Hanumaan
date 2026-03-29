'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, Sparkles, BookOpen, 
  Users2, Music2, CalendarDays, 
  Loader2, RefreshCw, Quote
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ramayanaKandas } from '@/data/epics-data';
import { charactersData } from '@/data/characters-data';
import { hanumanEventsData } from '@/data/events-data';
import { getAllMantras } from '@/data/mantras';
import { cn } from '@/lib/utils';

type FeedItemType = 'kanda' | 'character' | 'event' | 'mantra';

interface FeedItem {
  id: string;
  type: FeedItemType;
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  link: string;
  icon: React.ReactNode;
  label: string;
  meta?: string;
}

const ITEMS_PER_BATCH = 8;

const FeedCard = ({ item, index }: { item: FeedItem; index: number }) => {
  const animationDelay = `${(index % ITEMS_PER_BATCH) * 100}ms`;

  // Render variations based on type
  const renderContent = () => {
    switch (item.type) {
      case 'character':
        return (
          <div className="flex gap-4 items-center">
            {item.imageUrl && (
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/50">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                  data-ai-hint={item.imageHint}
                />
              </div>
            )}
            <div className="space-y-1">
              <Badge variant="outline" className="text-[10px] uppercase tracking-tighter h-5 px-1.5 border-primary/20 text-primary bg-primary/5">
                {item.label}
              </Badge>
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
            </div>
          </div>
        );

      case 'kanda':
        return (
          <div className="space-y-3">
            {item.imageUrl && (
              <div className="relative h-24 w-full overflow-hidden rounded-xl border border-border/50">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-2 left-3">
                   <Badge variant="secondary" className="text-[10px] uppercase tracking-tighter h-5 px-1.5 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                    {item.label}
                  </Badge>
                </div>
              </div>
            )}
            <div className="px-1">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{item.description}</p>
            </div>
          </div>
        );

      case 'mantra':
        return (
          <div className="flex gap-4">
            <div className="mt-1 h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-accent/10 text-accent">
              <Quote className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] uppercase tracking-tighter h-5 px-1.5 border-accent/20 text-accent bg-accent/5">
                  {item.label}
                </Badge>
              </div>
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-foreground/80 italic line-clamp-2 leading-snug">"{item.description}"</p>
            </div>
          </div>
        );

      case 'event':
        return (
          <div className="flex gap-4">
            <div className="mt-1 h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <CalendarDays className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] uppercase tracking-tighter h-5 px-1.5 border-primary/20 text-primary bg-primary/5">
                  {item.label}
                </Badge>
                {item.meta && <span className="text-[10px] text-muted-foreground font-bold">{item.meta}</span>}
              </div>
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{item.description}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
      style={{ animationDelay }}
    >
      <Link href={item.link}>
        <Card className="group relative border-border/40 hover:border-primary/30 transition-all duration-300 bg-card/40 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            {renderContent()}
            <div className="mt-4 pt-3 border-t border-border/20 flex items-center justify-between text-primary font-bold text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
              <span>Read Chapter</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default function FeedPage() {
  const [visibleItems, setVisibleItems] = useState<number>(ITEMS_PER_BATCH);
  const [shuffledFeed, setShuffledFeed] = useState<FeedItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const allContent = useMemo(() => {
    const feed: FeedItem[] = [];

    ramayanaKandas.forEach((kanda) => {
      feed.push({
        id: `kanda-${kanda.slug}`,
        type: 'kanda',
        title: kanda.title,
        description: kanda.summary,
        imageUrl: kanda.imageUrl,
        imageHint: kanda.imageHint,
        link: `/ramayana/${kanda.slug}`,
        icon: <BookOpen className="h-4 w-4" />,
        label: 'Sacred Kanda',
      });
    });

    charactersData.forEach((char) => {
      feed.push({
        id: `char-${char.slug}`,
        type: 'character',
        title: char.name,
        description: char.oneLineDescription,
        imageUrl: char.imageUrl,
        imageHint: char.imageHint,
        link: `/characters/${char.slug}`,
        icon: <Users2 className="h-4 w-4" />,
        label: 'Divine Figure',
      });
    });

    hanumanEventsData.forEach((event) => {
      feed.push({
        id: `event-${event.slug}`,
        type: 'event',
        title: event.title,
        description: event.description,
        imageUrl: event.imageUrl,
        imageHint: event.imageHint,
        link: `/events/${event.slug}`,
        icon: <CalendarDays className="h-4 w-4" />,
        label: 'Sacred Event',
        meta: event.date,
      });
    });

    getAllMantras().forEach((mantra) => {
      feed.push({
        id: `mantra-${mantra.id}`,
        type: 'mantra',
        title: mantra.title,
        description: mantra.englishMeaning,
        link: mantra.detailPageUrl || '/mantras',
        icon: <Music2 className="h-4 w-4" />,
        label: 'Sacred Mantra',
      });
    });

    return feed;
  }, []);

  useEffect(() => {
    const shuffled = [...allContent].sort(() => Math.random() - 0.5);
    setShuffledFeed(shuffled);
    setIsLoaded(true);
  }, [allContent]);

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + ITEMS_PER_BATCH, shuffledFeed.length));
  };

  const displayedItems = shuffledFeed.slice(0, visibleItems);
  const hasMore = visibleItems < shuffledFeed.length;

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse font-medium">Curating your divine feed...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-10 pb-20">
      <PageHeader 
        title="Divine Feed"
        description="A lightweight stream of wisdom, legends, and sacred chants."
      />

      <div className="grid gap-6 px-4">
        {displayedItems.map((item, index) => (
          <FeedCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-8">
          <Button 
            onClick={handleLoadMore} 
            size="lg" 
            variant="outline"
            className="border-primary/20 hover:bg-primary/5 text-primary shadow-sm px-8 rounded-full gap-2 transition-all active:scale-95"
          >
            <RefreshCw className="h-4 w-4" />
            Load More Insights
          </Button>
        </div>
      )}

      {!hasMore && shuffledFeed.length > 0 && (
        <div className="text-center py-12 space-y-4">
          <div className="inline-block p-3 bg-primary/10 rounded-full">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <p className="text-muted-foreground font-medium italic">
            You have explored the depths of the current feed. 
            <br />
            May the wisdom of Rama guide your path today.
          </p>
          <Button asChild variant="link" className="text-primary">
            <Link href="/explore">Discover More Sections</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
