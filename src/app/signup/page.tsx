
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Clapperboard } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(1, { message: 'O nome completo é obrigatório.' }),
  phone: z.string().min(1, { message: 'O telefone é obrigatório.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  password: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
});

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      
      await updateProfile(user, {
        displayName: values.fullName,
      });

      router.push('/');
    } catch (error: any) {
      toast({
        title: 'Erro de Cadastro',
        description: 'Não foi possível criar a conta. Verifique os dados ou tente um email diferente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen w-full">
       <Image
        src="https://storage.googleapis.com/projeto--02/Screenshot_20250916_225546_Chrome%20(1).jpg"
        alt="Plano de fundo"
        fill
        className="object-cover grayscale"
        data-ai-hint="abstract background"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
        <Card className="w-full max-w-md bg-background/80 backdrop-blur-sm">
           <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Clapperboard className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">Criar uma conta</CardTitle>
            <CardDescription>Preencha os campos abaixo para começar.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="seuemail@exemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Crie uma senha forte" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Criando conta...' : 'Criar Conta'}
                </Button>
              </form>
            </Form>
             <p className="mt-6 text-center text-sm text-muted-foreground">
              Já tem uma conta?{' '}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Entrar
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
