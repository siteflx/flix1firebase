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
      <div className={cn("relative overflow-hidden rounded-md bg-muted shadow-lg", aspectClass)}>
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          width={aspectRatio === 'portrait' ? 270 : 400}
          height={aspectRatio === 'portrait' ? 480 : 225}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-ai-hint={video.genre}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
        
        {rank ? (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity transform-gpu group-hover:scale-110" />
            </div>
            <div className="absolute top-0 left-0 flex items-start">
               <span className="text-8xl font-bold text-white/80 drop-shadow-lg -ml-1 -mt-2" style={{ WebkitTextStroke: '2px rgba(0,0,0,0.2)' }}>{rank}</span>
            </div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity transform-gpu group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                 <p className="text-white text-sm font-semibold truncate">{video.title}</p>
            </div>
          </>
        )}

      </div>
    </Link>
  );
}
