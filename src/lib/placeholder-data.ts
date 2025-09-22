
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
  { id: 'action', name: 'Ação e Aventura', hint: 'action movie' },
  { id: 'comedy', name: 'Comédias', hint: 'comedy movie' },
];

const newActionThumbnails = [
  'https://storage.googleapis.com/projeto--02/screenshot-20250919222217.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919224041.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919224058.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919224122.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919225148.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919225223.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919225324.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919225438.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919225354.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919225424.png',
];

const newComedyThumbnails = [
  'https://storage.googleapis.com/projeto--02/screenshot-20250919223919.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919223939.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919223957.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919224023.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919224041.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919224058.png',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919224122.png',
  'https://storage.googleapis.com/projeto--02/517597625_17966586965924010_6810943734837562840_n.jpg',
  'https://storage.googleapis.com/projeto--02/screenshot-20250919224041.png',
  'https://storage.googleapis.com/projeto--02/Screenshot_20250916_225546_Chrome%20(1).jpg',
];


const newActionVideos = [
  'https://videos.meetlove.site/video%201.mp4',
  'https://videos.meetlove.site/video%202.mp4',
  'https://videos.meetlove.site/video%203.mp4',
  'https://videos.meetlove.site/video%204.mp4',
  'https://videos.meetlove.site/video%205.mp4',
  'https://videos.meetlove.site/video%206.mp4',
  'https://videos.meetlove.site/video%207.mp4',
  'https://videos.meetlove.site/video%208.mp4',
  'https://videos.meetlove.site/video%209.mp4',
  'https://videos.meetlove.site/video%2010.mp4',
];

const generateVideos = (genre: {id: string, name: string, hint: string}, count: number): Video[] => {
  return Array.from({ length: count }, (_, i) => {
    const videoId = `${genre.id}-${i + 1}`;
    
    let thumbnailUrl = `https://picsum.photos/seed/${videoId}/270/480`;
    let videoUrl = `https://picsum.photos/seed/${videoId}/1280/720`;

    if (genre.id === 'action' && i < newActionThumbnails.length) {
      thumbnailUrl = newActionThumbnails[i];
      if (i < newActionVideos.length) {
        videoUrl = newActionVideos[i];
      }
    } else if (genre.id === 'comedy' && i < newComedyThumbnails.length) {
      thumbnailUrl = newComedyThumbnails[i];
      // Mantém o vídeo de placeholder para comédia por enquanto
    }
    
    return {
      id: videoId,
      title: `${genre.name} Filme ${i + 1}`,
      description: `Esta é uma descrição de espaço reservado para ${genre.name} Filme ${i + 1}.`,
      thumbnailUrl: thumbnailUrl,
      videoUrl: videoUrl,
      duration: `${Math.floor(Math.random() * 2) + 1}h ${Math.floor(Math.random() * 60)}m`,
      genre: genre.hint,
    };
  });
};

export const CAROUSEL_CATEGORIES: CarouselCategory[] = genres.map((genre) => ({
  id: genre.id,
  title: genre.name,
  videos: generateVideos(genre, 10),
}));

export const ALL_VIDEOS: Video[] = CAROUSEL_CATEGORIES.flatMap(category => category.videos);

export function findVideoById(id: string): Video | undefined {
  if (!id || typeof id !== 'string') {
    return undefined;
  }

  const video = ALL_VIDEOS.find((v) => v.id === id);
  if (video) return video;

  // Gracefully handle malformed or non-existent recommendation IDs
  if (id.startsWith('rec-')) {
    const recId = id.split('-')[1];
    if (!recId || isNaN(parseInt(recId, 10))) {
        return undefined;
    }
    return {
      id: id,
      title: `Recomendado Para Você: Filme ${recId}`,
      description: 'Uma recomendação especial para você, com base no seu histórico de visualização.',
      thumbnailUrl: `https://picsum.photos/seed/${id}/270/480`,
      videoUrl: `https://picsum.photos/seed/${id}/1280/720`,
      duration: '1h 55m',
      genre: 'recommendation',
    }
  }

  return undefined;
}
