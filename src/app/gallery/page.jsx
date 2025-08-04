import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { SiteLayout } from '@/components/site-layout';

const photos = [
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 1', hint: 'factory machinery' },
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 2', hint: 'electrical panel' },
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 3', hint: 'construction site' },
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 4', hint: 'engineering team' },
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 5', hint: 'power lines' },
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 6', hint: 'substation equipment' },
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 7', hint: 'circuit board' },
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 8', hint: 'modern office' },
  { src: 'https://placehold.co/600x400', alt: 'Gallery image 9', hint: 'worker inspection' },
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
