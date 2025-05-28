
// src/app/profile/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getAllMantras, type Mantra } from '@/data/mantras.tsx';
import { ashtaSiddhiDetails, siddhiIconMap, type Siddhi } from '@/data/ashta-siddhis'; 
import { Trash2, ListCollapse, BookOpen, Loader2, UserCircle, Edit3, Star, TrendingUp, Clock, Zap, CheckCircle, Target } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';
import { cn } from '@/lib/utils';
// Removed Metadata import as it's handled in layout.tsx

// Metadata has been moved to src/app/profile/layout.tsx

interface UserProfile {
  name: string;
  description: string;
  avatarUrl: string;
  level: number;
  currentXp: number;
  xpToNextLevel: number;
  timeSpentHours: number; 
}

const StatItem: React.FC<{ icon: React.ReactNode; label: string; value: string | number; action?: React.ReactNode }> = ({ icon, label, value, action }) => (
  <div className="bg-muted/50 p-4 rounded-lg shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex items-center text-muted-foreground mb-1">
        {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5 mr-2" })}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="text-2xl font-semibold text-primary">{value}</p>
    </div>
    {action && <div className="mt-3">{action}</div>}
  </div>
);


export default function ProfilePage() {
  const [rememberedMantras, setRememberedMantras] = useState<Mantra[]>([]);
  const [focusedSiddhi, setFocusedSiddhi] = useState<Siddhi | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Devoted Seeker',
    description: 'Walking the path of Hanuman, embracing strength, wisdom, and unwavering devotion.',
    avatarUrl: 'https://picsum.photos/200/200?random=1', 
    level: 5, 
    currentXp: 350, 
    xpToNextLevel: 500, 
    timeSpentHours: 28, 
  });
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true); 
    const rememberedIdsKey = 'rememberedMantraIds';
    const rememberedIdsString = localStorage.getItem(rememberedIdsKey);
    const allMantrasList = getAllMantras();
    if (rememberedIdsString) {
      const rememberedIds: string[] = JSON.parse(rememberedIdsString);
      setRememberedMantras(allMantrasList.filter(mantra => rememberedIds.includes(mantra.id)));
    }

    const focusedSiddhiNameKey = 'focusedSiddhiName';
    const storedSiddhiName = localStorage.getItem(focusedSiddhiNameKey);
    if (storedSiddhiName) {
      const siddhi = ashtaSiddhiDetails.siddhis.find(s => s.name === storedSiddhiName) || null;
      setFocusedSiddhi(siddhi);
    }
    setIsLoading(false); 
  }, []);

  const handleUnmarkMantra = (mantraId: string) => {
    if (typeof window === 'undefined') return;
    const rememberedIdsKey = 'rememberedMantraIds';
    const currentRememberedIds: string[] = JSON.parse(localStorage.getItem(rememberedIdsKey) || '[]');
    const updatedRememberedIds = currentRememberedIds.filter(id => id !== mantraId);
    localStorage.setItem(rememberedIdsKey, JSON.stringify(updatedRememberedIds));
    setRememberedMantras(prevMantras => prevMantras.filter(m => m.id !== mantraId));
    
    const unmarkedMantra = getAllMantras().find(m => m.id === mantraId);
    toast({
      title: "Mantra Unmarked",
      description: `${unmarkedMantra?.title || 'The mantra'} has been removed from your remembered list.`,
      variant: "default",
    });
  };

  const handleSelectSiddhi = (siddhi: Siddhi) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('focusedSiddhiName', siddhi.name);
    setFocusedSiddhi(siddhi);
    toast({
      title: "Path Chosen!",
      description: (
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
           You are now focusing on {siddhi.name}. May it guide your spiritual growth.
        </div>
      )
    });
  };
  
  const handleClearSiddhiFocus = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('focusedSiddhiName');
    const prevSiddhiName = focusedSiddhi?.name;
    setFocusedSiddhi(null);
    toast({
      title: "Focus Cleared",
      description: `${prevSiddhiName || 'Your siddhi focus'} has been cleared. You can choose a new path anytime.`,
    });
  };


  if (isLoading) {
    return (
      <div>
        <PageHeader title="My Profile" description="Loading your devotional progress..." />
        <div className="text-center flex justify-center items-center py-20">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!focusedSiddhi) {
    return (
      <div>
        <PageHeader 
          title="Choose Your Siddhi Path" 
          description="Select an Ashta Siddhi to focus your spiritual practice and understanding. This will personalize your journey."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ashtaSiddhiDetails.siddhis.map((siddhi) => (
            <DevotionalCard
              key={siddhi.name}
              title={siddhi.name}
              className="bg-card shadow-lg hover:shadow-primary/20 cursor-pointer"
              titleClassName="text-xl !text-primary"
              contentClassName="flex-grow"
              headerClassName="pb-3"
              content={
                <div className="space-y-3">
                  <div className="flex items-center mb-2">
                    {siddhiIconMap[siddhi.name] && React.isValidElement(siddhiIconMap[siddhi.name]) && React.cloneElement(siddhiIconMap[siddhi.name] as React.ReactElement, { className: "h-8 w-8 text-accent"})}
                  </div>
                  <p className="text-sm font-medium italic text-accent">{siddhi.translation}</p>
                  <p className="text-foreground/80 text-sm min-h-[60px] line-clamp-3">{siddhi.description}</p>
                </div>
              }
              actions={
                <Button 
                  onClick={() => handleSelectSiddhi(siddhi)} 
                  className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  <Target className="mr-2 h-4 w-4" /> Focus on {siddhi.name}
                </Button>
              }
            />
          ))}
        </div>
      </div>
    );
  }


  return (
    <div className="space-y-12">
      <PageHeader 
        title={userProfile.name}
        description={userProfile.description}
      />
      
      <Card className="shadow-xl border border-border/70 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Avatar className="h-28 w-28 border-4 border-primary shadow-lg">
              <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint="spiritual devotee avatar" />
              <AvatarFallback><UserCircle className="h-16 w-16 text-muted-foreground" /></AvatarFallback>
            </Avatar>
            <div className="flex-grow text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-3 mb-2">
                <h2 className="text-3xl font-semibold text-secondary-foreground">{userProfile.name}</h2>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary h-8 w-8" aria-label="Edit Profile">
                  <Edit3 className="h-5 w-5" />
                  <span className="sr-only">Edit Profile</span>
                </Button>
              </div>
              <p className="text-md text-foreground/80 italic">{userProfile.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">My Spiritual Dashboard</CardTitle>
          <CardDescription>Key metrics of your devotional engagement.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem icon={<BookOpen />} label="Mantras Remembered" value={rememberedMantras.length} />
          <StatItem 
            icon={<Star />} 
            label="Focused Siddhi" 
            value={focusedSiddhi.name} 
          />
          <StatItem icon={<TrendingUp />} label="Devotion Level" value={userProfile.level} />
          <StatItem icon={<Clock />} label="Time in App (Est.)" value={`${userProfile.timeSpentHours} hrs`} />
        </CardContent>
        <CardContent>
            <p className="text-sm text-muted-foreground mb-1">Progress to Next Level:</p>
            <Progress value={(userProfile.currentXp / userProfile.xpToNextLevel) * 100} className="h-3" />
            <p className="text-xs text-right text-muted-foreground mt-1">{userProfile.currentXp} / {userProfile.xpToNextLevel} XP</p>
            <p className="text-xs text-center text-muted-foreground mt-2">(Devotion levels & XP are conceptual and for illustrative purposes)</p>
        </CardContent>
      </Card>

      {focusedSiddhi && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              {siddhiIconMap[focusedSiddhi.name] && React.isValidElement(siddhiIconMap[focusedSiddhi.name]) ? React.cloneElement(siddhiIconMap[focusedSiddhi.name] as React.ReactElement, { className: "h-7 w-7 mr-3 text-primary" }) : <Zap className="h-7 w-7 mr-3 text-primary" />}
              Current Focus: {focusedSiddhi.name}
            </CardTitle>
            <CardDescription>{focusedSiddhi.translation}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/85 leading-relaxed mb-4">{focusedSiddhi.description}</p>
            <Link href="/ashta-siddhis" legacyBehavior>
              <a className="text-sm text-accent hover:underline">Learn more about all Ashta Siddhis...</a>
            </Link>
            <Button onClick={handleClearSiddhiFocus} variant="outline" size="sm" className="mt-4 float-right border-destructive text-destructive hover:bg-destructive/10">
              Clear Focus
            </Button>
          </CardContent>
        </Card>
      )}
      
      <section>
        <h2 className="text-3xl font-semibold text-secondary-foreground mb-8 text-center">
          <BookOpen className="inline-block h-8 w-8 mr-3 text-primary" />
          My Remembered Mantras ({rememberedMantras.length})
        </h2>
        {rememberedMantras.length === 0 ? (
          <div className="text-center text-muted-foreground py-10 bg-card rounded-xl shadow-md">
            <p className="text-xl mb-4">
              You haven't marked any mantras as remembered yet.
            </p>
            <Button asChild>
              <Link href="/mantras">Explore Mantras</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {rememberedMantras.map(mantra => (
              <DevotionalCard
                key={mantra.id}
                title={mantra.title}
                className="bg-card shadow-lg flex flex-col group"
                contentClassName="flex-grow" 
                headerClassName="pb-2"
                titleClassName="text-xl"
                content={
                  <div className="space-y-3">
                    <div className="flex items-center text-sm font-medium bg-accent/20 text-accent-foreground px-2.5 py-1 rounded-full shadow-sm self-start w-fit">
                      {mantra.icon && React.isValidElement(mantra.icon) && React.cloneElement(mantra.icon as React.ReactElement, { className: "h-4 w-4 text-accent mr-1.5" })}
                      {mantra.type}
                    </div>
                    <details className="group/details text-sm">
                        <summary className="cursor-pointer text-primary hover:text-accent flex items-center font-medium py-2">
                           <ListCollapse className="mr-2 h-5 w-5"/> Show Details
                        </summary>
                        <div className="mt-2 space-y-2 border-t border-border/30 pt-3 bg-muted/30 p-3 rounded-md">
                            <div>
                                <h4 className="font-semibold text-secondary-foreground mb-1">Sanskrit:</h4>
                                <p className="italic text-foreground/80 whitespace-pre-line font-serif">{mantra.sanskrit}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-secondary-foreground mb-1">Hindi Meaning:</h4>
                                <p className="text-foreground/80 whitespace-pre-line">{mantra.hindiMeaning}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-secondary-foreground mb-1">English Meaning:</h4>
                                <p className="text-foreground/80 whitespace-pre-line">{mantra.englishMeaning}</p>
                            </div>
                        </div>
                    </details>
                  </div>
                }
                actions={
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive-foreground group-hover:border-destructive/80 group-hover:text-destructive-foreground group-hover:bg-destructive/90"
                    onClick={() => handleUnmarkMantra(mantra.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Unmark as Remembered
                  </Button>
                }
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
