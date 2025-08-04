import { Logo } from './logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Clock, Award, Shield, Zap, Building2, Wrench, Rss, Lightbulb, HardHat, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                </div>
                <div className="bg-green-600 text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-bold">ENGINEERING</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Civil Electrical & Mechanical Engineering - Leading power sector solutions with 5+ years of experience in substation installation, power plant construction, and comprehensive EPC services.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/profile.php?id=61551042984867" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link href="https://www.linkedin.com/in/cem-engineering-3b79321b0/" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2 text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 group-hover:bg-red-300 transition-colors"></span>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:bg-yellow-300 transition-colors"></span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-green-300 transition-colors"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-300 transition-colors"></span>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Our Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/solutions/substation" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <Zap className="w-4 h-4 mr-3 text-blue-400 group-hover:text-blue-300" />
                    Substation Installation
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/solar" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <Rss className="w-4 h-4 mr-3 text-red-400 group-hover:text-red-300" />
                    Solar Plant Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/civil" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <Building2 className="w-4 h-4 mr-3 text-yellow-400 group-hover:text-yellow-300" />
                    Civil Construction
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/distribution" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <Lightbulb className="w-4 h-4 mr-3 text-green-400 group-hover:text-green-300" />
                    Distribution Lines
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/maintenance" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <ShieldCheck className="w-4 h-4 mr-3 text-purple-400 group-hover:text-purple-300" />
                    Maintenance & Servicing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-400" />
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      Army House, Lift-2C, Hazi Road,<br />
                      Boatghat, Khilkhet, Dhaka-1229<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300 hover:text-white transition-colors">+880 1868-410755</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 hover:text-white transition-colors">+880 1810-052944</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 hover:text-white transition-colors">cemengineering2019@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700">
          <div className="container py-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300">Subscribe to our newsletter for the latest power sector projects and engineering insights.</p>
              </div>
              <div className="flex space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-black/20">
          <div className="container py-6">
            <div className="flex justify-center items-center">
              <div className="text-sm text-gray-400 text-center">
                <span>&copy; {new Date().getFullYear()} CEM Engineering. All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
