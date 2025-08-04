import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';

export default function LightingPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Lighting Solutions" imageSrc="https://placehold.co/1920x400" imageHint="modern lighting" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline text-primary">Illuminate Your World</h2>
                <p className="mt-4 text-muted-foreground">
                  We provide innovative and energy-efficient lighting solutions for diverse environments, including industrial, commercial, and public spaces. Our goal is to enhance visibility, safety, and aesthetics while minimizing energy consumption.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>LED Lighting Systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Smart Lighting Controls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Architectural and Facade Lighting</span>
                  </li>
                   <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Street and Area Lighting</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image src="https://placehold.co/600x400" alt="Lighting project" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="street lights" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
