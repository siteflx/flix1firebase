import { type CarouselCategory } from '@/lib/placeholder-data';
import { VideoThumbnail } from './video-thumbnail';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface VideoCarouselProps {
  category: CarouselCategory;
  thumbnailAspectRatio: 'portrait' | 'landscape';
}

export function VideoCarousel({ category, thumbnailAspectRatio }: VideoCarouselProps) {
  if (!category.videos || category.videos.length === 0) {
    return null;
  }

  const itemBasis = thumbnailAspectRatio === 'portrait'
    ? 'basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-[12.5%] 2xl:basis-[10%]'
    : 'basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6';

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">{category.title}</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: false,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {category.videos.map((video, index) => (
            <CarouselItem key={video.id} className={`${itemBasis} pl-2`}>
              <VideoThumbnail video={video} aspectRatio={thumbnailAspectRatio} rank={index + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14 hidden md:flex" />
        <CarouselNext className="mr-14 hidden md:flex" />
      </Carousel>
    </section>
  );
}
