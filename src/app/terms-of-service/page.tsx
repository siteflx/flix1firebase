'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  const router = useRouter();

  return (
    <main className="flex-1 bg-background p-4 py-8 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="pl-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Termos de Serviço
          </h1>
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <h2 className="pt-4 text-2xl font-semibold">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o Flick Carousel, você aceita e concorda em estar vinculado pelos termos e disposições deste acordo. Além disso, ao usar esses serviços específicos, você estará sujeito a quaisquer diretrizes ou regras postadas aplicáveis a tais serviços.
          </p>

          <h2 className="pt-4 text-2xl font-semibold">2. Descrição do Serviço</h2>
          <p>
            O Flick Carousel fornece aos usuários acesso a uma coleção de conteúdo de vídeo por streaming. Você é responsável por obter acesso ao serviço, e esse acesso pode envolver taxas de terceiros (como provedor de Internet ou taxas de tempo de antena).
          </p>

          <h2 className="pt-4 text-2xl font-semibold">3. Conduta do Usuário</h2>
          <p>
            Você concorda em não usar o serviço para:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Violar qualquer lei local, estadual, nacional ou internacional.</li>
            <li>Transmitir qualquer material que seja ilegal, prejudicial, ameaçador, abusivo, difamatório, vulgar, obsceno ou de outra forma questionável.</li>
            <li>Personificar qualquer pessoa ou entidade, ou declarar falsamente ou deturpar sua afiliação com uma pessoa ou entidade.</li>
          </ul>

          <h2 className="pt-4 text-2xl font-semibold">4. Rescisão</h2>
          <p>
            Podemos rescindir ou suspender o acesso ao nosso serviço imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos.
          </p>

          <h2 className="pt-4 text-2xl font-semibold">5. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco pelo e-mail: contato@flickcarousel.com.
          </p>
        </div>
      </div>
    </main>
  );
}
