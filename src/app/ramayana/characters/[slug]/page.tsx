import React from 'react';
import { charactersData } from '@/data/characters-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft, Shield, Star, BookOpen, 
  Sparkles, GitBranch
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
    alternates: { canonical: `${SITE_URL}/ramayana/characters/${slug}` },
    openGraph: {
      title: `${char.name} - ${char.title}`,
      description: char.oneLineDescription,
      url: `${SITE_URL}/ramayana/characters/${slug}`,
      images: [{ url: char.imageUrl }],
    }
  };
}

export default async function CharacterDetailPage(props: Props) {
  const { slug } = await props.params;
  const char = charactersData.find(c => c.slug === slug);

  if (!char) notFound();

  return (
    <div className="animate-in fade-in duration-700 space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative -mx-4 h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={char.imageUrl}
          alt={char.name}
          fill
          priority
          className="object-cover transition-transform duration-1000 scale-105"
          data-ai-hint={char.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="container relative z-10 pb-12 px-4">
          <Link 
            href="/ramayana/characters" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Character Gallery
          </Link>
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary-foreground text-xs font-bold uppercase tracking-widest">
              {char.title}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
              {char.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Bio Grid */}
      <section className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              Biography
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              {char.bio}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Role in the Epic
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {char.role}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />
              Significance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-6">
              {char.significance}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Key Traits */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <Star className="h-5 w-5 fill-current" />
                <h4 className="text-sm font-bold uppercase tracking-widest">Key Traits</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {char.traits.map(trait => (
                  <Badge key={trait} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {trait}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="p-8 rounded-2xl bg-accent/5 border border-accent/20">
            <h4 className="text-lg font-bold text-accent flex items-center gap-2 mb-4">
              <GitBranch className="h-5 w-5" />
              Divine Journey
            </h4>
            <p className="text-sm text-foreground/70 mb-6">Explore the Kandas where {char.name} played a pivotal role.</p>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <Link href="/ramayana">Back to Kandas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return charactersData.map((char) => ({ slug: char.slug }));
}
