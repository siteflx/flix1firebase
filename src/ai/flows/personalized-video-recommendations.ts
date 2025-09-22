// src/ai/flows/personalized-video-recommendations.ts
'use server';

/**
 * @fileOverview Generates personalized video recommendations based on user viewing history.
 *
 * - generatePersonalizedRecommendations - A function that generates video recommendations.
 * - PersonalizedRecommendationsInput - The input type for the generatePersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the generatePersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  userViewingHistory: z
    .string()
    .describe("The user's viewing history, as a comma separated list of video titles."),
  numberOfRecommendations: z
    .number()
    .default(10) // Providing a default value
    .describe('The number of video recommendations to generate.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.string().describe('A recommended video title.')
  ).describe('A list of personalized video recommendations.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function generatePersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedVideoRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedVideoRecommendationsPrompt',
  input: {
    schema: PersonalizedRecommendationsInputSchema,
  },
  output: {
    schema: PersonalizedRecommendationsOutputSchema,
  },
  prompt: `You are a video recommendation expert. Given a user's viewing history,
you will generate a list of video recommendations that the user might enjoy.

User Viewing History: {{{userViewingHistory}}}

Please provide {{numberOfRecommendations}} video recommendations. Return just the titles, one title per list entry, nothing else.
`,
});

const personalizedVideoRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedVideoRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
