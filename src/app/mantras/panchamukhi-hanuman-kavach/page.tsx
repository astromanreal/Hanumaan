// src/app/mantras/panchamukhi-hanuman-kavach/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ShieldAlert, Info, ListChecks, User, Languages, FileText, BookOpenText, Sparkles, Layers } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Panchamukhi Hanuman Kavach - The Five-Faced Protective Shield',
  description: "Recite the powerful Panchamukhi Hanuman Kavach invoking the five divine faces of Lord Hanuman for complete protection, victory over evil, and spiritual empowerment. Full text, meaning, and benefits included.",
  keywords: ['Panchamukhi Hanuman Kavach', 'Five Faced Hanuman Kavach', 'Hanuman Protection Mantra', 'Hanuman Kavacham', 'Panchmukhi Hanuman Stotra', 'Spiritual Shield', 'Victory Over Evil', 'Hanuman Mantra', 'Five Divine Faces'],
  alternates: {
    canonical: `${SITE_URL}/mantras/panchamukhi-hanuman-kavach`,
  },
  openGraph: {
    title: 'Shri Panchamukhi Hanuman Kavach - The Five-Faced Protective Shield',
    description: "Recite the Panchamukhi Hanuman Kavach for invoking the five divine faces of Lord Hanuman for complete protection and spiritual empowerment.",
    url: `${SITE_URL}/mantras/panchamukhi-hanuman-kavach`,
    images: [
      {
        url: `${SITE_URL}/og-panchamukhi-kavach.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Panchamukhi Hanuman Kavach - Five Divine Faces',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Panchamukhi Hanuman Kavach - The Five-Faced Protective Shield',
    description: "Recite the Panchamukhi Hanuman Kavach for invoking the five divine faces of Lord Hanuman for complete protection.",
    images: [`${SITE_URL}/twitter-panchamukhi-kavach.jpg`], 
  },
};

interface KavachVerse {
  verse_number: number;
  sanskrit: string;
  english_translation: string;
  explanation: string;
}

interface PanchamukhiKavachData {
  title: string;
  language: string[];
  form: string;
  theme: string;
  total_verses: number;
  deity_invoked: string;
  faces_of_hanuman: string[];
  benefits: string[];
  recitation_guidelines: string;
  verses: KavachVerse[];
  conclusion: {
    sanskrit: string;
    english_translation: string;
    explanation: string;
  };
  attribution: string;
}

const panchamukhiHanumanKavachData: PanchamukhiKavachData = {
  title: "Panchamukhi Hanuman Kavach",
  language: ["Sanskrit"],
  form: "Kavacham (Protective Hymn)",
  theme: "Protection, victory over evil, spiritual shield, invoking five divine aspects of Hanuman",
  total_verses: 17, // As per input, actual verses displayed might be less if only 9 are provided.
  deity_invoked: "Panchamukhi Hanuman (Five-faced Hanuman)",
  faces_of_hanuman: [
    "Hanuman (East-facing) – removes sins, grants purity",
    "Narasimha (South-facing) – destroys fear and evil",
    "Garuda (West-facing) – removes poison, black magic",
    "Varaha (North-facing) – grants wealth and prosperity",
    "Hayagriva (Sky-facing/upward) – bestows knowledge and wisdom"
  ],
  benefits: [
    "Shield from enemies, black magic, evil spirits",
    "Victory in legal, spiritual, and physical battles",
    "Healing from fear, disease, and negative influences",
    "Spiritual progress and mental strength"
  ],
  recitation_guidelines: "Chant during sunrise, on Tuesdays, Saturdays, or during spiritual emergencies. Recommended during Hanuman Jayanti or Navaratri.",
  verses: [
    {
      verse_number: 1,
      sanskrit: "ॐ अस्य श्रीपञ्चमुखहनुमत्कवचमन्त्रस्य ब्रह्मा ऋषिः । गायत्री छन्दः । पञ्चमुखी हनुमान् देवता । हं बीजम् । हुं शक्तिः । हनुमान् कीलकम् । मम सर्वकार्यसिद्ध्यर्थं पञ्चमुखी हनुमत्कवचपाठे विनियोगः ॥",
      english_translation: "Om. For this Panchamukhi Hanumat Kavacham, the sage is Brahma, the meter is Gayatri, deity is Panchamukhi Hanuman. The seed is 'Ham', the power is 'Hum', Hanuman is the key. It is recited for the accomplishment of all tasks.",
      explanation: "This is the invocation and assignment of divine energies for the kavacham's effect."
    },
    {
      verse_number: 2,
      sanskrit: "ॐ हनुमान् मे शिरः पातु, ललाटं केशवप्रियः । चक्षुषी पिङ्गलाक्षश्च, कर्णौ मे वायुनन्दनः ॥",
      english_translation: "May Hanuman protect my head, may the beloved of Keshava guard my forehead. Let the red-eyed one guard my eyes, and the son of Vayu guard my ears.",
      explanation: "Protects upper body parts invoking different epithets of Hanuman."
    },
    {
      verse_number: 3,
      sanskrit: "नासिकां मे सुवर्णनासः, वदनं मे महाबलः । जिव्हां विद्याधरः पातु, दन्तान् मे कपिश्रेष्ठकः ॥",
      english_translation: "May the golden-nosed Hanuman protect my nose, the mighty one my mouth. The knower of knowledge guard my tongue, and the best of monkeys my teeth.",
      explanation: "Emphasizes his power and wisdom in shielding speech and senses."
    },
    {
      verse_number: 4,
      sanskrit: "कण्ठं मे वानरेशः पातु, स्कन्धौ मे भीमरूपधारी । बाहू मे च महादेवप्रियः, हृदयं मे रामभक्तः ॥",
      english_translation: "May the Lord of monkeys protect my neck, the terrifying form my shoulders. The one dear to Shiva protect my arms, and the devotee of Rama my heart.",
      explanation: "Each limb is protected by one of Hanuman's powerful forms."
    },
    {
      verse_number: 5,
      sanskrit: "उदरं मे सिन्दूरवर्णः, पृष्ठं मे रामसेवकः । कटिं मे च लङ्कादाहकर्ता, जघनं मे महातपः ॥",
      english_translation: "May the red-hued Hanuman guard my stomach, the servant of Rama my back. The burner of Lanka guard my waist, the great ascetic my hips.",
      explanation: "Invokes specific deeds of Hanuman tied to each body part's protection."
    },
    {
      verse_number: 6,
      sanskrit: "ऊरू मे पिङ्गलनेत्रः, जानुनी मे भास्करप्रियः । जङ्घे मे च सागरोलङ्घनकर्ता, पादौ मे भीषणाकृतिः ॥",
      english_translation: "May the golden-eyed protect my thighs, the sun-beloved my knees. The ocean-leaping one protect my legs, and the fierce form guard my feet.",
      explanation: "Describes feats like ocean-crossing and sun journey as protective aspects."
    },
    {
      verse_number: 7,
      sanskrit: "पञ्चमुखः कपिलवर्णः पातु मां सर्वतो मुने । रामदूतः रक्ष मां च सर्वदा सर्वतो भुवि ॥",
      english_translation: "May the five-faced, tawny-colored Hanuman protect me from all sides. May the messenger of Rama always guard me everywhere on Earth.",
      explanation: "Core verse invoking the Panchamukhi form for omnidirectional protection."
    },
    {
      verse_number: 8,
      sanskrit: "पूर्वे हनूमतः पातु, दक्षिणे नारसिंहकः । पश्चिमे गारुडः पातु, उत्तरं वाराहमुखः ॥",
      english_translation: "In the East, may Hanuman protect; in the South, Narasimha. In the West, Garuda protect; in the North, the Varaha-faced guard me.",
      explanation: "Directional guardianship assigned to each divine face."
    },
    {
      verse_number: 9,
      sanskrit: "ऊर्ध्वं पातु हयग्रीवः, सर्वेश्वरोऽवतां मम । इति ते कथितं वत्स, सर्वरक्षाकरं परम् ॥",
      english_translation: "Above, may Hayagriva protect me. Thus, my child, is the supreme shield of all protection told to you.",
      explanation: "Final face Hayagriva protects from above, signifying wisdom and divine command."
    }
    // Note: Only 9 verses provided in the input, but total_verses is 17. 
    // If more verses were available they would be added here.
  ],
  conclusion: {
    sanskrit: "यः पठेत् प्रातरुत्थाय भक्त्या पंचमुखं स्मरेत् । सर्वशत्रुहरं वज्रकवचं तं लभेत् ध्रुवम् ॥",
    english_translation: "He who reads this after rising early and remembers Panchamukha with devotion, surely obtains a divine shield that destroys all enemies.",
    explanation: "Confirms guaranteed protection and spiritual strength through daily recitation."
  },
  attribution: "Traditional scripture (Tantric and Agamic roots), popular in South Indian Hanuman worship and among devotees of Shakti-Hanuman."
};

const VerseDisplay: React.FC<{ verse: KavachVerse; verseNumber: number }> = ({ verse, verseNumber }) => (
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

export default function PanchamukhiHanumanKavachPage() {
  const data = panchamukhiHanumanKavachData;

  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title={data.title}
        description={`A powerful ${data.total_verses}-verse hymn invoking the five faces of Hanuman for ultimate protection and spiritual empowerment.`}
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl text-primary font-serif flex items-center justify-center">
             <Layers className="mr-3 h-8 w-8 text-primary" /> 
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
            <p><strong>Deity Invoked:</strong> {data.deity_invoked}</p>
            <p><strong>Form:</strong> {data.form}</p>
            <p><strong>Total Verses:</strong> {data.total_verses} (displaying {data.verses.length} provided verses)</p>
            <div className="mt-2">
                <h4 className="font-medium text-secondary-foreground">Five Faces:</h4>
                <ul className="list-disc list-inside pl-4 text-sm text-foreground/80">
                    {data.faces_of_hanuman.map((face, index) => <li key={index}>{face}</li>)}
                </ul>
            </div>
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
