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
            Back
          </Button>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="pt-4 text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Flick Carousel. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website. By using Flick Carousel, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="pt-4 text-2xl font-semibold">2. Information We Collect</h2>
          <p>
            We may collect personally identifiable information, such as your name, email address, and payment information, when you register or subscribe to our services. We also collect non-personal information, such as usage data and preferences.
          </p>

          <h2 className="pt-4 text-2xl font-semibold">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Provide, operate, and maintain our service.</li>
            <li>Improve, personalize, and expand our service.</li>
            <li>Understand and analyze how you use our service.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes.</li>
            <li>Process your transactions.</li>
            <li>Find and prevent fraud.</li>
          </ul>

          <h2 className="pt-4 text-2xl font-semibold">4. Data Security</h2>
          <p>
            The security of your data is a priority for us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
          
          <h2 className="pt-4 text-2xl font-semibold">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us by email: contact@flickcarousel.com.
          </p>
        </div>
      </div>
    </main>
  );
}
