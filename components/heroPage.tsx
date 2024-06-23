import { Footer } from '@/components/footer';
import EmailForm from '@/components/EmailForm';

export default function HeroPage() {
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || 'We are coming Soon';
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || 'Stay tuned';
  const [firstWord, secondWord, ...restOfWords] = Title.split(' ');
  const animatedTitle = [firstWord, secondWord].join(' ');
  const restOfString = restOfWords.join(' ');

  return (
    <div className="relative px-4 py-32 mx-auto h-dvh min-h-[800px] sm:min-h-dvh w-full md:px-24 lg:px-8 sm:py-16 lg:py-20 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div className="text-center">
            <div className="max-w-xl mb-20 md:mx-auto text-left sm:text-center lg:max-w-2xl sm:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-4xl sm:text-5xl font-bold leading-none tracking-tight md:mx-auto">
                <span className="gradient-text text-transparent animate-gradient">
                  {animatedTitle}
                </span>
                <div>{restOfString}</div>
              </h2>
              <p className="text-base md:text-lg font-light">
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
  )
}