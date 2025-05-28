// src/data/kanda-details/kanda-types.ts

export interface ChapterDetail {
  chapter_number: number;
  title: string;
  summary: string;
}

export interface KeyCharacter {
  name: string;
  description: string;
}

export interface KeyLocation {
  name: string;
  description: string;
}

export interface KeyEpisode {
  name: string;
  description: string;
}

export interface KandaBook {
  name: string;
  meaning: string;
  chapters: number;
  total_verses?: number; // Optional: some Kandas might not list this explicitly
  overview: {
    summary: string;
    key_events: string[];
    themes: string[];
  };
  chapters_detail?: ChapterDetail[]; // Optional: detailed chapter summaries might not always be provided
  key_characters: KeyCharacter[];
  key_locations?: KeyLocation[]; // Optional: for Kandas where specific locations are important
  key_episodes?: KeyEpisode[]; // Optional: for Kandas like Sundara Kanda
  philosophical_themes?: string[]; // Optional: for Kandas like Sundara Kanda
}
