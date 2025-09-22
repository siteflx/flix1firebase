import { Header } from '@/components/header';
import { VideoCarousel } from '@/components/video-carousel';
import { CAROUSEL_CATEGORIES } from '@/lib/placeholder-data';
import { HeroBanner } from '@/components/hero-banner';

export default function Home() {
  // A geração de recomendações foi removida do carregamento da página para melhorar a velocidade.
  // Isso pode ser reativado em uma interação do lado do cliente, se necessário.
  
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <HeroBanner />
      <main className="flex-1 space-y-12 overflow-x-hidden px-4 py-8 md:px-8">
        {CAROUSEL_CATEGORIES.map((category) => (
          <VideoCarousel key={category.id} category={category} thumbnailAspectRatio="portrait" />
        ))}
      </main>
    </div>
  );
}
