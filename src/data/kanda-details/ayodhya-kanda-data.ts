// src/data/kanda-details/ayodhya-kanda-data.ts
import type { KandaBook } from './kanda-types';

export const ayodhyaKandaBookData: { book: KandaBook } = {
  book: {
    name: "Ayodhya Kanda",
    meaning: "Book of Ayodhya",
    chapters: 119,
    // total_verses is not provided in the input JSON for Ayodhya Kanda
    overview: {
      summary: "Ayodhya Kanda narrates the events leading up to Lord Rama's exile, the emotional turmoil within the royal family, and the unwavering commitment to dharma by the principal characters.",
      key_events: [
        "King Dasharatha's decision to crown Rama",
        "Manthara's manipulation of Queen Kaikeyi",
        "Kaikeyi's demand for Rama's exile and Bharata's coronation",
        "Rama's acceptance of exile",
        "Sita and Lakshmana's decision to accompany Rama",
        "King Dasharatha's demise",
        "Bharata's refusal to accept the throne",
        "Bharata's meeting with Rama and the placing of Rama's sandals on the throne"
      ],
      themes: [
        "Dharma (righteousness) and duty",
        "Sacrifice and loyalty",
        "The consequences of desires and boons",
        "Familial bonds and responsibilities"
      ]
    },
    // chapters_detail is not provided in the input JSON for Ayodhya Kanda
    key_characters: [
      {
        name: "Rama",
        description: "The protagonist; embodiment of dharma; accepts exile to honor his father's promise."
      },
      {
        name: "Sita",
        description: "Rama's devoted wife; chooses to accompany him into exile."
      },
      {
        name: "Lakshmana",
        description: "Rama's loyal brother; insists on joining Rama and Sita in exile."
      },
      {
        name: "King Dasharatha",
        description: "King of Ayodhya; father of Rama; bound by his promise to Kaikeyi, leading to Rama's exile."
      },
      {
        name: "Queen Kaikeyi",
        description: "Dasharatha's third wife; influenced by Manthara to demand Rama's exile."
      },
      {
        name: "Manthara",
        description: "Kaikeyi's maid; instigates Kaikeyi to act against Rama."
      },
      {
        name: "Bharata",
        description: "Kaikeyi's son; refuses to accept the throne and seeks Rama's return."
      },
      {
        name: "Shatrughna",
        description: "Bharata's brother; supports Bharata in his endeavors."
      },
      {
        name: "Sage Vasistha",
        description: "Royal priest; provides counsel during the crisis."
      },
      {
        name: "Guha",
        description: "Chief of the Nishadas; assists Rama during his journey into exile."
      }
    ]
  }
};
