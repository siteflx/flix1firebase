
import type {Metadata, Viewport} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/hooks/use-auth.tsx';
import { SidebarProvider } from '@/components/ui/sidebar';
import Script from 'next/script';
import { SearchProvider } from '@/components/search-dialog';
import { NavigationSidebar } from '@/components/navigation-sidebar';
import { Suspense } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Flick Carousel',
  description: 'Uma experiência de navegação de vídeo no estilo Netflix.',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BBVNGL2BHY"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BBVNGL2BHY');
          `}
        </Script>
        <Script id="security-features">
          {`
            document.addEventListener('contextmenu', event => event.preventDefault());
            window.addEventListener('blur', () => {
              document.body.classList.add('on-blur');
            });
            window.addEventListener('focus', () => {
              document.body.classList.remove('on-blur');
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-body antialiased bg-background text-foreground`}>
        <AuthProvider>
          <SearchProvider>
            <SidebarProvider>
              <div className="flex min-h-screen w-full flex-col">
                <Header />
                <div className="flex flex-1">
                  <Suspense fallback={<div className="flex h-full w-full items-center justify-center"><Spinner className="h-10 w-10" /></div>}>
                    <NavigationSidebar />
                    {children}
                  </Suspense>
                </div>
                <Footer />
              </div>
            </SidebarProvider>
          </SearchProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
