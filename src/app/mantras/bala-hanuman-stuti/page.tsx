// src/app/mantras/bala-hanuman-stuti/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, BookOpenText, Sparkles, ShieldAlert, Info, ListChecks, User, Languages, FileText, Smile } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Bala Hanuman Stuti - Hymn to Child Hanuman',
  description: "Recite the Bala Hanuman Stuti, a beautiful hymn praising the child form of Lord Hanuman. Understand its meaning and invoke blessings for children and devotees seeking divine protection and purity.",
  keywords: ['Bala Hanuman Stuti', 'Child Hanuman Prayer', 'Hanuman Stuti for Children', 'Sanskrit Hymns Hanuman', 'Hindu Prayers for Kids', 'Bal Hanuman', 'Infant Hanuman'],
  alternates: {
    canonical: `${SITE_URL}/mantras/bala-hanuman-stuti`,
  },
  openGraph: {
    title: 'Bala Hanuman Stuti - Hymn to Child Hanuman',
    description: "Recite the Bala Hanuman Stuti for blessings of child Hanuman, seeking purity, courage, and protection.",
    url: `${SITE_URL}/mantras/bala-hanuman-stuti`,
    images: [
      {
        url: `${SITE_URL}/og-bala-hanuman-stuti.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Bala Hanuman Stuti - Hymn to Child Hanuman',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bala Hanuman Stuti - Hymn to Child Hanuman',
    description: "Recite the Bala Hanuman Stuti for blessings of child Hanuman.",
    images: [`${SITE_URL}/twitter-bala-hanuman-stuti.jpg`], 
  },
};

interface StutiVerse {
  verse_number: number;
  sanskrit: string;
  english_transliteration: string;
  english_translation: string;
  explanation: string;
}

const balaHanumanStutiFull = {
  title: "बाल हनुमान स्तुति",
  language: ["Sanskrit"],
  form: "Stuti",
  theme: "Devotion to child-form of Hanuman, divine playfulness, strength and protection",
  total_verses: 9,
  benefits: [
    "Invokes the blessings and protection of child Hanuman",
    "Removes fear, anxiety, and illness in children",
    "Promotes purity, courage, and devotion",
    "Ideal for recitation by and for children"
  ],
  recitation_guidelines: "Can be chanted in the morning or evening, especially on Tuesdays and Saturdays or during Hanuman Jayanti. Suitable for children.",
  verses: [
    {
      verse_number: 1,
      sanskrit: "बालं मुकुन्दाभरणं, बालार्कसमतेजसम्।\nबालप्रगल्पनारम्यं, बालं हनुमतं भजे॥",
      english_transliteration: "Bālaṁ Mukundābharaṇaṁ, bālārkasamatejasam |\nBālapragalpanāramyaṁ, bālaṁ Hanumataṁ bhaje ||",
      english_translation: "I worship the child Hanuman, who is the ornament of Mukunda (Lord Vishnu), whose brilliance is like the rising sun, and whose sweet childish speech delights the heart.",
      explanation: "Describes the enchanting and radiant form of child Hanuman, a source of divine joy and energy."
    },
    {
      verse_number: 2,
      sanskrit: "बालं स्वर्णविभूषितं, किञ्चित्काञ्चनकिङ्किणीम्।\nबालैर्मन्दगमैर्युक्तं, बालं हनुमतं भजे॥",
      english_transliteration: "Bālaṁ svarṇavibhūṣitaṁ, kiñcit-kāñcanakiṅkiṇīm |\nBālairmandagamairyuktaṁ, bālaṁ Hanumataṁ bhaje ||",
      english_translation: "I worship child Hanuman adorned with golden ornaments and tiny anklets, moving slowly in a charming, childlike manner.",
      explanation: "Presents a delightful image of baby Hanuman with ornaments, captivating in his innocence."
    },
    {
      verse_number: 3,
      sanskrit: "बालं लीलाकलायुक्तं, बालार्कायुतविग्रहम्।\nबालं मुकुन्दनिलयं, बालं हनुमतं भजे॥",
      english_transliteration: "Bālaṁ līlākalāyuktaṁ, bālārkāyutavigraham |\nBālaṁ Mukundanilayaṁ, bālaṁ Hanumataṁ bhaje ||",
      english_translation: "I worship child Hanuman, full of divine playfulness, radiating like the morning sun, and the abode of Mukunda’s (Vishnu’s) blessings.",
      explanation: "Shows Hanuman as a playful yet powerful child, blessed by Lord Vishnu."
    },
    {
      verse_number: 4,
      sanskrit: "बालं ब्रह्मस्वरूपं तं, बालं भक्तार्तिभंजनम्।\nबालं ज्ञानस्वरूपं तं, बालं हनुमतं भजे॥",
      english_transliteration: "Bālaṁ brahmasvarūpaṁ taṁ, bālaṁ bhaktārtibhañjanam |\nBālaṁ jñānasvarūpaṁ taṁ, bālaṁ Hanumataṁ bhaje ||",
      english_translation: "I worship the child Hanuman who is the embodiment of Brahman, the remover of devotees' suffering, and the very form of knowledge.",
      explanation: "Glorifies Hanuman’s spiritual essence even in childhood."
    },
    {
      verse_number: 5,
      sanskrit: "बालं दुर्वारशक्तिं तं, बालं विद्यागुणार्णवम्।\nबालं वायुसुतं देवं, बालं हनुमतं भजे॥",
      english_transliteration: "Bālaṁ durvāraśaktiṁ taṁ, bālaṁ vidyāguṇārṇavam |\nBālaṁ vāyusutaṁ devaṁ, bālaṁ Hanumataṁ bhaje ||",
      english_translation: "I worship child Hanuman, the son of Vayu, possessing irresistible strength and an ocean of knowledge and virtues.",
      explanation: "Declares the divine and unmatched strength of Bala Hanuman."
    },
    {
      verse_number: 6,
      sanskrit: "बालं सर्वगुणश्रेष्ठं, बालं ज्ञाननिधिं हरिम्।\nबालं नानाविधाकारं, बालं हनुमतं भजे॥",
      english_transliteration: "Bālaṁ sarvaguṇaśreṣṭhaṁ, bālaṁ jñānanidhiṁ harim |\nBālaṁ nānāvidhākāraṁ, bālaṁ Hanumataṁ bhaje ||",
      english_translation: "I worship child Hanuman, rich in all noble virtues, a treasure of wisdom, and assuming various divine forms.",
      explanation: "Attributes multiple divine qualities and appearances to Hanuman, even in childhood."
    },
    {
      verse_number: 7,
      sanskrit: "बालं सङ्कटहारिणं, बालं शोकविनाशनम्।\nबालं भक्तिपरं देवं, बालं हनुमतं भजे॥",
      english_transliteration: "Bālaṁ saṅkaṭahāriṇaṁ, bālaṁ śokavināśanam |\nBālaṁ bhaktiparaṁ devaṁ, bālaṁ Hanumataṁ bhaje ||",
      english_translation: "I worship child Hanuman, the remover of calamities, destroyer of sorrow, and a god devoted to devotion.",
      explanation: "Praises Bala Hanuman’s protective nature and his devotion to his devotees."
    },
    {
      verse_number: 8,
      sanskrit: "बालं भक्तार्तिनाशं तं, बालं दीनाभयप्रदम्।\nबालं ब्रह्माण्डभूतं तं, बालं हनुमतं भजे॥",
      english_transliteration: "Bālaṁ bhaktārtināśaṁ taṁ, bālaṁ dīnābhayapradam |\nBālaṁ brahmāṇḍabhūtaṁ taṁ, bālaṁ Hanumataṁ bhaje ||",
      english_translation: "I worship child Hanuman, the destroyer of devotees' suffering, the granter of fearlessness to the meek, who encompasses the universe within himself.",
      explanation: "Describes the cosmic power of Hanuman even in his small child form."
    },
    {
      verse_number: 9,
      sanskrit: "एषा स्तुतिः पठेद्यस्तु, भक्त्या बालं हनूमतम्।\nसर्वसिद्धिं स लभते, नात्र कार्यविचारणा॥",
      english_transliteration: "Eṣā stutiḥ paṭhedyastu, bhaktyā bālaṁ Hanūmatam |\nSarvasiddhiṁ sa labhate, nātra kāryavicāraṇā ||",
      english_translation: "He who recites this hymn to child Hanuman with devotion attains all accomplishments—there is no doubt about it.",
      explanation: "The phalaśruti (result) verse promises fulfillment of wishes and spiritual success."
    }
  ],
  source: "Traditional Sanskrit Composition (Bāla Hanumān Stuti), recited in many Hanuman temples and devotional settings."
};


const VerseDisplay: React.FC<{ verse: StutiVerse; verseNumber: number }> = ({ verse, verseNumber }) => (
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
      <h4 className="font-semibold text-lg text-accent mb-1">English Transliteration:</h4>
      <p className="text-foreground/85 italic text-sm sm:text-base">{verse.english_transliteration}</p>
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

export default function BalaHanumanStutiPage() {
  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title={balaHanumanStutiFull.title}
        description={`A beautiful ${balaHanumanStutiFull.total_verses}-verse hymn praising the child form of Lord Hanuman for blessings, protection, and devotion.`}
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl text-primary font-serif flex items-center justify-center">
            <Smile className="mr-3 h-8 w-8 text-primary" /> 
            ॥ {balaHanumanStutiFull.title} ॥
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-1 text-sm sm:text-base">
           {balaHanumanStutiFull.theme}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10 p-4 sm:p-6 md:p-8">
          {balaHanumanStutiFull.verses.map((verse) => (
            <VerseDisplay key={verse.verse_number} verse={verse} verseNumber={verse.verse_number} />
          ))}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <SectionCard title="About the Stuti" icon={<Info />}>
            <p><strong>Form:</strong> {balaHanumanStutiFull.form}</p>
            <p><strong>Languages:</strong> {balaHanumanStutiFull.language.join(', ')}</p>
            <p><strong>Total Verses:</strong> {balaHanumanStutiFull.total_verses}</p>
            <p><strong>Theme:</strong> {balaHanumanStutiFull.theme}</p>
        </SectionCard>

        <SectionCard title="Benefits of Recitation" icon={<Sparkles />}>
            <ul className="list-disc list-inside space-y-1 pl-4">
                {balaHanumanStutiFull.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
        </SectionCard>
      </div>
      
      <SectionCard title="Recitation Guidelines & Source" icon={<BookOpenText />} className="max-w-3xl mx-auto">
          <p><strong>Recitation Guidelines:</strong> {balaHanumanStutiFull.recitation_guidelines}</p>
          <p className="mt-3"><strong>Source:</strong> {balaHanumanStutiFull.source}</p>
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
