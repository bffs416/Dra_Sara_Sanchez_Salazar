import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Treatments', href: '#treatments' },
  { name: 'Results', href: '#results' },
  { name: 'AI Advisor', href: '#ai-advisor' },
  { name: 'Journal', href: '#journal' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">Sara Salazar</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="#appointment">Book Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
