import Image from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Heart, Shield, BookOpen, ArrowRight, Award, 
  Wind, Users, Footprints, CalendarDays, 
  Sparkles, LayoutDashboard, Compass
} from 'lucide-react';
import type { ReactNode } from 'react';
import { charactersData } from '@/data/characters-data';
import { ramayanaKandas } from '@/data/epics-data';

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
  children: ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, children }) => (
  <li className="flex flex-col sm:flex-row sm:items-start">
    <span className="font-semibold text-primary w-full sm:w-2/5 md:w-1/3 shrink-0">{label}:</span>
    <span className="text-foreground/80 mt-1 sm:mt-0">{children}</span>
  </li>
);

export default function HomePage() {
  // Take a few featured characters for the home page
  const featuredCharacters = charactersData.slice(0, 4);
  const featuredKandas = ramayanaKandas.slice(4, 6); // Sundara and Yuddha

  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-[0.2em]">
                <Sparkles className="h-4 w-4" /> The Eternal Portal
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter leading-[1.1]">
                Sri Hanuman: <br />
                <span className="text-foreground">Embodiment of Devotion</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Explore the divine strength, unwavering loyalty, and profound wisdom of Bajrangbali through the sacred lens of the Ramayana.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="h-14 px-8 rounded-full shadow-xl shadow-primary/20 group">
                  <Link href="/journey" className="flex items-center gap-2">
                    Trace His Journey <Footprints className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full border-primary/20 hover:bg-primary/5">
                  <Link href="/feed">Enter Divine Feed</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-background">
                <Image 
                  src="https://i.pinimg.com/736x/f4/e8/fa/f4e8fae530b706b64d5904b4356eb5ce.jpg" 
                  alt="Lord Hanuman - Portal of Devotion" 
                  fill
                  className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  priority
                  data-ai-hint="hanuman majestic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights Teaser (Linking to Feed) */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Divine Insights</h2>
            <p className="text-muted-foreground italic">A modern stream of wisdom from the ancient scrolls.</p>
          </div>
          <Button asChild variant="link" className="text-primary font-bold uppercase tracking-widest text-xs group">
            <Link href="/feed" className="flex items-center gap-2">
              View Spiritual Feed <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DevotionalCard 
            title="The Leap of Faith"
            description="Sundara Kanda"
            content="Explore Hanuman's epic crossing of the ocean, a symbol of transcending limitations through Bhakti."
            className="bg-primary/5 border-primary/10"
            actions={<Button variant="ghost" asChild className="text-primary"><Link href="/ramayana/sundara-kanda">Explore Kanda</Link></Button>}
          />
          <DevotionalCard 
            title="The Path of Dharma"
            description="Character Spotlight"
            content="Understand how Lord Rama maintains perfect equanimity even in the face of sudden exile."
            className="bg-accent/5 border-accent/10"
            actions={<Button variant="ghost" asChild className="text-accent"><Link href="/characters/rama">View Profile</Link></Button>}
          />
          <DevotionalCard 
            title="Sacred Protection"
            description="Hanuman Chalisa"
            content="Immerse in the forty verses of Tulsidas, a shield against all worldly fears and afflictions."
            className="bg-primary/5 border-primary/10"
            actions={<Button variant="ghost" asChild className="text-primary"><Link href="/mantras/hanuman-chalisa">Chant Now</Link></Button>}
          />
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="bg-muted/30 py-24 -mx-4 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">The Essence of Bajrangbali</h2>
            <p className="text-muted-foreground font-light">A concise overview of Lord Hanuman's divine lineage and significance.</p>
          </div>
          
          <div className="bg-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-12 border border-border/50">
            <DetailCategory title="Titles & Essence" icon={<Award className="h-8 w-8 text-primary" />}>
              <DetailItem label="Known As">God of Wisdom, Strength, Courage, Devotion, and Self-Discipline</DetailItem>
              <DetailItem label="Status">Member of Chiranjivi (Immortals)</DetailItem>
            </DetailCategory>
            <DetailCategory title="Affiliations & Abode" icon={<Wind className="h-8 w-8 text-primary" />}>
              <DetailItem label="Devotion">Supreme Devotee of Lord Rama</DetailItem>
              <DetailItem label="Divine Aspects">Avatar of Shiva, Son of Vayu (Wind God)</DetailItem>
              <DetailItem label="Primary Realm">Kishkindha / Gandhamadana Mountain</DetailItem>
            </DetailCategory>
            <DetailCategory title="Worship & Symbols" icon={<BookOpen className="h-8 w-8 text-primary" />}>
              <DetailItem label="Primary Mantra">Oṁ Śrī Hanumate Namaḥ</DetailItem>
              <DetailItem label="Divine Weapon">Gada (Mace), symbolizing governance and strength</DetailItem>
              <DetailItem label="Sacred Days">Tuesday (Energy) and Saturday (Protection from Shani)</DetailItem>
            </DetailCategory>
          </div>
        </div>
      </section>

      {/* Character Teaser Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">The Divine Assembly</h2>
          <p className="text-muted-foreground italic">Figures of Dharma who shaped the course of the Epic.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCharacters.map((char) => (
            <Link key={char.slug} href={`/characters/${char.slug}`} className="group space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-500">
                <Image 
                  src={char.imageUrl} 
                  alt={char.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  data-ai-hint={char.imageHint}
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{char.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{char.title.split(' ')[0]}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-10 group">
            <Link href="/characters" className="flex items-center gap-2">
              Meet the Legends <Compass className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4">
        <div className="p-12 md:p-20 rounded-[3rem] bg-primary text-primary-foreground text-center space-y-8 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(249,115,22,0.4)]">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <LayoutDashboard className="h-64 w-64 rotate-12" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Your Spiritual Journey Never Ends.</h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Every mantra chanted, every story heard, and every character explored brings you closer to the unwavering strength of Hanuman.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90">
                <Link href="/explore">Discover All Sections</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-8 text-white hover:bg-white/10">
                <Link href="/profile">My Spiritual Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
