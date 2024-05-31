import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme-provider';

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
        <main className="flex justify-center items-center min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
