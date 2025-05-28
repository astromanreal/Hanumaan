
// src/app/panchamukhi-hanuman/page.tsx
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
// Removed Metadata import

const panchamukhiData = {
  name: "Panchamukhi Hanuman",
  meaning: "Five-Faced Hanuman",
  origin: "Panchamukhi Hanuman form is mentioned in the Ramayana (especially in later Puranic and Tantric texts like the Hanuman Samhita and various Agamas).",
  symbolism: "Represents Hanuman’s supreme power and his ability to overcome complex and multidimensional evils. Each face symbolizes protection from different directions and aspects of cosmic balance.",
  purpose: "Panchamukhi Hanuman manifested to defeat the demon Mahiravana and save Rama and Lakshmana from the underworld (Patala). Each face has its own significance and power.",
  faces: [
    {
      name: "Sri Hanuman (East Face)",
      direction: "East",
      deity: "Self (Hanuman)",
      description: "This is the original face and represents courage, strength, and victory. It grants purity of mind and protection from negative energies.",
      power: "Removes fear, grants protection and physical strength."
    },
    {
      name: "Sri Narasimha (South Face)",
      direction: "South",
      deity: "Lord Narasimha (incarnation of Vishnu)",
      description: "Symbol of fierce protection and destruction of evil. Known to ward off evil spirits, demonic forces, and black magic.",
      power: "Protects against powerful enemies, removes negativity and fear."
    },
    {
      name: "Sri Garuda (West Face)",
      direction: "West",
      deity: "Garuda (mount of Vishnu)",
      description: "Symbolizes speed, strength, and protection from poisons and snakebites.",
      power: "Guards against snake venom, poisons, and harmful influences."
    },
    {
      name: "Sri Varaha (North Face)",
      direction: "North",
      deity: "Varaha (boar form of Vishnu)",
      description: "Symbol of upliftment and resurrection. Protects Earth and dharma.",
      power: "Destroys negative energies, uplifts consciousness, and removes obstacles from the material world."
    },
    {
      name: "Sri Hayagriva (Upward Face)",
      direction: "Skyward (Upward)",
      deity: "Hayagriva (horse-headed avatar of Vishnu)",
      description: "Represents wisdom, knowledge, and spiritual illumination.",
      power: "Grants divine wisdom, sharp intellect, and mastery over scriptures."
    }
  ],
  weapons: [
    "Trishula (trident)",
    "Parashu (axe)",
    "Khadga (sword)",
    "Gada (mace)",
    "Kumbha (pot of nectar)",
    "Bow and arrow",
    "Shield"
  ],
  mantra: {
    sanskrit: "ॐ पंचमुख हनुमते रक्ष रक्ष ॐ नमः",
    meaning: "Om, five-faced Hanuman, protect me, protect me. Salutations to you."
  },
  iconography: {
    features: "Panchamukhi Hanuman is depicted with five faces in five directions and ten arms, each holding powerful weapons. His main (east-facing) face is that of Hanuman; others face south, west, north, and upward.",
    color: "Reddish-golden or saffron hue, representing divine energy and valor."
  },
  spiritualSignificance: "Devotion to Panchamukhi Hanuman protects against spiritual enemies, grants clarity of thought, fearlessness, physical and metaphysical strength, and mastery over lower instincts.",
  associatedTemples: [
    "Panchamukhi Hanuman Temple, Rameswaram (Tamil Nadu)",
    "Karahal Hanuman Temple, Madhya Pradesh",
    "Panchmukhi Hanuman Mandir, Hyderabad",
    "Panchamukhi Anjaneya Temple, Mantralayam"
  ],
  scripturalReferences: [
    "Hanumat Kavacham",
    "Hanuman Samhita",
    "Agama texts",
    "Tara Tantra and Rudrayamala Tantra (for Tantric significance)"
  ]
};

// Helper component for sections
const SectionCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <Card className={cn("shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden", className)}>
    <CardHeader>
      <CardTitle className="text-2xl text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-foreground/90">
      {children}
    </CardContent>
  </Card>
);

