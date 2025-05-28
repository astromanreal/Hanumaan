// src/data/kanda-details/aranya-kanda-data.ts
import type { KandaBook } from './kanda-types';

export const aranyaKandaBookData: { book: KandaBook } = {
  book: {
    name: "Aranya Kanda",
    meaning: "Book of the Forest",
    chapters: 75,
    // total_verses is not specified in the provided data
    overview: {
      summary: "Aranya Kanda describes Rama, Sita, and Lakshmana's life during their exile in the Dandaka forest, their encounters with sages and rakshasas, the kidnapping of Sita by Ravana, and the deepening of Rama's divine mission.",
      key_events: [
        "Journey through the Dandaka forest",
        "Blessings and warnings from sages and hermits",
        "Killing of demons like Viradha and Khara-Dushana",
        "Surpanakha’s insult and mutilation",
        "Golden deer (Maricha) and Rama's distraction",
        "Sita's abduction by Ravana",
        "Jatayu's heroic attempt and death",
        "Meeting with Shabari and Kabandha",
        "Alliance with Hanuman and Sugriva hinted at the end"
      ],
      themes: [
        "Test of virtue and strength in adversity",
        "Temptation, illusion, and deception (Maya)",
        "The rise of evil and cosmic imbalance",
        "The unwavering commitment to Dharma",
        "Role of nature and animals in divine narratives"
      ]
    },
    // chapters_detail is not specified in the provided data
    key_characters: [
      {
        name: "Rama",
        description: "Remains steadfast in dharma while facing trials, loss, and grief after Sita's abduction."
      },
      {
        name: "Sita",
        description: "Devoted wife of Rama; her abduction by Ravana becomes the central conflict."
      },
      {
        name: "Lakshmana",
        description: "Protects Rama and Sita fiercely; faces difficult moral dilemmas, especially in the golden deer incident."
      },
      {
        name: "Surpanakha",
        description: "Sister of Ravana; her insult by Lakshmana sets the stage for Ravana's vengeance."
      },
      {
        name: "Ravana",
        description: "King of Lanka; kidnaps Sita, introducing the main antagonist into the epic's central plot."
      },
      {
        name: "Maricha",
        description: "Demon who takes the form of a golden deer to deceive Sita and distract Rama."
      },
      {
        name: "Khara and Dushana",
        description: "Demonic commanders slain by Rama after they attack sages and disturb the forest peace."
      },
      {
        name: "Jatayu",
        description: "Divine vulture who sacrifices his life trying to save Sita from Ravana."
      },
      {
        name: "Shabari",
        description: "An aged ascetic woman who lovingly welcomes Rama and offers him spiritual guidance."
      },
      {
        name: "Kabandha",
        description: "Cursed celestial being; reveals valuable information about Sugriva after being liberated by Rama."
      }
    ]
  }
};
