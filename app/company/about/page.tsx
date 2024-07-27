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

import Image from "next/image"

export default function AboutUs() {
  return (
    <>
      <PageHero className="mx-auto xl:px-0 flex w-full flex-col items-center justify-center text-center gap-12 mb-10 lg:-mb-16">
        <PageHeroHeading className="mt-3 text-3xl font-normal leading-snug tracking-tight lg:leading-tight lg:text-4xl w-[95%]">
          We Revolutionize Rental Housing, suiting to individual needs.
        </PageHeroHeading>

        <div className="relative w-[95%] sm:w-[85%]">
          <Image src={"/map.png"} alt="map" width={1000} height={1000} className="object-cover w-[82%] h-56 m-auto rounded-lg"/>
          <Image src={"/lf-silid.png"} alt="lf-silid" width={200} height={200} className="absolute bottom-3 left"/>
        </div>
      </PageHero>

      <Motivation />

      <Team />
    </>
  )
}