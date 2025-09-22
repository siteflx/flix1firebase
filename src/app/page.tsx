"use client";

import { Header } from '@/components/header';
import { VideoCarousel } from '@/components/video-carousel';
import { CAROUSEL_CATEGORIES } from '@/lib/placeholder-data';
import { HeroBanner } from '@/components/hero-banner';
import { useAuth } from '@/hooks/use-auth.tsx';
import { useEffect, useState } from 'react';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading || !user) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background">
        <p>Carregando...</p>
      </div>
    );
  }

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
