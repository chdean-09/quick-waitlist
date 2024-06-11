'use client';

import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import EmailForm from '@/components/EmailForm';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobile]);

  return isMobile ? <Mobile /> : <Desktop />;
}

function Desktop() {
  return (
    <Card className="max-w-md md:max-w-screen-lg w-full mx-auto relative border-[1.5px] py-8">
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>
        <EmailForm />
      </CardContent>
      <CardFooter>
        <Footer />
      </CardFooter>
    </Card>
  );
}

function Mobile() {
  return (
    <div className="w-full mx-auto px-5 space-y-10">
      <Header />
      <EmailForm />
      <Footer />
    </div>
  );
}
