
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
        {!selectedCategoryId && <HeroBanner />}
        <main className="flex-1 space-y-12 px-4 py-8 md:px-8">
          {visibleCategories.map((category) => (
            <div key={category.id}>
              <VideoCarousel category={category} thumbnailAspectRatio="portrait" />
              {category.id === 'comedy' && !selectedCategoryId && (
                <div className="pt-12 space-y-12">
                  <PromoBanner />
                  <TopCreatorsCarousel />
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
