
// src/app/ashta-siddhis/page.tsx
import React from 'react'; 
import { PageHeader } from '@/components/ui/page-header';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ashtaSiddhiDetails, siddhiIconMap } from '@/data/ashta-siddhis'; 

const SectionCard: React.FC<{ title: string; children: React.ReactNode; icon?: ReactNode; className?: string }> = ({ title, children, icon, className }) => (
  <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm", className)}>
    <CardHeader className="pb-4">
      <CardTitle className="text-2xl text-primary flex items-center">
        {icon && React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement, { className: "mr-3 h-7 w-7"})}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3 text-foreground/90 leading-relaxed">
      {children}
    </CardContent>
  </Card>
);

export default function AshtaSiddhisPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title={ashtaSiddhiDetails.mainTitle}
        description={ashtaSiddhiDetails.mainDescription}
      />

      <Card className="bg-card/70 shadow-xl p-6 border border-primary/30">
        <CardHeader className="p-0 pb-4 text-center">
          <CardTitle className="text-3xl text-accent font-serif flex items-center justify-center">
             {ashtaSiddhiDetails.verseIcon && React.isValidElement(ashtaSiddhiDetails.verseIcon) && React.cloneElement(ashtaSiddhiDetails.verseIcon as React.ReactElement, { className: "h-8 w-8 mr-3 transform scale-x-[-1]"})}
            {ashtaSiddhiDetails.verse}
            {ashtaSiddhiDetails.verseIcon && React.isValidElement(ashtaSiddhiDetails.verseIcon) && React.cloneElement(ashtaSiddhiDetails.verseIcon as React.ReactElement, { className: "h-8 w-8 ml-3"})}
          </CardTitle>
          <CardDescription className="text-muted-foreground italic mt-2">{ashtaSiddhiDetails.verseMeaning}</CardDescription>
        </CardHeader>
        <CardContent className="p-0 space-y-4 text-center">
          <p><strong className="text-secondary-foreground">Source:</strong> {ashtaSiddhiDetails.source}</p>
          <p><strong className="text-secondary-foreground">Origin of Siddhis:</strong> {ashtaSiddhiDetails.origin}</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ashtaSiddhiDetails.siddhis.map((siddhi) => (
          <DevotionalCard
            key={siddhi.name}
            title={siddhi.name}
            className="bg-card shadow-xl border border-border/50 flex flex-col"
            titleClassName="text-2xl !text-primary font-semibold"
            headerClassName="pb-2 pt-4" 
            contentClassName="pt-2 flex-grow flex flex-col" 
            content={
              <div className="space-y-4 flex-grow flex flex-col">
                <div className="flex items-center justify-center mb-3"> 
                  {siddhiIconMap[siddhi.name] && React.isValidElement(siddhiIconMap[siddhi.name]) && React.cloneElement(siddhiIconMap[siddhi.name] as React.ReactElement, { className: "h-12 w-12 text-primary" })}
                </div>
                <p className="text-base font-medium italic text-accent text-center mb-2">{siddhi.translation}</p>
                <p className="text-foreground/85 leading-relaxed text-sm text-center flex-grow">{siddhi.description}</p>
              </div>
            }
          />
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <SectionCard title={ashtaSiddhiDetails.symbolism.title} icon={ashtaSiddhiDetails.symbolism.icon}>
          <p><strong>Devotional Significance:</strong> {ashtaSiddhiDetails.symbolism.devotionalSignificance}</p>
          <p><strong>Spiritual Lesson:</strong> {ashtaSiddhiDetails.symbolism.spiritualLesson}</p>
        </SectionCard>

        <SectionCard title={ashtaSiddhiDetails.modernContext.title} icon={ashtaSiddhiDetails.modernContext.icon}>
          <p><strong>In Yoga:</strong> {ashtaSiddhiDetails.modernContext.inYoga}</p>
          <p><strong>In Devotion:</strong> {ashtaSiddhiDetails.modernContext.inDevotion}</p>
        </SectionCard>
      </div>
    </div>
  );
}
