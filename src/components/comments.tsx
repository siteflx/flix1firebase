
"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/use-auth';

const mockComments = [
  {
    id: 1,
    author: {
      name: 'João Silva',
      avatarUrl: 'https://picsum.photos/seed/joao/40/40',
      imageHint: 'man portrait',
    },
    text: 'Que filme incrível! A cinematografia é de outro mundo.',
    timestamp: 'Há 2 horas',
  },
  {
    id: 2,
    author: {
      name: 'Maria Clara',
      avatarUrl: 'https://picsum.photos/seed/mariaclara/40/40',
      imageHint: 'woman smiling',
    },
    text: 'Amei a reviravolta no final, não esperava por isso!',
    timestamp: 'Há 5 horas',
  },
];

export function Comments() {
  const { user } = useAuth();
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    setIsSubmitting(true);

    // Simula uma chamada de API
    setTimeout(() => {
      const newCommentData = {
        id: Date.now(),
        author: {
          name: user.displayName || 'Usuário',
          avatarUrl: user.photoURL || '',
          imageHint: 'person face',
        },
        text: newComment,
        timestamp: 'Agora mesmo',
      };
      setComments([newCommentData, ...comments]);
      setNewComment('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">Comentários ({comments.length})</h2>
      
      {user && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={user.photoURL || ''} data-ai-hint="person face" />
              <AvatarFallback>{user.displayName?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Adicionar um comentário..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full"
                rows={3}
                disabled={isSubmitting}
              />
              <div className="mt-2 flex justify-end">
                <Button type="submit" disabled={!newComment.trim() || isSubmitting}>
                  {isSubmitting ? 'Comentando...' : 'Comentar'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      )}

      <Separator />

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={comment.author.avatarUrl} data-ai-hint={comment.author.imageHint} />
              <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-sm">{comment.author.name}</p>
                <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
              </div>
              <p className="mt-1 text-sm text-foreground/90">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
