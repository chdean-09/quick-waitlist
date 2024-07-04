import { Logo } from '@/public/icons/logo';
import Link from 'next/link';
import { Switch } from './ui/switch';
import { ThemeModeToggle } from './theme-mode-toggle';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex place-content-between h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="fill-foreground h-6 w-auto" />
        </Link>
        <ThemeModeToggle />
      </div>
    </header>
  );
}
