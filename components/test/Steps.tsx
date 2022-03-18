import Image from "next/image";
import Link from "next/link";

import stockImg from "../../public/stock.png";
import redCircle from "../../public/img/circle3-red.svg";
import greenDots from "../../public/img/dots3-green.svg";

const Steps = () => (
  <section className="overflow-hidden bg-white bg-pattern-white bg-center py-24">
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap">
        <div className="mb-16 w-full px-4 md:mb-0 md:w-1/2">
          <div className="relative mx-auto max-w-max md:ml-0">
            <div className="absolute -right-8 -top-8 z-10 w-28 md:w-auto">
              <Image src={redCircle} alt="Red Circle" />
            </div>
            <Image
              src={stockImg}
              alt="Woman pointing to whiteboard"
              loading="lazy"
            />
            <div className="absolute -left-10 -bottom-8 z-10 w-28 md:w-auto ">
              <Image src={greenDots} alt="Green Dots" />
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <span className="mb-4 inline-block rounded-full bg-yellow-100 py-px px-2 text-xs font-medium uppercase leading-5 text-yellow-500 shadow-sm">
            How it works
          </span>
          <h2 className="mb-12 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
            Steps to your new Website
          </h2>
          <div className="-mx-4 flex flex-wrap text-center md:text-left">
            <div className="mb-8 w-full px-4 md:w-1/2">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-semibold text-white">
                1
              </div>
              <h3 className="mb-2 text-2xl font-bold">
                You make the first move
              </h3>
              <p className="text-coolGray-500 font-medium">
                Contact us so we can discuss your project and how we can get you
                on track.
              </p>
            </div>
            <div className="mb-8 w-full px-4 md:w-1/2">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-semibold text-white">
                2
              </div>
              <h3 className="mb-2 text-2xl font-bold">Design</h3>
              <p className="text-coolGray-500 font-medium">
                We will work in constant contact with you to create something
                both unique and suitable for your company.
              </p>
            </div>
            <div className="mb-8 w-full px-4 md:w-1/2">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-semibold text-white">
                3
              </div>
              <h3 className="mb-2 text-2xl font-bold">Build</h3>
              <p className="text-coolGray-500 font-medium">
                Now the development process starts. We will build your it, fix
                all the quirks and bugs and make sure it is ready for launch.
              </p>
            </div>
            <div className="mb-8 w-full px-4 md:w-1/2">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-semibold text-white">
                4
              </div>
              <h3 className="mb-2 text-2xl font-bold">Launch</h3>
              <p className="text-coolGray-500 font-medium">
                Your website is now live and ready to be seen. If you wish, we
                can take care of the hosting and maintenance of the website. So
                that everything remains hassle free and runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;
