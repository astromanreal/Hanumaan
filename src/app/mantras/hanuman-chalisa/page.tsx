// src/app/mantras/hanuman-chalisa/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Shri Hanuman Chalisa - Full Text, Meaning & Significance',
  description: "Read the full Hanuman Chalisa, a forty-verse devotional hymn by Goswami Tulsidas. Understand its meaning and experience the divine protection and blessings of Lord Hanuman for courage and strength.",
  keywords: ['Hanuman Chalisa', 'Shri Hanuman Chalisa', 'Tulsidas', 'Hanuman Prayer', 'Devotional Hymn', 'Forty Verses', 'Bajrangbali Chalisa', 'Hindu Prayers', 'Sankat Mochan Hanuman'],
  alternates: {
    canonical: `${SITE_URL}/mantras/hanuman-chalisa`,
  },
  openGraph: {
    title: 'Shri Hanuman Chalisa - Full Text, Meaning & Significance',
    description: "Read the full Hanuman Chalisa by Tulsidas. Understand its profound meaning and invoke Lord Hanuman's blessings for strength and protection.",
    url: `${SITE_URL}/mantras/hanuman-chalisa`,
    images: [
      {
        url: `${SITE_URL}/og-hanuman-chalisa.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Shri Hanuman Chalisa - Devotional Hymn',
      },
    ],
    type: 'article',
    section: 'Mantras',
    publishedTime: new Date().toISOString(),
    authors: [`${SITE_URL}/about`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Hanuman Chalisa - Full Text, Meaning & Significance',
    description: "Read the full Hanuman Chalisa by Tulsidas and understand its divine significance for devotees.",
    images: [`${SITE_URL}/twitter-hanuman-chalisa.jpg`], 
  },
};


const hanumanChalisa = {
  doha1: {
    sanskrit: `श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।
बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥`,
    hindi: `अपने मन दर्पण को श्री गुरुदेव के चरण-कमलों की धूलि से पवित्र करके, मैं श्री रघुवीर के निर्मल यश का वर्णन करता हूँ, जो चारों फल (धर्म, अर्थ, काम, मोक्ष) देने वाला है।`,
    english: `Cleansing the mirror of my mind with the dust from the lotus feet of the Divine Guru, I describe the pure glory of Shri Raghubar (Lord Rama), which bestows the four fruits of life (Dharma, Artha, Kama, Moksha).`
  },
  doha2: {
    sanskrit: `बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार ।
बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार ॥`,
    hindi: `हे पवनकुमार! मैं स्वयं को बुद्धिहीन जानकर आपका स्मरण करता हूँ। मुझे बल, बुद्धि और विद्या दीजिए और मेरे कष्टों और दोषों का हरण कीजिए।`,
    english: `Knowing myself to be lacking in intelligence, I remember you, Son of the Wind God. Grant me strength, wisdom, and knowledge, and remove my afflictions and blemishes.`
  },
  chaupais: [
    { verse: 1, sanskrit: `जय हनुमान ज्ञान गुन सागर ।\nजय कपीस तिहुँ लोक उजागर ॥`, hindi: `हे हनुमान, ज्ञान और गुणों के सागर, आपकी जय हो! हे कपीश्वर, तीनों लोकों को प्रकाशित करने वाले, आपकी जय हो!`, english: `Victory to Hanuman, the ocean of wisdom and virtue! Victory to the Lord of Monkeys, who illuminates the three worlds!` },
    { verse: 2, sanskrit: `राम दूत अतुलित बल धामा ।\nअंजनि-पुत्र पवनसुत नामा ॥`, hindi: `आप श्रीराम के दूत हैं, अतुलनीय शक्ति के धाम हैं। आप अंजनी के पुत्र और पवनपुत्र के नाम से जाने जाते हैं।`, english: `Messenger of Rama, abode of immeasurable strength. Son of Anjani, known as the Son of the Wind God.` },
    { verse: 3, sanskrit: `महाबीर बिक्रम बजरंगी ।\nकुमति निवार सुमति के संगी ॥`, hindi: `हे महावीर, महान पराक्रमी, वज्र के समान अंगों वाले! आप दुर्बुद्धि को दूर करने वाले और सुबुद्धि प्रदान करने वालों के साथी हैं।`, english: `Great hero, mighty warrior with limbs as strong as a thunderbolt. Dispeller of evil thoughts, companion of those with good intellect.` },
    { verse: 4, sanskrit: `कंचन बरन बिराज सुबेसा ।\nकानन कुंडल कुंचित केसा ॥`, hindi: `आपका रंग स्वर्ण के समान है और आप सुन्दर वेश में सुशोभित हैं। आपके कानों में कुंडल और घुंघराले बाल हैं।`, english: `Golden-hued, splendidly attired. Earrings adorn your ears, and your hair is curly.` },
    { verse: 5, sanskrit: `हाथ बज्र औ ध्वजा बिराजै ।\nकाँधे मूँज जनेऊ साजै ॥`, hindi: `आपके हाथ में वज्र और ध्वजा विराजमान हैं। आपके कंधे पर मूंज का जनेऊ सुशोभित है।`, english: `In your hands, a thunderbolt and a banner shine. A sacred thread of Munja grass adorns your shoulder.` },
    { verse: 6, sanskrit: `संकर सुवन केसरीनंदन ।\nतेज प्रताप महा जग बंदन ॥`, hindi: `आप शंकर के अवतार और केसरी के पुत्र हैं। आपका तेज और प्रताप महान है, सारा संसार आपकी वंदना करता है।`, english: `Incarnation of Shiva, son of Kesari. Your radiance and glory are immense; the whole world venerates you.` },
    { verse: 7, sanskrit: `बिद्यावान गुनी अति चातुर ।\nराम काज करिबे को आतुर ॥`, hindi: `आप विद्यावान, गुणी और अत्यंत चतुर हैं। श्रीराम का कार्य करने के लिए आप सदैव आतुर रहते हैं।`, english: `Full of knowledge, virtuous, and exceedingly clever. Ever eager to perform Rama's tasks.` },
    { verse: 8, sanskrit: `प्रभु चरित्र सुनिबे को रसिया ।\nराम लखन सीता मन बसिया ॥`, hindi: `आप प्रभु श्रीराम के चरित्र सुनने में आनंद अनुभव करते हैं। श्रीराम, लक्ष्मण और सीता आपके मन में बसते हैं।`, english: `You delight in hearing the glories of the Lord. Rama, Lakshmana, and Sita reside in your heart.` },
    { verse: 9, sanskrit: `सूक्ष्म रूप धरि सियहिं दिखावा ।\nबिकट रूप धरि लंक जरावा ॥`, hindi: `आपने सूक्ष्म रूप धारण करके सीताजी को दिखाया और विकराल रूप धारण करके लंका को जलाया।`, english: `Assuming a minute form, you appeared before Sita. Assuming a fearsome form, you burned Lanka.` },
    { verse: 10, sanskrit: `भीम रूप धरि असुर सँहारे ।\nरामचंद्र के काज सँवारे ॥`, hindi: `आपने विशाल रूप धारण करके असुरों का संहार किया और श्रीरामचंद्रजी के कार्यों को संवारा।`, english: `Assuming a colossal form, you vanquished demons. You accomplished the tasks of Lord Ramachandra.` },
    { verse: 11, sanskrit: `लाय सजीवन लखन जियाये ।\nश्रीरघुबीर हरषि उर लाये ॥`, hindi: `आप संजीवनी बूटी लाकर लक्ष्मण को जिलाया, जिससे श्रीरघुवीर ने प्रसन्न होकर आपको हृदय से लगा लिया।`, english: `Bringing the Sanjeevani herb, you revived Lakshmana. Shri Raghubir joyfully embraced you.` },
    { verse: 12, sanskrit: `रघुपति कीन्ही बहुत बड़ाई ।\nतुम मम प्रिय भरतहि सम भाई ॥`, hindi: `रघुपति ने आपकी बहुत प्रशंसा की और कहा कि तुम मुझे भरत के समान प्रिय भाई हो।`, english: `Raghupati praised you greatly, saying, "You are as dear to me as my brother Bharata."` },
    { verse: 13, sanskrit: `सहस बदन तुम्हरो जस गावैं ।\nअस कहि श्रीपति कंठ लगावैं ॥`, hindi: `हजारों मुख तुम्हारी महिमा का गान करें, ऐसा कहकर श्रीपति (विष्णु/राम) ने आपको गले लगा लिया।`, english: `May a thousand mouths sing your praises. Saying this, Shripati (Rama) embraced you.` },
    { verse: 14, sanskrit: `सनकादिक ब्रह्मादि मुनीसा ।\nनारद सारद सहित अहीसा ॥`, hindi: `सनक आदि ऋषि, ब्रह्मा आदि देव और मुनीश्वर, नारद, सरस्वती और शेषनाग।`, english: `Sanaka and other sages, Brahma and other gods and chief sages, Narada, Sharada (Saraswati), along with Ahisha (Sheshanaga).` },
    { verse: 15, sanskrit: `जम कुबेर दिगपाल जहाँ ते ।\nकबि कोबिद कहि सके कहाँ ते ॥`, hindi: `यम, कुबेर और सभी दिशाओं के रक्षक देवता, कवि और विद्वान - कोई भी आपकी महिमा का पूर्ण वर्णन कैसे कर सकता है?`, english: `Yama, Kubera, and the guardians of all directions; where can poets and scholars fully describe your glory?` },
    { verse: 16, sanskrit: `तुम उपकार सुग्रीवहिं कीन्हा ।\nराम मिलाय राज पद दीन्हा ॥`, hindi: `आपने सुग्रीव पर उपकार किया, उन्हें श्रीराम से मिलाकर राजपद दिलाया।`, english: `You rendered a great service to Sugriva, introducing him to Rama and restoring his kingdom.` },
    { verse: 17, sanskrit: `तुम्हरो मंत्र बिभीषन माना ।\nलंकेस्वर भए सब जग जाना ॥`, hindi: `आपके परामर्श को विभीषण ने माना, जिससे वे लंका के राजा बने, यह सारा संसार जानता है।`, english: `Vibhishana heeded your counsel and became the king of Lanka; this is known to the whole world.` },
    { verse: 18, sanskrit: `जुग सहस्र जोजन पर भानू ।\nलील्यो ताहि मधुर फल जानू ॥`, hindi: `हजारों योजन दूर स्थित सूर्य को आपने मीठा फल समझकर निगल लिया था।`, english: `The sun, thousands of Yojanas away, you swallowed, thinking it a sweet fruit.` },
    { verse: 19, sanskrit: `प्रभु मुद्रिका मेलि मुख माहीं ।\nजलधि लाँघि गये अचरज नाहीं ॥`, hindi: `प्रभु श्रीराम की अंगूठी मुख में रखकर आपने समुद्र लांघ लिया, इसमें कोई आश्चर्य नहीं।`, english: `Carrying the Lord's ring in your mouth, you leaped across the ocean; there is no wonder in this.` },
    { verse: 20, sanskrit: `दुर्गम काज जगत के जेते ।\nसुगम अनुग्रह तुम्हरे तेते ॥`, hindi: `संसार के जितने भी कठिन कार्य हैं, वे आपकी कृपा से सुगम हो जाते हैं।`, english: `All difficult tasks in the world become easy through your grace.` },
    { verse: 21, sanskrit: `राम दुआरे तुम रखवारे ।\nहोत न आज्ञा बिनु पैसारे ॥`, hindi: `आप श्रीराम के द्वार के रखवाले हैं, आपकी आज्ञा के बिना कोई प्रवेश नहीं कर सकता।`, english: `You are the guardian at Rama's door; no one can enter without your permission.` },
    { verse: 22, sanskrit: `सब सुख लहै तुम्हारी सरना ।\nतुम रक्षक काहू को डर ना ॥`, hindi: `आपकी शरण में सभी सुख प्राप्त होते हैं, जब आप रक्षक हैं तो किसी का डर नहीं रहता।`, english: `All happiness is found in your refuge; when you are the protector, there is no fear of anyone.` },
    { verse: 23, sanskrit: `आपन तेज सम्हारो आपै ।\nतीनों लोक हाँक तें काँपै ॥`, hindi: `आप अपना तेज स्वयं ही संभाल सकते हैं, आपकी एक हुंकार से तीनों लोक कांप उठते हैं।`, english: `You alone can bear your own radiance; the three worlds tremble at your roar.` },
    { verse: 24, sanskrit: `भूत पिसाच निकट नहिं आवै ।\nमहाबीर जब नाम सुनावै ॥`, hindi: `जब महावीर हनुमान का नाम सुनाया जाता है, तो भूत-पिशाच निकट नहीं आते।`, english: `Ghosts and demons do not come near when the name of Mahavira (Hanuman) is uttered.` },
    { verse: 25, sanskrit: `नासै रोग हरै सब पीरा ।\nजपत निरंतर हनुमत बीरा ॥`, hindi: `वीर हनुमान का निरंतर जप करने से सब रोग नष्ट हो जाते हैं और सारी पीड़ाएं दूर हो जाती हैं।`, english: `All diseases are cured, and all pains are removed by constantly chanting the name of the brave Hanuman.` },
    { verse: 26, sanskrit: `संकट तें हनुमान छुड़ावै ।\nमन क्रम बचन ध्यान जो लावै ॥`, hindi: `जो मन, कर्म और वचन से हनुमानजी का ध्यान करता है, हनुमान उसे संकटों से छुड़ाते हैं।`, english: `Hanuman frees from distress those who meditate on him with mind, action, and speech.` },
    { verse: 27, sanskrit: `सब पर राम तपस्वी राजा ।\nतिन के काज सकल तुम साजा ॥`, hindi: `तपस्वी राजा श्रीराम सबसे श्रेष्ठ हैं, उनके सभी कार्यों को आपने ही संवारा है।`, english: `Rama, the ascetic king, is supreme over all; you have accomplished all his tasks.` },
    { verse: 28, sanskrit: `और मनोरथ जो कोई लावै ।\nसोई अमित जीवन फल पावै ॥`, hindi: `जो कोई भी अन्य इच्छाएं लेकर आता है, वह भी अनंत जीवन का फल पाता है।`, english: `Whoever brings any other desire also attains the boundless fruit of life.` },
    { verse: 29, sanskrit: `चारों जुग परताप तुम्हारा ।\nहै परसिद्ध जगत उजियारा ॥`, hindi: `चारों युगों में आपका प्रताप विद्यमान है, आपका प्रकाश जगत में प्रसिद्ध है।`, english: `Your glory pervades all four ages; your radiance is famous throughout the world.` },
    { verse: 30, sanskrit: `साधु-संत के तुम रखवारे ।\nअसुर निकंदन राम दुलारे ॥`, hindi: `आप साधु-संतों के रक्षक हैं, असुरों का विनाश करने वाले और श्रीराम के प्रिय हैं।`, english: `You are the protector of saints and sages, the destroyer of demons, and dear to Rama.` },
    { verse: 31, sanskrit: `अष्टसिद्धि नौ निधि के दाता ।\nअस बर दीन जानकी माता ॥`, hindi: `माता जानकी ने आपको ऐसा वरदान दिया है कि आप आठ सिद्धियों और नौ निधियों के दाता हैं।`, english: `Mother Janaki (Sita) has granted you the boon that you are the bestower of the eight siddhis (yogic powers) and nine nidhis (treasures).` },
    { verse: 32, sanskrit: `राम रसायन तुम्हरे पासा ।\nसदा रहो रघुपति के दासा ॥`, hindi: `आपके पास राम-नाम रूपी रसायन है, आप सदा रघुपति के दास बने रहें।`, english: `You possess the elixir of Rama's name; may you always remain the servant of Raghupati.` },
    { verse: 33, sanskrit: `तुम्हरे भजन राम को पावै ।\nजनम-जनम के दुख बिसरावै ॥`, hindi: `आपके भजन से श्रीराम को प्राप्त किया जा सकता है और जन्म-जन्म के दुःख भूल जाते हैं।`, english: `By worshiping you, one attains Rama and forgets the sorrows of countless births.` },
    { verse: 34, sanskrit: `अंत काल रघुबर पुर जाई ।\nजहाँ जन्म हरि-भक्त कहाई ॥`, hindi: `अंत समय में वह रघुवर के धाम (वैकुंठ) को जाता है, और जहाँ भी जन्म लेता है, हरि-भक्त कहलाता है।`, english: `At the end of life, one goes to Raghubar's abode (Vaikuntha), and wherever born, is called a devotee of Hari.` },
    { verse: 35, sanskrit: `और देवता चित्त न धरई ।\nहनुमत सेइ सर्ब सुख करई ॥`, hindi: `अन्य देवताओं का ध्यान न धरते हुए, हनुमानजी की सेवा करने से सभी सुख प्राप्त होते हैं।`, english: `Without focusing on other deities, by serving Hanuman, one attains all happiness.` },
    { verse: 36, sanskrit: `संकट कटै मिटै सब पीरा ।\nजो सुमिरै हनुमत बलबीरा ॥`, hindi: `जो वीर हनुमान का स्मरण करता है, उसके संकट कट जाते हैं और सभी पीड़ाएं मिट जाती हैं।`, english: `All distress is removed, and all pains cease for one who remembers the mighty Hanuman.` },
    { verse: 37, sanskrit: `जै जै जै हनुमान गोसाईं ।\nकृपा करहु गुरुदेव की नाईं ॥`, hindi: `हे हनुमान गोसाईं, आपकी जय हो, जय हो, जय हो! गुरुदेव के समान कृपा कीजिये।`, english: `Victory, victory, victory to Hanuman Gosain! Bestow your grace like a divine Guru.` },
    { verse: 38, sanskrit: `जो सत बार पाठ कर कोई ।\nछूटहि बंदि महा सुख होई ॥`, hindi: `जो कोई सौ बार इसका पाठ करता है, वह बंधनों से छूट जाता है और महासुख प्राप्त करता है।`, english: `Whoever recites this a hundred times is freed from bondage and attains great happiness.` },
    { verse: 39, sanskrit: `जो यह पढ़ै हनुमान चालीसा ।\nहोय सिद्धि साखी गौरीसा ॥`, hindi: `जो यह हनुमान चालीसा पढ़ता है, उसे सिद्धि प्राप्त होती है, इसके साक्षी स्वयं शंकर भगवान हैं।`, english: `Whoever reads this Hanuman Chalisa attains perfection; Lord Shankara (Gaurisa) himself is witness to this.` },
    { verse: 40, sanskrit: `तुलसीदास सदा हरि चेरा ।\nकीजै नाथ हृदय महँ डेरा ॥`, hindi: `तुलसीदास सदा हरि के दास हैं, हे नाथ! मेरे हृदय में निवास कीजिये।`, english: `Tulsidas is always a servant of Hari; O Lord, please make your abode in my heart.` },
  ],
  finalDoha: {
    sanskrit: `पवनतनय संकट हरन मंगल मूरति रूप ।
राम लखन सीता सहित हृदय बसहु सुर भूप ॥`,
    hindi: `हे पवनपुत्र, संकटों को हरने वाले, मंगल मूर्ति स्वरुप श्री हनुमानजी! आप श्री राम, श्री लक्ष्मण और माता सीता सहित मेरे हृदय में निवास कीजिये।`,
    english: `O Son of the Wind, remover of distress, embodiment of auspiciousness! With Rama, Lakshmana, and Sita, please reside in my heart, O King of Gods.`
  }
};

const VerseDisplay: React.FC<{ sanskrit: string; hindi: string; english: string; title?: string }> = ({ sanskrit, hindi, english, title }) => (
  <div className="mb-6 p-4 border border-border/50 rounded-lg bg-muted/30 shadow">
    {title && <h3 className="text-xl font-semibold text-secondary-foreground mb-2">{title}</h3>}
    <h4 className="font-semibold text-lg text-accent mb-1">Sanskrit:</h4>
    <pre className="whitespace-pre-line font-serif text-foreground/90 bg-background/50 p-3 rounded-md shadow-inner mb-3">{sanskrit}</pre>
    <h4 className="font-semibold text-lg text-accent mb-1">Hindi Meaning:</h4>
    <p className="text-foreground/80 mb-3">{hindi}</p>
    <h4 className="font-semibold text-lg text-accent mb-1">English Meaning:</h4>
    <p className="text-foreground/80">{english}</p>
  </div>
);


export default function HanumanChalisaPage() {
  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title="श्री हनुमान चालीसा"
        description="A forty-verse devotional hymn dedicated to Lord Hanuman, composed by Goswami Tulsidas. Reciting the Hanuman Chalisa is believed to invoke Hanuman's divine protection and blessings."
      />

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden mb-8">
        <CardHeader>
          <CardTitle className="text-3xl text-primary text-center">॥ श्री हनुमान चालीसा ॥</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            The Hanuman Chalisa - Forty Verses of Praise
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <VerseDisplay title="॥ दोहा ॥ (Opening Doha 1)" sanskrit={hanumanChalisa.doha1.sanskrit} hindi={hanumanChalisa.doha1.hindi} english={hanumanChalisa.doha1.english} />
          <VerseDisplay title="॥ दोहा ॥ (Opening Doha 2)" sanskrit={hanumanChalisa.doha2.sanskrit} hindi={hanumanChalisa.doha2.hindi} english={hanumanChalisa.doha2.english} />

          <div>
            <h2 className="text-2xl font-bold text-primary my-4 text-center border-t border-b border-border/50 py-3">॥ चौपाई ॥ (Chaupais)</h2>
            {hanumanChalisa.chaupais.map((chaupai) => (
              <VerseDisplay key={chaupai.verse} title={`चौपाई ${chaupai.verse}`} sanskrit={chaupai.sanskrit} hindi={chaupai.hindi} english={chaupai.english} />
            ))}
          </div>
          
          <VerseDisplay title="॥ दोहा ॥ (Concluding Doha)" sanskrit={hanumanChalisa.finalDoha.sanskrit} hindi={hanumanChalisa.finalDoha.hindi} english={hanumanChalisa.finalDoha.english} />
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
