import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Building2, Sun, Wrench, ShieldCheck, Power, TrendingUp, CheckCircle, PlayCircle, Award, Users, Clock, MapPin, Phone, Mail, FileText, Shield, Cpu, Battery, Wifi, Smartphone, Monitor, Server, Cloud, BarChart3, PieChart, Activity, Gauge, Thermometer, Droplets, Wind, Moon, Sparkles, Settings, Database, Globe, Award as AwardIcon, Certificate, User, Users as UsersIcon, Calendar, CheckCircle as CheckCircleIcon, Building, Cog, Award as AwardIcon2, ShieldCheck as ShieldCheckIcon, Cpu as CpuIcon, Battery as BatteryIcon, Wifi as WifiIcon, Smartphone as SmartphoneIcon, Monitor as MonitorIcon, Server as ServerIcon, Cloud as CloudIcon, BarChart3 as BarChart3Icon, PieChart as PieChartIcon, Activity as ActivityIcon, Gauge as GaugeIcon, Thermometer as ThermometerIcon, Droplets as DropletsIcon, Wind as WindIcon, Moon as MoonIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Badge } from '@/components/ui/badge';

const solutions = [
  {
    title: 'Substation Installation',
    description: '33KV/11KV/0.4KV substation design, supply, installation, testing & commissioning for commercial buildings and factories.',
    imageSrc: 'https://placehold.co/600x400/1e40af/ffffff?text=Substation+Installation',
    imageHint: 'substation installation',
    href: '/solutions/substation',
    category: 'Power Distribution',
    features: ['Design & Engineering', 'Supply & Installation', 'Testing & Commissioning', 'Maintenance Services'],
    icon: <Zap className="w-8 h-8" />,
    color: 'blue'
  },
  {
    title: 'Solar Power Plants',
    description: 'Solar plant design, survey, supply, installation, testing & commissioning for residential and commercial applications.',
    imageSrc: 'https://placehold.co/600x400/f59e0b/ffffff?text=Solar+Power+Plants',
    imageHint: 'solar power plant',
    href: '/solutions/solar',
    category: 'Renewable Energy',
    features: ['Design & Survey', 'Supply & Installation', 'Testing & Commissioning', 'Grid Connection'],
    icon: <Sun className="w-8 h-8" />,
    color: 'yellow'
  },
  {
    title: 'Civil Construction',
    description: 'Complete civil construction work and materials supply for power infrastructure projects.',
    imageSrc: 'https://placehold.co/600x400/dc2626/ffffff?text=Civil+Construction',
    imageHint: 'civil construction',
    href: '/solutions/civil',
    category: 'Infrastructure',
    features: ['Foundation Work', 'Structure Construction', 'Materials Supply', 'Quality Control'],
    icon: <Building2 className="w-8 h-8" />,
    color: 'red'
  },
  {
    title: 'Distribution Lines',
    description: '33KV and 11KV distribution line design, survey, supply, new line construction, upgradation & renovation.',
    imageSrc: 'https://placehold.co/600x400/059669/ffffff?text=Distribution+Lines',
    imageHint: 'distribution lines',
    href: '/solutions/distribution',
    category: 'Power Distribution',
    features: ['Line Design', 'Survey & Planning', 'Construction', 'Upgradation'],
    icon: <Wrench className="w-8 h-8" />,
    color: 'green'
  },
  {
    title: 'Maintenance & Servicing',
    description: 'GIS and AIS old substation maintenance, servicing, operation & damage goods supply, installation testing & commissioning.',
    imageSrc: 'https://placehold.co/600x400/7c3aed/ffffff?text=Maintenance+%26+Servicing',
    imageHint: 'maintenance work',
    href: '/solutions/maintenance',
    category: 'Services',
    features: ['Preventive Maintenance', 'Repair Services', 'Equipment Supply', 'Testing & Commissioning'],
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'purple'
  },
  {
    title: 'High Voltage Systems',
    description: '400KV/230KV/33KV/11KV high voltage substation goods supply, installation, fabrication & erection work.',
    imageSrc: 'https://placehold.co/600x400/ea580c/ffffff?text=High+Voltage+Systems',
    imageHint: 'high voltage systems',
    href: '/solutions/high-voltage',
    category: 'Power Transmission',
    features: ['High Voltage Equipment', 'Installation', 'Fabrication', 'Erection Work'],
    icon: <Power className="w-8 h-8" />,
    color: 'orange'
  },
];

