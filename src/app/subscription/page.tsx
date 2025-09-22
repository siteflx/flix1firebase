import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Suspense } from 'react';
import { Spinner } from '@/components/ui/spinner';

const plans = [
  {
    name: 'Semanal',
    price: '€19',
    period: '/semana',
    description: 'Acesso completo por 7 dias. Ideal para experimentar.',
    features: [
      'Acesso ilimitado a todos os vídeos',
      'Streaming em alta definição',
      'Cancele a qualquer momento',
    ],
    buttonText: 'Assinar Agora',
  },
  {
    name: 'Mensal',
    price: '€49',
    period: '/mês',
    description: 'O nosso plano mais popular. Flexibilidade total.',
    features: [
      'Acesso ilimitado a todos os vídeos',
      'Streaming em alta definição',
      'Conteúdo exclusivo para assinantes',
      'Cancele a qualquer momento',
    ],
    buttonText: 'Assinar Agora',
    featured: true,
  },
  {
    name: 'Anual',
    price: '€99',
    period: '/ano',
    description: 'O melhor custo-benefício. Um ano inteiro de entretenimento.',
    features: [
      'Acesso ilimitado a todos os vídeos',
      'Streaming em alta definição',
      'Conteúdo exclusivo para assinantes',
      'Suporte prioritário',
      'Cancele a qualquer momento',
    ],
    buttonText: 'Assinar Agora',
  },
];

function SubscriptionPageContent() {
  return (
    <div className="flex-1">
      <Header />
      <main className="flex-1 p-4 py-8 md:p-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Nossos Planos de Assinatura</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Escolha o plano perfeito para você e tenha acesso ilimitado ao melhor conteúdo.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${plan.featured ? 'border-primary ring-2 ring-primary' : ''}`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6 text-center">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.featured ? 'default' : 'secondary'}>
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SubscriptionPage() {
    return (
        <Suspense fallback={<div className="flex min-h-screen w-full flex-col items-center justify-center bg-background"><Spinner className="h-10 w-10" /></div>}>
            <SubscriptionPageContent />
        </Suspense>
    )
}