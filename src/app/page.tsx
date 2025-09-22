
"use client";

import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/header';
import { VideoCarousel } from '@/components/video-carousel';
import { CAROUSEL_CATEGORIES, CarouselCategory } from '@/lib/placeholder-data';
import { HeroBanner } from '@/components/hero-banner';
import { useAuth } from '@/hooks/use-auth.tsx';
import { NavigationSidebar } from '@/components/navigation-sidebar';
import { useEffect, useState, Suspense } from 'react';
import { Spinner } from '@/components/ui/spinner';

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
    <div className="flex min-h-screen w-full">
      <NavigationSidebar />
      <div className="flex-1">
        <Header />
        {!selectedCategoryId && <HeroBanner />}
        <main className="flex-1 space-y-12 overflow-x-hidden px-4 py-8 md:px-8">
          {visibleCategories.map((category) => (
            <VideoCarousel key={category.id} category={category} thumbnailAspectRatio="portrait" />
          ))}
        </main>
      </div>
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
