'use client';

import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Shield, 
  Compass
} from 'lucide-react';
import { ramayanaKandas, type RamayanaKanda } from '@/data/epics-data';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ProgressIndicator = () => {
  return (
    <div className="w-full pb-8 pt-4">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-8 gap-x-4 px-4">
        {ramayanaKandas.map((kanda, index) => (
          <React.Fragment key={kanda.slug}>
            <Link href={`/ramayana/${kanda.slug}`} className="flex flex-col items-center group cursor-pointer">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                "border-primary bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground shadow-[0_0_15px_rgba(249,115,22,0.2)]"
              )}>
                {React.cloneElement(kanda.icon as React.ReactElement, { className: "h-6 w-6" })}
              </div>
              <span className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                {kanda.title.split(' ')[0]}
              </span>
            </Link>
            {index < ramayanaKandas.length - 1 && (
              <div className="hidden lg:block flex-grow h-px bg-gradient-to-r from-primary/50 to-primary/10 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const KandaCard = ({ kanda }: { kanda: RamayanaKanda }) => {
  return (
    <div className="group relative h-[500px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)] border border-border/50 bg-neutral-950">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={kanda.imageUrl}
          alt={kanda.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
          data-ai-hint={kanda.imageHint}
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent", kanda.colorTheme)} />
      </div>

      {/* Card Content */}
      <div className="relative h-full p-8 flex flex-col justify-end space-y-4 text-left">
        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl w-fit shadow-[0_0_20px_rgba(245,158,11,0.1)]">
          {React.cloneElement(kanda.icon as React.ReactElement, { className: "h-6 w-6 text-amber-400" })}
        </div>
        
        <h3 className="text-3xl font-bold text-white tracking-tight">
          {kanda.title}
        </h3>
        
        <p className="text-neutral-300 leading-relaxed line-clamp-3 text-sm">
          {kanda.summary}
        </p>

        <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm shadow-[0_0_15px_-5px_rgba(245,158,11,0.3)]">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="h-4 w-4 text-amber-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Hanuman's Role</span>
          </div>
          <p className="text-xs text-neutral-400 italic leading-relaxed">
            {kanda.hanumanFocus}
          </p>
        </div>

        <Button asChild variant="ghost" className="w-full justify-between group/btn text-amber-400 hover:text-amber-300 hover:bg-white/5 border border-amber-500/20 rounded-xl px-6">
          <Link href={`/ramayana/${kanda.slug}`}>
            Explore Kanda
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default function EpicsPage() {
  return (
    <div className="space-y-24 bg-gradient-to-b from-background via-muted/20 to-background -mx-4 px-4 py-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-block p-2 px-4 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Sacred Chronicles
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-primary via-primary/80 to-accent/50 bg-clip-text text-transparent tracking-tighter">
          The Epic of Ramayana
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed font-light">
          A timeless odyssey of <span className="text-primary font-medium">Dharma</span>, <span className="text-foreground font-medium">Devotion</span>, and the eternal triumph of Light. Journey through the sacred Kandas that define the soul of Bharata.
        </p>
      </section>

      {/* Progress Journey */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-8 px-4">
          <Compass className="h-5 w-5 text-primary" />
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">The Path of Rama</h2>
        </div>
        <ProgressIndicator />
      </section>

      {/* Kandas Grid */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {ramayanaKandas.map((kanda) => (
          <KandaCard key={kanda.slug} kanda={kanda} />
        ))}
      </section>
    </div>
  );
}
