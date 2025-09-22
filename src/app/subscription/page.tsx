
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { Suspense } from 'react';
import { Spinner } from '@/components/ui/spinner';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const testimonials = [
  {
    name: 'João Silva',
    quote: 'A variedade de conteúdo é incrível. Sempre encontro algo novo e interessante para assistir. Vale cada centavo!',
    avatarUrl: 'https://picsum.photos/seed/joao/100/100',
    imageHint: 'man portrait',
  },
  {
    name: 'Carlos Pereira',
    quote: 'Finalmente uma plataforma com conteúdo de qualidade e sem interrupções. A experiência de streaming é perfeita.',
    avatarUrl: 'https://picsum.photos/seed/carlos/100/100',
    imageHint: 'man profile',
  },
  {
    name: 'Miguel Ferreira',
    quote: 'Assinei o plano anual e não me arrependo. O custo-benefício é excelente e a qualidade dos vídeos é impressionante.',
    avatarUrl: 'https://picsum.photos/seed/miguel/100/100',
    imageHint: 'happy man',
  },
  {
    name: 'André Rodrigues',
    quote: 'O site é super fácil de navegar e o design é muito moderno. Recomendo a todos os meus amigos.',
    avatarUrl: 'https://picsum.photos/seed/andre/100/100',
    imageHint: 'smiling person',
  },
  {
    name: 'Francisco Almeida',
    quote: 'O suporte prioritário do plano anual é um diferencial. Tive uma dúvida e fui atendido rapidamente. Serviço de primeira!',
    avatarUrl: 'https://picsum.photos/seed/francisco/100/100',
    imageHint: 'professional man',
  },
  {
    name: 'Diogo Santos',
    quote: 'Estava cético no início, mas o plano semanal me convenceu. A qualidade do conteúdo é muito superior à da concorrência.',
    avatarUrl: 'https://picsum.photos/seed/diogo/100/100',
    imageHint: 'casual man',
  },
  {
    name: 'Pedro Costa',
    quote: 'Como um grande fã de animes, encontrei aqui um catálogo que não via em nenhum outro lugar. Estou muito satisfeito.',
    avatarUrl: 'https://picsum.photos/seed/pedro/100/100',
    imageHint: 'young man',
  },
  {
    name: 'Manuel Gonçalves',
    quote: 'A plataforma funciona perfeitamente em todos os meus dispositivos, seja no celular, tablet ou na TV. Muito prático!',
    avatarUrl: 'https://picsum.photos/seed/manuel/100/100',
    imageHint: 'man outdoor',
  },
];


function SubscriptionPageContent() {
  return (
    <div className="flex-1">
      <Header />
      <main className="flex-1 p-4 py-8 md:p-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center px-2">
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

        <div className="mx-auto mt-20 max-w-6xl">
          <div className="text-center px-2">
            <h2 className="text-3xl font-bold tracking-tight">O que nossos assinantes dizem</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Veja por que milhares de usuários confiam na nossa plataforma.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                        <Avatar className="w-20 h-20 mb-4">
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <div className="flex items-center gap-0.5 my-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="mt-2 text-muted-foreground italic">
                          "{testimonial.quote}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-8 sm:ml-12 md:ml-14" />
            <CarouselNext className="mr-8 sm:mr-12 md:mr-14" />
          </Carousel>
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
