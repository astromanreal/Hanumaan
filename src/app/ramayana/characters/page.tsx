import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { charactersData } from '@/data/characters-data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, UserCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CharactersPage() {
  return (
    <div className="space-y-16 py-12">
      <PageHeader 
        title="The Legends of Ramayana"
        description="A divine gathering of the souls who shaped the course of dharma. Explore the roles and significance of the major figures from the timeless epic."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {charactersData.map((char) => (
          <Link 
            key={char.slug} 
            href={`/ramayana/characters/${char.slug}`}
            className="group relative flex flex-col h-[420px] rounded-3xl overflow-hidden border border-border/50 bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]"
          >
            {/* Image Section */}
            <div className="relative h-2/3 w-full overflow-hidden">
              <Image 
                src={char.imageUrl} 
                alt={char.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={char.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="relative flex-grow p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <UserCircle2 className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{char.title}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {char.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {char.oneLineDescription}
                </p>
              </div>

              <div className="flex items-center justify-end text-primary text-sm font-medium mt-4">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">Explore Profile</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
