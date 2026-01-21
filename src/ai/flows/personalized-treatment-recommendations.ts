'use server';

/**
 * @fileOverview Provides personalized treatment recommendations based on user-provided photos and desired outcomes.
 *
 * - personalizedTreatmentRecommendations - A function that handles the personalized treatment recommendations process.
 * - PersonalizedTreatmentRecommendationsInput - The input type for the personalizedTreatmentRecommendations function.
 * - PersonalizedTreatmentRecommendationsOutput - The return type for the personalizedTreatmentRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTreatmentRecommendationsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  desiredOutcomes: z.string().describe('The desired aesthetic outcomes of the user.'),
});
export type PersonalizedTreatmentRecommendationsInput = z.infer<typeof PersonalizedTreatmentRecommendationsInputSchema>;

const PersonalizedTreatmentRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of personalized treatment recommendations.'),
  reasoning: z.string().describe('The reasoning behind the recommendations.'),
});
export type PersonalizedTreatmentRecommendationsOutput = z.infer<typeof PersonalizedTreatmentRecommendationsOutputSchema>;

export async function personalizedTreatmentRecommendations(input: PersonalizedTreatmentRecommendationsInput): Promise<PersonalizedTreatmentRecommendationsOutput> {
  return personalizedTreatmentRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTreatmentRecommendationsPrompt',
  input: {schema: PersonalizedTreatmentRecommendationsInputSchema},
  output: {schema: PersonalizedTreatmentRecommendationsOutputSchema},
  prompt: `You are an AI assistant specializing in providing personalized aesthetic treatment recommendations based on user-provided photos and desired outcomes.

  Analyze the user's photo and consider their desired outcomes to provide a list of treatments that would help them achieve their goals. Explain the reasoning behind each recommendation.

  Desired Outcomes: {{{desiredOutcomes}}}
  Photo: {{media url=photoDataUri}}
  `,
});

const personalizedTreatmentRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedTreatmentRecommendationsFlow',
    inputSchema: PersonalizedTreatmentRecommendationsInputSchema,
    outputSchema: PersonalizedTreatmentRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
