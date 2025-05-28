// src/app/mantras/hanuman-ashtak/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, BookOpenText, Sparkles, ShieldAlert, Info, ListChecks } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Hanuman Ashtak - Full Text, Meaning & Significance',
  description: "Recite the Hanuman Ashtak, eight powerful verses by Goswami Tulsidas, praising Lord Hanuman's valor, strength, and protective grace. Understand its meaning and invoke divine blessings for overcoming difficulties.",
  keywords: ['Hanuman Ashtak', 'Sankat Mochan Hanuman Ashtak', 'Tulsidas', 'Hanuman Prayer', 'Eight Verses Hanuman', 'Bajrangbali Stotra', 'Hindu Prayers for Protection', 'Hanuman Stuti'],
  alternates: {
    canonical: `${SITE_URL}/mantras/hanuman-ashtak`,
  },
  openGraph: {
    title: 'Shri Hanuman Ashtak - Full Text, Meaning & Significance',
    description: "Recite the Hanuman Ashtak by Tulsidas for protection, courage, and divine blessings from Lord Hanuman.",
    url: `${SITE_URL}/mantras/hanuman-ashtak`,
    images: [
      {
        url: `${SITE_URL}/og-hanuman-ashtak.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Hanuman Ashtak - Hymn by Tulsidas',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`], 
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Hanuman Ashtak - Full Text, Meaning & Significance',
    description: "Recite the Hanuman Ashtak by Tulsidas for protection and divine blessings.",
    images: [`${SITE_URL}/twitter-hanuman-ashtak.jpg`], 
  },
};

interface AshtakVerse {
  verse_number: number;
  hindi: string;
  sanskrit: string; 
  english_transliteration: string;
  english_translation: string;
  explanation: string;
}

