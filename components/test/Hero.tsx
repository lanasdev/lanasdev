import Image from "next/image";
import Link from "next/link";

import heroImg from "../../public/heroimg.png"
import redCircle from "../../public/img/circle3-red.svg";
import greenDots from "../../public/img/dots3-green.svg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white bg-pattern-white bg-center">
      {/* <div className="bg-tarnsparent"> */}
      {/* </div> */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap xl:items-center">
            <div className="mb-16 w-full px-4 md:mb-0 md:w-1/2">
              <span className="rounded-9xl mb-4 inline-block bg-yellow-500 py-px px-2 text-xs uppercase leading-5 text-white">
                We are building websites
              </span>
              <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                digital craftsmenship that accels businesses.
              </h1>
              <p className="text-coolGray-500 mb-8 text-lg font-medium md:text-xl">
                We help startups to get found online and crush their
                competitors.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                  <Link href="/contact">
                    <a className="inline-block w-full rounded-md border border-yellow-500 bg-yellow-500 py-5 px-7 text-center text-base font-medium leading-4 text-yellow-50 shadow-sm hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 md:text-lg">
                      Get your website
                    </a>
                  </Link>
                </div>
                <div className="w-full py-1 md:w-auto md:py-0">
                  <Link href="/about">
                    <a className="text-coolGray-800 hover:bg-coolGray-100 focus:ring-coolGray-200 border-coolGray-200 inline-block w-full rounded-md border bg-white py-5 px-7 text-center text-base font-medium leading-4 shadow-sm focus:ring-2 focus:ring-opacity-50 md:text-lg">
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="relative mx-auto max-w-max md:mr-0">
                <div className=" absolute -left-14 -top-12 z-10 w-28 md:w-auto">
                  <Image src={redCircle} alt="" />
                </div>
                <div className="absolute -right-7 -bottom-8 z-10 w-28 md:w-auto">
                  <Image src={greenDots} alt="" />
                </div>
                {/* <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-yellow-500 hover:text-yellow-600" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="currentColor"> </circle> <path className="text-white" d="M40.5 31.13L26.5 23.05C26.348 22.9622 26.1755 22.916 26 22.916C25.8245 22.916 25.652 22.9622 25.5 23.05C25.3474 23.1381 25.2208 23.265 25.133 23.4177C25.0452 23.5705 24.9993 23.7438 25 23.92V40.08C24.9993 40.2562 25.0452 40.4295 25.133 40.5822C25.2208 40.735 25.3474 40.8619 25.5 40.95C25.652 41.0378 25.8245 41.084 26 41.084C26.1755 41.084 26.348 41.0378 26.5 40.95L40.5 32.87C40.6539 32.7828 40.7819 32.6563 40.871 32.5035C40.96 32.3506 41.007 32.1769 41.007 32C41.007 31.8231 40.96 31.6494 40.871 31.4965C40.7819 31.3437 40.6539 31.2172 40.5 31.13ZM27 38.35V25.65L38 32L27 38.35Z" fill="currentColor"> </path>
                                </svg> */}
                <div className="rounded-7xl relative mx-auto overflow-hidden max-w-md 2xl:max-w-xl ">
                  {/* <img src="https://shuffle.dev/flex-ui-assets/images/testimonials/video-frame.jpeg" /> */}
                  {/* <Image src="/img/christin-hume-mfB1B1s4sMc-unsplash.jpg" alt="Hero Image - We work fast" width={600} height={340} /> */}
                  <Image
                    src={heroImg}
                    alt="Building step by step"
                  />
                  {/* <video className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none" poster="https://shuffle.dev/flex-ui-assets/images/testimonials/video-frame.jpeg" muted={true}>
                                        <source src="https://static.shuffle.dev/files/video-placeholder.mp4" type="video/mp4" />
                                    </video> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
