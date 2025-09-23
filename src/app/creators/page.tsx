// src/app/creators/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const lockedItems = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));
const imageUrl = 'https://storage.googleapis.com/audiossswe/foto%201.png';

function LockedContentCard() {
    return (
        <div className="w-full max-w-md">
            <Link href="/join" className="block group w-full">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-lg">
                <Image
                    src={imageUrl}
                    alt="Conteúdo Premium"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale transition-transform duration-300 ease-in-out group-hover:scale-105"
                    data-ai-hint="woman portrait"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <Lock className="h-10 w-10 drop-shadow-lg" />
                    <h3 className="mt-4 text-xl font-bold drop-shadow-lg">
                    Assinatura Premium
                    </h3>
                    <p className="mt-1 text-sm text-white/90 drop-shadow-md text-center">
                    Desbloqueie este e todo o conteúdo com um de nossos planos.
                    </p>
                    <Button variant="secondary" className="mt-6">
                        Ver Planos
                    </Button>
                </div>
                </div>
            </Link>
        </div>
    )
}

export default function CreatorsPage() {
  const router = useRouter();

  return (
    <main className="flex-1 p-4 md:p-8">
       <div className="mb-6">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="pl-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Início
          </Button>
        </div>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center md:text-left">
          Conteúdo Exclusivo de Criadores
        </h1>
        <div className="flex flex-col items-center gap-8">
          {lockedItems.map((item) => (
            <LockedContentCard key={item.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
