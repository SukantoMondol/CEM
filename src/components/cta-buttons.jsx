import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function CtaButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" asChild>
        <Link href="mailto:info@cemengineering.com">
          <Mail className="mr-2 h-4 w-4" />
          Mail
        </Link>
      </Button>
      <Button asChild>
        <Link href="/contact">
          <Phone className="mr-2 h-4 w-4" />
          Contact
        </Link>
      </Button>
    </div>
  );
}
