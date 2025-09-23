
"use client"

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";
import { Button } from './ui/button';
import { PlayCircle, Info } from 'lucide-react';
import { useSubscriptionPopup } from '@/hooks/use-subscription-popup';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const bannerItems = [
  {
    title: 'Visuais Impactantes',
    description: 'Experimente a força da narrativa em preto e branco.',
    imageUrl: 'https://storage.googleapis.com/audiossswe/5.7.png',
    imageHint: 'woman artistic',
  },
  {
    title: 'Momentos Atemporais',
    description: 'A ausência de cor revela a verdadeira essência de cada cena.',
    imageUrl: 'https://storage.googleapis.com/audiossswe/5.8.png',
    imageHint: 'woman style',
  },
  {
    title: 'Estilo e Sofisticação',
    description: 'Uma coleção exclusiva que celebra a beleza da fotografia monocromática.',
    imageUrl: 'https://storage.googleapis.com/audiossswe/5.9.png',
    imageHint: 'fashion model',
  },
];


export function SecondaryHeroBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const { setIsOpen } = useSubscriptionPopup();

  return (
    <div className="relative w-full">
      <Carousel 
        plugins={[plugin.current]} 
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {bannerItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[56.25vw] max-h-[600px] w-full">
                <Image
                  src={item.imageUrl}
                  alt={`Hero banner: ${item.title}`}
                  fill
                  className="object-cover grayscale"
                  data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-12 w-full md:w-2/3 lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{item.title}</h2>
                    <p className="mt-2 max-w-md text-sm md:text-base text-white/90 drop-shadow-md">{item.description}</p>
                  <div className="mt-4 flex gap-2">
                    <Button size="lg" asChild>
                      <Link href="/top-creators">
                        <PlayCircle className="mr-2" />
                        Assistir
                      </Link>
                    </Button>
                    <Button size="lg" variant="secondary" onClick={() => setIsOpen(true)}>
                      <Info className="mr-2" />
                      Mais informações
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
      </Carousel>
    </div>
  );
}
