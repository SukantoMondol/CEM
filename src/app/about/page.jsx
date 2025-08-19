import { SiteLayout } from '@/components/site-layout';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Flag, Heart, Award, Users, Clock, MapPin, Phone, Mail, FileText, Shield, Zap, Building2, Wrench, Sun, TrendingUp, CheckCircle, Star, Target, Rocket, Award as AwardIcon, Certificate, User, Users as UsersIcon, Calendar, CheckCircle as CheckCircleIcon, Building, Cog, Power, Globe, Award as AwardIcon2, ShieldCheck, Cpu, Battery, Wifi, Smartphone, Monitor, Server, Cloud, BarChart3, PieChart, Activity, Gauge, Thermometer, Droplets, Wind, Moon, Sparkles, GraduationCap } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="About CEM Engineering" imageHint="modern office" />

        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="particle-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Established 2018 • Bangladesh
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient-cem mb-6 animated-text-gradient">Civil Electrical & Mechanical Engineering Excellence</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  CEM Engineering is a premier sub-contractor company partnering with EPC companies and limited companies in the Bangladesh power sector. 
                  We specialize in substation installation, supply projects, and power plant construction for key entities including 
                  BREB, PGCB, DESCO, DPDC, BPDB, WZPDCL, and NESCO.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  With 5+ years of industry leadership and 22+ skilled professionals including engineers, technical supervisors, mechanics, and technicians, 
                  we leverage cutting-edge equipment while maintaining strict adherence to safety regulations and compliance standards.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                    <div className="text-3xl font-bold text-blue-600 glow-blue">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                    <div className="text-3xl font-bold text-red-600 glow-red">22+</div>
                    <div className="text-sm text-muted-foreground">Skilled Employees</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                    <div className="text-3xl font-bold text-yellow-500 glow-yellow">30+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                    <div className="text-3xl font-bold text-green-600">8</div>
                    <div className="text-sm text-muted-foreground">Power Companies</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-xl blur opacity-75"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image 
                    src="/uploads/power sector excelence .jpeg"
                    alt="Power Sector Excellence"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 opacity-80"></div>
          <div className="particle-container">
            <div className="particle particle-2"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                Established 2018
              </div>
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Company Profile</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                CEM Engineering is a proprietorship company with comprehensive licensing and certification for power sector operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CompanyInfoCard
                icon={<User className="w-8 h-8" />}
                title="Owner Information"
                items={[
                  "Name: MD. MASUM BILLAH",
                  "Qualification: BSc. in EEE",
                  "Experience: 12 years",
                  "CEM Experience: 5+ years"
                ]}
                color="blue"
              />
              
              <CompanyInfoCard
                icon={<CheckCircle className="w-8 h-8" />}
                title="Licenses & Certificates"
                items={[
                  "Electrical Contractor License",
                  "Supervisor Certificate",
                  "Trade License",
                  "Category ABC"
                ]}
                color="red"
              />
              
              <CompanyInfoCard
                icon={<Award className="w-8 h-8" />}
                title="Financial Information"
                items={[
                  "TIN Number: 233095266384",
                  "BIN Number: 003925769-0102",
                  "Bank: NRB Bank Limited",
                  "Account: 1932210000872"
                ]}
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-red-900"></div>
          <div className="particle-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-5"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-white/10 text-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                Our Guiding Principles
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Core Principles</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our values guide every project we undertake and every decision we make.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass border border-white/20 p-8 rounded-xl text-white hover:shadow-glow hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Eye className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
                <p className="text-white/80 text-center">
                  To be the leading power sector engineering company in Bangladesh, delivering excellence in substation installation, power plant construction, and electrical engineering services.
                </p>
              </div>
              
              <div className="glass border border-white/20 p-8 rounded-xl text-white hover:shadow-glow hover:shadow-red-500/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Flag className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
                <p className="text-white/80 text-center">
                  To provide comprehensive EPC services with skilled workforce, modern equipment, and strict adherence to safety standards for power sector projects.
                </p>
              </div>
              
              <div className="glass border border-white/20 p-8 rounded-xl text-white hover:shadow-glow hover:shadow-yellow-500/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Our Values</h3>
                <p className="text-white/80 text-center">
                  Safety, Quality, Integrity, and Innovation. We prioritize safety rules compliance and deliver quality work with modern equipment and skilled personnel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50"></div>
          <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>
          <div className="particle-container">
            <div className="particle particle-2"></div>
            <div className="particle particle-4"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Comprehensive Solutions
              </div>
              <h2 className="text-4xl font-bold text-gradient-cem mb-6 animated-text-gradient">Our Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We specialize in comprehensive power sector solutions across multiple domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExpertiseCard
                icon={<Zap className="w-8 h-8" />}
                title="Substation Installation"
                description="33KV/11KV/0.4KV substation design, supply, installation, testing & commissioning for commercial buildings and factories."
                features={["Design & Engineering", "Supply & Installation", "Testing & Commissioning", "Maintenance Services"]}
                color="blue"
              />
              
              <ExpertiseCard
                icon={<Sun className="w-8 h-8" />}
                title="Solar Power Plants"
                description="Solar plant design, survey, supply, installation, testing & commissioning for residential and commercial applications."
                features={["Design & Survey", "Supply & Installation", "Testing & Commissioning", "Grid Connection"]}
                color="yellow"
              />
              
              <ExpertiseCard
                icon={<Building2 className="w-8 h-8" />}
                title="Civil Construction"
                description="Complete civil construction work and materials supply for power infrastructure projects."
                features={["Foundation Work", "Structure Construction", "Materials Supply", "Quality Control"]}
                color="red"
              />
              
              <ExpertiseCard
                icon={<Wrench className="w-8 h-8" />}
                title="Distribution Lines"
                description="33KV and 11KV distribution line design, survey, supply, new line construction, upgradation & renovation."
                features={["Line Design", "Survey & Planning", "Construction", "Upgradation"]}
                color="green"
              />
              
              <ExpertiseCard
                icon={<ShieldCheck className="w-8 h-8" />}
                title="Maintenance & Servicing"
                description="GIS and AIS old substation maintenance, servicing, operation & damage goods supply, installation testing & commissioning."
                features={["Preventive Maintenance", "Repair Services", "Equipment Supply", "Testing & Commissioning"]}
                color="purple"
              />
              
              <ExpertiseCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="High Voltage Systems"
                description="400KV/230KV/33KV/11KV high voltage substation goods supply, installation, fabrication & erection work."
                features={["High Voltage Equipment", "Installation", "Fabrication", "Erection Work"]}
                color="orange"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Our Skilled Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our team consists of 22+ skilled professionals including engineers, technical supervisors, laborers, mechanics, and technicians.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamCard
                icon={<User className="w-8 h-8" />}
                title="Engineers"
                count="5+"
                description="BSc. in EEE qualified engineers with 12+ years experience"
                color="blue"
              />
              
              <TeamCard
                icon={<Cog className="w-8 h-8" />}
                title="Technical Supervisors"
                count="8+"
                description="Experienced supervisors ensuring quality and safety"
                color="red"
              />
              
              <TeamCard
                icon={<Wrench className="w-8 h-8" />}
                title="Mechanics & Technicians"
                count="6+"
                description="Skilled technicians for equipment and maintenance"
                color="yellow"
              />
              
              <TeamCard
                icon={<Users className="w-8 h-8" />}
                title="Laborers"
                count="3+"
                description="Dedicated laborers for construction and installation"
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 via-white to-red-50 relative overflow-hidden">
          <div className="particle-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-5"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gradient-cem mb-6">Board of Directors</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the visionary leaders guiding CEM Engineering to new heights of excellence and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
              <DirectorCard
                name="MD. MASUM BILLAH"
                position="Chairman & Managing Director"
                imageSrc="/uploads/image copy.png"
                imageHint="chairman portrait"
                bio="BSc. in EEE with 12+ years of industry experience. Visionary leader with expertise in power sector engineering and business management."
                education="BSc. in Electrical & Electronic Engineering"
                experience="12+ years in power sector"
                color="blue"
              />
            </div>
          </div>
        </section>

        {/* Safety & Quality Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gradient-cem mb-6">Safety & Quality Standards</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We strictly follow Safety Rules and safety equipment compliance. Our commitment to quality and safety is reflected in every project we undertake.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Safety Rules Compliance</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Modern Equipment Usage</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">Quality Control Standards</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg">ISO Standards Adherence</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-xl text-white text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4">Safety First</h3>
                  <p className="text-green-100 mb-6">
                    Our commitment to safety and quality ensures reliable and secure power sector solutions.
                  </p>
                  <Badge className="bg-white text-green-600">ISO 9001:2015 Certified</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work with CEM Engineering?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Contact us for comprehensive power sector solutions. We provide substation installation, 
              power plant construction, and electrical engineering services with skilled workforce and modern equipment.
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

function InfoCard({ icon, title, description, color }) {
  const colorClasses = {
    blue: 'bg-blue-500/20 border-blue-500/30',
    red: 'bg-red-500/20 border-red-500/30',
    yellow: 'bg-yellow-500/20 border-yellow-500/30'
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
        <p className="opacity-90">{description}</p>
      </CardContent>
    </Card>
  );
}

function CompanyInfoCard({ icon, title, items, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
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
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className={`w-2 h-2 ${colorClasses[color]} rounded-full`}></div>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ExpertiseCard({ icon, title, description, features, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white'
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

function TeamCard({ icon, title, count, description, color }) {
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
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <div className="text-2xl font-bold text-primary mb-2">{count}</div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function DirectorCard({ name, position, imageSrc, imageHint, bio, education, experience, color }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white border-blue-500/30',
    red: 'bg-red-500 text-white border-red-500/30',
    yellow: 'bg-yellow-500 text-white border-yellow-500/30',
    green: 'bg-green-500 text-white border-green-500/30',
    purple: 'bg-purple-500 text-white border-purple-500/30',
    orange: 'bg-orange-500 text-white border-orange-500/30'
  };
  
  const gradientClasses = {
    blue: 'from-blue-500 to-blue-700',
    red: 'from-red-500 to-red-700',
    yellow: 'from-yellow-500 to-yellow-700',
    green: 'from-green-500 to-green-700',
    purple: 'from-purple-500 to-purple-700',
    orange: 'from-orange-500 to-orange-700'
  };
  
  return (
    <Card className="h-full overflow-hidden bg-card border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-80 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={name} 
          width={400} 
          height={500} 
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          data-ai-hint={imageHint}
        />
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-t ${gradientClasses[color]}`}></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white text-xl font-bold">{name}</h3>
          <p className="text-white/90 text-sm">{position}</p>
        </div>
      </div>
      
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-6">{bio}</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${colorClasses[color]}`}>
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-sm">{education}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${colorClasses[color]}`}>
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-sm">{experience}</span>
          </div>
        </div>
      </CardContent>
      
      <div className={`h-1 w-full bg-gradient-to-r ${gradientClasses[color]}`}></div>
    </Card>
  );
}
