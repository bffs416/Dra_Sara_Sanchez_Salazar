import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sparkles, Syringe, Signal } from 'lucide-react';

const treatments = [
  {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: 'Hair Transplant',
    description: 'Advanced FUE & DHI techniques for natural, permanent results. Restore your hairline and confidence.',
  },
  {
    icon: <Syringe className="h-8 w-8 text-accent" />,
    title: 'Hyaluronic Acid',
    description: 'Smooth wrinkles, restore volume, and contour your features with premium dermal fillers for a refreshed look.',
  },
  {
    icon: <Signal className="h-8 w-8 text-accent" />,
    title: 'Radiofrequency Therapy',
    description: 'Non-invasive skin tightening and rejuvenation. Stimulate collagen for firmer, younger-looking skin.',
  },
];

export function TreatmentCatalog() {
  return (
    <section id="treatments" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Signature Treatments</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our curated selection of treatments, each designed to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Card key={treatment.title} className="text-center flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="mb-4 p-4 bg-accent/10 rounded-full">
                  {treatment.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{treatment.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
