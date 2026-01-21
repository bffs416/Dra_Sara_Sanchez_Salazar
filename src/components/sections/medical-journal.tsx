import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const journalEntries = [
  {
    id: 'journal-1',
    title: 'The Science of Collagen: How Radiofrequency Tightens Skin',
    excerpt: 'Delve into the cellular mechanisms behind radiofrequency therapy and understand how it naturally stimulates your body\'s collagen production for lasting results.',
  },
  {
    id: 'journal-2',
    title: 'Beyond Hydration: The Versatility of Hyaluronic Acid Fillers',
    excerpt: 'Hyaluronic acid is more than just a moisturizer. Learn how skilled practitioners use different formulations to lift, contour, and rejuvenate facial features.',
  },
  {
    id: 'journal-3',
    title: 'Choosing Your Practitioner: What to Look For',
    excerpt: 'Your safety and results depend on the expertise of your provider. We break down the essential qualifications and questions you should ask during a consultation.',
  },
];

export function MedicalJournal() {
  return (
    <section id="journal" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">From Our Medical Journal</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Stay informed with the latest insights and advancements in aesthetic science.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalEntries.map((entry) => {
            const image = PlaceHolderImages.find(p => p.id === entry.id);
            return (
              <Card key={entry.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {image && (
                  <div className="relative aspect-video">
                    <Image
                      src={image.imageUrl}
                      alt={entry.title}
                      data-ai-hint={image.imageHint}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-headline text-xl font-bold mb-2">{entry.title}</h3>
                  <p className="text-muted-foreground flex-1 mb-4">{entry.excerpt}</p>
                  <Button variant="link" asChild className="p-0 h-auto self-start font-semibold text-primary">
                    <Link href="#">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
