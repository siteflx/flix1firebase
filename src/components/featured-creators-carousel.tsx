
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
import placeholderData from '@/lib/placeholder-images.json';
import { ChevronRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSubscriptionPopup } from '@/hooks/use-subscription-popup';

const creators = [
  {
    id: 'creator-1',
    name: 'Creator 1',
    handle: '@creator1',
    imageKey: 'featured-creator-1',
  },
  {
    id: 'creator-2',
    name: 'Creator 2',
    handle: '@creator2',
    imageKey: 'featured-creator-2',
  },
  {
    id: 'creator-3',
    name: 'Creator 3',
    handle: '@creator3',
    imageKey: 'featured-creator-3',
  },
  {
    id: 'creator-4',
    name: 'Creator 4',
    handle: '@creator4',
    imageKey: 'featured-creator-4',
  },
  {
    id: 'creator-5',
    name: 'Creator 5',
    handle: '@creator5',
    imageKey: 'featured-creator-5',
  },
  {
    id: 'creator-6',
    name: 'Creator 6',
    handle: '@creator6',
    imageKey: 'featured-creator-6',
  },
  {
    id: 'creator-7',
    name: 'Creator 7',
    handle: '@creator7',
    imageKey: 'placeholder-creator-7',
  },
];

interface CreatorCardProps {
  name: string;
  handle: string;
  imageKey: string;
}

function CreatorCard({ name, handle, imageKey }: CreatorCardProps) {
  const { setIsOpen } = useSubscriptionPopup();
  const creatorImage = placeholderData.placeholderImages.find(img => img.id === imageKey);
  // Use a generic placeholder if the specific image is not found
  const imageUrl = creatorImage?.imageUrl || `https://picsum.photos/seed/${imageKey}/400/600`;
  const imageHint = creatorImage?.imageHint || 'person portrait';

  return (
    <div onClick={() => setIsOpen(true)} className="block group cursor-pointer">
      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-lg bg-muted shadow-lg">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.6vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
    </div>
  );
}

export function FeaturedCreatorsCarousel() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Most Watched Highlights</h2>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" /> 
                <span>+8,786</span>
            </div>
        </div>
        <Link href="/creators" className="flex items-center text-sm text-muted-foreground hover:text-primary">
            <span>View All</span>
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
          {creators.map((creator, index) => (
            <CarouselItem key={creator.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-2">
              <CreatorCard
                name={creator.name}
                handle={creator.handle}
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
