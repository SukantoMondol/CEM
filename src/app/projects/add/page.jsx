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
import { Label } from '@/components/ui/label';
import { handleAddProject } from './actions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AddProjectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectStatus, setProjectStatus] = useState('ongoing');
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append('status', projectStatus); // Add the status to the form data
    
    try {
      const result = await handleAddProject(formData);
      
      if (result.success) {
        toast({
          title: "Project Added!",
          description: "The new project has been successfully created.",
        });
        router.push('/projects');
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.error || "There was a problem creating the project. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <div className="bg-background/80 backdrop-blur-sm">
        <PageHeader title="Add New Project" imageSrc="https://placehold.co/1920x300" imageHint="blueprint" />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input id="title" name="title" placeholder="Enter project title" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea 
                      id="description" 
                      name="description" 
                      placeholder="Enter detailed project description" 
                      className="min-h-32" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="client">Client</Label>
                      <Input id="client" name="client" placeholder="Client name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" name="location" placeholder="Project location" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select name="category" defaultValue="transmission">
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transmission">Transmission Lines</SelectItem>
                          <SelectItem value="substation">Substations</SelectItem>
                          <SelectItem value="solar">Solar Plants</SelectItem>
                          <SelectItem value="distribution">Distribution Lines</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="year">Year</Label>
                      <Input id="year" name="year" placeholder="Project year" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="status">Project Status</Label>
                    <Select value={projectStatus} onValueChange={setProjectStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="features">Key Features (comma separated)</Label>
                    <Input id="features" name="features" placeholder="Feature 1, Feature 2, Feature 3" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image">Project Image</Label>
                    <Input id="image" name="image" type="file" accept="image/*" required />
                    <p className="text-xs text-muted-foreground">Upload a high-quality image representing the project (max 5MB)</p>
                  </div>
                  
                  {projectStatus === 'completed' && (
                    <div className="space-y-2">
                      <Label htmlFor="testimonial">Client Testimonial (optional)</Label>
                      <Textarea 
                        id="testimonial" 
                        name="testimonial" 
                        placeholder="Add client testimonial for completed projects" 
                        className="min-h-24" 
                      />
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding Project...
                      </>
                    ) : (
                      'Add Project'
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