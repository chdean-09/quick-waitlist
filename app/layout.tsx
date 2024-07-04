import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import SiteHeader from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'] });

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Quick Waitlist';
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  'Quick Waitlist and coming soon page for your SAAS and website.';

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <SiteHeader />
          <main className="flex-1 overflow-hidden">{children}</main>
          <SiteFooter />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
