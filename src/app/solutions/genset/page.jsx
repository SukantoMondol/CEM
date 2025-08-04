import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';

export default function GensetPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Genset Solutions" imageSrc="https://placehold.co/1920x400" imageHint="power generator" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline text-primary">Reliable Power When You Need It</h2>
                <p className="mt-4 text-muted-foreground">
                  We offer a wide range of high-performance generator sets to ensure you have a dependable source of primary or backup power. Our solutions are tailored to meet the specific demands of your facility, whether commercial, industrial, or residential.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Diesel and Gas Generators</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Automatic Transfer Switches (ATS)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Synchronization and Load Sharing</span>
                  </li>
                   <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Installation, Maintenance, and Support</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image src="https://placehold.co/600x400" alt="Genset" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="industrial generator" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
