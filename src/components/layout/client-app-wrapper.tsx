'use client';

import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts';
import type { ReactNode } from 'react';

/**
 * A wrapper component to initialize client-side hooks like keyboard shortcuts.
 */
export function ClientAppWrapper({ children }: { children: ReactNode }) {
  useKeyboardShortcuts();
  return <>{children}</>;
}
