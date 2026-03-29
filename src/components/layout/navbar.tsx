"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
import { 
  Menu, Wind, Compass, Settings, User, Mail, Sun, Moon, 
  MoreVertical, HomeIcon, BookOpen, Music2, LayersIcon, 
  Zap, Footprints, CalendarDays, Users2, LayoutDashboard 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  applyAppearance, 
  DEFAULT_THEME_NAME,
  DEFAULT_APPEARANCE_MODE,
  DEFAULT_DARK_MODE_INTENSITY
} from '@/lib/themes';
import type { AppearanceMode, DarkModeIntensity } from '@/components/theme-provider';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const threeDotMenuItems = [
  { href: '/', label: 'Home', icon: <HomeIcon className="mr-2 h-4 w-4" />, shortcut: 'H' },
  { href: '/ramayana', label: 'Ramayana', icon: <BookOpen className="mr-2 h-4 w-4" /> },
  { href: '/characters', label: 'Characters', icon: <Users2 className="mr-2 h-4 w-4" /> },
  { href: '/journey', label: "Hanuman's Journey", icon: <Footprints className="mr-2 h-4 w-4" /> },
  { href: '/mantras', label: 'Mantras', icon: <Music2 className="mr-2 h-4 w-4" />, shortcut: 'M' },
  { href: '/panchamukhi-hanuman', label: 'Panchamukhi Hanuman', icon: <LayersIcon className="mr-2 h-4 w-4" /> },
  { href: '/ashta-siddhis', label: 'Ashta Siddhis', icon: <Zap className="mr-2 h-4 w-4" /> },
];

const rightNavDirectItems = [
  { href: '/feed', label: 'Feed', icon: <LayoutDashboard />, shortcut: 'F' },
  { href: '/explore', label: 'Explore', icon: <Compass />, shortcut: 'E' },
  { href: '/events', label: 'Events', icon: <CalendarDays />, shortcut: 'V' },
  { href: '/profile', label: 'Profile', icon: <User />, shortcut: 'P' },
];

const mobileNavItems = [
  { href: '/', label: 'Home', icon: <HomeIcon className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/feed', label: 'Divine Feed', icon: <LayoutDashboard className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/explore', label: 'Explore', icon: <Compass className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/events', label: 'Events', icon: <CalendarDays className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/ramayana', label: 'Ramayana', icon: <BookOpen className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
  { href: '/characters', label: 'Characters', icon: <Users2 className="inline-block h-5 w-5 mr-2 mb-0.5" /> },
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
  const [openMobile, setOpenMobile] = useState(false);
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
          <div className="h-9 w-9 rounded-md bg-muted/50 animate-pulse"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4">
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
                    {React.cloneElement(item.icon as React.ReactElement, { className: "mr-1.5 h-5 w-5" })}
                    {item.label}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label} {item.shortcut && <span className="ml-1 opacity-60 text-xs">({item.shortcut})</span>}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="h-9 w-9" aria-label="Toggle dark mode">
                {appearanceMode === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent><p>Toggle {appearanceMode === 'dark' ? 'Light' : 'Dark'} Mode</p></TooltipContent>
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
              <TooltipContent><p>More Pages</p></TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end">
              {threeDotMenuItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild className={cn(pathname === item.href ? "bg-accent/10 text-accent font-semibold" : "")}>
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                    {item.shortcut && <span className="ml-auto opacity-40 text-xs pl-4">{item.shortcut}</span>}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild className={cn(pathname === '/contact' ? "bg-accent/10 text-accent font-semibold" : "")}>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={cn(pathname === '/settings' ? "bg-accent/10 text-accent font-semibold" : "")}>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                  <span className="ml-auto opacity-40 text-xs pl-4">S</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="md:hidden flex items-center">
          <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[320px] bg-background p-0 flex flex-col">
              <SheetHeader className="p-4 border-b border-border/40">
                <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors" onClick={() => setOpenMobile(false)}>
                  <Wind className="h-7 w-7" />
                  <SheetTitle className="text-left font-bold text-lg">Hanuman Leela</SheetTitle>
                </Link>
                <SheetDescription className="sr-only">
                  Navigation menu for Hanuman Leela application.
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="flex-grow">
                <div className="p-4 flex flex-col space-y-1">
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
              </ScrollArea>
              <div className="p-4 border-t border-border/40 mt-auto">
                <Button
                  variant="ghost"
                  onClick={toggleDarkMode}
                  className="w-full justify-start flex items-center text-base text-foreground/80 hover:bg-muted hover:text-accent px-3 py-3 rounded-md"
                >
                  {appearanceMode === 'dark' ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                  <span>Toggle {appearanceMode === 'dark' ? 'Light' : 'Dark'} Mode</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}