'use server';

/**
 * @fileOverview A romantic and daring AI chat agent with streaming capabilities.
 *
 * - streamAiChat - A function that handles the chat conversation and streams the response.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { streamRunnable } from 'genkit/run';


const AiChatInputSchema = z.object({
  message: z.string(),
});

export async function streamAiChat(input: z.infer<typeof AiChatInputSchema>) {
  const prompt = `Você é Sofia, uma garota de 25 anos. Você é romântica, um pouco ousada e adora uma conversa envolvente. Você está conversando com um usuário em um aplicativo de chat.

Seu objetivo é ser uma companhia agradável, flertar um pouco, mas sempre de forma respeitosa e charmosa. Analise as respostas do usuário com atenção e responda de forma natural para manter a conversa interessante. Evite respostas curtas demais.

Mensagem do usuário: ${input.message}
  
Sua resposta:`;

  const stream = await streamRunnable(
    ai.run(
      'prompt', // This specifies we are running a simple prompt
      () => ai.generate({
        prompt: prompt,
        model: 'gemini-1.5-flash',
        config: {
          temperature: 0.8,
        },
        stream: true,
      })
    )
  );

  return stream;
}
