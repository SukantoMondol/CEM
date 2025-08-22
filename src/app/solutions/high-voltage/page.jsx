import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Power, TrendingUp, CheckCircle, Award, Users, Clock, MapPin, Phone, Mail, FileText, Shield, Settings, Database, Globe, Award as AwardIcon, Certificate, User, Users as UsersIcon, Calendar, CheckCircle as CheckCircleIcon, Building, Cog, Award as AwardIcon2, ShieldCheck, Cpu, Battery, Wifi, Smartphone, Monitor, Server, Cloud, BarChart3, PieChart, Activity, Gauge, Thermometer, Droplets, Wind, Sun, Moon, Sparkles, Wrench, Building2, ShieldCheck as ShieldCheckIcon, Cpu as CpuIcon, Battery as BatteryIcon, Wifi as WifiIcon, Smartphone as SmartphoneIcon, Monitor as MonitorIcon, Server as ServerIcon, Cloud as CloudIcon, BarChart3 as BarChart3Icon, PieChart as PieChartIcon, Activity as ActivityIcon, Gauge as GaugeIcon, Thermometer as ThermometerIcon, Droplets as DropletsIcon, Wind as WindIcon, Moon as MoonIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Badge } from '@/components/ui/badge';


export default function HighVoltagePage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="High Voltage Systems" imageHint="high voltage substation" />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gradient-cem mb-6">
                  High Voltage Excellence
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Specialized in high voltage substation installation, equipment supply, and power transmission 
                  solutions for major power companies across Bangladesh.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">400KV</div>
                    <div className="text-sm text-muted-foreground">Transmission</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">230KV</div>
                    <div className="text-sm text-muted-foreground">Substation</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
              
              <div className="relative">
                <Image 
                  src="/uploads/power sector excelence .jpeg" 
                  alt="Power Sector Excellence" 
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
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our High Voltage Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive high voltage solutions including substation installation, equipment supply, 
                and power transmission infrastructure for major power companies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Zap className="w-8 h-8" />}
                title="400KV Substation"
                description="High voltage substation design, supply, installation, testing & commissioning"
                features={["Design & Engineering", "Equipment Supply", "Installation", "Testing & Commissioning"]}
                color="orange"
              />
              <ServiceCard
                icon={<Power className="w-8 h-8" />}
                title="230KV Substation"
                description="Medium high voltage substation installation and maintenance services"
                features={["Substation Design", "Equipment Installation", "Maintenance", "Upgradation"]}
                color="red"
              />
              <ServiceCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="33KV Substation"
                description="Distribution level substation installation and equipment supply"
                features={["Distribution Substation", "Equipment Supply", "Installation", "Commissioning"]}
                color="yellow"
              />
              <ServiceCard
                icon={<Wrench className="w-8 h-8" />}
                title="Equipment Supply"
                description="High voltage equipment and components supply for substations"
                features={["Transformers", "Switchgear", "Protection Equipment", "Control Systems"]}
                color="green"
              />
              <ServiceCard
                icon={<Building2 className="w-8 h-8" />}
                title="Fabrication & Erection"
                description="Steel structure fabrication and erection for high voltage installations"
                features={["Steel Structures", "Fabrication", "Erection", "Quality Control"]}
                color="blue"
              />
              <ServiceCard
                icon={<ShieldCheck className="w-8 h-8" />}
                title="Testing & Commissioning"
                description="Comprehensive testing and commissioning of high voltage systems"
                features={["System Testing", "Commissioning", "Safety Checks", "Documentation"]}
                color="purple"
              />
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Technical Specifications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We handle high voltage systems with precision and safety standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SpecCard
                title="Voltage Levels"
                specs={["400KV", "230KV", "33KV", "11KV"]}
                icon={<Zap className="w-8 h-8" />}
                color="orange"
              />
              <SpecCard
                title="Equipment Types"
                specs={["Transformers", "Switchgear", "Circuit Breakers", "Protection Relays"]}
                icon={<Power className="w-8 h-8" />}
                color="red"
              />
              <SpecCard
                title="Safety Standards"
                specs={["IEC Standards", "Local Regulations", "Safety Protocols", "Quality Control"]}
                icon={<Shield className="w-8 h-8" />}
                color="yellow"
              />
              <SpecCard
                title="Testing Methods"
                specs={["Insulation Testing", "Load Testing", "Protection Testing", "Commissioning"]}
                icon={<Settings className="w-8 h-8" />}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Project Examples */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Recent High Voltage Projects</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Successfully completed high voltage projects for major power companies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="PGCB-400 KV Transmission Line"
                description="Bogura to Rohanpur-T high voltage transmission line construction and installation."
                client="PGCB"
                year="2021"
                voltage="400KV"
                color="orange"
                imageSrc="/uploads/pgcb-400.jpeg"
              />
              <ProjectCard
                title="PGCB-230 KV Double Circuit"
                description="Bogura to Rohanpur double circuit transmission line construction."
                client="PGCB"
                year="2021"
                voltage="230KV"
                color="red"
                imageSrc="/uploads/pgcb-230.jpg"
              />
              <ProjectCard
                title="BREB 33/11 KV Substation"
                description="Multiple substation installations across Bangladesh for rural electrification."
                client="BREB"
                year="2019-2022"
                voltage="33KV/11KV"
                color="yellow"
                imageSrc="/uploads/breb33:11.jpeg"
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our High Voltage Process</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Systematic approach to high voltage substation installation and maintenance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessCard
                number="01"
                title="Site Survey & Design"
                description="Comprehensive site survey, technical design, and specification preparation"
                icon={<MapPin className="w-6 h-6" />}
                color="blue"
              />
              <ProcessCard
                number="02"
                title="Equipment Supply"
                description="High voltage equipment procurement, quality control, and delivery"
                // icon={<Package className="w-6 h-6" />}
                color="red"
              />
              <ProcessCard
                number="03"
                title="Installation & Erection"
                description="Professional installation, steel structure erection, and equipment mounting"
                icon={<Wrench className="w-6 h-6" />}
                color="yellow"
              />
              <ProcessCard
                number="04"
                title="Testing & Commissioning"
                description="Comprehensive testing, safety checks, and system commissioning"
                icon={<CheckCircle className="w-6 h-6" />}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Safety & Compliance */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gradient-cem mb-6">Safety & Compliance</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We maintain the highest safety standards for high voltage operations, ensuring 
                  compliance with international and local regulations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">IEC Safety Standards</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Local Regulatory Compliance</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Qualified Personnel</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Modern Safety Equipment</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-xl text-white text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4">Safety First</h3>
                  <p className="text-green-100 mb-6">
                    Our commitment to safety ensures reliable and secure high voltage operations.
                  </p>
                  <Badge className="bg-white text-green-600">ISO 9001:2015 Certified</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for High Voltage Solutions?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Contact CEM Engineering for comprehensive high voltage substation installation, 
              equipment supply, and power transmission solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
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
    orange: 'bg-orange-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    green: 'bg-green-500 text-white',
    blue: 'bg-blue-500 text-white',
    purple: 'bg-purple-500 text-white'
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

function SpecCard({ title, specs, icon, color }) {
  const colorClasses = {
    orange: 'bg-orange-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    green: 'bg-green-500 text-white'
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
    orange: 'bg-orange-100 text-orange-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800'
  };
  
  return (
    <Card className="group overflow-hidden rounded-xl bg-card border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative block overflow-hidden">
        <Image
          src={imageSrc || `https://placehold.co/600x400/${color === 'orange' ? 'ea580c' : color === 'red' ? 'dc2626' : 'f59e0b'}/ffffff`}
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
        <h3 className="text-xl font-bold text-foreground mb-3">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
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
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    green: 'bg-green-500 text-white'
  };
  
  return (
    <Card className={`h-full p-6 glass border text-center transform hover:-translate-y-2 transition-transform duration-300`}>
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
        <p className="opacity-90 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
