// src/app/mantras/anjaneya-kavacham/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ShieldAlert, Info, ListChecks, BookOpenText, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Anjaneya Kavacham - Armour of Devotion & Protection',
  description: "Recite the powerful Anjaneya Kavacham, invoking Lord Hanuman as the son of Anjana for divine protection, strength, and spiritual well-being. Full text, meaning, and benefits included.",
  keywords: ['Anjaneya Kavacham', 'Hanuman Kavacham', 'Anjaneya Stotra', 'Hanuman Protection Mantra', 'Son of Anjana', 'Spiritual Armour', 'Hindu Hymns', 'Sanskrit Kavacham', 'Powerful Stotras'],
  alternates: {
    canonical: `${SITE_URL}/mantras/anjaneya-kavacham`,
  },
  openGraph: {
    title: 'Shri Anjaneya Kavacham - Armour of Devotion & Protection',
    description: "Recite the Anjaneya Kavacham for invoking divine protection, strength, and spiritual well-being from Lord Hanuman.",
    url: `${SITE_URL}/mantras/anjaneya-kavacham`,
    images: [
      {
        url: `${SITE_URL}/og-anjaneya-kavacham.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Anjaneya Kavacham - Protective Hymn',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Anjaneya Kavacham - Armour of Devotion & Protection',
    description: "Recite the Anjaneya Kavacham for divine protection and spiritual well-being.",
    images: [`${SITE_URL}/twitter-anjaneya-kavacham.jpg`], 
  },
};

interface KavachamVerse {
  verse_number: number;
  sanskrit: string;
  english_translation: string;
  explanation: string;
}

interface AnjaneyaKavachamData {
  title: string;
  language: string[];
  form: string;
  theme: string;
  deity_invoked: string;
  tradition: string;
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

const anjaneyaKavachamData: AnjaneyaKavachamData = {
  title: "Anjaneya Kavacham",
  language: ["Sanskrit"],
  form: "Kavacham (Protective Hymn)",
  theme: "Protection from harm, strength, fearlessness, spiritual empowerment",
  deity_invoked: "Anjaneya (Lord Hanuman, son of Anjana)",
  tradition: "South Indian",
  benefits: [
    "Protection from physical and mental adversities",
    "Shield from negative influences, evil forces, and black magic",
    "Grants victory over obstacles, fearlessness, and strength",
    "Bestows health, wealth, and spiritual well-being"
  ],
  recitation_guidelines: "Chant during Hanuman Jayanti, Saturdays, or when seeking strength and protection. Recommended chanting during sunrise and sunset.",
  verses: [
    {
      verse_number: 1,
      sanskrit: "ॐ अस्य श्रीअञ्जनेयकवचस्य ब्रह्मा ऋषिः । गायत्री छन्दः । श्रीअञ्जनेय देवता । हं बीजम् । हुं शक्तिः । श्रीअञ्जनेय कीलकम् । मम सर्वकार्यसिद्ध्यर्थं अञ्जनेयकवचपाठे विनियोगः ॥",
      english_translation: "Om. For this Anjaneya Kavacham, the sage is Brahma, the meter is Gayatri, the deity is Anjaneya. The seed is 'Ham', the power is 'Hum', Anjaneya is the key. It is recited for the success of all tasks.",
      explanation: "Invocation and assignment of energies for the kavacham."
    },
    {
      verse_number: 2,
      sanskrit: "ॐ अञ्जनेयः शिरः पातु, ललाटं सर्वशत्रुविनाशकः । चक्षुषि महाबलः पातु, कर्णौ मे पावनात्मजः ॥",
      english_translation: "May Anjaneya protect my head, the destroyer of all enemies protect my forehead. The mighty one protect my eyes, and the son of Pavana protect my ears.",
      explanation: "Protection is invoked for the upper body, head, and senses."
    },
    {
      verse_number: 3,
      sanskrit: "नासिकां मे द्रविणं पातु, वदनं पवनात्मजः । जिव्हां मे श्रीरामदूतः, दन्तान् मे कपिवीर्यवान् ॥",
      english_translation: "May the son of Pavana protect my nose, may the messenger of Rama protect my mouth. May the heroic monkey protect my teeth.",
      explanation: "Protection for facial parts, invoking Hanuman’s strength and role as the messenger of Rama."
    },
    {
      verse_number: 4,
      sanskrit: "कण्ठं पातु महाप्रभुः, स्कन्धौ पातु महाबलः । बाहू मे पवनपुत्रः, हृदयं रामभक्तमः ॥",
      english_translation: "May the great Lord protect my throat, the mighty one protect my shoulders. The son of the wind god protect my arms, and the devotee of Rama my heart.",
      explanation: "Invokes protection for vital organs with divine qualities associated with Hanuman."
    },
    {
      verse_number: 5,
      sanskrit: "उदरं पातु विभीषणः, पृष्ठं पातु महाशकः । कटिं पातु रघुकुलनायकः, जंघे पातु महाक्रूरः ॥",
      english_translation: "May Vibhishana protect my stomach, may the great one protect my back. May the leader of the Raghu clan protect my waist, and the fierce one protect my thighs.",
      explanation: "Protection is sought for lower body parts, invoking the grandeur and fierceness of Hanuman."
    },
    {
      verse_number: 6,
      sanskrit: "ऊरू पातु महाक्रूरः, जानुनी पातु महाशरः । जङ्घे पातु सुदर्शनधारी, पादौ पातु रघुकुलनायकः ॥",
      english_translation: "May the fierce one protect my hips, the great archer protect my knees. The holder of the Sudarshana protect my legs, and the leader of the Raghu dynasty my feet.",
      explanation: "Invokes divine guardianship over the lower limbs, ensuring safety and strength."
    },
    {
      verse_number: 7,
      sanskrit: "पञ्चमुखो पातु मां सर्वतोऽनजनायुः । सर्वशत्रुनिवारिणो रामदूतः कुतूहलः ॥",
      english_translation: "May the five-faced Hanuman protect me from all sides, ensuring victory over all enemies, the messenger of Rama who removes all obstacles.",
      explanation: "Anjaneya’s omnidirectional protection is invoked, including his five-faced form."
    },
    {
      verse_number: 8,
      sanskrit: "रामदूतः पातु मां सर्वशत्रुविनाशकः । सर्वव्याधिनिवारिणो पवनात्मजः सदा पातु ॥",
      english_translation: "May the messenger of Rama protect me, the destroyer of all enemies, the remover of all ailments, may the son of Vayu protect me always.",
      explanation: "Highlights Hanuman’s divine mission of protection and healing."
    }
  ],
  conclusion: {
    sanskrit: "यः पठेन्नित्यं श्रद्धया भक्त्या सर्वदुःखभञ्जनः। अञ्जनेयकवचं ध्रुवा समृद्धिम् आत्मनं लभेत्॥",
    english_translation: "He who reads this with faith and devotion every day, will be rid of all sufferings and attain success and prosperity.",
    explanation: "Reciting the kavacham daily brings relief from suffering and results in material and spiritual success."
  },
  attribution: "Traditional South Indian scriptures, widely popular among devotees of Hanuman and in regions practicing intense worship of Lord Anjaneya."
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

export default function AnjaneyaKavachamPage() {
  const data = anjaneyaKavachamData;

  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title={data.title}
        description={`A powerful hymn for divine protection, invoking Lord Hanuman as Anjaneya, the son of Anjana.`}
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
        <SectionCard title="About the Kavacham" icon={<Info />}>
            <p><strong>Deity Invoked:</strong> {data.deity_invoked}</p>
            <p><strong>Language:</strong> {data.language.join(', ')}</p>
            <p><strong>Form:</strong> {data.form}</p>
            <p><strong>Tradition:</strong> {data.tradition}</p>
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
