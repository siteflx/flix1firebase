import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/hooks/use-auth.tsx';
import { SidebarProvider } from '@/components/ui/sidebar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Flick Carousel',
  description: 'Uma experiência de navegação de vídeo no estilo Netflix.',
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
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQ6MCQKWGH"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZQ6MCQKWGH');
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
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
