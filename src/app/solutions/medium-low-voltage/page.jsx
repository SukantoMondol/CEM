import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Power, TrendingUp, CheckCircle, Award, Users, Clock, MapPin, Phone, Mail, FileText, Shield, Settings, Database, Globe, Award as AwardIcon, Certificate, User, Users as UsersIcon, Calendar, CheckCircle as CheckCircleIcon, Building, Cog, Award as AwardIcon2, ShieldCheck, Cpu, Battery, Wifi, Smartphone, Monitor, Server, Cloud, BarChart3, PieChart, Activity, Gauge, Thermometer, Droplets, Wind, Sun, Moon, Sparkles, Wrench, Building2, ShieldCheck as ShieldCheckIcon, Cpu as CpuIcon, Battery as BatteryIcon, Wifi as WifiIcon, Smartphone as SmartphoneIcon, Monitor as MonitorIcon, Server as ServerIcon, Cloud as CloudIcon, BarChart3 as BarChart3Icon, PieChart as PieChartIcon, Activity as ActivityIcon, Gauge as GaugeIcon, Thermometer as ThermometerIcon, Droplets as DropletsIcon, Wind as WindIcon, Moon as MoonIcon, Sparkles as SparklesIcon, Lightbulb, Home, Heart, Package } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Badge } from '@/components/ui/badge';

