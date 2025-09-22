import { Header } from '@/components/header';
import { VideoCarousel } from '@/components/video-carousel';
import { CAROUSEL_CATEGORIES, type CarouselCategory, type Video } from '@/lib/placeholder-data';
import { generatePersonalizedRecommendations } from '@/ai/flows/personalized-video-recommendations';

export default async function Home() {
  const userViewingHistory = "The Matrix, Inception, Blade Runner 2049, Interstellar, John Wick";
  
  let recommendations: Video[] = [];
  try {
    const aiOutput = await generatePersonalizedRecommendations({
      userViewingHistory,
      numberOfRecommendations: 10,
    });
    recommendations = aiOutput.recommendations.map((title, index) => ({
      id: `rec-${index + 1}`,
      title,
      description: 'A special recommendation for you, based on your viewing history.',
      thumbnailUrl: `https://picsum.photos/seed/rec${index + 1}/400/225`,
      videoUrl: `https://picsum.photos/seed/rec${index + 1}/1280/720`,
      duration: '1h 55m',
      genre: 'recommendation',
    }));
  } catch (error) {
    console.error("Failed to generate AI recommendations:", error);
    // You could show a toast or a message to the user here.
    // For this example, we'll just continue without the recommendations.
  }

  const recommendationCategory: CarouselCategory = {
    id: 'recommendations',
    title: 'Recommended for You',
    videos: recommendations,
  };
  
  const allCategories = recommendations.length > 0 ? [recommendationCategory, ...CAROUSEL_CATEGORIES] : CAROUSEL_CATEGORIES;

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 space-y-12 overflow-x-hidden px-4 py-8 md:px-8">
        {allCategories.map((category) => (
          <VideoCarousel key={category.id} category={category} />
        ))}
      </main>
    </div>
  );
}
