import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center group mr-6">
      <div className="group-hover:scale-105 transition-transform duration-300">
        <Image 
          src="/uploads/image.png" 
          alt="CEM Engineering Logo" 
          width={120} 
          height={40} 
          className="h-auto w-auto"
          priority
        />
      </div>
    </Link>
  );
}
