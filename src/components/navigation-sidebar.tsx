// src/components/navigation-sidebar.tsx
"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Film, Gem } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { CAROUSEL_CATEGORIES } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';

export function NavigationSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  
  const isSubscriptionPage = pathname === '/subscription';
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
            <Link href="/subscription" passHref legacyBehavior>
              <SidebarMenuButton
                isActive={isSubscriptionPage}
                className={cn('justify-start', {
                    'bg-sidebar-accent text-sidebar-accent-foreground': isSubscriptionPage
                })}
              >
                <Gem />
                <span>Assinatura</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarHeader>
          <h3 className="text-lg font-semibold pl-2">Categorias</h3>
        </SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" passHref legacyBehavior>
              <SidebarMenuButton
                isActive={!currentCategory && pathname === '/'}
                className={cn('justify-start', {
                    'bg-sidebar-accent text-sidebar-accent-foreground': !currentCategory && pathname === '/'
                })}
              >
                <Film />
                <span>Todas</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          {CAROUSEL_CATEGORIES.map((category) => (
            <SidebarMenuItem key={category.id}>
              <Link href={`/?category=${category.id}`} passHref legacyBehavior>
                <SidebarMenuButton
                  isActive={currentCategory === category.id}
                  className={cn('justify-start', {
                    'bg-sidebar-accent text-sidebar-accent-foreground': currentCategory === category.id,
                  })}
                >
                  <Film />
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
