// src/components/layout/footer.tsx
import { Wind, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto py-8 px-4 text-center text-sm text-muted-foreground">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <Wind className="h-5 w-5 text-primary" />
          <p>&copy; {currentYear} Hanuman Leela. All rights reserved.</p>
        </div>
        <p className="flex items-center justify-center">
          Dedicated to the divine strength and devotion of Sri Hanuman.
          <Heart className="h-4 w-4 ml-1 text-red-500" />
        </p>
        <p className="mt-2 text-xs">
          This portal is for spiritual and educational purposes only.
        </p>
      </div>
    </footer>
  );
}
