'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            Política de Privacidade
          </h1>
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <h2 className="pt-4 text-2xl font-semibold">1. Introdução</h2>
          <p>
            Bem-vindo ao Flick Carousel. Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nosso site. Ao usar o Flick Carousel, você concorda com a coleta e uso de informações de acordo com esta política.
          </p>

          <h2 className="pt-4 text-2xl font-semibold">2. Informações que Coletamos</h2>
          <p>
            Podemos coletar informações pessoalmente identificáveis, como seu nome, endereço de e-mail e informações de pagamento, quando você se registra ou assina nossos serviços. Também coletamos informações não pessoais, como dados de uso e preferências.
          </p>

          <h2 className="pt-4 text-2xl font-semibold">3. Como Usamos Suas Informações</h2>
          <p>
            Usamos as informações que coletamos para:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Fornecer, operar e manter nosso serviço.</li>
            <li>Melhorar, personalizar e expandir nosso serviço.</li>
            <li>Entender e analisar como você usa nosso serviço.</li>
            <li>Desenvolver novos produtos, serviços, recursos e funcionalidades.</li>
            <li>Comunicar com você, seja diretamente ou através de um de nossos parceiros, incluindo para atendimento ao cliente, para fornecer atualizações e outras informações relacionadas ao serviço, e para fins de marketing e promocionais.</li>
            <li>Processar suas transações.</li>
            <li>Encontrar e prevenir fraudes.</li>
          </ul>

          <h2 className="pt-4 text-2xl font-semibold">4. Segurança dos Dados</h2>
          <p>
            A segurança de seus dados é uma prioridade para nós, mas lembre-se que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
          </p>
          
          <h2 className="pt-4 text-2xl font-semibold">5. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: contato@flickcarousel.com.
          </p>
        </div>
      </div>
    </main>
  );
}
