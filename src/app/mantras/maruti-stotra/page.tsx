// src/app/mantras/maruti-stotra/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, BookOpenText, Sparkles, ShieldAlert, Info, ListChecks, User, Languages, FileText, PenTool } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Maruti Stotra (Samarth Ramdas) - Hymn of Strength',
  description: "Recite the powerful Maruti Stotra composed by Samarth Ramdas, praising Lord Maruti (Hanuman) for strength, courage, and divine protection. Full text, meaning, and benefits included for spiritual upliftment.",
  keywords: ['Maruti Stotra', 'Hanuman Stotra', 'Samarth Ramdas', 'Hanuman Prayer', 'Hindu Devotional Hymn', 'Maruti Prayer', 'Strength Mantra', 'Marathi Stotra', 'Hanuman Bhakti'],
  alternates: {
    canonical: `${SITE_URL}/mantras/maruti-stotra`,
  },
  openGraph: {
    title: 'Shri Maruti Stotra (Samarth Ramdas) - Hymn of Strength',
    description: "Recite the Maruti Stotra by Samarth Ramdas for invoking strength, courage, and divine protection from Lord Maruti (Hanuman).",
    url: `${SITE_URL}/mantras/maruti-stotra`,
    images: [
      {
        url: `${SITE_URL}/og-maruti-stotra.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Maruti Stotra by Samarth Ramdas - Divine Hymn',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Maruti Stotra (Samarth Ramdas) - Hymn of Strength',
    description: "Recite the Maruti Stotra by Samarth Ramdas for divine strength and protection.",
    images: [`${SITE_URL}/twitter-maruti-stotra.jpg`], 
  },
};

interface StotraVerse {
  verse_number: number;
  sanskrit: string;
  english_translation: string;
  explanation: string;
}

interface MarutiStotraData {
  title: string;
  composer: string;
  language: string[];
  form: string;
  theme: string;
  deity_invoked: string;
  benefits: string[];
  recitation_guidelines: string;
  verses: StotraVerse[];
  conclusion: {
    sanskrit: string;
    english_translation: string;
    explanation: string;
  };
  attribution: string;
  note?: string;
}

const marutiStotraData: MarutiStotraData = {
  title: "Maruti Stotra",
  composer: "Samarth Ramdas",
  language: ["Sanskrit"],
  form: "Stotra (Hymn of Praise)",
  theme: "Praising Lord Maruti (Hanuman), invoking strength, courage, and divine protection",
  deity_invoked: "Lord Maruti (Hanuman)",
  benefits: [
    "Protection from physical and mental adversities",
    "Granting strength and courage to face life's challenges",
    "Blessings for success, wisdom, and divine grace",
    "Removal of obstacles and obstacles caused by negative forces"
  ],
  recitation_guidelines: "Recite this stotra regularly, especially on Tuesdays and Saturdays, to invoke Lord Maruti’s protection and blessings. It can also be recited during Hanuman Jayanti or in moments of distress and need for strength.",
  verses: [
    {
      verse_number: 1,
      sanskrit: "जय मारुति रघुकुल नायक। हरतु शत्रु मर्म को एकै॥",
      english_translation: "Victory to Maruti, the leader of the Raghu clan. He destroys the enemy’s heart with a single blow.",
      explanation: "Praising Lord Maruti's valor and strength, emphasizing his power to defeat enemies effortlessly."
    },
    {
      verse_number: 2,
      sanskrit: "हे पवन कुमार शरणं भव। पतितपावन सब विधि ग्रह॥",
      english_translation: "O son of the wind god, the refuge of all. You are the purifier of all sinners, removing their sins and afflictions.",
      explanation: "Acknowledging Lord Hanuman’s role as a purifier and protector of devotees from sins and troubles."
    },
    {
      verse_number: 3,
      sanskrit: "स्वधर्मे निपुणो होय, गुरु मंत्रा ची बनाय। मर्जी तळयो याहि जिंकावा॥",
      english_translation: "He who is proficient in his duties, and whose guru’s words he follows, succeeds in everything, overpowering all challenges.",
      explanation: "This verse emphasizes the importance of following one’s duty and the guidance of the guru for success."
    },
    {
      verse_number: 4,
      sanskrit: "तर्जना बळवंतक तुलसी धरावा। वहन कष्ट सब पावे तुम कृपा योजित करें॥",
      english_translation: "You bear all burdens with grace, O Lord. All hardships are alleviated by your divine mercy.",
      explanation: "Emphasizing Lord Hanuman's ability to carry all burdens and alleviating difficulties for his devotees."
    },
    {
      verse_number: 5,
      sanskrit: "येन राघव सहायाय व्रतीतें यः समुझावहे। जान्हवी बाह्यां सदा मानवीकरणां॥",
      english_translation: "By whose help, the Rama devotees are always victorious and earn respect in this world.",
      explanation: "Acknowledges Lord Hanuman’s unwavering support to the devotees of Lord Rama and his help in their success."
    },
    {
      verse_number: 6,
      sanskrit: "कष्ट दूर करके जाओ पाएं जो, मनमा पावे। सचखेर हरिवत्सल पेमैं मरे॥",
      english_translation: "He who removes all obstacles and leads to success and happiness, filled with love for Lord Rama.",
      explanation: "The verse depicts Hanuman’s role as a remover of obstacles and his profound devotion to Lord Rama."
    },
    {
      verse_number: 7,
      sanskrit: "तुमसे पवित्र है देवता, सत्य संतुष्ट मोक्ष माना। सदा सर्व कष्टादिक समाधान के सिर॥",
      english_translation: "You are purer than the gods, O Lord. You always solve problems and bring peace, dispelling all hardships.",
      explanation: "Praises Hanuman's purity, divinity, and his role in dispelling troubles and bringing peace to devotees."
    }
  ],
  conclusion: {
    sanskrit: "तुष्टायाः सर्वशंयदानें कृपा त्यागेंद्र कं। शत्रु वासनां पंथकं ब्रंह्मः कांति समाध्यानं॥",
    english_translation: "Those who recite this hymn with devotion will have their desires fulfilled and be protected by Lord Maruti’s divine grace.",
    explanation: "This verse assures the devotees that regular recitation of the stotra will lead to divine blessings, fulfillment of desires, and protection from harm."
  },
  attribution: "A devotional hymn composed by Samarth Ramdas, emphasizing the strength and virtues of Lord Maruti (Hanuman) in the context of victory, protection, and blessings.",
  note: "This stotra is widely recited by devotees of Hanuman, especially in Maharashtra and other regions where Samarth Ramdas is revered."
};

const VerseDisplay: React.FC<{ verse: StotraVerse; verseNumber: number }> = ({ verse, verseNumber }) => (
  <div className="mb-8 p-6 border border-border/60 rounded-xl bg-muted/40 shadow-lg transition-shadow hover:shadow-primary/20">
    <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 pb-2 border-b border-border/40">
      Verse {verseNumber}
    </h3>
    
    <div className="mb-4">
      <h4 className="font-semibold text-lg text-accent mb-1">Sanskrit:</h4>
      <pre className="whitespace-pre-line font-serif text-foreground/95 bg-background/70 p-4 rounded-md shadow-inner text-lg sm:text-xl leading-relaxed">
        {verse.sanskrit}
      </pre>
    </div>
    
    <div className="mb-4">
      <h4 className="font-semibold text-lg text-accent mb-1">English Translation:</h4>
      <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">{verse.english_translation}</p>
    </div>

    <div>
      <h4 className="font-semibold text-lg text-accent mb-1">Explanation:</h4>
      <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">{verse.explanation}</p>
    </div>
  </div>
);

const SectionCard: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode; className?: string }> = ({ title, children, icon, className }) => (
  <Card className={cn("shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden", className)}>
    <CardHeader className="pb-4">
      <CardTitle className="text-2xl text-primary flex items-center">
        {icon && React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement, { className: "mr-3 h-6 w-6"})}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3 text-foreground/90 leading-relaxed">
      {children}
    </CardContent>
  </Card>
);

export default function MarutiStotraPage() {
  const data = marutiStotraData;

  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title={data.title}
        description={`A powerful hymn by ${data.composer} dedicated to ${data.deity_invoked}.`}
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl text-primary font-serif flex items-center justify-center">
             {React.createElement(PenTool, { className: "mr-3 h-8 w-8 text-primary" })} 
            ॥ {data.title} ॥
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-1 text-sm sm:text-base">
            {data.form} - {data.theme}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10 p-4 sm:p-6 md:p-8">
          {data.verses.map((verse) => (
            <VerseDisplay key={verse.verse_number} verse={verse} verseNumber={verse.verse_number} />
          ))}
          
          <div className="mt-10 pt-6 border-t border-border/60">
             <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Concluding Verse (Phalashruti)</h3>
             <VerseDisplay 
                verse={{
                    verse_number: data.verses.length + 1, 
                    sanskrit: data.conclusion.sanskrit,
                    english_translation: data.conclusion.english_translation,
                    explanation: data.conclusion.explanation
                }}
                verseNumber={data.verses.length + 1}
             />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <SectionCard title="About the Stotra" icon={React.createElement(Info, {})}>
            <p><strong>Composer:</strong> {data.composer}</p>
            <p><strong>Language:</strong> {data.language.join(', ')}</p>
            <p><strong>Form:</strong> {data.form}</p>
            <p><strong>Deity Invoked:</strong> {data.deity_invoked}</p>
        </SectionCard>

        <SectionCard title="Benefits of Recitation" icon={React.createElement(Sparkles, {})}>
            <ul className="list-disc list-inside space-y-1 pl-4">
                {data.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
        </SectionCard>
      </div>
      
      <SectionCard title="Recitation Guidelines & Attribution" icon={React.createElement(BookOpenText, {})} className="max-w-3xl mx-auto">
          <p><strong>Recitation Guidelines:</strong> {data.recitation_guidelines}</p>
          <p className="mt-3"><strong>Attribution:</strong> {data.attribution}</p>
          {data.note && <p className="mt-3 text-sm italic text-muted-foreground">{data.note}</p>}
      </SectionCard>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
          <Link href="/mantras">
            {React.createElement(ChevronLeft, { className: "mr-2 h-5 w-5" })}
            Back to All Mantras
          </Link>
        </Button>
      </div>
    </div>
  );
}
