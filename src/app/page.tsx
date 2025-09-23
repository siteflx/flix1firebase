
"use client";

import { useSearchParams } from 'next/navigation';
import { VideoCarousel } from '@/components/video-carousel';
import { CAROUSEL_CATEGORIES } from '@/lib/placeholder-data';
import { HeroBanner } from '@/components/hero-banner';
import { useAuth } from '@/hooks/use-auth.tsx';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';
import { PromoBanner } from '@/components/promo-banner';
import { TopCreatorsCarousel } from '@/components/top-creators-carousel';
import { FeaturedCreatorsCarousel } from '@/components/featured-creators-carousel';
import { PremiumContentPromo } from '@/components/premium-content-promo';
import { SecondaryHeroBanner } from '@/components/secondary-hero-banner';
import { SubscriptionPopup } from '@/components/subscription-popup';

function HomePageContent() {
  const { user, loading } = useAuth();
  const searchParams = useSearchParams();
  const selectedCategoryId = searchParams.get('category');
  
  const visibleCategories = selectedCategoryId
    ? CAROUSEL_CATEGORIES.filter(cat => cat.id === selectedCategoryId)
    : CAROUSEL_CATEGORIES;


  if (loading || !user) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background">
        <Spinner className="h-10 w-10" />
      </div>
    );
  }

  return (
      <div className="flex-1 overflow-x-hidden">
        <SubscriptionPopup />
        {!selectedCategoryId && <HeroBanner />}
        <main className="flex-1 space-y-12 px-4 py-8 md:px-8">
          {visibleCategories.map((category) => (
            <div key={category.id}>
              <VideoCarousel category={category} thumbnailAspectRatio="portrait" />
              {category.id === 'action' && !selectedCategoryId && (
                 <div className="pt-12 space-y-12">
                   <FeaturedCreatorsCarousel />
                   <PremiumContentPromo />
                 </div>
              )}
              {category.id === 'comedy' && !selectedCategoryId && (
                <div className="pt-12 space-y-12">
                  <PromoBanner />
                  <TopCreatorsCarousel />
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">Destaques da Semana</h2>
                    <SecondaryHeroBanner />
                     <div className="text-center pt-8">
                        <h3 className="text-2xl font-bold tracking-tight">Junte-se à Nossa Comunidade e Sinta o Prazer da Liberdade</h3>
                        <p className="text-muted-foreground mt-2">Acesse tudo sem restrições e aproveite cada momento ao máximo.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="flex min-h-screen w-full flex-col items-center justify-center bg-background"><Spinner className="h-10 w-10" /></div>}>
      <HomePageContent />
    </Suspense>
  );
}
