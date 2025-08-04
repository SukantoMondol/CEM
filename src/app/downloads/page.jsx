import { PageHeader } from '@/components/page-header';
import { SiteLayout } from '@/components/site-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Search, Filter, Calendar, Tag, Clock, Eye, ArrowDown, FileArchive, File, FileImage, FileSpreadsheet, FileCode, Shield, CheckCircle, MessageSquare, Star, FileQuestion, HardDrive, FileType } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Document categories
const categories = [
  { id: 'all', name: 'All Documents' },
  { id: 'technical', name: 'Technical Documents' },
  { id: 'brochures', name: 'Brochures & Catalogs' },
  { id: 'certificates', name: 'Certificates' },
  { id: 'case-studies', name: 'Case Studies' },
  { id: 'presentations', name: 'Presentations' },
];

// Sample documents data
const documents = [
  {
    id: 1,
    title: 'CEM Engineering Company Profile',
    description: 'Comprehensive overview of our company, services, and expertise in the power sector.',
    category: 'brochures',
    fileType: 'pdf',
    fileSize: '3.2 MB',
    dateAdded: '2023-09-15',
    downloadCount: 245,
    featured: true,
    thumbnailSrc: 'https://placehold.co/600x400/1e40af/ffffff?text=Company+Profile',
    downloadUrl: '#',
  },
  {
    id: 2,
    title: 'High Voltage Solutions Brochure',
    description: 'Detailed information about our high voltage solutions, equipment, and implementation process.',
    category: 'brochures',
    fileType: 'pdf',
    fileSize: '2.8 MB',
    dateAdded: '2023-08-22',
    downloadCount: 189,
    featured: true,
    thumbnailSrc: 'https://placehold.co/600x400/ef4444/ffffff?text=HV+Solutions',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: 'ISO 9001:2015 Certificate',
    description: 'Our quality management system certification demonstrating our commitment to quality standards.',
    category: 'certificates',
    fileType: 'pdf',
    fileSize: '1.5 MB',
    dateAdded: '2023-07-10',
    downloadCount: 132,
    featured: false,
    thumbnailSrc: 'https://placehold.co/600x400/10b981/ffffff?text=ISO+Certificate',
    downloadUrl: '#',
  },
  {
    id: 4,
    title: 'Substation Installation Technical Guide',
    description: 'Technical specifications and guidelines for substation installation projects.',
    category: 'technical',
    fileType: 'pdf',
    fileSize: '4.7 MB',
    dateAdded: '2023-06-05',
    downloadCount: 310,
    featured: true,
    thumbnailSrc: 'https://placehold.co/600x400/f59e0b/ffffff?text=Technical+Guide',
    downloadUrl: '#',
  },
  {
    id: 5,
    title: 'Rural Electrification Case Study',
    description: 'Case study on our successful rural electrification project in northern Bangladesh.',
    category: 'case-studies',
    fileType: 'pdf',
    fileSize: '2.3 MB',
    dateAdded: '2023-05-18',
    downloadCount: 178,
    featured: false,
    thumbnailSrc: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Case+Study',
    downloadUrl: '#',
  },
  {
    id: 6,
    title: 'Power Solutions Presentation',
    description: 'Comprehensive presentation on our power solutions portfolio and implementation strategies.',
    category: 'presentations',
    fileType: 'pptx',
    fileSize: '5.1 MB',
    dateAdded: '2023-04-30',
    downloadCount: 156,
    featured: false,
    thumbnailSrc: 'https://placehold.co/600x400/ec4899/ffffff?text=Presentation',
    downloadUrl: '#',
  },
  {
    id: 7,
    title: 'Automation Systems Catalog',
    description: 'Complete catalog of our automation systems, components, and integration capabilities.',
    category: 'brochures',
    fileType: 'pdf',
    fileSize: '3.9 MB',
    dateAdded: '2023-04-12',
    downloadCount: 203,
    featured: false,
    thumbnailSrc: 'https://placehold.co/600x400/3b82f6/ffffff?text=Automation+Catalog',
    downloadUrl: '#',
  },
  {
    id: 8,
    title: 'Medium Voltage Equipment Specifications',
    description: 'Technical specifications for our medium voltage equipment and installation requirements.',
    category: 'technical',
    fileType: 'pdf',
    fileSize: '2.6 MB',
    dateAdded: '2023-03-25',
    downloadCount: 167,
    featured: false,
    thumbnailSrc: 'https://placehold.co/600x400/f97316/ffffff?text=MV+Specifications',
    downloadUrl: '#',
  },
];

// File type icons mapping
const fileTypeIcons = {
  pdf: <File className="h-6 w-6 text-red-600" />,
  doc: <FileText className="h-6 w-6 text-blue-600" />,
  docx: <FileText className="h-6 w-6 text-blue-600" />,
  xls: <FileSpreadsheet className="h-6 w-6 text-green-600" />,
  xlsx: <FileSpreadsheet className="h-6 w-6 text-green-600" />,
  ppt: <FileImage className="h-6 w-6 text-orange-600" />,
  pptx: <FileImage className="h-6 w-6 text-orange-600" />,
  zip: <FileArchive className="h-6 w-6 text-purple-600" />,
  default: <FileText className="h-6 w-6 text-gray-600" />,
};

