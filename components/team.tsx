import Image from "next/image"

export default function Team() {
  const people = [
    {
      name: 'Jerome Cabugwason',
      role: 'Founder',
      imageUrl:
        '/team/jerome.jpg',
    },
    {
      name: 'Ferjen Dave Torred',
      role: 'Co-Founder',
      imageUrl:
        '/team/ferjen.jpg',
    },
    {
      name: 'Ian Clyde Tejada',
      role: 'Co-Founder',
      imageUrl:
        '/team/clyde.jpg',
    },
    {
      name: 'Chad Denard Andrada',
      role: 'Co-Founder',
      imageUrl:
        '/team/chad.jpg',
    }
  ]

  return (
    <div className="py-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who we are</h2>
          <p className="mt-6 text-base leading-8 text-gray-500 dark:text-gray-300">
            We are a diverse team of young visionaries united by one goal; To make the leading boarding house platform in the Philippines and making the experience feel better
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image className="h-16 w-16 rounded-md" height={160} width={160} src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-primary">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
