
import { PageHeader } from '@/components/ui/page-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { ScrollText, Users, ShieldAlert, Sailboat, Zap, Wind, Sun, Mountain, ChevronsRight, Footprints } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
// Removed Metadata import

interface RamayanaSectionDetail {
  heading?: string;
  text: string | string[];
  imageUrl?: string;
  imageHint?: string;
  isCard?: boolean; 
}

interface RamayanaSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  overview: string;
  details: RamayanaSectionDetail[];
}

const hanumanJourneySections: RamayanaSection[] = [
  {
    id: 'birth_childhood',
    title: "Divine Birth & Childhood Exploits",
    icon: <Wind className="h-5 w-5 text-primary mr-2" />,
    overview: "Hanuman's miraculous birth to Anjana and Kesari, his divine lineage connected to Vayu (the Wind God) and Shiva, and his playful yet powerful childhood.",
    details: [
      {
        heading: "Miraculous Birth",
        text: [
          "Hanuman was born to mother Anjana and father Kesari. He is also revered as the son of Vayu, the Wind God, due to Vayu's instrumental role in his birth—legend tells of Vayu delivering a fragment of sacred pudding (payasam) from King Dasharatha's yagna to Anjana, leading to Hanuman's conception.",
          "He is considered an incarnation of Lord Shiva. Various sacred sites, including Anjanadri Hill (Karnataka) and Anjaneri (Maharashtra), are venerated as his birthplace.",
        ],
      },
      {
        heading: "Childhood Powers & The Sun Incident",
        text: [
          "As a child, Hanuman possessed immense energy. Mistaking the rising sun for a ripe fruit, he leaped into the sky to grab it.",
          "In one version, Indra, king of gods, struck him with his thunderbolt (Vajra) to protect the celestial order. The blow injured Hanuman's jaw (Hanu), giving him his name. Angered, Vayu withdrew air from the world, causing great distress. Lord Shiva intervened, reviving Hanuman.",
          "Pleased and to appease Vayu, various gods bestowed boons upon Hanuman: Indra granted him a body as strong as his Vajra and immunity from it; Agni (Fire God) granted immunity from fire; Varuna (Water God) from water; Vayu blessed him with speed greater than wind; Brahma granted him the ability to go wherever he wished, unstoppable. These boons made him an immortal with extraordinary powers.",
          "An alternate Jain legend narrates that he was burnt to ashes by the sun's heat and then reassembled by the gods, leaving him with a disfigured jaw.",
        ],
        isCard: true,
        imageUrl: "https://i.pinimg.com/736x/fe/b8/47/feb847bb5a6300eab21f58630fc89c91.jpg",
        imageHint: "sun child sky"
      },
      {
        heading: "The Sage's Curse",
        text: "In his youth, Hanuman sometimes used his powers for pranks. One day, he disturbed a meditating sage who, in a moment of anger, cursed him to forget his vast powers until reminded by someone at an appropriate time. This curse played a crucial role in his later life.",
      }
    ],
  },
  {
    id: 'meeting_rama',
    title: "Meeting Lord Rama",
    icon: <Users className="h-5 w-5 text-primary mr-2" />,
    overview: "During Rama's exile, after Sita's abduction, Hanuman's destiny intertwines with the Lord's, marking the beginning of an unparalleled saga of devotion and service.",
    details: [
      {
        heading: "Encounter in Exile (Aranya & Kishkindha Kanda)",
        text: [
          "While Lord Rama and his brother Lakshmana were searching for the kidnapped Sita, they arrived in the Rishyamukha mountains.",
          "It was here that Hanuman, in service of Sugriva (the exiled Vanara king), met Rama. Recognizing Rama's divine nature, Hanuman facilitated a crucial alliance between Rama and Sugriva.",
          "Hanuman pledged his lifelong, unwavering devotion and service to Lord Rama, a commitment that would define his existence.",
        ],
      }
    ],
  },
  {
    id: 'sundara_kanda_journey',
    title: "The Great Leap & Finding Sita (Sundara Kanda)",
    icon: <Sailboat className="h-5 w-5 text-primary mr-2" />,
    overview: "Hanuman's courage, intelligence, and strength shine as he single-handedly crosses the ocean to find Mata Sita in Lanka.",
    details: [
      {
        heading: "Remembrance of Powers & The Mighty Leap",
        text: "When the Vanara search party reached the southern coast, Jambavan reminded Hanuman of his dormant powers. Restored, Hanuman assumed a colossal form and leaped across the ocean to Lanka.",
        isCard: true,
        imageUrl: "https://i.pinimg.com/736x/13/57/bc/1357bcf3df4dd696c765aba5c71f70ad.jpg", 
        imageHint: "ocean leap hanuman"
      },
      {
        heading: "Searching Lanka & Locating Sita",
        text: [
          "Shrinking to a minuscule size, Hanuman covertly searched Lanka and found Mata Sita in the Ashoka grove. He delivered Rama's message of hope. Sita, upholding dharma, insisted Rama himself rescue her.",
        ],
      },
      {
        heading: "Confronting Ravana & The Burning of Lanka",
        text: "To deliver a warning, Hanuman allowed himself to be captured. In Ravana's court, he advised Ravana to return Sita. Enraged, Ravana ordered Hanuman's tail lit. Hanuman extended his tail, and once ablaze, broke free, setting Lanka on fire before returning to India.",
        isCard: true,
        imageUrl: "https://i.pinimg.com/736x/fe/30/2f/fe302f05fa633a97f0455a57ea105615.jpg", 
        imageHint: "fire lanka city",
      }
    ],
  },
  {
    id: 'yuddha_kanda_journey',
    title: "The Great War (Yuddha Kanda)",
    icon: <ShieldAlert className="h-5 w-5 text-primary mr-2" />,
    overview: "In the epic battle against Ravana, Hanuman's valor and strength were indispensable to Rama's army.",
    details: [
      {
        heading: "A Formidable Warrior",
        text: "Hanuman played a pivotal role as a general in Rama's Vanara army, instrumental in many victories against Ravana's demon warriors.",
      },
      {
        heading: "Saving Lakshmana with Sanjeevani",
        text: "When Lakshmana was fatally wounded, Hanuman flew to the Himalayas for the Sanjeevani herb. Unable to identify it, he uprooted the entire Dronagiri mountain and brought it back, saving Lakshmana's life.",
        isCard: true,
        imageUrl: "https://i.pinimg.com/736x/69/01/ab/6901abce05a65f8156940f0edf0603b9.jpg",
        imageHint: "mountain herb hanuman",
      }
    ],
  },
  {
    id: 'eternal_devotion',
    title: "Eternal Devotion & Immortality",
    icon: <Zap className="h-5 w-5 text-primary mr-2" />,
    overview: "After the victory, Hanuman's pure devotion earned him the boon of eternal presence and servitude to Lord Rama.",
    details: [
      {
        heading: "The Ultimate Devotee",
        text: [
          "After Rama's coronation, Hanuman declined material rewards, stating service to Rama was his only desire. He tore open his chest, revealing Rama and Sita enshrined within his heart.",
        ],
      },
      {
        heading: "Boon of Immortality",
        text: "Pleased, Rama granted Hanuman immortality, decreeing he would live as long as Rama's stories are told, protecting devotees and upholding Dharma.",
      }
    ],
  },
  {
    id: 'mahabharata_presence',
    title: "Presence in the Mahabharata",
    icon: <ChevronsRight className="h-5 w-5 text-primary mr-2" />,
    overview: "Centuries later, Hanuman's enduring wisdom and power are felt during the Mahabharata era.",
    details: [
      {
        heading: "Encounter with Bhima",
        text: [
          "Hanuman, disguised as an old monkey, humbled his spiritual brother Bhima by making his tail immovable. He revealed his true form, imparted wisdom, and foresaw the Kurukshetra War.",
        ],
      },
      {
        heading: "Promise to Arjuna",
        text: [
          "Hanuman promised Bhima he would reside on the flag of Arjuna's chariot during the war. His battle cry from the flag demoralized enemies, contributing to the Pandavas' victory.",
        ],
      }
    ],
  },
];

