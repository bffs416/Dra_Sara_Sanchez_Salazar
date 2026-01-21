import { BeforeAfterSlider } from '@/components/ui/before-after-slider';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BeforeAfterShowcase() {
  const beforeImage = PlaceHolderImages.find(p => p.id === 'before-after-1-before');
  const afterImage = PlaceHolderImages.find(p => p.id === 'before-after-1-after');

  if (!beforeImage || !afterImage) {
    return null;
  }

  return (
    <section id="results" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Transformative Results</h2>
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
              Witness the remarkable, natural-looking transformations our clients experience. Our expertise brings your aesthetic goals to life.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start gap-4 text-sm font-semibold">
              <div className="rounded-full bg-primary text-primary-foreground px-4 py-2">Before</div>
              <div className="rounded-full bg-accent text-accent-foreground px-4 py-2">After</div>
            </div>
          </div>
          <BeforeAfterSlider
            beforeImage={{ src: beforeImage.imageUrl, alt: beforeImage.description, hint: beforeImage.imageHint }}
            afterImage={{ src: afterImage.imageUrl, alt: afterImage.description, hint: afterImage.imageHint }}
          />
        </div>
      </div>
    </section>
  );
}
