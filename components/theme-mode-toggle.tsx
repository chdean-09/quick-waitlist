'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function ThemeModeToggle({ ...props }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="link"
      className={cn('w-12 h-12 px-0', props.className)}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-secondary-foreground" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-secondary-foreground" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
