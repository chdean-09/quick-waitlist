'use client';

import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';
import { Separator } from './ui/separator';

export function Announcement() {
  const announcement = process.env.NEXT_PUBLIC_ANNOUNCEMENT;

  if (!announcement || announcement === '') return;

  return (
    <Link
      href="/release"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <Rocket className="h-4 w-4" />{' '}
      <Separator className="mx-2 h-4" orientation="vertical" />{' '}
      <span>{announcement}</span>
      <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  );
}
