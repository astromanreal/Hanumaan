// src/data/mantras.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { Music, BookText, Zap, Shield, Wind, Sparkles, ArrowRight, Feather, Edit3, PenTool, Smile, Layers, ListChecks, Lamp } from 'lucide-react';

export interface Mantra {
  id: string;
  title: string;
  type: string;
  sanskrit: string;
  hindiMeaning?: string; 
  englishMeaning: string;
  icon?: ReactNode;
  detailPageUrl?: string; 
  author?: string;
  composer?: string; 
  language?: string[] | string; // Allow string for single language
  total_verses?: number;
  theme?: string;
  composition_context?: string;
  benefits?: string[];
  recitation_guidelines?: string;
  verses?: Array<{
    verse_number?: number; 
    hindi?: string; 
    sanskrit: string; 
    english_transliteration?: string;
    english_translation?: string; 
    explanation?: string; 
  }>;
  conclusion?: { 
    sanskrit: string;
    english_translation: string;
    explanation: string;
  };
  attribution?: string; 
  deity_invoked?: string; 
  faces_of_hanuman?: string[]; 
  form?: string; 
  source?: string;
  note?: string; 
  count?: number; 
  names?: string[]; 
  deity?: string; 
}

export const mantrasCategorizedData: {
  shortMantras: Mantra[];
  mediumMantras: Mantra[];
  longerWorks: Mantra[];
} = {
  shortMantras: [
    {
      id: 'short_hanuman_gayatri_combined',
      title: 'Hanuman Gayatri Mantras',
      type: 'Gayatri Mantra',
      icon: React.createElement(Sparkles),
      sanskrit: 'ॐ आञ्जनेयाय विद्महे वायुपुत्राय धीमहि ।\nतन्नो हनुमत् प्रचोदयात् ॥\n\nॐ रामदूताय विद्महे कपिराजाय धीमहि ।\nतन्नो मारुतिः प्रचोदयात् ॥\n\nॐ अञ्जनिसुताय विद्महे महाबलाय धीमहि ।\nतन्नो मारुतिः प्रचोदयात् ॥',
      hindiMeaning: 'हम अंजना के पुत्र, वायुपुत्र, रामदूत, कपिराज और महाबली हनुमान का ध्यान करते हैं। वे हमें प्रेरणा दें और हमारी बुद्धि को प्रकाशित करें।',
      englishMeaning: 'We meditate on Hanuman - son of Anjana, son of Vayu, messenger of Rama, King of Monkeys, and the mighty one. May he inspire us and illuminate our minds.',
    },
    {
      id: 'short_anjani_garbha',
      title: 'Anjani Garbha Sambhuta',
      type: 'Salutation',
      icon: React.createElement(Wind),
      sanskrit: 'अञ्जनीगर्भ सम्भूत कपीन्द्र सचिवोत्तम ।\nरामप्रिय नमस्तुभ्यं हनुमन् रक्ष सर्वदा ॥',
      hindiMeaning: 'हे अंजनी के गर्भ से उत्पन्न, वानरों के राजा (सुग्रीव) के उत्तम सचिव, राम के प्रिय हनुमान! आपको नमस्कार है, सदा हमारी रक्षा करें।',
      englishMeaning: 'Born from the womb of Anjani, the best among ministers of the king of monkeys (Sugriva), O beloved of Rama, salutations to you, Hanuman, protect us always.',
    },
    {
      id: 'short_atulita_bala',
      title: 'Atulita Baladhamam',
      type: 'Verse (from Chalisa)',
      icon: React.createElement(Shield),
      sanskrit: 'अतुलितबलधामं हेमशैलाभदेहं\nदनुजवनकृशानुं ज्ञानिनामग्रगण्यम् ।\nसकलगुणनिधानं वानराणामधीशं\nरघुपतिप्रियभक्तं वातात्मजं नमामि ॥',
      hindiMeaning: 'जिनके बल की कोई तुलना नहीं है, जिनका शरीर सुवर्ण पर्वत के समान कांतिमान है, जो दैत्यरुपी वन को जलाने के लिए अग्नि हैं, जो ज्ञानियों में अग्रगण्य हैं, जो सम्पूर्ण गुणों के निधान हैं, जो वानरों के स्वामी हैं, तथा जो श्री रघुनाथजी के प्रिय भक्त हैं, उन पवनपुत्र हनुमान को मैं प्रणाम करता हूँ।',
      englishMeaning: 'I bow to Hanuman, the son of the Wind God, an abode of immeasurable strength, with a body glittering like a golden mountain. He is a fire to the forest of demons, the foremost among the wise, a storehouse of all virtues, the chief of the Vanaras, and the beloved devotee of Raghupati (Lord Rama).',
    },
    {
      id: 'short_buddhir_balam',
      title: 'Buddhir Balam Yasho Dhairyam',
      type: 'Benefit Mantra',
      icon: React.createElement(Zap),
      sanskrit: 'बुद्धिर्बलं यशो धैर्यं\nनिर्भयत्वमरोगता ।\nअजाड्यं वाक्पटुत्वं च\nहनुमत्स्मरणाद्भवेत् ॥',
      hindiMeaning: 'बुद्धि, बल, यश, धैर्य, निर्भयता, आरोग्यता, आलस्यहीनता और वाक्पटुता – ये सब हनुमानजी के स्मरण से प्राप्त होते हैं।',
      englishMeaning: 'Wisdom, strength, fame, courage, fearlessness, good health, alertness, and eloquence of speech – all these are attained by remembering Hanuman.',
    },
    {
      id: 'short_manojavam',
      title: 'Manojavam Marutatulyavegam',
      type: 'Salutation',
      icon: React.createElement(Wind),
      sanskrit: 'मनोजवं मारुततुल्यवेगं,\nजितेन्द्रियं बुद्धिमतां वरिष्ठम् ।\nवातात्मजं वानरयूथमुख्यं,\nश्रीरामदूतं शरणं प्रपद्ये ॥',
      hindiMeaning: 'मन और वायु के समान वेगवान, इंद्रियजित, बुद्धिमानों में श्रेष्ठ, वानर सेना के प्रमुख, श्रीराम के दूत हनुमानजी की मैं शरण लेता हूँ।',
      englishMeaning: 'I take refuge in the one who is swift as the mind, fast as the wind, master of the senses, foremost among the intelligent. Son of the Wind God, chief of the monkey host, the messenger of Sri Rama.',
    },
    {
      id: 'short_yatra_yatra',
      title: 'Yatra Yatra Raghunatha Kirtanam',
      type: 'Devotional Verse',
      icon: React.createElement(Music),
      sanskrit: 'यत्र यत्र रघुनाथकीर्तनं तत्र तत्र कृतमस्तकाञ्जलिम् ।\nबाष्पवारिपरिपूर्णालोचनं मारुतिं नमत राक्षसान्तकम् ॥',
      hindiMeaning: 'जहाँ-जहाँ श्री रघुनाथजी का कीर्तन होता है, वहाँ-वहाँ मस्तक पर अञ्जलि बाँधे हुए, आँसुओं से भरे नेत्रों वाले, राक्षसों का संहार करने वाले मारुति (हनुमानजी) को नमस्कार करो।',
      englishMeaning: 'Wherever the glories of Raghunatha (Lord Rama) are sung, there, with folded hands held to his forehead and eyes full of tears, Maruti (Hanuman), the destroyer of demons, is present. Bow to him.',
    },
    {
      id: 'short_dwadashanama_stuti_excerpt',
      title: 'Hanuman Dwadashanama Stuti (Excerpt)',
      type: 'Stotra Excerpt',
      icon: React.createElement(BookText),
      sanskrit: 'हनुमानञ्जनसूनुर्वायुपुत्रो महाबलः ।\nरामेष्टः फाल्गुनसखः पिङ्गाक्षोऽमितविक्रमः ॥१॥\nउदधिक्रमणश्चैव सीताशोकविनाशनः ।\nलक्ष्मणप्राणदाताश्च दशग्रीवस्य दर्पहा ॥२॥', 
      hindiMeaning: 'हनुमान, अंजना के पुत्र, वायु के पुत्र, महाबली। राम के प्रिय, अर्जुन के मित्र, भूरी आँखों वाले, अमित पराक्रमी। (१)\nसमुद्र को लांघने वाले, सीता के शोक का विनाश करने वाले। लक्ष्मण को प्राण देने वाले, और दशग्रीव (रावण) के घमंड को चूर करने वाले। (२)',
      englishMeaning: 'Hanuman, son of Anjana, son of Vayu, possessed of great strength. Beloved of Rama, friend of Arjuna (Phalguna), with reddish-brown eyes, of limitless valor. (1)\nHe who crossed the ocean, destroyer of Sita\'s sorrow. The giver of life to Lakshmana, and the subduer of Dashagriva\'s (Ravana\'s) pride. (2)',
    }
  ],
  mediumMantras: [
    {
      id: 'medium_maruti_stotra',
      title: 'Maruti Stotra',
      type: 'Stotra',
      icon: React.createElement(PenTool),
      composer: "Samarth Ramdas",
      language: "Sanskrit", 
      form: "Stotra (Hymn of Praise)",
      theme: "Praising Lord Maruti (Hanuman), invoking strength, courage, and divine protection",
      deity_invoked: "Lord Maruti (Hanuman)",
      benefits: [
        "Protection from physical and mental adversities",
        "Granting strength and courage to face life's challenges",
        "Blessings for success, wisdom, and divine grace",
        "Removal of obstacles and obstacles caused by negative forces"
      ],
      recitation_guidelines: "Recite this stotra regularly, especially on Tuesdays and Saturdays, to invoke Lord Maruti’s protection and blessings. It can also be recited during Hanuman Jayanti or in moments of distress and need for strength.",
      verses: [
        { verse_number: 1, sanskrit: "जय मारुति रघुकुल नायक। हरतु शत्रु मर्म को एकै॥", english_translation: "Victory to Maruti, the leader of the Raghu clan. He destroys the enemy’s heart with a single blow.", explanation: "Praising Lord Maruti's valor and strength, emphasizing his power to defeat enemies effortlessly." },
        { verse_number: 2, sanskrit: "हे पवन कुमार शरणं भव। पतितपावन सब विधि ग्रह॥", english_translation: "O son of the wind god, the refuge of all. You are the purifier of all sinners, removing their sins and afflictions.", explanation: "Acknowledging Lord Hanuman’s role as a purifier and protector of devotees from sins and troubles." },
         { verse_number: 3, sanskrit: "स्वधर्मे निपुणो होय, गुरु मंत्रा ची बनाय। मर्जी तळयो याहि जिंकावा॥", english_translation: "He who is proficient in his duties, and whose guru’s words he follows, succeeds in everything, overpowering all challenges.", explanation: "This verse emphasizes the importance of following one’s duty and the guidance of the guru for success." },
        { verse_number: 4, sanskrit: "तर्जना बळवंतक तुलसी धरावा। वहन कष्ट सब पावे तुम कृपा योजित करें॥", english_translation: "You bear all burdens with grace, O Lord. All hardships are alleviated by your divine mercy.", explanation: "Emphasizing Lord Hanuman's ability to carry all burdens and alleviating difficulties for his devotees." },
        { verse_number: 5, sanskrit: "येन राघव सहायाय व्रतीतें यः समुझावहे। जान्हवी बाह्यां सदा मानवीकरणां॥", english_translation: "By whose help, the Rama devotees are always victorious and earn respect in this world.", explanation: "Acknowledges Lord Hanuman’s unwavering support to the devotees of Lord Rama and his help in their success." },
        { verse_number: 6, sanskrit: "कष्ट दूर करके जाओ पाएं जो, मनमा पावे। सचखेर हरिवत्सल पेमैं मरे॥", english_translation: "He who removes all obstacles and leads to success and happiness, filled with love for Lord Rama.", explanation: "The verse depicts Hanuman’s role as a remover of obstacles and his profound devotion to Lord Rama." },
        { verse_number: 7, sanskrit: "तुमसे पवित्र है देवता, सत्य संतुष्ट मोक्ष माना। सदा सर्व कष्टादिक समाधान के सिर॥", english_translation: "You are purer than the gods, O Lord. You always solve problems and bring peace, dispelling all hardships.", explanation: "Praises Hanuman's purity, divinity, and his role in dispelling troubles and bringing peace to devotees." }
      ],
      conclusion: { 
        sanskrit: "तुष्टायाः सर्वशंयदानें कृपा त्यागेंद्र कं। शत्रु वासनां पंथकं ब्रंह्मः कांति समाध्यानं॥", 
        english_translation: "Those who recite this hymn with devotion will have their desires fulfilled and be protected by Lord Maruti’s divine grace.", 
        explanation: "This verse assures the devotees that regular recitation of the stotra will lead to divine blessings, fulfillment of desires, and protection from harm." 
      },
      attribution: "A devotional hymn composed by Samarth Ramdas, emphasizing the strength and virtues of Lord Maruti (Hanuman) in the context of victory, protection, and blessings.",
      note: "This stotra is widely recited by devotees of Hanuman, especially in Maharashtra and other regions where Samarth Ramdas is revered.",
      sanskrit: "जय मारुति रघुकुल नायक। हरतु शत्रु मर्म को एकै॥\nहे पवन कुमार शरणं भव। पतितपावन सब विधि ग्रह॥ ... (संपूर्ण स्तोत्र के लिए और देखें)", 
      hindiMeaning: "मारुति, रघुकुल के नायक, आपकी जय हो। आप एक ही प्रहार में शत्रु के मर्म को नष्ट कर देते हैं। हे पवन कुमार, आप सभी के आश्रय हैं। आप सभी पापियों को शुद्ध करने वाले हैं और उनके पापों और कष्टों को दूर करते हैं। ... (और भी श्लोक)",
      englishMeaning: "Victory to Maruti, leader of Raghu clan. He destroys the enemy’s heart in one blow. O son of Vayu, refuge of all, purifier of sinners, removing their sins and afflictions. ... (View more for full stotra)",
      detailPageUrl: '/mantras/maruti-stotra',
    },
    {
      id: 'medium_hanuman_chalisa', 
      title: 'Hanuman Chalisa',
      type: 'Chalisa',
      icon: React.createElement(BookText),
      sanskrit: 'श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।\nबरनउँ रघुबर बिमल जसु जो दायकु फल चारि॥', 
      hindiMeaning: 'अपने मन दर्पण को श्री गुरुदेव के चरण-कमलों की धूलि से पवित्र करके, मैं श्री रघुवीर के निर्मल यश का वर्णन करता हूँ, जो चारों फल (धर्म, अर्थ, काम, मोक्ष) देने वाला है।',
      englishMeaning: 'Cleansing the mirror of my mind with the dust from the lotus feet of the Divine Guru, I describe the pure glory of Shri Raghubar (Lord Rama), which bestows the four fruits of life.',
      detailPageUrl: '/mantras/hanuman-chalisa',
    },
    {
      id: 'medium_bajrang_baan', 
      title: 'Bajrang Baan',
      type: 'Baan (Arrow of Protection)',
      icon: React.createElement(Shield),
      sanskrit: 'दोहा निश्चय प्रेम प्रतीति ते, विनय करैं सनमान ।\nतेहि के कारज सकल शुभ, सिद्ध करें हनुमान ॥', 
      hindiMeaning: 'जो निश्चय प्रेम और विश्वास से सम्मानपूर्वक विनय करते हैं, हनुमानजी उनके सभी शुभ कार्यों को सिद्ध करते हैं।',
      englishMeaning: 'Whoever, with true love and faith, respectfully makes a plea, Hanuman fulfills all their auspicious tasks.',
      detailPageUrl: '/mantras/bajrang-baan', 
    },
    {
      id: 'medium_hanuman_ashtak', 
      title: 'Hanuman Ashtak',
      type: 'Ashtak (Eight Verses)',
      icon: React.createElement(Zap),
      author: "Goswami Tulsidas",
      sanskrit: 'बाल समय रबि भक्षि लियो तब, तीनहुँ लोक भयो अन्धियारो।\nताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो॥', 
      hindiMeaning: 'बचपन में जब आपने सूर्य को निगल लिया था, तब तीनों लोकों में अंधेरा छा गया था। इससे संसार में भय उत्पन्न हो गया, यह संकट किसी से टाला नहीं जा रहा था।', 
      englishMeaning: 'As a child, you swallowed the sun, casting darkness across the three worlds. The world trembled in fear, as none could relieve this distress.', 
      detailPageUrl: '/mantras/hanuman-ashtak',
    },
    {
      id: 'medium_hanuman_ashtottara_shatanamavali',
      title: 'Hanuman Ashtottara Shatanamavali',
      type: 'Ashtottara Shatanamavali (108 Names)',
      icon: React.createElement(ListChecks),
      language: ["Sanskrit"],
      deity: "Lord Hanuman",
      count: 108,
      sanskrit: 'ॐ हनुमते नमः। ॐ अञ्जनासुताय नमः। ॐ वायुपुत्राय नमः। ... (संपूर्ण नामावली के लिए और देखें)', 
      hindiMeaning: 'भगवान हनुमान के १०८ पवित्र नामों का संग्रह, प्रत्येक नाम उनके दिव्य गुणों और कर्मों का महिमामंडन करता है। आशीर्वाद, सुरक्षा और आध्यात्मिक उन्नति के लिए इनका पाठ किया जाता है।',
      englishMeaning: 'A collection of 108 sacred names of Lord Hanuman, each glorifying his divine attributes and deeds. Recited for blessings, protection, and spiritual upliftment. (View more for full list)',
      detailPageUrl: '/mantras/hanuman-ashtottara-shatanamavali',
      names: [ 
        "ॐ हनुमते नमः", "ॐ अञ्जनासुताय नमः", "ॐ वायुपुत्राय नमः", "ॐ महाबलाय नमः", "ॐ रामेष्ठाय नमः", "ॐ फल्गुनसखाय नमः",
        "ॐ पिङ्गाक्षाय नमः", "ॐ अमितविक्रमाय नमः", "ॐ उदधिक्रमणाय नमः", "ॐ सीताशोकविनाशकाय नमः",
        "ॐ लक्ष्मणप्राणदात्रे नमः", "ॐ दशग्रीवदर्पहन्त्रे नमः" 
      ],
    },
  ],
  longerWorks: [
    {
      id: 'long_hanuman_stotra_ramdas',
      title: 'Hanuman Stotra (Samarth Ramdas)',
      type: 'Stotra',
      icon: React.createElement(PenTool),
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
          verse_number: 12,
          sanskrit: "स्तोत्रं हनुमतः पुण्यं, यः पठेत्सततं नरः।\nसर्वपापं विनिर्मुक्तो, रुद्रलोकं स गच्छति॥",
          english_transliteration: "Stotraṁ Hanumataḥ puṇyaṁ, yaḥ paṭhetsatataṁ naraḥ |\nSarvapāpaṁ vinirmukto, Rudralokaṁ sa gacchati ||",
          english_translation: "Whoever reads this sacred Hanuman Stotra regularly will be freed from all sins and will attain the abode of Lord Rudra (Shiva).",
          explanation: "The concluding verse promises great spiritual merit and liberation for regular recitation."
        }
      ],
      source: "Hanuman Stotra by Samarth Ramdas, a revered saint and spiritual mentor of Shivaji Maharaj.",
      sanskrit: 'मनोजवं मारुततुल्यवेगं, जितेन्द्रियं बुद्धिमतां वरिष्ठम्।\nवातात्मजं वानरयूथमुख्यं, श्रीरामदूतं शरणं प्रपद्ये॥ ... (संपूर्ण स्तोत्र के लिए और देखें)', 
      hindiMeaning: 'मन और वायु के समान वेगवान, इंद्रियजित, बुद्धिमानों में श्रेष्ठ, वानर सेना के प्रमुख, श्रीराम के दूत हनुमानजी की मैं शरण लेता हूँ। ... (और भी श्लोक)', 
      englishMeaning: 'I surrender to Hanuman, the son of the wind-god, who is swift as the mind and wind, master of the senses, supreme among the intelligent, leader of the monkey army, and the divine messenger of Lord Rama. ... (View more for full stotra)', 
      detailPageUrl: '/mantras/hanuman-stotra',
    },
    {
      id: 'long_bala_hanuman_stuti',
      title: 'Bala Hanuman Stuti',
      type: 'Stuti (Hymn to Child Hanuman)',
      icon: React.createElement(Smile),
      language: ["Sanskrit"],
      form: "Stuti",
      theme: "Devotion to child-form of Hanuman, divine playfulness, strength and protection",
      total_verses: 9,
      benefits: [
        "Invokes the blessings and protection of child Hanuman",
        "Removes fear, anxiety, and illness in children",
        "Promotes purity, courage, and devotion",
        "Ideal for recitation by and for children"
      ],
      recitation_guidelines: "Can be chanted in the morning or evening, especially on Tuesdays and Saturdays or during Hanuman Jayanti. Suitable for children.",
      verses: [
          {
            verse_number: 1,
            sanskrit: "बालं मुकुन्दाभरणं, बालार्कसमतेजसम्।\nबालप्रगल्पनारम्यं, बालं हनुमतं भजे॥",
            english_transliteration: "Bālaṁ Mukundābharaṇaṁ, bālārkasamatejasam |\nBālapragalpanāramyaṁ, bālaṁ Hanumataṁ bhaje ||",
            english_translation: "I worship the child Hanuman, who is the ornament of Mukunda (Lord Vishnu), whose brilliance is like the rising sun, and whose sweet childish speech delights the heart.",
            explanation: "Describes the enchanting and radiant form of child Hanuman, a source of divine joy and energy."
          },
          {
            verse_number: 9,
            sanskrit: "एषा स्तुतिः पठेद्यस्तु, भक्त्या बालं हनूमतम्।\nसर्वसिद्धिं स लभते, नात्र कार्यविचारणा॥",
            english_transliteration: "Eṣā stutiḥ paṭhedyastu, bhaktyā bālaṁ Hanūmatam |\nSarvasiddhiṁ sa labhate, nātra kāryavicāraṇā ||",
            english_translation: "He who recites this hymn to child Hanuman with devotion attains all accomplishments—there is no doubt about it.",
            explanation: "The phalaśruti (result) verse promises fulfillment of wishes and spiritual success."
          }
      ],
      source: "Traditional Sanskrit Composition (Bāla Hanumān Stuti), recited in many Hanuman temples and devotional settings.",
      sanskrit: 'बालं मुकुन्दाभरणं, बालार्कसमतेजसम्।\nबालप्रगल्पनारम्यं, बालं हनुमतं भजे॥ ... (संपूर्ण स्तुति के लिए और देखें)', 
      hindiMeaning: 'मैं बाल हनुमान की पूजा करता हूँ, जो मुकुंद (भगवान विष्णु) के आभूषण हैं, जिनका तेज उगते हुए सूर्य के समान है, और जिनकी मधुर बाल-सुलभ वाणी हृदय को प्रसन्न करती है। ... (और भी श्लोक)', 
      englishMeaning: 'I worship the child Hanuman, who is the ornament of Mukunda (Lord Vishnu), whose brilliance is like the rising sun, and whose sweet childish speech delights the heart. ... (View more for full stuti)', 
      detailPageUrl: '/mantras/bala-hanuman-stuti',
    },
    {
      id: 'long_hanuman_kavacham',
      title: 'Hanuman Kavacham',
      type: 'Kavacham (Protective Hymn)',
      icon: React.createElement(Shield),
      language: "Sanskrit",
      form: "Kavacham (Protective Hymn)",
      theme: "Divine protection, strength, fearlessness, victory over enemies",
      total_verses: 18,
      author: "Traditional – found in several Puranic texts",
      benefits: [
        "Protection from evil forces, black magic, and enemies",
        "Bestows courage, fearlessness, and health",
        "Grants victory in conflicts and legal issues",
        "Ensures spiritual and physical security"
      ],
      recitation_guidelines: "Chant daily or during special Hanuman pujas, especially on Tuesdays and Saturdays. Can also be written and carried as a talisman.",
      verses: [
        {
          verse_number: 1,
          sanskrit: "अस्य श्रीहनुमत्कवचस्य, ब्रह्मा ऋषिः। गायत्री छन्दः। हनुमान् देवता। हनुमत् प्रीत्यर्थे जपे विनियोगः॥",
          english_translation: "This is the Hanumat Kavacham. The sage is Brahma, the meter is Gayatri, the deity is Hanuman. This is used for pleasing Lord Hanuman.",
          explanation: "This verse serves as the invocation and identifies the elements of the kavacham (sage, meter, deity, purpose)."
        },
        {
          verse_number: 8,
          sanskrit: "सर्वेष्वङ्गेषु मे नित्यं रामदूतः प्रतिष्ठितः। भक्तिं मे हनुमन् दद्याद् रामचन्द्रपदं गतम्॥",
          english_translation: "May the messenger of Rama forever dwell in all my limbs. May Hanuman grant me devotion and the blessed feet of Rama.",
          explanation: "Concludes with a prayer for total embodiment of Hanuman’s presence and Rama’s grace."
        }
      ],
      conclusion: {
        sanskrit: "इदं कवचं पवित्रं पठनं श्रवणं स्मृतम्।\nहनूमद्भक्तिमाप्नोति युद्धे जयमवाप्नुयात्॥",
        english_translation: "This sacred kavacham, when read, heard, or remembered, bestows Hanuman’s devotion and victory in battle.",
        explanation: "The result of reciting this kavacham is spiritual strength and real-world success."
      },
      attribution: "Ancient Hindu tradition, found in Hanuman-related Upapuranas and tantric texts. Common in both North and South Indian traditions.",
      sanskrit: 'अस्य श्रीहनुमत्कवचस्य, ब्रह्मा ऋषिः।\nगायत्री छन्दः। हनुमान् देवता। ... (संपूर्ण कवच के लिए और देखें)', 
      hindiMeaning: 'यह हनुमत्कवच है। ऋषि ब्रह्मा हैं, छंद गायत्री है, देवता हनुमान हैं। यह भगवान हनुमान को प्रसन्न करने के लिए प्रयोग किया जाता है। ... (और भी श्लोक)',
      englishMeaning: 'This is the Hanumat Kavacham. The sage is Brahma, the meter is Gayatri, the deity is Hanuman. ... (View more for full kavacham)', 
      detailPageUrl: '/mantras/hanuman-kavacham',
    },
    {
      id: 'long_panchamukhi_hanuman_kavach',
      title: 'Panchamukhi Hanuman Kavach',
      type: 'Kavacham (Protective Hymn)',
      icon: React.createElement(Layers),
      language: "Sanskrit",
      form: "Kavacham (Protective Hymn)",
      theme: "Protection, victory over evil, spiritual shield, invoking five divine aspects of Hanuman",
      total_verses: 17,
      deity_invoked: "Panchamukhi Hanuman (Five-faced Hanuman)",
      faces_of_hanuman: [
        "Hanuman (East-facing) – removes sins, grants purity",
        "Narasimha (South-facing) – destroys fear and evil",
        "Garuda (West-facing) – removes poison, black magic",
        "Varaha (North-facing) – grants wealth and prosperity",
        "Hayagriva (Sky-facing/upward) – bestows knowledge and wisdom"
      ],
      benefits: [
        "Shield from enemies, black magic, evil spirits",
        "Victory in legal, spiritual, and physical battles",
        "Healing from fear, disease, and negative influences",
        "Spiritual progress and mental strength"
      ],
      recitation_guidelines: "Chant during sunrise, on Tuesdays, Saturdays, or during spiritual emergencies. Recommended during Hanuman Jayanti or Navaratri.",
      verses: [
        {
          verse_number: 1,
          sanskrit: "ॐ अस्य श्रीपञ्चमुखहनुमत्कवचमन्त्रस्य ब्रह्मा ऋषिः । गायत्री छन्दः । पञ्चमुखी हनुमान् देवता । हं बीजम् । हुं शक्तिः । हनुमान् कीलकम् । मम सर्वकार्यसिद्ध्यर्थं पञ्चमुखी हनुमत्कवचपाठे विनियोगः ॥",
          english_translation: "Om. For this Panchamukhi Hanumat Kavacham, the sage is Brahma, the meter is Gayatri, deity is Panchamukhi Hanuman. The seed is 'Ham', the power is 'Hum', Hanuman is the key. It is recited for the accomplishment of all tasks.",
          explanation: "This is the invocation and assignment of divine energies for the kavacham's effect."
        },
         {
          verse_number: 9,
          sanskrit: "ऊर्ध्वं पातु हयग्रीवः, सर्वेश्वरोऽवतां मम । इति ते कथितं वत्स, सर्वरक्षाकरं परम् ॥",
          english_translation: "Above, may Hayagriva protect me. Thus, my child, is the supreme shield of all protection told to you.",
          explanation: "Final face Hayagriva protects from above, signifying wisdom and divine command."
        }
      ],
      conclusion: {
        sanskrit: "यः पठेत् प्रातरुत्थाय भक्त्या पंचमुखं स्मरेत् । सर्वशत्रुहरं वज्रकवचं तं लभेत् ध्रुवम् ॥",
        english_translation: "He who reads this after rising early and remembers Panchamukha with devotion, surely obtains a divine shield that destroys all enemies.",
        explanation: "Confirms guaranteed protection and spiritual strength through daily recitation."
      },
      attribution: "Traditional scripture (Tantric and Agamic roots), popular in South Indian Hanuman worship and among devotees of Shakti-Hanuman.",
      sanskrit: 'ॐ अस्य श्रीपञ्चमुखहनुमत्कवचमन्त्रस्य ब्रह्मा ऋषिः ।\nगायत्री छन्दः । ... (संपूर्ण कवच के लिए और देखें)',
      hindiMeaning: 'ॐ। इस पंचमुखी हनुमत् कवच मंत्र के ऋषि ब्रह्मा हैं, छंद गायत्री है, देवता पंचमुखी हनुमान हैं। ... (और भी श्लोक)',
      englishMeaning: 'Om. For this Panchamukhi Hanumat Kavacham, the sage is Brahma, the meter is Gayatri, ... (View more for full kavacham)',
      detailPageUrl: '/mantras/panchamukhi-hanuman-kavach',
    },
    {
      id: 'long_anjaneya_kavacham',
      title: 'Anjaneya Kavacham',
      type: 'Kavacham',
      icon: React.createElement(Shield),
      language: "Sanskrit",
      form: "Kavacham (Protective Hymn)",
      theme: "Protection from harm, strength, fearlessness, spiritual empowerment",
      deity_invoked: "Anjaneya (Lord Hanuman, son of Anjana)",
      tradition: "South Indian",
      benefits: [
        "Protection from physical and mental adversities",
        "Shield from negative influences, evil forces, and black magic",
        "Grants victory over obstacles, fearlessness, and strength",
        "Bestows health, wealth, and spiritual well-being"
      ],
      recitation_guidelines: "Chant during Hanuman Jayanti, Saturdays, or when seeking strength and protection. Recommended chanting during sunrise and sunset.",
      verses: [
        {
          verse_number: 1,
          sanskrit: "ॐ अस्य श्रीअञ्जनेयकवचस्य ब्रह्मा ऋषिः । गायत्री छन्दः । श्रीअञ्जनेय देवता । हं बीजम् । हुं शक्तिः । श्रीअञ्जनेय कीलकम् । मम सर्वकार्यसिद्ध्यर्थं अञ्जनेयकवचपाठे विनियोगः ॥",
          english_translation: "Om. For this Anjaneya Kavacham, the sage is Brahma, the meter is Gayatri, the deity is Anjaneya. The seed is 'Ham', the power is 'Hum', Anjaneya is the key. It is recited for the success of all tasks.",
          explanation: "Invocation and assignment of energies for the kavacham."
        },
        {
          verse_number: 8,
          sanskrit: "रामदूतः पातु मां सर्वशत्रुविनाशकः । सर्वव्याधिनिवारिणो पवनात्मजः सदा पातु ॥",
          english_translation: "May the messenger of Rama protect me, the destroyer of all enemies, the remover of all ailments, may the son of Vayu protect me always.",
          explanation: "Highlights Hanuman’s divine mission of protection and healing."
        }
      ],
      conclusion: {
        sanskrit: "यः पठेन्नित्यं श्रद्धया भक्त्या सर्वदुःखभञ्जनः। अञ्जनेयकवचं ध्रुवा समृद्धिम् आत्मनं लभेत्॥",
        english_translation: "He who reads this with faith and devotion every day, will be rid of all sufferings and attain success and prosperity.",
        explanation: "Reciting the kavacham daily brings relief from suffering and results in material and spiritual success."
      },
      attribution: "Traditional South Indian scriptures, widely popular among devotees of Hanuman and in regions practicing intense worship of Lord Anjaneya.",
      sanskrit: 'ॐ अस्य श्रीअञ्जनेयकवचस्य ब्रह्मा ऋषिः ।\nगायत्री छन्दः । ... (संपूर्ण कवच के लिए और देखें)',
      hindiMeaning: 'ॐ। इस आंजनेय कवच के ऋषि ब्रह्मा हैं, छंद गायत्री है, देवता श्री आंजनेय हैं। ... (और भी श्लोक)',
      englishMeaning: "Om. For this Anjaneya Kavacham, the sage is Brahma, the meter is Gayatri,... (View more for full kavacham)",
      detailPageUrl: '/mantras/anjaneya-kavacham',
    },
  ],
};

// Helper to get all mantras in a flat array, useful for the profile page
export const getAllMantras = (): Mantra[] => {
  return Object.values(mantrasCategorizedData).flat();
};

    
