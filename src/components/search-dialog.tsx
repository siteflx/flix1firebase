
"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ALL_VIDEOS, Video } from '@/lib/placeholder-data';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';

type SearchContextType = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <SearchContext.Provider value={{ isOpen, setOpen }}>
      {children}
      <SearchDialog />
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

function SearchDialog() {
  const { isOpen, setOpen } = useSearch();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Video[]>([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      const lowercasedQuery = debouncedQuery.toLowerCase();
      const filteredVideos = ALL_VIDEOS.filter((video) =>
        video.title.toLowerCase().includes(lowercasedQuery)
      );
      setResults(filteredVideos);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  const handleResultClick = () => {
    setOpen(false);
    setQuery('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[625px] p-0 gap-0">
        <DialogHeader className="p-4 border-b">
           <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for movies or series..."
              className="border-none focus-visible:ring-0 shadow-none text-base"
            />
          </div>
        </DialogHeader>
        <div className="p-4 max-h-[400px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {results.map((video) => (
                <Link
                  key={video.id}
                  href={`/watch/${video.id}`}
                  className="flex items-center gap-4 p-2 -mx-2 rounded-lg hover:bg-accent"
                  onClick={handleResultClick}
                >
                  <div className="relative w-24 h-14 flex-shrink-0">
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-semibold truncate">{video.title}</p>
                    <p className="text-sm text-muted-foreground truncate">{video.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            debouncedQuery && <p className="text-center text-muted-foreground py-8">No results found.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
