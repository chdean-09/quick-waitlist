'use client';

import Balance from 'react-wrap-balancer';
import { cn } from '@/lib/utils';

function PageHero({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        'mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeroHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-center text-5xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1]',
        className
      )}
      {...props}
    />
  );
}

function PageHeroDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        'max-w-[750px] text-center text-lg font-light text-foreground',
        className
      )}
      {...props}
    />
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center space-x-4',
        className
      )}
      {...props}
    />
  );
}

export { PageHero, PageHeroHeading, PageHeroDescription, PageActions };
