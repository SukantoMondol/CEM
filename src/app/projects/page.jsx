import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Building2, Zap, Sun, Wrench, ShieldCheck, MapPin, Clock, Award, Filter, Search, TrendingUp, CheckCircle, PlayCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { completedProjects, ongoingProjects } from '@/lib/data';
import { SiteLayout } from '@/components/site-layout';
import { Badge } from '@/components/ui/badge';

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Our Projects" imageHint="crane construction" />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient-cem mb-6">
                Power Sector Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover our comprehensive portfolio of power sector projects across Bangladesh. 
                From substation installations to solar power plants, we deliver excellence in every project.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">30+</div>
                  <div className="text-sm text-muted-foreground">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">6</div>
                  <div className="text-sm text-muted-foreground">Ongoing Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">8</div>
                  <div className="text-sm text-muted-foreground">Power Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="ongoing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:w-[500px] mx-auto mb-12">
                <TabsTrigger value="ongoing" className="flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" />
                  Ongoing Projects
                </TabsTrigger>
                <TabsTrigger value="completed" className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Completed Projects
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ongoing">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-center mb-4">Current Projects</h2>
                  <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                    We are currently working on multiple power sector projects across Bangladesh, 
                    delivering excellence in electrical and civil engineering.
                  </p>
                </div>
                <ProjectGrid projects={ongoingProjects} />
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-center mb-4">Successfully Completed</h2>
                  <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                    Our portfolio showcases successful projects completed from 2019 to 2022, 
                    demonstrating our expertise across various power sector domains.
                  </p>
                </div>
                <ProjectGrid projects={completedProjects} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Project Categories */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Project Categories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We specialize in comprehensive power sector solutions across multiple domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CategoryCard 
                icon={<Zap className="w-8 h-8" />}
                title="Substation Projects"
                description="33KV/11KV/0.4KV substation design, supply, installation, testing & commissioning"
                count="15+"
                color="blue"
              />
              <CategoryCard 
                icon={<Sun className="w-8 h-8" />}
                title="Solar Power Plants"
                description="Solar plant design, survey, supply, installation, testing & commissioning"
                count="8+"
                color="yellow"
              />
              <CategoryCard 
                icon={<Building2 className="w-8 h-8" />}
                title="Civil Construction"
                description="Complete civil construction work and materials supply for power infrastructure"
                count="12+"
                color="red"
              />
              <CategoryCard 
                icon={<Wrench className="w-8 h-8" />}
                title="Distribution Lines"
                description="33KV and 11KV distribution line design, survey, supply, new line construction"
                count="10+"
                color="green"
              />
              <CategoryCard 
                icon={<ShieldCheck className="w-8 h-8" />}
                title="Maintenance & Servicing"
                description="GIS and AIS old substation maintenance, servicing, operation & repair"
                count="5+"
                color="purple"
              />
              <CategoryCard 
                icon={<TrendingUp className="w-8 h-8" />}
                title="Transmission Lines"
                description="400KV/230KV transmission line construction and tower erection"
                count="6+"
                color="orange"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Contact CEM Engineering for comprehensive power sector solutions. 
              We provide substation installation, power plant construction, and electrical engineering services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                <Link href="/solutions">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function ProjectGrid({ projects }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={`${project.title}-${project.href}-${index}`} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  const statusColors = {
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Completed': 'bg-green-100 text-green-800'
  };

  const categoryColors = {
    'Substation': 'bg-blue-100 text-blue-800',
    'Solar Plant': 'bg-yellow-100 text-yellow-800',
    'Civil Construction': 'bg-red-100 text-red-800',
    'Distribution Lines': 'bg-green-100 text-green-800',
    'Maintenance': 'bg-purple-100 text-purple-800',
    'Transmission Line': 'bg-orange-100 text-orange-800',
    'Steel Structure': 'bg-gray-100 text-gray-800',
    'Cable Work': 'bg-indigo-100 text-indigo-800',
    'Infrastructure': 'bg-pink-100 text-pink-800',
    'Goods Supply': 'bg-teal-100 text-teal-800'
  };

  return (
    <Card className="group overflow-hidden rounded-xl bg-card border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
      <div className="relative block overflow-hidden">
        <Image
  src={project.imageSrc || "/fallback-image.jpg"}
  alt={project.title || "Project image"}
  width={600}
  height={400}
  className="w-full h-auto"
/>

        <div className="absolute top-4 right-4">
          <Badge className={statusColors[project.status]}>
            {project.status}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <Badge className={categoryColors[project.category] || 'bg-gray-100 text-gray-800'}>
            {project.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="w-4 h-4" />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <Button asChild variant="link" className="mt-4 p-0 text-primary font-semibold group-hover:text-primary/80">
          <Link href={project.href || '#'}>
            View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function CategoryCard({ icon, title, description, count, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white'
  };
  
  return (
    <Card className="group overflow-hidden rounded-xl bg-card border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardContent className="p-8 text-center">
        <div className={`w-16 h-16 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="text-2xl font-bold text-primary">{count} Projects</div>
      </CardContent>
    </Card>
  );
}
