'use client';

import React, { useState, useEffect } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Palette, Moon, Sun, TextQuote, Settings2, Info, Loader2, CheckCircle, Contrast } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { 
  themes, 
  applyAppearance, 
  DEFAULT_THEME_NAME,
  DEFAULT_APPEARANCE_MODE,
  DEFAULT_DARK_MODE_INTENSITY
} from '@/lib/themes';
import type { AppearanceMode, DarkModeIntensity } from '@/components/theme-provider'; 
import { cn } from '@/lib/utils';
// Metadata has been moved to src/app/settings/layout.tsx


const darkModeIntensityOptions: { value: DarkModeIntensity; label: string }[] = [
  { value: 'soft', label: 'Soft Dark' },
  { value: 'standard', label: 'Standard Dark' },
  { value: 'deep', label: 'Deep Dark' },
];

export default function SettingsPage() {
  const [selectedColorThemeName, setSelectedColorThemeName] = useState<string>(DEFAULT_THEME_NAME);
  const [appearanceMode, setAppearanceMode] = useState<AppearanceMode>(DEFAULT_APPEARANCE_MODE);
  const [darkModeIntensity, setDarkModeIntensity] = useState<DarkModeIntensity>(DEFAULT_DARK_MODE_INTENSITY);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    const storedColorTheme = localStorage.getItem('themeName') || DEFAULT_THEME_NAME;
    const storedAppearanceMode = (localStorage.getItem('appAppearanceMode') as AppearanceMode) || DEFAULT_APPEARANCE_MODE;
    const storedDarkModeIntensity = (localStorage.getItem('appDarkModeIntensity') as DarkModeIntensity) || DEFAULT_DARK_MODE_INTENSITY;

    setSelectedColorThemeName(storedColorTheme);
    setAppearanceMode(storedAppearanceMode);
    setDarkModeIntensity(storedDarkModeIntensity);
  }, []);

  const handleColorThemeChange = (newThemeName: string) => {
    setSelectedColorThemeName(newThemeName);
    applyAppearance(newThemeName, appearanceMode, darkModeIntensity);
    const currentTheme = themes.find(t => t.name === newThemeName);
    toast({
      title: "Color Theme Updated",
      description: (
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
          Switched to {currentTheme?.displayName || newThemeName} theme.
        </div>
      ),
    });
  };

  const handleAppearanceModeToggle = (isDark: boolean) => {
    const newMode = isDark ? 'dark' : 'light';
    setAppearanceMode(newMode);
    applyAppearance(selectedColorThemeName, newMode, darkModeIntensity);
    toast({
      title: "Appearance Updated",
      description: (
        <div className="flex items-center">
          {isDark ? <Moon className="h-5 w-5 mr-2" /> : <Sun className="h-5 w-5 mr-2" />}
          {isDark ? 'Dark' : 'Light'} mode enabled.
        </div>
      ),
    });
  };

  const handleDarkModeIntensityChange = (newIntensity: DarkModeIntensity) => {
    setDarkModeIntensity(newIntensity);
    applyAppearance(selectedColorThemeName, appearanceMode, newIntensity);
    toast({
      title: "Dark Mode Intensity Updated",
      description: (
        <div className="flex items-center">
          <Contrast className="h-5 w-5 mr-2" />
           Dark mode intensity set to {newIntensity.charAt(0).toUpperCase() + newIntensity.slice(1)}.
        </div>
      ),
    });
  };

  if (!isMounted) {
    return (
        <div className="container mx-auto py-8">
            <PageHeader title="Settings" description="Loading your preferences..." />
            <div className="flex justify-center items-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <PageHeader
        title="Application Settings"
        description="Personalize your Hanuman Leela experience. Adjust themes, appearance, and other preferences."
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-xl border border-border/70 hover:shadow-primary/10 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Palette className="mr-3 h-6 w-6" />
              Appearance
            </CardTitle>
            <CardDescription>Customize the look and feel of the application.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <Label className="text-lg font-semibold text-secondary-foreground mb-4 block">Color Theme</Label>
              <RadioGroup value={selectedColorThemeName} onValueChange={handleColorThemeChange} className="space-y-2">
                {themes.map((theme) => (
                  <Label
                    key={theme.name}
                    htmlFor={`theme-${theme.name}`}
                    className={cn(
                      "flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out",
                      selectedColorThemeName === theme.name 
                        ? "border-primary ring-2 ring-primary bg-primary/10 shadow-md" 
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    )}
                  >
                    <RadioGroupItem value={theme.name} id={`theme-${theme.name}`} className="border-primary text-primary focus:ring-primary"/>
                    <span 
                      className="w-6 h-6 rounded-full border-2 border-card shadow-inner"
                      style={{ backgroundColor: `hsl(${theme.previewColor || theme.variables['--primary']})` }}
                    ></span>
                    <span className={cn("font-medium", selectedColorThemeName === theme.name ? "text-primary" : "text-foreground")}>
                      {theme.displayName}
                    </span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
            <div className="border-t border-border/50 pt-8">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode-switch" className="text-lg font-semibold text-secondary-foreground flex items-center">
                  {appearanceMode === 'dark' ? <Moon className="mr-2 h-5 w-5" /> : <Sun className="mr-2 h-5 w-5" />}
                  {appearanceMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </Label>
                 <Switch
                    id="dark-mode-switch"
                    checked={appearanceMode === 'dark'}
                    onCheckedChange={handleAppearanceModeToggle}
                    aria-label="Toggle dark mode"
                  />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Toggle between light and dark themes for optimal viewing comfort.
              </p>
            </div>

            {appearanceMode === 'dark' && (
              <div className="border-t border-border/50 pt-8">
                <Label className="text-lg font-semibold text-secondary-foreground mb-4 block">Dark Mode Intensity</Label>
                <RadioGroup value={darkModeIntensity} onValueChange={handleDarkModeIntensityChange} className="space-y-2">
                  {darkModeIntensityOptions.map((option) => (
                    <Label
                      key={option.value}
                      htmlFor={`intensity-${option.value}`}
                      className={cn(
                        "flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out",
                        darkModeIntensity === option.value
                          ? "border-accent ring-2 ring-accent bg-accent/10 shadow-md"
                          : "border-border hover:border-accent/50 hover:bg-muted/50"
                      )}
                    >
                      <RadioGroupItem value={option.value} id={`intensity-${option.value}`} className="border-accent text-accent focus:ring-accent"/>
                      <span className={cn("font-medium", darkModeIntensity === option.value ? "text-accent" : "text-foreground")}>
                        {option.label}
                      </span>
                    </Label>
                  ))}
                </RadioGroup>
                 <p className="text-sm text-muted-foreground mt-2">
                  Adjust the darkness level for the dark theme.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-xl border border-border/70 hover:shadow-primary/10 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <TextQuote className="mr-3 h-6 w-6" />
              Content Preferences
            </CardTitle>
            <CardDescription>Adjust how you interact with spiritual content. (Features coming soon)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <Label className="text-lg font-semibold text-secondary-foreground">Mantra Language</Label>
              <p className="text-sm text-muted-foreground mt-1">Currently defaults to Sanskrit with available translations.</p>
              <Button variant="outline" className="mt-4" disabled>Select Language Preference</Button>
            </div>
            <div className="border-t border-border/50 pt-8">
               <Label className="text-lg font-semibold text-secondary-foreground">Font Size</Label>
               <p className="text-sm text-muted-foreground mt-1">Adjust text size across the application for better readability.</p>
               <Button variant="outline" className="mt-4" disabled>Adjust Font Size</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl md:col-span-2 border border-border/70 hover:shadow-primary/10 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Settings2 className="mr-3 h-6 w-6" />
              Application Data
            </CardTitle>
            <CardDescription>Manage application data and settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
                <div className="flex items-center">
                    <Info className="mr-3 h-5 w-5 text-muted-foreground"/>
                    <div>
                        <h4 className="font-medium text-secondary-foreground">About Hanuman Leela</h4>
                        <p className="text-xs text-muted-foreground">Version 1.0.0</p>
                    </div>
                </div>
                <Button variant="link" className="text-accent" disabled>View Details</Button>
            </div>
             <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
                <div className="flex items-center">
                    <Settings2 className="mr-3 h-5 w-5 text-muted-foreground"/>
                    <div>
                        <h4 className="font-medium text-secondary-foreground">Reset All Settings</h4>
                        <p className="text-xs text-muted-foreground">This will reset theme, appearance, and remembered mantras.</p>
                    </div>
                </div>
                <Button variant="destructive" className="bg-destructive hover:bg-destructive/90" disabled>Reset to Defaults</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}