import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Power, TrendingUp, CheckCircle, Award, Users, Clock, MapPin, Phone, Mail, FileText, Shield, Settings, Database, Globe, Award as AwardIcon, Certificate, User, Users as UsersIcon, Calendar, CheckCircle as CheckCircleIcon, Building, Cog, Award as AwardIcon2, ShieldCheck, Cpu, Battery, Wifi, Smartphone, Monitor, Server, Cloud, BarChart3, PieChart, Activity, Gauge, Thermometer, Droplets, Wind, Sun, Moon, Sparkles, Wrench, Building2, ShieldCheck as ShieldCheckIcon, Cpu as CpuIcon, Battery as BatteryIcon, Wifi as WifiIcon, Smartphone as SmartphoneIcon, Monitor as MonitorIcon, Server as ServerIcon, Cloud as CloudIcon, BarChart3 as BarChart3Icon, PieChart as PieChartIcon, Activity as ActivityIcon, Gauge as GaugeIcon, Thermometer as ThermometerIcon, Droplets as DropletsIcon, Wind as WindIcon, Moon as MoonIcon, Sparkles as SparklesIcon, Lightbulb, Home, Heart, Package, Cpu as CpuIcon2, Database as DatabaseIcon, Wifi as WifiIcon2, Smartphone as SmartphoneIcon2, Monitor as MonitorIcon2, Server as ServerIcon2, Cloud as CloudIcon2, BarChart3 as BarChart3Icon2, PieChart as PieChartIcon2, Activity as ActivityIcon2, Gauge as GaugeIcon2, Thermometer as ThermometerIcon2, Droplets as DropletsIcon2, Wind as WindIcon2, Moon as MoonIcon2, Sparkles as SparklesIcon2 } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Badge } from '@/components/ui/badge';

