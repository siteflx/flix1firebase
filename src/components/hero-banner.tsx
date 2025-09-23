
"use client"

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";

import { Button } from './ui/button';
import { PlayCircle, Info } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const bannerItems = [
  {
    title: 'Novos Olhares, Novas Histórias',
    description: 'Explore narrativas que capturam a essência de momentos únicos e inesquecíveis.',
    imageUrl: 'https://storage.googleapis.com/audiossswe/foto%202.png',
    imageHint: 'woman portrait',
  },
  {
    title: 'A Beleza em Cada Detalhe',
    description: 'Descubra a arte por trás das câmeras com uma qualidade de imagem que vai te surpreender.',
    imageUrl: 'https://storage.googleapis.com/audiossswe/foto%202.png',
    imageHint: 'cinematic scene',
  },
  {
    title: 'Uma Janela para Outros Mundos',
    description: 'Deixe-se levar por histórias que transportam você para novas realidades e emoções.',
    imageUrl: 'https://storage.googleapis.com/audiossswe/foto%202.png',
    imageHint: 'dramatic look',
  },
];


export function HeroBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

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
                  className="object-cover"
                  data-ai-hint={item.imageHint}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-12 w-full md:w-2/3 lg:w-1/2">
                  <div className="mt-4 flex gap-2">
                    <Button size="lg" asChild>
                      <Link href="/top-creators">
                        <PlayCircle className="mr-2" />
                        Assistir
                      </Link>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                      <Link href="/subscription">
                        <Info className="mr-2" />
                        Mais informações
                      </Link>
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
