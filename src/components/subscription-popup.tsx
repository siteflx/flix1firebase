
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Gem } from 'lucide-react';

const POPUP_DELAY = 9000; // 9 segundos
const SESSION_STORAGE_KEY = 'subscription_popup_shown';

export function SubscriptionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

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
            <Button size="lg" asChild>
                <Link href="/subscription">Assinar Agora</Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsOpen(false)}>
                Continuar Navegando
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