export default function AutomationPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Automation Systems" imageHint="industrial automation" />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gradient-cem mb-6">
                  Automation Systems
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Advanced automation systems to optimize your industrial and commercial processes. 
                  We provide intelligent solutions for power management, monitoring, and control systems.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">Smart</div>
                    <div className="text-sm text-muted-foreground">Control Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">IoT</div>
                    <div className="text-sm text-muted-foreground">Connected Devices</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-xl text-white text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4">Smart Automation</h3>
                  <p className="text-purple-100 mb-6">
                    Intelligent automation solutions for modern industrial and commercial applications.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold">Industrial</div>
                      <div className="text-purple-200">Automation</div>
                    </div>
                    <div>
                      <div className="font-bold">Smart</div>
                      <div className="text-purple-200">Control</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Automation Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive automation solutions including SCADA systems, PLC programming, 
                and intelligent control systems for industrial and commercial applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Cpu className="w-8 h-8" />}
                title="SCADA Systems"
                description="Supervisory Control and Data Acquisition systems for industrial automation"
                features={["Real-time Monitoring", "Data Acquisition", "Remote Control", "Alarm Systems"]}
                color="purple"
              />
              <ServiceCard
                icon={<Settings className="w-8 h-8" />}
                title="PLC Programming"
                description="Programmable Logic Controller programming and implementation"
                features={["PLC Programming", "Logic Design", "I/O Configuration", "Testing & Commissioning"]}
                color="blue"
              />
              <ServiceCard
                icon={<Database className="w-8 h-8" />}
                title="HMI Systems"
                description="Human Machine Interface design and implementation"
                features={["Interface Design", "Touch Screen", "User Experience", "Integration"]}
                color="cyan"
              />
              <ServiceCard
                icon={<Wifi className="w-8 h-8" />}
                title="IoT Solutions"
                description="Internet of Things connectivity and smart device integration"
                features={["Device Connectivity", "Data Collection", "Cloud Integration", "Analytics"]}
                color="green"
              />
              <ServiceCard
                icon={<Monitor className="w-8 h-8" />}
                title="Control Systems"
                description="Advanced control systems for industrial processes"
                features={["Process Control", "PID Control", "Sequencing", "Optimization"]}
                color="orange"
              />
              <ServiceCard
                icon={<BarChart3 className="w-8 h-8" />}
                title="Data Analytics"
                description="Real-time data analytics and reporting systems"
                features={["Data Collection", "Analytics", "Reporting", "Visualization"]}
                color="red"
              />
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Applications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our automation solutions serve various industrial and commercial sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ApplicationCard
                title="Manufacturing"
                description="Production line automation, quality control, and process optimization"
                icon={<Cog className="w-8 h-8" />}
                color="purple"
              />
              <ApplicationCard
                title="Power Plants"
                description="Power generation monitoring, control systems, and grid management"
                icon={<Zap className="w-8 h-8" />}
                color="blue"
              />
              <ApplicationCard
                title="Water Treatment"
                description="Water purification systems, monitoring, and quality control"
                icon={<Droplets className="w-8 h-8" />}
                color="cyan"
              />
              <ApplicationCard
                title="Building Management"
                description="Smart building systems, HVAC control, and energy management"
                icon={<Building className="w-8 h-8" />}
                color="green"
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
                We handle automation systems with precision and advanced technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SpecCard
                title="Control Systems"
                specs={["SCADA", "PLC", "HMI", "DCS"]}
                icon={<Cpu className="w-8 h-8" />}
                color="purple"
              />
              <SpecCard
                title="Communication"
                specs={["Modbus", "Profibus", "Ethernet", "Wireless"]}
                icon={<Wifi className="w-8 h-8" />}
                color="blue"
              />
              <SpecCard
                title="Programming"
                specs={["Ladder Logic", "Function Block", "Structured Text", "C++"]}
                icon={<Settings className="w-8 h-8" />}
                color="cyan"
              />
              <SpecCard
                title="Data Management"
                specs={["Real-time Data", "Historical Records", "Alarm Management", "Reporting"]}
                icon={<Database className="w-8 h-8" />}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Project Examples */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Recent Automation Projects</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Successfully completed automation projects for various industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Manufacturing Automation"
                description="Complete production line automation with SCADA monitoring system."
                client="Manufacturing Client"
                year="2023"
                system="SCADA"
                color="purple"
              />
              <ProjectCard
                title="Power Plant Control"
                description="Power generation control system with real-time monitoring."
                client="Power Plant"
                year="2023"
                system="DCS"
                color="blue"
              />
              <ProjectCard
                title="Water Treatment Plant"
                description="Automated water treatment system with quality monitoring."
                client="Water Authority"
                year="2023"
                system="PLC"
                color="cyan"
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Automation Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Systematic approach to automation system design and implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessCard
                number="01"
                title="Requirements Analysis"
                description="Comprehensive analysis of automation requirements and system specifications"
                icon={<FileText className="w-6 h-6" />}
                color="purple"
              />
              <ProcessCard
                number="02"
                title="System Design"
                description="Detailed system architecture, hardware selection, and software design"
                icon={<Settings className="w-6 h-6" />}
                color="blue"
              />
              <ProcessCard
                number="03"
                title="Programming & Integration"
                description="PLC programming, HMI development, and system integration"
                icon={<Cpu className="w-6 h-6" />}
                color="cyan"
              />
              <ProcessCard
                number="04"
                title="Testing & Commissioning"
                description="Comprehensive testing, system validation, and handover"
                icon={<CheckCircle className="w-6 h-6" />}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gradient-cem mb-6">Benefits of Automation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our automation solutions provide increased efficiency, reduced costs, and improved 
                  reliability for your industrial and commercial operations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Increased Productivity</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Reduced Operating Costs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Improved Safety</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Real-time Monitoring</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-xl text-white text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-4">Smart Solutions</h3>
                  <p className="text-purple-100 mb-6">
                    Intelligent automation for modern industrial and commercial applications.
                  </p>
                  <Badge className="bg-white text-purple-600">ISO 9001:2015 Certified</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Automation Solutions?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Contact CEM Engineering for comprehensive automation systems, SCADA solutions, 
              and intelligent control systems for industrial and commercial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold">
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
    purple: 'bg-purple-500 text-white',
    blue: 'bg-blue-500 text-white',
    cyan: 'bg-cyan-500 text-white',
    green: 'bg-green-500 text-white',
    orange: 'bg-orange-500 text-white',
    red: 'bg-red-500 text-white'
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
    purple: 'bg-purple-500 text-white',
    blue: 'bg-blue-500 text-white',
    cyan: 'bg-cyan-500 text-white',
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
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function SpecCard({ title, specs, icon, color }) {
  const colorClasses = {
    purple: 'bg-purple-500 text-white',
    blue: 'bg-blue-500 text-white',
    cyan: 'bg-cyan-500 text-white',
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

function ProjectCard({ title, description, client, year, system, color }) {
  const colorClasses = {
    purple: 'bg-purple-100 text-purple-800',
    blue: 'bg-blue-100 text-blue-800',
    cyan: 'bg-cyan-100 text-cyan-800'
  };
  
  return (
    <Card className="group overflow-hidden rounded-xl bg-card border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative block overflow-hidden">
        <Image
          src={`https://placehold.co/600x400/${color === 'purple' ? '7c3aed' : color === 'blue' ? '1e40af' : '0891b2'}/ffffff?text=${encodeURIComponent(title)}`}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute top-4 right-4">
          <Badge className={colorClasses[color]}>
            {system}
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
    purple: 'bg-purple-500 text-white',
    blue: 'bg-blue-500 text-white',
    cyan: 'bg-cyan-500 text-white',
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
