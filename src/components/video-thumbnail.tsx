import Link from 'next/link';
import Image from 'next/image';
import { type Video } from '@/lib/placeholder-data';
import { PlayCircle } from 'lucide-react';

export function VideoThumbnail({ video }: { video: Video }) {
  return (
    <Link href={`/watch/${video.id}`} className="block group" aria-label={`Watch ${video.title}`}>
      <div className="relative overflow-hidden rounded-md aspect-[9/16] bg-muted shadow-lg">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          width={270}
          height={480}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-ai-hint={video.genre}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-12 h-12 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity transform-gpu group-hover:scale-110" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
             <p className="text-white text-sm font-semibold truncate">{video.title}</p>
        </div>
      </div>
    </Link>
  );
}
