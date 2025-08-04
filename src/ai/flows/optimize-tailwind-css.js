'use server';

/**
 * @fileOverview This file contains a Genkit flow that optimizes Tailwind CSS code snippets for UI components based on a given design.
 *
 * - optimizeTailwindCSS - The main function that takes a design description and returns optimized Tailwind CSS code.
 * - OptimizeTailwindCSSInput - The input type for the optimizeTailwindCSS function.
 * - OptimizeTailwindCSSOutput - The output type for the optimizeTailwindCSS function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeTailwindCSSInputSchema = z.object({
  designDescription: z
    .string()
    .describe('A description of the UI component design.'),
  colorPalette: z
    .string()
    .describe(
      'Color Palette: Provide the color palette being used, example: Primary color: A deep navy blue (#1E3A8A), Background color: A light gray (#F5F5F5), Accent color: A muted teal (#34D399)'
    ),
  typography: z
    .string()
    .describe(
      "Typography: Describe the typography being used including font family and styles. Example: Body and headline font: 'Inter', a grotesque-style sans-serif with a modern, machined, objective, neutral look suitable for both headlines or body text"
    ),
  layout: z
    .string()
    .describe(
      'Layout Guidelines: Any specific layout requirements such as responsive design, grid systems, etc.'
    ),
  iconography: z
    .string()
    .describe(
      'Iconography: Describe the icons being used, including style and source.'
    ),
  animation: z
    .string()
    .describe(
      'Animation: Describe any animations or transitions to be used in the component.'
    ),
});


const OptimizeTailwindCSSOutputSchema = z.object({
  optimizedTailwindCSS: z
    .string()
    .describe('The optimized Tailwind CSS code snippet for the UI component.'),
});


export async function optimizeTailwindCSS(input) {
  return optimizeTailwindCSSFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeTailwindCSSPrompt',
  input: {schema: OptimizeTailwindCSSInputSchema},
  output: {schema: OptimizeTailwindCSSOutputSchema},
  prompt: `You are an expert Tailwind CSS developer. You will generate optimized Tailwind CSS code snippets for UI components based on the provided design description and style guidelines.

Design Description: {{{designDescription}}}

Color Palette: {{{colorPalette}}}

Typography: {{{typography}}}

Layout Guidelines: {{{layout}}}

Iconography: {{{iconography}}}

Animation: {{{animation}}}

Provide the Tailwind CSS code snippet that best implements the described UI component, ensure it is responsive and follows best practices. Do not provide any explanation, only the code snippet.

`,
});

const optimizeTailwindCSSFlow = ai.defineFlow(
  {
    name: 'optimizeTailwindCSSFlow',
    inputSchema: OptimizeTailwindCSSInputSchema,
    outputSchema: OptimizeTailwindCSSOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output;
  }
);
