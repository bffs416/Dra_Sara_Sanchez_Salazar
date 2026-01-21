// @ts-nocheck
'use server';

import { personalizedTreatmentRecommendations, PersonalizedTreatmentRecommendationsInput, PersonalizedTreatmentRecommendationsOutput } from '@/ai/flows/personalized-treatment-recommendations';

// Define a type for the successful output
type SuccessOutput = PersonalizedTreatmentRecommendationsOutput;

// Define a type for the error output
type ErrorOutput = {
  error: string;
};

// The server action can return either the success or error type
export async function getPersonalizedRecommendations(
  input: PersonalizedTreatmentRecommendationsInput
): Promise<SuccessOutput | ErrorOutput> {
  try {
    // Validate input if necessary, though Zod in the flow does this.
    const result = await personalizedTreatmentRecommendations(input);
    return result;
  } catch (e: any) {
    console.error("Error in getPersonalizedRecommendations:", e);
    // Return a structured error object
    return { error: e.message || 'An unexpected error occurred. Please try again.' };
  }
}
