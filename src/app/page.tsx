
import Image from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Shield, BookOpen, ArrowRight, Award, Wind, Users, Footprints, CalendarDays } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  title: 'Hanuman Leela: Portal to Divine Strength, Devotion & Wisdom of Sri Hanuman',
  description: 'Embark on a spiritual journey with Hanuman Leela. Discover the life, teachings, mantras, and epic tales of Lord Hanuman (Bajrangbali). Explore Ramayana, Ashta Siddhis, and more.',
  keywords: ['Hanuman', 'Bajrangbali', 'Hindu God', 'Devotion', 'Strength', 'Wisdom', 'Ramayana', 'Spiritual Portal', 'Hanuman Leela Home', 'Sri Hanuman', 'Teachings', 'Mantras', 'Epics', 'Ashta Siddhis', 'Panchamukhi Hanuman'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hanuman Leela: Portal to Divine Strength, Devotion & Wisdom of Sri Hanuman',
    description: 'Embark on a spiritual journey with Hanuman Leela. Discover the life, teachings, mantras, and epic tales of Lord Hanuman (Bajrangbali).',
    url: `${SITE_URL}/`,
    images: [
      {
        url: 'https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg',
        width: 736,
        height: 920, 
        alt: 'Lord Hanuman - Embodiment of Devotion',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanuman Leela: Portal to Divine Strength, Devotion & Wisdom of Sri Hanuman',
    description: 'Embark on a spiritual journey with Hanuman Leela. Discover the life, teachings, mantras, and epic tales of Lord Hanuman (Bajrangbali).',
    images: ['https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg'],
  },
};


// Helper components for the Key Facts section
interface DetailCategoryProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const DetailCategory: React.FC<DetailCategoryProps> = ({ title, icon, children }) => (
  <div className="border-b border-border/50 pb-6 last:border-b-0 last:pb-0">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-3 text-2xl font-semibold text-secondary-foreground">{title}</h3>
    </div>
    <ul className="space-y-3 pl-2 text-base">
      {children}
    </ul>
  </div>
);

interface DetailItemProps {
  label: string;
  children: ReactNode; // For the value
}

const DetailItem: React.FC<DetailItemProps> = ({ label, children }) => (
  <li className="flex flex-col sm:flex-row sm:items-start">
    <span className="font-semibold text-primary w-full sm:w-2/5 md:w-1/3 shrink-0">{label}:</span>
    <span className="text-foreground/80 mt-1 sm:mt-0">{children}</span>
  </li>
);


export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start order-last md:order-first">
              <Image 
                src="https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg" 
                alt="Lord Hanuman in a majestic and serene pose" 
                width={400} 
                height={500} 
                className="rounded-xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105"
                data-ai-hint="hanuman majestic serene"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-primary drop-shadow-sm">
                Sri Hanuman: Embodiment of Devotion
              </h1>
              <p className="mt-6 text-xl text-foreground/80 leading-relaxed">
                Discover the divine strength, unwavering devotion, profound wisdom, and absolute fearlessness of Bajrangbali.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="shadow-lg">
                  <Link href="/journey">Explore His Journey <Footprints className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="shadow-lg border-primary text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="/mantras">Chant His Praises</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts about Hanuman Section */}
      <section>
        <PageHeader 
          title="Key Facts about Hanuman"
          description="A concise overview of Lord Hanuman's divine attributes, lineage, and significance."
        />
        <div className="bg-card p-6 sm:p-8 rounded-xl shadow-xl space-y-8 max-w-4xl mx-auto">
          <DetailCategory title="Titles & Essence" icon={<Award className="h-7 w-7 text-primary" />}>
            <DetailItem label="Known As">God of Wisdom, Strength, Courage, Devotion, and Self-Discipline</DetailItem>
            <DetailItem label="Status">Member of Chiranjivi (Immortals)</DetailItem>
          </DetailCategory>

          <DetailCategory title="Affiliations & Abode" icon={<Wind className="h-7 w-7 text-primary" />}>
            <DetailItem label="Devotion">Rama devotee</DetailItem>
            <DetailItem label="Primary Affiliations">Deva, Chiranjivi, Vanara</DetailItem>
            <DetailItem label="Divine Aspects">Avatar of Shiva (Shaivism), Son and Avatar of Vayu (Vaishnavism)</DetailItem>
            <DetailItem label="Abode">Kishkindha</DetailItem>
          </DetailCategory>

          <DetailCategory title="Worship & Significance" icon={<BookOpen className="h-7 w-7 text-primary" />}>
            <DetailItem label="Mantra">Oṁ Śrī Hanumate Namaḥ</DetailItem>
            <DetailItem label="Weapon">Gada (mace)</DetailItem>
            <DetailItem label="Auspicious Days">Saturday, Tuesday</DetailItem>
            <DetailItem label="Sacred Texts">Ramayana and its other versions, Hanuman Chalisa</DetailItem>
            <DetailItem label="Festivals">Hanuman Jayanti, Diwali</DetailItem>
          </DetailCategory>

          <DetailCategory title="Genealogy" icon={<Users className="h-7 w-7 text-primary" />}>
            <DetailItem label="Spiritual Father">Vayu (God of Wind)</DetailItem>
            <DetailItem label="Parents">Kesari (father) & Añjanā (mother)</DetailItem>
            <DetailItem label="Siblings">Matiman, Shrutiman, Ketuman, Gatiman, and Dhritiman (brothers)</DetailItem>
          </DetailCategory>
        </div>
      </section>

      {/* Who is Hanuman? */}
      <section>
        <PageHeader 
          title="The Divine Maruti" 
          description="Hanumanji, the son of Vayu (the Wind God) and Anjana, is a central figure in the epic Ramayana. His life is a testament to selfless service, immense power, and boundless devotion to Lord Rama."
        />
        <div className="grid md:grid-cols-2 gap-8 items-start"> 
          <DevotionalCard
            title="Divine Origin & Unwavering Bhakti"
            imageUrl="https://i.pinimg.com/736x/a5/39/b6/a539b6f6407d914e7e167cd4f4922b3d.jpg"
            imageHint="hanuman praying serene"
            className="flex flex-col" 
            contentClassName="flex-grow" 
            content={
              <div className="space-y-4 text-foreground/90">
                <p>Born with extraordinary abilities, Hanuman chose the path of Bhakti Yoga, dedicating his entire being to Lord Rama. His devotion is unparalleled, serving as an eternal inspiration for seekers of truth and righteousness.</p>
                <p>He is revered for his humility despite his immense strength, his wisdom despite his playful nature as a child, and his ability to overcome any obstacle in service of the divine.</p>
              </div>
            }
          />
          <div className="space-y-6 p-6 bg-card rounded-lg shadow-lg h-full"> 
            <h3 className="text-2xl font-semibold text-primary">Key Attributes:</h3>
            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start"><Heart className="h-6 w-6 mr-3 text-accent flex-shrink-0 mt-1" /> <span><strong>Unmatched Devotion (Bhakti):</strong> Absolute dedication to Lord Rama, Sita, and Lakshman.</span></li>
              <li className="flex items-start"><Shield className="h-6 w-6 mr-3 text-accent flex-shrink-0 mt-1" /> <span><strong>Immense Strength (Shakti):</strong> Capable of altering his form, leaping oceans, and lifting mountains.</span></li>
              <li className="flex items-start"><BookOpen className="h-6 w-6 mr-3 text-accent flex-shrink-0 mt-1" /> <span><strong>Profound Wisdom (Jnana):</strong> Master of Vedas and scriptures, a guiding light of knowledge.</span></li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Devotion to Sri Ram, Sita, Lakshman */}
      <section className="bg-muted py-12 rounded-lg">
        <PageHeader 
          title="In Service of the Divine Trio"
          description="Hanuman's life revolves around his selfless service to Lord Rama, Mata Sita, and Lakshmana. His loyalty and dedication are legendary."
        />
        <div className="grid md:grid-cols-3 gap-8">
          <DevotionalCard 
            title="Lord Rama" 
            imageUrl="https://i.pinimg.com/736x/4a/f7/13/4af713e69a8854277674f6771d5d9d3d.jpg"
            imageHint="rama deity hindu"
            description="Hanuman's devotion to Rama is the cornerstone of his existence. He sees Rama as the Supreme Being and his master." 
          />
          <DevotionalCard 
            title="Mata Sita" 
            imageUrl="https://i.pinimg.com/736x/bf/34/22/bf342252129d5486858a9494b7be0cfe.jpg"
            imageHint="sita deity hindu"
            description="Hanuman reveres Sita as the Divine Mother. His search for her in Lanka is a testament to his courage and love." 
          />
          <DevotionalCard 
            title="Lakshmana" 
            imageUrl="https://i.pinimg.com/736x/b0/96/4e/b0964edf04cc481feb90c2c170494cc0.jpg"
            imageHint="lakshman deity hindu"
            description="Hanuman shares a deep bond of respect and camaraderie with Lakshmana, Rama's devoted brother." 
          />
        </div>
      </section>

      {/* Explore Events Section */}
      <section className="py-12 bg-muted/70 rounded-xl shadow-lg">
        <PageHeader
          title="Sacred Events & Festivals"
          description="Discover significant observances dedicated to Lord Hanuman and immerse yourself in divine celebrations."
        />
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <DevotionalCard
            title="Journey Through Divine Celebrations"
            className="bg-card shadow-xl border border-primary/30"
            contentClassName="p-8"
            content={
              <div className="space-y-6 text-center">
                <div className="flex justify-center">
                  <CalendarDays className="h-16 w-16 text-primary" />
                </div>
                <p className="text-lg text-foreground/85 leading-relaxed">
                  Our Events page offers a gateway to understanding the rich traditions and auspicious occasions associated with Lord Hanuman. Explore upcoming festivals, learn about their significance, and find inspiration for your devotional practices.
                </p>
              </div>
            }
            actions={
              <div className="mt-6 flex justify-center">
                <Button asChild size="lg" className="shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/events">
                    Explore All Events <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
}
