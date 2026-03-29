
export interface Relationship {
  name: string;
  relation: string;
}

export interface CharacterDetail {
  slug: string;
  name: string;
  title: string;
  oneLineDescription: string;
  imageUrl: string;
  imageHint: string;
  bio: string;
  role: string;
  keyEvents: string[];
  traits: string[];
  symbolicMeaning: string;
  relationships: Relationship[];
  lifeLessons: string[];
  category: 'royal' | 'sages' | 'vanaras' | 'lanka' | 'others';
}

export const charactersData: CharacterDetail[] = [
  // --- ROYAL FAMILY ---
  {
    slug: 'rama',
    name: 'Lord Rama',
    category: 'royal',
    title: 'The Embodiment of Dharma',
    oneLineDescription: 'The seventh avatar of Lord Vishnu and the ideal king, son, and husband.',
    imageUrl: 'https://i.pinimg.com/736x/15/bd/80/15bd800aa67ea5943482bea8dbe51fa2.jpg',
    imageHint: 'lord rama majestic',
    bio: 'Lord Rama is the central figure of the Ramayana, revered as Maryada Purushottam—the supreme man who adheres to the highest moral and ethical standards.',
    role: 'As the protagonist, Rama accepts a 14-year exile to preserve his father’s honor, eventually defeating Ravana to rescue Sita and restore Dharma.',
    keyEvents: [
      'Breaking the divine bow of Shiva in Mithila.',
      'Accepting 14 years of exile without resentment.',
      'Slaying the ten-headed demon king Ravana.',
      'Establishing Rama Rajya, the ideal kingdom.'
    ],
    traits: ['Steadfastness', 'Compassion', 'Justice', 'Self-Discipline'],
    symbolicMeaning: 'Rama symbolizes the Soul (Atman) following the path of Truth.',
    relationships: [
      { name: 'Sita', relation: 'Beloved Consort' },
      { name: 'Lakshmana', relation: 'Loyal Brother' },
      { name: 'Hanuman', relation: 'Supreme Devotee' }
    ],
    lifeLessons: [
      'Duty takes precedence over personal desire.',
      'Calmness in adversity is the mark of a leader.',
      'True power lies in humility.'
    ]
  },
  {
    slug: 'sita',
    name: 'Mata Sita',
    category: 'royal',
    title: 'Symbol of Purity and Devotion',
    oneLineDescription: 'An incarnation of Goddess Lakshmi and the epitome of resilience and grace.',
    imageUrl: 'https://i.pinimg.com/1200x/46/d8/e7/46d8e771c139188299a03a294bbdce4d.jpg',
    imageHint: 'mata sita pure',
    bio: 'Mata Sita, daughter of King Janaka and Earth Goddess, represents the ultimate ideal of womanhood and unwavering loyalty.',
    role: 'Sita is the soul of the epic. Her abduction serves as the catalyst for the great war and her purity is the moral compass of the story.',
    keyEvents: [
      'Choosing exile over royal luxury to stay with Rama.',
      'Maintaining dignity while captive in Ashoka Vatika.',
      'Proving her purity through the Agni Pariksha.',
      'Returning to Mother Earth as a final assertion of divinity.'
    ],
    traits: ['Purity', 'Resilience', 'Unshakable Faith', 'Grace'],
    symbolicMeaning: 'Sita represents the Jiva (Individual Soul) seeking reunion with the Divine.',
    relationships: [
      { name: 'Rama', relation: 'Eternal Consort' },
      { name: 'Janaka', relation: 'Father' },
      { name: 'Hanuman', relation: 'Divine Son' }
    ],
    lifeLessons: [
      'Internal strength is more powerful than external force.',
      'Loyalty is the foundation of a sacred bond.',
      'Faith provides protection even in isolation.'
    ]
  },
  {
    slug: 'lakshmana',
    name: 'Lakshmana',
    category: 'royal',
    title: 'The Loyal Brother',
    oneLineDescription: 'Rama’s younger brother who accompanied him into exile out of pure love.',
    imageUrl: 'https://i.pinimg.com/1200x/7b/d3/be/7bd3be8d62dfd07a7582498f1dbe5158.jpg',
    imageHint: 'lakshmana warrior loyal',
    bio: 'Incarnation of Sheshanaga, Lakshmana exists solely to serve and protect his elder brother Rama.',
    role: 'He is the fierce protector during exile and the warrior who defeats Indrajit, the master of illusions.',
    keyEvents: [
      'Renouncing comfort to serve Rama in the forest.',
      'Drawing the Lakshman Rekha to protect Sita.',
      'Defeating Indrajit in a cataclysmic battle.',
      'Staying awake for 14 years to guard his brother.'
    ],
    traits: ['Absolute Loyalty', 'Intensity', 'Valour', 'Duty'],
    symbolicMeaning: 'Lakshmana symbolizes the focused will and active protection of righteousness.',
    relationships: [
      { name: 'Rama', relation: 'Elder Brother/God' },
      { name: 'Urmila', relation: 'Devoted Wife' }
    ],
    lifeLessons: [
      'Fraternal loyalty is a sacred duty.',
      'Self-sacrifice is the highest form of affection.',
      'Vigilance is required to sustain Dharma.'
    ]
  },
  {
    slug: 'bharata',
    name: 'Bharata',
    category: 'royal',
    title: 'The Saintly King',
    oneLineDescription: 'The brother who ruled Ayodhya by placing Rama’s sandals on the throne.',
    imageUrl: 'https://i.pinimg.com/736x/c0/70/46/c070463269db17c54fd947ff7ef9b10d.jpg',
    imageHint: 'bharata prince devotee',
    bio: 'Son of Kaikeyi, Bharata rejected the crown offered through intrigue, viewing it as a sin against his brother.',
    role: 'He ruled as a regent from Nandigram, living as an ascetic and awaiting Rama’s return.',
    keyEvents: [
      'Rebuking his mother for her greed and rejecting the throne.',
      'Pleading with Rama in the forest to return to Ayodhya.',
      'Placing Rama’s Padukas on the throne as the true ruler.',
      'Ruling Ayodhya with perfect detachment for 14 years.'
    ],
    traits: ['Selflessness', 'Justice', 'Devotion', 'Renunciation'],
    symbolicMeaning: 'Bharata represents the selfless administrator who treats power as a sacred trust.',
    relationships: [
      { name: 'Rama', relation: 'Idol/Brother' },
      { name: 'Kaikeyi', relation: 'Mother' }
    ],
    lifeLessons: [
      'Power should be handled with service, not ego.',
      'Love means honoring the rights of others.',
      'Greed destroys, but sacrifice heals.'
    ]
  },
  {
    slug: 'shatrughna',
    name: 'Shatrughna',
    category: 'royal',
    title: 'Slayer of Enemies',
    oneLineDescription: 'The youngest brother of Rama, known for his silent loyalty and support.',
    imageUrl: 'https://i.pinimg.com/1200x/77/b3/1d/77b31d7a1a1d75622c16d7b494f6b143.jpg',
    imageHint: 'shatrughna prince warrior',
    bio: 'Twin brother of Lakshmana, Shatrughna is the quietest of the princes but possesses immense strength.',
    role: 'He supported Bharata in administering Ayodhya and eventually slew the demon Lavanasura.',
    keyEvents: [
      'Assisting Bharata in maintaining stability during the exile.',
      'Defeating the demon Lavanasura to liberate Madhupuri.',
      'Serving his brothers with absolute humility.',
      'Upholding the ideals of the solar dynasty.'
    ],
    traits: ['Silent Loyalty', 'Efficiency', 'Valour', 'Humility'],
    symbolicMeaning: 'Shatrughna symbolizes the destruction of inner enemies like anger and greed.',
    relationships: [
      { name: 'Bharata', relation: 'Companion' },
      { name: 'Rama', relation: 'Elder Brother' }
    ],
    lifeLessons: [
      'Great service does not require a loud voice.',
      'Inner enemies must be conquered first.',
      'Support systems are vital for leadership.'
    ]
  },
  {
    slug: 'dasharatha',
    name: 'King Dasharatha',
    category: 'royal',
    title: 'The Bound Monarch',
    oneLineDescription: 'The righteous King of Ayodhya whose word became his tragic destiny.',
    imageUrl: 'https://i.pinimg.com/1200x/d0/2d/47/d02d47675fe2813678038b50c7133929.jpg',
    imageHint: 'king dasharatha',
    bio: 'A legendary warrior of the Ikshvaku dynasty, his life illustrates the conflict between personal love and a king’s word.',
    role: 'His past promises to Kaikeyi lead to the central tragedy: the exile of his beloved son Rama.',
    keyEvents: [
      'Performing the Putrakameshti Yagna to beget sons.',
      'Granting two fatal boons to Kaikeyi.',
      'The heartbreaking decision to exile Rama.',
      'Dying of grief after Rama’s departure.'
    ],
    traits: ['Truthfulness', 'Valour', 'Affection', 'Vulnerability'],
    symbolicMeaning: 'Dasharatha symbolizes the human struggle between emotions and laws of Karma.',
    relationships: [
      { name: 'Rama', relation: 'Heart/Son' },
      { name: 'Kaikeyi', relation: 'Wife' }
    ],
    lifeLessons: [
      'A promise made must be kept.',
      'Consequences of past actions eventually unfold.',
      'Attachment can lead to suffering.'
    ]
  },
  {
    slug: 'kaikeyi',
    name: 'Queen Kaikeyi',
    category: 'royal',
    title: 'The Driven Queen',
    oneLineDescription: 'The queen whose demand for her son’s coronation led to Rama’s exile.',
    imageUrl: 'https://i.pinimg.com/1200x/9b/fa/70/9bfa70429a89418b5acf878f81b0c4b3.jpg',
    imageHint: 'queen kaikeyi',
    bio: 'A warrior queen who once saved the King, her character shows how insecurity and bad counsel can corrupt a heart.',
    role: 'Influenced by Manthara, she demands Rama’s exile to secure the throne for her son Bharata.',
    keyEvents: [
      'Saving Dasharatha’s life in battle.',
      'Being manipulated by the words of Manthara.',
      'Extracting the tragic boons from the King.',
      'Spending her later life in deep remorse.'
    ],
    traits: ['Bravery', 'Impulsiveness', 'Ambition', 'Remorse'],
    symbolicMeaning: 'Kaikeyi represents the mind clouded by insecurity and negative influence.',
    relationships: [
      { name: 'Dasharatha', relation: 'Husband' },
      { name: 'Manthara', relation: 'Evil Counselor' }
    ],
    lifeLessons: [
      'Beware of negative associations.',
      'Insecurity can turn love into a weapon.',
      'Repentance is the path to peace.'
    ]
  },
  {
    slug: 'kausalya',
    name: 'Queen Kausalya',
    category: 'royal',
    title: 'Mother of the Divine',
    oneLineDescription: 'The senior queen of Ayodhya and the mother of Lord Rama.',
    imageUrl: 'https://i.pinimg.com/736x/e9/d0/70/e9d070160d618b4128bc9b67106bf24e.jpg',
    imageHint: 'queen kausalya',
    bio: 'Queen Kausalya is the embodiment of maternal love and patient endurance.',
    role: 'She provides the emotional foundation for Rama and endures the pain of his exile with quiet dignity.',
    keyEvents: [
      'The birth of Lord Rama.',
      'Blessing Rama before his departure to the forest.',
      'Enduring 14 years of separation with prayers and dignity.',
      'Welcoming Rama and Sita back to Ayodhya.'
    ],
    traits: ['Patience', 'Devotion', 'Dignity', 'Kindness'],
    symbolicMeaning: 'Kausalya represents the silent strength of motherhood and devotion.',
    relationships: [
      { name: 'Rama', relation: 'Son' },
      { name: 'Dasharatha', relation: 'Husband' }
    ],
    lifeLessons: [
      'Patience is a virtue in the face of loss.',
      'Motherly love is unconditional.',
      'Dignity is maintained through faith.'
    ]
  },
  {
    slug: 'sumitra',
    name: 'Queen Sumitra',
    category: 'royal',
    title: 'The Wise Mother',
    oneLineDescription: 'The mother of Lakshmana and Shatrughna, known for her wisdom and detachment.',
    imageUrl: 'https://i.pinimg.com/736x/be/c3/72/bec372db28c2c8776b121a6a64365f5c.jpg',
    imageHint: 'queen sumitra',
    bio: 'Sumitra is perhaps the wisest of Dasharatha’s queens, possessing a deep understanding of Rama’s divinity.',
    role: 'She encourages Lakshmana to serve Rama, viewing his service as his highest duty.',
    keyEvents: [
      'The birth of the twins Lakshmana and Shatrughna.',
      'Instructing Lakshmana to treat Rama as his father Dasharatha.',
      'Supporting Kausalya during the long years of exile.',
      'Maintaining peace in the royal household.'
    ],
    traits: ['Wisdom', 'Detachment', 'Insight', 'Selflessness'],
    symbolicMeaning: 'Sumitra represents the wisdom that recognizes and serves the Divine.',
    relationships: [
      { name: 'Lakshmana', relation: 'Son' },
      { name: 'Shatrughna', relation: 'Son' }
    ],
    lifeLessons: [
      'Wisdom lies in understanding one’s true purpose.',
      'Service to the Divine is the highest calling.',
      'Detachment leads to true peace.'
    ]
  },
  {
    slug: 'janaka',
    name: 'King Janaka',
    category: 'royal',
    title: 'The Philosopher King',
    oneLineDescription: 'The father of Sita and a master of spiritual knowledge and detachment.',
    imageUrl: 'https://i.pinimg.com/736x/8d/92/18/8d9218aed901c7d4fabec54aac448b98.jpg',
    imageHint: 'king janaka',
    bio: 'Janaka, the king of Mithila, was a Rajarishi—a king who was also a sage.',
    role: 'He discovered Sita while plowing the earth and organized the Swayamvara that united Rama and Sita.',
    keyEvents: [
      'Finding baby Sita in a furrow of the earth.',
      'Hosting the great Swayamvara of the Shiva Dhanush.',
      'Imparting spiritual wisdom to many seekers.',
      'Upholding Dharma in Mithila.'
    ],
    traits: ['Spiritual Wisdom', 'Detachment', 'Piety', 'Justness'],
    symbolicMeaning: 'Janaka represents the ideal of being in the world but not of it.',
    relationships: [
      { name: 'Sita', relation: 'Daughter' },
      { name: 'Rama', relation: 'Son-in-law' }
    ],
    lifeLessons: [
      'One can achieve spiritual perfection while performing worldly duties.',
      'Detachment is an internal state of mind.',
      'The Earth provides for the righteous.'
    ]
  },

  // --- SAGES & GUIDES ---
  {
    slug: 'vishwamitra',
    name: 'Sage Vishwamitra',
    category: 'sages',
    title: 'The Mentor of Kings',
    oneLineDescription: 'A former king who became a great sage and guided Rama in his youth.',
    imageUrl: 'https://i.pinimg.com/1200x/ce/12/61/ce12615d7b2ff8ea2b6ab9f7a30e5e81.jpg',
    imageHint: 'sage vishwamitra',
    bio: 'One of the most revered sages, he transformed from a powerful king into a Brahmarishi through intense austerity.',
    role: 'He guided young Rama and Lakshmana, imparting celestial weapons and leading them to Mithila.',
    keyEvents: [
      'Challenging Vashistha and eventually seeking spiritual growth.',
      'Taking Rama to slay Tataka and protect his yajnas.',
      'Imparting the knowledge of Bala and Atibala.',
      'Taking Rama to Mithila to break the divine bow.'
    ],
    traits: ['Willpower', 'Austerity', 'Visionary', 'Strictness'],
    symbolicMeaning: 'Vishwamitra symbolizes the transformation of physical power into spiritual authority.',
    relationships: [
      { name: 'Rama', relation: 'Disciple' },
      { name: 'Dasharatha', relation: 'Friend' }
    ],
    lifeLessons: [
      'Spiritual evolution is a path of trials.',
      'The purpose of power is protection.',
      'A true mentor prepares you for destiny.'
    ]
  },
  {
    slug: 'vashistha',
    name: 'Sage Vashistha',
    category: 'sages',
    title: 'The Royal Guru',
    oneLineDescription: 'The hereditary priest of the Ikshvaku dynasty and teacher of the four princes.',
    imageUrl: 'https://i.pinimg.com/736x/4b/81/f1/4b81f182c6086be0e14bcfe3d1777acb.jpg',
    imageHint: 'sage vashistha',
    bio: 'A mind-born son of Brahma, Vashistha represents the stable spiritual foundation of Ayodhya.',
    role: 'He educated the four princes and provided counsel to King Dasharatha and later Bharata during the crisis.',
    keyEvents: [
      'Imparting the Yoga Vashistha to Rama.',
      'Educating the princes in Dharma and Statecraft.',
      'Counseling Ayodhya after Dasharatha’s death.',
      'Conducting the coronation of Lord Rama.'
    ],
    traits: ['Equanimity', 'Knowledge', 'Stability', 'Devotion'],
    symbolicMeaning: 'Vashistha symbolizes the eternal, unchanging truth of the self.',
    relationships: [
      { name: 'Rama', relation: 'Disciple' },
      { name: 'Dasharatha', relation: 'Counselor' }
    ],
    lifeLessons: [
      'Education should focus on character and wisdom.',
      'Stability of mind is the greatest asset of a ruler.',
      'Spiritual guidance is essential for a stable society.'
    ]
  },
  {
    slug: 'agastya',
    name: 'Sage Agastya',
    category: 'sages',
    title: 'The Sage of the South',
    oneLineDescription: 'The great sage who provided Rama with divine weapons and the Aditya Hridaya.',
    imageUrl: 'https://i.pinimg.com/736x/53/a0/b5/53a0b5f6460a9670c3a5b484bf8595c8.jpg',
    imageHint: 'sage agastya',
    bio: 'Agastya is a revered Vedic sage known for his immense spiritual power and presence in the South.',
    role: 'He welcomed Rama during the exile and gave him the divine bow of Vishnu and the secret of the Sun prayer.',
    keyEvents: [
      'Welcoming Rama to his hermitage in the Dandaka forest.',
      'Gifting Rama the bow of Lord Vishnu.',
      'Teaching Rama the Aditya Hridaya Stotra on the battlefield.',
      'Stabilizing the balance of the Earth during various celestial events.'
    ],
    traits: ['Vast Knowledge', 'Generosity', 'Spiritual Might', 'Guidance'],
    symbolicMeaning: 'Agastya symbolizes the spread of spiritual knowledge across geographical boundaries.',
    relationships: [
      { name: 'Rama', relation: 'Protector/Mentor' }
    ],
    lifeLessons: [
      'The Divine provides the tools needed for the battle.',
      'Persistence in prayer (Aditya Hridaya) grants victory.',
      'Knowledge should be used for the welfare of the world.'
    ]
  },
  {
    slug: 'narada',
    name: 'Sage Narada',
    category: 'sages',
    title: 'The Divine Messenger',
    oneLineDescription: 'The celestial sage who inspired Valmiki to write the story of Rama.',
    imageUrl: 'https://i.pinimg.com/1200x/d3/e3/66/d3e366cc702a3723701bf1317cd52a08.jpg',
    imageHint: 'sage narada',
    bio: 'Narada is a devotee of Vishnu who travels across the worlds singing the Lord’s praises.',
    role: 'He described the qualities of the ideal man to Valmiki, providing the blueprint for the Ramayana.',
    keyEvents: [
      'Narrating the story of Rama to Valmiki.',
      'Acting as a messenger between the gods and Rama.',
      'Singing the glories of Narayana throughout the universe.',
      'Guiding various characters towards their spiritual goals.'
    ],
    traits: ['Devotion', 'Eloquence', 'Omnipresence', 'Wisdom'],
    symbolicMeaning: 'Narada symbolizes the flow of information and devotion through the cosmos.',
    relationships: [
      { name: 'Vishnu', relation: 'Lord' },
      { name: 'Valmiki', relation: 'Inspiration' }
    ],
    lifeLessons: [
      'Storytelling is a divine tool for transformation.',
      'Devotion is best expressed through praise and song.',
      'Information should always lead to spiritual awakening.'
    ]
  },

  // --- VANARA ALLIES ---
  {
    slug: 'hanuman',
    name: 'Hanuman Ji',
    category: 'vanaras',
    title: 'The Ultimate Devotee',
    oneLineDescription: 'The vanara hero whose strength is matched only by his absolute devotion.',
    imageUrl: 'https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg',
    imageHint: 'hanuman majestic',
    bio: 'Son of the Wind God (Vayu), Hanuman is the bridge between the Divine and the Devotee.',
    role: 'He is the primary executor of Rama’s mission—locating Sita and saving Lakshmana.',
    keyEvents: [
      'The massive leap across the ocean to reach Lanka.',
      'Finding Sita and delivering Rama’s ring.',
      'Lifting the Dronagiri mountain for herbs.',
      'Becoming immortal to protect devotees.'
    ],
    traits: ['Bhakti', 'Intellect', 'Might', 'Humility'],
    symbolicMeaning: 'Hanuman symbolizes the mind controlled through devotion.',
    relationships: [
      { name: 'Rama', relation: 'Divine Master' },
      { name: 'Sita', relation: 'Mother' }
    ],
    lifeLessons: [
      'True power comes from selfless service.',
      'Impossible tasks are achievable through surrender.',
      'Wisdom and strength require humility.'
    ]
  },
  {
    slug: 'angada',
    name: 'Angada',
    category: 'vanaras',
    title: 'The Prince of Kishkindha',
    oneLineDescription: 'The valiant son of Vali who served as a powerful general in Rama’s army.',
    imageUrl: 'https://i.pinimg.com/736x/29/9e/0d/299e0d275aaca921600ac9f8e0f3f425.jpg',
    imageHint: 'monkey prince angada',
    bio: 'Angada is the son of Vali and Tara, known for his incredible strength and unwavering stance.',
    role: 'He served as an emissary to Ravana’s court and a fierce warrior in the battle of Lanka.',
    keyEvents: [
      'Standing immovable in Ravana’s court as a challenge.',
      'Leading one of the primary divisions of the Vanara army.',
      'Confronting powerful rakshasa warriors in the great war.',
      'Acknowledging Rama’s divinity despite his father’s fate.'
    ],
    traits: ['Valour', 'Stability', 'Duty', 'Discernment'],
    symbolicMeaning: 'Angada symbolizes the stability of a mind rooted in Dharma.',
    relationships: [
      { name: 'Vali', relation: 'Father' },
      { name: 'Sugriva', relation: 'Uncle' }
    ],
    lifeLessons: [
      'Dharma is higher than personal lineage.',
      'Courage is standing firm in the face of arrogance.',
      'Loyalty is proven through action, not words.'
    ]
  },
  {
    slug: 'sugriva',
    name: 'Sugriva',
    category: 'vanaras',
    title: 'The Allied King',
    oneLineDescription: 'The king of the Vanaras who pledged his entire kingdom to help Lord Rama.',
    imageUrl: 'https://i.pinimg.com/1200x/e7/1e/e8/e71ee8e9585c2fa21c93fe939eb34409.jpg',
    imageHint: 'sugriva monkey king',
    bio: 'Sugriva was the exiled brother of Vali who found a savior and friend in Lord Rama.',
    role: 'He mobilized the vast Vanara army and led the search for Mata Sita across all directions.',
    keyEvents: [
      'Forming the sacred alliance with Rama at the fire.',
      'Defeating Vali with Rama’s assistance.',
      'Sending the search parties to find Sita.',
      'Fighting as a primary general in the Lanka war.'
    ],
    traits: ['Friendship', 'Strategic Mind', 'Gratitude', 'Leadership'],
    symbolicMeaning: 'Sugriva represents the human capacity for transformation through spiritual alliance.',
    relationships: [
      { name: 'Rama', relation: 'Divine Friend' },
      { name: 'Hanuman', relation: 'Wise Counselor' }
    ],
    lifeLessons: [
      'A true friend helps you in your darkest hour.',
      'Gratitude should be followed by prompt action.',
      'Collective effort is required for divine missions.'
    ]
  },
  {
    slug: 'jambavan',
    name: 'Jambavan',
    category: 'vanaras',
    title: 'The Wise King of Bears',
    oneLineDescription: 'The ancient and immortal king who reminded Hanuman of his forgotten powers.',
    imageUrl: 'https://i.pinimg.com/736x/b4/c4/eb/b4c4eba1bb27f2cf9d1931fcb8ec6954.jpg',
    imageHint: 'bear king jambavan',
    bio: 'An immortal (Chiranjivi) who has existed since the churning of the ocean, representing time-tested wisdom.',
    role: 'He broke the curse on Hanuman’s memory, enabling the great leap to Lanka.',
    keyEvents: [
      'Reminding Hanuman of his divine strength.',
      'Advising Rama during the bridge construction.',
      'Fighting alongside the Vanaras with immense power.',
      'Living through the ages to guide Rama’s mission.'
    ],
    traits: ['Wisdom', 'Patience', 'Longevity', 'Encouragement'],
    symbolicMeaning: 'Jambavan symbolizes the wisdom of time and identifies latent potential.',
    relationships: [
      { name: 'Hanuman', relation: 'Mentee' },
      { name: 'Rama', relation: 'Lord' }
    ],
    lifeLessons: [
      'The greatest service is reminding others of their power.',
      'Age brings needed perspective.',
      'Patience is the foundation of strategy.'
    ]
  },
  {
    slug: 'nala-nila',
    name: 'Nala and Nila',
    category: 'vanaras',
    title: 'The Divine Architects',
    oneLineDescription: 'The monkey engineers who designed and built the Rama Setu bridge.',
    imageUrl: 'https://i.pinimg.com/736x/b5/d0/48/b5d048f423ade85a53ecdb1c4e343052.jpg',
    imageHint: 'monkey engineers',
    bio: 'Sons of Vishwakarma (the architect of gods), they possessed the divine skill of construction.',
    role: 'They engineered the stone bridge across the ocean, a feat previously thought impossible.',
    keyEvents: [
      'Designing the Rama Setu.',
      'Using the boon that stones they touched would float.',
      'Coordinating the massive labor of the Vanara army.',
      'Bridging the gap between the continent and the target.'
    ],
    traits: ['Skill', 'Ingenuity', 'Efficiency', 'Cooperation'],
    symbolicMeaning: 'They represent the use of technical skill in service of the Divine.',
    relationships: [
      { name: 'Rama', relation: 'Lord' },
      { name: 'Sugriva', relation: 'King' }
    ],
    lifeLessons: [
      'Every talent has a divine purpose.',
      'Innovation can solve seemingly impossible physical barriers.',
      'Teamwork bridges the greatest gaps.'
    ]
  },

  // --- LANKA & ANTAGONISTS ---
  {
    slug: 'ravana',
    name: 'Ravana',
    category: 'lanka',
    title: 'The Ten-Headed King',
    oneLineDescription: 'The powerful King of Lanka, a great scholar lost to the darkness of ego.',
    imageUrl: 'https://i.pinimg.com/736x/7a/81/66/7a81668dc963304019ca913a87bad62a.jpg',
    imageHint: 'ravana king',
    bio: 'A master of the Vedas and supreme devotee of Shiva, but lost to uncontrolable ego.',
    role: 'The primary antagonist, his abduction of Sita leads to his own annihilation.',
    keyEvents: [
      'Performing penance for invincibility.',
      'Abducting Sita through deception.',
      'Refusing the wise counsel of Vibhishana.',
      'Acknowledging Rama’s divinity at death.'
    ],
    traits: ['Intelligence', 'Ego', 'Arrogance', 'Persistence'],
    symbolicMeaning: 'Ravana symbolizes the ten senses and the ego that destroys character.',
    relationships: [
      { name: 'Vibhishana', relation: 'Brother' },
      { name: 'Mandodari', relation: 'Queen' }
    ],
    lifeLessons: [
      'Knowledge without character is dangerous.',
      'Ego is the greatest enemy.',
      'Ignoring wise counsel leads to destruction.'
    ]
  },
  {
    slug: 'vibhishana',
    name: 'Vibhishana',
    category: 'lanka',
    title: 'The Righteous Seeker',
    oneLineDescription: 'Ravana’s brother who chose Rama’s path over family loyalty.',
    imageUrl: 'https://i.pinimg.com/736x/98/1f/c1/981fc1ec2735cb1b61917dbc35969fe1.jpg',
    imageHint: 'vibhishana devotee',
    bio: 'A rakshasa by birth but a sage by nature, representing the voice of conscience.',
    role: 'He seeks refuge with Rama and provides vital intelligence to breach Lanka’s defenses.',
    keyEvents: [
      'Challenging Ravana’s unrighteous abduction of Sita.',
      'Surrendering at the feet of Rama.',
      'Assisting the Vanaras in the battle.',
      'Being crowned King of Lanka.'
    ],
    traits: ['Moral Courage', 'Discernment', 'Piety', 'Integrity'],
    symbolicMeaning: 'Vibhishana symbolizes the awakened conscience choosing Divine over attachment.',
    relationships: [
      { name: 'Ravana', relation: 'Brother' },
      { name: 'Rama', relation: 'Lord' }
    ],
    lifeLessons: [
      'Righteousness is superior to blood ties.',
      'Standing against family for Truth requires immense courage.',
      'Surrender ensures protection.'
    ]
  },
  {
    slug: 'kumbhakarna',
    name: 'Kumbhakarna',
    category: 'lanka',
    title: 'The Sleeping Giant',
    oneLineDescription: 'The massive brother of Ravana, known for his long sleep and immense appetite.',
    imageUrl: 'https://i.pinimg.com/736x/82/b9/8e/82b98e5def54987b6e383d769000235e.jpg',
    imageHint: 'giant kumbhakarna',
    bio: 'A giant warrior who slept for six months at a time due to a divine boon/curse.',
    role: 'A formidable warrior who fought for his brother despite knowing Ravana was wrong.',
    keyEvents: [
      'Waking up from his long slumber to find Lanka at war.',
      'Advising Ravana to return Sita, then deciding to fight out of loyalty.',
      'Causing massive destruction on the battlefield.',
      'Dying at the hands of Lord Rama after a valiant fight.'
    ],
    traits: ['Might', 'Misplaced Loyalty', 'Gluttony', 'Valour'],
    symbolicMeaning: 'Kumbhakarna symbolizes Tamas—the quality of inertia and ignorance.',
    relationships: [
      { name: 'Ravana', relation: 'Brother' }
    ],
    lifeLessons: [
      'Loyalty to a wrong cause leads to personal tragedy.',
      'Great strength without discernment is futile.',
      'Inertia (Tamas) prevents one from choosing the right path.'
    ]
  },
  {
    slug: 'indrajit',
    name: 'Indrajit (Meghnad)',
    category: 'lanka',
    title: 'The Conqueror of Indra',
    oneLineDescription: 'Ravana’s son, a master of illusion and celestial weapons.',
    imageUrl: 'https://i.pinimg.com/1200x/b6/e2/4f/b6e24f7b22e81d08995cd68ee33aa7dc.jpg',
    imageHint: 'warrior meghnad',
    bio: 'The most powerful warrior of Lanka, he earned his name by defeating the King of Gods, Indra.',
    role: 'He fought from the clouds using sorcery and twice immobilized the divine army.',
    keyEvents: [
      'Defeating Indra and earning the title Indrajit.',
      'Binding Rama and Lakshmana with Nagapasha.',
      'Creating the illusion of Sita’s death.',
      'Dying at the hands of Lakshmana.'
    ],
    traits: ['Genius', 'Mastery of Sorcery', 'Arrogance', 'Fearlessness'],
    symbolicMeaning: 'Indrajit symbolizes the deceptive power of the senses and illusions.',
    relationships: [
      { name: 'Ravana', relation: 'Father' },
      { name: 'Lakshmana', relation: 'Rival' }
    ],
    lifeLessons: [
      'Deception provides only temporary victory.',
      'Unchecked power leads to downfall.',
      'Honor is required for lasting success.'
    ]
  },
  {
    slug: 'shurpanakha',
    name: 'Shurpanakha',
    category: 'lanka',
    title: 'The Catalyst of Conflict',
    oneLineDescription: 'Ravana’s sister whose desire for Rama led to the events of the epic.',
    imageUrl: 'https://i.pinimg.com/1200x/11/68/25/116825be8005e5f5808dac79c9d3c788.jpg',
    imageHint: 'shurpanakha demoness',
    bio: 'A rakshasi who encountered Rama in the forest, her mutilation by Lakshmana triggered Ravana’s revenge.',
    role: 'She acts as the primary instigator who lures Ravana into the abduction of Sita.',
    keyEvents: [
      'Attempting to seduce Rama and Lakshmana.',
      'Being mutilated by Lakshmana for attacking Sita.',
      'Inciting Ravana to take revenge on the princes.',
      'Describing Sita’s beauty to inflame Ravana’s desire.'
    ],
    traits: ['Lust', 'Vengeance', 'Cunning', 'Volatility'],
    symbolicMeaning: 'Shurpanakha represents the uncontrolled desires that lead to conflict.',
    relationships: [
      { name: 'Ravana', relation: 'Brother' },
      { name: 'Khara', relation: 'Brother' }
    ],
    lifeLessons: [
      'Lust and anger lead to self-harm.',
      'The consequences of small actions can be cosmic.',
      'Revenge is a self-consuming fire.'
    ]
  },
  {
    slug: 'maricha',
    name: 'Maricha',
    category: 'lanka',
    title: 'The Golden Deer',
    oneLineDescription: 'The demon who used his shapeshifting powers to distract Rama.',
    imageUrl: 'https://i.pinimg.com/736x/35/01/50/350150715c0b305029391115f102beef.jpg',
    imageHint: 'golden deer maricha',
    bio: 'A powerful demon who initially feared Rama but was forced by Ravana to assist in the abduction.',
    role: 'He took the form of an irresistible golden deer to draw Rama away from the hermitage.',
    keyEvents: [
      'Being thrown into the ocean by Rama’s early arrow.',
      'Becoming an ascetic out of fear of Rama.',
      'Shapeshifting into the Golden Deer.',
      'Attaining death in the hands of the Divine.'
    ],
    traits: ['Shapeshifting', 'Fear', 'Deception', 'Insight'],
    symbolicMeaning: 'Maricha represents the distractions of the material world (Maya).',
    relationships: [
      { name: 'Ravana', relation: 'King/Tyrant' }
    ],
    lifeLessons: [
      'Appearance can be deceptive.',
      'The mind is easily distracted by illusory beauty.',
      'It is better to die in the hands of the Divine than live under a tyrant.'
    ]
  },
  {
    slug: 'trijata',
    name: 'Trijata',
    category: 'lanka',
    title: 'The Compassionate Guardian',
    oneLineDescription: 'The rakshasi who befriended and protected Sita in the Ashoka Vatika.',
    imageUrl: 'https://i.pinimg.com/736x/2f/18/45/2f18456cbdbf161d8f382a207eff4b70.jpg',
    imageHint: 'trijata demoness',
    bio: 'A wise and kind-hearted rakshasi assigned to guard Sita.',
    role: 'She protected Sita from the taunts of other demons and accurately predicted Rama’s victory.',
    keyEvents: [
      'Having a prophetic dream of Rama’s victory.',
      'Consoling Sita during her darkest hours.',
      'Preventing other rakshasis from harming Sita.',
      'Being honored by Sita after the war.'
    ],
    traits: ['Compassion', 'Wisdom', 'Insight', 'Kindness'],
    symbolicMeaning: 'Trijata represents the presence of goodness even in dark surroundings.',
    relationships: [
      { name: 'Sita', relation: 'Protege/Friend' },
      { name: 'Vibhishana', relation: 'Relative (in some texts)' }
    ],
    lifeLessons: [
      'Goodness exists everywhere.',
      'Kindness to the suffering is a divine act.',
      'Prophetic wisdom comes to those with a pure heart.'
    ]
  },

  // --- OTHERS & HEROES ---
  {
    slug: 'jatayu',
    name: 'Jatayu',
    category: 'others',
    title: 'The Heroic Guardian',
    oneLineDescription: 'The ancient vulture king who sacrificed his life to save Mata Sita.',
    imageUrl: 'https://i.pinimg.com/1200x/85/be/bf/85bebfd7a9a6603dd946156093eccaa5.jpg',
    imageHint: 'jatayu bird hero',
    bio: 'A noble bird who lived in the Dandaka forest and was a friend of King Dasharatha.',
    role: 'He is the first martyr, sacrificing his life trying to stop Ravana from abducting Sita.',
    keyEvents: [
      'Challenging Ravana in mid-air.',
      'Fighting until his wings were clipped.',
      'Holding onto life to inform Rama of Sita’s direction.',
      'Attaining Moksha in Rama’s hands.'
    ],
    traits: ['Self-Sacrifice', 'Bravery', 'Duty', 'Compassion'],
    symbolicMeaning: 'Jatayu symbolizes honor found in a losing battle for the right cause.',
    relationships: [
      { name: 'Rama', relation: 'Lord' }
    ],
    lifeLessons: [
      'Success is measured by intent, not just outcome.',
      'Even the small can perform heroic acts.',
      'Divine honors those who protect others.'
    ]
  },
  {
    slug: 'sampati',
    name: 'Sampati',
    category: 'others',
    title: 'The Far-Sighted Witness',
    oneLineDescription: 'The giant vulture who provided the Vanaras with the location of Sita.',
    imageUrl: 'https://i.pinimg.com/736x/13/56/b3/1356b3bc84be99a8ddd44a4261e66f3e.jpg',
    imageHint: 'giant vulture sampati',
    bio: 'The elder brother of Jatayu, he lost his wings protecting his brother from the sun.',
    role: 'He used his divine vision to see Sita in Lanka, giving the Vanaras their first clear direction.',
    keyEvents: [
      'Sacrificing his wings to shield Jatayu.',
      'Meeting the Vanara search party on the southern coast.',
      'Using his vision to confirm Sita’s location in Lanka.',
      'Regaining his wings through the service of Rama.'
    ],
    traits: ['Vision', 'Sacrifice', 'Truth', 'Resilience'],
    symbolicMeaning: 'Sampati symbolizes the restoration of power through selfless service.',
    relationships: [
      { name: 'Jatayu', relation: 'Brother' }
    ],
    lifeLessons: [
      'Past sacrifices are rewarded in due time.',
      'Vision is a tool for guiding others.',
      'Information is the first step toward victory.'
    ]
  },
  {
    slug: 'lava-kusha',
    name: 'Lava and Kusha',
    category: 'others',
    title: 'Princes of the Ashrama',
    oneLineDescription: 'Rama and Sita’s twin sons, trained by Valmiki in war and poetry.',
    imageUrl: 'https://i.pinimg.com/1200x/cc/8c/32/cc8c321f10d12ca38366a2978fd7ac4d.jpg',
    imageHint: 'young twin princes',
    bio: 'Born in Valmiki’s ashrama during Sita’s second exile.',
    role: 'The first reciters of the Ramayana and heirs who finally reunited the family.',
    keyEvents: [
      'Capturing the Ashwamedha horse.',
      'Defeating the army of Ayodhya.',
      'Reciting the Ramayana in Rama’s court.',
      'Being recognized by Rama as his sons.'
    ],
    traits: ['Valour', 'Artistic Excellence', 'Dignity', 'Purity'],
    symbolicMeaning: 'They symbolize the transmission of divine legacy through story.',
    relationships: [
      { name: 'Sita', relation: 'Mother' },
      { name: 'Rama', relation: 'Father' },
      { name: 'Valmiki', relation: 'Guru' }
    ],
    lifeLessons: [
      'True education balances art and warfare.',
      'Lineage should be learned with pride.',
      'The next generation guards the legacy.'
    ]
  }
];
