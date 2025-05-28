
// src/data/epics-data.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { BookOpen, Shield, Users, Trees, Sailboat, Castle, Crown, Zap as LucideZap, Landmark, Settings2, ScrollText, Target, Sun, ShieldAlert, Moon, Users2, BookHeart, ListChecks, Award, Flame, MountainSnow, Sparkles, ArrowRight } from 'lucide-react';

export interface RamayanaKanda {
  title: string;
  slug: string;
  icon: ReactNode;
  summary: string;
  hanumanFocus?: string;
  imageUrl: string;
  imageHint: string;
}

export const ramayanaKandas: RamayanaKanda[] = [
  {
    title: "Bala Kanda: Childhood and Divine Beginnings",
    slug: "bala-kanda",
    icon: <Users className="h-7 w-7 text-accent" />,
    summary: "Narrates the divine birth of Lord Rama, his extraordinary childhood, education under Sage Vishwamitra, slaying of demons, and his marriage to Sita after breaking Shiva's bow.",
    hanumanFocus: "While Hanuman is not a primary character in this Kanda, his divine lineage as an avatar of Shiva and son of Vayu is often alluded to, setting the stage for his later appearance.",
    imageUrl: "https://i.pinimg.com/736x/e9/d0/70/e9d070160d618b4128bc9b67106bf24e.jpg",
    imageHint: "rama child sage",
  },
  {
    title: "Ayodhya Kanda: Kingdom Lost and Exile",
    slug: "ayodhya-kanda",
    icon: <Castle className="h-7 w-7 text-accent" />,
    summary: "Covers Dasharatha's decision to crown Rama, Kaikeyi's manipulation leading to Rama's 14-year exile and Bharata's ascension, and Rama's departure to the forest with Sita and Lakshmana.",
    hanumanFocus: "Hanuman's role is still in the future, but the principles of dharma and sacrifice displayed by Rama deeply resonate with Hanuman's own nature.",
    imageUrl: "https://i.pinimg.com/736x/30/c9/6f/30c96f2e99eaa8a8dd379ed1aa306935.jpg",
    imageHint: "king sad exile",
  },
  {
    title: "Aranya Kanda: Life in the Forest and Sita's Abduction",
    slug: "aranya-kanda",
    icon: <Trees className="h-7 w-7 text-accent" />,
    summary: "Details Rama, Sita, and Lakshmana's life in the forest, encounters with sages and demons, the mutilation of Shurpanakha, and ultimately, Ravana's abduction of Sita.",
    hanumanFocus: "This Kanda sets the direct cause for Hanuman's future monumental service: the search for Sita.",
    imageUrl: "https://i.pinimg.com/736x/34/af/7b/34af7b4feae4086a6678b44902c9bf1f.jpg",
    imageHint: "forest hut deer",
  },
  {
    title: "Kishkindha Kanda: Alliance with Vanaras",
    slug: "kishkindha-kanda",
    icon: <Users className="h-7 w-7 text-accent" />,
    summary: "Rama and Lakshmana meet Hanuman and Sugriva. An alliance is formed, Sugriva is reinstated as king of Kishkindha, and the Vanara army begins the search for Sita in all directions.",
    hanumanFocus: "Hanuman's first meeting with Rama. His wisdom, humility, and devotion are immediately apparent, marking the beginning of his dedicated service. He plays a key role in forming the alliance.",
    imageUrl: "https://i.pinimg.com/736x/0a/de/aa/0adeaa4abaca17b305d7f6634d82c8fa.jpg",
    imageHint: "rama hanuman meeting",
  },
  {
    title: "Sundara Kanda: Hanuman's Heroic Leap",
    slug: "sundara-kanda",
    icon: <Sailboat className="h-7 w-7 text-accent" />,
    summary: "Solely focuses on Hanuman's journey: leaping across the ocean, finding Sita in Lanka, confronting Ravana, and burning Lanka. This Kanda highlights Hanuman's strength, devotion, and intelligence.",
    hanumanFocus: "This is Hanuman's Kanda. His unwavering faith, courage, resourcefulness, and immense power are showcased as he overcomes all obstacles to find Sita and deliver Rama's message.",
    imageUrl: "https://i.pinimg.com/736x/50/e1/26/50e1267d0be49fc07b781d91ff0de390.jpg", 
    imageHint: "hanuman lanka ocean",
  },
  {
    title: "Yuddha Kanda: The Great War",
    slug: "yuddha-kanda",
    icon: <LucideZap className="h-7 w-7 text-accent" />, 
    summary: "Details the epic battle between Rama's army and Ravana's forces in Lanka. It includes major duels, divine interventions, and culminates in Ravana's defeat and Sita's rescue.",
    hanumanFocus: "Hanuman's valor in battle, his life-saving mission to bring the Sanjeevani herb for Lakshmana, and his unwavering support to Rama are central.",
    imageUrl: "https://i.pinimg.com/736x/4b/6f/fd/4b6ffd08ae798038cdd5542e4099baa0.jpg",
    imageHint: "battle war epic",
  },
  {
    title: "Uttara Kanda: Epilogue and Legacy",
    slug: "uttara-kanda",
    icon: <Crown className="h-7 w-7 text-accent" />,
    summary: "Narrates Rama's coronation, Sita's exile due to public rumor, the birth of Lava and Kusha, Ashwamedha Yagna, and Rama's final departure from the world. It also elaborates on histories of various characters.",
    hanumanFocus: "Hanuman's eternal devotion continues. He remains by Rama's side and is blessed with immortality to stay on Earth as long as Rama's story is told, protecting devotees.",
    imageUrl: "https://i.pinimg.com/736x/42/2d/61/422d61528dfd90e385b640e250759b5e.jpg",
    imageHint: "king coronation scroll",
  }
];

