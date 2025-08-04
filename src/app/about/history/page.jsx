import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { SiteLayout } from '@/components/site-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, Award, Building } from 'lucide-react';

export default function HistoryPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Our History" imageHint="old photograph" />
        
        {/* Timeline Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="particle-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-animated mb-6">Our Journey of Excellence</h2>
              <p className="text-xl text-muted-foreground">
                From humble beginnings to industry leadership, explore the milestones that have shaped CEM Engineering into the powerhouse it is today.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-red-600 to-yellow-500 rounded-full"></div>
              
              {/* Timeline Item 1 */}
              <div className="relative z-10 mb-24">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-primary text-white text-xl font-bold py-2 px-6 rounded-full shadow-glow inline-flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    2018
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <Card className="glass border-primary/20 overflow-hidden transform transition-all duration-500 hover:shadow-glow hover:border-primary/50">
                      <CardContent className="p-6">
                        <h3 className="text-3xl font-bold font-headline text-primary mb-4">The Beginning</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Founded in 2018, CEM Engineering started with a small team of passionate engineers who had a vision to transform the power sector in Bangladesh. Our first office was modest, but our ambitions were anything but. With determination and expertise, we secured our first project with BREB.
                        </p>
                        <div className="flex items-center mt-4 text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          <span>Initial team: 5 engineers</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <Image 
                        src="https://placehold.co/600x400" 
                        alt="Founding moment" 
                        width={600} 
                        height={400} 
                        className="rounded-lg relative shadow-lg transform transition-all duration-500 group-hover:scale-[1.01]"
                        data-ai-hint="company founder"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative z-10 mb-24">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-accent text-white text-xl font-bold py-2 px-6 rounded-full shadow-glow inline-flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    2020
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <Image 
                        src="https://placehold.co/600x400" 
                        alt="Team growth" 
                        width={600} 
                        height={400} 
                        className="rounded-lg relative shadow-lg transform transition-all duration-500 group-hover:scale-[1.01]"
                        data-ai-hint="team portrait"
                      />
                    </div>
                  </div>
                  <div>
                    <Card className="glass border-accent/20 overflow-hidden transform transition-all duration-500 hover:shadow-glow hover:border-accent/50">
                      <CardContent className="p-6">
                        <h3 className="text-3xl font-bold font-headline text-accent mb-4">Growth and Expansion</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Through dedication and a commitment to quality, we quickly grew our portfolio, taking on larger and more complex projects. We expanded our services and our team, becoming a recognized name in the engineering sector with projects for PGCB, DESCO, and DPDC.
                        </p>
                        <div className="flex items-center mt-4 text-sm text-muted-foreground">
                          <Award className="h-4 w-4 mr-1" />
                          <span>First major project completion award</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-secondary text-foreground text-xl font-bold py-2 px-6 rounded-full shadow-glow inline-flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    2023
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <Card className="glass border-secondary/20 overflow-hidden transform transition-all duration-500 hover:shadow-glow hover:border-secondary/50">
                      <CardContent className="p-6">
                        <h3 className="text-3xl font-bold font-headline text-secondary mb-4">Industry Leadership</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Today, CEM Engineering stands as a leader in Bangladesh's power sector with over 30 completed projects and 6 ongoing initiatives. Our team has grown to 22+ skilled professionals, and we've established partnerships with major power companies across the country.
                        </p>
                        <div className="flex items-center mt-4 text-sm text-muted-foreground">
                          <Building className="h-4 w-4 mr-1" />
                          <span>New headquarters established</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <Image 
                        src="https://placehold.co/600x400" 
                        alt="Modern headquarters" 
                        width={600} 
                        height={400} 
                        className="rounded-lg relative shadow-lg transform transition-all duration-500 group-hover:scale-[1.01]"
                        data-ai-hint="modern office building"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision for the Future */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Vision for the Future</h2>
              <p className="text-xl text-muted-foreground">
                As we look ahead, we remain committed to innovation, excellence, and sustainable growth in Bangladesh's power sector.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass border-blue-600/20 overflow-hidden transform transition-all duration-500 hover:shadow-glow hover:border-blue-600/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Embracing cutting-edge technologies and methodologies to deliver superior engineering solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass border-red-600/20 overflow-hidden transform transition-all duration-500 hover:shadow-glow hover:border-red-600/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-2">Global Expansion</h3>
                  <p className="text-muted-foreground">
                    Extending our expertise beyond Bangladesh to serve the growing energy needs of South Asia.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass border-yellow-500/20 overflow-hidden transform transition-all duration-500 hover:shadow-glow hover:border-yellow-500/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Leading the transition to renewable energy solutions for a greener, more sustainable future.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white" size="lg">
                Join Our Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
