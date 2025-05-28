// src/lib/themes.ts
import type { AppearanceMode, DarkModeIntensity } from '@/components/theme-provider';

export interface ThemeVariables {
  '--background': string;
  '--foreground': string;
  '--muted': string;
  '--muted-foreground': string;
  '--popover': string;
  '--popover-foreground': string;
  '--card': string;
  '--card-foreground': string;
  '--border': string;
  '--input': string;
  '--primary': string;
  '--primary-foreground': string;
  '--secondary': string;
  '--secondary-foreground': string;
  '--accent': string;
  '--accent-foreground': string;
  '--destructive': string;
  '--destructive-foreground': string;
  '--ring': string;
  '--chart-1': string;
  '--chart-2': string;
  '--chart-3': string;
  '--chart-4': string;
  '--chart-5': string;
  '--sidebar-background': string;
  '--sidebar-foreground': string;
  '--sidebar-primary': string;
  '--sidebar-primary-foreground': string;
  '--sidebar-accent': string;
  '--sidebar-accent-foreground': string;
  '--sidebar-border': string;
  '--sidebar-ring': string;
}

export interface Theme {
  name: string;
  displayName: string;
  variables: ThemeVariables;
  darkVariables?: Partial<ThemeVariables>; // For theme-specific color overrides in dark mode
  previewColor?: string; // HSL string for preview
}

export const DEFAULT_THEME_NAME = 'saffron';
export const DEFAULT_APPEARANCE_MODE: AppearanceMode = 'light';
export const DEFAULT_DARK_MODE_INTENSITY: DarkModeIntensity = 'standard';


