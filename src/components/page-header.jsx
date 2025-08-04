import Image from 'next/image';

export function PageHeader({ 
  title, 
  imageSrc = "https://placehold.co/1920x300", 
  imageHint = "abstract background" 
}) {
  return (
    <section className="relative h-72 flex items-center justify-center text-center bg-accent/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="z-20 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight animated-gradient-text">{title}</h1>
      </div>
    </section>
  );
}
