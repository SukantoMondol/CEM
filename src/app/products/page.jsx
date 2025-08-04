'use server';

import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Plus } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { products } from '@/lib/data';

async function getProducts() {
  // Return products directly from data.js
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Our Products" imageHint="product manufacturing" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold tracking-tight text-primary">Engineered for Excellence</h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Explore our range of industry-leading products, designed for reliability and performance.
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="group flex flex-col overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative aspect-video">
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={product.imageHint}
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow bg-card">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm flex-grow">
                      {product.description}
                    </p>
                    <Button asChild variant="outline" className="mt-6 w-full">
                      <Link href={product.href}>
                        View Details <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
