
"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronRight, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { useSubscriptionPopup } from '@/hooks/use-subscription-popup';

const newCreatorImages = [
  'https://storage.googleapis.com/audiossswe/5.1.png',
  'https://storage.googleapis.com/audiossswe/5.3.png',
  'https://storage.googleapis.com/audiossswe/5.4.png',
  'https://storage.googleapis.com/audiossswe/5.png',
  'https://storage.googleapis.com/audiossswe/5.6.png',
  'https://storage.googleapis.com/audiossswe/5.6.png'
];

// Vamos criar 9 criadores, mas ciclar pelas 6 imagens
const creators = Array.from({ length: 9 }, (_, i) => ({ 
  id: `creator-${i + 1}`,
  imageUrl: newCreatorImages[i % newCreatorImages.length],
}));

const imageHint = "woman fashion";

function CreatorCard({ imageUrl }: { imageUrl: string }) {
  const { setIsOpen } = useSubscriptionPopup();
  const externalLink = "https://www.youtube.com/watch?v=fuMYUadwFXM&list=RDTBvN4manm10&index=2";
  
  return (
    <div onClick={() => setIsOpen(true)} className="block group cursor-pointer">
      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-lg bg-muted shadow-lg">
        <Image
          src={imageUrl}
          alt="Conteúdo Premium"
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.6vw"
          className="object-cover grayscale transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <Lock className="h-10 w-10 drop-shadow-lg" />
            <Button variant="default" className="mt-6" asChild>
              <Link href={externalLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Assinar</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

export function TopCreatorsCarousel() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Top Creators</h2>
        <Link href="/top-creators" className="flex items-center text-sm text-muted-foreground hover:text-primary">
            <span>Ver todos</span>
            <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: false,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {creators.map((creator) => (
            <CarouselItem key={creator.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-2">
              <CreatorCard imageUrl={creator.imageUrl} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14 hidden md:flex" />
        <CarouselNext className="mr-14 hidden md:flex" />
      </Carousel>
    </section>
  );
}
