
// src/app/top-creators/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSubscriptionPopup } from '@/hooks/use-subscription-popup';

const newCreatorImages = [
  'https://storage.googleapis.com/audiossswe/5.1.png',
  'https://storage.googleapis.com/audiossswe/5.3.png',
  'https://storage.googleapis.com/audiossswe/5.4.png',
  'https://storage.googleapis.com/audiossswe/5.png',
  'https://storage.googleapis.com/audiossswe/5.6.png',
  'https://storage.googleapis.com/audiossswe/5.6.png'
];

const lockedItems = newCreatorImages.map((url, i) => ({
    id: i + 1,
    imageUrl: url,
}));

function LockedContentCard({ imageUrl }: { imageUrl: string }) {
    const { setIsOpen } = useSubscriptionPopup();
    return (
        <div className="w-full max-w-md">
            <div onClick={() => setIsOpen(true)} className="block group w-full cursor-pointer">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-lg">
                <Image
                    src={imageUrl}
                    alt="Conteúdo Premium"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale transition-transform duration-300 ease-in-out group-hover:scale-105"
                    data-ai-hint="woman fashion"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <Lock className="h-10 w-10 drop-shadow-lg" />
                    <h3 className="mt-4 text-xl font-bold drop-shadow-lg">
                    Assinatura Premium
                    </h3>
                    <p className="mt-1 text-sm text-white/90 drop-shadow-md text-center">
                    Desbloqueie este e todo o conteúdo com um de nossos planos.
                    </p>
                    <Button variant="secondary" className="mt-6" onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}>
                        Ver Planos
                    </Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default function TopCreatorsPage() {
  const router = useRouter();

  return (
    <main className="flex-1 p-4 md:p-8">
       <div className="mb-6">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="pl-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Início
          </Button>
        </div>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center md:text-left">
          Top Creators
        </h1>
        <div className="flex flex-col items-center gap-8">
          {lockedItems.map((item) => (
            <LockedContentCard key={item.id} imageUrl={item.imageUrl} />
          ))}
        </div>
      </div>
    </main>
  );
}
