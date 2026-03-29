'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Custom hook to handle global keyboard shortcuts for navigation.
 */
export function useKeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input, textarea, or contentEditable element
      const target = event.target as HTMLElement;
      const isTyping = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.isContentEditable;

      if (isTyping) return;

      // Meta keys shouldn't trigger these (e.g., Ctrl+S)
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      switch (event.key.toLowerCase()) {
        case 'h':
          router.push('/');
          break;
        case 'e':
          router.push('/explore');
          break;
        case 'm':
          router.push('/mantras');
          break;
        case 'p':
          router.push('/profile');
          break;
        case 's':
          router.push('/settings');
          break;
        case 'v':
          router.push('/events');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);
}
