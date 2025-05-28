// src/data/events-data.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { CalendarDays, BookOpenText, Users, Lamp, SunMoon, Feather, Shield, Handshake, Sailboat, Flame, Home, CheckCircle, Zap, Mountain, MessageSquare, Crown, Award } from 'lucide-react';

export interface HanumanEvent {
  id: string;
  title: string;
  date: string; // Can be a specific date, recurring, or traditional timing
  description: string;
  significance: string[];
  celebrationHighlights: string[];
  icon: ReactNode;
  imageUrl: string;
  imageHint: string;
  slug: string; // Added for linking to detail page
}

export const hanumanEventsData: HanumanEvent[] = [
  {
    id: 'hanuman-childhood-curse',
    title: 'Hanuman’s Childhood & Curse',
    slug: 'hanuman-childhood-curse', 
    date: 'Mythological Time Period',
    description: "Discover the story of young Hanuman's playful mischief, mistaking the sun for a fruit, which led to a temporary curse and the eventual reminder of his immense divine powers.",
    significance: [
      "Illustrates Hanuman's innocent yet powerful nature in his youth.",
      "Explores themes of divine intervention and unlocking latent potential."
    ],
    celebrationHighlights: [
      "Retold in Puranic scriptures and folk tales about Hanuman's early life.",
      "A lesson on humility and the journey towards understanding one's true purpose."
    ],
    icon: <Feather className="h-6 w-6 text-primary" />, 
    imageUrl: 'https://i.pinimg.com/736x/fe/b8/47/feb847bb5a6300eab21f58630fc89c91.jpg', 
    imageHint: 'hanuman sun childhood',
  },
  {
    id: 'meeting-with-rama',
    title: 'Meeting with Lord Rama',
    slug: 'meeting-with-rama',
    date: 'Treta Yuga',
    description: "Hanuman meets Lord Rama during Rama's search for Sita. This marks the beginning of Hanuman's lifelong service and loyalty.",
    significance: [
      "Establishes the eternal bond of devotion between Hanuman and Rama.",
      "Teaches virtues of humility, service, and divine companionship."
    ],
    celebrationHighlights: [
      "Narrated in scriptures and devotional discourses.",
      "Often depicted in art and theatrical performances."
    ],
    icon: <Handshake className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/0a/de/aa/0adeaa4abaca17b305d7f6634d82c8fa.jpg', 
    imageHint: 'rama hanuman meeting',
  },
  {
    id: 'hanuman-leap-to-lanka',
    title: 'Hanuman’s Leap to Lanka',
    slug: 'hanuman-leap-to-lanka',
    date: 'Treta Yuga',
    description: "Hanuman's courageous leap across the ocean to Lanka in search of Sita, overcoming numerous obstacles through his devotion and strength.",
    significance: [
      "Symbolizes unwavering devotion and determination.",
      "Demonstrates Hanuman's immense power and resourcefulness."
    ],
    celebrationHighlights: [
      "A central episode in Sundara Kanda recitations.",
      "Depicted in various art forms, highlighting Hanuman's heroism."
    ],
    icon: <Sailboat className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/47/61/ed/4761ed66f7c9bdaeaddc33a45b4ba8e7.jpg',
    imageHint: 'hanuman ocean leap lanka',
  },
  {
    id: 'burning-of-lanka',
    title: 'Burning of Lanka',
    slug: 'burning-of-lanka',
    date: 'Treta Yuga',
    description: "Hanuman, after finding Sita, allows himself to be captured. His tail is set on fire, which he uses to burn down large parts of Ravana's Lanka, showcasing his might.",
    significance: [
      "Demonstrates Hanuman's fearlessness and strategic acumen.",
      "A significant blow to Ravana's pride and resources."
    ],
    celebrationHighlights: [
      "A dramatic episode recited in Sundara Kanda and Ramayana narrations.",
      "Depicted in art, theatre (Ram Leela), and storytelling."
    ],
    icon: <Flame className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/fe/30/2f/fe302f05fa633a97f0455a57ea105615.jpg',
    imageHint: 'lanka fire hanuman',
  },
  {
    id: 'hanuman-return-to-rama',
    title: 'Hanuman’s Return to Rama',
    slug: 'hanuman-return-to-rama',
    date: 'Treta Yuga',
    description: "Hanuman returns from Lanka, reports Sita's discovery to Rama, and provides crucial intelligence, marking a turning point.",
    significance: [
      "Showcases Hanuman's role as a perfect messenger.",
      "Reinforces the bond of devotion between Hanuman and Rama."
    ],
    celebrationHighlights: [
      "Narrated in Sundara Kanda and Ramayana.",
      "Depicted in art as a moment of relief and joy."
    ],
    icon: <CheckCircle className="h-6 w-6 text-primary" />, 
    imageUrl: 'https://i.pinimg.com/736x/cd/ec/12/cdec12955d34b322d550da2e0d987e15.jpg', 
    imageHint: 'hanuman rama reporting',
  },
  {
    id: 'battle-with-ravana',
    title: 'The Battle with Ravana',
    slug: 'battle-with-ravana',
    date: 'Treta Yuga',
    description: "Hanuman's pivotal role in the war against Ravana, showcasing his strength, devotion, and critical actions like bringing the Sanjeevani herb.",
    significance: [
      "Hanuman's strength and devotion are key to Rama's victory.",
      "Highlights selfless service and courage in righteous warfare."
    ],
    celebrationHighlights: [
      "Recitation of Yuddha Kanda detailing Hanuman's valor.",
      "Depiction in Ram Leela and other dramatic performances."
    ],
    icon: <Shield className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/4b/6f/fd/4b6ffd08ae798038cdd5542e4099baa0.jpg', 
    imageHint: 'hanuman battle war',
  },
  {
    id: 'bringing-the-sanjeevani-herb',
    title: 'Bringing the Sanjeevani Herb',
    slug: 'bringing-the-sanjeevani-herb',
    date: 'Treta Yuga',
    description: "Hanuman's life-saving mission to bring the Sanjeevani herb from the Himalayas to revive Lakshmana, showcasing his immense power and devotion.",
    significance: [
      "Symbolizes unwavering devotion and miraculous healing.",
      "Demonstrates Hanuman's boundless strength in service of Rama."
    ],
    celebrationHighlights: [
      "Narrated with reverence in Ramayana discourses.",
      "Depicted in art and performances as a symbol of divine intervention."
    ],
    icon: <Mountain className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/69/01/ab/6901abce05a65f8156940f0edf0603b9.jpg',
    imageHint: 'hanuman mountain herb',
  },
  {
    id: 'hanuman-role-sita-rescue',
    title: "Hanuman's Role in Sita’s Rescue",
    slug: 'hanuman-role-sita-rescue',
    date: 'Treta Yuga',
    description: "Hanuman plays a pivotal role in the rescue of Sita, aiding Rama in locating her and contributing significantly to the defeat of Ravana’s forces. His courage and resourcefulness are vital.",
    significance: [
      "Showcases Hanuman's deep devotion, bravery, and selflessness.",
      "Vital for Rama's mission success and Sita's eventual rescue."
    ],
    celebrationHighlights: [
      "Narrated in Sundara Kanda and Yuddha Kanda.",
      "Key episode depicted in Ram Leela and spiritual discourses."
    ],
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/76/d0/4d/76d04d0114aba1bae75a4463d5c7d590.jpg', 
    imageHint: 'hanuman sita rescue',
  },
  {
    id: 'rama-coronation-hanuman-devotion',
    title: "Lord Rama’s Coronation & Hanuman’s Devotion",
    slug: 'rama-coronation-hanuman-devotion',
    date: 'Treta Yuga',
    description: "After Rama's victory, Hanuman's unwavering devotion continues during Rama's coronation. He remains a humble servant and protector of Rama's devotees.",
    significance: [
      "Highlights Hanuman's selfless service and eternal loyalty.",
      "Symbolizes the victory of dharma and the establishment of Rama Rajya."
    ],
    celebrationHighlights: [
      "Narrated in Uttara Kanda and various devotional texts.",
      "Inspires continued devotion and service to the divine.",
      "Hanuman's role as protector is revered."
    ],
    icon: <Crown className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/42/2d/61/422d61528dfd90e385b640e250759b5e.jpg', 
    imageHint: 'rama coronation court devotion',
  },
  {
    id: 'hanuman-immortality',
    title: "Hanuman’s Immortality",
    slug: 'hanuman-immortality',
    date: 'Timeless (Symbolic of Eternal Devotion)',
    description: "Hanuman was granted immortality by Lord Rama, symbolizing eternal devotion and his continuous presence as a protector of devotees.",
    significance: [
      "Represents the enduring power of true devotion.",
      "Assures devotees of Hanuman's eternal support and guidance."
    ],
    celebrationHighlights: [
      "Belief central to Hanuman worship and festivals like Hanuman Jayanti.",
      "Inspires faith in his timeless protection and blessings."
    ],
    icon: <Award className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/c4/0a/e7/c40ae7864646d0726e4b1086d80d1091.jpg',
    imageHint: 'hanuman divine blessing immortal',
  },
  {
    id: 'hanuman-jayanti',
    title: 'Hanuman Jayanti',
    slug: 'hanuman-jayanti',
    date: 'Chaitra Purnima (Full Moon of Chaitra month)',
    description: "Celebrates the birth of Lord Hanuman, an embodiment of strength, devotion, and selfless service. It is observed with great fervor by devotees across India and the world.",
    significance: [
      "Marks the divine appearance of Lord Hanuman.",
      "Devotees seek blessings for strength, courage, and protection.",
      "A day for renewing one's commitment to bhakti (devotion) and dharma (righteousness)."
    ],
    celebrationHighlights: [
      "Recitation of Hanuman Chalisa, Sundara Kanda, and other hymns.",
      "Special pujas and aartis in temples dedicated to Hanuman.",
      "Offering of prasad like laddus, bananas, and red sindoor.",
      "Fasting and devotional singing (bhajans and kirtans).",
      "Processions and spiritual discourses narrating Hanuman's leelas."
    ],
    icon: <CalendarDays className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/12/0c/8b/120c8b83333451adb1e135dfe9d7149c.jpg',
    imageHint: 'festival celebration temple',
  },
  {
    id: 'sundara-kanda-patha',
    title: 'Sundara Kanda Parayanam',
    slug: 'sundara-kanda-parayanam',
    date: 'Often on Tuesdays, Saturdays, or auspicious occasions',
    description: "The recitation of Sundara Kanda, the fifth book of the Ramayana, which beautifully describes Hanuman's journey to Lanka, his meeting with Sita, and his heroic deeds. It is considered highly auspicious.",
    significance: [
      "Believed to ward off evils and bring peace, prosperity, and success.",
      "Inspires courage, confidence, and unwavering faith.",
      "Considered a powerful remedy for overcoming obstacles and adversities.",
      "Deepens devotion to Hanuman and Lord Rama."
    ],
    celebrationHighlights: [
      "Group or individual recitation of the entire Sundara Kanda.",
      "Offering prayers and flowers to Hanuman before and after the reading.",
      "Meditation on the virtues and deeds of Hanuman highlighted in the chapter.",
      "Often performed for specific intentions or general well-being."
    ],
    icon: <BookOpenText className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/3c/3f/84/3c3f843f43de1b37b9da34b0777c715b.jpg',
    imageHint: 'scripture reading devotion',
  },
  {
    id: 'tuesday-saturday-worship',
    title: 'Tuesday & Saturday Worship',
    slug: 'tuesday-saturday-worship',
    date: 'Every Tuesday and Saturday',
    description: "Tuesdays (Mangalvar) and Saturdays (Shanivar) are considered particularly auspicious for worshipping Lord Hanuman. Devotees observe fasts and perform special pujas on these days.",
    significance: [
      "Tuesday is traditionally associated with Hanuman's immense strength and protective power.",
      "Saturday worship is believed to mitigate the ill effects of Shani (Saturn) and gain Hanuman's blessings for overcoming difficulties.",
      "Regular worship on these days cultivates discipline, devotion, and inner strength."
    ],
    celebrationHighlights: [
      "Visiting Hanuman temples.",
      "Reciting Hanuman Chalisa, Bajrang Baan, and other stotras.",
      "Offering oil (mustard or sesame), sindoor, flowers (especially red), and sweets.",
      "Fasting or consuming simple vegetarian food.",
      "Lighting lamps (diyas) and incense."
    ],
    icon: <Users className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/c0/0e/1d/c00e1de1b0d81978281c8ad06c7bf441.jpg',
    imageHint: 'temple worship offering',
  },
  {
    id: 'diwali-hanuman-puja',
    title: 'Hanuman Puja during Diwali',
    slug: 'diwali-hanuman-puja',
    date: 'During Diwali festivities (varies regionally)',
    description: "In some traditions, Lord Hanuman is also worshipped during Diwali, especially for his role in aiding Lord Rama's victory over Ravana, which Diwali commemorates. His worship is sought for protection and strength.",
    significance: [
      "Recognizing Hanuman's contribution to the victory of good over evil.",
      "Seeking blessings for protection from negative energies during the auspicious period.",
      "Hanuman's devotion to Rama and Sita is remembered and revered."
    ],
    celebrationHighlights: [
      "Special Hanuman pujas alongside Lakshmi Puja in certain regions.",
      "Recitation of Hanuman Chalisa as part of Diwali rituals.",
      "Offering prayers for courage and strength to overcome life's darkness.",
      "Lighting lamps in Hanuman's name for guidance and protection."
    ],
    icon: <Lamp className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/68/30/02/683002e0aabd05d6407e09d62c27c679.jpg',
    imageHint: 'diwali lamps festival',
  },
   {
    id: 'hanuman-nirjala-ekadashi',
    title: 'Hanuman Worship on Nirjala Ekadashi',
    slug: 'hanuman-nirjala-ekadashi',
    date: 'Jyeshtha Shukla Ekadashi',
    description: "While Nirjala Ekadashi is primarily dedicated to Lord Vishnu, many devotees also worship Lord Hanuman on this day, seeking his blessings for strength to observe the rigorous fast and for spiritual progress.",
    significance: [
      "Seeking strength and resolve to complete the difficult Nirjala (waterless) fast.",
      "Hanuman's devotion to Lord Rama (an avatar of Vishnu) makes his worship complementary.",
      "Prayers for overcoming obstacles in spiritual practices."
    ],
    celebrationHighlights: [
      "Reciting Hanuman Chalisa and other prayers to Hanuman.",
      "Meditating on Hanuman's unwavering devotion and strength.",
      "Making offerings to Hanuman as part of the Ekadashi rituals.",
      "Seeking blessings for spiritual purity and advancement."
    ],
    icon: <SunMoon className="h-6 w-6 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/1c/cd/15/1ccd152394a76bcfada2785b3bc28be5.jpg',
    imageHint: 'fasting meditation spiritual',
  }
];
