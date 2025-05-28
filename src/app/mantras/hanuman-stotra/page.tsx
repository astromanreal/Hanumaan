// src/app/mantras/hanuman-stotra/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, BookOpenText, Sparkles, ShieldAlert, Info, ListChecks, User, Languages, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Hanuman Stotra (Samarth Ramdas) - Full Text & Meaning',
  description: "Recite the powerful Hanuman Stotra composed by Samarth Ramdas. Understand its meaning and invoke Hanuman's blessings for strength, devotion, and protection from all adversities.",
  keywords: ['Hanuman Stotra', 'Samarth Ramdas', 'Maruti Stotra', 'Hanuman Prayer', 'Hindu Devotional Hymn', 'Hanuman Mantras', 'Strength Mantra', 'Bhakti Stotra'],
  alternates: {
    canonical: `${SITE_URL}/mantras/hanuman-stotra`,
  },
  openGraph: {
    title: 'Shri Hanuman Stotra (Samarth Ramdas) - Full Text & Meaning',
    description: "Recite the Hanuman Stotra by Samarth Ramdas for strength, devotion, and protection. Full text and detailed explanations provided.",
    url: `${SITE_URL}/mantras/hanuman-stotra`,
    images: [
      {
        url: `${SITE_URL}/og-hanuman-stotra.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Hanuman Stotra by Samarth Ramdas - Hymn of Power',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Hanuman Stotra (Samarth Ramdas) - Full Text & Meaning',
    description: "Recite the Hanuman Stotra by Samarth Ramdas for strength and devotion.",
    images: [`${SITE_URL}/twitter-hanuman-stotra.jpg`], 
  },
};

interface StotraVerse {
  verse_number: number;
  sanskrit: string;
  english_transliteration: string;
  english_translation: string;
  explanation: string;
}

const hanumanStotraFull = {
  title: "श्री हनुमान स्तोत्र (समर्थ रामदास कृत)",
  author: "Samarth Ramdas",
  language: ["Marathi", "Sanskrit"],
  total_verses: 12,
  theme: "Devotion, Protection, Valor of Hanuman",
  composition_context: "Samarth Ramdas composed this stotra to inspire strength, devotion, and self-discipline. It is widely recited in Maharashtra and other parts of India to gain Hanuman's blessings.",
  benefits: [
    "Gives strength and confidence",
    "Removes fear and weaknesses",
    "Destroys negativity and evil influences",
    "Grants devotion, courage, and discipline"
  ],
  recitation_guidelines: "Chant daily with faith, preferably in the morning or during Hanuman worship on Tuesdays and Saturdays.",
  verses: [
    {
      verse_number: 1,
      sanskrit: "मनोजवं मारुततुल्यवेगं, जितेन्द्रियं बुद्धिमतां वरिष्ठम्।\nवातात्मजं वानरयूथमुख्यं, श्रीरामदूतं शरणं प्रपद्ये॥",
      english_transliteration: "Manojavaṁ mārutatulya-vegaṁ, jitendriyaṁ buddhimatāṁ variṣṭham |\nVātātmajaṁ vānarayūthamukhyaṁ, Śrīrāmadūtaṁ śaraṇaṁ prapadye ||",
      english_translation: "I surrender to Hanuman, the son of the wind-god, who is swift as the mind and wind, master of the senses, supreme among the intelligent, leader of the monkey army, and the divine messenger of Lord Rama.",
      explanation: "The stotra begins by bowing to Hanuman’s powerful attributes—speed, wisdom, self-control, leadership, and devotion to Rama."
    },
    {
      verse_number: 2,
      sanskrit: "अनजाननन्दनं वीरं, जानकीशोकनाशनम्।\nकपीशमक्षहन्तारं, वन्दे लङ्काभयङ्करम्॥",
      english_transliteration: "Anjanānandanaṁ vīraṁ, Jānakī-śoka-nāśanam |\nKapīśam-akṣa-hantāraṁ, vande Laṅkā-bhayaṅkaram ||",
      english_translation: "I bow to the brave son of Anjani, who destroyed Sita's sorrow, the lord of monkeys, the slayer of Aksha, and the terror of Lanka.",
      explanation: "This verse highlights Hanuman's key acts in Lanka, such as eliminating demons and being a source of hope for Sita."
    },
    {
      verse_number: 3,
      sanskrit: "महावीर विक्रांत, रणधीर सुजानः।\nलंकामर्दन कुशलो, दुष्टदलन करालः॥",
      english_transliteration: "Mahāvīra vikrānta, raṇadhīra sujānaḥ |\nLaṅkāmardana kuśalo, duṣṭa-dalana karālaḥ ||",
      english_translation: "The great, courageous warrior, bold in battle and wise; skilled in destroying Lanka and terrifying to the wicked.",
      explanation: "A depiction of Hanuman’s military prowess and his uncompromising stand against evil forces."
    },
    {
      verse_number: 4,
      sanskrit: "रामेष्टं प्रियसखं, पितृवत्सलमान्यं।\nसर्वलक्षणसम्पन्नं, हनुमन्तं नमामि॥",
      english_transliteration: "Rāmeṣṭaṁ priyasakhaṁ, pitṛvatsala-mānyaṁ |\nSarvalakṣaṇa-sampannaṁ, Hanumantaṁ namāmi ||",
      english_translation: "I bow to Hanuman, dear to Rama, his beloved friend, respectful like a son to elders, and the embodiment of all noble traits.",
      explanation: "Emphasizes Hanuman’s humility, noble behavior, and deep relationships based on love and dharma."
    },
    {
      verse_number: 5,
      sanskrit: "विद्यावन्तं बलवन्तं, कवीशं करुणानिधिम्।\nलोकपालं सुरश्रेष्ठं, वन्दे वानरभूपतिम्॥",
      english_transliteration: "Vidyāvantaṁ balavantaṁ, kavīśaṁ karuṇānidhim |\nLokapālaṁ suraśreṣṭhaṁ, vande vānarabhūpatim ||",
      english_translation: "I salute the knowledgeable and strong one, king of poets, ocean of compassion, protector of worlds, and foremost among celestials—the monkey king.",
      explanation: "Glorifies Hanuman as not just physically mighty but also as spiritually elevated and poetically wise."
    },
    {
      verse_number: 6,
      sanskrit: "प्रह्लादादीन समरी, भक्तानां च बलीयसः।\nनित्यानन्दं महाकायं, सुग्रीवप्रियकारकः॥",
      english_transliteration: "Prahlādādīna samarī, bhaktānāṁ ca balīyasaḥ |\nNityānandaṁ mahākāyaṁ, Sugrīvapriyakārakaḥ ||",
      english_translation: "Stronger than even devotees like Prahlada, ever-blissful, huge-bodied Hanuman, who always helps Sugriva.",
      explanation: "This verse compares Hanuman’s devotion and strength with other great devotees and affirms his constant joy and loyalty."
    },
    {
      verse_number: 7,
      sanskrit: "शिवप्रेमभक्तिरूपं, श्रीरामाङ्घ्रिसेवकं।\nहनुमन्तं महोत्साहं, सर्वदुःखहरं परम्॥",
      english_transliteration: "Śivaprema-bhaktirūpaṁ, Śrīrāmāṅghri-sevakaṁ |\nHanumantaṁ mahotsāhaṁ, sarvaduḥkha-haraṁ param ||",
      english_translation: "Hanuman, the form of Shiva's love and devotion, who constantly serves Rama’s feet, full of enthusiasm, the supreme remover of all sorrows.",
      explanation: "Describes Hanuman as a divine manifestation of love, always serving and helping devotees in distress."
    },
    {
      verse_number: 8,
      sanskrit: "जयत्यति बलो रामो, लक्ष्मणश्च महाबलः।\nराजा जयति सुग्रीवो, राघवेणाभिपालितः॥",
      english_transliteration: "Jayatyati balo Rāmo, Lakṣmaṇaśca mahābalaḥ |\nRājā jayati Sugrīvo, Rāghaveṇābhipālitaḥ ||",
      english_translation: "Victory to mighty Rama! Victory to strong Lakshmana! Victory to King Sugriva, protected by Lord Rama!",
      explanation: "This verse is a proclamation of victory, emphasizing Hanuman’s alliance with Rama and his role in supporting Sugriva’s kingship."
    },
    {
      verse_number: 9,
      sanskrit: "दासोऽहं कोसलेन्द्रस्य, रामस्याक्लिष्टकर्मणः।\nहनुमान् शत्रुसैन्यघ्नो, भीमः शत्रुनिषूदनः॥",
      english_transliteration: "Dāso’haṁ Kosalendrasya, Rāmasyākliṣṭakarmaṇaḥ |\nHanumān śatrusainyaghno, bhīmaḥ śatruniṣūdanaḥ ||",
      english_translation: "I am the humble servant of Rama, the king of Kosala, whose actions are flawless. I am Hanuman, the destroyer of enemy armies, fierce and devastating to foes.",
      explanation: "Shows Hanuman’s deep humility and fierce protection of righteousness by crushing all threats to dharma."
    },
    {
      verse_number: 10,
      sanskrit: "अञ्जनीगर्भसंभूतं, कुमारं ब्रह्मचारिणम्।\nदिव्यास्त्रशस्त्रसंपन्नं, हनुमन्तं नमाम्यहम्॥",
      english_transliteration: "Añjanīgarbha-sambhūtaṁ, kumāraṁ brahmacāriṇam |\nDivyāstra-śastra-saṁpannaṁ, Hanumantaṁ namāmyaham ||",
      english_translation: "Born of Anjani, a divine celibate youth, equipped with celestial weapons—I bow to Hanuman.",
      explanation: "Describes Hanuman as an embodiment of celibacy, purity, and divine strength."
    },
    {
      verse_number: 11,
      sanskrit: "रामदूतं महावीर्यं, रामभक्तं भयापहम्।\nलोकप्रियं रामसखं, भक्तानां प्रेमदायकम्॥",
      english_transliteration: "Rāmadūtaṁ mahāvīryaṁ, Rāmabhaktaṁ bhayāpaham |\nLokapriyaṁ Rāmasakhaṁ, bhaktānāṁ premadāyakam ||",
      english_translation: "The mighty messenger of Rama, remover of fear, beloved of all, Rama’s friend and giver of love to devotees.",
      explanation: "Highlights Hanuman’s affectionate nature and his deep relationship with both Lord Rama and his devotees."
    },
    {
      verse_number: 12,
      sanskrit: "स्तोत्रं हनुमतः पुण्यं, यः पठेत्सततं नरः।\nसर्वपापं विनिर्मुक्तो, रुद्रलोकं स गच्छति॥",
      english_transliteration: "Stotraṁ Hanumataḥ puṇyaṁ, yaḥ paṭhetsatataṁ naraḥ |\nSarvapāpaṁ vinirmukto, Rudralokaṁ sa gacchati ||",
      english_translation: "Whoever reads this sacred Hanuman Stotra regularly will be freed from all sins and will attain the abode of Lord Rudra (Shiva).",
      explanation: "The concluding verse promises great spiritual merit and liberation for regular recitation."
    }
  ],
  source: "Hanuman Stotra by Samarth Ramdas, a revered saint and spiritual mentor of Shivaji Maharaj."
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

export default function HanumanStotraPage() {
  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title={hanumanStotraFull.title}
        description={`A powerful 12-verse hymn composed by Samarth Ramdas, praising Lord Hanuman's valor, devotion, and protective grace.`}
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl text-primary font-serif">॥ {hanumanStotraFull.title} ॥</CardTitle>
          <CardDescription className="text-muted-foreground mt-1 text-sm sm:text-base">
            By {hanumanStotraFull.author}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10 p-4 sm:p-6 md:p-8">
          {hanumanStotraFull.verses.map((verse) => (
            <VerseDisplay key={verse.verse_number} verse={verse} verseNumber={verse.verse_number} />
          ))}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <SectionCard title="About the Stotra" icon={<Info />}>
            <p><strong>Author:</strong> {hanumanStotraFull.author}</p>
            <p><strong>Languages:</strong> {hanumanStotraFull.language.join(', ')}</p>
            <p><strong>Total Verses:</strong> {hanumanStotraFull.total_verses}</p>
            <p><strong>Theme:</strong> {hanumanStotraFull.theme}</p>
            <p><strong>Composition Context:</strong> {hanumanStotraFull.composition_context}</p>
        </SectionCard>

        <SectionCard title="Benefits of Recitation" icon={<Sparkles />}>
            <ul className="list-disc list-inside space-y-1 pl-4">
                {hanumanStotraFull.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
        </SectionCard>
      </div>
      
      <SectionCard title="Recitation Guidelines & Source" icon={<BookOpenText />} className="max-w-3xl mx-auto">
          <p><strong>Recitation Guidelines:</strong> {hanumanStotraFull.recitation_guidelines}</p>
          <p className="mt-3"><strong>Source:</strong> {hanumanStotraFull.source}</p>
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
