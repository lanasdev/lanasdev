import Balancer from "react-wrap-balancer";

import Link from "next/link";
import CallToCal from "./CallToCal";

export default function CalContact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
          <div className="mx-auto max-w-md text-center py-32 ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <Balancer>
                Bereit Energie unabhängig zu werden? <br />
                <span className="text-indigo-400">Wir helfen dir dabei!</span>
              </Balancer>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Wir beraten dich gerne in allen Fragen rund um das Thema
              Photovoltaik bzw. Speicher und freuen uns auf deine Anfrage.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 ">
              <CallToCal />

              <Link
                href="#"
                className="group text-sm font-semibold leading-6 text-white"
              >
                Mehr erfahren
                <span
                  className="pl-1 group-hover:translate-x-1 inline-block transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
