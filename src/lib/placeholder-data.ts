export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}

export interface CarouselCategory {
  id: string;
  title: string;
  videos: Video[];
}

const genres = [
  { id: 'action', name: 'Action & Adventure', hint: 'action movie' },
  { id: 'comedy', name: 'Comedies', hint: 'comedy movie' },
  { id: 'drama', name: 'Dramas', hint: 'drama movie' },
  { id: 'scifi', name: 'Sci-Fi & Fantasy', hint: 'sci-fi' },
  { id: 'horror', name: 'Horror', hint: 'horror movie' },
  { id: 'thriller', name: 'Thrillers', hint: 'thriller movie' },
  { id: 'docu', name: 'Documentaries', hint: 'documentary' },
  { id: 'romance', name: 'Romance', hint: 'romance movie' },
  { id: 'anime', name: 'Anime', hint: 'anime' },
  { id: 'kids', name: 'Kids & Family', hint: 'kids cartoon' },
];

const generateVideos = (genre: {id: string, name: string, hint: string}, count: number): Video[] => {
  return Array.from({ length: count }, (_, i) => {
    const videoId = `${genre.id}-${i + 1}`;
    return {
      id: videoId,
      title: `${genre.name} Movie ${i + 1}`,
      description: `This is a placeholder description for ${genre.name} Movie ${i + 1}.`,
      thumbnailUrl: `https://picsum.photos/seed/${videoId}/270/480`,
      videoUrl: `https://picsum.photos/seed/${videoId}/1280/720`,
      duration: `${Math.floor(Math.random() * 2) + 1}h ${Math.floor(Math.random() * 60)}m`,
      genre: genre.hint,
    };
  });
};

export const CAROUSEL_CATEGORIES: CarouselCategory[] = genres.map(genre => ({
  id: genre.id,
  title: genre.name,
  videos: generateVideos(genre, 10),
}));

export const ALL_VIDEOS: Video[] = CAROUSEL_CATEGORIES.flatMap(category => category.videos);

export function findVideoById(id: string): Video | undefined {
  // Check static categories
  const video = ALL_VIDEOS.find((v) => v.id === id);
  if (video) return video;

  // If it's a recommendation, generate a placeholder
  if (id.startsWith('rec-')) {
    return {
      id: id,
      title: `Recommended For You: Film ${id.split('-')[1]}`,
      description: 'A special recommendation for you, based on your viewing history.',
      thumbnailUrl: `https://picsum.photos/seed/${id}/270/480`,
      videoUrl: `https://picsum.photos/seed/${id}/1280/720`,
      duration: '1h 55m',
      genre: 'recommendation',
    }
  }

  return undefined;
}
