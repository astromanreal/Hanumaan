// src/app/mantras/hanuman-ashtottara-shatanamavali/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ListChecks, Sparkles, ShieldAlert, Info } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Hanuman Ashtottara Shatanamavali - 108 Sacred Names',
  description: "Recite the Hanuman Ashtottara Shatanamavali, the 108 divine names of Lord Hanuman, for blessings, protection, and spiritual upliftment. Full list of names included for devotional practice.",
  keywords: ['Hanuman Ashtottara Shatanamavali', '108 Names of Hanuman', 'Hanuman Stotram', 'Hanuman Namavali', 'Sacred Names of Hanuman', 'Hindu Chants', 'Anjaneya Names', 'Maruti Names', 'Ashtottara'],
  alternates: {
    canonical: `${SITE_URL}/mantras/hanuman-ashtottara-shatanamavali`,
  },
  openGraph: {
    title: 'Shri Hanuman Ashtottara Shatanamavali - 108 Sacred Names',
    description: "Recite the 108 divine names of Lord Hanuman for blessings, protection, and profound spiritual connection.",
    url: `${SITE_URL}/mantras/hanuman-ashtottara-shatanamavali`,
    images: [
      {
        url: `${SITE_URL}/og-hanuman-ashtottara.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Hanuman Ashtottara Shatanamavali - 108 Names',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Hanuman Ashtottara Shatanamavali - 108 Sacred Names',
    description: "Recite the 108 divine names of Lord Hanuman for blessings and protection.",
    images: [`${SITE_URL}/twitter-hanuman-ashtottara.jpg`], 
  },
};

const hanumanAshtottaraData = {
  title: "Hanuman Ashtottara Shatanamavali",
  language: ["Sanskrit"],
  type: "Ashtottara Shatanamavali",
  deity: "Lord Hanuman",
  count: 108,
  introduction: "The Hanuman Ashtottara Shatanamavali is a sacred hymn comprising 108 names of Lord Hanuman. Each name glorifies a specific divine attribute, quality, or heroic deed of Hanuman. Chanting these names with devotion is believed to invoke his powerful blessings, grant protection from adversities, bestow strength, and lead to spiritual upliftment.",
  benefits: [
    "Invokes the blessings and protection of Lord Hanuman.",
    "Removes obstacles, fears, and negative energies.",
    "Bestows courage, strength, wisdom, and good health.",
    "Fulfills wishes and aids in spiritual progress.",
    "Deepens devotion and connection with Lord Hanuman."
  ],
  recitation_guidelines: "Can be chanted daily, especially on Tuesdays and Saturdays, or during Hanuman Jayanti and other auspicious occasions. It is often recited after regular puja or as a standalone devotional practice.",
  names: [
    "ॐ हनुमते नमः", "ॐ अञ्जनासुताय नमः", "ॐ वायुपुत्राय नमः", "ॐ महाबलाय नमः", "ॐ रामेष्ठाय नमः",
    "ॐ फल्गुनसखाय नमः", "ॐ पिङ्गाक्षाय नमः", "ॐ अमितविक्रमाय नमः", "ॐ उदधिक्रमणाय नमः", "ॐ सीताशोकविनाशकाय नमः",
    "ॐ लक्ष्मणप्राणदात्रे नमः", "ॐ दशग्रीवदर्पहन्त्रे नमः", "ॐ वानराय नमः", "ॐ केसरिसूताय नमः", "ॐ सीतादेविमुद्राप्रदायकाय नमः",
    "ॐ अशोकवनकाचारिणे नमः", "ॐ सर्वमायाविभञ्जनाय नमः", "ॐ परविद्यानिपुणाय नमः", "ॐ सर्वबन्धविमोचनाय नमः", "ॐ रक्षोविध्वंसकारिणे नमः",
    "ॐ परशौर्यविनाशकाय नमः", "ॐ परमान्तरायशान्त्रे नमः", "ॐ परसत्त्वपराक्रमाय नमः", "ॐ शास्त्रज्ञाय नमः", "ॐ शुभलक्षणाय नमः",
    "ॐ रामभक्ताय नमः", "ॐ सततंरामकथाप्रियाय नमः", "ॐ पिञ्गलाय नमः", "ॐ अमितविक्रमाय नमः", "ॐ उदाधिक्रमणाय नमः",
    "ॐ सीताशोकविनाशनाय नमः", "ॐ लक्ष्मणप्राणदाय नमः", "ॐ वज्रकायाय नमः", "ॐ महातेजसे नमः", "ॐ महाद्युतये नमः",
    "ॐ महाबलाय नमः", "ॐ महाबुद्धये नमः", "ॐ महावीर्याय नमः", "ॐ महाशक्तये नमः", "ॐ महाद्युतये नमः",
    "ॐ अनिर्देश्यवपुषे नमः", "ॐ शीघ्रगमिने नमः", "ॐ रामकार्यधुरन्धराय नमः", "ॐ सर्पदंष्ट्राकरालाय नमः", "ॐ नखदंष्ट्रायुधाय नमः",
    "ॐ सुरारिघ्नाय नमः", "ॐ रामदूताय नमः", "ॐ प्रतापवन्ताय नमः", "ॐ वानराय नमः", "ॐ केसरिसुताय नमः",
    "ॐ सीताशोकनाशनाय नमः", "ॐ अञ्जनागर्भसम्भूताय नमः", "ॐ बालार्कसमनाय नमः", "ॐ विद्युत्प्रभाय नमः", "ॐ चञ्चलाय नमः",
    "ॐ सर्वगुणसम्पन्नाय नमः", "ॐ रामाय नमः", "ॐ रामानुजाय नमः", "ॐ सीतान्वेषणतत्पराय नमः", "ॐ वनेन्द्रयत्नशीलाय नमः",
    "ॐ सीतासंहितवाचकाय नमः", "ॐ पारायणप्रियाय नमः", "ॐ भक्तवत्सलाय नमः", "ॐ संजीवितप्रदाय नमः", "ॐ लङ्काविध्वंसकारकाय नमः",
    "ॐ सर्वमन्त्रस्वरूपाय नमः", "ॐ सर्वतन्त्रस्वरूपिणे नमः", "ॐ सर्वयन्त्रात्मकाय नमः", "ॐ कपिश्रेष्ठाय नमः", "ॐ महाकायाय नमः",
    "ॐ सर्वरोगहराय नमः", "ॐ प्रमत्तदैत्यान्दकाय नमः", "ॐ रामचूडामणिप्रदायकाय नमः", "ॐ कामरूपिणे नमः", "ॐ पिङ्गलाक्षाय नमः",
    "ॐ वातात्मजाय नमः", "ॐ शङ्करात्मजाय नमः", "ॐ महाप्रज्ञाय नमः", "ॐ रामचन्द्रपदासक्ताय नमः", "ॐ सततं सेवकाय नमः",
    "ॐ सीतासंरक्षणकर्त्रे नमः", "ॐ भक्तसंरक्षणाय नमः", "ॐ श्रेयानाय नमः", "ॐ निधानाय नमः", "ॐ वाग्मिने नमः",
    "ॐ शरणागतवत्सलाय नमः", "ॐ प्रमेयात्मने नमः", "ॐ परमात्मने नमः", "ॐ परमार्थतत्त्वविचक्षणाय नमः", "ॐ सज्जनप्रियाय नमः",
    "ॐ रामदासाय नमः", "ॐ विश्वरूपिणे नमः", "ॐ जगदेकहितैषिणे नमः", "ॐ गुणग्राहीण नमः", "ॐ गुणभद्राय नमः",
    "ॐ गुणमन्दिराय नमः", "ॐ तेजसे नमः", "ॐ तेजस्कराय नमः", "ॐ धर्मिने नमः", "ॐ सत्यसन्धाय नमः",
    "ॐ दयानिधये नमः", "ॐ भक्तप्रियाय नमः", "ॐ भक्तपारायणाय नमः", "ॐ अनघाय नमः", "ॐ कुमारब्रह्मचारिणे नमः",
    "ॐ तपस्विने नमः", "ॐ सत्यधर्मरताय नमः", "ॐ हरिमार्गप्रदर्शकाय नमः", "ॐ दानवीराय नमः", "ॐ महाकर्मणे नमः",
    "ॐ महोत्साहाय नमः", "ॐ महाभलाय नमः", "ॐ महाबुद्धये नमः", "ॐ महावीर्याय नमः", "ॐ महाद्युतये नमः",
    "ॐ महाभक्ताय नमः", "ॐ रामप्रियाय नमः", "ॐ सत्त्वसंपन्नाय नमः", "ॐ सर्वलोकप्रिये नमः"
  ],
  attribution: "Traditional Hindu scriptures and oral traditions."
};


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


export default function HanumanAshtottaraPage() {
  const data = hanumanAshtottaraData;

  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title={`श्री ${data.title}`}
        description={`The ${data.count} sacred names of ${data.deity}, chanted for divine blessings and protection.`}
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl sm:text-4xl text-primary font-serif flex items-center justify-center">
             <ListChecks className="mr-3 h-8 w-8 text-primary" /> 
            ॥ श्री {data.title} ॥
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-1 text-sm sm:text-base">
            {data.type} - 108 Names of {data.deity}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 md:p-8">
          <p className="text-lg text-foreground/85 leading-relaxed mb-8 text-center italic">
            {data.introduction}
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4">
            {data.names.map((name, index) => (
              <div key={index} className="text-sm font-serif text-foreground/90 p-2 bg-muted/30 rounded-md shadow-sm hover:bg-muted/50 transition-colors text-center">
                {name}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <SectionCard title="Benefits of Recitation" icon={<Sparkles />}>
            <ul className="list-disc list-inside space-y-1 pl-4">
                {data.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
        </SectionCard>
        <SectionCard title="Recitation Guidelines" icon={<Info />}>
            <p>{data.recitation_guidelines}</p>
            <p className="mt-3 text-sm"><strong>Attribution:</strong> {data.attribution}</p>
        </SectionCard>
      </div>
      
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
