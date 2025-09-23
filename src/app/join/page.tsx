// src/app/join/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function JoinPage() {
    const router = useRouter();
    const imageUrl = "https://storage.googleapis.com/audiossswe/assinatura%201.png";
    const externalLink = "https://www.youtube.com/watch?v=fuMYUadwFXM&list=RDTBvN4manm10&index=2";

    return (
        <main className="relative flex-1 flex flex-col items-center justify-center p-4 bg-black">
             <div className="absolute top-4 left-4 z-20">
                 <Button
                    variant="secondary"
                    onClick={() => router.back()}
                    className="pl-2"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                </Button>
            </div>
            <div className="w-full max-w-5xl">
                 <Link href={externalLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Image
                        src={imageUrl}
                        alt="Plano de Assinatura - Clique para saber mais"
                        width={1920}
                        height={1080}
                        className="w-full h-auto rounded-lg shadow-2xl shadow-primary/30 cursor-pointer"
                        data-ai-hint="advertisement subscription"
                        priority
                    />
                </Link>
            </div>
        </main>
    );
}
