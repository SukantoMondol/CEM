'use server';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { SiteLayout } from '@/components/site-layout';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Building, Check, Download, FileText, Share2 } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/lib/data';

async function getProductBySlug(slug) {
  // Find the product with the matching slug
  const product = products.find(p => {
    // Extract slug from href (e.g., "/products/switchgear" -> "switchgear")
    const hrefSlug = p.href.split('/').pop();
    return hrefSlug === slug;
  });
  
  return product || null;
}

export default async function ProductDetailPage({ params }) {
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  // Find related products (excluding the current one)
  const relatedProducts = products
    .filter(p => p.title !== product.title)
    .slice(0, 3);

  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title={product.title} imageHint={product.imageHint} />
        
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Button asChild variant="outline" size="sm">
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl border border-primary/10 shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                <Image
                  src={product.imageSrc}
                  alt={product.title}
                  width={800}
                  height={600}
                  className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={product.imageHint}
                />
              </div>
              
              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-primary mb-4">{product.title}</h1>
                  <p className="text-xl text-muted-foreground">{product.longDescription || product.description}</p>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download Datasheet
                  </Button>
                  <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Applications */}
            {product.applications && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8">Applications</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.applications.map((application, index) => (
                    <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground">{application}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Technical Specifications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">Technical Specifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{key}</h3>
                      <p className="text-primary text-lg">{value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Documentation */}
            <div className="mb-16 bg-secondary/30 rounded-xl p-8 border border-primary/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Documentation</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Download comprehensive documentation for this product, including installation guides, maintenance manuals, and technical specifications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Installation Guide
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Maintenance Manual
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Technical Datasheet
                </Button>
              </div>
            </div>
            
            {/* Related Products */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Related Products</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, index) => {
                  // Extract slug from href (e.g., "/products/switchgear" -> "switchgear")
                  const productSlug = relatedProduct.href.split('/').pop();
                  return (
                    <Card key={index} className="group overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:-translate-y-1">
                      <div className="relative aspect-video">
                        <Image
                          src={relatedProduct.imageSrc}
                          alt={relatedProduct.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={relatedProduct.imageHint}
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow bg-card">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {relatedProduct.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm flex-grow">
                          {relatedProduct.description}
                        </p>
                        <Button asChild variant="outline" className="mt-6 w-full">
                          <Link href={relatedProduct.href}>
                            View Details
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}