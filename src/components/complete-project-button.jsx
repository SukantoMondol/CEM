'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';
import { completeProject } from '@/app/projects/actions';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function CompleteProjectButton({ slug, projectTitle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleComplete = async () => {
    setIsLoading(true);
    try {
      const result = await completeProject(slug);
      
      if (result.success) {
        toast({
          title: 'Project Completed',
          description: `${projectTitle} has been marked as completed.`,
          variant: 'success',
        });
        
        // Close the dialog
        setIsOpen(false);
        
        // Redirect to the projects page after a short delay
        setTimeout(() => {
          router.push('/projects');
          router.refresh();
        }, 1500);
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to complete the project. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button 
          variant="success" 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
        >
          <CheckCircle className="mr-2 h-5 w-5" />
          Mark as Completed
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Complete Project</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to mark <span className="font-semibold">{projectTitle}</span> as completed? 
            This will move the project from ongoing to completed projects.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleComplete}
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Confirm'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}