
import { PageHeader } from '@/components/ui/page-header';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react'; 
import { ramayanaKandas, mahabharataData } from '@/data/epics-data'; 
// Removed Metadata import

export default function EpicsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="The Ramayana: An Epic Saga"
        description="An overview of the sacred epic, which narrates the life of Lord Rama, the seventh avatar of Vishnu. Discover the timeless lessons of dharma, devotion, and the triumph of good over evil."
      />

      <section>
        <h3 className="text-2xl font-semibold text-center text-primary mb-8">The Kandas: Chapters of the Ramayana</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ramayanaKandas.map((kanda) => (
            <DevotionalCard
              key={kanda.title}
              title={kanda.title}
              imageUrl={kanda.imageUrl}
              imageHint={kanda.imageHint}
              content={
                <div className="space-y-3">
                  <div className="flex items-center mb-2">
                     {React.isValidElement(kanda.icon) ? React.cloneElement(kanda.icon as React.ReactElement) : kanda.icon}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed min-h-[60px]">{kanda.summary}</p>
                   {kanda.hanumanFocus && (
                    <div className="mt-3 pt-3 border-t border-border/30">
                      <h4 className="text-xs font-semibold text-muted-foreground mb-1.5 flex items-center">
                        <Shield className="h-3.5 w-3.5 mr-1.5 text-primary/80" /> Hanuman's Role:
                      </h4>
                      <p className="text-xs text-foreground/70 leading-relaxed">{kanda.hanumanFocus}</p>
                    </div>
                  )}
                </div>
              }
              actions={
                <Button asChild variant="default" size="sm" className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/ramayana/${kanda.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              }
              className="flex flex-col h-full"
              contentClassName="flex-grow"
              headerClassName="pb-2"
              titleClassName="text-xl"
            />
          ))}
        </div>
      </section>

      <div className="border-t-2 border-border/50 my-16"></div>

      <PageHeader
        title="The Mahabharata: An Epic of Dharma"
        description={`The Mahabharata, an epic of ancient India, is one of the longest poems ever written. It is traditionally divided into ${mahabharataData.total_parvas} Parvas (books), each detailing crucial events and philosophical discourses.`}
      />
      
      <section>
        <h2 className="text-3xl font-semibold text-center text-secondary-foreground mb-4">An Ocean of Stories and Wisdom</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-foreground/80 mb-10">
          The Mahabharata narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pāṇḍava princes. It also contains philosophical and devotional material, such as the Bhagavad Gita. The epic explores human goals (artha or purpose, kāma or pleasure, dharma or duty, and mokṣa or liberation).
        </p>
        <h3 className="text-2xl font-semibold text-center text-primary mb-8">The Parvas: Books of the Mahabharata</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mahabharataData.parvas.map((parva) => (
            <DevotionalCard
              key={parva.name}
              title={
                <div className="flex items-center">
                  {React.isValidElement(parva.icon) ? React.cloneElement(parva.icon as React.ReactElement, { className: "h-6 w-6 text-accent" }) : parva.icon}
                  <span className="ml-3">{parva.name}</span>
                </div>
              }
              content={
                <div className="flex flex-col h-full">
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4 min-h-[60px]">{parva.description}</p>
                  {parva.subsections && parva.subsections.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-border/40">
                      <h4 className="text-xs font-semibold text-muted-foreground mb-2 tracking-wider uppercase">Key Sections:</h4>
                      <ul className="space-y-1.5 text-xs text-foreground/80 list-none pl-0">
                        {parva.subsections.slice(0, 3).map((subsection, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent mr-2.5 mt-[3px] flex-shrink-0">&#x25B8;</span>
                            <span>{subsection}</span>
                          </li>
                        ))}
                        {parva.subsections.length > 3 && (
                           <li className="flex items-start">
                            <span className="text-accent mr-2.5 mt-[3px] flex-shrink-0">&#x25B8;</span>
                            <span>And more...</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              }
              className="bg-card shadow-xl border border-border/70 flex flex-col h-full transition-all duration-300 ease-out hover:shadow-primary/20 hover:border-primary/40"
              contentClassName="flex-grow p-5"
              headerClassName="pb-3 pt-5"
              titleClassName="text-xl"
            />
          ))}
        </div>
      </section>

    </div>
  );
}
