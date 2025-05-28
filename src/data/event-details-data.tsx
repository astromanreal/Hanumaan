// src/data/event-details-data.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { Feather, Sun, Users, BookOpenText, Zap, AlertTriangle, Handshake, User, Crown, Sailboat, GitBranchPlus, Mountain, Aperture, Flame, Home, CheckCircle, MessageSquare, Shield, Award, CalendarDays, Users2, Utensils, Tv, BookHeart, Link as LinkIcon, ListChecks, UserCircle, ClockIcon, Landmark, Languages, Lamp } from 'lucide-react';

interface EventCharacter {
  name: string;
  role: string;
  description: string;
  icon?: ReactNode;
}

interface EventSequenceStep {
  step: number;
  action: string;
}

interface EventSignificanceDetail {
  key_idea: string;
  moral_lesson: string;
}

// Existing symbolism for narrative events
interface EventSymbolismDetail {
  playfulness?: string;
  curse_and_reminder?: string;
  hanuman_disguise?: string;
  pledge_of_devotion?: string;
  the_leap?: string;
  ocean?: string;
  encounters_during_flight?: string;
  burning_tail?: string;
  lanka_in_flames?: string;
  hanuman_return?: string;
  chudamani?: string;
  sanjeevani_herb?: string;
  hanuman_roar_battle?: string;
  hanuman_lifting_mountain?: string;
  coronation_of_rama?: string;
  hanuman_service_coronation?: string;
  immortality_of_hanuman?: string;
  hanuman_eternal_service?: string;
  meaning_of_name_interpretations?: string[]; 
  rama_s_ring?: string; // For Sita's rescue
  hanuman_s_service?: string; // For coronation and immortality
}

interface EventImpactDetail {
  spiritual_impact: string;
  cultural_impact: string;
}

// New interfaces for Regular Worship Data
interface RegularWorshipDaySignificance {
  spiritual_meaning: string;
  devotee_benefits: string[];
}

interface RegularWorshipRituals {
  early_morning_preparation?: string[];
  offerings?: string[];
  prayers_and_chants?: string[];
  temple_practices?: string[];
  dos_and_donts?: {
    dos: string[];
    donts: string[];
  };
}

interface RegularWorshipData {
  days: string[];
  significance: {
    Tuesday?: RegularWorshipDaySignificance;
    Saturday?: RegularWorshipDaySignificance;
    [key: string]: RegularWorshipDaySignificance | undefined; 
  };
  rituals: RegularWorshipRituals;
  benefits: string[];
  recommended_for: string[];
  folk_beliefs: string[];
}


// Updated interface for festival-specific details and practices like Parayanam
interface FestivalSpecificDetails {
  type?: string;
  dateObserved?: {
    lunarCalendar?: string;
    gregorianVariation?: string;
    regionalVariations?: Array<{ region: string; date: string }>;
    recommendedDays?: string[]; 
  };
  significanceCategorized?: {
    spiritual?: string;
    cultural?: string;
    devotional?: string;
    benefits?: string[]; 
    hanumanConnection?: string[];
  };
  associatedDeity?: {
    name?: string;
    attributes?: string[];
    mount?: string;
  };
  celebrationRituals?: { 
    commonPractices?: string[];
    specialRituals?: string[];
    preparation?: string[];
    method?: string[];
    completion?: string | string[];
    schedules?: Array<{ type: string; description: string }>;
    eveningObservances?: string[];
    observanceGuidelines?: {
        fastingType?: string;
        duration?: string;
        whoCanObserve?: string[];
    };
  };
  observedBy?: string[];
  importantLocationsList?: Array<{ temple: string; location: string }>;
  legends?: {
    birthStory?: string;
    childhoodLegend?: string;
    boonOfImmortality?: string;
  };
  symbols?: {
    color?: string;
    iconography?: string;
    meaningOfName?: { 
        sanskrit?: string;
        interpretations?: string[];
    };
  };
  mantrasAndChants?: string[];
  foodOfferings?: string[];
  modernObservations?: {
    mediaCoverage?: string;
    socialImpact?: string;
    onlineParticipation?: string;
    audioVisualResources?: string[];
    templeDecorations?: string[]; 
    communityPrayers?: string[]; 
  };
  relatedFestivals?: string[]; 
  references?: string[];
  scriptureDetails?: { 
    positionInRamayana?: number;
    totalChapters?: number;
    totalShlokas?: number;
    languageOfOrigin?: string;
    author?: string;
    theme?: string;
    keyCharactersInScripture?: string[]; 
    languagesAvailable?: string[];
  };
  regularWorshipDetails?: RegularWorshipData; 
  uniqueBeliefs?: Array<{ title: string; points: string[] }>; 
  recommendedFor?: string[]; 
  folkBeliefs?: string[];
  conclusionAndBlessings?: {
    closingPrayer?: string;
    endingRitual?: string;
  };
}

export interface DetailedHanumanEvent {
  id: string;
  name: string;
  mainDescription: string;
  date: string; 
  location: string; 
  characters_involved: EventCharacter[];
  sequence_of_events: EventSequenceStep[]; 
  significance_detail: EventSignificanceDetail; 
  symbolism_detail: EventSymbolismDetail; 
  impact_detail: EventImpactDetail; 
  icon: ReactNode;
  imageUrl?: string;
  imageHint?: string;
  festivalDetails?: FestivalSpecificDetails; 
}


