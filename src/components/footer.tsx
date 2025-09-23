import Link from 'next/link';
import { Clapperboard } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <Clapperboard className="h-6 w-6 text-primary" />
          <span className="font-bold">Flick Carousel</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:gap-6">
          <Link href="/terms-of-service" className="hover:text-primary hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:text-primary hover:underline">
            Privacy Policy
          </Link>
        </nav>
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} Flick Carousel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
