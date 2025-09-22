import { type CarouselCategory } from '@/lib/placeholder-data';
import { VideoThumbnail } from './video-thumbnail';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function VideoCarousel({ category }: { category: CarouselCategory }) {
  if (!category.videos || category.videos.length === 0) {
    return null;
  }

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
          {category.videos.map((video) => (
            <CarouselItem key={video.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[12.5%] pl-2">
              <VideoThumbnail video={video} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14 hidden md:flex" />
        <CarouselNext className="mr-14 hidden md:flex" />
      </Carousel>
    </section>
  );
}
