import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { SiteLayout } from '@/components/site-layout';

const videos = [
  {
    title: 'Corporate Overview',
    description: 'A brief look into our company culture, values, and mission.',
    thumbnailSrc: 'https://placehold.co/600x400',
    hint: 'corporate video',
    href: '#',
  },
  {
    title: 'Project Alpha Showcase',
    description: 'Highlighting the success and challenges of our landmark project.',
    thumbnailSrc: 'https://placehold.co/600x400',
    hint: 'project showcase',
    href: '#',
  },
  {
    title: 'Automation Solutions in Action',
    description: 'See our advanced automation systems transforming industries.',
    thumbnailSrc: 'https://placehold.co/600x400',
    hint: 'robot arm',
    href: '#',
  },
  {
    title: 'A Day in the Life of Our Engineers',
    description: 'Meet the brilliant minds behind our innovative solutions.',
    thumbnailSrc: 'https://placehold.co/600x400',
    hint: 'engineer working',
    href: '#',
  },
  {
    title: 'High-Voltage Substation Tour',
    description: 'A virtual tour of one of our state-of-the-art facilities.',
    thumbnailSrc: 'https://placehold.co/600x400',
    hint: 'electrical substation',
    href: '#',
  },
  {
    title: 'Customer Testimonials',
    description: 'Hear directly from our satisfied clients about their experience.',
    thumbnailSrc: 'https://placehold.co/600x400',
    hint: 'client interview',
    href: '#',
  },
];

export default function VideoGalleryPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Video Gallery" imageHint="film reel" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden group bg-secondary border-border/20 rounded-lg">
                  <Link href={video.href} className="block">
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnailSrc}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={video.hint}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="h-16 w-16 text-white" />
                      </div>
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-primary-foreground">{video.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
