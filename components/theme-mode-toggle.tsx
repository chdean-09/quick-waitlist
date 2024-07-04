'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button, ButtonProps } from './ui/button';
import { cn } from '@/lib/utils';

export interface ThemeModeToggleProps extends ButtonProps {
  value?: string;
}

export function ThemeModeToggle({
  value,
  variant,
  className,
  ...props
}: ThemeModeToggleProps) {
  const { theme, setTheme } = useTheme();

  const Icon = theme === 'light' ? Moon : Sun;

  return (
    <Button
      variant={variant}
      className={cn('w-12 h-12 text-secondary-foreground', className)}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...props}
    >
      {value ? (
        <div className="flex place-content-between w-full font-medium">
          {value}
          <Icon className="h-[1.2rem] w-[1.2rem] text-secondary-foreground" />
        </div>
      ) : (
        <Icon className="h-[1.2rem] w-[1.2rem] text-secondary-foreground" />
      )}
    </Button>
  );
}
