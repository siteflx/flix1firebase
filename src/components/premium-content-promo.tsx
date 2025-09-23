
"use client"

import Image from 'next/image';
import { Lock } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useSubscriptionPopup } from '@/hooks/use-subscription-popup';
import Link from 'next/link';

const promoItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

const imageUrl = 'https://storage.googleapis.com/audiossswe/foto%201.png';

function PromoCard() {
    const { setIsOpen } = useSubscriptionPopup();

    return (
        <div onClick={() => setIsOpen(true)} className="block group w-full cursor-pointer">
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
                    <Lock className="h-10 w-10 drop-shadow-lg" />
                    <h3 className="mt-4 text-xl font-bold drop-shadow-lg">
                    Assinatura Premium
                    </h3>
                    <p className="mt-1 text-sm text-white/90 drop-shadow-md">
                    Desbloqueie todo o conteúdo com um de nossos planos.
                    </p>
                    <Button variant="secondary" className="mt-6" onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}>
                        Ver Planos
                    </Button>
                </div>
            </div>
        </div>
    )
}

export function PremiumContentPromo() {
  return (
    <section className="w-full">
        <Carousel
            opts={{
            align: 'start',
            loop: true,
            }}
            className="w-full max-w-lg mx-auto"
        >
            <CarouselContent>
            {promoItems.map((item) => (
                <CarouselItem key={item.id}>
                    <PromoCard />
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="ml-2 hidden sm:flex" />
            <CarouselNext className="mr-2 hidden sm:flex" />
        </Carousel>
    </section>
  );
}
