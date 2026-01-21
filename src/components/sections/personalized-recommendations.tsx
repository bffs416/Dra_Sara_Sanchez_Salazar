'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Upload, Lightbulb, Bot, CircleCheck } from 'lucide-react';
import { getPersonalizedRecommendations } from '@/app/actions';
import type { PersonalizedTreatmentRecommendationsOutput } from '@/ai/flows/personalized-treatment-recommendations';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ResultState = (PersonalizedTreatmentRecommendationsOutput & { error?: undefined }) | { error: string; recommendations?: undefined; reasoning?: undefined };


export function PersonalizedRecommendations() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [desiredOutcomes, setDesiredOutcomes] = useState('');
  const [result, setResult] = useState<ResultState | null>(null);
  const [isPending, startTransition] = useTransition();

  const placeholderImage = PlaceHolderImages.find(p => p.id === 'recommendation-placeholder');


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setResult(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !desiredOutcomes) return;

    startTransition(async () => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const photoDataUri = reader.result as string;
        if (!photoDataUri) {
          setResult({ error: 'Could not read file.' });
          return;
        }
        const response = await getPersonalizedRecommendations({ photoDataUri, desiredOutcomes });
        setResult(response);
      };
      reader.onerror = () => {
        setResult({ error: 'Failed to read file for processing.' });
      };
    });
  };

  return (
    <section id="ai-advisor" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Your Personal AI Aesthetic Advisor</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Curious about which treatments are right for you? Upload a photo and describe your goals to receive a personalized recommendation from our advanced AI.
            </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-4 sm:p-8">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-64 h-64 border-2 border-dashed rounded-lg flex items-center justify-center text-muted-foreground">
                  {preview ? (
                    <Image src={preview} alt="Photo preview" layout="fill" objectFit="cover" className="rounded-lg" />
                  ) : placeholderImage ? (
                    <Image src={placeholderImage.imageUrl} alt={placeholderImage.description} data-ai-hint={placeholderImage.imageHint} layout="fill" objectFit="cover" className="rounded-lg opacity-20" />
                  ) : null }
                  {!preview && <Upload className="h-12 w-12" />}
                </div>
                <Button asChild variant="outline">
                  <label className="cursor-pointer">
                    <Upload className="mr-2 h-4 w-4" />
                    {file ? 'Change Photo' : 'Upload Photo'}
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </Button>
                <p className="text-xs text-muted-foreground">For demonstration only. Photos are not stored.</p>
              </div>

              <div className="flex flex-col space-y-4">
                <label htmlFor="desiredOutcomes" className="font-semibold text-lg flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-accent"/>
                  Describe Your Desired Outcomes
                </label>
                <Textarea
                  id="desiredOutcomes"
                  value={desiredOutcomes}
                  onChange={(e) => setDesiredOutcomes(e.target.value)}
                  placeholder="e.g., 'Reduce forehead wrinkles', 'Add volume to my lips', 'Improve skin texture'"
                  rows={5}
                  required
                />
                <Button type="submit" disabled={isPending || !file || !desiredOutcomes}>
                  {isPending ? (
                    <>
                      <Bot className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Bot className="mr-2 h-4 w-4" />
                      Get Recommendations
                    </>
                  )}
                </Button>
                
                {result && (
                  <div className="mt-6">
                    {result.error ? (
                      <Alert variant="destructive">
                        <AlertTitle>Analysis Failed</AlertTitle>
                        <AlertDescription>{result.error}</AlertDescription>
                      </Alert>
                    ) : (
                      <Alert variant="default" className="bg-green-50 border-green-200">
                        <CircleCheck className="h-4 w-4 !text-green-600"/>
                        <AlertTitle className="text-green-800">Your Personalized Recommendations</AlertTitle>
                        <AlertDescription className="text-green-700">
                          <h4 className="font-semibold mt-4 mb-2">Suggested Treatments:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {result.recommendations?.map((rec, i) => <li key={i}>{rec}</li>)}
                          </ul>
                          <h4 className="font-semibold mt-4 mb-2">Reasoning:</h4>
                          <p>{result.reasoning}</p>
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
