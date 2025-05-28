// src/components/mantra-card.tsx
'use client';

import React, { useState, useEffect } from 'react';
import type { Mantra } from '@/data/mantras.tsx';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { Button } from '@/components/ui/button';
import { BookmarkCheck, BookmarkPlus, ArrowRight, BookOpen } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';

interface MantraCardProps {
  mantra: Mantra;
}

export function MantraCard({ mantra }: MantraCardProps) {
  const [isRemembered, setIsRemembered] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const rememberedIdsKey = 'rememberedMantraIds';
    // Ensure localStorage is accessed only on the client side
    if (typeof window !== 'undefined') {
      const rememberedIds: string[] = JSON.parse(localStorage.getItem(rememberedIdsKey) || '[]');
      setIsRemembered(rememberedIds.includes(mantra.id));
    }
  }, [mantra.id]);

  const handleToggleRemember = () => {
    if (typeof window === 'undefined') return; // Guard against SSR

    const rememberedIdsKey = 'rememberedMantraIds';
    const currentRememberedIds: string[] = JSON.parse(localStorage.getItem(rememberedIdsKey) || '[]');
    let updatedRememberedIds: string[];

    if (isRemembered) {
      updatedRememberedIds = currentRememberedIds.filter((id: string) => id !== mantra.id);
      toast({ title: "Mantra Unmarked", description: `${mantra.title} removed from remembered list.` });
    } else {
      updatedRememberedIds = [...currentRememberedIds, mantra.id];
      toast({ title: "Mantra Remembered!", description: `${mantra.title} added to remembered list. View in Profile.` });
    }
    localStorage.setItem(rememberedIdsKey, JSON.stringify(updatedRememberedIds));
    setIsRemembered(!isRemembered);
  };

  return (
    <DevotionalCard
      title="" // Title is part of the content for better layout control
      className="mb-8 shadow-xl bg-card/90 backdrop-blur-sm border border-primary/20 transition-all duration-300 ease-out hover:shadow-primary/30"
      headerClassName="p-0" // Remove padding from header as title is moved
      contentClassName="p-5 sm:p-6"
      content={
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-border/50 mb-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary flex items-center mb-2 sm:mb-0">
              {mantra.icon && React.cloneElement(mantra.icon as React.ReactElement, { className: "h-7 w-7 sm:h-8 sm:w-8 text-primary mr-3" })}
              {mantra.title}
            </h2>
            <span className="text-xs sm:text-sm font-medium bg-accent/20 text-accent-foreground px-3 py-1.5 rounded-full shadow-sm self-start sm:self-center">
              {mantra.type}
            </span>
          </div>
          
          <div className="bg-muted/60 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-xl text-secondary-foreground mb-2">Sanskrit:</h3>
            <p className="italic text-foreground/85 text-lg leading-relaxed text-justify font-serif whitespace-pre-line">{mantra.sanskrit}</p>
          </div>
          
          <div className="bg-muted/60 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-xl text-secondary-foreground mb-2">Hindi Meaning:</h3>
            <p className="text-foreground/85 leading-relaxed text-justify font-sans whitespace-pre-line">{mantra.hindiMeaning}</p>
          </div>
          
          <div className="bg-muted/60 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-xl text-secondary-foreground mb-2">English Meaning:</h3>
            <p className="text-foreground/85 leading-relaxed text-justify font-sans whitespace-pre-line">{mantra.englishMeaning}</p>
          </div>
          
          <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center">
            <Button 
              variant={isRemembered ? "default" : "outline"}
              onClick={handleToggleRemember}
              className={`
                w-full sm:w-auto
                ${isRemembered 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                  : 'text-primary border-primary hover:bg-primary/10 hover:text-primary'}
                transition-colors duration-200
              `}
            >
              {isRemembered ? <BookmarkCheck className="mr-2 h-5 w-5" /> : <BookmarkPlus className="mr-2 h-5 w-5" />}
              {isRemembered ? 'Remembered' : 'Mark as Remembered'}
            </Button>
            {mantra.detailPageUrl ? (
              <Button asChild variant="outline" className="text-accent border-accent hover:bg-accent/10 hover:text-accent-foreground focus:ring-accent w-full sm:w-auto">
                <Link href={mantra.detailPageUrl}>
                  <BookOpen className="mr-2 h-5 w-5" /> Learn More
                </Link>
              </Button>
            ) : (
              <Button variant="outline" className="text-accent border-accent hover:bg-accent/10 hover:text-accent-foreground focus:ring-accent w-full sm:w-auto" disabled>
                 <BookOpen className="mr-2 h-5 w-5" /> Learn More
              </Button>
            )}
          </div>
        </div>
      }
    />
  );
}
