'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { SiteLayout } from '@/components/site-layout';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Clock, User, Building2, Award, Users, CheckCircle, ArrowRight, Send, MessageSquare, Globe, Shield, Zap } from 'lucide-react';
import { handleContactFormSubmission } from './actions';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const result = await handleContactFormSubmission(formData);
    
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting CEM Engineering. We'll get back to you within 24 hours.",
      });
      event.target.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Message Not Sent",
        description: "There was a problem sending your message. Please try again or contact us directly.",
      });
    }
  };

  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Contact CEM Engineering" imageHint="contact center" />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient-cem mb-6">
                Let's Power Your Project Together
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to start your power sector project? Contact CEM Engineering for comprehensive 
                electrical and mechanical engineering solutions. Our expert team is here to help you 
                achieve excellence in every project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-gradient-cem mb-4">Get In Touch</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Connect with our expert team for all your power sector engineering needs. 
                    We're here to provide innovative solutions and exceptional service.
                  </p>
                </div>

                <div className="space-y-6">
                  <ContactInfoCard
                    icon={<Phone className="h-6 w-6" />}
                    title="Call Us"
                    primary="+880 1712-123456"
                    secondary="+880 1812-123456"
                    description="Available Mon-Fri, 8:00 AM - 6:00 PM"
                    color="blue"
                    href="tel:+8801712123456"
                  />
                  
                  <ContactInfoCard
                    icon={<Mail className="h-6 w-6" />}
                    title="Email Us"
                    primary="info@cemengineering.com"
                    secondary="projects@cemengineering.com"
                    description="We'll respond within 24 hours"
                    color="red"
                    href="mailto:info@cemengineering.com"
                  />
                  
                  <ContactInfoCard
                    icon={<MapPin className="h-6 w-6" />}
                    title="Visit Our Office"
                    primary="House #123, Road #12, Block #A"
                    secondary="Banani, Dhaka-1213, Bangladesh"
                    description="Schedule a meeting with our team"
                    color="green"
                  />
                  
                  <ContactInfoCard
                    icon={<Clock className="h-6 w-6" />}
                    title="Business Hours"
                    primary="Monday - Friday: 8:00 AM - 6:00 PM"
                    secondary="Saturday: 9:00 AM - 2:00 PM"
                    description="Sunday: Closed"
                    color="yellow"
                  />
                </div>

                {/* Company Info */}
                <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Why Choose CEM Engineering?</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>5+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>22+ Skilled Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>Licensed Contractor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Safety Compliant</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
                      <p className="text-muted-foreground">Tell us about your project requirements</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                          <Input 
                            name="name" 
                            placeholder="Your full name" 
                            required 
                            disabled={isSubmitting}
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                          <Input 
                            name="phone" 
                            type="tel" 
                            placeholder="+880 1XXX-XXXXXX" 
                            disabled={isSubmitting}
                            className="h-12"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          required 
                          disabled={isSubmitting}
                          className="h-12"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Company/Organization</label>
                        <Input 
                          name="company" 
                          placeholder="Your company name" 
                          disabled={isSubmitting}
                          className="h-12"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Project Type *</label>
                        <select 
                          name="projectType" 
                          required 
                          disabled={isSubmitting}
                          className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select project type</option>
                          <option value="substation">Substation Installation</option>
                          <option value="solar">Solar Power Plant</option>
                          <option value="civil">Civil Construction</option>
                          <option value="distribution">Distribution Lines</option>
                          <option value="maintenance">Maintenance & Servicing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Subject *</label>
                        <Input 
                          name="subject" 
                          placeholder="Brief description of your inquiry" 
                          required 
                          disabled={isSubmitting}
                          className="h-12"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                        <Textarea 
                          name="message" 
                          placeholder="Tell us about your project requirements, timeline, and any specific needs..." 
                          rows={5} 
                          required 
                          disabled={isSubmitting}
                          className="resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient-cem mb-4">Find Our Office</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit our headquarters in Dhaka, Bangladesh. We're conveniently located in the heart of the city, 
                easily accessible for meetings and consultations.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="aspect-video w-full rounded-2xl overflow-hidden border shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.912662283945!2d90.3888396154336!3d23.75055899459207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e36247de!2sBanani%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1676886915643!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Office Location</h3>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>House #123, Road #12, Block #A<br />Banani, Dhaka-1213, Bangladesh</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+880 1712-123456</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>info@cemengineering.com</span>
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function ContactInfoCard({ icon, title, primary, secondary, description, color, href }) {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    red: 'bg-red-500 text-white',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-white'
  };
  
  const Component = href ? 'a' : 'div';
  
  return (
    <Component 
      href={href}
      className={`group p-6 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-3 rounded-full ${colorClasses[color]}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
          <p className="text-primary font-semibold mb-1">{primary}</p>
          {secondary && <p className="text-primary font-medium mb-2">{secondary}</p>}
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        {href && (
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>
    </Component>
  );
}
