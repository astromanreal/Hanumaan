// src/app/mantras/bajrang-baan/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Bajrang Baan - Powerful Hymn for Protection',
  description: "Recite the Bajrang Baan, a potent hymn dedicated to Lord Hanuman, for overcoming obstacles, dispelling fears, and seeking divine protection. Full text and meaning provided.",
  keywords: ['Bajrang Baan', 'Hanuman Stotra', 'Powerful Hanuman Mantra', 'Protection Hymn', 'Obstacle Removal Mantra', 'Hindu Prayers', 'Anjaneya Stuti', 'Tulsidas', 'Hanuman Arrow'],
  alternates: {
    canonical: `${SITE_URL}/mantras/bajrang-baan`,
  },
  openGraph: {
    title: 'Shri Bajrang Baan - Powerful Hymn for Protection',
    description: "Recite the Bajrang Baan for overcoming obstacles and seeking divine protection from Lord Hanuman. Full text and meanings available.",
    url: `${SITE_URL}/mantras/bajrang-baan`,
    images: [
      {
        url: `${SITE_URL}/og-bajrang-baan.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Bajrang Baan - Arrow of Hanuman',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`], // Assuming a general author page
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Bajrang Baan - Powerful Hymn for Protection',
    description: "Recite the Bajrang Baan for overcoming obstacles and seeking divine protection from Lord Hanuman.",
    images: [`${SITE_URL}/twitter-bajrang-baan.jpg`], 
  },
};

const bajrangBaanFull = {
  openingDoha: {
    sanskrit: `निश्चय प्रेम प्रतीति ते, विनय करैं सनमान ।
तेहि के कारज सकल शुभ, सिद्ध करें हनुमान ॥`,
    hindi: `जो निश्चय प्रेम और विश्वास से सम्मानपूर्वक विनय करते हैं, हनुमानजी उनके सभी शुभ कार्यों को सिद्ध करते हैं।`,
    english: `Whoever, with true love and faith, respectfully makes a plea, Hanuman fulfills all their auspicious tasks.`
  },
  chaupais: `जय हनुमन्त संत हितकारी ।
सुन लीजै प्रभु अरज हमारी ।।

जन के काज बिलम्ब न कीजै ।
आतुर दौरि महासुख दीजै ।।

जैसे कूदी सिन्धु महि पारा ।
सुरसा बदन पैठी विस्तारा ।।

आगे जाय लंकिनी रोका ।
मारेहु लात गई सुर लोका ।।

जाय विभीषण को सुख दीन्हा ।
सीता निरखि परम-पद लीना ।।

बाग उजारि सिन्धु मह बोरा ।
अति आतुर जमकातर तोरा ।।

अक्षय कुमार मारि संहारा ।
लूम लपेटि लंक को जारा ।।

लाह समान लंक जरि गई ।
जय-जय धुनि सुरपुर में भई ।।

अब बिलम्ब केहि कारन स्वामी ।
कृपा करहु उर अन्तर्यामी ।।

जय जय लखन प्रान के दाता ।
आतुर होई दु:ख करहु निपाता ।।

जै गिरिधर जै जै सुख सागर ।
सुर-समूह-समरथ भट-नागर॥

ओम हनु हनु हनु हनुमंत हठीले ।
बैरिहि मारु बज्र की कीले॥

गदा बज्र लै बैरिहि मारो ।
महाराज प्रभु दास उबारो ।।

ओंकार हुंकार महाप्रभु धाओ ।
बज्र गदा हनु विलम्ब न लाओ ।।

ओम ह्नीं ह्नीं ह्नीं हनुमंत कपीसा ।
ओम हुं हुं हुं हनु अरि उर-सीसा॥

सत्य होहु हरी शपथ पायके ।
राम दूत धरु मारू जायके

जय जय जय हनुमन्त अगाधा ।
दुःख पावत जन केहि अपराधा ।।

पूजा जप-तप नेम अचारा ।
नहिं जानत हो दास तुम्हारा ।।

वन उपवन मग गिरि गृह मांहीं ।
तुम्हरे बल हम डरपत नाहीं ।।

पायं परौं कर जोरी मनावौं ।
येहि अवसर अब केहि गोहरावौं ।।

जय अंजनी कुमार बलवंता ।
शंकर सुवन वीर हनुमंता ।।

बदन कराल काल कुलघालक।
राम सहाय सदा प्रतिपालक ।।

भूत प्रेत पिसाच निसाचर।
अगिन वैताल काल मारी मर ।।

इन्हें मारु, तोहि शपथ राम की ।
राखउ नाथ मरजाद नाम की ।।

जनकसुता हरि दास कहावो ।
ताकी शपथ विलम्ब न लावो ।।

जै जै जै धुनि होत अकासा ।
सुमिरत होत दुसह दुःख नासा ।।

चरण शरण कर जोरि मनावौं ।
यहि अवसर अब केहि गोहरावौं ।।

उठु उठु चलु तोहि राम-दोहाई ।
पायँ परौं, कर जोरि मनाई ।।

ओम चं चं चं चं चपल चलंता ।
ओम हनु हनु हनु हनु हनुमन्ता ।।

ओम हं हं हाँक देत कपि चंचल ।
ओम सं सं सहमि पराने खल-दल ।।

अपने जन को तुरत उबारौ ।
सुमिरत होय आनंद हमारौ ।।

यह बजरंग बाण जेहि मारै।
ताहि कहो फिर कोन उबारै ।।

पाठ करै बजरंग बाण की ।
हनुमत रक्षा करैं प्रान की ।।

यह बजरंग बाण जो जापैं ।
ताते भूत-प्रेत सब कापैं ।।

धूप देय अरु जपै हमेशा ।
ताके तन नहिं रहै कलेसा ।।`,
  concludingDoha: {
    sanskrit: `प्रेम प्रतीतिहि कपि भजै, सदा धरै उर ध्यान ।
तेहि के कारज सकल सुभ, सिद्ध करैं हनुमान ।।`,
    hindi: `जो प्रेम और विश्वास से हनुमानजी का भजन करते हैं और सदा हृदय में उनका ध्यान धरते हैं, हनुमानजी उनके सभी शुभ कार्यों को सिद्ध करते हैं।`,
    english: `He who recites Hanuman with love and faith, and always meditates on him in their heart, Hanuman fulfills all their auspicious tasks.`
  },
  overallMeaning: {
    hindi: "बजरंग बाण एक शक्तिशाली स्तोत्र है जो भगवान हनुमान की कृपा प्राप्त करने और सभी प्रकार के संकटों, भय और नकारात्मक शक्तियों से सुरक्षा पाने के लिए पढ़ा जाता है। इसका पाठ भक्तों को शक्ति, साहस और आत्मविश्वास प्रदान करता है।",
    english: "The Bajrang Baan is a powerful hymn recited to invoke Lord Hanuman's grace and seek protection from all kinds of troubles, fears, and negative forces. Its recitation is believed to bestow strength, courage, and confidence upon devotees."
  }
};

