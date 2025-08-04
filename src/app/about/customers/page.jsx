import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { SiteLayout } from '@/components/site-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Users, Award, Building, CheckCircle } from 'lucide-react';

// Featured customers with more detailed information
const featuredCustomers = [
  { 
    name: 'Bangladesh Rural Electrification Board (BREB)', 
    logoSrc: 'https://placehold.co/200x100', 
    imageHint: 'BREB logo',
    description: 'Partnered on multiple rural electrification projects, providing reliable power solutions to remote communities.',
    projectCount: 12,
    category: 'Government',
    testimonial: 'CEM Engineering has been instrumental in our mission to bring electricity to rural Bangladesh. Their expertise and dedication have made them a trusted partner.',
    contactPerson: 'Ahmed Rahman, Project Director'
  },
  { 
    name: 'Power Grid Company of Bangladesh (PGCB)', 
    logoSrc: 'https://placehold.co/200x100', 
    imageHint: 'PGCB logo',
    description: 'Collaborated on high-voltage transmission infrastructure projects, enhancing the national power grid capacity.',
    projectCount: 8,
    category: 'Government',
    testimonial: 'The technical expertise and project management skills of CEM Engineering have consistently delivered results that exceed our expectations.',
    contactPerson: 'Farid Hossain, Chief Engineer'
  },
  { 
    name: 'Dhaka Electric Supply Company (DESCO)', 
    logoSrc: 'https://placehold.co/200x100', 
    imageHint: 'DESCO logo',
    description: 'Partnered on urban distribution network upgrades, improving reliability and reducing outages in metropolitan areas.',
    projectCount: 6,
    category: 'Utility',
    testimonial: 'CEM Engineering has demonstrated exceptional capability in handling complex urban power distribution challenges with minimal disruption.',
    contactPerson: 'Nasreen Khan, Operations Manager'
  },
];

// Additional customers
const additionalCustomers = [
  { name: 'Dhaka Power Distribution Company (DPDC)', logoSrc: 'https://placehold.co/200x100', imageHint: 'DPDC logo', category: 'Utility' },
  { name: 'Bangladesh Power Development Board (BPDB)', logoSrc: 'https://placehold.co/200x100', imageHint: 'BPDB logo', category: 'Government' },
  { name: 'West Zone Power Distribution Company (WZPDCL)', logoSrc: 'https://placehold.co/200x100', imageHint: 'WZPDCL logo', category: 'Utility' },
  { name: 'Northern Electricity Supply Company (NESCO)', logoSrc: 'https://placehold.co/200x100', imageHint: 'NESCO logo', category: 'Utility' },
  { name: 'Rural Power Company Limited (RPCL)', logoSrc: 'https://placehold.co/200x100', imageHint: 'RPCL logo', category: 'Government' },
  { name: 'Electricity Generation Company of Bangladesh (EGCB)', logoSrc: 'https://placehold.co/200x100', imageHint: 'EGCB logo', category: 'Government' },
  { name: 'North-West Power Generation Company (NWPGCL)', logoSrc: 'https://placehold.co/200x100', imageHint: 'NWPGCL logo', category: 'Government' },
  { name: 'Bangladesh-China Power Company (BCPCL)', logoSrc: 'https://placehold.co/200x100', imageHint: 'BCPCL logo', category: 'Joint Venture' },
];

// Customer success metrics
const successMetrics = [
  { label: 'Satisfied Clients', value: '15+', icon: <Users className="h-6 w-6 text-blue-600" /> },
  { label: 'Completed Projects', value: '30+', icon: <CheckCircle className="h-6 w-6 text-red-600" /> },
  { label: 'Years of Partnership', value: '5+', icon: <Building className="h-6 w-6 text-yellow-500" /> },
  { label: 'Excellence Awards', value: '7', icon: <Award className="h-6 w-6 text-green-600" /> },
];

export default function CustomersPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Our Customers" imageHint="customer satisfaction" />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
          <div className="particle-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-animated mb-6">Powering Bangladesh's Future Together</h2>
              <p className="text-xl text-muted-foreground">
                We are proud to partner with Bangladesh's leading power sector organizations, delivering excellence and innovation in every project.
              </p>
            </div>
            
            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-glow flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Customers Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-cem mb-6">Our Key Partners</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These organizations have trusted CEM Engineering with their most critical power infrastructure projects.
              </p>
            </div>
            
            <div className="space-y-16">
              {featuredCustomers.map((customer, index) => (
                <Card key={customer.name} className="glass border-primary/20 overflow-hidden transform transition-all duration-500 hover:shadow-glow hover:border-primary/50">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className={`p-8 ${index % 2 === 1 ? 'order-2' : ''}`}>
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">{customer.category}</Badge>
                        <h3 className="text-2xl font-bold text-primary mb-4">{customer.name}</h3>
                        <p className="text-muted-foreground mb-6">{customer.description}</p>
                        
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{customer.projectCount} Projects Completed</span>
                        </div>
                        
                        <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 italic">
                          <p className="text-sm text-muted-foreground">"{customer.testimonial}"</p>
                          <p className="text-xs text-right mt-2 font-medium">— {customer.contactPerson}</p>
                        </div>
                      </div>
                      <div className={`bg-gradient-to-br from-blue-50 to-gray-50 p-8 flex items-center justify-center ${index % 2 === 1 ? 'order-1' : ''}`}>
                        <div className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                          <Image
                            src={customer.logoSrc}
                            alt={`${customer.name} logo`}
                            width={250}
                            height={150}
                            className="relative bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-[1.02]"
                            data-ai-hint={customer.imageHint}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Customers Grid */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">More Valued Partners</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're proud to collaborate with these organizations across Bangladesh's power sector.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {additionalCustomers.map((customer) => (
                <div key={customer.name} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                  <Card className="relative h-full flex flex-col items-center justify-center p-6 border-primary/10 bg-white/80 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/30">
                    <Image
                      src={customer.logoSrc}
                      alt={`${customer.name} logo`}
                      width={180}
                      height={100}
                      className="grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-ai-hint={customer.imageHint}
                    />
                    <div className="mt-4 text-center">
                      <p className="font-semibold text-primary">{customer.name}</p>
                      <Badge variant="outline" className="mt-2">{customer.category}</Badge>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center bg-white/30 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-glow border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-cem mb-6">Ready to Join Our Client Portfolio?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the CEM Engineering difference with our expert team and proven track record in Bangladesh's power sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white" size="lg">
                  Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" size="lg">
                  View Our Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
