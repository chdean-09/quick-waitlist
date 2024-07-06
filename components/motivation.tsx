import {
  PageHero,
  PageHeroDescription,
  PageHeroHeading,
} from '@/components/page-hero';

export default function Motivation() {
  return (
    <PageHero className="container px-5 mx-auto text-center">
      <PageHeroHeading className="max-w-2xl mb-10 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl text-gray-800 dark:text-white flex flex-row items-center justify-center mx-auto">
        Our Story
      </PageHeroHeading>

      <PageHeroDescription className="max-w-lg py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-500 dark:text-gray-300 mx-auto">
        Silid.ph started as an idea in 2023. We were frustrated by how hard it was to find apartments or boarding houses near our school and work.
      </PageHeroDescription>

      <PageHeroDescription className="max-w-lg py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-500 dark:text-gray-300 mx-auto">
        As we started to dig deeper, it became clear that this was just the tip of the iceberg. We realized that finding a space that suits the renter was the biggest issue, so we improved our current ways.
        In 2024 we announced a home rental platform and get the team to work.
      </PageHeroDescription>

      <PageHeroDescription className="max-w-lg py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-500 dark:text-gray-300 mx-auto">
        We are creating something cozy here, and we&apos;re excited to build it for you.
      </PageHeroDescription>
    </PageHero>
  )
}