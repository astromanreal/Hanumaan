
import React from 'react';
import { charactersData } from '@/data/characters-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft, Shield, Star, BookOpen, 
  Sparkles, History, Heart,
  Quote, ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const char = charactersData.find(c => c.slug === slug);
  if (!char) return { title: 'Character Not Found' };

  return {
    title: `${char.name} | Characters of Ramayana`,
    description: char.oneLineDescription,
    alternates: { canonical: `${SITE_URL}/characters/${slug}` },
    openGraph: {
      title: `${char.name} - ${char.title}`,
      description: char.oneLineDescription,
      url: `${SITE_URL}/characters/${slug}`,
      images: [{ url: char.imageUrl }],
    }
  };
}

export default async function CharacterDetailPage(props: Props) {
  const { slug } = await props.params;
  const char = charactersData.find(c => c.slug === slug);

  if (!char) notFound();

  return (
    <div className="animate-in fade-in duration-1000 space-y-16 pb-32">
      {/* Hero Section */}
      <section className="relative -mx-4 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={char.imageUrl}
          alt={char.name}
          fill
          priority
          className="object-cover transition-transform duration-1000 scale-105"
          data-ai-hint={char.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="container relative z-10 pb-16 px-4 mx-auto">
          <Link 
            href="/characters" 
            className="inline-flex items-center text-white/80 hover:text-primary mb-8 transition-colors group text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Divine Assembly
          </Link>
          <div className="space-y-4 max-w-4xl">
            <Badge variant="outline" className="bg-primary/20 backdrop-blur-md border-primary/30 text-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              {char.title}
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-2xl">
              {char.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic drop-shadow-lg leading-relaxed border-l-4 border-primary/50 pl-6 py-2">
              "{char.oneLineDescription}"
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: Biography and Essence */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Identity & Role */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/40 border-primary/10 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <BookOpen className="h-5 w-5" /> Identity
                </CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 leading-relaxed text-lg font-light">
                {char.bio}
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Shield className="h-5 w-5" /> Role in Epic
                </CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 leading-relaxed text-lg font-light">
                {char.role}
              </CardContent>
            </Card>
          </div>

          {/* Key Events Timeline */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <History className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Key Journey Moments</h3>
            </div>
            <div className="relative space-y-8 pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-transparent">
              {char.keyEvents.map((event, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                  <p className="text-xl text-foreground/90 font-medium group-hover:text-primary transition-colors">
                    {event}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Life Lessons Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Divine Wisdom</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {char.lifeLessons.map((lesson, i) => (
                <div key={i} className="p-6 rounded-2xl bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all group flex flex-col gap-4">
                  <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">
                    {i + 1}
                  </div>
                  <p className="text-foreground/80 italic leading-relaxed">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Traits, Symbolism, and Relationships */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* Personality Traits */}
          <Card className="border-primary/20 bg-primary/5 shadow-2xl overflow-hidden relative">
            <div className="absolute -right-8 -top-8 p-4 opacity-5 rotate-12">
              <Star className="h-32 w-32 text-primary" />
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                <Star className="h-4 w-4 fill-current" /> Core Attributes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {char.traits.map(trait => (
                  <Badge key={trait} variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Symbolic Meaning */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-background to-muted/30 border border-border shadow-inner">
            <h4 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
              <Quote className="h-5 w-5 text-primary" />
              Symbolism
            </h4>
            <p className="text-muted-foreground leading-relaxed italic text-base">
              {char.symbolicMeaning}
            </p>
          </div>

          {/* Relationships (Divine Bonds) */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <Heart className="h-5 w-5 text-red-500" />
              Divine Bonds
            </h4>
            <div className="space-y-3">
              {char.relationships.map((rel) => {
                // Try to find the linked character by name (case-insensitive fuzzy match)
                const targetChar = charactersData.find(c => 
                  c.name.toLowerCase().includes(rel.name.toLowerCase()) || 
                  rel.name.toLowerCase().includes(c.name.toLowerCase())
                );

                const cardContent = (
                  <div className="p-4 rounded-xl bg-card border border-border/50 flex items-center justify-between group transition-all">
                    <div>
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors">{rel.name}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{rel.relation}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                );

                return targetChar ? (
                  <Link key={rel.name} href={`/characters/${targetChar.slug}`} className="block hover:border-primary/30 transition-all">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={rel.name} className="block">
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 shadow-xl space-y-6">
            <h4 className="text-2xl font-bold text-foreground">The Journey Continues</h4>
            <p className="text-muted-foreground font-light text-sm">
              Explore the Kandas where {char.name} played a pivotal role in restoring Dharma.
            </p>
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl h-12 shadow-lg shadow-primary/20">
              <Link href="/ramayana">Explore the Kandas</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return charactersData.map((char) => ({ slug: char.slug }));
}