const VerseDisplay: React.FC<{ sanskrit: string; hindi?: string; english?: string; title?: string }> = ({ sanskrit, hindi, english, title }) => (
  <div className="mb-6 p-4 border border-border/50 rounded-lg bg-muted/30 shadow">
    {title && <h3 className="text-xl font-semibold text-secondary-foreground mb-2">{title}</h3>}
    <h4 className="font-semibold text-lg text-accent mb-1">Sanskrit:</h4>
    <pre className="whitespace-pre-line font-serif text-foreground/90 bg-background/50 p-3 rounded-md shadow-inner mb-3">{sanskrit}</pre>
    {hindi && (
      <>
        <h4 className="font-semibold text-lg text-accent mb-1">Hindi Meaning:</h4>
        <p className="text-foreground/80 mb-3">{hindi}</p>
      </>
    )}
    {english && (
      <>
        <h4 className="font-semibold text-lg text-accent mb-1">English Meaning:</h4>
        <p className="text-foreground/80">{english}</p>
      </>
    )}
  </div>
);


export default function BajrangBaanPage() {
  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title="श्री बजरंग बाण"
        description="A powerful hymn dedicated to Lord Hanuman, known as the 'Arrow of Bajrang (Hanuman)', recited for protection and overcoming obstacles."
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-8">
        <CardHeader>
          <CardTitle className="text-3xl text-primary text-center">॥ श्री बजरंग बाण ॥</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            The Arrow of Bajrang Bali - A Hymn of Power and Protection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <VerseDisplay 
            title="॥ दोहा ॥ (Opening Doha)" 
            sanskrit={bajrangBaanFull.openingDoha.sanskrit} 
            hindi={bajrangBaanFull.openingDoha.hindi} 
            english={bajrangBaanFull.openingDoha.english} 
          />

          <div>
            <h2 className="text-2xl font-bold text-primary my-4 text-center border-t border-b border-border/50 py-3">॥ चौपाई ॥ (Chaupais)</h2>
            <VerseDisplay 
              sanskrit={bajrangBaanFull.chaupais} 
              hindi={bajrangBaanFull.overallMeaning.hindi}
              english={bajrangBaanFull.overallMeaning.english}
            />
          </div>
          
          <VerseDisplay 
            title="॥ दोहा ॥ (Concluding Doha)" 
            sanskrit={bajrangBaanFull.concludingDoha.sanskrit} 
            hindi={bajrangBaanFull.concludingDoha.hindi} 
            english={bajrangBaanFull.concludingDoha.english} 
          />
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/mantras">
            <ChevronLeft className="mr-2 h-5 w-5" />
            Back to All Mantras
          </Link>
        </Button>
      </div>
    </div>
  );
}
