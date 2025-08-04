'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { navItems } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const DesktopNavItem = ({ item }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const isActive = item.href ? pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) : false;

  if (!item.children) {
    return (
      <Button asChild variant="ghost" className={cn("font-medium text-foreground hover:text-primary", isActive && "text-primary")}>
        <Link href={item.href || '#'}>{item.title}</Link>
      </Button>
    );
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className={cn('gap-1 font-medium text-foreground hover:text-primary', { 'text-primary bg-accent': isOpen || isActive })}>
            {item.title}
            <ChevronDown
              className={cn('h-4 w-4 transition-transform duration-200', {
                'rotate-180': isOpen,
              })}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-56 p-2"
          align="start"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid gap-1">
            {item.children.map((child) => (
              <Button asChild key={child.title} variant="ghost" className="w-full justify-start font-normal">
                <Link href={child.href || '#'}>{child.title}</Link>
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-2">
      {navItems.map((item) => (
        <DesktopNavItem key={item.title} item={item} />
      ))}
    </nav>
  );
}
