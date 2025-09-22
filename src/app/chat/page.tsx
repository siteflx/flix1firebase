// src/app/chat/page.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Header } from '@/components/header';
import { NavigationSidebar } from '@/components/navigation-sidebar';
import { useAuth } from '@/hooks/use-auth.tsx';
import { Spinner } from '@/components/ui/spinner';
import { romanticChat } from '@/ai/flows/romantic-chat-flow';
import { Send, Video } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
}

export default function ChatPage() {
  const { user, loading } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages, isTyping]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userInput = input;
    const userMessage: Message = { id: Date.now(), sender: 'user', text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const aiMessageId = Date.now() + 1;
    const aiMessage: Message = { id: aiMessageId, sender: 'ai', text: '' };
    setMessages((prev) => [...prev, aiMessage]);

    try {
      await romanticChat({ message: userInput }, (chunk) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId
              ? { ...msg, text: msg.text + chunk }
              : msg
          )
        );
      });
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? { ...msg, text: 'Desculpe, não estou me sentindo muito bem para conversar agora. Tente mais tarde.' }
            : msg
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background">
        <Spinner className="h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full">
      <NavigationSidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 flex flex-col p-4 md:p-6 bg-background">
            <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto bg-card border rounded-lg shadow-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src="https://picsum.photos/seed/aigirl/100/100" data-ai-hint="woman portrait" />
                            <AvatarFallback>IA</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-xl font-bold">Sofia</h2>
                            <p className="text-sm text-green-500">Online</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon">
                        <Video className="h-6 w-6" />
                        <span className="sr-only">Iniciar chamada de vídeo</span>
                    </Button>
                </div>
                <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                    {messages.map((message) => (
                        <div
                        key={message.id}
                        className={`flex items-end gap-2 ${
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                        >
                        {message.sender === 'ai' && (
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="https://picsum.photos/seed/aigirl/100/100" data-ai-hint="woman portrait"/>
                                <AvatarFallback>IA</AvatarFallback>
                            </Avatar>
                        )}
                        <div
                            className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                            message.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                        >
                            <p className="text-sm">{message.text}</p>
                        </div>
                         {message.sender === 'user' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>{user.displayName?.[0] || 'U'}</AvatarFallback>
                            </Avatar>
                        )}
                        </div>
                    ))}
                     {isTyping && messages[messages.length -1]?.sender === 'user' && (
                        <div className="flex items-end gap-2 justify-start">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="https://picsum.photos/seed/aigirl/100/100" data-ai-hint="woman portrait"/>
                                <AvatarFallback>IA</AvatarFallback>
                            </Avatar>
                            <div className="bg-muted rounded-lg px-4 py-3 flex items-center space-x-1">
                                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Digite sua mensagem..."
                            autoComplete="off"
                            disabled={isTyping}
                        />
                        <Button type="submit" size="icon" disabled={isTyping || !input.trim()}>
                            <Send className="h-5 w-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
}
