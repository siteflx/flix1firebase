
import Image from 'next/image';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import { Button } from './ui/button';

export function PremiumContentPromo() {
  const imageUrl = 'https://storage.googleapis.com/audiossswe/foto%201.png';

  return (
    <section className="w-full flex justify-center">
      <Link href="/subscription" className="block group w-full max-w-lg">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-lg">
          <Image
            src={imageUrl}
            alt="Conteúdo Premium"
            fill
            className="object-cover grayscale transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint="woman portrait"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <Lock className="h-12 w-12 drop-shadow-lg" />
            <h3 className="mt-4 text-2xl font-bold drop-shadow-lg">
              Assinatura Premium
            </h3>
            <p className="mt-1 text-sm text-white/90 drop-shadow-md">
              Desbloqueie todo o conteúdo com um de nossos planos.
            </p>
            <Button variant="secondary" className="mt-6">
                Ver Planos
            </Button>
          </div>
        </div>
      </Link>
    </section>
  );
}
