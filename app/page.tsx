import EmailForm from '@/components/EmailForm';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Speaker from '/public/speaker.svg';
import Image from 'next/image';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function Home() {
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || 'We are coming Soon';
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || 'Stay tuned';
  const siteLogo = process.env.NEXT_PUBLIC_LOGO || Speaker;
  const [firstWord, secondWord, ...restOfWords] = Title.split(' ');
  const animatedTitle = [firstWord, secondWord].join(' ');
  const restOfString = restOfWords.join(' ');

  return (
    <>
      {/* Ga error ang siteLogo idk what to do with it */}
      {/* <div className="flex justify-center items-center h-20 md:h-28 relative scale-[35%]">
        <Image
          src={siteLogo}
          alt="white square silid"
          width={500}
          height={500}
        />
      </div> */}

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

      <div className="px-4 py-16 mx-auto w-full h-fit xl:h-dvh md:px-24 lg:px-8 lg:py-20 bg-slate-300">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-xl pr-16 mx-auto mb-10">
            <h5 className="mb-6 text-3xl font-extrabold leading-none text-black">Our Story</h5>
            <p className="mb-6 text-gray-900">
              A year ago, I faced the challenge of finding a satisfactory apartment near our school. Realizing that many others shared this struggle, I decided to create a website to simplify the housing search process. After identifying core problems and user needs, I discovered that security, convenience, and personal preferences are essential for an effective housing search platform.
            </p>
          </div>
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-500 p-4">
                <svg height="100px" width="100px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#FFFFFF">
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path className="st0" d="M428.215,172.215c0.008-47.522-19.292-90.648-50.445-121.777C346.649,19.293,303.515-0.007,256,0 c-47.514-0.007-90.648,19.293-121.769,50.446c-31.153,31.121-50.454,74.247-50.446,121.769 c-0.008,31.786,8.673,61.634,23.754,87.181h-0.008c0.016,0.032,0.048,0.064,0.064,0.096c0.04,0.064,0.065,0.128,0.104,0.192 l0.016-0.007c10.98,19.436,26.7,34.724,38.945,48.835c6.167,7.056,11.452,13.751,15,20.014c3.572,6.295,5.382,11.908,5.502,17.53 v95.421c0.008,29.44,23.858,53.296,53.305,53.304h7.64C233.312,504.96,243.787,512,256,512c12.213,0,22.688-7.04,27.894-17.218 h7.64c29.447-0.008,53.296-23.865,53.304-53.304v-95.414v-0.008c0.12-5.622,1.93-11.236,5.502-17.53 c5.302-9.419,14.592-19.709,24.762-30.914c10.074-11.179,20.982-23.352,29.191-37.936l0.008,0.007 c0.032-0.048,0.056-0.111,0.088-0.16c0.024-0.048,0.056-0.08,0.08-0.128h-0.008C419.542,233.849,428.223,204.001,428.215,172.215z M311.828,461.771c-5.23,5.214-12.325,8.401-20.294,8.409h-71.068c-7.969-0.008-15.064-3.195-20.294-8.409 c-5.213-5.23-8.401-12.333-8.409-20.294v-5.326l120.128,25.54C311.868,461.715,311.852,461.747,311.828,461.771z M320.237,441.477 c0,1.754-0.216,3.452-0.513,5.11l-127.96-27.205v-33.524l128.473,27.316V441.477z M320.237,396.397L191.764,369.08V358.1h128.473 V396.397z M383.143,247.142l-0.104,0.169l-0.064,0.112c-8.505,15.408-22.92,29.848-36.159,44.904 c-6.607,7.576-12.918,15.361-17.867,24.034c-3.003,5.286-5.39,11.036-6.935,17.13H189.986c-1.546-6.102-3.932-11.844-6.944-17.13 c-7.432-12.982-17.867-24.081-27.893-35.246c-10.059-11.1-19.733-22.159-26.124-33.692l-0.08-0.128l-0.089-0.152 c-13.005-21.959-20.462-47.514-20.47-74.928c0.008-40.803,16.506-77.626,43.238-104.374C178.374,41.1,215.197,24.61,256,24.602 C296.804,24.61,333.627,41.1,360.375,67.84c26.732,26.748,43.23,63.571,43.238,104.374 C403.605,199.628,396.149,225.183,383.143,247.142z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-black">Identifying the Problem</h6>
              <p className="text-sm text-gray-700">
                Many people struggle to find suitable living spaces near their work or school, often spending months searching and missing out on good options.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-500 p-4">
                <svg viewBox="0 0 24 24" fill="none">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle cx="10" cy="6" r="4" stroke="#FFFFFF" strokeWidth="1.5"></circle>
                    <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                  </g>
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-black">User Needs</h6>
              <p className="text-sm text-gray-700">
                Users prioritize proximity to work or school, air conditioning, and a pleasant ambience in their housing choices.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-500">
                <svg className="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-black">Creating a Solution</h6>
              <p className="text-sm text-gray-700">
                I decided to create a website to address these needs, focusing on security, convenience, and personalized preferences.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-500 p-3">
                <svg fill="#FFFFFF" viewBox="0 0 100 100">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path d="M26,20c-3.3,0-6,2.7-6,6c0,1.8,0.8,3.4,2,4.5V76c0,2.2,1.8,4,4,4H26c2.2,0,4-1.8,4-4V30.5 c1.2-1.1,2-2.7,2-4.5C32,22.7,29.3,20,26,20z"></path> </g>
                      <g>
                        <path d="M76.5,30.8c-15.7,8.2-24.4-5.9-39.2-0.5c-0.8,0.3-1.3,1.1-1.3,1.9v25.8c0,1.3,1.3,2.3,2.6,1.9 C52.8,55.6,61.5,69,77,60.6c0.6-0.4,1-1,1-1.7V31.7C78,30.9,77.2,30.4,76.5,30.8z M72,44.5C70.1,45,68.2,45,66.2,45H66v6h0.2 c2,0,3.9-0.1,5.8-0.6v5.9c-1.8,0.6-3.6,0.8-5.8,0.8H66v-6c-2,0-4-0.3-6-0.7v6c-1.4-0.3-2.8-0.7-4.1-1.1c-0.7-0.2-1.3-0.4-1.9-0.6 v-5.9c-2.2-0.7-3.9-1.3-6-1.6v6c-1-0.1-2.2-0.2-3.5-0.2c-0.9,0-1.7,0.1-2.5,0.2v-6c0.8-0.1,1.7-0.2,2.5-0.2c1.3,0,2.5,0.1,3.5,0.2 v-5.7c-1-0.2-2.1-0.4-3.5-0.4c-0.9,0-1.7,0.1-2.5,0.2v-6c0.8-0.1,1.7-0.2,2.5-0.2c1.4,0,2.4,0.2,3.5,0.4v6c1.5,0.4,3,1,5.2,1.6 c0.3,0.1,0.5,0.1,0.8,0.2v-6c2,0.6,3.9,1,6,1.4v5.9c1.9,0.4,3.9,0.4,6,0.4v-6h0.2c2,0,3.9,0.2,5.8-0.2V44.5z"></path>
                      </g>
                      <g>
                        <path d="M54,43.3v5.5c0.4,0.1,0.9,0.3,1.3,0.4c1.6,0.4,3.1,0.9,4.7,1.2v-5.7C57.9,44.2,56,43.8,54,43.3z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-black">Achieving Our Goals</h6>
              <p className="text-sm text-gray-700">
                After a year of development, we have created a platform that simplifies the housing search, making it more secure and convenient for users to find their preferred living spaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-400 bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font text-center text-white mb-20">About Us
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/2 flex">
              <div className="w-12 h-12 p-2 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg fill="#946de8" viewBox="0 0 24 24">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="mission">
                      <path d="M21.85,21.15l-7-7a.48.48,0,0,0-.7,0L12.5,15.79,8,11.29V9h3v1a.5.5,0,0,0,.5.5h6a.52.52,0,0,0,.45-.27.51.51,0,0,0-.05-.52L16.12,7.25,17.9,4.79A.51.51,0,0,0,18,4.27.52.52,0,0,0,17.5,4H14V2.5a.5.5,0,0,0-.5-.5h-6a.5.5,0,0,0-.5.5v8.79L2.44,15.85A1.52,1.52,0,0,0,2,16.91V20.5A1.5,1.5,0,0,0,3.5,22h18a.5.5,0,0,0,.46-.31A.47.47,0,0,0,21.85,21.15ZM16.52,5,15.1,7a.48.48,0,0,0,0,.58l1.42,2H12V9h1.5a.5.5,0,0,0,.5-.5V5ZM13,8H8V3h5ZM3.5,21a.5.5,0,0,1-.5-.5V16.91a.47.47,0,0,1,.15-.35L7.5,12.21l4.65,4.64L16.29,21Zm14.21,0-4.5-4.5,1.29-1.29L20.29,21Z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">Mission</h2>
                <p className="leading-relaxed text-base">Revolutionize the rental housing market by providing a seamless, secure, and personalized platform that links tenants with their ideal living spaces. We believe in enhancing the rental experience by streamlining searches, ensuring safety, and prioritizing user preferences. Through innovative technology and a commitment to excellence, we aim to transform the way people find their shelters, making the process safe, fast, and tailored to individual needs.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 flex">
              <div className="w-12 h-12 p-1 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg fill="#946de8" height="200px" width="200px" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <g>
                          <path d="M505.616,238.008c-1.079-1.279-26.946-31.695-70.603-62.481C394.538,146.983,330.624,112.958,256,112.958 c-74.624,0-138.538,34.025-179.013,62.569c-43.657,30.788-69.523,61.202-70.603,62.482c-8.511,10.09-8.511,25.894,0,35.983 c1.079,1.279,26.946,31.695,70.603,62.481c40.476,28.544,104.389,62.569,179.013,62.569c74.624,0,138.538-34.025,179.013-62.569 c43.657-30.788,69.523-61.202,70.602-62.481C514.128,263.903,514.128,248.099,505.616,238.008z M492.965,263.313 c-0.253,0.299-25.831,30.322-67.865,59.893c-38.44,27.044-98.982,59.282-169.101,59.282c-70.12,0-130.661-32.238-169.101-59.282 c-42.034-29.571-67.611-59.593-67.863-59.891c-3.288-3.896-3.287-10.733-0.002-14.628c0.254-0.299,25.831-30.322,67.865-59.893 c38.439-27.044,98.982-59.282,169.101-59.282c70.12,0,130.661,32.238,169.101,59.282c42.034,29.571,67.611,59.593,67.862,59.89 C496.251,252.582,496.251,259.419,492.965,263.313z"></path>
                          <path d="M255.997,143.974c-61.771,0-112.025,50.254-112.025,112.026s50.253,112.026,112.025,112.026 c61.771,0,112.025-50.254,112.025-112.026S317.767,143.974,255.997,143.974z M255.997,351.471 c-52.642,0-95.47-42.828-95.47-95.471s42.827-95.471,95.47-95.471c25.691,0,49.04,10.203,66.219,26.767 c-4.909-3.416-10.867-5.424-17.287-5.424c-9.304,0-17.639,4.212-23.21,10.825c-8.13-3.297-16.889-5.024-25.723-5.024 c-37.676,0-68.327,30.651-68.327,68.327s30.652,68.327,68.327,68.327s68.327-30.651,68.327-68.327 c0-6.331-0.871-12.535-2.563-18.537c8.144-5.45,13.518-14.728,13.518-25.241c0-5.205-1.318-10.106-3.637-14.392 c12.423,16.117,19.823,36.294,19.823,58.169C351.466,308.642,308.639,351.471,255.997,351.471z M304.93,242.573 c0.357,0,0.71-0.015,1.063-0.026c1.171,4.359,1.777,8.861,1.777,13.454c0,28.547-23.225,51.773-51.773,51.773 c-28.547,0-51.773-23.225-51.773-51.773s23.225-51.773,51.773-51.773c6.486,0,12.919,1.222,18.909,3.567 c-0.212,1.446-0.327,2.924-0.327,4.429C274.579,228.957,288.194,242.573,304.93,242.573z M304.93,226.018 c-7.608,0-13.796-6.188-13.796-13.796c0-7.607,6.188-13.796,13.796-13.796s13.796,6.188,13.796,13.796 C318.725,219.83,312.536,226.018,304.93,226.018z"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">Vision</h2>
                <p className="leading-relaxed text-base">Redefine the landscape of rental housing by creating a digital ecosystem that seamlessly connects tenants with their ideal space. We envision a nation where finding the perfect living space is effortless, personalized, and safe, transforming the traditional rental process into a pleasing and efficient experience. By leveraging the latest technology and a deep understanding of user needs, we aim to establish ourselves as the leading platform in the rental market, fostering a community of satisfied tenants and property owners alike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
