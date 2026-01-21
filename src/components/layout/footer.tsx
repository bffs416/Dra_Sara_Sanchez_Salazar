import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-headline text-xl font-bold mb-4">Sara Salazar</h3>
            <p className="text-muted-foreground">
              Your trusted partner in aesthetic medicine.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#treatments" className="text-muted-foreground hover:text-primary">Treatments</Link></li>
              <li><Link href="#results" className="text-muted-foreground hover:text-primary">Results</Link></li>
              <li><Link href="#journal" className="text-muted-foreground hover:text-primary">Medical Journal</Link></li>
              <li><Link href="#appointment" className="text-muted-foreground hover:text-primary">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Sara Salazar Aesthetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
