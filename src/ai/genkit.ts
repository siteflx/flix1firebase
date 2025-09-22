import {genkit, Plugin, credential} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {openRouter} from 'genkitx-openrouter';

const openRouterKey = credential('OPENROUTER_API_KEY');

const openRouterPlugin: Plugin<any> = openRouter({
    apiKey: openRouterKey,
});

export const ai = genkit({
  plugins: [googleAI(), openRouterPlugin],
  model: 'googleai/gemini-2.5-flash',
});
