// src/data/ashta-siddhis.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { Atom, Mountain, Feather, Maximize, Workflow, Star, Settings, UserCheck, Quote, Lightbulb, Users, Music } from 'lucide-react';

export interface Siddhi {
  name: string;
  translation: string;
  description: string;
  icon?: ReactNode; 
}

export interface AshtaSiddhiData {
  mainTitle: string;
  mainDescription: string;
  source: string;
  verse: string;
  verseMeaning: string;
  origin: string;
  siddhis: Siddhi[];
  symbolism: {
    title: string;
    devotionalSignificance: string;
    spiritualLesson: string;
    icon?: ReactNode;
  };
  modernContext: {
    title: string;
    inYoga: string;
    inDevotion: string;
    icon?: ReactNode;
  };
  invocation: {
    title: string;
    mantra: string;
    popularChalisaLines: string[];
    icon?: ReactNode;
  };
  verseIcon?: ReactNode;
}

export const siddhiIconMap: Record<string, ReactNode> = {
  "Aṇimā": <Atom className="h-8 w-8 text-accent" />,
  "Mahimā": <Mountain className="h-8 w-8 text-accent" />,
  "Garimā": <Maximize className="h-8 w-8 text-accent" />, 
  "Laghimā": <Feather className="h-8 w-8 text-accent" />,
  "Prāpti": <Workflow className="h-8 w-8 text-accent" />,
  "Prākāmya": <Star className="h-8 w-8 text-accent" />,
  "Īśitva": <Settings className="h-8 w-8 text-accent" />,
  "Vaśitva": <UserCheck className="h-8 w-8 text-accent" />,
};


export const ashtaSiddhiDetails: AshtaSiddhiData = {
  mainTitle: "Ashta Siddhis of Hanuman Ji",
  mainDescription: "Hanuman Ji, also known as Bajrangbali, is believed to possess the Ashta Siddhis — eight supernatural powers as mentioned in Yogic and Puranic texts. These siddhis represent mastery over the body, mind, and nature.",
  source: "Referenced in Hanuman Chalisa, Puranas, and Yogic texts",
  verse: "अष्ट सिद्धि नव निधि के दाता। अस बर दीन्ह जानकी माता॥",
  verseMeaning: "(Hanuman Chalisa: You are the bestower of eight Siddhis and nine Nidhis, This boon was given to you by Mother Janaki.)",
  origin: "These Siddhis were granted to Hanuman Ji by Mata Sita for his unwavering devotion and service to Lord Rama.",
  verseIcon: <Quote />,
  siddhis: [
    {
      name: "Aṇimā",
      translation: "Power to become as small as an atom",
      description: "Hanuman can reduce his size to an invisible point, allowing him to pass through any space or remain unseen — as seen when he entered Lanka in miniature form."
    },
    {
      name: "Mahimā",
      translation: "Power to grow infinitely large",
      description: "He can expand his body to immense proportions — as displayed when he grew large to burn Lanka or cross the ocean."
    },
    {
      name: "Garimā",
      translation: "Power to become infinitely heavy",
      description: "Hanuman can become so heavy that no force can move him, representing stability and unshakable strength."
    },
    {
      name: "Laghimā",
      translation: "Power to become weightless",
      description: "This ability allows him to fly, leap across mountains, and move with the speed of thought — like when he leaped to the Himalayas to bring Sanjeevani herb."
    },
    {
      name: "Prāpti",
      translation: "Power to obtain anything desired",
      description: "Hanuman can acquire or reach any object or place, transcending limitations of time and space — representing divine accessibility and resourcefulness."
    },
    {
      name: "Prākāmya",
      translation: "Power to fulfill any desire",
      description: "The ability to manifest any wish and align it with divine will. Hanuman uses this siddhi to perform divine missions without hindrance."
    },
    {
      name: "Īśitva",
      translation: "Supreme control or lordship over creation",
      description: "Symbolizes divine leadership and sovereignty over the forces of nature. Hanuman acts as a commander of Rama’s forces and a protector of righteousness (Dharma)."
    },
    {
      name: "Vaśitva",
      translation: "Power to control all beings",
      description: "The ability to influence the minds and actions of others for noble causes. Hanuman uses this to inspire devotion, eliminate fear, and guide beings toward Dharma."
    }
  ],
  symbolism: {
    title: "Symbolism and Significance",
    devotionalSignificance: "The siddhis show Hanuman's role as a divine servant who never uses powers for ego, but only in Rama’s service.",
    spiritualLesson: "The Ashta Siddhis represent mastery over ego, elements, and senses. They remind devotees to pursue inner perfection with devotion and humility.",
    icon: <Lightbulb />
  },
  modernContext: {
    title: "Modern Context and Yogic Interpretation",
    inYoga: "Ashta Siddhis are also discussed in Patanjali’s Yoga Sutras and Hatha Yoga texts as achievements through deep spiritual practice (sādhanā).",
    inDevotion: "Devotees of Hanuman chant the Hanuman Chalisa and seek his blessings for protection, strength, and the overcoming of obstacles.",
    icon: <Users />
  },
  invocation: {
    title: "Invocation and Popular Verses",
    mantra: "जय हनुमान ज्ञान गुण सागर, जय कपीस तिहुँ लोक उजागर।",
    popularChalisaLines: [
      "अष्ट सिद्धि नव निधि के दाता, अस बर दीन्ह जानकी माता।",
      "राम रसायन तुम्हरे पासा, सदा रहो रघुपति के दासा।"
    ],
    icon: <Music />
  }
};
