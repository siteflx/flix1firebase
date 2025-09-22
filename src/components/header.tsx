import { Clapperboard, LogOut, Search, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '@/hooks/use-auth.tsx';
import { useRouter } from 'next/navigation';

export function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (loading) {
    return (
       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        </div>
       </header>
    )
  }
  
  if (!user) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Clapperboard className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">Flick Carousel</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User Profile">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Sign Out" onClick={handleSignOut}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