export default function SolutionsPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Our Solutions" imageHint="futuristic cityscape"/>
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient-cem mb-6">
                Power Sector Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive power sector solutions including substation installation, power plant construction, 
                and electrical engineering services for major power companies in Bangladesh.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-muted-foreground">Core Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">8</div>
                  <div className="text-sm text-muted-foreground">Power Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">30+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Core Services</h2>
              <p className="text-xl text-muted-foreground">
                We deliver comprehensive power sector solutions with expertise in electrical engineering, 
                civil construction, and renewable energy systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <SolutionCard key={solution.title} solution={solution} />
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Service Categories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We specialize in comprehensive power sector solutions across multiple domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCategoryCard
                icon={<Zap className="w-8 h-8" />}
                title="Power Distribution"
                description="Substation installation, distribution lines, and power distribution systems"
                count="15+"
                color="blue"
              />
              <ServiceCategoryCard
                icon={<Sun className="w-8 h-8" />}
                title="Renewable Energy"
                description="Solar power plants, renewable energy systems, and green energy solutions"
                count="8+"
                color="yellow"
              />
              <ServiceCategoryCard
                icon={<Building2 className="w-8 h-8" />}
                title="Infrastructure"
                description="Civil construction, structural engineering, and infrastructure development"
                count="12+"
                color="red"
              />
              <ServiceCategoryCard
                icon={<Wrench className="w-8 h-8" />}
                title="Power Transmission"
                description="High voltage systems, transmission lines, and power transmission infrastructure"
                count="10+"
                color="green"
              />
              <ServiceCategoryCard
                icon={<ShieldCheck className="w-8 h-8" />}
                title="Services"
                description="Maintenance, servicing, testing, and commissioning services"
                count="5+"
                color="purple"
              />
              <ServiceCategoryCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="Equipment Supply"
                description="Electrical equipment, materials, and components supply"
                count="6+"
                color="orange"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose CEM Engineering?</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our expertise, experience, and commitment to quality make us the preferred choice for power sector projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <WhyChooseCard
                icon={<Award className="w-8 h-8" />}
                title="Licensed & Certified"
                description="Electrical Contractor License C20220007305, Supervisor Certificate S20210000086"
                color="blue"
              />
              <WhyChooseCard
                icon={<Users className="w-8 h-8" />}
                title="Skilled Team"
                description="22+ skilled employees including engineers, technicians, and supervisors"
                color="red"
              />
              <WhyChooseCard
                icon={<Clock className="w-8 h-8" />}
                title="5+ Years Experience"
                description="Proven track record in power sector projects across Bangladesh"
                color="yellow"
              />
              <WhyChooseCard
                icon={<Shield className="w-8 h-8" />}
                title="Safety Compliant"
                description="Strict adherence to safety rules and modern equipment usage"
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a systematic approach to deliver excellence in every project
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessCard
                number="01"
                title="Consultation & Planning"
                description="Initial consultation, requirement analysis, and project planning"
                icon={<Users className="w-6 h-6" />}
                color="blue"
              />
              <ProcessCard
                number="02"
                title="Design & Engineering"
                description="Technical design, engineering calculations, and specification preparation"
                icon={<Settings className="w-6 h-6" />}
                color="red"
              />
              <ProcessCard
                number="03"
                title="Supply & Installation"
                description="Equipment supply, installation, and construction work"
                icon={<Wrench className="w-6 h-6" />}
                color="yellow"
              />
              <ProcessCard
                number="04"
                title="Testing & Commissioning"
                description="Comprehensive testing, commissioning, and handover"
                icon={<CheckCircle className="w-6 h-6" />}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Power Companies Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Power Sector Partners</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We work with major power companies and government entities across Bangladesh
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PartnerCard
                name="BREB"
                fullName="Bangladesh Rural Electrification Board"
                description="Rural electrification and distribution projects"
                color="blue"
              />
              <PartnerCard
                name="PGCB"
                fullName="Power Grid Company of Bangladesh"
                description="High voltage transmission and grid infrastructure"
                color="red"
              />
              <PartnerCard
                name="DESCO/DPDC"
                fullName="Dhaka Power Distribution Companies"
                description="Urban power distribution and substation projects"
                color="yellow"
              />
              <PartnerCard
                name="WZPDCL"
                fullName="West Zone Power Distribution Company"
                description="Regional power distribution and infrastructure"
                color="green"
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
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function SolutionCard({ solution }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white'
  };
  
  return (
    <Card className="group overflow-hidden rounded-xl bg-card border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
      <div className="relative block overflow-hidden">
        <Image
          src={solution.imageSrc}
          alt={solution.title}
          width={600}
          height={400}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
          data-ai-hint={solution.imageHint}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-800">
            {solution.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className={`w-12 h-12 ${colorClasses[solution.color]} rounded-full flex items-center justify-center`}>
            {solution.icon}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          {solution.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {solution.description}
        </p>
        
        <div className="space-y-2 mb-4">
          {solution.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              {feature}
            </div>
          ))}
        </div>
        
        <Button asChild variant="link" className="mt-4 p-0 text-primary font-semibold group-hover:text-primary/80">
          <Link href={solution.href}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function ServiceCategoryCard({ icon, title, description, count, color }) {
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

function WhyChooseCard({ icon, title, description, color }) {
  const colorClasses = {
    blue: 'bg-blue-500/20 border-blue-500/30',
    red: 'bg-red-500/20 border-red-500/30',
    yellow: 'bg-yellow-500/20 border-yellow-500/30',
    green: 'bg-green-500/20 border-green-500/30'
  };
  
  return (
    <Card className={`h-full p-6 glass border ${colorClasses[color]} text-center transform hover:-translate-y-2 transition-transform duration-300`}>
      <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full bg-white/10">
        {icon}
      </div>
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <p className="opacity-90 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function ProcessCard({ number, title, description, icon, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    green: 'bg-green-500 text-white'
  };
  
  return (
    <Card className="h-full p-6 bg-card border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
      <div className={`w-16 h-16 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <div className={`w-8 h-8 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold`}>
        {number}
      </div>
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function PartnerCard({ name, fullName, description, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    green: 'bg-green-500 text-white'
  };
  
  return (
    <Card className="h-full p-6 bg-card border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
      <div className={`w-16 h-16 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}>
        {name}
      </div>
      <CardHeader className="p-0">
        <CardTitle className="text-lg font-bold">{fullName}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