export const themes: Theme[] = [
  {
    name: 'saffron',
    displayName: 'Sacred Saffron (Default)',
    previewColor: '30 90% 55%',
    variables: {
      '--background': '20 30% 98%',
      '--foreground': '20 15% 25%',
      '--muted': '30 40% 94%',
      '--muted-foreground': '20 10% 45%',
      '--popover': '20 30% 98%',
      '--popover-foreground': '20 15% 25%',
      '--card': '30 50% 96%',
      '--card-foreground': '20 15% 25%',
      '--border': '30 60% 88%',
      '--input': '30 60% 88%',
      '--primary': '30 90% 55%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '35 80% 70%',
      '--secondary-foreground': '20 15% 25%',
      '--accent': '30 100% 50%',
      '--accent-foreground': '0 0% 100%',
      '--destructive': '0 75% 50%',
      '--destructive-foreground': '0 0% 100%',
      '--ring': '30 100% 50%',
      '--chart-1': '30 90% 55%',
      '--chart-2': '35 80% 70%',
      '--chart-3': '40 70% 65%',
      '--chart-4': '0 75% 50%',
      '--chart-5': '45 90% 60%',
      '--sidebar-background': '30 50% 97%',
      '--sidebar-foreground': '20 15% 30%',
      '--sidebar-primary': '30 90% 55%',
      '--sidebar-primary-foreground': '0 0% 100%',
      '--sidebar-accent': '30 100% 50%',
      '--sidebar-accent-foreground': '0 0% 100%',
      '--sidebar-border': '30 60% 90%',
      '--sidebar-ring': '30 100% 50%',
    },
    darkVariables: {
      '--primary': '30 90% 60%',
      '--primary-foreground': '20 10% 10%',
      '--secondary': '35 80% 55%',
      '--secondary-foreground': '30 30% 90%', // Keep light text for secondary on dark
      '--accent': '30 100% 55%',
      '--accent-foreground': '20 5% 5%',
      '--ring': '30 100% 55%',
      '--chart-1': '30 90% 60%',
      '--chart-2': '35 80% 55%',
      '--chart-3': '40 70% 50%',
      '--chart-4': '0 60% 55%',
      '--chart-5': '45 85% 60%',
      '--sidebar-primary': '30 90% 60%',
      '--sidebar-primary-foreground': '20 10% 10%',
      '--sidebar-accent': '30 100% 55%',
      '--sidebar-accent-foreground': '20 5% 5%',
    }
  },
  {
    name: 'divineBlue',
    displayName: 'Divine Blue',
    previewColor: '210 80% 55%',
    variables: {
      '--background': '210 30% 98%',
      '--foreground': '210 15% 25%',
      '--muted': '210 40% 94%',
      '--muted-foreground': '210 10% 45%',
      '--popover': '210 30% 98%',
      '--popover-foreground': '210 15% 25%',
      '--card': '210 50% 96%',
      '--card-foreground': '210 15% 25%',
      '--border': '210 60% 88%',
      '--input': '210 60% 88%',
      '--primary': '210 80% 55%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '45 90% 60%', // Gold
      '--secondary-foreground': '210 15% 25%',
      '--accent': '200 90% 50%', // Sky Blue
      '--accent-foreground': '0 0% 100%',
      '--destructive': '0 75% 50%',
      '--destructive-foreground': '0 0% 100%',
      '--ring': '210 80% 55%',
      '--chart-1': '210 80% 55%',
      '--chart-2': '45 90% 60%',
      '--chart-3': '200 90% 50%',
      '--chart-4': '0 75% 50%',
      '--chart-5': '220 70% 65%',
      '--sidebar-background': '210 50% 97%',
      '--sidebar-foreground': '210 15% 30%',
      '--sidebar-primary': '210 80% 55%',
      '--sidebar-primary-foreground': '0 0% 100%',
      '--sidebar-accent': '200 90% 50%',
      '--sidebar-accent-foreground': '0 0% 100%',
      '--sidebar-border': '210 60% 90%',
      '--sidebar-ring': '210 80% 55%',
    },
    darkVariables: {
      '--primary': '210 80% 60%',
      '--primary-foreground': '210 10% 10%', // Darker text on blue
      '--secondary': '45 90% 65%', // Gold, lighter for dark
      '--secondary-foreground': '45 20% 15%', // Dark text on gold
      '--accent': '200 90% 55%', // Sky Blue, lighter for dark
      '--accent-foreground': '200 10% 10%', // Darker text on sky blue
      '--ring': '210 80% 60%',
      '--chart-1': '210 80% 60%',
      '--chart-2': '45 90% 65%',
      '--chart-3': '200 90% 55%',
      '--chart-5': '220 70% 70%',
      '--sidebar-primary': '210 80% 60%',
      '--sidebar-primary-foreground': '210 10% 10%',
      '--sidebar-accent': '200 90% 55%',
      '--sidebar-accent-foreground': '200 10% 10%',
    }
  },
  {
    name: 'sereneGreen',
    displayName: 'Serene Green',
    previewColor: '120 60% 45%',
    variables: {
      '--background': '100 30% 97%',
      '--foreground': '120 25% 20%',
      '--muted': '100 40% 93%',
      '--muted-foreground': '110 15% 40%',
      '--popover': '100 30% 97%',
      '--popover-foreground': '120 25% 20%',
      '--card': '110 45% 95%',
      '--card-foreground': '120 25% 20%',
      '--border': '110 55% 85%',
      '--input': '110 55% 85%',
      '--primary': '120 60% 45%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '45 80% 65%', // Soft Gold
      '--secondary-foreground': '120 25% 20%',
      '--accent': '90 70% 55%', // Lime Green
      '--accent-foreground': '90 25% 15%', // Darker text on lime
      '--destructive': '0 70% 55%',
      '--destructive-foreground': '0 0% 100%',
      '--ring': '120 60% 45%',
      '--chart-1': '120 60% 45%',
      '--chart-2': '45 80% 65%',
      '--chart-3': '90 70% 55%',
      '--chart-4': '0 70% 55%',
      '--chart-5': '100 50% 50%',
      '--sidebar-background': '110 45% 96%',
      '--sidebar-foreground': '120 25% 25%',
      '--sidebar-primary': '120 60% 45%',
      '--sidebar-primary-foreground': '0 0% 100%',
      '--sidebar-accent': '90 70% 55%',
      '--sidebar-accent-foreground': '90 25% 15%',
      '--sidebar-border': '110 55% 88%',
      '--sidebar-ring': '120 60% 45%',
    },
    darkVariables: {
      '--primary': '120 55% 55%', // Slightly desaturated and lighter green for dark
      '--primary-foreground': '120 15% 10%', // Dark text
      '--secondary': '45 75% 60%', // Soft Gold, adjusted for dark
      '--secondary-foreground': '45 20% 15%', // Dark text on gold
      '--accent': '90 65% 60%', // Lime Green, adjusted
      '--accent-foreground': '90 20% 10%', // Dark text
      '--ring': '120 55% 55%',
      '--chart-1': '120 55% 55%',
      '--chart-2': '45 75% 60%',
      '--chart-3': '90 65% 60%',
      '--chart-5': '100 45% 55%',
      '--sidebar-primary': '120 55% 55%',
      '--sidebar-primary-foreground': '120 15% 10%',
      '--sidebar-accent': '90 65% 60%',
      '--sidebar-accent-foreground': '90 20% 10%',
    }
  },
  {
    name: 'crimsonGold',
    displayName: 'Royal Crimson',
    previewColor: '0 70% 50%',
    variables: {
      '--background': '0 10% 98%',
      '--foreground': '0 20% 20%',
      '--muted': '0 20% 94%',
      '--muted-foreground': '0 10% 40%',
      '--popover': '0 10% 98%',
      '--popover-foreground': '0 20% 20%',
      '--card': '0 30% 96%',
      '--card-foreground': '0 20% 20%',
      '--border': '0 40% 88%',
      '--input': '0 40% 88%',
      '--primary': '0 70% 50%', // Deep Crimson
      '--primary-foreground': '0 0% 100%',
      '--secondary': '35 90% 60%', // Bright Gold
      '--secondary-foreground': '0 20% 20%',
      '--accent': '15 85% 55%', // Fiery Orange
      '--accent-foreground': '0 0% 100%',
      '--destructive': '350 80% 60%',
      '--destructive-foreground': '0 0% 100%',
      '--ring': '0 70% 50%',
      '--chart-1': '0 70% 50%',
      '--chart-2': '35 90% 60%',
      '--chart-3': '15 85% 55%',
      '--chart-4': '350 80% 60%',
      '--chart-5': '340 70% 60%',
      '--sidebar-background': '0 30% 97%',
      '--sidebar-foreground': '0 20% 25%',
      '--sidebar-primary': '0 70% 50%',
      '--sidebar-primary-foreground': '0 0% 100%',
      '--sidebar-accent': '15 85% 55%',
      '--sidebar-accent-foreground': '0 0% 100%',
      '--sidebar-border': '0 40% 90%',
      '--sidebar-ring': '0 70% 50%',
    },
    darkVariables: {
      '--primary': '0 65% 60%', // Crimson, adjusted for dark
      '--primary-foreground': '0 0% 100%', // White text on crimson
      '--secondary': '35 85% 65%', // Bright Gold, adjusted for dark
      '--secondary-foreground': '35 25% 10%', // Dark text
      '--accent': '15 80% 60%', // Fiery Orange, adjusted
      '--accent-foreground': '0 0% 100%', // White text
      '--ring': '0 65% 60%',
      '--chart-1': '0 65% 60%',
      '--chart-2': '35 85% 65%',
      '--chart-3': '15 80% 60%',
      '--chart-4': '350 75% 65%',
      '--chart-5': '340 65% 65%',
      '--sidebar-primary': '0 65% 60%',
      '--sidebar-primary-foreground': '0 0% 100%',
      '--sidebar-accent': '15 80% 60%',
      '--sidebar-accent-foreground': '0 0% 100%',
    }
  },
  {
    name: 'goldenAura',
    displayName: 'Golden Aura',
    previewColor: '40 100% 50%',
    variables: {
      '--background': '40 60% 97%',
      '--foreground': '30 30% 20%',
      '--muted': '40 50% 92%',
      '--muted-foreground': '30 20% 40%',
      '--popover': '40 60% 97%',
      '--popover-foreground': '30 30% 20%',
      '--card': '45 70% 94%',
      '--card-foreground': '30 30% 20%',
      '--border': '45 70% 85%',
      '--input': '45 70% 85%',
      '--primary': '40 100% 50%', // Bright Gold
      '--primary-foreground': '30 30% 15%', // Dark text on gold
      '--secondary': '30 80% 60%', // Rich Orange
      '--secondary-foreground': '30 30% 15%', // Dark text on orange
      '--accent': '25 90% 55%', // Burnt Orange
      '--accent-foreground': '0 0% 100%',
      '--destructive': '0 70% 55%',
      '--destructive-foreground': '0 0% 100%',
      '--ring': '40 100% 50%',
      '--chart-1': '40 100% 50%',
      '--chart-2': '30 80% 60%',
      '--chart-3': '25 90% 55%',
      '--chart-4': '0 70% 55%',
      '--chart-5': '50 90% 50%',
      '--sidebar-background': '45 70% 96%',
      '--sidebar-foreground': '30 30% 25%',
      '--sidebar-primary': '40 100% 50%',
      '--sidebar-primary-foreground': '30 30% 15%',
      '--sidebar-accent': '25 90% 55%',
      '--sidebar-accent-foreground': '0 0% 100%',
      '--sidebar-border': '45 70% 88%',
      '--sidebar-ring': '40 100% 50%',
    },
    darkVariables: {
      '--primary': '40 95% 60%', // Gold, adjusted for dark
      '--primary-foreground': '40 25% 10%', // Dark text
      '--secondary': '30 75% 65%', // Rich Orange, adjusted
      '--secondary-foreground': '30 20% 10%', // Dark text
      '--accent': '25 85% 60%', // Burnt Orange, adjusted
      '--accent-foreground': '0 0% 100%', // White text
      '--ring': '40 95% 60%',
      '--chart-1': '40 95% 60%',
      '--chart-2': '30 75% 65%',
      '--chart-3': '25 85% 60%',
      '--chart-5': '50 85% 55%',
      '--sidebar-primary': '40 95% 60%',
      '--sidebar-primary-foreground': '40 25% 10%',
      '--sidebar-accent': '25 85% 60%',
      '--sidebar-accent-foreground': '0 0% 100%',
    }
  }
];


