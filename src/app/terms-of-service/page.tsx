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
            Back
          </Button>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="pt-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Flick Carousel, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="pt-4 text-2xl font-semibold">2. Description of Service</h2>
          <p>
            Flick Carousel provides users with access to a collection of streaming video content. You are responsible for obtaining access to the service, and that access may involve third-party fees (such as Internet service provider or airtime charges).
          </p>

          <h2 className="pt-4 text-2xl font-semibold">3. User Conduct</h2>
          <p>
            You agree not to use the service to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Violate any local, state, national, or international law.</li>
            <li>Transmit any material that is unlawful, harmful, threatening, abusive, defamatory, vulgar, obscene, or otherwise objectionable.</li>
            <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
          </ul>

          <h2 className="pt-4 text-2xl font-semibold">4. Termination</h2>
          <p>
            We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="pt-4 text-2xl font-semibold">5. Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us by email: contact@flickcarousel.com.
          </p>
        </div>
      </div>
    </main>
  );
}
