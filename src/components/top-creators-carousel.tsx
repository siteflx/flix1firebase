
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import placeholderData from '@/lib/placeholder-images.json';
import { ChevronRight, Lock } from 'lucide-react';
import { Button } from './ui/button';

const creators = [
  {
    id: 'gaby-lopez',
    name: 'Gaby Lopez',
    handle: '@gabylopez',
    imageKey: 'creator-gaby',
  },
  {
    id: 'loiradocorno',
    name: 'Loiradocorno',
    handle: '@Loiradocorno',
    imageKey: 'creator-loira',
  },
  {
    id: 'aline-faria',
    name: 'Aline Faria',
    handle: '@AlineFaria',
    imageKey: 'creator-aline',
  },
  {
    id: 'carla-dias',
    name: 'Carla Dias',
    handle: '@carladias',
    imageKey: 'creator-carla',
  },
  {
    id: 'bruna-santos',
    name: 'Bruna Santos',
    handle: '@bruna.santos',
    imageKey: 'creator-bruna',
  },
  {
    id: 'fernanda-lima',
    name: 'Fernanda Lima',
    handle: '@fernandalima',
    imageKey: 'creator-fernanda',
  },
  {
    id: 'juliana-paes',
    name: 'Juliana Paes',
    handle: '@jupaes',
    imageKey: 'creator-juliana',
  },
];

interface CreatorCardProps {
  imageKey: string;
}

function CreatorCard({ imageKey }: CreatorCardProps) {
  const creatorImage = placeholderData.placeholderImages.find(img => img.id === imageKey);
  const imageUrl = creatorImage?.imageUrl || 'https://picsum.photos/seed/creator-placeholder/400/600';
  const imageHint = creatorImage?.imageHint || 'woman portrait';

  return (
    <Link href="/subscription" className="block group">
      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-lg bg-muted shadow-lg">
        <Image
          src={imageUrl}
          alt="Conteúdo Premium"
          fill
          className="object-cover grayscale transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <Lock className="h-10 w-10 drop-shadow-lg" />
            <Button variant="secondary" className="mt-6">
                Assinar
            </Button>
        </div>
      </div>
    </Link>
  );
}

export function TopCreatorsCarousel() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Top Creators</h2>
        <Link href="#" className="flex items-center text-sm text-muted-foreground hover:text-primary">
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
              <CreatorCard
                imageKey={creator.imageKey}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14 hidden md:flex" />
        <CarouselNext className="mr-14 hidden md:flex" />
      </Carousel>
    </section>
  );
}
