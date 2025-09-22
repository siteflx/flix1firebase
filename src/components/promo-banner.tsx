
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';

export function PromoBanner() {
  const promoImage = placeholderData.placeholderImages.find(img => img.id === 'promo-banner');
  const imageUrl = promoImage?.imageUrl || 'https://picsum.photos/seed/promo-banner/1200/300';
  const imageHint = promoImage?.imageHint || 'movie collection';

  return (
    <section className="w-full">
      <div className="relative aspect-[4/1] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={imageUrl}
          alt="Promoção especial"
          fill
          className="object-cover"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
            Sua Maratona Começa Agora
          </h2>
          <p className="mt-2 max-w-md text-sm md:text-base text-white/90 drop-shadow-md">
            Tenha acesso ilimitado a milhares de títulos. Assine hoje e aproveite uma oferta especial no plano anual.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/subscription">
              <Sparkles className="mr-2" />
              Assine Agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