export default function HanumanJourneyPage() {
  return (
    <div>
      <PageHeader
        title="The Divine Journey of Hanuman"
        description="Explore the epic life of Lord Hanuman, from his divine birth and childhood exploits to his pivotal role in the Ramayana and his timeless presence in the Mahabharata."
      />
      <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto space-y-6">
        {hanumanJourneySections.map((section) => (
          <AccordionItem value={section.id} key={section.id} className="bg-card border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <AccordionTrigger className="p-6 text-xl font-semibold text-primary hover:no-underline hover:text-accent transition-colors">
              <div className="flex items-center text-left">
                {section.icon}
                {section.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-2 text-foreground/85 space-y-6">
              <p className="text-lg italic text-muted-foreground mb-4">{section.overview}</p>
              {section.details.map((detail, index) => (
                <div key={index} className="space-y-3">
                  {detail.heading && <h4 className="text-xl font-semibold text-secondary-foreground mt-4 mb-2">{detail.heading}</h4>}
                  
                  {detail.isCard && detail.imageUrl ? (
                     <DevotionalCard
                        title="" 
                        className="my-4 !shadow-md"
                        imageUrl={detail.imageUrl}
                        imageHint={detail.imageHint}
                        content={
                            Array.isArray(detail.text) ? 
                            detail.text.map((para, pIndex) => <p key={pIndex} className="text-base leading-relaxed mb-2">{para}</p>) :
                            <p className="text-base leading-relaxed">{detail.text}</p>
                        }
                        contentClassName="p-4"
                     />
                  ) : (
                    Array.isArray(detail.text) ? 
                    detail.text.map((para, pIndex) => <p key={pIndex} className="text-base leading-relaxed">{para}</p>) :
                    <p className="text-base leading-relaxed">{detail.text}</p>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
