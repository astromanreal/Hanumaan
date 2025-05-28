// src/app/mantras/hanuman-kavacham/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, BookOpenText, Sparkles, Shield, Info, ListChecks, User, Languages, FileText, ShieldAlert } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Hanuman Kavacham - Armor of Protection',
  description: "Recite the Hanuman Kavacham, a powerful protective hymn invoking Lord Hanuman's divine shield against all adversities. Full text, meaning, and benefits included for spiritual strength.",
  keywords: ['Hanuman Kavacham', 'Hanuman Protection Mantra', 'Divine Shield Hanuman', 'Kavacham Stotra', 'Powerful Hanuman Hymn', 'Remove Evil Forces', 'Spiritual Armor', 'Sanskrit Kavach'],
  alternates: {
    canonical: `${SITE_URL}/mantras/hanuman-kavacham`,
  },
  openGraph: {
    title: 'Shri Hanuman Kavacham - Armor of Protection',
    description: "Recite the Hanuman Kavacham for divine protection from Lord Hanuman, shielding against all negative forces.",
    url: `${SITE_URL}/mantras/hanuman-kavacham`,
    images: [
      {
        url: `${SITE_URL}/og-hanuman-kavacham.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Hanuman Kavacham - Protective Shield',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Hanuman Kavacham - Armor of Protection',
    description: "Recite the Hanuman Kavacham for divine protection.",
    images: [`${SITE_URL}/twitter-hanuman-kavacham.jpg`], 
  },
};

interface KavachamVerse {
  verse_number: number;
  sanskrit: string;
  english_translation: string;
  explanation: string;
}

interface HanumanKavachamData {
  title: string;
  language: string[];
  form: string;
  theme: string;
  total_verses: number;
  author: string;
  benefits: string[];
  recitation_guidelines: string;
  verses: KavachamVerse[];
  conclusion: {
    sanskrit: string;
    english_translation: string;
    explanation: string;
  };
  attribution: string;
}

const hanumanKavachamFullData: HanumanKavachamData = {
  title: "Hanuman Kavacham",
  language: ["Sanskrit"],
  form: "Kavacham (Protective Hymn)",
  theme: "Divine protection, strength, fearlessness, victory over enemies",
  total_verses: 18, // The provided JSON has 8 verses then conclusion, but states 18 total. Displaying provided.
  author: "Traditional – found in several Puranic texts",
  benefits: [
    "Protection from evil forces, black magic, and enemies",
    "Bestows courage, fearlessness, and health",
    "Grants victory in conflicts and legal issues",
    "Ensures spiritual and physical security"
  ],
  recitation_guidelines: "Chant daily or during special Hanuman pujas, especially on Tuesdays and Saturdays. Can also be written and carried as a talisman.",
  verses: [
    {
      verse_number: 1,
      sanskrit: "अस्य श्रीहनुमत्कवचस्य, ब्रह्मा ऋषिः। गायत्री छन्दः। हनुमान् देवता। हनुमत् प्रीत्यर्थे जपे विनियोगः॥",
      english_translation: "This is the Hanumat Kavacham. The sage is Brahma, the meter is Gayatri, the deity is Hanuman. This is used for pleasing Lord Hanuman.",
      explanation: "This verse serves as the invocation and identifies the elements of the kavacham (sage, meter, deity, purpose)."
    },
    {
      verse_number: 2,
      sanskrit: "ॐ हनुमान् मां रक्षतु शीर्षे। शिरसि हनुमान् पातु। ललाटे रक्षतु मारुतात्मजः॥",
      english_translation: "May Hanuman protect my head. May the son of the wind god protect my forehead.",
      explanation: "Invokes Lord Hanuman’s protection over the upper parts of the body."
    },
    {
      verse_number: 3,
      sanskrit: "दृग्भ्यां पावनपुण्यात्मा। नासिकायां हनूमान् पातु। मुखं कपिसत्तमः॥",
      english_translation: "May the holy Hanuman protect my eyes, nose, and mouth.",
      explanation: "A continuation of protection for facial features from divine Hanuman."
    },
    {
      verse_number: 4,
      sanskrit: "कण्ठं रक्षतु रामदूतः। स्कन्धौ भीमरूपधारी। बाहू रक्षतु रामभक्तः॥",
      english_translation: "May the messenger of Rama protect my throat, the one in fearsome form protect my shoulders, and the devotee of Rama protect my arms.",
      explanation: "Emphasizes Hanuman’s multiple roles — as servant, warrior, and devotee."
    },
    {
      verse_number: 5,
      sanskrit: "हृदयं रक्षतु रामेष्टः। उदरं जाम्बवद्दूतः। पृष्ठं पिङ्गललोचनः॥",
      english_translation: "May the beloved of Rama protect my heart, the messenger of Jambavan protect my stomach, and the one with reddish eyes protect my back.",
      explanation: "Highlights Hanuman’s valor and divine vision protecting vital regions."
    },
    {
      verse_number: 6,
      sanskrit: "कटिं काञ्चनकुण्डली। जंघे रक्षतु महाबलः। जानुनी रक्षतु जटायुद्वन्द्वी॥",
      english_translation: "May the golden-earring-wearing Hanuman protect my waist, the mighty one protect my thighs, and the friend of Jatayu protect my knees.",
      explanation: "Protects the lower body and draws symbolic connection to other heroic beings."
    },
    {
      verse_number: 7,
      sanskrit: "गुल्फौ रक्षतु विश्वरूपः। पादौ रक्षतु पर्वताहारकः। सर्वाङ्गानि रक्षतु लङ्काविनाशकः॥",
      english_translation: "May the universal form protect my ankles, the mountain-lifter protect my feet, and the destroyer of Lanka protect all my limbs.",
      explanation: "Describes Hanuman’s cosmic power and physical might as encompassing guardianship."
    },
    {
      verse_number: 8,
      sanskrit: "सर्वेष्वङ्गेषु मे नित्यं रामदूतः प्रतिष्ठितः। भक्तिं मे हनुमन् दद्याद् रामचन्द्रपदं गतम्॥",
      english_translation: "May the messenger of Rama forever dwell in all my limbs. May Hanuman grant me devotion and the blessed feet of Rama.",
      explanation: "Concludes with a prayer for total embodiment of Hanuman’s presence and Rama’s grace."
    }
    // Note: The provided JSON only lists 8 verses but states total_verses: 18.
    // If more verses were available, they would be added here.
  ],
  conclusion: {
    sanskrit: "इदं कवचं पवित्रं पठनं श्रवणं स्मृतम्।\nहनूमद्भक्तिमाप्नोति युद्धे जयमवाप्नुयात्॥",
    english_translation: "This sacred kavacham, when read, heard, or remembered, bestows Hanuman’s devotion and victory in battle.",
    explanation: "The result of reciting this kavacham is spiritual strength and real-world success."
  },
  attribution: "Ancient Hindu tradition, found in Hanuman-related Upapuranas and tantric texts. Common in both North and South Indian traditions."
};


const VerseDisplay: React.FC<{ verse: KavachamVerse; verseNumber: number }> = ({ verse, verseNumber }) => (
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

export default function HanumanKavachamPage() {
  const data = hanumanKavachamFullData;

  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title={data.title}
        description={`A powerful ${data.total_verses}-verse hymn for divine protection, invoking Lord Hanuman's invincible armor.`}
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl text-primary font-serif flex items-center justify-center">
             <ShieldAlert className="mr-3 h-8 w-8 text-primary" /> 
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
                    verse_number: data.verses.length + 1, // Assign a number for key
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
        <SectionCard title="About the Kavacham" icon={<Info />}>
            <p><strong>Author:</strong> {data.author}</p>
            <p><strong>Language:</strong> {data.language.join(', ')}</p>
            <p><strong>Form:</strong> {data.form}</p>
            <p><strong>Total Verses:</strong> {data.total_verses} (displaying {data.verses.length} provided verses)</p>
        </SectionCard>

        <SectionCard title="Benefits of Recitation" icon={<Sparkles />}>
            <ul className="list-disc list-inside space-y-1 pl-4">
                {data.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
        </SectionCard>
      </div>
      
      <SectionCard title="Recitation Guidelines & Attribution" icon={<BookOpenText />} className="max-w-3xl mx-auto">
          <p><strong>Recitation Guidelines:</strong> {data.recitation_guidelines}</p>
          <p className="mt-3"><strong>Attribution:</strong> {data.attribution}</p>
      </SectionCard>


      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
          <Link href="/mantras">
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to All Mantras
          </Link>
        </Button>
      </div>
    </div>
  );
}
