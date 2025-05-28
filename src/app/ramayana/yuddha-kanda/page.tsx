// src/app/ramayana/yuddha-kanda/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, Shield, BookOpen, Users, CalendarDays, ListChecks, Sparkles, Users2, Drama, MapPin, MessageCircle, Zap as LucideZap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ramayanaKandas } from '@/data/epics-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { yuddhaKandaBookData } from '@/data/kanda-details/yuddha-kanda-data';
import type { KandaBook } from '@/data/kanda-details/kanda-types';
import { DevotionalCard } from '@/components/ui/devotional-card';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Yuddha Kanda - The Great War of Ramayana',
  description: "Explore the Yuddha Kanda, the Book of War from Ramayana. Detailed account of the epic battle between Lord Rama's army and Ravana's forces, Hanuman's valor, and the triumph of dharma.",
  keywords: ['Yuddha Kanda', 'Lanka Kanda', 'Ramayana War', 'Rama vs Ravana', 'Hanuman in Battle', 'Sanjeevani Herb', 'Hindu Epics', 'Battle of Lanka', 'Valmiki Ramayana War'],
  alternates: {
    canonical: `${SITE_URL}/ramayana/yuddha-kanda`,
  },
  openGraph: {
    title: 'Yuddha Kanda - The Great War of Ramayana | Hanuman Leela',
    description: "Detailed account of the epic battle from Ramayana, featuring Lord Rama, Hanuman, and Ravana. Explore the triumph of dharma.",
    url: `${SITE_URL}/ramayana/yuddha-kanda`,
    images: [
      {
        url: 'https://i.pinimg.com/736x/4b/6f/fd/4b6ffd08ae798038cdd5542e4099baa0.jpg', 
        width: 736,
        height: 552,
        alt: 'Yuddha Kanda - The Epic Battle of Lanka',
      },
    ],
    type: 'article',
    section: "Ramayana",
    publishedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuddha Kanda - The Great War of Ramayana',
    description: "Explore the epic battle between Lord Rama's army and Ravana's forces in the Yuddha Kanda.",
    images: ['https://i.pinimg.com/736x/4b/6f/fd/4b6ffd08ae798038cdd5542e4099baa0.jpg'],
  },
};

