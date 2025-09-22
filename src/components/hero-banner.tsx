import Image from 'next/image';
import { Button } from './ui/button';
import { PlayCircle, Info } from 'lucide-react';

export function HeroBanner() {
  return (
    <div className="relative h-[56.25vw] max-h-[600px] w-full">
      <Image
        src="https://picsum.photos/seed/hero/1600/900"
        alt="Hero banner"
        fill
        className="object-cover"
        data-ai-hint="movie scene"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-12 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
          Filme em Destaque
        </h1>
        <p className="mt-2 md:mt-4 text-sm md:text-base text-white/90 drop-shadow-md hidden md:block">
          Esta é uma breve sinopse do filme ou série em destaque. Uma descrição que desperta o interesse e convida à ação.
        </p>
        <div className="mt-4 flex gap-2">
          <Button size="lg">
            <PlayCircle className="mr-2" />
            Assistir
          </Button>
          <Button size="lg" variant="secondary">
            <Info className="mr-2" />
            Mais informações
          </Button>
        </div>
      </div>
    </div>
  );
}
