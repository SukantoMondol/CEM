import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { SiteLayout } from '@/components/site-layout';

const partners = [
  { name: 'Siemens', logoSrc: 'https://placehold.co/200x100', imageHint: 'logo siemens' },
  { name: 'ABB', logoSrc: 'https://placehold.co/200x100', imageHint: 'logo abb' },
  { name: 'Schneider Electric', logoSrc: 'https://placehold.co/200x100', imageHint: 'logo schneider electric' },
  { name: 'Eaton', logoSrc: 'https://placehold.co/200x100', imageHint: 'logo eaton' },
  { name: 'Legrand', logoSrc: 'https://placehold.co/200x100', imageHint: 'logo legrand' },
  { name: 'V-Guard', logoSrc: 'https://placehold.co/200x100', imageHint: 'logo v-guard' },
  { name: 'C&S Electric', logoSrc: 'https://placehold.co/200x100', imageHint: 'logo c&s electric' },
  { name: 'Terasaki', logoSrc: 'https://placehold.co/200x100', imageHint: 'logo terasaki' },
];

export default function PartnershipsPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Our Partnerships" imageHint="handshake business" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Our Valued Partners</h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              We collaborate with industry leaders to deliver the highest quality products and solutions to our clients.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
              {partners.map((partner) => (
                <div key={partner.name} className="flex justify-center">
                   <Image
                      src={partner.logoSrc}
                      alt={`${partner.name} logo`}
                      width={200}
                      height={100}
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                      data-ai-hint={partner.imageHint}
                    />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
