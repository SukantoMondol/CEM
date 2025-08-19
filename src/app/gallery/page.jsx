import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { SiteLayout } from '@/components/site-layout';

const photos = [
  { src: '/uploads/recovery and installation.jpg', alt: 'Distribution Line Installation', hint: 'distribution line installation' },
  { src: '/uploads/pgcb-400.jpeg', alt: '400 KV Transmission Line', hint: 'high voltage transmission line' },
  { src: '/uploads/pgcb-230.jpg', alt: '230 KV Transmission Line', hint: 'transmission line construction' },
  { src: '/uploads/palmal group.jpeg', alt: 'Palmal Group Solar Plant', hint: 'rooftop solar installation' },
  { src: '/uploads/1mwp solar.jpeg', alt: '1 MWP Solar System', hint: 'solar power plant' },
  { src: '/uploads/1mvp solar.avif', alt: '1 MWP Solar Plant', hint: 'large scale solar installation' },
  { src: '/uploads/gis33:11naraoungonj.jpeg', alt: 'GIS Substation', hint: 'gas insulated substation' },
  { src: '/uploads/breb33:11.jpeg', alt: 'BREB Substation', hint: 'substation work' },
  { src: '/uploads/breb33:11 foridpure.jpeg', alt: 'BREB Foridpur Substation', hint: 'substation installation' },
  { src: '/uploads/mreb33:11 jessore.webp', alt: 'Jessore Substation', hint: 'substation equipment' },
  { src: '/uploads/132 kv ais.jpeg', alt: '132 KV AIS Substation', hint: 'air insulated substation' },
  { src: '/uploads/tower erection.jpeg', alt: 'Tower Erection', hint: 'transmission tower installation' },
  { src: '/uploads/sirajganj7.6.jpeg', alt: 'Sirajganj Solar Plant', hint: 'solar power plant' },
  { src: '/uploads/technap.jpeg', alt: 'Technap Project', hint: 'infrastructure work' },
  { src: '/uploads/graminphone.jpg', alt: 'Grameenphone Infrastructure', hint: 'technology infrastructure' },
  { src: '/uploads/hot dip.jpeg', alt: 'Hot Dip Galvanized Structure', hint: 'steel structure' },
  { src: '/uploads/hot dip1.webp', alt: 'Galvanized Steel Structure', hint: 'steel fabrication' },
  { src: '/uploads/hot dip3.jpeg', alt: 'Steel Structure Work', hint: 'industrial steel work' },
  { src: '/uploads/cable try.jpg', alt: 'Cable Tray Installation', hint: 'cable management system' },
  { src: '/uploads/power sector excelence .jpeg', alt: 'Power Sector Excellence', hint: 'power sector achievement' },
];

export default function GalleryPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Photo Gallery" imageHint="camera lens" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative aspect-video">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={photo.hint}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
