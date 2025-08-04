import Link from 'next/link';
import { Zap } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="font-bold text-2xl text-foreground flex items-center gap-2 group mr-6">
      <div className="bg-primary p-2 rounded-lg text-primary-foreground group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all duration-300">
        <Zap className="h-6 w-6" />
      </div>
      <span className="text-glow">Reverie</span>
    </Link>
  );
}
