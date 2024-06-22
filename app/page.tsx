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
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // useEffect(() => {
  //   if (isMobile) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [isMobile]);

  // return isMobile ? <Mobile /> : <Desktop />;
  
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || 'We are coming Soon';
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || 'Stay tuned';
  const [firstWord, secondWord, ...restOfWords] = Title.split(' ');
  const animatedTitle = [firstWord, secondWord].join(' ');
  const restOfString = restOfWords.join(' ');

  return (
    <>
      <div className="relative px-4 py-16 mx-auto h-screen w-full md:px-24 lg:px-8 lg:py-20 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div className="text-center">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-4xl sm:text-5xl font-bold leading-none tracking-tight md:mx-auto">
                <span className="gradient-text text-transparent animate-gradient">
                  {animatedTitle}
                </span>
                <div>{restOfString}</div>
              </h2>
              <p className="text-lg font-normal">
                {Subtitle}
              </p>
            </div>
            <EmailForm />
          </div>
        </div>
        <div className='absolute bottom-8 left-0 right-0'>
          <Footer />
        </div>
      </div>
      <div className='bg-white'>
        <div>hi</div>
      </div>
    </>
  );
}

function Desktop() {
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || 'We are coming Soon';
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || 'Stay tuned';
  const [firstWord, secondWord, ...restOfWords] = Title.split(' ');
  const animatedTitle = [firstWord, secondWord].join(' ');
  const restOfString = restOfWords.join(' ');

  return (
    <>
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
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <p className="text-center h-12 font-bold uppercase ">Our Story</p>
          <figure className="mt-10">
            <blockquote className="text-center text-base leading-8 sm:text-lg sm:leading-9">
              <p>
                It&apos;s been a year since I had the problem and this crazy idea, I&apos;m tired of finding apartments/boarding houses near our school, it&apos;s always unsatisfactory for my taste and it took a long time and energy to find the perfect one. I thought that I was the only one who had this problem. <br />


                Turns out I&apos;m not alone, I&apos;ve read a lot of FB group posts and observed that when finding your preferred living space requires a lot of time like months of walking, searching, and waiting for someone to post in the FB groups that one room na maganda and It&apos;s frustrating when the next morning taken na sya agad. Some people want to know the location if it is near your work or school, a unit with aircon, and nice ambience. <br />


                So I asked myself, what if gumawa ako ng website? After a year of struggling on core features, identifying the problem, and defining use cases. I found out users need security, convenience, and preference.


              </p>
            </blockquote>
            <figcaption className="mt-10">
              {/* <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div> */}
            </figcaption>
          </figure>

          <p className="text-center h-12 font-bold uppercase ">About</p>
          <figure className="mt-10">
            <blockquote className="text-center text-base leading-8 sm:text-lg sm:leading-9">
              <p>
                Our mission is to revolutionize the rental housing market by providing a seamless, secure, and personalized platform that links tenants with their ideal living spaces. We believe in enhancing the rental experience by streamlining searches, ensuring safety, and prioritizing user preferences. Through innovative technology and a commitment to excellence, we aim to transform the way people find their shelters, making the process safe, fast, and tailored to individual needs. <br />

                Our vision is to redefine the landscape of rental housing by creating a digital ecosystem that seamlessly connects tenants with their ideal space. We envision a nation where finding the perfect living space is effortless, personalized, and safe, transforming the traditional rental process into a pleasing and efficient experience. By leveraging the latest technology and a deep understanding of user needs, we aim to establish ourselves as the leading platform in the rental market, fostering a community of satisfied tenants and property owners alike.
              </p>
            </blockquote>
            <figcaption className="mt-10">
              {/* <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div> */}
            </figcaption>
          </figure>
        </div>
      </section>
    </>
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
