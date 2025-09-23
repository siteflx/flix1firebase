// src/app/gallery/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import placeholderData from '@/lib/placeholder-images.json';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  { id: 'gallery-1', imageKey: 'gallery-image-1' },
  { id: 'gallery-2', imageKey: 'gallery-image-2' },
  { id: 'gallery-3', imageKey: 'gallery-image-3' },
  { id: 'gallery-4', imageKey: 'gallery-image-4' },
  { id: 'gallery-5', imageKey: 'gallery-image-5' },
  { id: 'gallery-6', imageKey: 'gallery-image-6' },
];

function GalleryCard({ imageKey }: { imageKey: string }) {
  const imageInfo = placeholderData.placeholderImages.find(img => img.id === imageKey);
  const imageUrl = imageInfo?.imageUrl || `https://picsum.photos/seed/${imageKey}/400/600`;
  const imageHint = imageInfo?.imageHint || 'gallery photo';

  return (
    <Link href="#" className="block group">
      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-lg bg-muted shadow-lg">
        <Image
          src={imageUrl}
          alt="Foto da Galeria"
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    </Link>
  );
}

export default function GalleryPage() {
  return (
    <main className="flex-1 p-4 md:p-8">
       <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            className="pl-1"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para o Início
            </Link>
          </Button>
        </div>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Galeria
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <GalleryCard key={image.id} imageKey={image.imageKey} />
          ))}
        </div>
      </div>
    </main>
  );
}
