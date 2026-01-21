import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/50 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container max-w-7xl text-center text-primary-foreground">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-md">
            The Science of Beauty, Perfected.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-sm">
            Discover a new era of aesthetic medicine where your unique beauty is enhanced through personalized, state-of-the-art treatments.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="#appointment">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