export const detailedEventsData: DetailedHanumanEvent[] = [
  {
    id: 'hanuman-childhood-curse',
    name: "Hanuman’s Childhood and Curse",
    mainDescription: "This narrative explores young Hanuman's playful yet powerful nature, his inadvertent act of mistaking the sun for a fruit, the subsequent curse that made him forget his powers, and the eventual circumstances under which he was reminded of his divine capabilities.",
    date: "Mythological Time Period (Childhood of Hanuman)",
    location: "Various locations in Hindu mythology, including forests and celestial realms.",
    characters_involved: [
      { name: "Hanuman (Child)", role: "Divine Child, Mischief Maker", description: "As a child, Hanuman was imbued with immense energy and a playful spirit. His actions, though sometimes disruptive, often stemmed from curiosity and divine Lila (play).", icon: <Feather /> },
      { name: "Surya (Sun God)", role: "Celestial Body", description: "The Sun, mistaken by young Hanuman for a ripe fruit due to its radiant glow.", icon: <Sun /> },
      { name: "Indra", role: "King of Gods", description: "Intervened when Hanuman leaped for the sun, striking him with his Vajra (thunderbolt), leading to Vayu's anger.", icon: <Zap /> },
      { name: "Vayu (Wind God)", role: "Spiritual Father", description: "Hanuman's spiritual father, who withdrew air from the world in anger after Hanuman was struck.", icon: <Users /> },
      { name: "Sages (e.g., Sage Durvasa in some versions)", role: "Ascetics, Bestowers of Curse/Boons", description: "In some accounts, Hanuman's youthful pranks disturbed meditating sages, leading to a curse limiting his memory of his powers.", icon: <BookOpenText /> }
    ],
    sequence_of_events: [
      { step: 1, action: "Young Hanuman, driven by hunger and curiosity, sees the rising sun and mistakes it for a luscious fruit." },
      { step: 2, action: "He leaps towards the sun with his divine strength, intending to grab and eat it." },
      { step: 3, action: "Indra, concerned for the celestial order (or the sun itself), hurls his Vajra (thunderbolt) at Hanuman, striking his jaw (Hanu), which gives him his name." },
      { step: 4, action: "Hanuman falls to earth. His father, Vayu (Wind God), enraged, withdraws air from the world, causing immense suffering." },
      { step: 5, action: "The gods, led by Brahma and Shiva, appease Vayu and revive Hanuman. They bestow numerous boons upon him, making him immensely powerful and immortal." },
      { step: 6, action: "In some versions, due to later playful disturbances to sages (like Sage Durvasa), Hanuman is cursed to forget his powers until reminded at an appropriate time by someone else (like Jambavan before the Lanka leap)." }
    ],
    significance_detail: {
      key_idea: "The event demonstrates Hanuman's divine origins, innate power even as a child, and sets the stage for his later role where his forgotten powers are crucial.",
      moral_lesson: "It teaches about the responsible use of power, the consequences of actions (even if innocent), and the importance of divine grace and timely reminders of one's potential. It also highlights that even divine beings undergo trials and phases of unawareness."
    },
    symbolism_detail: {
      playfulness: "Hanuman's attempt to eat the sun symbolizes divine Lila (play) and the boundless energy of a divine child, unconstrained by ordinary limitations.",
      curse_and_reminder: "The curse (in versions where it occurs for pranks) and the eventual reminder of his powers symbolize the veiling of divine potential by Maya (illusion) or circumstance, and its reawakening through guidance or need. The jaw injury (Hanu-man) is a permanent mark of this childhood adventure."
    },
    impact_detail: {
      spiritual_impact: "This story is often told to illustrate Hanuman's extraordinary birth and the divine blessings that made him invincible. It reinforces faith in his protective powers and his ability to overcome any obstacle.",
      cultural_impact: "It's a popular Puranic tale that endears Hanuman to devotees, showcasing his unique journey from a playful child to a mighty hero. The incident also explains his name and his connection to various deities."
    },
    icon: <Feather />,
    imageUrl: 'https://i.pinimg.com/736x/fe/b8/47/feb847bb5a6300eab21f58630fc89c91.jpg',
    imageHint: 'hanuman child sun sky'
  },
  {
    id: 'meeting-with-rama',
    name: "Meeting with Lord Rama",
    mainDescription: "Hanuman meets Lord Rama during Rama's search for Sita. Hanuman, as a minister of Sugriva, approaches Rama and Lakshmana in the forest. Upon realizing their divine nature and cause, Hanuman forms an eternal bond of devotion with Rama. This marks the beginning of his lifelong service and loyalty.",
    date: "Treta Yuga (Mythological Time Period)",
    location: "Rishyamukha Mountain, Kishkindha",
    characters_involved: [
      { name: "Hanuman", role: "Messenger and Devotee", description: "Hanuman, a minister of Sugriva, disguises himself as a Brahmin and approaches Rama and Lakshmana. His eloquence and wisdom impress Rama deeply. From this moment on, Hanuman becomes a devoted servant of Rama.", icon: <UserCircle /> },
      { name: "Lord Rama", role: "Divine Prince of Ayodhya", description: "Rama, an incarnation of Vishnu, is on a quest to find his abducted wife Sita. His meeting with Hanuman is a pivotal moment that initiates a divine companionship.", icon: <Crown /> },
      { name: "Lakshmana", role: "Younger Brother of Rama", description: "Lakshmana accompanies Rama during the exile and supports him throughout the search for Sita.", icon: <Users /> },
      { name: "Sugriva", role: "Vanara King in Exile", description: "The exiled king of Kishkindha who forms an alliance with Rama. He sends Hanuman to approach Rama.", icon: <Users2 /> }
    ],
    sequence_of_events: [
      { step: 1, action: "Rama and Lakshmana are wandering in the forest in search of Sita when they approach the Rishyamukha Mountain." },
      { step: 2, action: "Sugriva, fearing they might be allies of his enemy Vali, sends Hanuman to investigate." },
      { step: 3, action: "Hanuman, in the guise of a Brahmin, speaks to Rama and Lakshmana and learns of their purpose." },
      { step: 4, action: "Deeply moved by Rama’s character and mission, Hanuman reveals his true identity and pledges his devotion and service." },
      { step: 5, action: "Hanuman becomes a bridge between Sugriva and Rama, leading to an alliance to rescue Sita." }
    ],
    significance_detail: {
      key_idea: "The meeting establishes the eternal bond of devotion between Hanuman and Rama.",
      moral_lesson: "It teaches the virtues of humility, service, and the transformative power of divine companionship. Hanuman’s devotion is born not of command, but of love and recognition of Rama’s divinity."
    },
    symbolism_detail: {
      hanuman_disguise: "Symbolizes humility and diplomacy, showing his wise approach in delicate matters.",
      pledge_of_devotion: "Represents unconditional surrender and bhakti (devotion) that transcends reason and ego."
    },
    impact_detail: {
      spiritual_impact: "A cornerstone moment in the Ramayana where divine friendship and service begin. Hanuman’s role as the perfect devotee starts here.",
      cultural_impact: "Widely portrayed in scriptures, art, theater, and storytelling as the moment of divine connection. Hanuman is revered as the embodiment of selfless service and loyalty."
    },
    icon: <Handshake />,
    imageUrl: 'https://i.pinimg.com/736x/0a/de/aa/0adeaa4abaca17b305d7f6634d82c8fa.jpg',
    imageHint: 'rama hanuman meeting'
  },
  {
    id: 'hanuman-leap-to-lanka',
    name: "Hanuman’s Leap to Lanka",
    mainDescription: "Hanuman makes a mighty leap across the ocean from the Indian mainland to Lanka in search of Sita. This journey is filled with challenges, divine encounters, and tests of his strength and devotion. It is one of the most iconic and celebrated episodes in the Ramayana.",
    date: "Treta Yuga (Mythological Time Period)",
    location: "From Mahendragiri (India) to Lanka (modern-day Sri Lanka)",
    characters_involved: [
      { name: "Hanuman", role: "Devotee and Seeker of Sita", description: "Hanuman undertakes the courageous mission to leap over the ocean to Lanka. With divine strength and deep devotion to Rama, he overcomes all obstacles and fulfills his duty.", icon: <UserCircle /> },
      { name: "Sampati", role: "Giant Vulture", description: "Sampati, the elder brother of Jatayu, helps Hanuman and the Vanaras by revealing that Sita is in Lanka, which motivates Hanuman to undertake the leap.", icon: <Feather /> },
      { name: "Mainaka", role: "Mountain Spirit", description: "Mainaka rises from the ocean and offers Hanuman rest, symbolizing nature's support for divine missions.", icon: <Mountain /> },
      { name: "Surasa", role: "Sea Serpent (Naga Matriarch)", description: "Surasa tests Hanuman's wisdom and agility by challenging him to enter her mouth and emerge out safely.", icon: <GitBranchPlus /> },
      { name: "Simhika", role: "Demoness of the Sea", description: "Simhika tries to trap Hanuman by grabbing his shadow, but he defeats her swiftly, showcasing his power.", icon: <Aperture /> }
    ],
    sequence_of_events: [
      { step: 1, action: "After receiving clues from Sampati, Hanuman decides to leap across the ocean to Lanka to find Sita." },
      { step: 2, action: "He climbs Mahendragiri and prays to the wind god Vayu (his father) before making the massive leap." },
      { step: 3, action: "On the way, he is greeted by Mainaka, the mountain, who offers him rest, but Hanuman declines, focused on his mission." },
      { step: 4, action: "Surasa tests him by asking him to enter her mouth. Hanuman enlarges himself and then quickly shrinks to pass through, pleasing her with his intelligence." },
      { step: 5, action: "Simhika tries to capture him by pulling his shadow, but Hanuman defeats her effortlessly." },
      { step: 6, action: "Finally, Hanuman reaches the shores of Lanka, ready to begin his search for Sita." }
    ],
    significance_detail: {
      key_idea: "Hanuman’s leap is a symbol of absolute devotion, courage, and divine mission.",
      moral_lesson: "True devotion removes all fear. Even the seemingly impossible becomes possible when undertaken with sincerity, clarity, and spiritual purpose."
    },
    symbolism_detail: {
      the_leap: "Represents transcendence over physical and mental limitations through bhakti (devotion).",
      ocean: "Symbolizes the vastness of ignorance and separation from the divine. Hanuman's crossing indicates the power of faith to overcome this separation.",
      encounters_during_flight: "Each represents a test of Hanuman’s resolve, intelligence, strength, and spiritual maturity."
    },
    impact_detail: {
      spiritual_impact: "This leap is celebrated in devotional literature as a symbol of spiritual ascent, where the devotee overcomes all hurdles for divine union.",
      cultural_impact: "Frequently depicted in Ramayana recitations, temples, art, and plays; the leap has become a lasting icon of unwavering faith and heroism in Hindu culture."
    },
    icon: <Sailboat />,
    imageUrl: 'https://i.pinimg.com/736x/47/61/ed/4761ed66f7c9bdaeaddc33a45b4ba8e7.jpg',
    imageHint: 'hanuman ocean leap lanka'
  },
  {
    id: 'burning-of-lanka',
    name: "Burning of Lanka",
    mainDescription: "After successfully finding Sita in Lanka and delivering Rama’s message, Hanuman allows himself to be captured by Ravana’s forces to assess the enemy's strength. As punishment, Ravana orders his tail to be set on fire. Hanuman escapes, using the burning tail to set fire to large parts of Lanka, demonstrating his divine might and spreading terror among the rakshasas.",
    date: "Treta Yuga (Mythological Time Period)",
    location: "Lanka (modern-day Sri Lanka)",
    characters_involved: [
      { name: "Hanuman", role: "Messenger and Warrior", description: "As Rama’s messenger, Hanuman fearlessly enters Lanka, finds Sita, delivers Rama’s ring and message, gets captured, and retaliates by burning down parts of Lanka with his fiery tail.", icon: <UserCircle /> },
      { name: "Sita", role: "Wife of Rama, Captive of Ravana", description: "Sita is discovered in the Ashoka Vatika garden, where Hanuman gives her hope and assurance of Rama’s rescue.", icon: <Home /> },
      { name: "Ravana", role: "King of Lanka, Antagonist", description: "After hearing of Hanuman's intrusion, Ravana orders his execution, which is changed to the burning of Hanuman’s tail upon counsel from his ministers.", icon: <Crown /> },
      { name: "Vibhishana", role: "Ravana’s Brother and Wise Counselor", description: "Vibhishana advises Ravana against killing a messenger, resulting in the alternative punishment of burning Hanuman’s tail.", icon: <BookOpenText /> }
    ],
    sequence_of_events: [
      { step: 1, action: "Hanuman enters Lanka, searches for Sita, and finds her in the Ashoka Vatika." },
      { step: 2, action: "He gives Sita Rama’s ring and assures her that Rama will come to rescue her." },
      { step: 3, action: "After causing havoc in the royal gardens and killing some rakshasas, Hanuman allows himself to be captured to assess Ravana’s court." },
      { step: 4, action: "Ravana orders his tail to be set on fire as punishment. The rakshasas wrap it in cloth and oil and set it ablaze." },
      { step: 5, action: "With his burning tail, Hanuman escapes from his bonds and leaps across the city, setting fire to homes, buildings, and fortresses." },
      { step: 6, action: "After burning Lanka, Hanuman leaps back across the ocean to return to Rama with the news about Sita and Lanka’s layout." }
    ],
    significance_detail: {
      key_idea: "The burning of Lanka is a symbolic act of divine power unleashed against evil and injustice.",
      moral_lesson: "Devotion and fearlessness in the face of danger lead to the triumph of righteousness. Even a single devotee can shake the foundations of evil when empowered by faith and dharma."
    },
    symbolism_detail: {
      burning_tail: "Represents divine wrath and justice. Though Hanuman is a peaceful messenger, he is also an unstoppable force when dharma is challenged.",
      lanka_in_flames: "Symbolizes the impending fall of arrogance, ego, and unrighteousness represented by Ravana and his kingdom."
    },
    impact_detail: {
      spiritual_impact: "Demonstrates Hanuman’s dual nature as both a humble servant and a fierce warrior, reinforcing his role as an extension of divine will.",
      cultural_impact: "This episode is dramatically portrayed in Ram Leela performances, literature, and temple murals; it is celebrated as a moment of heroic defiance and righteous fury."
    },
    icon: <Flame />,
    imageUrl: 'https://i.pinimg.com/736x/fe/30/2f/fe302f05fa633a97f0455a57ea105615.jpg',
    imageHint: 'hanuman lanka fire'
  },
  {
    id: 'hanuman-return-to-rama',
    name: "Hanuman’s Return to Rama",
    mainDescription: "After successfully meeting Sita in Lanka and assuring her of Rama's plan to rescue her, Hanuman returns from Lanka by leaping back across the ocean. He reaches Rama and the Vanara army to report his findings, gives Sita’s message, and provides crucial intelligence about Lanka. This moment cements his role as the most trusted and selfless devotee of Lord Rama.",
    date: "Treta Yuga (Mythological Time Period)",
    location: "From Lanka (modern-day Sri Lanka) to Kishkindha and Rama's camp",
    characters_involved: [
      { name: "Hanuman", role: "Devoted Messenger and Hero", description: "Returns to Rama after completing a divine mission of discovering Sita. His devotion, clarity, and courage are unmatched as he delivers the message of hope and love from Sita.", icon: <UserCircle /> },
      { name: "Rama", role: "Prince of Ayodhya, Incarnation of Vishnu", description: "Eagerly awaits news of Sita. Upon receiving Hanuman’s report, he is deeply moved and gains renewed hope and determination to rescue her.", icon: <Crown /> },
      { name: "Lakshmana", role: "Brother and Companion of Rama", description: "Listens attentively to Hanuman’s report and prepares alongside Rama for the upcoming war.", icon: <Users /> },
      { name: "Sugriva", role: "King of the Vanaras", description: "Leader of the monkey army, he is pleased with Hanuman’s success and begins preparations for the march toward Lanka.", icon: <Users2 /> }
    ],
    sequence_of_events: [
      { step: 1, action: "After burning Lanka and leaving Sita with a message of hope, Hanuman leaps across the ocean back to Rama." },
      { step: 2, action: "He lands at Mahendragiri and reunites with Jambavan, Angada, and the Vanara search party." },
      { step: 3, action: "The Vanaras celebrate Hanuman’s success and rush to report the news to Rama." },
      { step: 4, action: "Hanuman narrates his journey, describes Lanka, confirms Sita’s safety, and delivers the Chudamani (hair ornament) given by Sita to Rama as proof." },
      { step: 5, action: "Rama is overwhelmed with emotion and blesses Hanuman with eternal grace and divine affection." },
      { step: 6, action: "With renewed determination, the army begins preparing for the march to Lanka and the battle against Ravana." }
    ],
    significance_detail: {
      key_idea: "Hanuman’s return exemplifies the ideal qualities of a messenger: truthfulness, fearlessness, and unwavering loyalty.",
      moral_lesson: "True service lies in selfless dedication. Hanuman teaches that the highest devotion lies in carrying out divine will with love, courage, and humility."
    },
    symbolism_detail: {
      hanuman_return: "Represents the successful bridge between the divine and the distressed soul (Rama and Sita), and the faith that brings them together.",
      chudamani: "A token of memory, loyalty, and spiritual connection between Rama and Sita; it also symbolizes hope and the bond of dharma."
    },
    impact_detail: {
      spiritual_impact: "Reinforces Hanuman’s place as the perfect devotee (parama-bhakta), and a role model for messengers of truth and faith.",
      cultural_impact: "Hanuman’s return is widely celebrated in temples, bhajans, and Ramayana plays as the pivotal moment that leads to the epic war and ultimate triumph of dharma."
    },
    icon: <CheckCircle />,
    imageUrl: 'https://i.pinimg.com/736x/cd/ec/12/cdec12955d34b322d550da2e0d987e15.jpg',
    imageHint: 'hanuman rama reporting joy'
  },
  {
    id: 'battle-with-ravana',
    name: "The Battle with Ravana",
    mainDescription: "During the climactic war between Lord Rama and the demon king Ravana in Lanka, Hanuman plays a pivotal role in the success of Rama’s army. As one of the most powerful warriors in the Vanara sena, Hanuman showcases his divine strength, intelligence, and unshakable devotion by fighting numerous demons, protecting key allies, and even saving Lakshmana’s life by bringing the Sanjeevani herb.",
    date: "Treta Yuga (Mythological Time Period)",
    location: "Lanka Battlefield",
    characters_involved: [
      { name: "Hanuman", role: "Warrior, Devotee, and Protector", description: "Fought valiantly in the war, using his divine strength to crush rakshasas, uproot mountains, and protect Rama’s allies. His greatest contribution includes flying to the Himalayas to bring the Sanjeevani herb to save Lakshmana.", icon: <UserCircle /> },
      { name: "Rama", role: "Avatar of Vishnu, Commander of Dharma", description: "Leads the army of Vanaras against Ravana to rescue Sita and uphold righteousness. Relies deeply on Hanuman’s strength and devotion throughout the battle.", icon: <Crown /> },
      { name: "Lakshmana", role: "Rama’s Brother and Warrior", description: "Fights alongside Rama and is gravely injured by Indrajit, Ravana’s son. He is revived only due to Hanuman’s efforts.", icon: <Shield /> },
      { name: "Ravana", role: "King of Lanka, Antagonist", description: "The ten-headed demon king who abducted Sita and waged war against Rama. Ultimately defeated and killed in battle by Rama.", icon: <Zap /> },
      { name: "Indrajit (Meghnad)", role: "Ravana’s Son and Powerful Warrior", description: "Wounds Lakshmana with a powerful weapon, leading to the critical moment where Hanuman must fetch the Sanjeevani herb.", icon: <Zap /> },
      { name: "Jambavan", role: "Wise Warrior and Guide", description: "Advises Hanuman to fetch the Sanjeevani herb and reminds him of his powers during crucial moments in the battle.", icon: <BookOpenText /> }
    ],
    sequence_of_events: [
      { step: 1, action: "Rama, Lakshmana, Hanuman, and the Vanara army cross the ocean and begin their assault on Lanka." },
      { step: 2, action: "Hanuman leads numerous charges, defeats powerful rakshasa warriors, and protects fellow Vanaras." },
      { step: 3, action: "Lakshmana is struck by a powerful weapon from Indrajit and falls unconscious." },
      { step: 4, action: "Jambavan reminds Hanuman of his divine strength and asks him to fetch the Sanjeevani herb from the Dronagiri mountain." },
      { step: 5, action: "Hanuman flies to the Himalayas, lifts the entire mountain when unable to identify the herb, and returns in time to save Lakshmana." },
      { step: 6, action: "Hanuman continues to play a central role in the battle by destroying key enemy fortifications and boosting the morale of Rama’s army." },
      { step: 7, action: "Eventually, Rama kills Ravana with the Brahmastra, bringing the war to an end." }
    ],
    significance_detail: {
      key_idea: "Hanuman’s strength and devotion are essential to the success of Rama’s divine mission. His actions highlight how divine service and loyalty can overcome even the most fearsome obstacles.",
      moral_lesson: "In times of darkness, selfless devotion, courage, and action rooted in righteousness can illuminate the path to victory."
    },
    symbolism_detail: {
      sanjeevani_herb: "Symbolizes life-saving knowledge, faith, and divine intervention. Hanuman’s retrieval of it represents how true devotion can perform miracles.",
      hanuman_roar_battle: "A metaphor for dharma asserting itself over adharma (unrighteousness). His presence on the battlefield symbolizes hope, courage, and unwavering service."
    },
    impact_detail: {
      spiritual_impact: "Elevated Hanuman to the status of the ultimate devotee. His actions in the war earned him reverence across time as a protector and divine servant.",
      cultural_impact: "This episode is a staple in Ramayana performances, temple traditions, and prayers. Hanuman's bravery in war is remembered through festivals like Dussehra and recitations like the Hanuman Chalisa."
    },
    icon: <Shield />,
    imageUrl: 'https://i.pinimg.com/736x/4b/6f/fd/4b6ffd08ae798038cdd5542e4099baa0.jpg',
    imageHint: 'hanuman battle war'
  },
  {
    id: 'bringing-the-sanjeevani-herb',
    name: "Bringing the Sanjeevani Herb",
    mainDescription: "During the battle between Rama's army and Ravana's forces, Lakshmana is critically wounded by a powerful weapon from Ravana's son, Indrajit. In a desperate bid to save him, Hanuman is sent to the Himalayas to find and bring back the Sanjeevani herb, which is known for its healing powers. Unable to identify the exact herb, Hanuman lifts the entire mountain, carrying it back to the battlefield to save Lakshmana’s life.",
    date: "Treta Yuga (Mythological Time Period)",
    location: "Himalayas to the Battlefield in Lanka",
    characters_involved: [
      { name: "Hanuman", role: "Devoted Messenger and Hero", description: "Hanuman showcases his divine strength and devotion by flying to the Himalayas, bringing back the Sanjeevani herb to save Lakshmana’s life, demonstrating his unparalleled dedication to Rama and his mission.", icon: <UserCircle /> },
      { name: "Lakshmana", role: "Rama’s Brother and Warrior", description: "Severely injured in battle, Lakshmana is saved by the Sanjeevani herb that Hanuman brings from the Himalayas.", icon: <Shield /> },
      { name: "Rama", role: "Avatar of Vishnu, Commander of Dharma", description: "Desperate to save his brother Lakshmana, Rama sends Hanuman to retrieve the Sanjeevani herb to heal him.", icon: <Crown /> },
      { name: "Indrajit (Meghnad)", role: "Ravana’s Son and Powerful Warrior", description: "Wounds Lakshmana with a deadly weapon, creating the need for Hanuman to retrieve the life-saving herb.", icon: <Zap /> },
      { name: "Jambavan", role: "Wise Warrior and Guide", description: "Reminds Hanuman of his immense powers, encouraging him to fly to the Himalayas and bring the herb to save Lakshmana.", icon: <BookOpenText /> }
    ],
    sequence_of_events: [
      { step: 1, action: "Lakshmana is severely wounded in battle by Indrajit’s weapon, and his condition worsens quickly." },
      { step: 2, action: "Rama, deeply distressed by his brother's condition, instructs Hanuman to go to the Himalayas and bring back the Sanjeevani herb." },
      { step: 3, action: "Hanuman flies to the Himalayas and searches for the Sanjeevani herb, but he is unable to distinguish it from other plants." },
      { step: 4, action: "In a show of immense strength, Hanuman uproots the entire Dronagiri mountain, carrying it back to the battlefield." },
      { step: 5, action: "Upon returning to the battlefield, Hanuman places the mountain near Lakshmana, who is revived as the Sanjeevani herb works its miracle." },
      { step: 6, action: "Lakshmana regains his health, and the battle continues with renewed vigor, with Hanuman’s act of saving him becoming legendary." }
    ],
    significance_detail: {
      key_idea: "Hanuman’s act of bringing the Sanjeevani herb symbolizes his divine power and boundless devotion. His willingness to do anything, even perform feats of unimaginable strength, for the well-being of his lord and family highlights his role as an ideal devotee and servant.",
      moral_lesson: "True devotion is selfless and will go to any lengths to help those in need. Hanuman’s unwavering loyalty and dedication teach that faith and love are the greatest sources of strength."
    },
    symbolism_detail: {
      sanjeevani_herb: "Symbolizes life and the restoration of health, representing divine intervention and the power of faith. It also signifies the healing of both the body and spirit.",
      hanuman_lifting_mountain: "Represents the immense power that can be harnessed through faith, devotion, and divine favor. Hanuman's act shows that true devotion can transcend any physical or spiritual limitation."
    },
    impact_detail: {
      spiritual_impact: "This event further elevates Hanuman's status as the perfect devotee of Rama. His power and selflessness serve as an example for all devotees of how to serve God with total dedication and fearlessness.",
      cultural_impact: "The story of Hanuman bringing the Sanjeevani herb is a key part of the Ramayana narrative, celebrated in festivals, songs, and performances like the Ram Leela, where Hanuman’s heroic act is a central moment of devotion and miracle."
    },
    icon: <Mountain />,
    imageUrl: 'https://i.pinimg.com/736x/69/01/ab/6901abce05a65f8156940f0edf0603b9.jpg',
    imageHint: 'hanuman mountain herb'
  },
  {
    id: 'hanuman-role-sita-rescue',
    name: "Hanuman's Role in Sita’s Rescue",
    mainDescription: "Hanuman plays a pivotal role in the rescue of Sita, aiding Rama in locating her and contributing significantly to the defeat of Ravana’s forces. After meeting Sita in Lanka, Hanuman reassures her of Rama’s determination to rescue her and delivers Rama's ring as a symbol of his devotion. His courage and resourcefulness are vital in the success of Rama's mission, leading to the eventual triumph over Ravana and the rescue of Sita.",
    date: "Treta Yuga (Mythological Time Period)",
    location: "Lanka (Sri Lanka)",
    characters_involved: [
      { name: "Hanuman", role: "Messenger, Devotee, and Warrior", description: "Hanuman's devotion to Rama is showcased as he locates Sita in Lanka, reassures her, and brings back crucial information. His courage in overcoming obstacles, such as his leap to Lanka, and his contribution to the battle are key to Sita's rescue.", icon: <UserCircle /> },
      { name: "Rama", role: "Avatar of Vishnu, Husband of Sita", description: "Rama’s unwavering determination to rescue Sita is supported by Hanuman, whose actions enable the success of the rescue mission and the ultimate victory over Ravana.", icon: <Crown /> },
      { name: "Sita", role: "Wife of Rama", description: "Sita, abducted by Ravana, is finally reassured by Hanuman, who delivers Rama’s message and promise to rescue her.", icon: <UserCircle /> },
      { name: "Ravana", role: "Demon King of Lanka, Abductor of Sita", description: "Ravana’s tyranny and abduction of Sita set the stage for the heroic actions of Hanuman and Rama in the rescue mission.", icon: <Zap /> },
      { name: "Sugriva", role: "Monkey King and Ally of Rama", description: "Sugriva, alongside his army, plays a crucial part in assisting Rama in the war against Ravana, with Hanuman being the key warrior in their campaign.", icon: <Users2 /> },
      { name: "Vibhishana", role: "Ravana’s Brother, Defector to Rama's Side", description: "Vibhishana, who defected from Ravana’s side to support Rama, provides crucial inside information about Lanka that aids in the rescue mission.", icon: <BookOpenText /> }
    ],
    sequence_of_events: [
      { step: 1, action: "Hanuman, sent by Rama, leaps across the ocean to Lanka to find Sita and deliver Rama’s message of hope and love." },
      { step: 2, action: "Hanuman meets Sita in Ashoka Vatika and reassures her of Rama’s commitment to rescuing her, presenting Rama’s ring as a token of his promise." },
      { step: 3, action: "After a brief battle with Ravana’s forces, Hanuman allows himself to be captured, and then sets fire to parts of Lanka with his tail before returning to Rama with news of Sita’s well-being." },
      { step: 4, action: "Hanuman’s return with vital information regarding Sita’s location boosts the morale of Rama’s army, and they begin to prepare for the final battle with Ravana." },
      { step: 5, action: "With the help of Vibhishana and Sugriva, Rama’s army builds a bridge to cross the ocean to Lanka, leading to the final confrontation with Ravana." },
      { step: 6, action: "During the battle, Hanuman plays a crucial role in fighting Ravana’s warriors and in protecting Rama’s army, ensuring the defeat of Ravana and the rescue of Sita." },
      { step: 7, action: "After Ravana’s defeat, Sita is finally reunited with Rama, marking the fulfillment of Hanuman’s efforts and the victory of good over evil." }
    ],
    significance_detail: {
      key_idea: "Hanuman’s role in Sita’s rescue highlights the depth of his devotion, bravery, and selflessness. His unwavering support for Rama in the face of danger proves his unparalleled loyalty and dedication. This event solidifies Hanuman’s role as the ultimate devotee and servant of God.",
      moral_lesson: "Devotion, courage, and selfless service are the keys to overcoming any obstacle. Hanuman’s actions demonstrate that true loyalty to one’s purpose and to divine will brings success and fulfillment."
    },
    symbolism_detail: {
      rama_s_ring: "Symbolizes faith, trust, and the bond between Rama and Sita. It serves as a tangible token of Rama’s devotion and commitment to rescuing Sita.", 
      the_leap: "Hanuman’s Leap to Lanka represents the boundless courage and devotion that can overcome great distances and obstacles. It is a symbol of the power of faith and determination in achieving one’s purpose." 
    },
    impact_detail: {
      spiritual_impact: "This event demonstrates Hanuman’s role as a perfect devotee, capable of performing miraculous feats in service to his Lord. It is a key moment that elevates him to the status of a divine figure in Hinduism.",
      cultural_impact: "The rescue of Sita is one of the most iconic moments in the Ramayana, widely celebrated in various forms of art, drama, and literature, particularly during the festival of Diwali, symbolizing the triumph of good over evil."
    },
    icon: <MessageSquare />,
    imageUrl: 'https://i.pinimg.com/736x/76/d0/4d/76d04d0114aba1bae75a4463d5c7d590.jpg',
    imageHint: 'hanuman sita rescue'
  },
  {
    id: 'rama-coronation-hanuman-devotion',
    name: "Lord Rama’s Coronation and Hanuman’s Devotion",
    mainDescription: "After Ravana’s defeat and the rescue of Sita, Rama returns to his kingdom, Ayodhya, and is crowned as king. During this time, Hanuman remains by Rama's side, displaying unwavering devotion and loyalty. Despite his exalted status and the completion of the mission, Hanuman continues to serve Rama with humility and love, reaffirming his place as the ultimate devotee. He is also honored by Rama, who acknowledges his selfless service and devotion. Hanuman becomes the protector of Rama’s devotees, ensuring that those who revere Rama are shielded from harm.",
    date: "Treta Yuga (Mythological Time Period)",
    location: "Ayodhya",
    characters_involved: [
      { name: "Hanuman", role: "Devoted Servant and Protector", description: "Hanuman's devotion reaches its peak during Rama's coronation, where he continues to serve Rama without expecting any reward. He becomes the protector of Rama’s devotees, ensuring their well-being and safety.", icon: <UserCircle /> },
      { name: "Rama", role: "Avatar of Vishnu, King of Ayodhya", description: "Rama is crowned as king of Ayodhya after defeating Ravana and rescuing Sita. He acknowledges Hanuman’s devotion and service, offering him a place of honor in his court.", icon: <Crown /> },
      { name: "Sita", role: "Wife of Rama", description: "Sita stands beside Rama during his coronation, as they are both honored and revered by the people of Ayodhya.", icon: <UserCircle /> },
      { name: "Bharata", role: "Rama’s Brother and Devoted Follower", description: "Bharata supports Rama’s coronation, fully aware of his duties to the kingdom. He honors Hanuman for his dedication to Rama.", icon: <Users /> },
      { name: "Lakshmana", role: "Rama’s Brother and Warrior", description: "Lakshmana, who fought alongside Rama during the war, also stands by his side during the coronation, supporting Rama’s rule and honoring Hanuman.", icon: <Shield /> }
    ],
    sequence_of_events: [
      { step: 1, action: "After Ravana’s defeat, Rama returns to Ayodhya with Sita, and the people of Ayodhya joyously celebrate his return." },
      { step: 2, action: "Rama is crowned as the king of Ayodhya in a grand ceremony, where all the citizens of the kingdom pledge their allegiance to him." },
      { step: 3, action: "During the coronation, Rama acknowledges the loyalty and service of Hanuman, who has remained devoted throughout Rama’s trials and battles." },
      { step: 4, action: "Hanuman, despite the recognition and honor he receives, remains humble and continues to serve Rama with the same devotion he exhibited throughout the journey." },
      { step: 5, action: "As part of his devotion, Hanuman is entrusted with the protection of Rama’s devotees, ensuring their safety and well-being from all harm." },
      { step: 6, action: "Rama, recognizing Hanuman’s exceptional devotion and service, blesses him, and Hanuman’s status as the ultimate devotee of Rama is cemented." },
      { step: 7, action: "Hanuman, filled with joy and satisfaction, remains ever devoted to Rama, serving him even in the earthly realm as his loyal protector." }
    ],
    significance_detail: {
      key_idea: "The event highlights Hanuman’s unparalleled devotion to Lord Rama. Even after the completion of the mission, Hanuman does not seek any reward but continues to serve with humility and dedication. His love for Rama transcends worldly rewards, and he becomes the eternal protector of Rama’s devotees.",
      moral_lesson: "True devotion is not motivated by reward or recognition. Hanuman’s actions teach us that selfless service, humility, and unwavering devotion are the true marks of a great soul."
    },
    symbolism_detail: {
      coronation_of_rama: "Symbolizes the victory of dharma and righteousness over adharma. Rama’s coronation represents the restoration of order, justice, and peace in the world.",
      hanuman_s_service: "Represents the ideal form of devotion, where the devotee serves with humility, without expecting anything in return. Hanuman’s role as protector signifies the eternal nature of divine protection for all true devotees." 
    },
    impact_detail: {
      spiritual_impact: "This event emphasizes the importance of devotion and service to God. Hanuman’s role as a protector of Rama’s devotees continues to inspire countless followers of Rama to remain faithful and devoted.",
      cultural_impact: "Hanuman’s devotion and service to Rama are celebrated in various cultural traditions, especially through rituals and festivals like Hanuman Jayanti. His role as protector is symbolic of the divine safeguarding of all devotees who seek the Lord’s grace."
    },
    icon: <Crown />,
    imageUrl: 'https://i.pinimg.com/736x/42/2d/61/422d61528dfd90e385b640e250759b5e.jpg',
    imageHint: 'rama coronation court devotion'
  },
  {
    id: 'hanuman-immortality',
    name: "Hanuman’s Immortality",
    mainDescription: "According to various mythological texts, Hanuman was granted immortality by Lord Rama as a reward for his unwavering devotion and selfless service. It is believed that Hanuman will remain immortal, forever existing as a symbol of devotion and service to the divine. He is said to continue his role as a protector, helping and protecting devotees who call upon him in times of need. Hanuman’s immortality signifies the eternal nature of true devotion, which never fades away, and his presence in the world as a divine aid to those who seek his blessings.",
    date: "Timeless (Symbolic of Eternal Devotion)",
    location: "Cosmic Realm (Beyond Earthly Time)",
    characters_involved: [
      { name: "Hanuman", role: "Eternal Devotee and Protector", description: "Hanuman’s immortality makes him an eternal protector of Lord Rama’s devotees. His devotion and service to Rama are never-ending, and he is forever available to those who seek his help. His immortality symbolizes the endless nature of divine love and devotion.", icon: <UserCircle /> },
      { name: "Rama", role: "Avatar of Vishnu, Lord of the Universe", description: "Lord Rama grants Hanuman immortality as a gesture of his recognition for Hanuman’s devotion. Rama acknowledges Hanuman as a symbol of true devotion that transcends time and the material world.", icon: <Crown /> }
    ],
    sequence_of_events: [
      { step: 1, action: "After Hanuman’s unwavering devotion and service during the events of the Ramayana, Rama blesses him with immortality." },
      { step: 2, action: "Rama declares that Hanuman will remain immortal, symbolizing eternal devotion and ensuring that he will always be present to help his devotees." },
      { step: 3, action: "Hanuman, in his immortal form, continues to serve Lord Rama and remains a divine protector of all who call upon him for assistance." },
      { step: 4, action: "Hanuman’s immortality is not only a boon for his personal service but also a means by which devotees, through his eternal presence, can always find comfort, guidance, and protection." }
    ],
    significance_detail: {
      key_idea: "Hanuman’s immortality symbolizes the eternal nature of true devotion, as his service and love for Rama remain constant throughout time. His immortality ensures that he is always available to his devotees, representing an unbroken connection between the divine and the devotee.",
      moral_lesson: "Immortality through devotion teaches us that true faith and service to the divine transcend the limitations of time. Hanuman’s life exemplifies that the path of devotion is timeless and boundless, offering eternal protection and support to those who sincerely seek it."
    },
    symbolism_detail: {
      immortality_of_hanuman: "Represents the enduring power of devotion. Hanuman’s immortality reflects the eternal presence of divine support for true devotees, no matter the passage of time or space.",
      hanuman_s_service: "Symbolizes the endless and selfless service that a devotee can offer to the divine. Hanuman’s continuous service to Rama illustrates the ultimate form of devotion and loyalty." 
    },
    impact_detail: {
      spiritual_impact: "Hanuman’s immortality assures devotees that they are never alone. His eternal presence strengthens the faith of those who believe in his protection and inspires a deeper connection to the divine through devotion.",
      cultural_impact: "The belief in Hanuman’s immortality is central to his worship, especially in the form of Hanuman Jayanti and other devotional practices. He is revered as a timeless symbol of devotion, strength, and courage, providing spiritual guidance to generations of followers."
    },
    icon: <Award />,
    imageUrl: 'https://i.pinimg.com/736x/c4/0a/e7/c40ae7864646d0726e4b1086d80d1091.jpg',
    imageHint: 'hanuman divine blessing immortal'
  },
  {
    id: 'hanuman-jayanti',
    name: "Hanuman Jayanti",
    mainDescription: "Hanuman Jayanti celebrates the birth of Lord Hanuman, the ardent devotee of Lord Rama and a symbol of strength, devotion, and selfless service. Devotees honor Hanuman’s divine presence, heroic deeds, and unwavering faith.",
    date: "Chaitra Purnima (Full Moon of Chaitra Month) / Varies regionally",
    location: "Celebrated worldwide, especially in India at Hanuman temples.",
    characters_involved: [
      { name: "Lord Hanuman", role: "Primary Deity", description: "Celebrated as the embodiment of devotion, strength, and selfless service.", icon: <Award /> }
    ],
    sequence_of_events: [ 
      { step: 1, action: "Devotees observe fasts and visit temples." },
      { step: 2, action: "Recitation of Hanuman Chalisa, Sundara Kanda, and other hymns." },
      { step: 3, action: "Special pujas, aartis, and offering of prasad like laddus and sindoor." },
      { step: 4, action: "Processions and spiritual discourses narrating Hanuman's life." }
    ],
    significance_detail: {
      key_idea: "Commemorates the divine birth of Hanuman and inspires devotees to emulate his virtues of bhakti, courage, and selfless service.",
      moral_lesson: "Reinforces the power of devotion and faith in overcoming obstacles and attaining spiritual strength."
    },
    symbolism_detail: {
    },
    impact_detail: {
      spiritual_impact: "Deepens devotion, provides spiritual strength, and offers an opportunity for devotees to seek Hanuman's blessings for protection and well-being.",
      cultural_impact: "A major Hindu festival fostering community bonding, religious observance, and the continuation of devotional traditions."
    },
    icon: <CalendarDays />,
    imageUrl: 'https://i.pinimg.com/736x/12/0c/8b/120c8b83333451adb1e135dfe9d7149c.jpg',
    imageHint: 'festival celebration temple',
    festivalDetails: {
      type: "Hindu Festival",
      dateObserved: {
        lunarCalendar: "Chaitra Purnima (Full Moon of Chaitra Month)",
        gregorianVariation: "Varies each year (March-April)",
        regionalVariations: [
          { region: "Tamil Nadu and Kerala", date: "Margazhi Month (December-January)" },
          { region: "Andhra Pradesh and Telangana", date: "10th day of Vaishakha (May)" },
          { region: "Maharashtra", date: "Chaitra Purnima (Same as North India)" }
        ]
      },
      significanceCategorized: {
        spiritual: "Commemorates the divine birth of Hanuman, the embodiment of bhakti (devotion), courage, strength, and selfless service to Rama.",
        cultural: "Reinforces values of humility, loyalty, and courage through stories of Hanuman's life and devotion.",
        devotional: "A day to offer prayers and recite Hanuman Chalisa and other hymns, seeking protection, strength, and blessings."
      },
      associatedDeity: {
        name: "Lord Hanuman",
        attributes: ["Devotion to Rama", "Celibacy (Brahmacharya)", "Immense strength", "Wisdom and intellect", "Protector of devotees"],
        mount: "None (Known to fly by his own power)"
      },
      celebrationRituals: {
        commonPractices: ["Early morning bath and temple visits", "Reading Hanuman Chalisa, Sundara Kanda, and Ramayana passages", "Offering sindoor, oil, and sweets (laddoo) to Hanuman idols", "Fasting until sunset", "Processions with Hanuman idols", "Chanting of Hanuman mantras like 'Om Hanumate Namah'"],
        specialRituals: ["Recitation of Hanuman Ashtak and Bajrang Baan", "Applying vermilion on forehead (symbol of Hanuman's devotion)", "Distribution of prasadam (blessed food)", "Organizing satsangs and bhajan sessions in temples"]
      },
      observedBy: ["Hindus worldwide", "Hanuman devotees", "Rama bhaktas (devotees of Rama)"],
      importantLocationsList: [
        { temple: "Hanuman Garhi", location: "Ayodhya, Uttar Pradesh, India" },
        { temple: "Sankat Mochan Hanuman Temple", location: "Varanasi, Uttar Pradesh, India" },
        { temple: "Salasar Balaji", location: "Rajasthan, India" },
        { temple: "Jakhoo Temple", location: "Shimla, Himachal Pradesh, India" }
      ],
      legends: {
        birthStory: "Hanuman was born to Anjana and Kesari. Vayu, the wind god, also played a role in his birth, blessing him with immense powers. His birth took place on the full moon day of Chaitra month.",
        childhoodLegend: "As a child, he mistook the sun for a fruit and tried to eat it, which shows his divine power and courage even as a child.",
        boonOfImmortality: "Hanuman was blessed with Chiranjeevi status (immortality) and will remain alive till the end of time to protect and serve devotees of Rama."
      },
      symbols: {
        color: "Orange/Saffron (symbolizing energy and devotion)",
        iconography: "Muscular body, mace (gada), open heart revealing Rama and Sita, flying posture with mountain"
      },
      mantrasAndChants: ["Om Hanumate Namah", "Bajrang Baan", "Hanuman Chalisa", "Sundara Kanda Parayanam"],
      foodOfferings: ["Boondi Laddoo", "Chana (gram)", "Tulsi leaves", "Bananas", "Jaggery and ghee preparations"],
      modernObservations: {
        mediaCoverage: "Live streaming of temple events and bhajans",
        socialImpact: "Community services, food donations, blood donation camps",
        onlineParticipation: "Virtual Hanuman Chalisa recitals and global prayer meets"
      },
      relatedFestivals: ["Rama Navami", "Diwali (Rama’s return to Ayodhya)", "Sankat Mochan Festival", "Hanuman Jayanti (Regional variants)"],
      references: ["Ramayana by Valmiki", "Hanuman Chalisa by Tulsidas", "Puranas including Shiva Purana and Skanda Purana", "Bhakta Hanuman stories and local traditions"]
    }
  },
  {
    id: 'sundara-kanda-parayanam', 
    name: "Sundara Kanda Parayanam",
    mainDescription: "The Sundara Kanda, the fifth book of the Ramayana authored by Maharishi Valmiki, glorifies the deeds of Hanuman. Its recitation (Parayanam) is a profound devotional practice believed to bestow courage, wisdom, and divine blessings.",
    date: "Often on Tuesdays, Saturdays, or auspicious occasions",
    location: "Homes, Temples, Spiritual Gatherings",
    characters_involved: [ 
        { name: "Hanuman", role: "Protagonist of Sundara Kanda", description: "Performs heroic feats, finds Sita, and delivers Rama's message." , icon: <UserCircle />},
        { name: "Sita", role: "Captive Princess", description: "Endures captivity in Lanka, maintaining her purity and devotion to Rama." , icon: <UserCircle />},
        { name: "Ravana", role: "Antagonist King", description: "King of Lanka, holds Sita captive.", icon: <Crown /> },
        { name: "Vibhishana", role: "Righteous Rakshasa", description: "Ravana's brother who advises righteousness.", icon: <BookOpenText /> },
        { name: "Lord Rama", role: "Divine Prince", description: "Awaits news of Sita, his presence motivates Hanuman's actions.", icon: <Crown /> }
    ],
    sequence_of_events: [ 
        { step: 1, action: "Hanuman's magnificent leap across the ocean to Lanka." },
        { step: 2, action: "Systematic search for Sita within the city of Lanka." },
        { step: 3, action: "Discovery of Sita in the Ashoka Vatika, tormented by Rakshasis." },
        { step: 4, action: "Hanuman's conversation with Sita, offering Rama's ring and solace." },
        { step: 5, action: "Destruction of Ashoka Vatika and confrontation with Ravana's warriors." },
        { step: 6, action: "Hanuman allows himself to be captured and advises Ravana." },
        { step: 7, action: "Burning of Lanka with his fiery tail." },
        { step: 8, action: "Hanuman's return journey and joyful report to Lord Rama." }
    ],
    significance_detail: {
        key_idea: "Unwavering devotion, courage, and selfless service can overcome any obstacle.",
        moral_lesson: "Faith in the divine and righteous action leads to success and liberation from suffering."
    },
    symbolism_detail: {
        the_leap: "Symbolizes crossing the ocean of samsara (worldly existence) through devotion.",
        meaning_of_name_interpretations: [
            "Refers to Hanuman's beautiful (Sundara) character and actions.",
            "Highlights the beauty of Sita's purity and unwavering hope.",
            "The poetic and narrative beauty of this section of the Ramayana.",
            "Signifies the beauty of devotion leading to victory over adversity."
        ]
    },
    impact_detail: {
        spiritual_impact: "Recitation of Sundara Kanda is believed to instill courage, remove fears, grant wishes, and lead to spiritual upliftment.",
        cultural_impact: "A widely practiced devotional tradition, central to Hanuman worship, often undertaken for specific boons or general well-being."
    },
    icon: <BookOpenText />, 
    imageUrl: 'https://i.pinimg.com/736x/3c/3f/84/3c3f843f43de1b37b9da34b0777c715b.jpg', 
    imageHint: 'scripture reading devotion', 
    festivalDetails: {
        type: "Devotional Practice / Scripture Recitation",
        dateObserved: {
            recommendedDays: [
                "Tuesdays",
                "Saturdays",
                "Hanuman Jayanti",
                "Navaratri",
                "During times of crisis or spiritual need"
            ]
        },
        significanceCategorized: {
            spiritual: "Recitation is believed to bring peace, remove obstacles, and fulfill desires through Hanuman's grace.",
            devotional: "A powerful means to connect with Hanuman and Lord Rama, fostering deep bhakti.",
            benefits: [
                "Removes fear, anxiety, and negativity",
                "Grants courage, strength, and wisdom",
                "Brings peace and success in endeavors",
                "Bestows protection from enemies and evil influences",
                "Grants blessings of Lord Hanuman and Rama"
            ]
        },
        celebrationRituals: {
            preparation: [
                "Take a bath and wear clean clothes.",
                "Light a lamp and offer flowers to Lord Hanuman.",
                "Place a Ramayana book or Sundara Kanda text on a clean cloth."
            ],
            method: [
                "Begin with Ganapati Puja and Sankalpam (vow/intention).",
                "Chant Hanuman Dhyana Sloka (meditation verse).",
                "Read chapters sequentially with focus and devotion.",
                "Complete daily reading as per chosen parayana schedule.",
                "Offer prasadam like jaggery, ghee, and banana to Hanuman."
            ],
            completion: "Conclude with Hanuman Chalisa or Hanuman Ashtak and aarti.",
            schedules: [
                { type: "One-day Parayanam", description: "Complete all 68 chapters in one day." },
                { type: "7-day Parayanam", description: "Divide chapters across 7 days (approx. 10 chapters per day)." },
                { type: "14-day Parayanam", description: "Read approximately 5 chapters daily." },
                { type: "One-chapter-a-day", description: "Ideal for daily spiritual discipline and mental focus." }
            ]
        },
        observedBy: ["Devotees of Hanuman and Rama", "Individuals seeking spiritual solace and strength"],
        symbols: {
            meaningOfName: {
                sanskrit: "Sundara (सुन्दर) means Beautiful, Charming, Lovely.",
                interpretations: [
                    "Hanuman’s beautiful character, devotion, and heroic deeds.",
                    "The beautiful narrative of Sita's purity, patience, and hope.",
                    "The inherent poetic beauty and literary excellence of this Kanda.",
                    "The beautiful outcome of victory of good over evil achieved through pure devotion."
                ]
            }
        },
        mantrasAndChants: ["Om Hanumate Namah", "Jai Bajrangbali", "Sankat Mochan Hanuman Ashtak", "Hanuman Chalisa"],
        modernObservations: {
            audioVisualResources: [
                "Recitation videos and discourses on YouTube and other platforms.",
                "Mobile applications with Sundara Kanda audio, text, and translations.",
                "PDFs and eBooks of various translations available online."
            ]
        },
        relatedFestivals: [ 
            "Hanuman Chalisa",
            "Bajrang Baan",
            "Ramcharitmanas (by Tulsidas)",
            "Valmiki Ramayana (Full Text)"
        ],
        references: [
            "Valmiki Ramayana – Sundara Kanda (Book 5)",
            "Tulsidas Ramcharitmanas – Sundara Kand",
            "Traditional South Indian commentaries and oral traditions",
            "Various Puranic mentions of Hanuman's exploits"
        ],
        scriptureDetails: {
            positionInRamayana: 5,
            totalChapters: 68,
            totalShlokas: 2900, 
            languageOfOrigin: "Sanskrit",
            author: "Maharishi Valmiki",
            theme: "Glorious deeds of Hanuman in search of Sita, showcasing his devotion, strength, and wisdom, and conveying hope to Lord Rama.",
            keyCharactersInScripture: ["Hanuman", "Sita", "Ravana", "Indrajit", "Lankini", "Surasa", "Mainaka", "Vibhishana", "Trijata"],
            languagesAvailable: ["Sanskrit (Original)", "Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "English", "Gujarati", "Bengali", "Oriya", "And many other Indian and international languages"]
        }
    }
  },
  {
    id: 'tuesday-saturday-worship',
    name: "Tuesday & Saturday Worship",
    mainDescription: "Tuesdays (Mangalvar) and Saturdays (Shanivar) are considered particularly auspicious for worshipping Lord Hanuman. Devotees observe fasts and perform special pujas on these days to seek his blessings for strength, protection, and overcoming adversities, including astrological afflictions.",
    date: "Every Tuesday and Saturday",
    location: "Hanuman Temples, Home Shrines/Altars",
    characters_involved: [
      { name: "Lord Hanuman", role: "Deity of Worship", description: "Worshipped for strength, courage, protection, and overcoming obstacles. His worship on these days is considered highly potent.", icon: <Award /> }
    ],
    sequence_of_events: [
      { step: 1, action: "Devotees perform early morning preparations like taking a holy bath and wearing clean (often red or orange) clothes." },
      { step: 2, action: "Visit a Hanuman temple or set up a home altar for worship." },
      { step: 3, action: "Offerings such as sindoor (vermilion), oil (mustard/sesame), flowers (red hibiscus, marigold), fruits (especially bananas), and sweets (laddus, jaggery) are made." },
      { step: 4, action: "Recitation of Hanuman Chalisa, Sundara Kanda, Bajrang Baan, Hanuman Ashtak, and other specific mantras like 'Om Hanumate Namah'." },
      { step: 5, action: "Performing Aarti and distributing prasad." },
      { step: 6, action: "Many devotees observe fasts, consuming food only once or adhering to specific dietary restrictions." }
    ],
    significance_detail: {
      key_idea: "Dedicated worship on Tuesdays and Saturdays is believed to be highly effective in invoking Hanuman's grace for protection from evils, mitigation of planetary ill-effects (especially Mars and Saturn), and fulfillment of desires.",
      moral_lesson: "Regular and disciplined devotion cultivates inner strength, resilience, and faith. It teaches the importance of perseverance in spiritual practices for overcoming life's challenges."
    },
    symbolism_detail: {
    },
    impact_detail: {
      spiritual_impact: "Strengthens devotion, instills courage and confidence, provides relief from fears and anxieties, and helps in spiritual progress. Believed to ward off negative energies and evil spirits.",
      cultural_impact: "A deeply ingrained weekly devotional practice for millions of Hindus. Temples see large congregations on these days. It reinforces community faith and shared spiritual practices."
    },
    icon: <Users />,
    imageUrl: 'https://i.pinimg.com/736x/c0/0e/1d/c00e1de1b0d81978281c8ad06c7bf441.jpg',
    imageHint: 'temple worship offering',
    festivalDetails: {
      type: "Regular Devotional Practice",
      regularWorshipDetails: {
        days: ["Tuesday", "Saturday"],
        significance: {
          Tuesday: {
            spiritual_meaning: "Day of strength, energy, and Mars (Mangal). Lord Hanuman is worshipped to remove obstacles and protect from enemies.",
            devotee_benefits: [
              "Gives courage and confidence",
              "Removes Mangal Dosha and planetary afflictions",
              "Relieves health and financial troubles",
              "Destroys fear and black magic"
            ]
          },
          Saturday: {
            spiritual_meaning: "Associated with Saturn (Shani). Lord Hanuman is revered as the one who alleviates Shani-related difficulties.",
            devotee_benefits: [
              "Removes Sade Sati and Shani Dosha effects",
              "Grants mental peace and focus",
              "Protects from accidents, evil spirits, and misfortunes",
              "Strengthens devotion and discipline"
            ]
          }
        },
        rituals: {
          early_morning_preparation: [
            "Take a holy bath",
            "Wear clean red/orange clothes",
            "Visit a Hanuman temple or home altar"
          ],
          offerings: [
            "Sindoor (vermilion mixed with oil)",
            "Bananas, jaggery, coconut",
            "Tulsi leaves and betel leaves",
            "Laddus, particularly boondi or besan"
          ],
          prayers_and_chants: [
            "Hanuman Chalisa",
            "Sundara Kanda (full or selected chapters)",
            "Bajrang Baan",
            "Hanuman Ashtak",
            "Om Hanumate Namah (108 times)",
            "Sankat Mochan Hanuman Stotra"
          ],
          temple_practices: [
            "Circumambulate the idol 11 or 21 times",
            "Apply sindoor from Hanuman’s idol to your forehead",
            "Break a coconut before the idol",
            "Light mustard oil lamp near idol"
          ],
          dos_and_donts: {
            dos: [
              "Maintain celibacy on the day of worship",
              "Chant with full devotion and discipline",
              "Offer food to monkeys or the poor"
            ],
            donts: [
              "Do not consume non-veg or alcohol",
              "Avoid anger, deceit, and arrogance"
            ]
          }
        },
        benefits: [
          "Grants strength, protection, and spiritual growth",
          "Destroys fear, ego, and negative energies",
          "Improves focus, vitality, and removes karmic blocks"
        ],
        recommended_for: [
          "Those facing Shani (Saturn) troubles",
          "People with health or court cases",
          "Students, athletes, warriors",
          "Anyone seeking divine protection and spiritual power"
        ],
        folk_beliefs: [
          "Lighting 11 lamps on Tuesday grants protection from enemies",
          "Reading Hanuman Chalisa 7 times continuously removes major troubles",
          "Worshipping Hanuman on Saturday pacifies Shani Dev and reduces karmic suffering"
        ]
      }
    }
  },
  {
    id: 'diwali-hanuman-puja',
    name: "Hanuman Puja during Diwali",
    mainDescription: "Diwali is the festival of light, and Hanuman, as a symbol of strength, devotion, and protection, is worshipped to bring light to the lives of devotees, dispel darkness, and ensure success in all endeavors. In some traditions, Lord Hanuman is also worshipped during Diwali for his role in aiding Lord Rama's victory over Ravana.",
    date: 'During Diwali festivities (varies regionally)',
    location: "Homes and Temples",
    characters_involved: [
      { name: "Lord Hanuman", role: "Deity of Worship", description: "Worshipped for protection, strength, and removal of obstacles.", icon: <Award /> }
    ],
    sequence_of_events: [ 
      { step: 1, action: "Homes are cleaned and decorated with lights (diyas)." },
      { step: 2, action: "A sacred space for worship is prepared." },
      { step: 3, action: "Special pujas are performed, often alongside Lakshmi Puja." },
      { step: 4, action: "Recitation of Hanuman Chalisa and other stotras." },
      { step: 5, action: "Offerings of sweets, fruits, sindoor, and flowers are made to Hanuman." },
      { step: 6, action: "Aarti is performed, and prasad is distributed."}
    ],
    significance_detail: {
      key_idea: "Invoking Hanuman's blessings for protection, strength, prosperity, and the dispelling of darkness during the auspicious Diwali period.",
      moral_lesson: "Remembering divine protectors and the victory of good over evil enhances spiritual well-being and gratitude."
    },
    symbolism_detail: {
    },
    impact_detail: {
      spiritual_impact: "Strengthens faith, provides a sense of security, removes obstacles, and invites auspicious energies and blessings into the home.",
      cultural_impact: "A practice in some Hindu communities that integrates Hanuman worship into the broader Diwali celebrations, reinforcing devotion and communal prayer."
    },
    icon: <Lamp />,
    imageUrl: 'https://i.pinimg.com/736x/68/30/02/683002e0aabd05d6407e09d62c27c679.jpg',
    imageHint: 'diwali lamps festival',
    festivalDetails: {
      type: "Integrated Festival Worship",
      significanceCategorized: {
        spiritual: "Diwali is the festival of light, and Hanuman, as a symbol of strength, devotion, and protection, is worshipped to bring light to the lives of devotees, dispel darkness, and ensure success in all endeavors. Lord Hanuman represents victory over evil and the triumph of good. Hanuman is worshipped to protect the home and family during Diwali.",
        devotional: "Devotees seek blessings for prosperity, health, and success during this period.",
        benefits: [
          "Removal of all obstacles and difficulties in life.",
          "Blessings of physical and mental strength, courage, and determination.",
          "Protection from negative influences, evil spirits, and black magic.",
          "Prosperity, success in work, and protection for the family.",
          "Increased devotion, faith, and spiritual growth."
        ],
      },
      celebrationRituals: {
        preparation: [
          "Clean the house and altar, prepare a sacred space for worship.",
          "Light lamps (diyas) around the house to invite prosperity and light.",
          "Ensure all worship items are ready: flowers, sindoor (vermilion), red cloth, fruits, sweets (laddus), coconut, and incense."
        ],
        commonPractices: [
          "Begin with a ritual bath and wear clean, preferably red or orange attire.",
          "Light a ghee or mustard oil lamp at the altar of Hanuman.",
          "Offer fresh flowers, garlands, and red cloth around the idol or picture of Hanuman.",
          "Chant the Hanuman Chalisa, Hanuman Ashtakshara Mantra (Om Hanumate Namah), and other praises like Bajrang Baan and Sankat Mochan Stotra.",
          "Offer sweets (laddus or prasadam) to Hanuman, along with bananas, jaggery, and coconut.",
          "Apply sindoor to the idol of Hanuman and to your forehead as a sign of respect and devotion.",
          "Pray for strength, courage, good health, and protection for your family.",
          "Visit Hanuman temples if possible and offer prayers, flowers, and light a lamp.",
          "Participate in group prayers or listen to special Diwali aartis and kirtans held in temples."
        ],
        specialRituals: [
          "Recite the Sundara Kanda from the Ramayana for spiritual victory.",
          "Chant the Hanuman Ashtakshara Mantra 108 times.",
          "Perform aarti with a bell, offering light to the deity while singing devotional songs."
        ],
        completion: [
          "Concluding with Hanuman Aarti and distributing prasad (blessed food) to family and friends.",
          "Firecrackers are not traditionally associated with Hanuman Puja but can be part of the general Diwali celebration, where devotees make sure to do so respectfully."
        ]
      },
      uniqueBeliefs: [
        { 
          title: "Symbolism of Lights", 
          points: [
            "The light of Diwali represents the divine light of Lord Hanuman.",
            "Lighting 9 or 11 diyas around the home is considered especially auspicious and invites divine blessings of Lord Hanuman."
          ]
        },
        { 
          title: "Importance of Sindoor", 
          points: [
            "Applying sindoor is a mark of respect to Lord Hanuman and symbolizes the strength and devotion of the deity.",
            "This also brings energy, vitality, and removes negative influences from life."
          ]
        }
      ],
      mantrasAndChants: [
        "Hanuman Chalisa",
        "Hanuman Ashtakshara Mantra (Om Hanumate Namah)",
        "Bajrang Baan",
        "Sankat Mochan Hanuman Stotra",
        "Hanuman Ashtak",
        "Sundara Kanda recitation"
      ],
      modernObservations: {
        templeDecorations: [
          "Temples are often illuminated with numerous lamps and colorful decorations to celebrate Diwali and honor Lord Hanuman.",
          "Special Diwali aartis and bhajans are sung in temples dedicated to Hanuman during the evening hours."
        ],
        communityPrayers: [
          "Group prayers and gatherings where devotees chant Hanuman Chalisa together, seek blessings for the community, and celebrate with sweets and prasad."
        ]
      },
      recommendedFor: [
        "Devotees seeking blessings for health, prosperity, and success.",
        "Those looking for strength and protection during the challenging aspects of life.",
        "Anyone looking to deepen their spiritual practice and connect with Hanuman's divine qualities."
      ],
      folkBeliefs: [
        "Offering 9 or 11 laddus to Lord Hanuman during Diwali will bring wealth and remove misfortunes.",
        "Devotees believe that Hanuman, when worshipped during Diwali, grants a prosperous year ahead and ensures protection from any harm."
      ],
      observedBy: ["Hindu families and communities, particularly those who revere Hanuman."]
    }
  },
  {
    id: 'hanuman-nirjala-ekadashi',
    name: 'Hanuman Worship on Nirjala Ekadashi',
    mainDescription: "While Nirjala Ekadashi is primarily dedicated to Lord Vishnu, many devotees also worship Lord Hanuman on this day, seeking his blessings for strength to observe the rigorous fast and for spiritual progress. Hanuman's devotion to Lord Rama (an avatar of Vishnu) makes his worship complementary.",
    date: 'Jyeshtha Shukla Ekadashi (May-June)',
    location: "Homes and Temples",
    characters_involved: [
      { name: "Lord Hanuman", role: "Deity of Strength and Devotion", description: "Worshipped for strength to observe fasts and for spiritual advancement.", icon: <Award /> },
      { name: "Lord Vishnu", role: "Primary Deity of Ekadashi", description: "Nirjala Ekadashi is primarily dedicated to Lord Vishnu.", icon: <Crown /> }
    ],
    sequence_of_events: [
      { step: 1, action: "Devotees observe a strict waterless fast (Nirjala Vrat) from sunrise on Ekadashi to sunrise on Dwadashi." },
      { step: 2, action: "Along with Vishnu puja, special prayers and recitations are offered to Lord Hanuman. This includes lighting a lamp and offering flowers." },
      { step: 3, action: "Hanuman Chalisa is chanted multiple times (e.g., 11 or 108 times) along with Bajrang Baan, Hanuman Ashtak, and Sankat Mochan Stotra for strength and perseverance." },
      { step: 4, action: "Offerings like sindoor, jasmine oil, red flowers, betel leaves, bananas, and laddus are made to Lord Hanuman." },
      { step: 5, action: "Meditation on Hanuman's form and his unwavering devotion to Lord Rama to seek similar resolve." },
      { step: 6, action: "Evening aarti for Lord Hanuman is performed. Prasad, if offered, is typically distributed after breaking the fast on Dwadashi." }
    ],
    significance_detail: {
      key_idea: "Seeking Hanuman's blessings for the strength, determination, and spiritual endurance required to successfully observe the arduous Nirjala Ekadashi fast.",
      moral_lesson: "Perseverance in spiritual discipline, drawing inspiration from Hanuman's steadfast devotion, leads to purification and divine grace."
    },
    symbolism_detail: {
      // Symbolism is more related to the practice itself rather than a narrative event.
    },
    impact_detail: {
      spiritual_impact: "Enhances willpower, purifies the mind and body, deepens devotion to both Vishnu and Hanuman, and is believed to grant blessings equivalent to observing all other Ekadashis.",
      cultural_impact: "An integrated practice for some devotees, highlighting the interconnectedness of deities and devotional paths within Hinduism. It reinforces the idea of seeking strength from Hanuman for austere spiritual practices."
    },
    icon: <Sun />, 
    imageUrl: 'https://i.pinimg.com/736x/1c/cd/15/1ccd152394a76bcfada2785b3bc28be5.jpg',
    imageHint: 'fasting meditation spiritual',
    festivalDetails: {
      type: "Integrated Devotional Practice",
      dateObserved: {
          lunarCalendar: "Shukla Paksha Ekadashi in the month of Jyeshtha",
          gregorianVariation: "May-June"
      },
      significanceCategorized: {
        spiritual: "Ekadashi is dedicated to Lord Vishnu. Nirjala Ekadashi involves strict fasting without water. Worshipping Hanuman on this day is to seek strength and resolve for the fast.",
        devotional: "Hanuman is a supreme devotee of Lord Vishnu (as Rama), making his worship on Ekadashi potent for spiritual endurance.",
        benefits: [
            "Attainment of strength, courage, and spiritual protection.",
            "Relief from fears, obstacles, and diseases.",
            "Fulfills sincere wishes and spiritual aspirations.",
            "Removes sins equivalent to observing all other Ekadashis combined.",
            "Helps gain divine grace from both Vishnu and Hanuman."
        ],
        hanumanConnection: [
            "Lord Hanuman is a supreme devotee of Lord Vishnu (as Rama), making his worship on Ekadashi especially potent.",
            "Hanuman embodies devotion, strength, and spiritual endurance—qualities revered on this day of discipline and devotion."
        ]
      },
      associatedDeity: {
        name: "Lord Hanuman (alongside Lord Vishnu)",
        attributes: ["Unwavering devotion", "Immense strength", "Spiritual endurance", "Protector"]
      },
      celebrationRituals: {
        preparation: [
          "Wake up during Brahma Muhurta and take a ritual bath.",
          "Clean the puja altar and place an image or idol of Lord Hanuman.",
          "Dress in clean, preferably red or saffron clothes."
        ],
        commonPractices: [
          "Perform a full day of Nirjala fasting—no food or water from sunrise to the next sunrise.",
          "Chant Hanuman Chalisa 11 or 108 times with full devotion.",
          "Recite Bajrang Baan, Hanuman Ashtak, and Sankat Mochan Stotra.",
          "Offer sindoor (vermilion), jasmine oil, red flowers, betel leaves, bananas, and laddus to Lord Hanuman.",
          "Light mustard oil diya in front of Hanuman's image.",
          "Meditate on the form of Hanuman and reflect on inner strength and devotion."
        ],
        eveningObservances: [
          "Attend or perform Hanuman Aarti at home or in a temple.",
          "Join community satsangs or online group chantings, if possible.",
          "Distribute Hanuman prasad to family or nearby devotees after sunset (if permitted, usually after breaking fast on Dwadashi)."
        ],
        observanceGuidelines: {
            fastingType: "Nirjala (no water, no food)",
            duration: "From sunrise on Ekadashi to sunrise on Dwadashi (next day)",
            whoCanObserve: [
                "Ideal for spiritual seekers, Hanuman devotees, and those seeking mental strength.",
                "Those unable to fast fully may perform partial fast and chant Hanuman Chalisa regularly."
            ]
        }
      },
      mantrasAndChants: [
        "Hanuman Chalisa",
        "Sundara Kanda (selected sargas or complete parayanam)",
        "Hanuman Bahuk",
        "Bajrang Baan",
        "Hanuman Ashtak",
        "Sankat Mochan Stotra",
        "Om Hanumate Namah"
      ],
      folkBeliefs: [
        "It is said that worshipping Hanuman on Nirjala Ekadashi protects one from negative planetary influences (especially Shani).",
        "Some devotees write 'राम राम' (Rama Rama) 108 times as a form of offering to Hanuman.",
        "Offering a red flag to a Hanuman temple on this day brings protection and victory in legal or personal struggles."
      ],
      importantLocationsList: [
        { temple: "Hanuman Garhi", location: "Ayodhya" },
        { temple: "Sankat Mochan Hanuman Temple", location: "Varanasi" },
        { temple: "Jakhoo Temple", location: "Himachal Pradesh" },
        { temple: "Salasar Balaji", location: "Rajasthan" },
        { temple: "Sri Panchamukha Hanuman Temple", location: "Tamil Nadu" }
      ],
      conclusionAndBlessings: {
        closingPrayer: "O Hanuman, grant me unwavering devotion, strength to walk the righteous path, and protection from all harm.",
        endingRitual: "Offer final aarti, distribute prasad, and silently reflect or meditate on Lord Rama and Hanuman’s divine bond."
      },
      observedBy: ["Devotees of Lord Vishnu and Lord Hanuman", "Those observing Nirjala Ekadashi for spiritual merit."]
    }
  }
];

export const getDetailedEventById = (id: string): DetailedHanumanEvent | undefined => {
  return detailedEventsData.find(event => event.id === id);
};