interface KandaInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const KandaInfoCard: React.FC<KandaInfoCardProps> = ({ icon, label, value }) => (
  <Card className="bg-muted/50 shadow-sm">
    <CardContent className="p-4 flex items-center space-x-3">
      <div className="p-2 bg-primary/10 rounded-md text-primary">
        {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6" })}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-xl font-semibold text-foreground">{value}</p>
      </div>
    </CardContent>
  </Card>
);

const KandaDetailDisplay: React.FC<{ kandaData: KandaBook; kandaMeta: (typeof ramayanaKandas)[0] }> = ({ kandaData, kandaMeta }) => {
  return (
    <div className="space-y-12">
      <PageHeader
        title={kandaData.name}
        description={`${kandaData.meaning} - Exploring the divine narratives and teachings.`}
      />

      <Card className="shadow-xl overflow-hidden bg-card/80 backdrop-blur-sm">
        {kandaMeta.imageUrl && (
          <div className="relative h-64 sm:h-72 md:h-96 w-full">
            <Image
              src={kandaMeta.imageUrl}
              alt={kandaData.name}
              fill
              objectFit="cover"
              data-ai-hint={kandaMeta.imageHint}
              className="transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              {React.isValidElement(kandaMeta.icon) ? React.cloneElement(kandaMeta.icon as React.ReactElement, { className: "h-10 w-10 sm:h-12 sm:w-12 text-white drop-shadow-lg mb-2" }) : kandaMeta.icon}
              <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-xl">{kandaData.name}</h2>
              <p className="text-lg text-white/90 drop-shadow-md">{kandaData.meaning}</p>
            </div>
          </div>
        )}
        <CardContent className="p-6 md:p-8 space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <KandaInfoCard icon={<BookOpen />} label="Kanda Name" value={kandaData.name} />
            <KandaInfoCard icon={<CalendarDays />} label="Total Chapters" value={kandaData.chapters} />
            {kandaData.total_verses && (
              <KandaInfoCard icon={<ListChecks />} label="Total Verses" value={kandaData.total_verses} />
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center"><Sparkles className="mr-3 h-6 w-6"/>Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/90 leading-relaxed">{kandaData.overview.summary}</p>
          <div>
            <h4 className="font-semibold text-lg text-secondary-foreground mb-2">Key Events:</h4>
            <ul className="list-disc list-inside space-y-1 text-foreground/80 pl-4">
              {kandaData.overview.key_events.map(event => <li key={event}>{event}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-secondary-foreground mb-2">Core Themes:</h4>
            <div className="flex flex-wrap gap-2">
              {kandaData.overview.themes.map(theme => <Badge key={theme} variant="secondary">{theme}</Badge>)}
            </div>
          </div>
        </CardContent>
      </Card>

      {kandaData.chapters_detail && kandaData.chapters_detail.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><BookOpen className="mr-3 h-6 w-6"/>Chapter Summaries</CardTitle>
            <CardDescription>Highlights from the {kandaData.chapters} chapters of {kandaData.name}.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {kandaData.chapters_detail.map(chapter => (
                <AccordionItem value={`chapter-${chapter.chapter_number}`} key={chapter.chapter_number}>
                  <AccordionTrigger className="text-left hover:text-accent">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-muted-foreground mr-2">Chapter {chapter.chapter_number}:</span>
                      <span className="font-semibold text-primary group-hover:text-accent">{chapter.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/85 leading-relaxed p-4 bg-muted/30 rounded-md">
                    {chapter.summary}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}

      {kandaData.key_episodes && kandaData.key_episodes.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><LucideZap className="mr-3 h-6 w-6"/>Key Episodes</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {kandaData.key_episodes.map((episode, index) => (
                <AccordionItem value={`episode-${index}`} key={index}>
                  <AccordionTrigger className="text-left hover:text-accent">
                     <span className="font-semibold text-primary group-hover:text-accent">{episode.name}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/85 leading-relaxed p-4 bg-muted/30 rounded-md">
                    {episode.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center"><Users2 className="mr-3 h-6 w-6"/>Key Characters</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kandaData.key_characters.map(char => (
            <DevotionalCard
              key={char.name}
              title={char.name}
              className="bg-card/70 shadow-md hover:shadow-lg"
              titleClassName="text-xl !text-secondary-foreground"
              headerClassName="pb-2"
              contentClassName="pt-2"
              content={
                  <p className="text-sm text-foreground/80 leading-relaxed">{char.description}</p>
              }
            />
          ))}
        </CardContent>
      </Card>

      {kandaData.key_locations && kandaData.key_locations.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><MapPin className="mr-3 h-6 w-6"/>Key Locations</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {kandaData.key_locations.map(loc => (
              <DevotionalCard
                key={loc.name}
                title={loc.name}
                className="bg-card/70 shadow-md hover:shadow-lg"
                titleClassName="text-xl !text-secondary-foreground"
                headerClassName="pb-2"
                contentClassName="pt-2"
                content={
                    <p className="text-sm text-foreground/80 leading-relaxed">{loc.description}</p>
                }
              />
            ))}
          </CardContent>
        </Card>
      )}

      {kandaData.philosophical_themes && kandaData.philosophical_themes.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center"><MessageCircle className="mr-3 h-6 w-6"/>Philosophical Themes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
             <ul className="list-disc list-inside space-y-2 text-foreground/85 pl-4">
                {kandaData.philosophical_themes.map((theme, index) => (
                  <li key={index}>{theme}</li>
                ))}
              </ul>
          </CardContent>
        </Card>
      )}


      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-colors">
          <Link href="/ramayana">
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to Ramayana Overview
          </Link>
        </Button>
      </div>
    </div>
  );
};


export default function YuddhaKandaPage() {
  const kandaMeta = ramayanaKandas.find(k => k.slug === 'yuddha-kanda');

  if (!kandaMeta) {
    notFound();
  }
  
  return <KandaDetailDisplay kandaData={yuddhaKandaBookData.book} kandaMeta={kandaMeta} />;
}
