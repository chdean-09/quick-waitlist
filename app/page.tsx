'use client';

import EmailForm from '@/components/EmailForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Github from '/public/github.svg';
import Linkedin from '/public/linkedin.svg';
import Twitter from '/public/twitter.svg';
import Speaker from '/public/speaker.svg';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Home() {
  // Data from env
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || 'We are coming Soon';
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || 'Stay tuned';
  const LinkedinLink =
    process.env.NEXT_PUBLIC_LINKEDIN || 'https://www.linkedin.com/';
  const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || 'https://www.x.com/';
  const GithubLink =
    process.env.NEXT_PUBLIC_GITHUB || 'https://www.github.com/';
  const siteLogo = process.env.NEXT_PUBLIC_LOGO || Speaker;

  const [firstWord, secondWord, ...restOfWords] = Title.split(' ');
  const animatedTitle = [firstWord, secondWord].join(' ');
  const restOfString = restOfWords.join(' ');

  return (
    <Card className="max-w-sm md:max-w-screen-lg w-full mx-auto relative border-[1.5px] py-8">
      <CardHeader>
        <div className="min-w-full">
          <div className="flex justify-center items-center h-20 md:h-28 relative scale-[35%]">
            <Image
              src={siteLogo}
              alt="white square silid"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center mb-4 lg:mb-6 space-y-4 lg:space-y-6">
            <CardTitle className="text-4xl md:text-[55px] font-semibold leading-none md:leading-tight text-primary">
              <span className="gradient-text text-transparent animate-gradient">
                {animatedTitle}
              </span>
              <div>{restOfString}</div>
            </CardTitle>
            <CardDescription className="text-lg md:text-[26px] font-normal">
              {Subtitle}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="min-w-full"></div>
        <EmailForm />
      </CardContent>
      <CardFooter>
        <div className="min-w-full">
          <p className="text-muted-foreground text-md text-center mt-2">
            we care about your data in our{' '}
            <Dialog>
              <DialogTrigger className="underline transition-all duration-200 hover:text-white/90">
                privacy policy
              </DialogTrigger>
              <DialogContent className="flex flex-col items-center justify-center py-8">
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-center">
                    Privacy Policy
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    {process.env.NEXT_PUBLIC_PRIVACY ||
                      'Add Privacy Policy From ENV'}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex min-w-full">
                  <DialogTrigger asChild className="flex min-w-full">
                    <Button type="submit">Back</Button>
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </p>
          {/* Social Media */}
          <div className="flex justify-center items-center gap-2 mt-6 ">
            <Link href={LinkedinLink} className="relative w-[22px] h-[22px]">
              <Image src={Linkedin} alt="Linkedin" fill />
            </Link>
            <Link href={TwitterLink} className="relative w-[22px] h-[22px]">
              <Image src={Twitter} alt="Twitter" fill />
            </Link>
            <Link href={GithubLink} className="relative w-[22px] h-[22px]">
              <Image src={Github} alt="Github" fill />
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
