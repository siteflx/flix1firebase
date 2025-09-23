
// src/components/navigation-sidebar.tsx
"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Play, Gem, Image as ImageIcon } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { CAROUSEL_CATEGORIES } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';

export function NavigationSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const { setOpenMobile, isMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };
  
  const isSubscriptionPage = pathname === '/subscription';
  const isGalleryPage = pathname === '/gallery';
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isPolicyPage = pathname === '/privacy-policy' || pathname === '/terms-of-service';

  if (isAuthPage || isPolicyPage) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarContent className="p-0">
        <SidebarHeader>
          <h3 className="text-lg font-semibold pl-2">Menu</h3>
        </SidebarHeader>
        <SidebarMenu>
           <SidebarMenuItem>
            <Link href="/subscription" onClick={handleLinkClick} className="w-full">
                <SidebarMenuButton
                  as="div"
                  isActive={isSubscriptionPage}
                  className={cn('justify-start w-full', {
                      'bg-sidebar-accent text-sidebar-accent-foreground': isSubscriptionPage
                  })}
                >
                  <Gem />
                  <span>Assinatura</span>
                </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <Link href="/gallery" onClick={handleLinkClick} className="w-full">
                <SidebarMenuButton
                  as="div"
                  isActive={isGalleryPage}
                  className={cn('justify-start w-full', {
                      'bg-sidebar-accent text-sidebar-accent-foreground': isGalleryPage
                  })}
                >
                  <ImageIcon />
                  <span>Galeria</span>
                </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarHeader>
          <h3 className="text-lg font-semibold pl-2">Categorias</h3>
        </SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" onClick={handleLinkClick} className="w-full">
                <SidebarMenuButton
                  as="div"
                  isActive={!currentCategory && pathname === '/'}
                  className={cn('justify-start w-full', {
                      'bg-sidebar-accent text-sidebar-accent-foreground': !currentCategory && pathname === '/'
                  })}
                >
                  <Play className="text-primary" />
                  <span>Todas</span>
                </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          {CAROUSEL_CATEGORIES.map((category) => (
            <SidebarMenuItem key={category.id}>
              <Link href={`/?category=${category.id}`} onClick={handleLinkClick} className="w-full">
                  <SidebarMenuButton
                    as="div"
                    isActive={currentCategory === category.id}
                    className={cn('justify-start w-full', {
                      'bg-sidebar-accent text-sidebar-accent-foreground': currentCategory === category.id,
                    })}
                  >
                    <Play className="text-primary" />
                    <span>{category.title}</span>
                  </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