export function applyAppearance(
  themeName: string,
  mode: AppearanceMode,
  intensity: DarkModeIntensity
): void {
  if (typeof window === 'undefined') return;

  const docEl = document.documentElement;
  const theme = themes.find(t => t.name === themeName) || themes.find(t => t.name === DEFAULT_THEME_NAME);

  if (!theme) return;

  // Store preferences
  localStorage.setItem('themeName', themeName);
  localStorage.setItem('appAppearanceMode', mode);
  localStorage.setItem('appDarkModeIntensity', intensity);

  // Clear all potentially conflicting styles first
  docEl.classList.remove('dark', 'dark-soft', 'dark-standard', 'dark-deep');
  
  // Create a set of all known CSS variable names from all themes
  const allKnownVariables: Set<string> = new Set();
  themes.forEach(th => {
    Object.keys(th.variables).forEach(key => allKnownVariables.add(key));
    if (th.darkVariables) {
      Object.keys(th.darkVariables).forEach(key => allKnownVariables.add(key));
    }
  });

  // Remove all known variables from inline styles
  allKnownVariables.forEach(varName => {
    docEl.style.removeProperty(varName);
  });


  if (mode === 'dark') {
    // Add dark mode intensity class. This class in globals.css sets base dark vars.
    docEl.classList.add('dark', `dark-${intensity}`);
    
    // Apply theme-specific dark variables. These will override any vars set by dark-[intensity] class.
    if (theme.darkVariables) {
      Object.entries(theme.darkVariables).forEach(([property, value]) => {
        if (value !== undefined) { 
             docEl.style.setProperty(property, value as string);
        }
      });
    }
  } else { // mode === 'light'
    // Apply the selected color theme's light mode variables as inline styles.
    Object.entries(theme.variables).forEach(([property, value]) => {
      docEl.style.setProperty(property, value);
    });
  }
}

/**
 * @deprecated This function is for internal use or simplified light-mode application.
 * Use applyAppearance for comprehensive theme and mode setting.
 */
export function applyTheme(themeName: string): void {
   if (typeof window === 'undefined') return;
   // This function now only applies light mode variables of the current theme.
   // Dark mode variables are handled by applyAppearance.
   const theme = themes.find(t => t.name === themeName) || themes.find(t => t.name === DEFAULT_THEME_NAME);
   if (theme) {
     const root = document.documentElement;
     // Clear previous theme variables first
     const allKnownVariables: Set<string> = new Set();
      themes.forEach(th => {
        Object.keys(th.variables).forEach(key => allKnownVariables.add(key));
        if (th.darkVariables) {
          Object.keys(th.darkVariables).forEach(key => allKnownVariables.add(key));
        }
      });
      allKnownVariables.forEach(varName => {
        root.style.removeProperty(varName);
      });
      // Apply new light mode variables
     Object.entries(theme.variables).forEach(([property, value]) => {
       root.style.setProperty(property, value);
     });
   }
}

