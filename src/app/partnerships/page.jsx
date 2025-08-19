import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { SiteLayout } from '@/components/site-layout';

const partners = [
  { name: 'Bangladesh Rural Electrification Board', logoSrc: '/uploads/breb.png', imageHint: 'logo BREB' },
  { name: 'Power Grid Company of Bangladesh', logoSrc: '/uploads/pgcb-400.jpeg', imageHint: 'logo PGCB' },
  { name: 'Dhaka Electric Supply Company', logoSrc: '/uploads/dhaka electric.png', imageHint: 'logo DESCO' },
  { name: 'Dhaka Power Distribution Company', logoSrc: '/uploads/dhaka power distribution.png', imageHint: 'logo DPDC' },
  { name: 'Bangladesh Power Development Board', logoSrc: '/uploads/bangladesh power.svg', imageHint: 'logo BPDB' },
  { name: 'West Zone Power Distribution Company', logoSrc: '/uploads/west zone.jpeg', imageHint: 'logo WZPDCL' },
  { name: 'North-West Power Generation Company', logoSrc: '/uploads/north-west.png', imageHint: 'logo NWPGCL' },
  { name: 'Northern Electricity Supply Company', logoSrc: '/uploads/northern.webp', imageHint: 'logo NESCO' },
  { name: 'Grameen Phone', logoSrc: '/uploads/graminphone.jpg', imageHint: 'logo Grameen Phone' },
  { name: 'Palmal Group', logoSrc: '/uploads/palmal group.jpeg', imageHint: 'logo Palmal Group' },
  { name: 'Bangladesh-China Power Company', logoSrc: '/uploads/bangladesh chaina.jpg', imageHint: 'logo BCPCL' },
  { name: 'Electricity Generation Company of Bangladesh', logoSrc: '/uploads/electricity generation.png', imageHint: 'logo EGCB' },
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
                <div key={partner.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                   <div className="h-24 flex items-center justify-center mb-3">
                     <Image
                        src={partner.logoSrc}
                        alt={`${partner.name} logo`}
                        width={180}
                        height={90}
                        className="object-contain max-h-24 transition-all duration-300"
                        data-ai-hint={partner.imageHint}
                      />
                   </div>
                   <p className="text-xs text-center text-gray-600 mt-2 font-medium">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
