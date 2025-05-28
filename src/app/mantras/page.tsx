// src/app/mantras/page.tsx
'use client'; 

import React, { useState, useEffect } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mantrasCategorizedData } from '@/data/mantras.tsx'; 
import { MantraCard } from '@/components/mantra-card';
// Metadata has been moved to src/app/mantras/layout.tsx

const MANTRA_PAGE_ACTIVE_TAB_KEY = 'mantrasActiveTab';
const DEFAULT_TAB_VALUE = "shortMantras";

export default function MantrasPage() {
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_TAB_VALUE);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTab = localStorage.getItem(MANTRA_PAGE_ACTIVE_TAB_KEY);
    if (storedTab && mantrasCategorizedData.hasOwnProperty(storedTab)) {
      setActiveTab(storedTab);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem(MANTRA_PAGE_ACTIVE_TAB_KEY, value);
    }
  };

  if (!isMounted) {
    return (
       <div className="min-h-screen">
        <PageHeader
          title="Sacred Mantras & Slokas"
          description="Immerse yourself in a divine collection of Hanuman mantras. Explore short, medium, and longer compositions for spiritual upliftment, protection, and devotion."
          titleClassName="text-5xl sm:text-6xl lg:text-7xl"
          descriptionClassName="text-lg sm:text-xl"
        />
         <div className="w-full max-w-6xl mx-auto">
          <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mb-10 sm:mb-12 h-auto p-2 bg-muted/70 rounded-xl shadow-lg sticky top-20 z-40 backdrop-blur-md animate-pulse">
            <div className="py-3 h-10 bg-muted rounded-lg"></div>
            <div className="py-3 h-10 bg-muted rounded-lg"></div>
            <div className="py-3 h-10 bg-muted rounded-lg"></div>
          </div>
          <div className="text-center text-muted-foreground py-10">
            <p className="text-xl">Loading mantras...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Sacred Mantras & Slokas"
        description="Immerse yourself in a divine collection of Hanuman mantras. Explore short, medium, and longer compositions for spiritual upliftment, protection, and devotion."
        titleClassName="text-5xl sm:text-6xl lg:text-7xl"
        descriptionClassName="text-lg sm:text-xl"
      />
      <Tabs 
        value={activeTab} 
        onValueChange={handleTabChange}
        className="w-full max-w-6xl mx-auto"
      >
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mb-10 sm:mb-12 h-auto p-2 bg-muted/70 rounded-xl shadow-lg sticky top-20 z-40 backdrop-blur-md">
          <TabsTrigger value="shortMantras" className="py-3 text-base sm:text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl transition-all duration-200 rounded-lg">Short Mantras</TabsTrigger>
          <TabsTrigger value="mediumMantras" className="py-3 text-base sm:text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl transition-all duration-200 rounded-lg">Medium Mantras</TabsTrigger>
          <TabsTrigger value="longerWorks" className="py-3 text-base sm:text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl transition-all duration-200 rounded-lg">Longer Works</TabsTrigger>
        </TabsList>

        {Object.entries(mantrasCategorizedData).map(([key, mantras]) => (
          <TabsContent value={key} key={key} className="focus-visible:ring-0 focus-visible:ring-offset-0">
            {mantras && mantras.length > 0 ? (
              mantras.map((mantra) => (
                <MantraCard key={mantra.id} mantra={mantra} /> 
              ))
            ) : (
              <div className="text-center text-muted-foreground py-10 bg-card rounded-xl shadow">
                <p className="text-xl">No mantras in this category yet. Check back soon!</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
