import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center group mr-6">
      <div className="group-hover:scale-105 transition-transform duration-300">
        <Image 
          src="/uploads/image.png" 
          alt="CEM Engineering Logo" 
          width={80} 
          height={30} 
          className="h-auto w-auto max-h-8"
          priority
        />
      </div>
    </Link>
  );
}