interface MahabharataParva {
  name: string;
  description: string;
  subsections: string[];
  icon: ReactNode;
  imageUrl?: string;
  imageHint?: string;
}

export const mahabharataData = {
  total_parvas: 18,
  parvas: [
    {
      name: "Adi Parva",
      description: "The Book of the Beginning. It includes the origin of the Kuru dynasty, the birth of the Pandavas and Kauravas, the game of dice, and the exile of the Pandavas.",
      subsections: [
        "Origin of the Kuru dynasty",
        "Birth of the Pandavas and Kauravas",
        "The Game of Dice",
        "Exile of the Pandavas"
      ],
      icon: <BookOpen className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=310",
      imageHint: "ancient script scroll",
    },
    {
      name: "Sabha Parva",
      description: "The Book of the Assembly Hall. This parva describes the grand assembly and the game of dice that leads to the Pandavas' exile.",
      subsections: [
        "The grand assembly",
        "The Game of Dice",
        "The Pandavas' exile"
      ],
      icon: <Landmark className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=311",
      imageHint: "royal court assembly",
    },
    {
      name: "Vana Parva",
      description: "The Book of the Forest. The Pandavas live in exile in the forest, meet various sages, and encounter numerous challenges.",
      subsections: [
        "Exile in the forest",
        "Meeting with sages",
        "Challenges faced during exile"
      ],
      icon: <Trees className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=312",
      imageHint: "dense forest path",
    },
    {
      name: "Virata Parva",
      description: "The Book of Virata. During the last year of their exile, the Pandavas hide in the kingdom of Virata, where they serve in various roles.",
      subsections: [
        "The Pandavas' stay in Virata",
        "Disguises and roles in the kingdom"
      ],
      icon: <Users className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=313",
      imageHint: "royal disguise people",
    },
    {
      name: "Udyoga Parva",
      description: "The Book of Effort. It describes the preparations for war, including diplomatic efforts, alliances, and the assembly of armies.",
      subsections: [
        "Preparations for war",
        "Diplomatic efforts",
        "Formation of alliances"
      ],
      icon: <Settings2 className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=314",
      imageHint: "war strategy map",
    },
    {
      name: "Bhishma Parva",
      description: "The Book of Bhishma. The Kurukshetra War begins. Bhishma, the commander of the Kaurava army, plays a significant role during the first part of the battle. Includes the Bhagavad Gita.",
      subsections: [
        "Beginning of the Kurukshetra War",
        "Bhishma as the commander",
        "The Bhagavad Gita"
      ],
      icon: <ScrollText className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=315",
      imageHint: "battlefield krishna arjuna",
    },
    {
      name: "Drona Parva",
      description: "The Book of Drona. Drona becomes the commander of the Kaurava army. Major events and battles are fought during this parva.",
      subsections: [
        "Drona as the commander",
        "The great battles of Kurukshetra"
      ],
      icon: <Target className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=316",
      imageHint: "archer warrior battle",
    },
    {
      name: "Karna Parva",
      description: "The Book of Karna. The story of Karna’s valor and his role in the war is detailed here, along with his tragic fate.",
      subsections: [
        "Karna’s valor",
        "Karna’s tragic fate"
      ],
      icon: <Sun className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=317",
      imageHint: "warrior sun chariot",
    },
    {
      name: "Shalya Parva",
      description: "The Book of Shalya. Shalya becomes the commander of the Kaurava army after Karna’s death. The final battles of the war are fought here.",
      subsections: [
        "Shalya as the commander",
        "The final battles"
      ],
      icon: <ShieldAlert className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=318",
      imageHint: "battlefield final stand",
    },
    {
      name: "Sauptika Parva",
      description: "The Book of the Sleeping Warriors. This parva describes the night raid by Ashwatthama, which results in the massacre of the Pandava camp.",
      subsections: [
        "Ashwatthama’s night raid",
        "Massacre of the Pandava camp"
      ],
      icon: <Moon className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=319",
      imageHint: "night battle camp",
    },
    {
      name: "Stri Parva",
      description: "The Book of Women. The aftermath of the war, including the mourning of the women who lost their loved ones, is described.",
      subsections: [
        "Mourning by the women",
        "Consequences of the war"
      ],
      icon: <Users2 className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=320",
      imageHint: "women mourning grief",
    },
    {
      name: "Shanti Parva",
      description: "The Book of Peace. Yudhishthira’s coronation and the moral teachings of Bhishma, who imparts wisdom on various subjects including governance, dharma, and ethics.",
      subsections: [
        "Yudhishthira’s coronation",
        "Bhishma’s teachings on dharma"
      ],
      icon: <BookHeart className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=321",
      imageHint: "king sage teaching",
    },
    {
      name: "Anushasana Parva",
      description: "The Book of Instructions. Bhishma continues his teachings, focusing on righteous living, the duties of kingship, and the concept of dharma.",
      subsections: [
        "Continued teachings of Bhishma",
        "Ethical living and dharma"
      ],
      icon: <ListChecks className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=322",
      imageHint: "scroll wisdom ancient",
    },
    {
      name: "Ashwamedhika Parva",
      description: "The Book of Ashwamedha. Yudhishthira performs the Ashwamedha Yagna to establish his rule and the continuity of the Kuru dynasty.",
      subsections: [
        "The Ashwamedha Yagna",
        "Establishing Yudhishthira’s rule"
      ],
      icon: <Award className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=323",
      imageHint: "horse sacrifice ritual",
    },
    {
      name: "Mausala Parva",
      description: "The Book of the Mace. The eventual destruction of the Yadava dynasty, including the death of Lord Krishna and the fall of the Yadavas, is depicted.",
      subsections: [
        "Destruction of the Yadava dynasty",
        "Death of Lord Krishna"
      ],
      icon: <Flame className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=324",
      imageHint: "city destruction ruin",
    },
    {
      name: "Mahaprasthanika Parva",
      description: "The Book of the Great Journey. The Pandavas, in their final journey, renounce the throne and begin their journey to the Himalayas.",
      subsections: [
        "The final journey of the Pandavas",
        "Renunciation and ascension"
      ],
      icon: <MountainSnow className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=325",
      imageHint: "mountain path journey",
    },
    {
      name: "Swargarohanika Parva",
      description: "The Book of the Ascension to Heaven. This parva describes the Pandavas' final ascension to heaven and their ultimate reunion with their divine forms.",
      subsections: [
        "The Pandavas’ ascension to heaven",
        "Reunion with divine forms"
      ],
      icon: <Sparkles className="h-7 w-7 text-accent" />,
      imageUrl: "https://picsum.photos/400/300?image=326",
      imageHint: "heavenly realm clouds",
    }
  ]
} as { total_parvas: number; parvas: MahabharataParva[] };
