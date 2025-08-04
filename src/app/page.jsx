import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check, Wrench, Zap, Building2, Cog, Power, Globe, ShieldCheck, Sun, Shield, Crown, Building, Factory, Phone, Mail, Award as AwardIcon, FileText, User, Users as UsersIcon, Calendar, CheckCircle, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { SiteLayout } from '@/components/site-layout';

export default function Home() {
  return (
    <SiteLayout>
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 animated-bg opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '6s'}}></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          {/* Logo-inspired Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
              <span className="text-blue-600">C</span>
              <span className="text-red-600 lightning-bolt">E</span>
              <span className="text-yellow-500">M</span>
            </h1>
            <div className="mt-4 bg-green-600 text-white px-8 py-3 rounded-full inline-block">
              <span className="text-2xl font-bold">ENGINEERING</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-cem mb-6">
            Civil Electrical & Mechanical Engineering
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Leading power sector solutions with 5+ years of experience in substation installation, power plant construction, 
            and comprehensive EPC services for major power companies across Bangladesh.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold glow-blue">
              <Link href="/solutions" className="flex items-center">
                Our Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold glow-red">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">22+</div>
              <div className="text-sm text-muted-foreground">Skilled Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-muted-foreground">Safety Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gradient-cem mb-6">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive power sector solutions including substation installation, power plant construction, 
              and electrical engineering services for major power companies in Bangladesh.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Zap className="w-12 h-12" />}
              title="Substation Installation" 
              description="33KV/11KV/0.4KV substation design, supply, installation, testing & commissioning for commercial buildings and factories."
              color="blue"
            />
            <ServiceCard 
              icon={<Building2 className="w-12 h-12" />}
              title="Civil Construction" 
              description="Complete civil construction work and materials supply for power infrastructure projects."
              color="red"
            />
            <ServiceCard 
              icon={<Sun className="w-12 h-12" />}
              title="Solar Plant Solutions" 
              description="Solar plant design, survey, supply, installation, testing & commissioning for residential and commercial applications."
              color="yellow"
            />
            <ServiceCard 
              icon={<Power className="w-12 h-12" />}
              title="High Voltage Systems" 
              description="400KV/230KV/33KV/11KV high voltage substation goods supply, installation, fabrication & erection work."
              color="green"
            />
            <ServiceCard 
              icon={<Wrench className="w-12 h-12" />}
              title="Distribution Lines" 
              description="33KV and 11KV distribution line design, survey, supply, new line construction, upgradation & renovation."
              color="blue"
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-12 h-12" />}
              title="Maintenance & Servicing" 
              description="GIS and AIS old substation maintenance, servicing, operation & damage goods supply, installation testing & commissioning."
              color="red"
            />
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">About CEM Engineering</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A skilled sub-contractor company dealing with EPC companies and limited companies in Bangladesh power sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 glass rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Owner</h3>
              <p className="opacity-80">MD. MASUM BILLAH<br/>BSc. in EEE<br/>12 Years Experience</p>
            </div>
            
            <div className="text-center p-6 glass rounded-2xl">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed</h3>
              <p className="opacity-80">Electrical Contractor License<br/>Category ABC<br/>Supervisor Certificate</p>
            </div>
            
            <div className="text-center p-6 glass rounded-2xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Team</h3>
              <p className="opacity-80">22+ Skilled Employees<br/>Engineers & Technicians<br/>Modern Equipment</p>
            </div>
            
            <div className="text-center p-6 glass rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AwardIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified</h3>
              <p className="opacity-80">Safety Rules Compliant<br/>ISO Standards<br/>Quality Assured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gradient-cem mb-8">Current Projects</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                CEM Engineering is currently working on multiple power sector projects across Bangladesh, 
                delivering excellence in electrical and civil engineering.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Narshigndi PBS-1 & PBS-2 BREB</h3>
                    <p className="text-muted-foreground">33 and 11 kv distribution line projects</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Madhopdi PBS-1 BREB</h3>
                    <p className="text-muted-foreground">33 and 11 kv distribution line installation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sherpur 132/33 KV Grid Substation</h3>
                    <p className="text-muted-foreground">BREB Bay Extension Upgradation Work</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold">
                <Link href="/projects" className="flex items-center">
                  View All Projects <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="modern-card p-8 rounded-3xl">
                <div className="text-center">
                  <div className="text-8xl mb-6">⚡</div>
                  <h3 className="text-3xl font-bold text-gradient-cem mb-4">Power Sector Excellence</h3>
                  <p className="text-lg text-muted-foreground mb-6">Serving major power companies with innovative solutions and reliable engineering services.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-blue-600">BREB</div>
                      <div>Rural Electrification</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600">PGCB</div>
                      <div>Power Grid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Power Companies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gradient-cem mb-6">Our Power Sector Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with major power companies and government entities across Bangladesh, 
              providing comprehensive engineering solutions for the power sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* BREB */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 partner-card-hover">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-white" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">BREB</h3>
                <p className="text-muted-foreground mb-4">Bangladesh Rural Electrification Board - Substation and distribution line projects.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-semibold">Rural Power</span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>
            
            {/* PGCB */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 partner-card-hover">
              <div className="aspect-video bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">PGCB</h3>
                <p className="text-muted-foreground mb-4">Power Grid Company of Bangladesh - High voltage transmission and substation projects.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-red-600 font-semibold">Grid Infrastructure</span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>
            
            {/* DESCO/DPDC */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 partner-card-hover">
              <div className="aspect-video bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center">
                <Cog className="w-16 h-16 text-white" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">DESCO/DPDC</h3>
                <p className="text-muted-foreground mb-4">Dhaka Power Distribution Companies - Urban power distribution and substation projects.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-600 font-semibold">Urban Power</span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>

            {/* BPDB */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 partner-card-hover">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Power className="w-16 h-16 text-white" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">BPDB</h3>
                <p className="text-muted-foreground mb-4">Bangladesh Power Development Board - Power generation and distribution projects.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-semibold">Power Generation</span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>

            {/* WZPDCL */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 partner-card-hover">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">WZPDCL</h3>
                <p className="text-muted-foreground mb-4">West Zone Power Distribution Company Limited - Regional power distribution.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-semibold">West Zone</span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>

            {/* NESCO */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 partner-card-hover">
              <div className="aspect-video bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">NESCO</h3>
                <p className="text-muted-foreground mb-4">Northern Electricity Supply Company - Northern region power distribution.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-indigo-600 font-semibold">Northern Region</span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>

            {/* PBS Companies */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 partner-card-hover">
              <div className="aspect-video bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <Factory className="w-16 h-16 text-white" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">PBS Companies</h3>
                <p className="text-muted-foreground mb-4">Palli Bidyut Samity - Rural electricity cooperatives across Bangladesh.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-teal-600 font-semibold">Rural Co-ops</span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>

            {/* Private Sector */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 partner-card-hover">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <Crown className="w-16 h-16 text-white" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">Private Sector</h3>
                <p className="text-muted-foreground mb-4">Industrial clients, factories, and commercial establishments.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-600 font-semibold">Industrial</span>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Additional Partners Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gradient-cem mb-4">Trusted by Industry Leaders</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We collaborate with leading companies across various sectors, delivering excellence in power sector solutions
              </p>
            </div>
            
            {/* Partners by Category */}
            <div className="space-y-12">
              {/* Industrial & Manufacturing */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-2">Industrial & Manufacturing</h4>
                  <p className="text-blue-700">Steel, Textile, and Manufacturing Industries</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { name: 'RSRM Factory', type: 'Steel Industry' },
                    { name: 'Palmal Group', type: 'Textile Industry' },
                    { name: 'Modern Steel', type: 'Steel Industry' },
                    { name: 'Zamil Steel', type: 'Steel Industry' },
                    { name: 'MSML', type: 'Steel Mills' },
                    { name: 'Adamjee EPZ', type: 'Industrial Zone' }
                  ].map((partner, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200/50 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                      <div className="p-4 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <Building className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-sm text-blue-900 mb-1">{partner.name}</h5>
                        <p className="text-xs text-blue-600">{partner.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering & Infrastructure */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-900 mb-2">Engineering & Infrastructure</h4>
                  <p className="text-green-700">Power, Construction, and Infrastructure Solutions</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { name: 'Energypac', type: 'Engineering' },
                    { name: 'KEC International', type: 'Infrastructure' },
                    { name: 'ERA Construction', type: 'Construction' },
                    { name: 'HS Engineering', type: 'Engineering' },
                    { name: 'Novelty Infrastructure', type: 'Infrastructure' },
                    { name: 'Ideal Electrical', type: 'Electrical' }
                  ].map((partner, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-green-200/50 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                      <div className="p-4 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <Wrench className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-sm text-green-900 mb-1">{partner.name}</h5>
                        <p className="text-xs text-green-600">{partner.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Power & Energy */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-yellow-900 mb-2">Power & Energy</h4>
                  <p className="text-yellow-700">Solar, Transmission, and Power Solutions</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { name: 'Solarland BD', type: 'Solar Energy' },
                    { name: 'Kalpataru Power', type: 'Power Transmission' },
                    { name: 'Reverie Power', type: 'Power Automation' },
                    { name: 'TS Transformer', type: 'Transformer Supply' },
                    { name: 'Optimal Track', type: 'Automation' },
                    { name: 'CEPZ', type: 'Export Zone' }
                  ].map((partner, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-yellow-200/50 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                      <div className="p-4 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-sm text-yellow-900 mb-1">{partner.name}</h5>
                        <p className="text-xs text-yellow-600">{partner.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Government & Telecom */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-purple-900 mb-2">Government & Telecommunications</h4>
                  <p className="text-purple-700">Public Sector and Communication Networks</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { name: 'Government of BD', type: 'Government' },
                    { name: 'Grameenphone', type: 'Telecommunications' },
                    { name: 'China National Tech', type: 'International' },
                    { name: 'Multi Trade Enterprise', type: 'Trading Company' }
                  ].map((partner, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-purple-200/50 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                      <div className="p-4 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-sm text-purple-900 mb-1">{partner.name}</h5>
                        <p className="text-xs text-purple-600">{partner.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with animated particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-red-900 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="particle-container">
            {/* Animated particles would be handled by CSS */}
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                <span className="block">Ready to</span>
                <span className="text-gradient-animated">Power Your Project?</span>
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Partner with CEM Engineering for innovative power sector solutions that deliver reliability, efficiency, and excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                    <Check className="w-5 h-5 text-blue-200" />
                  </div>
                  <span>Comprehensive substation installation services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center">
                    <Check className="w-5 h-5 text-red-200" />
                  </div>
                  <span>Expert power plant construction and management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/30 flex items-center justify-center">
                    <Check className="w-5 h-5 text-yellow-200" />
                  </div>
                  <span>Specialized electrical engineering solutions</span>
                </div>
              </div>
            </div>
            
            {/* Right side card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-glow">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get Started Today</h3>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-6 text-lg font-semibold rounded-xl w-full">
                    <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                      <Phone className="w-5 h-5" />
                      Get Free Quote
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl w-full">
                    <Link href="/solutions" className="flex items-center justify-center gap-2 w-full">
                      <Lightbulb className="w-5 h-5" />
                      Explore Solutions
                    </Link>
                  </Button>
                </div>
                <div className="text-center text-white/80 text-sm">
                  <p>Join our growing list of satisfied clients across Bangladesh</p>
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">B</div>
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold">P</div>
                    <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-xs font-bold">D</div>
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold">N</div>
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold">W</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ServiceCard({ icon, title, description, color }) {
  const colorClasses = {
    blue: 'hover:glow-blue border-blue-200 hover:border-blue-400',
    red: 'hover:glow-red border-red-200 hover:border-red-400',
    yellow: 'hover:glow-yellow border-yellow-200 hover:border-yellow-400',
    green: 'hover:glow-green border-green-200 hover:border-green-400'
  };
  
  return (
    <Card className={`modern-card p-8 border-2 ${colorClasses[color]} transition-all duration-300 transform hover:scale-105`}>
      <div className="flex justify-center items-center h-20 w-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        {icon}
      </div>
      <CardHeader className="p-0 text-center">
        <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-4 text-center">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