// Helper component for key-value pairs
const InfoItem: React.FC<{ label: string; value: string | React.ReactNode }> = ({ label, value }) => (
  <div>
    <h3 className="font-semibold text-lg text-secondary-foreground mb-1">{label}</h3>
    {typeof value === 'string' ? <p className="text-foreground/85 leading-relaxed">{value}</p> : <div className="text-foreground/85 leading-relaxed">{value}</div>}
  </div>
);

// Helper component for lists
const InfoList: React.FC<{ label: string; items: string[]; ordered?: boolean }> = ({ label, items, ordered = false }) => (
  <div>
    <h3 className="font-semibold text-lg text-secondary-foreground mb-2">{label}</h3>
    {ordered ? (
      <ol className="list-decimal list-inside pl-4 space-y-1 text-foreground/85">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    ) : (
      <ul className="list-disc list-inside pl-4 space-y-1 text-foreground/85">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    )}
  </div>
);


export default function PanchamukhiHanumanPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title={panchamukhiData.name}
        description="Explore the profound symbolism of the Five-Faced Hanuman, where each divine aspect offers unique protection and blessings."
      />

      {/* Hero Image Section */}
      <div className="my-8 flex justify-center">
        <div className="w-full max-w-[90%] md:max-w-[736px] rounded-xl overflow-hidden shadow-2xl"> {/* Adjusted width constraints */}
          <Image
            src="https://i.pinimg.com/736x/1f/92/14/1f9214b8cbf36cc1a96d0127ce01ec65.jpg"
            alt="Panchamukhi Hanuman with five divine faces"
            width={736} 
            height={1104} // Original height, aspect ratio will be maintained
            className="w-full h-auto transition-transform duration-500 hover:scale-105" // h-auto to maintain aspect ratio
            data-ai-hint="panchamukhi hanuman deity"
            priority
          />
        </div>
      </div>

      <SectionCard title="Core Aspects">
        <InfoItem label="Meaning" value={panchamukhiData.meaning} />
        <InfoItem label="Origin" value={panchamukhiData.origin} />
        <InfoItem label="Symbolism" value={panchamukhiData.symbolism} />
        <InfoItem label="Purpose of Manifestation" value={panchamukhiData.purpose} />
      </SectionCard>

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">The Five Divine Faces</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {panchamukhiData.faces.map((face, index) => (
            <Card key={index} className="bg-background/50 p-6 rounded-lg shadow-lg border border-border/50">
              <CardHeader className="p-0 pb-3 mb-3 border-b border-border/30">
                <CardTitle className="text-xl font-semibold text-accent">{face.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <InfoItem label="Direction" value={face.direction} />
                <InfoItem label="Presiding Deity Aspect" value={face.deity} />
                <InfoItem label="Description" value={face.description} />
                <InfoItem label="Power / Benefit" value={face.power} />
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
      
      <SectionCard title="Divine Armaments">
        <InfoList label="Weapons Held by Panchamukhi Hanuman" items={panchamukhiData.weapons} />
      </SectionCard>

      <SectionCard title="Sacred Mantra">
        <InfoItem 
          label="Sanskrit" 
          value={
            <pre className="whitespace-pre-wrap font-serif text-lg bg-muted/50 p-3 rounded-md shadow-inner text-center">
              {panchamukhiData.mantra.sanskrit}
            </pre>
          } 
        />
        <InfoItem label="Meaning" value={panchamukhiData.mantra.meaning} />
      </SectionCard>

      <SectionCard title="Iconography">
        <InfoItem label="Key Features" value={panchamukhiData.iconography.features} />
        <InfoItem label="Symbolic Color" value={panchamukhiData.iconography.color} />
      </SectionCard>

      <SectionCard title="Spiritual Significance">
        <p className="text-foreground/85 leading-relaxed">{panchamukhiData.spiritualSignificance}</p>
      </SectionCard>

      <SectionCard title="Prominent Temples">
        <InfoList label="Some Temples Dedicated to Panchamukhi Hanuman" items={panchamukhiData.associatedTemples} />
      </SectionCard>

      <SectionCard title="Scriptural References">
        <InfoList label="Key Texts Mentioning Panchamukhi Hanuman" items={panchamukhiData.scripturalReferences} />
      </SectionCard>

    </div>
  );
}
