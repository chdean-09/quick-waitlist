'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useTransition } from 'react';
import Loading from './loading';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address.',
  }),
});

export default function EmailForm() {
  const [isPending, startTransaction] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransaction(async () => {
      try {
        const res = await fetch('/api/resend', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          toast({
            title: 'Thank you for subscribing 🎉',
          });
        } else {
          console.error('Error:', res.status, res.statusText);
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          });
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  className="h-12 w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          variant={'default'}
          type="submit"
          className="w-full h-12 md:w-fit"
        >
          {isPending ? <Loading /> : 'Subscribe'}
        </Button>
      </form>
    </Form>
  );
}
