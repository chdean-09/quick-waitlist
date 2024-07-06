import Team from "@/components/team"
import Motivation from "@/components/motivation"
import ValueProposition from "@/components/valueProposition"
import Vision from "@/components/vision"
import Analysis from "@/components/analysis"

import {
  PageHero,
  PageHeroDescription,
  PageHeroHeading,
} from '@/components/page-hero';

export default function AboutUs() {
  return (
    <>
      <PageHero className="mx-auto xl:px-0 flex w-full flex-col items-center justify-center text-center">
        <PageHeroHeading className="max-w-2xl mt-3 text-4xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-5xl text-gray-800  dark:text-white flex flex-row gap-4 items-center justify-center">
          About Silid
        </PageHeroHeading>

        <PageHeroDescription className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-500 dark:text-gray-300">
          We Revolutionize Rental Housing, tailoring to individual needs.
        </PageHeroDescription>
      </PageHero>

      <Motivation />

      <Team />

      <Vision />
    </>
  )
}