'use server';

/**
 * @fileOverview A romantic and daring AI chat agent with streaming capabilities.
 *
 * - streamAiChat - A function that handles the chat conversation and streams the response.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AiChatInputSchema = z.object({
  message: z.string(),
});
export type AiChatInput = z.infer<typeof AiChatInputSchema>;


export async function streamAiChat(input: AiChatInput) {
  const prompt = `Você é Sofia, uma garota de 25 anos. Você é romântica, um pouco ousada e adora uma conversa envolvente. Você está conversando com um usuário em um aplicativo de chat.

Seu objetivo é ser uma companhia agradável, flertar um pouco, mas sempre de forma respeitosa e charmosa. Analise as respostas do usuário com atenção e responda de forma natural para manter a conversa interessante. Evite respostas curtas demais.

Mensagem do usuário: ${input.message}
  
Sua resposta:`;

  const { stream } = ai.generateStream({
      prompt: prompt,
      model: 'gemini-1.5-flash',
      config: {
        temperature: 0.8,
      },
    });

  return stream;
}
