// src/components/layout/footer.tsx
import Link from 'next/link';
import { Wind } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors group">
              <Wind className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-lg tracking-tight uppercase">Hanuman Leela</span>
            </Link>
            <p className="text-sm text-muted-foreground italic font-light">
              Infinite Devotion. Unshakable Strength.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { label: 'Divine Feed', href: '/feed' },
              { label: 'Sacred Kandas', href: '/ramayana' },
              { label: 'Character Gallery', href: '/characters' },
              { label: 'Sacred Mantras', href: '/mantras' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold">
          <p>© {currentYear} Hanuman Leela. All rights reserved.</p>
          <p className="hidden md:block text-primary/40">Jai Shri Ram</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/settings" className="hover:text-primary transition-colors">Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