export default function MediumLowVoltagePage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Medium & Low Voltage Systems" imageHint="electrical panel" />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gradient-cem mb-6">
                  Medium & Low Voltage Systems
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Reliable and efficient medium and low voltage solutions for commercial buildings, 
                  factories, and industrial applications with comprehensive installation and maintenance services.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">33KV</div>
                    <div className="text-sm text-muted-foreground">Medium Voltage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">11KV/0.4KV</div>
                    <div className="text-sm text-muted-foreground">Low Voltage</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
              
              <div className="relative">
                <Image 
                  src="/uploads/mediul and hight voltage .webp" 
                  alt="Medium and Low Voltage Systems" 
                  width={600} 
                  height={400} 
                  className="rounded-xl shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Medium & Low Voltage Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive distribution solutions including substation installation, panel boards, 
                and electrical systems for commercial and industrial applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Zap className="w-8 h-8" />}
                title="33KV Substation"
                description="Medium voltage substation design, supply, installation, testing & commissioning"
                features={["Design & Engineering", "Equipment Supply", "Installation", "Testing & Commissioning"]}
                color="blue"
              />
              <ServiceCard
                icon={<Power className="w-8 h-8" />}
                title="11KV Distribution"
                description="Low voltage distribution systems for commercial and industrial applications"
                features={["Distribution Design", "Panel Installation", "Cable Work", "Commissioning"]}
                color="green"
              />
              <ServiceCard
                icon={<Lightbulb className="w-8 h-8" />}
                title="0.4KV Systems"
                description="Low voltage electrical systems and lighting solutions"
                features={["Electrical Systems", "Lighting Design", "Installation", "Maintenance"]}
                color="purple"
              />
              <ServiceCard
                icon={<Wrench className="w-8 h-8" />}
                title="Panel Boards"
                description="Electrical panel boards, distribution boards, and control systems"
                features={["MDB Installation", "SDB Setup", "Control Panels", "Protection Systems"]}
                color="orange"
              />
              <ServiceCard
                icon={<Building2 className="w-8 h-8" />}
                title="Commercial Systems"
                description="Electrical systems for commercial buildings and offices"
                features={["Building Wiring", "Power Distribution", "Safety Systems", "Maintenance"]}
                color="red"
              />
              <ServiceCard
                icon={<ShieldCheck className="w-8 h-8" />}
                title="Industrial Systems"
                description="Heavy-duty electrical systems for industrial applications"
                features={["Industrial Wiring", "Motor Control", "Safety Systems", "Monitoring"]}
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Applications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our medium and low voltage solutions serve various sectors and applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ApplicationCard
                title="Commercial Buildings"
                description="Office buildings, shopping centers, hotels, and retail spaces"
                icon={<Building className="w-8 h-8" />}
                color="blue"
              />
              <ApplicationCard
                title="Industrial Facilities"
                description="Factories, manufacturing plants, and industrial complexes"
                icon={<Cog className="w-8 h-8" />}
                color="green"
              />
              <ApplicationCard
                title="Residential Complexes"
                description="Apartment buildings, housing societies, and residential areas"
                icon={<Home className="w-8 h-8" />}
                color="purple"
              />
              <ApplicationCard
                title="Healthcare Facilities"
                description="Hospitals, clinics, and medical centers"
                icon={<Heart className="w-8 h-8" />}
                color="red"
              />
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Technical Specifications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We handle medium and low voltage systems with precision and safety standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SpecCard
                title="Voltage Levels"
                specs={["33KV", "11KV", "0.4KV", "220V/110V"]}
                icon={<Zap className="w-8 h-8" />}
                color="blue"
              />
              <SpecCard
                title="Equipment Types"
                specs={["Transformers", "Switchgear", "Panel Boards", "Cables"]}
                icon={<Power className="w-8 h-8" />}
                color="green"
              />
              <SpecCard
                title="Safety Standards"
                specs={["IEC Standards", "Local Regulations", "Safety Protocols", "Quality Control"]}
                icon={<Shield className="w-8 h-8" />}
                color="purple"
              />
              <SpecCard
                title="Testing Methods"
                specs={["Insulation Testing", "Load Testing", "Protection Testing", "Commissioning"]}
                icon={<Settings className="w-8 h-8" />}
                color="orange"
              />
            </div>
          </div>
        </section>

        {/* Project Examples */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 via-green-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Recent Medium & Low Voltage Projects</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Successfully completed distribution projects for various sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Commercial Building Substation"
                description="33KV/11KV substation installation for commercial complex in Dhaka."
                client="Commercial Client"
                year="2023"
                voltage="33KV/11KV"
                color="blue"
                imageSrc="/uploads/dhaka electric.png"
              />
              <ProjectCard
                title="Industrial Factory Distribution"
                description="Complete electrical distribution system for manufacturing facility."
                client="Industrial Client"
                year="2023"
                voltage="11KV/0.4KV"
                color="green"
                imageSrc="/uploads/cable try.jpg"
              />
              <ProjectCard
                title="Residential Complex Wiring"
                description="Electrical systems installation for residential complex."
                client="Residential Client"
                year="2023"
                voltage="0.4KV"
                color="purple"
                imageSrc="/uploads/lighting.png"
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
                Systematic approach to medium and low voltage system installation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessCard
                number="01"
                title="Site Survey & Design"
                description="Comprehensive site survey, load calculation, and system design"
                icon={<MapPin className="w-6 h-6" />}
                color="blue"
              />
              <ProcessCard
                number="02"
                title="Equipment Supply"
                description="Quality equipment procurement, testing, and delivery"
                icon={<Package className="w-6 h-6" />}
                color="green"
              />
              <ProcessCard
                number="03"
                title="Installation & Wiring"
                description="Professional installation, wiring, and system integration"
                icon={<Wrench className="w-6 h-6" />}
                color="purple"
              />
              <ProcessCard
                number="04"
                title="Testing & Commissioning"
                description="Comprehensive testing, safety checks, and system handover"
                icon={<CheckCircle className="w-6 h-6" />}
                color="orange"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gradient-cem mb-6">Benefits of Our Solutions</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our medium and low voltage solutions provide reliable, efficient, and safe electrical 
                  systems for your commercial and industrial applications.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Reliable Power Distribution</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Energy Efficiency</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Safety Compliance</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Cost-Effective Solutions</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-xl text-white text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4">Distribution Excellence</h3>
                  <p className="text-green-100 mb-6">
                    Reliable and efficient power distribution systems for your business needs.
                  </p>
                  <Badge className="bg-white text-green-600">ISO 9001:2015 Certified</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-green-600 to-purple-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Medium & Low Voltage Solutions?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Contact CEM Engineering for comprehensive medium and low voltage distribution systems, 
              panel boards, and electrical solutions for commercial and industrial applications.
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

function ServiceCard({ icon, title, description, features, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white'
  };
  
  return (
    <Card className="h-full p-6 bg-card border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <CardHeader className="p-0 text-center">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <p className="text-muted-foreground mb-4 text-center">{description}</p>
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ApplicationCard({ title, description, icon, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    red: 'bg-red-500 text-white'
  };
  
  return (
    <Card className="h-full p-6 bg-card border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function SpecCard({ title, specs, icon, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white'
  };
  
  return (
    <Card className="h-full p-6 bg-card border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <ul className="space-y-2 text-sm">
          {specs.map((spec, index) => (
            <li key={index} className="text-muted-foreground">{spec}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ title, description, client, year, voltage, color, imageSrc }) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800'
  };
  
  return (
    <Card className="group overflow-hidden rounded-xl bg-card border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative block overflow-hidden">
        <Image
          src={imageSrc || `https://placehold.co/600x400/${color === 'blue' ? '1e40af' : color === 'green' ? '059669' : '7c3aed'}/ffffff`}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute top-4 right-4">
          <Badge className={colorClasses[color]}>
            {voltage}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>
        
        <p className="text-white/80 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>Client: {client}</span>
          <span>Year: {year}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function ProcessCard({ number, title, description, icon, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white'
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
