
// src/app/ramayana/[slug]/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Shield, Clock, Users2, 
  Sparkles, MapPin, BookOpen, Star, ArrowLeft, ArrowRight,
  ChevronLeft, ChevronRight, Split, Lightbulb, Quote
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ramayanaKandas } from '@/data/epics-data';
import { charactersData } from '@/data/characters-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const kanda = ramayanaKandas.find(k => k.slug === slug);
  if (!kanda) return { title: 'Kanda Not Found' };

  return {
    title: `${kanda.title} | The Epic Ramayana`,
    description: kanda.summary,
    alternates: { canonical: `${SITE_URL}/ramayana/${slug}` },
    openGraph: {
      title: `${kanda.title} | Hanuman Leela`,
      description: kanda.summary,
      url: `${SITE_URL}/ramayana/${slug}`,
      images: kanda.imageUrl ? [{ url: kanda.imageUrl }] : [],
    }
  };
}

export default async function KandaDetailPage(props: Props) {
  const { slug } = await props.params;
  const kandaIndex = ramayanaKandas.findIndex(k => k.slug === slug);
  const kanda = ramayanaKandas[kandaIndex];

  if (!kanda) notFound();

  const prevKanda = kandaIndex > 0 ? ramayanaKandas[kandaIndex - 1] : null;
  const nextKanda = kandaIndex < ramayanaKandas.length - 1 ? ramayanaKandas[kandaIndex + 1] : null;

  return (
    <div className="animate-in fade-in duration-1000 space-y-20 pb-32">
      {/* Hero Section */}
      <section className="relative -mx-4 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={kanda.imageUrl}
          alt={kanda.title}
          fill
          priority
          className="object-cover transition-transform duration-[3000ms] scale-110 hover:scale-100"
          data-ai-hint={kanda.imageHint}
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t via-background/60 to-transparent", kanda.colorTheme)} />
        
        <div className="container relative z-10 pb-16 px-4">
          <Link 
            href="/ramayana" 
            className="inline-flex items-center text-white/80 hover:text-primary mb-8 transition-colors group text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Sacred Scrolls
          </Link>
          <div className="space-y-4 max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary-foreground text-xs font-bold uppercase tracking-[0.3em]">
              {kanda.subtitle}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-2xl">
              {kanda.title}
            </h1>
            <p className="text-xl md:text-3xl text-white/90 font-light italic max-w-3xl drop-shadow-lg leading-relaxed border-l-4 border-primary/50 pl-8 py-2">
              "{kanda.tagline}"
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-primary">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Quick Summary</h2>
          </div>
          <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed font-light italic">
            {kanda.summary}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-16">
        
        {/* Left Column: Narrative & Timeline */}
        <div className="lg:col-span-8 space-y-24">
          
          {/* Detailed Narrative */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Quote className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">The Sacred Narrative</h3>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed font-light first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              {kanda.fullStory}
            </p>
          </section>

          {/* Timeline of Events */}
          <section className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">The Flow of Time</h3>
            </div>
            <div className="relative space-y-12 pl-10 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent">
              {kanda.timeline.map((event, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[35px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary group-hover:bg-primary transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
                  <p className="text-xl text-foreground/90 font-medium group-hover:text-primary transition-colors">
                    {event}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Turning Points */}
          <section className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <Split className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Turning Points</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {kanda.turningPoints.map((point, i) => (
                <Card key={i} className="bg-accent/5 border-accent/20 hover:border-accent/40 transition-colors shadow-lg">
                  <CardContent className="p-8 flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-lg text-foreground/80 font-medium italic leading-relaxed">
                      {point}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar Insights */}
        <div className="lg:col-span-4 space-y-16">
          
          {/* Hanuman's Role Highlight (The Glow Box) */}
          <Card className="relative overflow-hidden border-primary/30 bg-primary/5 shadow-[0_0_50px_rgba(249,115,22,0.2)] animate-pulse hover:animate-none transition-all duration-1000">
            <div className="absolute -right-10 -top-10 p-4 opacity-5 rotate-12">
              <Shield className="h-40 w-40 text-primary" />
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-[0.3em] text-primary flex items-center gap-3">
                <Star className="h-5 w-5 fill-current" />
                Hanuman Ji's Presence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 leading-relaxed italic text-lg border-l-2 border-primary/30 pl-6 py-2">
                {kanda.hanumanFocus}
              </p>
            </CardContent>
          </Card>

          {/* Key Characters */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <Users2 className="h-5 w-5 text-primary" />
              Main Figures
            </h4>
            <div className="grid gap-4">
              {kanda.keyCharacters.map((char) => {
                const charDetails = charactersData.find(c => c.name.toLowerCase().includes(char.name.toLowerCase()));
                
                return charDetails ? (
                  <Link 
                    key={char.name} 
                    href={`/characters/${charDetails.slug}`}
                    className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all group flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{char.name}</p>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{char.role}</p>
                  </Link>
                ) : (
                  <div key={char.name} className="p-5 rounded-2xl bg-muted/30 border border-border/50">
                    <p className="font-bold text-foreground">{char.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{char.role}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Philosophical Meanings */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Deeper Meanings
            </h4>
            <div className="space-y-6">
              {kanda.philosophicalMeanings.map((phi, i) => (
                <div key={i} className="p-6 rounded-2xl bg-muted/40 border border-border shadow-inner">
                  <h5 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" /> {phi.title}
                  </h5>
                  <p className="text-sm text-foreground/70 leading-relaxed italic">
                    {phi.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divine Lessons */}
          <div className="p-10 rounded-[3rem] bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 p-4 opacity-10">
              <MapPin className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6" /> Divine Lessons
              </h4>
              <ul className="space-y-6">
                {kanda.lifeLessons.map((lesson, i) => (
                  <li key={i} className="flex gap-4 text-sm font-light leading-relaxed">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-white shrink-0" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <section className="container mx-auto px-4 pt-20 border-t border-border/50">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          {prevKanda ? (
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto group border-primary/20 h-20 px-8 rounded-2xl bg-card hover:bg-primary/5">
              <Link href={`/ramayana/${prevKanda.slug}`} className="flex items-center gap-6">
                <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-2" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Previous Scroll</p>
                  <p className="text-xl font-bold text-primary">{prevKanda.title}</p>
                </div>
              </Link>
            </Button>
          ) : <div className="hidden sm:block" />}

          {nextKanda ? (
            <Button asChild variant="default" size="lg" className="w-full sm:w-auto group bg-primary h-20 px-8 rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              <Link href={`/ramayana/${nextKanda.slug}`} className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-1">Next Scroll</p>
                  <p className="text-xl font-bold text-white">{nextKanda.title}</p>
                </div>
                <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-2 text-white" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="default" size="lg" className="w-full sm:w-auto group bg-accent h-20 px-10 rounded-2xl shadow-2xl shadow-accent/30 hover:scale-105 transition-all">
              <Link href="/explore">
                <span className="text-xl font-bold">The Journey Never Ends</span>
                <Compass className="ml-4 h-6 w-6 animate-spin-slow" />
              </Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return ramayanaKandas.map((kanda) => ({ slug: kanda.slug }));
}
