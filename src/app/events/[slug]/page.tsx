
// src/app/events/[slug]/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, Users, Calendar, MapPin, ListOrdered, BookOpen, Sparkles, ShieldAlert, AlertTriangle, Info, Handshake, Users2, Utensils, Tv, BookHeart, Link2 as LinkIcon, Target, Award, Zap, Sun, Feather, Crown, MessageSquare, CheckCircle, Home, Flame, Mountain, GitBranchPlus, Aperture, Sailboat, CalendarDays, BookOpenText, Landmark, Languages, ClockIcon, UsersRound, Layers, BarChart3, ListChecks, Star, HelpingHand, UserCheck, TrendingUp, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { hanumanEventsData } from '@/data/events-data';
import { getDetailedEventById, type DetailedHanumanEvent, detailedEventsData } from '@/data/event-details-data'; // Ensure detailedEventsData is imported
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

interface DetailCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const event = getDetailedEventById(params.slug) || hanumanEventsData.find(e => e.slug === params.slug);

  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The requested event could not be found.',
    };
  }
  
  const eventTitle = 'name' in event && event.name ? event.name : ('title' in event && event.title ? event.title : 'Event');
  const eventDescription = 'mainDescription' in event && event.mainDescription ? event.mainDescription : ('description'in event && event.description ? event.description : 'Details about the event.');
  const eventImage = event.imageUrl ? (event.imageUrl.startsWith('http') ? event.imageUrl : `${SITE_URL}${event.imageUrl}`) : `${SITE_URL}/og-default-event.jpg`;

  const keywordsList: string[] = ['Hanuman Events', 'Hindu Festivals', eventTitle];
  
  if ('significance' in event && event.significance && Array.isArray(event.significance) && typeof event.significance[0] === 'string') { // For HanumanEvent
    keywordsList.push(...(event.significance as string[]));
  } else if ('significance_detail' in event && (event as DetailedHanumanEvent).significance_detail) { // For DetailedHanumanEvent
    keywordsList.push((event as DetailedHanumanEvent).significance_detail.key_idea);
    keywordsList.push((event as DetailedHanumanEvent).significance_detail.moral_lesson);
  }

  if ('festivalDetails' in event && event.festivalDetails?.type) {
    keywordsList.push(event.festivalDetails.type);
  }
  if ('festivalDetails' in event && event.festivalDetails?.associatedDeity?.name) {
     keywordsList.push(event.festivalDetails.associatedDeity.name);
  }
  if ('characters_involved' in event && Array.isArray(event.characters_involved)) {
    keywordsList.push(...event.characters_involved.map(c => c.name));
  }


  return {
    title: `${eventTitle}`, 
    description: eventDescription,
    keywords: keywordsList,
    alternates: {
      canonical: `${SITE_URL}/events/${params.slug}`,
    },
    openGraph: {
      title: `${eventTitle} | Hanuman Leela`,
      description: eventDescription,
      url: `${SITE_URL}/events/${params.slug}`,
      images: [
        {
          url: eventImage,
          width: 800, 
          height: 600, 
          alt: eventTitle,
        },
      ],
      type: 'article', 
      section: 'Hindu Events and Festivals',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${eventTitle} | Hanuman Leela`,
      description: eventDescription,
      images: [eventImage],
    },
  };
}


const DetailCard: React.FC<DetailCardProps> = ({ title, icon, children, className }) => (
  <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm", className)}>
    <CardHeader className="pb-4">
      <CardTitle className="text-xl text-primary flex items-center">
        {icon && React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { className: "mr-3 h-6 w-6" }) : icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3 text-foreground/90 leading-relaxed">
      {children}
    </CardContent>
  </Card>
);

const SectionItem: React.FC<{label: string, value?: string | ReactNode | string[] | number | null, className?: string, labelClassName?: string, valueClassName?: string}> = ({label, value, className, labelClassName, valueClassName}) => {
  if (value === undefined || value === null || (Array.isArray(value) && value.length === 0)) return null;
  
  return (
    <div className={cn("py-2", className)}>
      <h4 className={cn("font-semibold text-secondary-foreground text-md mb-1", labelClassName)}>{label}</h4>
      {typeof value === 'string' || typeof value === 'number' ? <p className={cn("text-sm", valueClassName)}>{value}</p> : 
       Array.isArray(value) ? 
        <ul className={cn("list-disc list-inside space-y-1 text-sm text-foreground/85", valueClassName)}>
            {value.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
       : <div className={cn("text-sm text-foreground/85", valueClassName)}>{value}</div>}
    </div>
  );
};


const ListDisplay: React.FC<{ items: string[] | undefined | Array<{type: string, description: string}>; title?: string, ordered?: boolean, itemClassName?: string, itemIcon?: ReactNode }> = ({ items, title, ordered = false, itemClassName = "text-sm text-foreground/85", itemIcon }) => {
  if (!items || items.length === 0) return null;
  
  const ListElement = ordered ? 'ol' : 'ul';
  const listStyle = ordered ? 'list-decimal' : 'list-disc';

  return (
    <div className="py-2">
      {title && <h4 className="font-semibold text-secondary-foreground text-md mb-1">{title}</h4>}
      <ListElement className={cn(listStyle, "list-inside space-y-1.5", itemClassName)}>
        {items.map((item, index) => (
          <li key={typeof item === 'string' ? index : item.type || index} className="flex items-start">
            {itemIcon && React.isValidElement(itemIcon) && React.cloneElement(itemIcon as React.ReactElement, { className: "h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0"})}
            {typeof item === 'string' ? 
              <span>{item}</span> :
              <span><strong>{item.type}:</strong> {item.description}</span>
            }
          </li>
        ))}
      </ListElement>
    </div>
  );
};


export default function EventDetailPage({ 
  params,
  searchParams // searchParams is optional and might not be used, but good to include for completeness
}: { 
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const event = getDetailedEventById(params.slug);

  if (!event) {
    const summaryEvent = hanumanEventsData.find(e => e.slug === params.slug);
    if (summaryEvent) {
        return (
            <div className="container mx-auto py-8">
                <PageHeader title={summaryEvent.title} description={summaryEvent.description} />
                 {summaryEvent.imageUrl && (
                    <div className="relative h-60 md:h-80 w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-8">
                        <Image src={summaryEvent.imageUrl} alt={summaryEvent.title} fill objectFit="cover" data-ai-hint={summaryEvent.imageHint}/>
                    </div>
                )}
                <Card className="max-w-3xl mx-auto shadow-xl p-6 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary flex items-center">
                            {React.isValidElement(summaryEvent.icon) ? React.cloneElement(summaryEvent.icon as React.ReactElement, {className: "h-7 w-7 mr-3"}) : summaryEvent.icon}
                            {summaryEvent.title}
                        </CardTitle>
                        <Badge variant="secondary" className="w-fit mt-2">{summaryEvent.date}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg text-foreground/85 leading-relaxed">{summaryEvent.description}</p>
                        <div>
                            <h3 className="font-semibold text-xl text-secondary-foreground mb-2">Significance:</h3>
                            <ul className="list-disc list-inside space-y-1 text-foreground/80">
                                {summaryEvent.significance.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-semibold text-xl text-secondary-foreground mb-2">Celebration Highlights:</h3>
                            <ul className="list-disc list-inside space-y-1 text-foreground/80">
                                {summaryEvent.celebrationHighlights.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
                <div className="text-center mt-12">
                  <Button asChild variant="outline" size="lg">
                    <Link href="/events"><ChevronLeft className="mr-2 h-5 w-5" />Back to All Events</Link>
                  </Button>
                </div>
            </div>
        );
    }
    notFound();
  }
  
  const { festivalDetails, symbolism_detail, significance_detail, impact_detail } = event;

  return (
    <div className="container mx-auto py-8 space-y-12">
      <PageHeader title={event.name} description={event.mainDescription} />

      {event.imageUrl && (
        <div className="relative h-72 md:h-96 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8 group">
            <Image
                src={event.imageUrl}
                alt={event.name}
                fill
                objectFit="cover"
                data-ai-hint={event.imageHint || 'event image'}
                className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-6 md:p-8">
                {React.isValidElement(event.icon) ? React.cloneElement(event.icon as React.ReactElement, { className: "h-10 w-10 text-white drop-shadow-lg mb-2" }) : event.icon}
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">{event.name}</h2>
            </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <DetailCard title="Event Overview" icon={<Info />}>
          <SectionItem label="Date" value={event.date} />
          <SectionItem label="Location" value={event.location} />
          {festivalDetails?.type && <SectionItem label="Type" value={festivalDetails.type} />}
          {festivalDetails?.scriptureDetails?.author && <SectionItem label="Author" value={festivalDetails.scriptureDetails.author} />}
        </DetailCard>

        <DetailCard title="Key Characters / Deities" icon={<Users />}>
          <ul className="space-y-4">
            {event.characters_involved.map(char => (
              <li key={char.name} className="p-3 bg-muted/50 rounded-lg shadow-sm border border-border/30">
                <div className="flex items-center font-semibold text-secondary-foreground mb-1">
                   {char.icon && React.isValidElement(char.icon) ? React.cloneElement(char.icon as React.ReactElement, {className: "h-5 w-5 mr-2 text-accent"}) : char.icon}
                   {char.name} <Badge variant="outline" className="ml-2 text-xs">{char.role}</Badge>
                </div>
                <p className="text-xs text-foreground/80">{char.description}</p>
              </li>
            ))}
             {festivalDetails?.associatedDeity && (
                <li className="p-3 bg-muted/50 rounded-lg shadow-sm border border-border/30">
                    <div className="flex items-center font-semibold text-secondary-foreground mb-1">
                       <Award className="h-5 w-5 mr-2 text-accent" />
                       {festivalDetails.associatedDeity.name} <Badge variant="outline" className="ml-2 text-xs">Primary Deity</Badge>
                    </div>
                    {festivalDetails.associatedDeity.attributes && <ListDisplay items={festivalDetails.associatedDeity.attributes} title="Attributes:" />}
                    {festivalDetails.associatedDeity.mount && festivalDetails.associatedDeity.mount !== "None" && (
                         <p className="text-xs text-foreground/80 mt-1"><strong>Mount:</strong> {festivalDetails.associatedDeity.mount}</p>
                    )}
                </li>
             )}
             {festivalDetails?.scriptureDetails?.keyCharactersInScripture && (
                <ListDisplay items={festivalDetails.scriptureDetails.keyCharactersInScripture} title="Key Figures in Scripture:" />
             )}
          </ul>
        </DetailCard>
      </div>
      
      {event.sequence_of_events && event.sequence_of_events.length > 0 && (
        <DetailCard title="Sequence of Events / Typical Observance" icon={<ListOrdered />}>
          <ol className="list-decimal list-outside pl-5 space-y-3">
            {event.sequence_of_events.map(seq => (
              <li key={seq.step} className="pl-2">
                <strong className="text-primary">Step {seq.step}: </strong>{seq.action}
              </li>
            ))}
          </ol>
        </DetailCard>
      )}
      
      {festivalDetails?.scriptureDetails && (
        <DetailCard title="Scripture Details" icon={<BookOpen />}>
            <SectionItem label="Position in Ramayana" value={festivalDetails.scriptureDetails.positionInRamayana ? `${festivalDetails.scriptureDetails.positionInRamayana}th Book` : 'N/A'} />
            <SectionItem label="Total Chapters" value={festivalDetails.scriptureDetails.totalChapters} />
            <SectionItem label="Total Shlokas (Approx.)" value={festivalDetails.scriptureDetails.totalShlokas} />
            <SectionItem label="Language of Origin" value={festivalDetails.scriptureDetails.languageOfOrigin} />
            <SectionItem label="Primary Theme" value={festivalDetails.scriptureDetails.theme} />
            <ListDisplay items={festivalDetails.scriptureDetails.languagesAvailable} title="Available Languages:" itemIcon={<Languages />} />
        </DetailCard>
      )}

      {festivalDetails?.celebrationRituals && (
        <DetailCard title="Celebration / Parayanam Rituals" icon={<CalendarDays />}>
            <ListDisplay items={festivalDetails.celebrationRituals.commonPractices} title="Common Practices:" itemIcon={<CheckCircle />} />
            <ListDisplay items={festivalDetails.celebrationRituals.specialRituals} title="Special Rituals:" itemIcon={<Star />} />
            <ListDisplay items={festivalDetails.celebrationRituals.preparation} title="Preparation:" itemIcon={<Layers />} />
            {festivalDetails.celebrationRituals.method && <ListDisplay items={festivalDetails.celebrationRituals.method} title="Method:" itemIcon={<ListChecks />} />}
            {festivalDetails.celebrationRituals.completion && <SectionItem label="Completion Ritual" value={festivalDetails.celebrationRituals.completion} />}
            {festivalDetails.celebrationRituals.schedules && festivalDetails.celebrationRituals.schedules.length > 0 && (
              <ListDisplay items={festivalDetails.celebrationRituals.schedules} title="Common Schedules:" itemIcon={<ClockIcon />} />
            )}
        </DetailCard>
      )}
      
      {festivalDetails?.legends && (
        <DetailCard title="Associated Legends" icon={<BookHeart />}>
            {festivalDetails.legends.birthStory && <SectionItem label="Birth Story" value={festivalDetails.legends.birthStory} />}
            {festivalDetails.legends.childhoodLegend && <SectionItem label="Childhood Legend" value={festivalDetails.legends.childhoodLegend} />}
            {festivalDetails.legends.boonOfImmortality && <SectionItem label="Boon of Immortality" value={festivalDetails.legends.boonOfImmortality} />}
        </DetailCard>
      )}

      {/* Detailed Significance and Symbolism for Narrative Events */}
      <div className="grid md:grid-cols-3 gap-8">
        <DetailCard title="Significance" icon={<ListChecks />}>
            <SectionItem label="Core Idea" value={significance_detail.key_idea} />
            <SectionItem label="Moral Lesson" value={significance_detail.moral_lesson} />
            {festivalDetails?.significanceCategorized?.spiritual && <SectionItem label="Spiritual Significance" value={festivalDetails.significanceCategorized.spiritual} />}
            {festivalDetails?.significanceCategorized?.cultural && <SectionItem label="Cultural Significance" value={festivalDetails.significanceCategorized.cultural} />}
            {festivalDetails?.significanceCategorized?.devotional && <SectionItem label="Devotional Significance" value={festivalDetails.significanceCategorized.devotional} />}
             <ListDisplay items={festivalDetails?.significanceCategorized?.benefits} title="Benefits of Observance/Recitation:" itemIcon={<HelpingHand />} />
        </DetailCard>

        <DetailCard title="Symbolism" icon={<Sparkles />}>
            {Object.entries(symbolism_detail).map(([key, value]) => {
                if (value && key !== 'meaning_of_name_interpretations') { // meaning_of_name_interpretations handled separately
                    const label = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    return <SectionItem key={key} label={label} value={value as string} />;
                }
                return null;
            })}
            {festivalDetails?.symbols?.color && <SectionItem label="Symbolic Color" value={festivalDetails.symbols.color} />}
            {festivalDetails?.symbols?.iconography && <SectionItem label="Iconography" value={festivalDetails.symbols.iconography} />}
            {festivalDetails?.symbols?.meaningOfName && (
                <SectionItem label={`Meaning of "${event.name.includes("Sundara Kanda") ? "Sundara" : event.name}"`} value={
                    <>
                        {festivalDetails.symbols.meaningOfName.sanskrit && <p className="italic text-accent mb-1">{festivalDetails.symbols.meaningOfName.sanskrit}</p>}
                        <ListDisplay items={festivalDetails.symbols.meaningOfName.interpretations} itemIcon={<Info />} />
                    </>
                }/>
            )}
             {symbolism_detail?.meaning_of_name_interpretations && !festivalDetails?.symbols?.meaningOfName && (
                 <ListDisplay items={symbolism_detail.meaning_of_name_interpretations} title="Interpretations of 'Sundara':" itemIcon={<Info />} />
            )}
        </DetailCard>

        <DetailCard title="Impact" icon={<ShieldAlert />}>
            <SectionItem label="Spiritual Impact" value={impact_detail.spiritual_impact} />
            <SectionItem label="Cultural Impact" value={impact_detail.cultural_impact} />
            {festivalDetails?.modernObservations?.socialImpact && <SectionItem label="Modern Social Impact" value={festivalDetails.modernObservations.socialImpact} />}
        </DetailCard>
      </div>
      
      {/* Display regularWorshipDetails if available (for Tuesday/Saturday worship) */}
      {festivalDetails?.regularWorshipDetails && (
        <>
          <DetailCard title="Significance of Worship Days" icon={<Calendar />}>
            {festivalDetails.regularWorshipDetails.days.map(day => (
              festivalDetails.regularWorshipDetails!.significance[day] && (
                <div key={day} className="mb-4 p-3 bg-muted/30 rounded-md border border-border/30">
                  <h4 className="font-semibold text-lg text-accent mb-2">{day}</h4>
                  <SectionItem label="Spiritual Meaning" value={festivalDetails.regularWorshipDetails!.significance[day]!.spiritual_meaning} />
                  <ListDisplay title="Devotee Benefits:" items={festivalDetails.regularWorshipDetails!.significance[day]!.devotee_benefits} itemIcon={<CheckCircle />} />
                </div>
              )
            ))}
          </DetailCard>

          <DetailCard title="Rituals & Practices" icon={<ListOrdered />}>
            <ListDisplay title="Early Morning Preparation:" items={festivalDetails.regularWorshipDetails.rituals.early_morning_preparation} itemIcon={<Sun />} />
            <ListDisplay title="Offerings:" items={festivalDetails.regularWorshipDetails.rituals.offerings} itemIcon={<Utensils />} />
            <ListDisplay title="Prayers & Chants:" items={festivalDetails.regularWorshipDetails.rituals.prayers_and_chants} itemIcon={<BookOpenText />} />
            <ListDisplay title="Temple Practices:" items={festivalDetails.regularWorshipDetails.rituals.temple_practices} itemIcon={<Landmark />} />
            {festivalDetails.regularWorshipDetails.rituals.dos_and_donts && (
              <div className="mt-3">
                <h4 className="font-semibold text-secondary-foreground text-md mb-1">Do's and Don'ts:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-600 mb-1">Do's:</h5>
                    <ListDisplay items={festivalDetails.regularWorshipDetails.rituals.dos_and_donts.dos} itemIcon={<CheckCircle className="text-green-500" />} />
                  </div>
                  <div>
                     <h5 className="font-medium text-red-600 mb-1">Don'ts:</h5>
                    <ListDisplay items={festivalDetails.regularWorshipDetails.rituals.dos_and_donts.donts} itemIcon={<AlertTriangle className="text-red-500"/>} />
                  </div>
                </div>
              </div>
            )}
          </DetailCard>
          
          <DetailCard title="Benefits, Recommendations & Beliefs" icon={<TrendingUp />}>
            <ListDisplay title="Overall Benefits:" items={festivalDetails.regularWorshipDetails.benefits} itemIcon={<Sparkles />} />
            <ListDisplay title="Recommended For:" items={festivalDetails.regularWorshipDetails.recommended_for} itemIcon={<UserCheck />} />
            <ListDisplay title="Common Folk Beliefs:" items={festivalDetails.regularWorshipDetails.folk_beliefs} itemIcon={<Info />} />
          </DetailCard>
        </>
      )}

      {/* Existing Festival Details section, conditional on festivalDetails but NOT regularWorshipDetails */}
      {festivalDetails && !festivalDetails.regularWorshipDetails && (
        <>
         <DetailCard title="Observance Details" icon={<CalendarDays />}>
           {festivalDetails.dateObserved && (
            <div>
              <SectionItem label="Date Observed" value={
                <>
                  <p>{festivalDetails.dateObserved.lunarCalendar}</p>
                  {festivalDetails.dateObserved.gregorianVariation && <p className="text-xs text-muted-foreground">({festivalDetails.dateObserved.gregorianVariation})</p>}
                </>
              }/>
              {festivalDetails.dateObserved.regionalVariations && festivalDetails.dateObserved.regionalVariations.length > 0 && (
                <div className="mt-2">
                  <h5 className="font-medium text-sm text-secondary-foreground mb-1">Regional Variations:</h5>
                  <ul className="list-disc list-inside pl-4 text-xs text-foreground/80">
                    {festivalDetails.dateObserved.regionalVariations.map(v => <li key={v.region}>{v.region}: {v.date}</li>)}
                  </ul>
                </div>
              )}
              <ListDisplay items={festivalDetails.dateObserved.recommendedDays} title="Recommended Days for Practice:" />
            </div>
           )}
           <ListDisplay items={festivalDetails.observedBy} title="Observed By:" itemIcon={<UsersRound />} />
         </DetailCard>

         {festivalDetails.importantLocationsList && festivalDetails.importantLocationsList.length > 0 && (
            <DetailCard title="Important Locations & Shrines" icon={<MapPin />}>
                {festivalDetails.importantLocationsList?.map(loc => (
                    <div key={loc.temple} className="py-1">
                    <p className="font-medium text-foreground">{loc.temple}</p>
                    <p className="text-xs text-muted-foreground">{loc.location}</p>
                    </div>
                ))}
            </DetailCard>
         )}
         
         <div className="grid md:grid-cols-2 gap-8">
            <DetailCard title="Mantras & Chants" icon={<BookOpenText />}>
                <ListDisplay items={festivalDetails.mantrasAndChants} itemIcon={<Music />} />
            </DetailCard>
            <DetailCard title="Food Offerings" icon={<Utensils />}>
                <ListDisplay items={festivalDetails.foodOfferings} itemIcon={<Flame />} />
            </DetailCard>
         </div>

         <DetailCard title="Modern Observations & Related Information" icon={<Tv />}>
           {festivalDetails.modernObservations?.mediaCoverage && <SectionItem label="Media Coverage" value={festivalDetails.modernObservations.mediaCoverage} />}
           {festivalDetails.modernObservations?.onlineParticipation && <SectionItem label="Online Participation" value={festivalDetails.modernObservations.onlineParticipation} />}
           <ListDisplay items={festivalDetails.modernObservations?.audioVisualResources} title="Audio/Visual Resources:" itemIcon={<LinkIcon />} />
           <ListDisplay items={festivalDetails.relatedFestivals} title="Related Festivals/Texts:" itemIcon={<BookHeart />} />
           <ListDisplay items={festivalDetails.references} title="References:" itemIcon={<LinkIcon />} />
         </DetailCard>
        </>
      )}


      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
          <Link href="/events">
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to All Events
          </Link>
        </Button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Using detailedEventsData which should have `id` matching `slug` from hanumanEventsData
  const detailedEventSlugs = detailedEventsData.map(event => ({ slug: event.id }));
  // Fallback for events that might only be in hanumanEventsData
  const summaryEventSlugs = hanumanEventsData.map(event => ({ slug: event.slug }));
  
  const allSlugsSet = new Set([...detailedEventSlugs.map(s => s.slug), ...summaryEventSlugs.map(s => s.slug)]);
  
  return Array.from(allSlugsSet).map(slug => ({ slug }));
}

    