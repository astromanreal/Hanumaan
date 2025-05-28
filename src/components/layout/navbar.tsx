// src/components/layout/navbar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, type ReactElement } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"; 
import { Menu, Wind, Compass, Settings, User, Mail, Sun, Moon, MoreVertical, HomeIcon, BookOpen, Music2, LayersIcon, Zap, Footprints, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  applyAppearance, 
  DEFAULT_THEME_NAME,
  DEFAULT_APPEARANCE_MODE,
  DEFAULT_DARK_MODE_INTENSITY
} from '@/lib/themes';
import type { AppearanceMode, DarkModeIntensity } from '@/components/theme-provider';


// Items for the "three-dot" dropdown menu on desktop
const threeDotMenuItems = [
  { href: '/', label: 'Home', icon: <HomeIcon className="mr-2 h-4 w-4" /> },
  { href: '/ramayana', label: 'Ramayana', icon: <BookOpen className="mr-2 h-4 w-4" /> },
  { href: '/journey', label: "Hanuman's Journey", icon: <Footprints className="mr-2 h-4 w-4" /> },
  { href: '/mantras', label: 'Mantras', icon: <Music2 className="mr-2 h-4 w-4" /> },
  { href: '/panchamukhi-hanuman', label: 'Panchamukhi Hanuman', icon: <LayersIcon className="mr-2 h-4 w-4" /> },
  { href: '/ashta-siddhis', label: 'Ashta Siddhis', icon: <Zap className="mr-2 h-4 w-4" /> },
];

// Items directly visible on the right side of the navbar on desktop
interface RightNavItem {
  href: string;
  label: string;
  icon: ReactElement;
}
const rightNavDirectItems: RightNavItem[] = [
  { href: '/explore', label: 'Explore', icon: <Compass /> },
  { href: '/events', label: 'Events', icon: <CalendarDays /> },
  { href: '/settings', label: 'Settings', icon: <Settings /> },
  { href: '/contact', label: 'Contact', icon: <Mail /> },
  { href: '/profile', label: 'Profile', icon: <User /> },
];

// Items for the mobile navigation sheet
const mobileNavItems = [
  { href: '/', label: 'Home', icon: <HomeIcon className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/explore', label: 'Explore', icon: <Compass className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/events', label: 'Events', icon: <CalendarDays className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/ramayana', label: 'Ramayana', icon: <BookOpen className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/journey', label: "Hanuman's Journey", icon: <Footprints className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/mantras', label: 'Mantras', icon: <Music2 className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/panchamukhi-hanuman', label: 'Panchamukhi Hanuman', icon: <LayersIcon className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/ashta-siddhis', label: 'Ashta Siddhis', icon: <Zap className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/settings', label: 'Settings', icon: <Settings className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/profile', label: 'Profile', icon: <User className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
];

export function Navbar() {
  const pathname = usePathname();
  const [appearanceMode, setAppearanceMode] = useState<AppearanceMode>(DEFAULT_APPEARANCE_MODE);
  const [openMobile, setOpenMobile] = React.useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedAppearanceMode = (localStorage.getItem('appAppearanceMode') as AppearanceMode) || DEFAULT_APPEARANCE_MODE;
    setAppearanceMode(savedAppearanceMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = appearanceMode === 'light' ? 'dark' : 'light';
    setAppearanceMode(newMode); 

    const currentThemeName = localStorage.getItem('themeName') || DEFAULT_THEME_NAME;
    const currentIntensity = (localStorage.getItem('appDarkModeIntensity') as DarkModeIntensity) || DEFAULT_DARK_MODE_INTENSITY;
    
    applyAppearance(currentThemeName, newMode, currentIntensity);
  };

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
            <Wind className="h-8 w-8" />
            <span className="font-bold text-xl tracking-tight">Hanuman Leela</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex space-x-1">
              <div className="h-9 w-20 rounded-md bg-muted/50 animate-pulse"></div>
              <div className="h-9 w-24 rounded-md bg-muted/50 animate-pulse"></div>
              <div className="h-9 w-24 rounded-md bg-muted/50 animate-pulse"></div>
              <div className="h-9 w-20 rounded-md bg-muted/50 animate-pulse"></div>
              <div className="h-9 w-9 rounded-full bg-muted/50 animate-pulse"></div>
              <div className="h-9 w-9 rounded-full bg-muted/50 animate-pulse"></div>
            </div>
            <div className="h-9 w-9 rounded-md bg-muted/50 animate-pulse md:hidden"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
          <Wind className="h-8 w-8" />
          <span className="font-bold text-xl tracking-tight">Hanuman Leela</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {rightNavDirectItems.map((item) => (
            <Tooltip key={item.href} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "transition-colors hover:text-accent px-2.5 py-2 text-sm", 
                    pathname === item.href ? "text-accent font-semibold" : "text-foreground/70"
                  )}
                >
                  <Link href={item.href} className="flex items-center">
                    {React.cloneElement(item.icon, { className: "mr-1 h-5 w-5" })}
                    {item.label}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="h-9 w-9" aria-label="Toggle dark mode">
                {appearanceMode === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle {appearanceMode === 'dark' ? 'Light' : 'Dark'} Mode</p>
            </TooltipContent>
          </Tooltip>

          <DropdownMenu>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="More pages">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>More Pages</p>
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end">
              {threeDotMenuItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild className={cn(pathname === item.href ? "bg-accent/10 text-accent font-semibold" : "")}>
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="md:hidden flex items-center">
          {/* Mobile dark mode toggle is now inside the Sheet */}
          <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Open Menu</p>
              </TooltipContent>
            </Tooltip>
            <SheetContent side="right" className="w-[300px] sm:w-[320px] bg-background p-0 flex flex-col">
              <SheetHeader className="p-4 border-b border-border/40">
                <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors" onClick={() => setOpenMobile(false)}>
                  <Wind className="h-7 w-7" />
                  <SheetTitle> {/* Visual title */}
                    <span className="font-bold text-lg">Hanuman Leela</span>
                  </SheetTitle>
                </Link>
                 <SheetTitle className="sr-only">Main Navigation Menu</SheetTitle> {/* SR-only title */}
              </SheetHeader>
              <div className="p-4 flex flex-col space-y-1 flex-grow overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/50 hover:[&::-webkit-scrollbar-thumb]:bg-primary/80">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenMobile(false)}
                    className={cn(
                      "block px-3 py-3 text-base transition-colors hover:text-accent rounded-md flex items-center",
                      pathname === item.href ? "bg-accent/10 text-accent font-semibold" : "text-foreground/80 hover:bg-muted"
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
              <div className="p-4 border-t border-border/40 mt-auto">
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        toggleDarkMode();
                        // Optionally close sheet, though user might want to see the change
                        // setOpenMobile(false); 
                      }}
                      className="w-full justify-start flex items-center text-base text-foreground/80 hover:bg-muted hover:text-accent px-3 py-3 rounded-md"
                      aria-label="Toggle dark mode"
                    >
                      {appearanceMode === 'dark' ? <Sun className="inline-block h-5 w-5 mr-2 mb-0.5" /> : <Moon className="inline-block h-5 w-5 mr-2 mb-0.5" />}
                      <span>Toggle {appearanceMode === 'dark' ? 'Light' : 'Dark'} Mode</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start">
                     <p>Toggle {appearanceMode === 'dark' ? 'Light' : 'Dark'} Mode</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

