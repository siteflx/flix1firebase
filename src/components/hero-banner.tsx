// @ts-nocheck
"use client"

import * as React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { PlayCircle, Info } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const bannerItems = [
  {
    title: 'Filme em Destaque 1',
    description: 'Esta é uma breve sinopse do filme ou série em destaque. Uma descrição que desperta o interesse e convida à ação.',
    imageUrl: 'https://picsum.photos/seed/hero/1600/900',
    imageHint: 'movie scene',
  },
  {
    title: 'Filme em Destaque 2',
    description: 'Uma nova aventura espera por você. Mergulhe em um mundo de fantasia e emoção.',
    imageUrl: 'https://picsum.photos/seed/hero2/1600/900',
    imageHint: 'fantasy landscape',
  },
  {
    title: 'Filme em Destaque 3',
    description: 'O suspense vai prender você do início ao fim. Você consegue resolver o mistério?',
    imageUrl: 'https://picsum.photos/seed/hero3/1600/900',
    imageHint: 'mystery thriller',
  },
    {
    title: 'Filme em Destaque 4',
    description: 'Uma história de amor que vai tocar seu coração e ficar na memória.',
    imageUrl: 'https://picsum.photos/seed/hero4/1600/900',
    imageHint: 'romance couple',
  },
];

export function HeroBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full"
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
                className="object-cover"
                data-ai-hint={item.imageHint}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-12 w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                  {item.title}
                </h1>
                <p className="mt-2 md:mt-4 text-sm md:text-base text-white/90 drop-shadow-md hidden md:block">
                  {item.description}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button size="lg">
                    <PlayCircle className="mr-2" />
                    Assistir
                  </Button>
                  <Button size="lg" variant="secondary">
                    <Info className="mr-2" />
                    Mais informações
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
    </Carousel>
  );
}