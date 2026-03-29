
// src/data/epics-data.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { 
  Castle, Crown, Trees, Users, Sailboat, Zap as LucideZap, 
  Shield, Star, Heart, Compass, Sparkles, Footprints, 
  Sword, MapPin, BookOpen, Clock, Lightbulb, Split
} from 'lucide-react';

export interface Character {
  name: string;
  role: string;
}

export interface PhilosophicalMeaning {
  title: string;
  meaning: string;
}

export interface RamayanaKanda {
  title: string;
  subtitle: string;
  tagline: string;
  slug: string;
  icon: ReactNode;
  summary: string; // Quick Summary
  fullStory: string; // Detailed Narrative
  hanumanFocus: string;
  imageUrl: string;
  imageHint: string;
  colorTheme: string;
  timeline: string[];
  keyCharacters: Character[];
  lifeLessons: string[];
  turningPoints: string[];
  philosophicalMeanings: PhilosophicalMeaning[];
}

export const ramayanaKandas: RamayanaKanda[] = [
  {
    title: "Bala Kanda",
    subtitle: "The Sacred Beginning",
    tagline: "The arrival of the Seventh Avatar to restore cosmic balance.",
    slug: "bala-kanda",
    icon: <Castle className="h-7 w-7" />,
    summary: "The divine arrival of Lord Rama in Ayodhya. Witness the miraculous birth of the four princes and their early victory over darkness alongside Sage Vishwamitra.",
    hanumanFocus: "The cosmic stage is set. While Hanuman Ji appears later, the divine energy of Shiva's avatar begins to align with Lord Rama's mission from the celestial realms.",
    imageUrl: "https://i.pinimg.com/736x/e9/d0/70/e9d070160d618b4128bc9b67106bf24e.jpg",
    imageHint: "palace birth",
    colorTheme: "from-amber-900/60 via-amber-800/40 to-background",
    fullStory: "Bala Kanda narrates the divine origins of the Ramayana. It begins with Sage Valmiki's inquiry into the existence of an ideal man, leading to the description of King Dasharatha's Ayodhya. After a sacred Yagna, four sons are born to the King's queens. The narrative follows Rama's early education and his journey with Sage Vishwamitra, where he slays the demoness Tataka, protects sacred rituals, and ultimately reaches Mithila to break the divine bow of Shiva and marry Mata Sita.",
    timeline: [
      "The Putrakameshti Yagna in Ayodhya",
      "Divine birth of the four princes",
      "Arrival of Sage Vishwamitra",
      "Slaying of Tataka and Subahu",
      "Liberation of Ahalya from her curse",
      "Breaking of the Shiva Dhanush in Mithila"
    ],
    keyCharacters: [
      { name: "Lord Rama", role: "The Divine Child" },
      { name: "Mata Sita", role: "Princess of Mithila" },
      { name: "Sage Vishwamitra", role: "Spiritual Mentor" },
      { name: "King Dasharatha", role: "The Just Father" }
    ],
    lifeLessons: [
      "Discipline is the foundation of greatness.",
      "Respect for mentors unlocks hidden potential.",
      "Righteousness (Dharma) protects those who protect it."
    ],
    turningPoints: [
      "Rama's decision to accompany Vishwamitra, marking his first step toward his divine mission.",
      "The breaking of the Shiva Dhanush, proving Rama's unparalleled strength and destiny."
    ],
    philosophicalMeanings: [
      {
        title: "Avatarhood",
        meaning: "The descent of the Divine into the mortal realm to provide a blueprint for human excellence."
      },
      {
        title: "The Guru-Shishya Bond",
        meaning: "Symbolizes the necessity of spiritual guidance to overcome the internal 'demons' of the mind."
      }
    ]
  },
  {
    title: "Ayodhya Kanda",
    subtitle: "The Great Sacrifice",
    tagline: "A testament to duty, honoring a father's word above all earthly crowns.",
    slug: "ayodhya-kanda",
    icon: <Crown className="h-7 w-7" />,
    summary: "Lord Rama accepts a fourteen-year exile to honor his father's promise, leaving the throne of Ayodhya. A journey of heartbreaking departure and unparalleled resilience.",
    hanumanFocus: "The blueprint of selfless service. Lord Rama's graceful acceptance of his fate serves as the foundational lesson for the devotion Hanuman Ji will later embody.",
    imageUrl: "https://i.pinimg.com/736x/30/c9/6f/30c96f2e99eaa8a8dd379ed1aa306935.jpg",
    imageHint: "royal exile",
    colorTheme: "from-orange-900/60 via-orange-800/40 to-background",
    fullStory: "Just as Ayodhya prepares for Rama's coronation, the palace is rocked by intrigue. Influenced by Manthara, Queen Kaikeyi claims two boons from King Dasharatha: the exile of Rama and the coronation of Bharata. To preserve his father's honor and the sanctity of Truth, Rama joyfully accepts the exile. He is joined by Sita and Lakshmana, leaving a grieving city behind. This Kanda explores the heights of human emotion and the absolute commitment to one's word.",
    timeline: [
      "Preparation for the Yuvaraja coronation",
      "Manthara's manipulation of Kaikeyi",
      "Dasharatha's tragic dilemma",
      "Rama's calm departure for the forest",
      "Bharata's refusal of the crown",
      "The meeting at Chitrakoot"
    ],
    keyCharacters: [
      { name: "Lord Rama", role: "The Maryada Purushottam" },
      { name: "King Dasharatha", role: "The Bound King" },
      { name: "Queen Kaikeyi", role: "The Driven Queen" },
      { name: "Bharata", role: "The Selfless Brother" }
    ],
    lifeLessons: [
      "Truth is the ultimate foundation of society.",
      "True love is measured by sacrifice, not possession.",
      "Character is revealed in how one handles sudden misfortune."
    ],
    turningPoints: [
      "Rama's refusal to return to Ayodhya even after his father's death, choosing to fulfill his promise over the throne.",
      "Bharata's decision to rule from outside the city, placing Rama's sandals on the throne."
    ],
    philosophicalMeanings: [
      {
        title: "Conflict of Duties",
        meaning: "Represents the struggle between personal affection and the higher call of moral law (Dharma)."
      },
      {
        title: "The Sandals (Paduka)",
        meaning: "Symbolize the presence of the Divine guiding our actions even when physically absent."
      }
    ]
  },
  {
    title: "Aranya Kanda",
    subtitle: "The Forest Exile",
    tagline: "Amidst the serenity of nature, the shadows of the demon king grow long.",
    slug: "aranya-kanda",
    icon: <Trees className="h-7 w-7" />,
    summary: "Life in the Dandaka forest leads to the abduction of Mata Sita by Ravana. A story of loss that begins the epic quest for the divine soul.",
    hanumanFocus: "The call of destiny. As Lord Rama wanders the southern woods, he draws closer to the mountain where Hanuman Ji awaits his true Master.",
    imageUrl: "https://i.pinimg.com/736x/34/af/7b/34af7b4feae4086a6678b44902c9bf1f.jpg",
    imageHint: "forest hut",
    colorTheme: "from-emerald-900/60 via-emerald-800/40 to-background",
    fullStory: "In the depths of the Dandaka forest, the trio encounters various sages and cleanses the woods of negative forces. Their peaceful existence is shattered by the demoness Shurpanakha, which triggers Ravana's vengeance. Using the illusion of a golden deer, Ravana draws Rama and Lakshmana away from the hermitage and abducts Sita. The search for Sita begins with the heroic sacrifice of Jatayu and the meeting with Mother Shabari, pointing Rama toward the Vanara kingdom.",
    timeline: [
      "Encounters with the Sages of Dandaka",
      "The insult of Shurpanakha",
      "The illusion of the Golden Deer (Maricha)",
      "The abduction of Mata Sita",
      "Jatayu's final battle and martyrdom",
      "Meeting Mother Shabari"
    ],
    keyCharacters: [
      { name: "Lord Rama", role: "The Grieving Seeker" },
      { name: "Ravana", role: "The Deceptive King" },
      { name: "Jatayu", role: "The Noble Martyr" },
      { name: "Maricha", role: "The Golden Deer" }
    ],
    lifeLessons: [
      "Illusion often distracts us from our true purpose.",
      "Even a bird can teach the highest lessons of sacrifice.",
      "Devotion (Shabari) is recognized by the Divine regardless of status."
    ],
    turningPoints: [
      "The crossing of the Lakshman Rekha, symbolizing the consequences of stepping outside the bounds of wisdom.",
      "Jatayu's news, which gives Rama his first clue about Sita's abductor."
    ],
    philosophicalMeanings: [
      {
        title: "The Golden Deer",
        meaning: "Represents the material world's distractions (Maya) that lead the soul away from the Divine."
      },
      {
        title: "The Forest",
        meaning: "A symbol of the human mind—full of both serenity and dangerous impulses that must be navigated."
      }
    ]
  },
  {
    title: "Kishkindha Kanda",
    subtitle: "The Divine Alliance",
    tagline: "The meeting of the ages between the Lord and his greatest devotee.",
    slug: "kishkindha-kanda",
    icon: <Users className="h-7 w-7" />,
    summary: "On the slopes of Rishyamukha, Lord Rama first encounters Hanuman. An alliance is forged with Sugriva, initiating the greatest search operation in history.",
    hanumanFocus: "The moment of recognition. Disguised as a Brahmin, Hanuman tests Rama and quickly recognizes his Divinity, surrendering his life to the Lord's mission.",
    imageUrl: "https://i.pinimg.com/736x/0a/de/aa/0adeaa4abaca17b305d7f6634d82c8fa.jpg",
    imageHint: "rama hanuman meeting",
    colorTheme: "from-blue-900/60 via-blue-800/40 to-background",
    fullStory: "Rama and Lakshmana arrive at Pampa Lake and meet Hanuman, who introduces them to the exiled Vanara King Sugriva. A sacred fire is lit to witness their alliance. Rama helps Sugriva regain his kingdom by defeating the powerful Vali. In gratitude, Sugriva mobilizes the Vanara forces. Hanuman, Jambavan, and Angada lead the southern search party, eventually reaching the ocean where they learn of Sita's location in Lanka.",
    timeline: [
      "The first meeting of Rama and Hanuman",
      "Alliance at the sacred fire",
      "The duel between Vali and Sugriva",
      "Coronation of Sugriva",
      "The gathering of the Vanara army",
      "The southern search reaching the sea"
    ],
    keyCharacters: [
      { name: "Hanuman Ji", role: "The Bridge of Faith" },
      { name: "Sugriva", role: "The Allied King" },
      { name: "Vali", role: "The Fallen Might" },
      { name: "Jambavan", role: "The Wise Elder" }
    ],
    lifeLessons: [
      "Friendship is a partnership in Dharma.",
      "Recognition of the Divine requires a clear and humble mind.",
      "Even the powerful can fall if they lose their moral compass."
    ],
    turningPoints: [
      "The alliance between Rama and Sugriva, shifting the epic from a quest of two into a war of nations.",
      "Jambavan reminding Hanuman of his latent powers, enabling the impossible leap."
    ],
    philosophicalMeanings: [
      {
        title: "Satsang (Good Company)",
        meaning: "Illustrates how associating with the righteous leads to the discovery of one's own hidden strengths."
      },
      {
        title: "The Vanaras",
        meaning: "Symbolize the untamed, energetic aspects of the mind that find direction through devotion."
      }
    ]
  },
  {
    title: "Sundara Kanda",
    subtitle: "The Glory of Hanuman",
    tagline: "A breathtaking leap of faith across the ocean to ignite the flame of hope.",
    slug: "sundara-kanda",
    icon: <Sailboat className="h-7 w-7" />,
    summary: "The heroic deeds of Hanuman Ji. Across the ocean to Lanka, he carries Rama's ring to Sita, proving that faith can overcome any obstacle.",
    hanumanFocus: "The supreme hero. From the Leap across the ocean to finding Sita in Ashoka Vatika, Hanuman Ji's wisdom, humility, and valor shine brighter than the sun.",
    imageUrl: "https://i.pinimg.com/736x/50/e1/26/50e1267d0be49fc07b781d91ff0de390.jpg",
    imageHint: "hanuman lanka",
    colorTheme: "from-sky-900/60 via-sky-800/40 to-background",
    fullStory: "Sundara Kanda is the only book in the Ramayana where the hero is not Rama, but Hanuman. It details Hanuman's incredible flight to Lanka, his encounters with sea demons, and his search through Ravana's golden city. He eventually finds Sita in the Ashoka Grove. He delivers Rama's signet ring, reassures her, and then challenges the might of Lanka by destroying the grove and allowing his capture to counsel Ravana. After setting Lanka ablaze, he returns with the joyous news of Sita's discovery.",
    timeline: [
      "The magnificent leap over the ocean",
      "Overcoming the obstacles of Surasa and Simhika",
      "The discovery of Sita in Ashoka Vatika",
      "Delivery of the Signet Ring",
      "Destruction of the Ashoka Grove",
      "The burning of Lanka and the return flight"
    ],
    keyCharacters: [
      { name: "Hanuman Ji", role: "The Divine Messenger" },
      { name: "Mata Sita", role: "The Embodiment of Hope" },
      { name: "Ravana", role: "The Arrogant King" },
      { name: "Vibhishana", role: "The Conscientious Brother" }
    ],
    lifeLessons: [
      "Faith makes the impossible possible.",
      "Communication can be the strongest weapon in a crisis.",
      "True power is always accompanied by humility."
    ],
    turningPoints: [
      "Hanuman's conversation with Sita, which prevents her from taking her own life and restores her will to live.",
      "The burning of Lanka, which signals the end of Ravana's perceived invincibility."
    ],
    philosophicalMeanings: [
      {
        title: "The Soul's Rescue",
        meaning: "Sita (the soul) is separated from Rama (the Divine) by the ten heads of the ego (Ravana). Hanuman (the breath/Prana) bridges the gap."
      },
      {
        title: "Sundara (Beautiful)",
        meaning: "Refers to the beauty of selfless devotion and the triumph of the spirit over material walls."
      }
    ]
  },
  {
    title: "Yuddha Kanda",
    subtitle: "The War for Dharma",
    tagline: "The ultimate triumph of Light over the darkness of ego.",
    slug: "yuddha-kanda",
    icon: <LucideZap className="h-7 w-7" />,
    summary: "The epic battle between Rama's army and Ravana's forces. A cataclysmic war where divine weapons and high valor decide the fate of the world.",
    hanumanFocus: "The invincible protector. Hanuman Ji carries the Dronagiri mountain to save Lakshmana and serves as the unwavering general in the fight for righteousness.",
    imageUrl: "https://i.pinimg.com/736x/4b/6f/fd/4b6ffd08ae798038cdd5542e4099baa0.jpg",
    imageHint: "battle war",
    colorTheme: "from-red-900/60 via-red-800/40 to-background",
    fullStory: "The Vanara army, led by Rama and supported by the defector Vibhishana, builds a bridge of stone across the sea. The siege of Lanka begins. The war sees the fall of legendary warriors like Kumbhakarna and the illusionist Indrajit. Hanuman fetches the Sanjeevani mountain to revive the fallen. Finally, in a cosmic duel, Rama slays Ravana with the Brahmastra. Sita is rescued, and the exile ends with a return to Ayodhya on the celestial chariot, Pushpaka Vimana.",
    timeline: [
      "Construction of the Rama Setu",
      "The siege of Lanka",
      "Healing the army with the Sanjeevani herb",
      "The fall of Kumbhakarna and Indrajit",
      "The final duel between Rama and Ravana",
      "The Agni Pariksha and return to Ayodhya"
    ],
    keyCharacters: [
      { name: "Lord Rama", role: "The Victorious Warrior" },
      { name: "Ravana", role: "The Fallen Ego" },
      { name: "Lakshmana", role: "The Heroic Brother" },
      { name: "Vibhishana", role: "The Righteous Guide" }
    ],
    lifeLessons: [
      "Dharma always triumphs in the end.",
      "Unity and teamwork can conquer even the strongest fortresses.",
      "Arrogance is the seed of inevitable destruction."
    ],
    turningPoints: [
      "Vibhishana joining Rama's side, providing the strategic secrets of Lanka's defenses.",
      "The death of Ravana, marking the restoration of cosmic order."
    ],
    philosophicalMeanings: [
      {
        title: "The Ten Heads",
        meaning: "Represent the five senses and five organs of action. Cutting them off symbolizes the conquest of the lower self."
      },
      {
        title: "Rama Setu",
        meaning: "The bridge between the human effort and divine grace that allows us to cross the 'ocean' of suffering."
      }
    ]
  },
  {
    title: "Uttara Kanda",
    subtitle: "The Eternal Legacy",
    tagline: "The return to the Golden Age and the eternal presence of the Divine.",
    slug: "uttara-kanda",
    icon: <Crown className="h-7 w-7" />,
    summary: "Lord Rama is crowned in Ayodhya, establishing Rama Rajya. A Kanda of legacy, the birth of Lava and Kusha, and the eternal grace of the Chiranjivi.",
    hanumanFocus: "The eternal devotee. Blessed with immortality, Hanuman Ji chooses to stay on Earth as long as the name of Rama is chanted, protecting all seekers.",
    imageUrl: "https://i.pinimg.com/736x/42/2d/61/422d61528dfd90e385b640e250759b5e.jpg",
    imageHint: "coronation",
    colorTheme: "from-purple-900/60 via-purple-800/40 to-background",
    fullStory: "Uttara Kanda details the ideal rule of Lord Rama, known as Rama Rajya. It also narrates the secondary stories of various characters and the second exile of Sita. In Valmiki's ashram, the twins Lava and Kusha are born and raised. They eventually recite the Ramayana in Rama's court, leading to the final reunion and Sita's return to Mother Earth. The epic concludes with Rama's return to his divine form and the blessing of eternal life for Hanuman.",
    timeline: [
      "The Coronation of Lord Rama",
      "The second exile of Mata Sita",
      "Birth of Lava and Kusha in Valmiki's ashram",
      "Recitation of the epic in the royal court",
      "Sita's final return to Mother Earth",
      "Rama's ascension back to Vaikuntha"
    ],
    keyCharacters: [
      { name: "Lord Rama", role: "The Ideal King" },
      { name: "Lava & Kusha", role: "The Legacy Bearers" },
      { name: "Sage Valmiki", role: "The Divine Author" },
      { name: "Hanuman Ji", role: "The Immortal Guardian" }
    ],
    lifeLessons: [
      "The duty of a leader is often a path of personal sacrifice.",
      "Legacy is carried forward through storytelling and art.",
      "Devotion is timeless and survives even the departure of the Divine."
    ],
    turningPoints: [
      "Lava and Kusha's recitation, which moves the entire kingdom and reveals the power of the narrative.",
      "Sita's final assertion of her purity before returning to the Earth."
    ],
    philosophicalMeanings: [
      {
        title: "Rama Rajya",
        meaning: "The ideal state of governance where peace, justice, and prosperity prevail for all."
      },
      {
        title: "The Ascension",
        meaning: "Symbolizes that while the physical manifestation of the Divine may pass, the teachings and the presence remain eternal."
      }
    ]
  }
];