const hanumanAshtakFull = {
  title: "श्री हनुमान अष्टक",
  description: "Eight verses in praise of Lord Hanuman, composed by Goswami Tulsidas, for protection and blessings.",
  verses: [
    {
      verse_number: 1,
      sanskrit: "बाल समय रबि भक्षि लियो तब, तीनहुँ लोक भयो अन्धियारो।\nताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो॥",
      hindi: "बाल समय रबि भक्षि लियो तब, तीनहुँ लोक भयो अन्धियारो।\nताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो॥",
      english_transliteration: "Bāl samay ravi bhakṣi liyo tab, tīnhūṁ lok bhayo andhiāro.\nTāhi soṁ trās bhayo jag ko, yah saṅkaṭ kāhū soṁ jāt na ṭāro॥",
      english_translation: "As a child, you swallowed the sun, casting darkness across the three worlds.\nThe world trembled in fear, as none could relieve this distress.",
      explanation: "Tulsidas recalls Hanuman’s childhood feat of swallowing the sun. This act symbolizes Hanuman's unmatched power and how he astonished the entire creation even as a child."
    },
    {
      verse_number: 2,
      sanskrit: "देवन आन करी बिनती तब, छाड़ी दिउ रवि कण्ठ उजियारो।\nको नहीं जानत है जग में कपि, संकट मोचन नाम तिहारो॥",
      hindi: "देवन आन करी बिनती तब, छाड़ी दिउ रवि कण्ठ उजियारो।\nको नहीं जानत है जग में कपि, संकट मोचन नाम तिहारो॥",
      english_transliteration: "Devan āna karī binatī tab, chhāṛī diyu ravi kaṇṭh ujiyāro.\nKo nahīṁ jānat hai jag meṁ kapi, saṅkaṭ mocan nām tihāro॥",
      english_translation: "The gods prayed and requested you to release the sun, and you did so, restoring the world's light.\nWho in the world does not know you, O Hanuman, by your name 'Sankat Mochan' (Remover of Troubles)?",
      explanation: "Hanuman is recognized by all beings as the remover of obstacles and troubles. Even the gods had to seek his help, emphasizing his divine status."
    },
    {
      verse_number: 3,
      sanskrit: "बालि की त्रास कपीस बसैं गिरि, जात महाप्रभु पंथ निहारी।\nचौकी महा मुनि साप दिया तब, चाहत सीता दिखावन पारी॥",
      hindi: "बालि की त्रास कपीस बसैं गिरि, जात महाप्रभु पंथ निहारी।\nचौकी महा मुनि साप दिया तब, चाहत सीता दिखावन पारी॥",
      english_transliteration: "Bāli kī trās kapīs basaiṁ giri, jāt mahāprabhu panth nihārī.\nChaukī mahā muni sāpa diyā tab, chāhat Sītā dikhāvan pārī॥",
      english_translation: "Due to Bali’s fear, Sugriva hid in the mountains, and the Lord (Rama) watched the path.\nThen the great sage (Rishi Matanga) cursed Bali. You desired to show Seeta’s whereabouts to Rama.",
      explanation: "This verse narrates events from the Ramayana where Hanuman steps in to help Lord Rama, breaking the fear of Bali and aiding in Seeta’s rescue."
    },
    {
      verse_number: 4,
      sanskrit: "बाण लाग्यो उर लखन के तब, जीवन हारि सुषेन बुलायो।\nलै गयौ हिमाचल गुनि सागर, तब कण्टक मोल लिन्हौं आयो॥",
      hindi: "बाण लाग्यो उर लखन के तब, जीवन हारि सुषेन बुलायो।\nलै गयौ हिमाचल गुनि सागर, तब कण्टक मोल लिन्हौं आयो॥",
      english_transliteration: "Bāṇ lāgyo ur Lakhan ke tab, jīvan hāri Suṣeṇ bulāyo.\nLai gayo Himāchal guni sāgar, tab kaṇṭak mol linhauṁ āyo॥",
      english_translation: "When Lakshmana was wounded by a fatal arrow, and the healer Sushena was summoned,\nYou brought the Himalayan mountain containing the life-saving herb, overcoming every obstacle.",
      explanation: "This heroic act of bringing the Sanjeevani herb by lifting the entire mountain highlights Hanuman’s strength and his crucial role in saving lives."
    },
    {
      verse_number: 5,
      sanskrit: "रावण युद्ध अजान कियो तब, नाग कि फाँस सबै सिर डारो।\nश्रीरघुनाथ समेत सबै दल, मोह भयो यह संकट भारी॥",
      hindi: "रावण युद्ध अजान कियो तब, नाग कि फाँस सबै सिर डारो।\nश्रीरघुनाथ समेत सबै दल, मोह भयो यह संकट भारी॥",
      english_transliteration: "Rāvaṇ yuddha ajān kiyo tab, nāg kī phāns sabai sir ḍāro.\nŚrī Raghunāth samet sabai dal, moh bhayo yah saṅkaṭ bhārī॥",
      english_translation: "During the battle with Ravana, he used deceptive tactics and ensnared everyone with serpent-nooses,\nEven Sri Rama and the entire army were trapped—such was the grave crisis.",
      explanation: "Tulsidas refers to Ravana’s use of dark magic, where only Hanuman had the power to break the spell and free everyone."
    },
    {
      verse_number: 6,
      sanskrit: "आनि खगेस तबै हनुमान जु, बन्धन काटि सुधारी सबेरे।\nरघुपति कीनिहों बहुत बड़ाई, तुम मम प्रिय भरतहि सम भाई॥",
      hindi: "आनि खगेस तबै हनुमान जु, बन्धन काटि सुधारी सबेरे।\nरघुपति कीनिहों बहुत बड़ाई, तुम मम प्रिय भरतहि सम भाई॥",
      english_transliteration: "Āni Khages tabai Hanumān ju, bandhan kāṭi sudhārī sabere.\nRaghupati kīniho bahut baṛāī, tum mam priya Bharatahi sam bhāī॥",
      english_translation: "You brought Garuda and released everyone from the bondages early in the morning.\nLord Rama praised you immensely, saying 'You are as dear to me as my brother Bharata.'",
      explanation: "This verse shows Hanuman’s devotion and prompt action. Even the divine bird Garuda acted through Hanuman's influence. Rama’s praise shows his unmatched place in the Lord's heart."
    },
    {
      verse_number: 7,
      sanskrit: "सहस बदन तुम्हरो जस गावैं, अस कहि श्रीपति कण्ठ लगायो।\nसंकट से हनुमान छुड़ावै, मन क्रम बचन ध्यान जो लायो॥",
      hindi: "सहस बदन तुम्हरो जस गावैं, अस कहि श्रीपति कण्ठ लगायो।\nसंकट से हनुमान छुड़ावै, मन क्रम बचन ध्यान जो लायो॥",
      english_transliteration: "Sahas badan tumharo jas gāvaiṁ, as kahi Śrīpati kaṇṭh lagāyo.\nSaṅkaṭ se Hanumān chuṛāvai, man kram vacan dhyān jo lāyo॥",
      english_translation: "‘A thousand mouths sing your glory,’ said Lord Rama as he embraced you.\nHanuman removes all troubles of those who remember him in thought, word, and deed.",
      explanation: "This verse assures devotees that true remembrance and surrender to Hanuman brings divine protection and deliverance from all forms of distress."
    },
    {
      verse_number: 8,
      sanskrit: "जै जै जै हनुमान गोसाईं, कृपा करहु गुरुदेव की नाईं।\nजो सत बार पाठ कर कोई, छूटहि बंदि महासुख होई॥",
      hindi: "जै जै जै हनुमान गोसाईं, कृपा करहु गुरुदेव की नाईं।\nजो सत बार पाठ कर कोई, छूटहि बंदि महासुख होई॥",
      english_transliteration: "Jai Jai Jai Hanumān Gosāīn, kṛpā karahu Gurudev kī nāīn.\nJo sat bār pāṭh kar koī, chhūṭahi bandi mahāsukh hoī॥",
      english_translation: "Victory, victory, victory to you, O Lord Hanuman! Bestow your grace like a true Guru.\nWhoever recites this Ashtak a hundred times shall be freed from bondage and attain great joy.",
      explanation: "The final verse praises Hanuman and encourages repetition of this Ashtak. It promises liberation and supreme bliss to dedicated devotees."
    }
  ],
  about: {
    author: "Goswami Tulsidas",
    theme: "Devotion, Protection, Power of Hanuman",
    compositionContext: "Tulsidas composed this Ashtak in praise of Lord Hanuman's valor, strength, and protection during times of fear and distress."
  },
  benefits: [
    "Removes fear and obstacles",
    "Bestows courage, devotion, and strength",
    "Protects from enemies and harm",
    "Invokes the powerful blessings of Lord Hanuman"
  ],
  recitationGuidelines: "Chant daily or especially on Tuesdays and Saturdays. Chant with full devotion and faith in Hanuman’s protection and power.",
  source: "Hanuman Ashtak from the devotional writings of Goswami Tulsidas, a revered saint-poet of the Bhakti movement."
};


