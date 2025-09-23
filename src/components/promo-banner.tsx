
"use client";

import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import { useSubscriptionPopup } from '@/hooks/use-subscription-popup';

export function PromoBanner() {
  const { setIsOpen } = useSubscriptionPopup();

  return (
    <section className="w-full">
      <div className="relative aspect-[4/1] w-full overflow-hidden rounded-lg bg-black">
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
            Much More Than Entertainment, An Experience
          </h2>
          <p className="mt-2 max-w-md text-sm md:text-base text-white/90 drop-shadow-md">
            Explore hot, varied, and unrestricted content with a premium subscription.
          </p>
          <Button size="lg" className="mt-4" onClick={() => setIsOpen(true)} variant="primary">
            <Sparkles className="mr-2" />
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
}