// Document card component
function DocumentCard({ document }) {
  const icon = fileTypeIcons[document.fileType] || fileTypeIcons.default;
  
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/10 hover:border-primary/30 hover:translate-y-[-4px]">
      <div className="relative">
        <div className="aspect-video overflow-hidden bg-muted">
          <Image 
            src={document.thumbnailSrc} 
            alt={document.title}
            width={600}
            height={400}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {document.featured && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
            {icon}
            <span className="text-xs font-medium text-primary uppercase">{document.fileType.toUpperCase()}</span>
          </div>
          <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">
            {document.fileSize}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{document.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{document.description}</p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1 text-primary" />
            <span>{document.dateAdded}</span>
          </div>
          <div className="flex items-center">
            <Eye className="h-3 w-3 mr-1 text-primary" />
            <span>{document.downloadCount} downloads</span>
          </div>
        </div>
        
        <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-md hover:shadow-lg transition-all">
          <Link href={document.downloadUrl}>
            <Download className="mr-2 h-4 w-4" />
            Download Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function DownloadsPage() {
  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Downloads" imageHint="document library" />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
          <div className="particle-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gradient-animated mb-6">Resource Center</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access our comprehensive library of technical documents, brochures, certificates, and more to support your power engineering projects.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Search for documents..." 
                    className="pl-10 w-full sm:w-80 h-12 text-base shadow-lg border-primary/20 focus:border-primary"
                  />
                </div>
                <Button size="lg" className="h-12 px-6 bg-primary hover:bg-primary/90">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>
            
            {/* Featured Documents */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gradient-animated">Featured Documents</h3>
                <Button variant="outline" className="gap-2 border-primary/20 text-primary hover:bg-primary/5">
                  <Star className="h-4 w-4" />
                  View All Featured
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {documents.filter(doc => doc.featured).map(document => (
                  <DocumentCard key={document.id} document={document} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Documents Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="w-full md:w-1/4 space-y-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-primary/10 sticky top-24">
                  <h3 className="text-lg font-bold mb-4 flex items-center text-primary">
                    <Filter className="h-5 w-5 mr-2" />
                    Document Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <Button 
                        key={category.id} 
                        variant={category.id === 'all' ? 'default' : 'ghost'}
                        className={`w-full justify-start text-left ${category.id === 'all' ? 'bg-primary text-white hover:bg-primary/90' : 'hover:bg-primary/10'}`}
                      >
                        {category.id === 'technical' && <FileCode className="h-4 w-4 mr-2" />}
                        {category.id === 'brochures' && <FileText className="h-4 w-4 mr-2" />}
                        {category.id === 'certificates' && <Shield className="h-4 w-4 mr-2" />}
                        {category.id === 'case-studies' && <CheckCircle className="h-4 w-4 mr-2" />}
                        {category.id === 'presentations' && <FileImage className="h-4 w-4 mr-2" />}
                        {category.id === 'all' && <Tag className="h-4 w-4 mr-2" />}
                        {category.name}
                        <Badge className="ml-auto" variant="outline">
                          {category.id === 'all' ? documents.length : documents.filter(d => d.category === category.id).length}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none shadow-lg overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full bg-blue-400/30 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 -ml-6 -mb-6 rounded-full bg-blue-300/20 blur-xl"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="mb-4 bg-white/20 p-3 rounded-full w-fit">
                      <FileText className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Need Custom Documents?</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Contact our team for customized technical documentation tailored to your specific project requirements.
                    </p>
                    <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 border-white/40 backdrop-blur-sm">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main Content */}
              <div className="w-full md:w-3/4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-primary/10 mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="text-2xl font-bold text-primary">All Documents</h2>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center text-sm text-muted-foreground bg-white/80 px-3 py-2 rounded-lg border border-border">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>Sort by: </span>
                        <select className="ml-2 bg-transparent border-none focus:outline-none text-primary font-medium">
                          <option>Most Recent</option>
                          <option>Most Downloaded</option>
                          <option>Alphabetical</option>
                        </select>
                      </div>
                      <Tabs defaultValue="grid" className="w-[200px]">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="grid">Grid</TabsTrigger>
                          <TabsTrigger value="list">List</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {documents.map(document => (
                    <DocumentCard key={document.id} document={document} />
                  ))}
                </div>
                
                <div className="mt-12 flex justify-center">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ArrowDown className="mr-2 h-5 w-5" />
                    Load More Documents
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="particle-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center glass p-8 md:p-12 rounded-2xl shadow-glow border border-white/20">
              <h2 className="text-3xl md:text-5xl font-bold text-gradient-animated mb-6">Stay Updated with Our Latest Resources</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive notifications when new technical documents and resources are available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-grow">
                  <Input 
                    placeholder="Your email address" 
                    className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 pl-4 pr-4 backdrop-blur-sm"
                  />
                </div>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 h-12 px-6 font-medium">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                By subscribing, you agree to receive updates about our latest resources and services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Documents</h3>
                <p className="text-white/70">
                  Access detailed specifications, installation guides, and technical manuals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certificates & Compliance</h3>
                <p className="text-white/70">
                  Download our quality certifications, compliance documents, and standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Case Studies</h3>
                <p className="text-white/70">
                  Explore our successful project implementations and client success stories.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}