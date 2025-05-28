// src/app/ramayana/[slug]/page.tsx
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
import { balaKandaBookData } from '@/data/kanda-details/bala-kanda-data';
import { ayodhyaKandaBookData } from '@/data/kanda-details/ayodhya-kanda-data';
import { aranyaKandaBookData } from '@/data/kanda-details/aranya-kanda-data';
import { kishkindhaKandaBookData } from '@/data/kanda-details/kishkindha-kanda-data';
import { sundaraKandaBookData } from '@/data/kanda-details/sundara-kanda-data';
import { yuddhaKandaBookData } from '@/data/kanda-details/yuddha-kanda-data';
import { uttaraKandaBookData } from '@/data/kanda-details/uttara-kanda-data';
import type { KandaBook } from '@/data/kanda-details/kanda-types';
import { DevotionalCard } from '@/components/ui/devotional-card';
import type { Metadata, ResolvingMetadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

interface KandaInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const kandaMeta = ramayanaKandas.find(k => k.slug === params.slug);

  if (!kandaMeta) {
    return {
      title: 'Kanda Not Found',
      description: 'The requested Ramayana Kanda could not be found.',
    };
  }

  const kandaTitle = kandaMeta.title.includes(':') ? kandaMeta.title.split(': ')[0] : kandaMeta.title;
  const kandaSpecificTitle = kandaMeta.title.includes(':') ? kandaMeta.title.split(': ')[1] : kandaMeta.title;
  
  const pageTitle = `${kandaTitle}${kandaSpecificTitle && kandaSpecificTitle !== kandaTitle ? `: ${kandaSpecificTitle}` : ''}`;
  const kandaDescription = kandaMeta.summary;
  const kandaImage = kandaMeta.imageUrl ? (kandaMeta.imageUrl.startsWith('http') ? kandaMeta.imageUrl : `${SITE_URL}${kandaMeta.imageUrl}`) : `${SITE_URL}/og-ramayana-default.jpg`;

  const keywords = ['Ramayana', 'Hindu Epic', kandaTitle, kandaSpecificTitle, 'Rama', 'Sita', 'Hanuman', 'Valmiki Ramayana'];
  if (kandaMeta.hanumanFocus) {
    keywords.push(kandaMeta.hanumanFocus, "Hanuman's Role");
  }
  // Add themes or key characters from detailed data if available
  let detailedKandaData: KandaBook | null = null;
   switch (params.slug) {
    case 'bala-kanda': detailedKandaData = balaKandaBookData.book; break;
    case 'ayodhya-kanda': detailedKandaData = ayodhyaKandaBookData.book; break;
    case 'aranya-kanda': detailedKandaData = aranyaKandaBookData.book; break;
    case 'kishkindha-kanda': detailedKandaData = kishkindhaKandaBookData.book; break;
    case 'sundara-kanda': detailedKandaData = sundaraKandaBookData.book; break;
    case 'yuddha-kanda': detailedKandaData = yuddhaKandaBookData.book; break;
    case 'uttara-kanda': detailedKandaData = uttaraKandaBookData.book; break;
  }
  if (detailedKandaData?.overview.themes) keywords.push(...detailedKandaData.overview.themes);
  if (detailedKandaData?.key_characters) keywords.push(...detailedKandaData.key_characters.map(c => c.name));


  return {
    title: pageTitle,
    description: kandaDescription,
    keywords: keywords,
    alternates: {
      canonical: `${SITE_URL}/ramayana/${params.slug}`,
    },
    openGraph: {
      title: `${pageTitle} | Ramayana | Hanuman Leela`,
      description: kandaDescription,
      url: `${SITE_URL}/ramayana/${params.slug}`,
      images: [
        {
          url: kandaImage,
          width: 800, 
          height: 600, 
          alt: pageTitle,
        },
      ],
      type: 'article',
      section: 'Ramayana',
      publishedTime: new Date().toISOString(), 
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} | Ramayana | Hanuman Leela`,
      description: kandaDescription,
      images: [kandaImage],
    },
  };
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
              {kandaMeta.icon && React.isValidElement(kandaMeta.icon) ? React.cloneElement(kandaMeta.icon as React.ReactElement, { className: "h-10 w-10 sm:h-12 sm:w-12 text-white drop-shadow-lg mb-2" }) : kandaMeta.icon}
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


export default function KandaDetailPage({ params }: { params: { slug: string } }) {
  const kandaMeta = ramayanaKandas.find(k => k.slug === params.slug);

  if (!kandaMeta) {
    notFound();
  }

  let kandaData: KandaBook | null = null;
  switch (params.slug) {
    case 'bala-kanda':
      kandaData = balaKandaBookData.book;
      break;
    case 'ayodhya-kanda':
      kandaData = ayodhyaKandaBookData.book;
      break;
    case 'aranya-kanda':
      kandaData = aranyaKandaBookData.book;
      break;
    case 'kishkindha-kanda':
      kandaData = kishkindhaKandaBookData.book;
      break;
    case 'sundara-kanda':
      kandaData = sundaraKandaBookData.book;
      break;
    case 'yuddha-kanda':
      kandaData = yuddhaKandaBookData.book;
      break;
    case 'uttara-kanda':
      kandaData = uttaraKandaBookData.book;
      break;
    default:
      break;
  }

  if (kandaData) {
    return <KandaDetailDisplay kandaData={kandaData} kandaMeta={kandaMeta} />;
  }

  // Fallback for Kandas without detailed data structure yet
  const kandaBaseTitle = kandaMeta.title.includes(':') ? kandaMeta.title.split(': ')[0] : kandaMeta.title;
  const kandaSpecificTitle = kandaMeta.title.includes(':') ? kandaMeta.title.split(': ')[1] : kandaMeta.title;

  return (
    <div className="space-y-12">
      <PageHeader
        title={kandaBaseTitle}
        description={`Exploring the narratives, characters, and spiritual lessons of ${kandaSpecificTitle}.`}
      />

      <Card className="shadow-xl overflow-hidden bg-card/80 backdrop-blur-sm">
        {kandaMeta.imageUrl && (
          <div className="relative h-64 sm:h-72 md:h-96 w-full">
            <Image
              src={kandaMeta.imageUrl}
              alt={kandaMeta.title}
              fill
              objectFit="cover"
              data-ai-hint={kandaMeta.imageHint}
              className="transition-transform duration-500 hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-6 md:p-8">
                {React.isValidElement(kandaMeta.icon) ? React.cloneElement(kandaMeta.icon as React.ReactElement, { className: "h-10 w-10 sm:h-12 sm:w-12 text-white drop-shadow-lg mb-2" }) : kandaMeta.icon}
                <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-xl">{kandaSpecificTitle}</h2>
             </div>
          </div>
        )}
        
        <CardContent className="p-6 md:p-8 space-y-6 text-lg">
          <div>
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-3">Summary</h3>
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{kandaMeta.summary}</p>
          </div>
          
          {kandaMeta.hanumanFocus && (
            <div className="mt-6 p-6 bg-background/70 rounded-lg shadow-inner border border-border/50">
              <h3 className="text-2xl font-semibold text-primary mb-3 flex items-center">
                <Shield className="h-7 w-7 mr-3" />
                Hanuman's Significance in this Kanda
              </h3>
              <p className="text-foreground/85 leading-relaxed whitespace-pre-line">{kandaMeta.hanumanFocus}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="text-center">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-colors">
          <Link href="/ramayana">
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to Ramayana Overview
          </Link>
        </Button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return ramayanaKandas.map((kanda) => ({
    slug: kanda.slug,
  }));
}