const VerseDisplay: React.FC<{ verse: AshtakVerse; verseNumber: number }> = ({ verse, verseNumber }) => (
  <div className="mb-8 p-6 border border-border/60 rounded-xl bg-muted/40 shadow-lg transition-shadow hover:shadow-primary/20">
    <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 pb-2 border-b border-border/40">
      Verse {verseNumber}
    </h3>
    
    <div className="mb-4">
      <h4 className="font-semibold text-lg text-accent mb-1">Sanskrit/Hindi:</h4>
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

export default function HanumanAshtakPage() {
  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title={hanumanAshtakFull.title}
        description={hanumanAshtakFull.description}
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl text-primary font-serif">॥ {hanumanAshtakFull.title} ॥</CardTitle>
          <CardDescription className="text-muted-foreground mt-1 text-sm sm:text-base">
            {hanumanAshtakFull.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10 p-4 sm:p-6 md:p-8">
          {hanumanAshtakFull.verses.map((verse) => (
            <VerseDisplay key={verse.verse_number} verse={verse} verseNumber={verse.verse_number} />
          ))}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <SectionCard title="About the Hanuman Ashtak" icon={<Info />}>
            <p><strong>Author:</strong> {hanumanAshtakFull.about.author}</p>
            <p><strong>Theme:</strong> {hanumanAshtakFull.about.theme}</p>
            <p><strong>Composition Context:</strong> {hanumanAshtakFull.about.compositionContext}</p>
        </SectionCard>

        <SectionCard title="Benefits of Recitation" icon={<Sparkles />}>
            <ul className="list-disc list-inside space-y-1 pl-4">
                {hanumanAshtakFull.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
        </SectionCard>
      </div>
      
      <SectionCard title="Recitation Guidelines & Source" icon={<BookOpenText />} className="max-w-3xl mx-auto">
          <p><strong>Recitation Guidelines:</strong> {hanumanAshtakFull.recitationGuidelines}</p>
          <p className="mt-3"><strong>Source:</strong> {hanumanAshtakFull.source}</p>
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
