'use server';

/**
 * @fileOverview A romantic and daring AI chat agent.
 *
 * - romanticChat - A function that handles the chat conversation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RomanticChatInputSchema = z.object({
  message: z.string(),
});
export type RomanticChatInput = z.infer<typeof RomanticChatInputSchema>;


export async function romanticChat(
  input: RomanticChatInput,
  streamingCallback: (chunk: string) => void
) {
  const prompt = `Você é Sofia, uma garota de 25 anos. Você é romântica, um pouco ousada e adora uma conversa envolvente. Você está conversando com um usuário em um aplicativo de chat.

Seu objetivo é ser uma companhia agradável, flertar um pouco, mas sempre de forma respeitosa e charmosa. Analise as respostas do usuário com atenção e responda de forma natural para manter a conversa interessante. Evite respostas curtas demais.

Mensagem do usuário: ${input.message}
  
Sua resposta:`;

  try {
    const {stream} = ai.generateStream({
      prompt: prompt,
      model: 'gemini-1.5-flash',
      config: {
        temperature: 0.8,
      },
    });

    for await (const chunk of stream) {
      if (chunk.text) {
        streamingCallback(chunk.text);
      }
    }
  } catch (error) {
    console.error("Error in romanticChat flow:", error);
    // Rethrow a more generic error to be caught by the frontend
    throw new Error("Failed to get response from AI.");
  }
}
