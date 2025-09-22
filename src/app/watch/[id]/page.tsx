
import { findVideoById } from '@/lib/placeholder-data';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { Comments } from '@/components/comments';

export default function WatchPage({ params }: { params: { id: string } }) {
  const video = findVideoById(params.id);

  if (!video) {
    notFound();
  }

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="mb-4">
        <Button asChild variant="ghost" className="pl-1">
          <Link href="/" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Voltar para a navegação
          </Link>
        </Button>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <div className="aspect-[9/16] w-full max-w-[340px] mx-auto overflow-hidden rounded-lg bg-black sm:max-w-[400px]">
          <video
            src={video.videoUrl}
            controls
            autoPlay
            controlsList="nodownload"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="mt-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{video.title}</h1>
        <p className="mt-2 text-base md:text-lg text-foreground/80">{video.description}</p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <Comments />
      </div>
    </main>
  );
}
