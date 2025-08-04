'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { SiteLayout } from '@/components/site-layout';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { handleAddProduct } from './actions';
import { Label } from '@/components/ui/label';

export default function AddProductPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const result = await handleAddProduct(formData);
    
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Product Added!",
        description: "The new product has been successfully created.",
      });
      router.push('/products');
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.error || "There was a problem creating the product. Please try again.",
      });
    }
  };

  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Add New Product" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Product Title</Label>
                    <Input id="title" name="title" placeholder="e.g., High-Voltage Transformer" required disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="description">Product Description</Label>
                    <Textarea id="description" name="description" placeholder="Describe the product..." rows={4} required disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="image">Product Image</Label>
                    <Input id="image" name="image" type="file" required disabled={isSubmitting} accept="image/*" />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding Product...
                      </>
                    ) : (
                      'Add Product'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
