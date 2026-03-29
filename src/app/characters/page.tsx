import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { charactersData, type CharacterDetail } from '@/data/characters-data';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, UserCircle2, Crown, Sparkles, 
  Handshake, Zap, Heart, Landmark, 
  Users2, Sword, ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'royal', name: 'Royal Family', icon: <Crown className="h-6 w-6" />, description: 'The sun-born lineage of Ayodhya and Mithila.' },
  { id: 'sages', name: 'Sages & Guides', icon: <Landmark className="h-6 w-6" />, description: 'The spiritual masters who guided the path of Dharma.' },
  { id: 'vanaras', name: 'Vanara Allies', icon: <Users2 className="h-6 w-6" />, description: 'The heroic force of Kishkindha led by Hanuman.' },
  { id: 'lanka', name: 'Lanka & Antagonists', icon: <Sword className="h-6 w-6" />, description: 'The ten-headed king and the warriors of the golden city.' },
  { id: 'others', name: 'Devotees & Others', icon: <Heart className="h-6 w-6" />, description: 'The pure souls whose faith moved the Divine.' },
];

const CharacterCard = ({ char }: { char: CharacterDetail }) => (
  <Link 
    href={`/characters/${char.slug}`}
    className="group relative flex flex-col h-[420px] rounded-3xl overflow-hidden border border-border/50 bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]"
  >
    {/* Image Section */}
    <div className="relative h-2/3 w-full overflow-hidden">
      <Image 
        src={char.imageUrl} 
        alt={char.name} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        data-ai-hint={char.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
    </div>

    {/* Content Section */}
    <div className="relative flex-grow p-6 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-primary">
          <ShieldCheck className="h-4 w-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{char.title}</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {char.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {char.oneLineDescription}
        </p>
      </div>

      <div className="flex items-center justify-end text-primary text-sm font-medium mt-4">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">Divine Bio</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

export default function CharactersPage() {
  return (
    <div className="space-y-24 py-12">
      <section className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <div className="inline-block p-2 px-4 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Divine Assembly
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-primary via-primary/80 to-accent/50 bg-clip-text text-transparent tracking-tighter">
          The Legends of Ramayana
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed font-light">
          A gathering of souls who shaped the course of dharma. From the <span className="text-primary font-medium">Avatar</span> himself to the <span className="text-foreground font-medium">devoted servants</span>, explore the world of the timeless epic.
        </p>
      </section>

      <div className="container mx-auto px-4 space-y-32">
        {categories.map((cat) => {
          const catCharacters = charactersData.filter(c => c.category === cat.id);
          if (catCharacters.length === 0) return null;

          return (
            <div key={cat.id} className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/20 pb-8 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-primary">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {cat.icon}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">{cat.name}</h2>
                  </div>
                  <p className="text-muted-foreground italic pl-12">{cat.description}</p>
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary/60">
                  {catCharacters.length} Figures
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {catCharacters.map((char) => (
                  <CharacterCard key={char.slug} char={char} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="p-12 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <Sparkles className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-4xl font-bold">The Journey Continues</h2>
          <p className="text-lg text-muted-foreground">
            Every character plays a pivotal role in the Kandas of the Ramayana. Trace their paths and see how Dharma unfolded.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/ramayana" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Explore the Kandas <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
