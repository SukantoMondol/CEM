import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';

export default function CivilEngineeringPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Civil Engineering" imageSrc="https://placehold.co/1920x400" imageHint="bridge construction" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline text-primary">Building a Strong Foundation</h2>
                <p className="mt-4 text-muted-foreground">
                  We provide comprehensive civil engineering services for a wide range of infrastructure projects. Our team combines technical expertise with innovative thinking to deliver robust, sustainable, and cost-effective solutions.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Structural Design and Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Geotechnical Engineering</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Transportation and Highway Design</span>
                  </li>
                   <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Water Resource Management</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image src="https://placehold.co/600x400" alt="Civil Engineering project" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="construction site" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
