// src/components/theme-provider.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { 
  applyAppearance, 
  DEFAULT_THEME_NAME,
  DEFAULT_APPEARANCE_MODE,
  DEFAULT_DARK_MODE_INTENSITY
} from '@/lib/themes';

// Define types if not already globally available or imported from lib/themes
export type AppearanceMode = 'light' | 'dark';
export type DarkModeIntensity = 'soft' | 'standard' | 'deep';


export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // This effect runs once on mount on the client side.
    const storedColorThemeName = localStorage.getItem('themeName') || DEFAULT_THEME_NAME;
    const storedAppearanceMode = (localStorage.getItem('appAppearanceMode') as AppearanceMode) || DEFAULT_APPEARANCE_MODE;
    const storedDarkModeIntensity = (localStorage.getItem('appDarkModeIntensity') as DarkModeIntensity) || DEFAULT_DARK_MODE_INTENSITY;

    applyAppearance(storedColorThemeName, storedAppearanceMode, storedDarkModeIntensity);
    
  }, []);

  // Render children immediately, theme application is a side effect.
  // The isMounted state can be used to prevent UI rendering that depends on client-side info,
  // but for ThemeProvider, applying the theme is the main goal.
  return <>{children}</>;
}
