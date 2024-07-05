import { Eye, Goal } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="container px-5 py-12 mx-auto text-left">
      <h1 className="max-w-2xl mt-3 mb-10 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl text-gray-800  dark:text-white flex flex-row items-center justify-center mx-auto">Mission and Vision
      </h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/2 flex">
          <div className="w-12 h-12 p-2 inline-flex items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 mb-4 flex-shrink-0">
            <Goal />
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-2xl title-font font-semibold mb-2">Mission</h2>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-300">Revolutionize the rental housing market by providing a platform that connects tenants with their ideal living spaces through innovative technology evolving the way people find their shelters, making the process safe, fast, and tailored to individual needs.</p>
          </div>
        </div>
        <div className="p-4 md:w-1/2 flex">
          <div className="w-12 h-12 p-1 inline-flex items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 mb-4 flex-shrink-0">
            <Eye />
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-2xl title-font font-semibold mb-2">Vision</h2>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-300">We envision a nation where a rental space can be called home. Revolutionizing the traditional rental process into a pleasing and efficient experience leveraging the latest technologies. We aim to establish as the leading platform in the Philippines, fostering a community of satisfied tenants and property owners alike.</p>
          </div>
        </div>
      </div>
    </div>
  )
}