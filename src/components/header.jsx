import { Logo } from './logo';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { CtaButtons } from './cta-buttons';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Logo />
        <div className="flex-1 flex items-center justify-center">
            <DesktopNav />
        </div>
        <div className="flex items-center gap-4">
            <div className="hidden md:flex">
                <CtaButtons />
            </div>
            <MobileNav />
        </div>
      </div>
    </header>
  );
}
