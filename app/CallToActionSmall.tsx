import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { getAll } from "@vercel/edge-config";

export interface EdgeConfig {
  socials: Socials;
}

export interface Socials {
  instagram: string;
  twitter: string;
  github: string;
  telegram: string;
  email: string;
}

const CallToActionSmall = async () => {
  const edgeConfig: EdgeConfig = await getAll();
  const email = edgeConfig?.socials?.email
    ? edgeConfig?.socials?.email
    : "Email";

  return (
    <div className="-mb-40 text-gray-100">
      <div className="mx-auto pt-48 ">
        <div className="relative isolate overflow-hidden rounded-xl bg-gray-900 px-6 py-24  sm:px-8 ">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="relative flex flex-col items-center justify-between md:flex-row ">
            <div className="flex">
              <h3 className="max-w-sm pb-16 text-3xl font-medium tracking-tighter sm:text-4xl md:max-w-lg md:pb-0">
                <Balancer>Contact me for a free consultation</Balancer>
              </h3>
            </div>
            <fieldset className="flex flex-col items-stretch justify-stretch md:flex-row md:justify-around md:gap-x-4 ">
              <input
                id="email"
                type="email"
                placeholder={email}
                className="mb-4 rounded-md text-gray-800 md:mb-0 md:ml-4"
              />
              <button
                className="transition-color rounded-md bg-gray-800 px-4 py-2 text-gray-100 delay-75 duration-200 hover:bg-gray-600"
                type="submit"
              >
                Submit
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSmall;
