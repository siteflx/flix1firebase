
import Link from 'next/link';
import Image from 'next/image';
import { type Video } from '@/lib/placeholder-data';
import { PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoThumbnailProps {
  video: Video;
  aspectRatio: 'portrait' | 'landscape';
  rank?: number;
}

export function VideoThumbnail({ video, aspectRatio, rank }: VideoThumbnailProps) {
  const aspectClass = aspectRatio === 'portrait' ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <Link href={`/watch/${video.id}`} className="block group" aria-label={`Watch ${video.title}`}>
       <div className="relative overflow-hidden rounded-md bg-muted shadow-lg group">
        <div className={cn("relative w-full", aspectClass)}>
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={aspectRatio === 'portrait' ? 270 : 480}
            height={aspectRatio === 'portrait' ? 480 : 270}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            data-ai-hint={video.genre}
          />
           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
        
            <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity transform-gpu group-hover:scale-110" />
            </div>

            {rank && (
                <div className="absolute -bottom-4 -left-2 w-full h-full flex items-end">
                    <span className="text-6xl font-black text-white drop-shadow-lg" style={{ WebkitTextStroke: '2px black' }}>
                        {rank}
                    </span>
                </div>
            )}
        </div>
      </div>
    </Link>
  );
}
