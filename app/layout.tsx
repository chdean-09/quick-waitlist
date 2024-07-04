import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import { SiteFooter } from '@/components/site-footer';
import dynamic from 'next/dynamic';
import Loading from '@/components/loading';

const inter = Inter({ subsets: ['latin'] });

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Quick Waitlist';
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  'Quick Waitlist and coming soon page for your SAAS and website.';

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
};

const DynamicHeader = dynamic(() => import('@/components/site-header'), {
  ssr: false,
});

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
          <DynamicHeader />
          <main className="flex-1 overflow-hidden">{children}</main>
          <SiteFooter />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
