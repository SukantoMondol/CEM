import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { CompleteProjectButton } from '@/components/complete-project-button';

// This is a placeholder for fetching real project data
const getProjectDetails = async (slug) => {
  return {
    slug,
    title: `Project: ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
    description: "This is a detailed description of the ongoing project. We are currently in the execution phase, focusing on quality and timely delivery. More details will be shared as we reach key milestones.",
    imageSrc: 'https://placehold.co/1200x600',
    imageHint: 'construction meeting',
    details: {
      "Client": "Major Corporation Inc.",
      "Location": "North Industrial Zone",
      "Start Date": "January 2023",
      "Expected Completion": "December 2024",
      "Scope": "Full turnkey solution including design, supply, and installation."
    }
  };
};

export default async function OngoingProjectDetailsPage({ params }) {
  const project = await getProjectDetails(params.slug);

  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title={project.title} imageSrc="https://placehold.co/1920x300" imageHint="blueprint" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="text-base py-2 px-4 border-amber-500 text-amber-400 bg-amber-900/20">
                <Clock className="h-5 w-5 mr-2" />
                Ongoing Project
              </Badge>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Project Overview</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </div>
              <div className="lg:col-span-1">
                <Card className="bg-secondary border-border/30 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(project.details).map(([key, value]) => (
                      <div key={key}>
                        <p className="font-semibold text-foreground">{key}</p>
                        <p className="text-muted-foreground">{value}</p>
                        <Separator className="my-3 bg-border/20" />
                      </div>
                    ))}
                  </CardContent>
                  {/* Admin action button */}
                  <div className="px-6 pb-6">
                    <CompleteProjectButton slug={params.slug} projectTitle={project.title} />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
