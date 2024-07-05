import { Logo } from "@/public/icons/logo"
import Team from "@/components/team"
import MissionVision from "@/components/missionVision"
import Motivation from "@/components/motivation"

export default function AboutUs() {
  return (
    <>
      <div className="p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <h2 className="max-w-2xl mt-3 text-4xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-5xl text-gray-800  dark:text-white flex flex-row gap-4 items-center justify-center">
          About <Logo className="fill-foreground h-12 w-auto" />
        </h2>

        <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-500 dark:text-gray-300">
          Silid.ph is a mobile-first boarding-house/apartment marketplace web app aimed to provide comfortable and personalized space for prim Filipino renters.
        </p>
      </div>

      <MissionVision />

      <Motivation />

      <Team />
    </>

  )
}