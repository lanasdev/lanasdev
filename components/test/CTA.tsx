import Image from "next/image";
import Link from "next/link";
import Contactform from "../Contactform";

const CTA = () => (
  <section className="overflow-hidden bg-yellow-500 bg-center py-24 text-white">
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap">
        {/* <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                
            </div> */}
        <div className="mx-auto mb-12 text-center md:max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-yellow-100 py-px px-2 text-xs font-medium uppercase leading-5 text-yellow-500 shadow-sm">
            Contact
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            How to get going
          </h1>
          <p className="text-coolGray-500 mx-4 text-lg font-medium md:text-xl">
            It&apos;s not hard! Just{" "}
            <span>
              <Link href={"/contact"}>
                <a>fill out the form on the contact page</a>
              </Link>
            </span>{" "}
            and we&apos;ll get back to you as soon as possible. Plus you get a
            100% money back guarantee in the first month of signing with us.
          </p>
          <span className="pt-16">
            <Link href="/contact">
              <a
                className="mt-16 inline-block rounded-md bg-yellow-500 py-2 px-4 text-sm font-medium leading-5 text-yellow-50 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                href="#"
              >
                Contact us!
              </a>
            </Link>
          </span>
          <Contactform />
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
