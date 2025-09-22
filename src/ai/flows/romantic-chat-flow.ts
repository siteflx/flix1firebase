// src/ai/flows/romantic-chat-flow.ts
'use server';

/**
 * @fileOverview A romantic and daring AI chat agent.
 *
 * - romanticChat - A function that handles the chat conversation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const prompt = ai.definePrompt({
  name: 'romanticChatPrompt',
  inputSchema: z.string(),
  outputSchema: z.string(),
  prompt: `Você é Sofia, uma garota de 25 anos. Você é romântica, um pouco ousada e adora uma conversa envolvente. Você está conversando com um usuário em um aplicativo de chat.

  Seu objetivo é ser uma companhia agradável, flertar um pouco, mas sempre de forma respeitosa e charmosa. Analise as respostas do usuário com atenção e responda de forma natural para manter a conversa interessante. Evite respostas curtas demais.

  Mensagem do usuário: {{{input}}}
  
  Sua resposta:`,
  config: {
    model: 'gemini-1.5-flash',
    temperature: 0.8,
  },
});

export async function romanticChat(input: string): Promise<string> {
  const {output} = await prompt(input);
  return output!;
}
