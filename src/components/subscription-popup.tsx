
"use client";

import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Gem } from 'lucide-react';
import { useSubscriptionPopup } from '@/hooks/use-subscription-popup';

const externalLink = "https://buy.stripe.com/4gMcMZ8E0b2X4430qHe3e02";

export function SubscriptionPopup() {
  const { isOpen, setIsOpen } = useSubscriptionPopup();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <div className="rounded-full bg-primary/10 p-3">
             <Gem className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold">Assinatura Premium</DialogTitle>
          <DialogDescription>
            Acesso ilimitado a todo o conteúdo exclusivo.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-center">
            <p className="text-sm text-muted-foreground">Plano Mensal</p>
            <p className="text-5xl font-bold tracking-tight">€49</p>
        </div>
        <div className="flex flex-col gap-2">
            <Button size="lg" asChild variant="destructive">
                <Link href={externalLink} target="_blank" rel="noopener noreferrer">Assinar Agora</Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsOpen(false)}>
                Continuar Navegando
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
