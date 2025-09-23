
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

const creators = [
  { id: 'creator-1' },
  { id: 'creator-2' },
  { id: 'creator-3' },
  { id: 'creator-4' },
  { id: 'creator-5' },
  { id: 'creator-6' },
  { id: 'creator-7' },
];

const sharedImageUrl = "https://storage.googleapis.com/audiossswe/foto%203%20(6).png";
const imageHint = "woman fashion";

function CreatorCard() {
  return (
    <Link href="/subscription" className="block group">
      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-lg bg-muted shadow-lg">
        <Image
          src={sharedImageUrl}
          alt="Conteúdo Premium"
          fill
          className="object-cover grayscale transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <Lock className="h-10 w-10 drop-shadow-lg" />
            <Button variant="default" className="mt-6">
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
              <CreatorCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14 hidden md:flex" />
        <CarouselNext className="mr-14 hidden md:flex" />
      </Carousel>
    </section>
  );
}
