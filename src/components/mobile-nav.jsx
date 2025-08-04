'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Menu } from 'lucide-react';
import { navItems } from '@/lib/constants';
import { Logo } from './logo';
import { CtaButtons } from './cta-buttons';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 flex flex-col">
          <div className="p-4 border-b">
            <Logo />
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <Accordion type="multiple" className="w-full">
              {navItems.map((item) =>
                item.children ? (
                  <AccordionItem value={item.title} key={item.title}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col pl-4 border-l ml-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href || '#'}
                            onClick={() => setIsOpen(false)}
                            className="py-2 pl-4 text-muted-foreground hover:text-primary"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href || '#'}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center py-3 text-foreground hover:text-primary font-medium border-b"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </Accordion>
          </nav>
          <div className="p-4 border-t mt-auto">
            <CtaButtons />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
