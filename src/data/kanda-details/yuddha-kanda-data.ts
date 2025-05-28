// src/data/kanda-details/yuddha-kanda-data.ts
import type { KandaBook } from './kanda-types';

export const yuddhaKandaBookData: { book: KandaBook } = {
  book: {
    name: "Yuddha Kanda",
    meaning: "Book of the War",
    chapters: 118, // Note: Ramayana versions might vary, this is a common count. Valmiki Ramayana has around 128-131 sargas.
    overview: {
      summary: "The Yuddha Kanda, also known as the Lanka Kanda, describes the great battle between the forces of Rama and Ravana. After Ravana kidnaps Sita, the battle to rescue her reaches its climax. This book details the strategies, valor, and divine interventions that lead to the eventual victory of Rama and the defeat of Ravana. The battle is fierce, with key warriors from both sides engaging in one-on-one combat, culminating in Ravana’s death and the rescue of Sita.",
      key_events: [
        "Construction of Rama Setu (bridge to Lanka)",
        "Rama’s army arrives in Lanka to confront Ravana.",
        "Defection of Vibhishana to Rama's side",
        "Angada's peace mission to Ravana's court fails",
        "The battle between the Vanaras (monkeys) and Ravana’s Rakshasas (demons).",
        "Ravana sends his great warriors like Kumbhakarna, Indrajit (Meghnad), and others to challenge Rama’s forces.",
        "Hanuman brings Sanjeevani herb to revive Lakshmana",
        "The one-on-one duels between the heroes of both sides.",
        "The intervention of divine beings, including Lord Vishnu’s blessing on Rama.",
        "Lakshmana kills Indrajit",
        "Rama’s ultimate victory and Ravana’s death.",
        "Sita’s trial by fire (Agni Pariksha) to prove her purity.",
        "Coronation of Vibhishana as King of Lanka",
        "The restoration of Sita to Rama and the return to Ayodhya."
      ],
      themes: [
        "Righteousness (Dharma) and justice (Rama’s unwavering adherence to Dharma).",
        "Courage, valor, and sacrifice (The Vanaras’ and Rama’s bravery in battle).",
        "The battle between good and evil (Rama’s forces versus Ravana’s army).",
        "Divine intervention and the fulfillment of destiny.",
        "The role of dharma and duty in war (Rama’s responsibility as a king and protector).",
        "Consequences of arrogance and adharma (Ravana's downfall)"
      ]
    },
    key_characters: [
      {
        name: "Rama",
        description: "The seventh incarnation of Vishnu, Rama is the hero of the Ramayana, renowned for his bravery, devotion to Dharma, and commitment to justice. In the Yuddha Kanda, he leads his army to defeat Ravana and rescue Sita."
      },
      {
        name: "Sita",
        description: "Rama's wife, whose steadfastness and purity remain unshaken during her captivity and trial by fire."
      },
      {
        name: "Lakshmana",
        description: "Rama’s younger brother and loyal companion. Lakshmana participates in key battles, showing great bravery and strength, notably killing Indrajit."
      },
      {
        name: "Hanuman",
        description: "The devoted Vanara warrior who plays a crucial role in the war. He is Rama’s closest ally, providing support in battle, bringing the Sanjeevani herb, and exhibiting immense power."
      },
      {
        name: "Ravana",
        description: "The demon king of Lanka who kidnaps Sita. Despite his immense strength and knowledge, Ravana’s ego and disregard for Dharma lead to his downfall."
      },
      {
        name: "Vibhishana",
        description: "Ravana’s younger brother who defects to Rama’s side due to his righteousness, supporting him with knowledge of Ravana’s army and strategy."
      },
      {
        name: "Kumbhakarna",
        description: "Ravana’s massive brother, a giant warrior known for his deep sleep. Kumbhakarna fights fiercely for Ravana but is eventually slain by Rama."
      },
      {
        name: "Indrajit (Meghnad)",
        description: "Ravana’s son, a powerful warrior skilled in illusion and celestial weapons. Indrajit poses a significant threat, repeatedly injuring Rama and Lakshmana, but is ultimately killed by Lakshmana."
      },
      {
        name: "Sugriva",
        description: "King of the Vanaras, a key ally of Rama, leading his monkey army in the battle."
      },
      {
        name: "Angada",
        description: "Son of Vali, a brave Vanara warrior and diplomat who attempts a peace mission to Ravana."
      },
      {
        name: "Jambavan",
        description: "The wise elder bear, who provides counsel and encouragement to the Vanara forces."
      }
    ],
    key_locations: [
      {
        name: "Lanka",
        description: "The island kingdom of Ravana, the primary setting for the Yuddha Kanda. The city becomes the battlefield where Rama’s army wages war against Ravana’s forces."
      },
      {
        name: "Rama Setu (Adam's Bridge)",
        description: "The bridge built by the Vanara army across the ocean, allowing Rama's forces to reach Lanka."
      },
      {
        name: "Mount Suvela",
        description: "A mountain near Lanka from where Rama and his army survey Ravana's city before the battle."
      },
      {
        name: "Ashoka Vatika",
        description: "The garden in Lanka where Sita is held captive. Though the main battle isn't here, it's the place of Sita's suffering and eventual liberation."
      },
      {
        name: "Ravana’s Palace",
        description: "The grand palace in Lanka, the seat of Ravana's power, and the symbolic heart of the conflict."
      }
    ],
    key_episodes: [
      {
        name: "Building of Rama Setu",
        description: "The Vanara army, under the guidance of Nala and Nila, constructs a bridge across the ocean to Lanka."
      },
      {
        name: "Angada's Embassy to Ravana",
        description: "Angada is sent as an emissary to Ravana's court one last time to demand Sita's return, but Ravana refuses."
      },
      {
        name: "The Battle Begins",
        description: "The war commences as Rama’s forces land in Lanka. The Vanaras engage Ravana’s Rakshasas in a fierce battle, with both sides suffering heavy losses."
      },
      {
        name: "Fall of Kumbhakarna",
        description: "Ravana’s mighty brother, Kumbhakarna, awakens from his long slumber and fights against Rama’s army. His strength is formidable, but he is eventually slain by Rama."
      },
      {
        name: "Indrajit’s Magical Warfare",
        description: "Indrajit, Ravana’s son, uses powerful sorcery and celestial weapons like the Nagapasha (serpent-noose) to injure Rama and Lakshmana. He is eventually defeated and killed by Lakshmana after a series of intense battles."
      },
      {
        name: "Hanuman Fetches Sanjeevani",
        description: "When Lakshmana is mortally wounded, Hanuman flies to the Himalayas and brings back the entire Dronagiri mountain with the life-saving Sanjeevani herb."
      },
      {
        name: "Rama and Ravana’s Duel",
        description: "The climactic battle between Rama and Ravana. Ravana, despite his great strength and boons, is finally defeated by Rama with the Brahmastra, a divine weapon."
      },
      {
        name: "Sita’s Agni Pariksha (Trial by Fire)",
        description: "After Ravana’s death, Sita undergoes the Agni Pariksha to prove her chastity and purity to the world. She emerges unharmed, and Agni Deva himself attests to her purity."
      },
      {
        name: "Return to Ayodhya and Coronation",
        description: "After the victory, Rama, Sita, Lakshmana, and their allies return to Ayodhya. Rama is joyously crowned king, marking the beginning of Rama Rajya (the ideal rule)."
      }
    ],
    philosophical_themes: [
      "Dharma's ultimate triumph over Adharma (unrighteousness).",
      "The power of devotion (Bhakti) as exemplified by Hanuman and Vibhishana.",
      "The destructive nature of ego and arrogance (Ravana's fatal flaw).",
      "The importance of alliances and collective effort in righteous causes.",
      "Divine justice and the role of avatars in restoring cosmic order."
    ]
  }
};
