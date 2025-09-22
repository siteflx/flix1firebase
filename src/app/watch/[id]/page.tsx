import { Header } from '@/components/header';
import { findVideoById, type Video } from '@/lib/placeholder-data';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

export default function WatchPage({ params }: { params: { id: string } }) {
  const video = findVideoById(params.id);

  if (!video) {
    notFound();
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-8">
        <div className="mb-4">
          <Button asChild variant="ghost" className="pl-1">
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to browse
            </Link>
          </Button>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
          <Image
            src={video.videoUrl}
            alt={`Player for ${video.title}`}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
            data-ai-hint={video.genre}
            priority
          />
        </div>
        <div className="mt-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{video.title}</h1>
          <p className="mt-2 text-base md:text-lg text-foreground/80">{video.description}</p>
        </div>
      </main>
    </div>
  );
}
