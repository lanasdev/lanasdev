import Link from "next/link";
import Image from "next/image";
import i18n from "lib/i18n";
import { DEFAULT_LANG } from "lib/apiV2";

import ErrorGif from "public/img/doc-brown-back-to-the-future-sd.gif";

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col content-center items-center justify-center px-6 py-48 md:px-12">
        <Image
          src={ErrorGif}
          alt={"Doc Brown from Back into the Future looking surprised"}
        />
        <h2 className="py-10 text-2xl font-semibold md:text-3xl xl:text-6xl">
          {i18n.error.title[DEFAULT_LANG]}
        </h2>
        <p className="text-xl">{i18n.error.subtitle[DEFAULT_LANG]}</p>
        <Link
          href="/"
          className="underline-2 mt-12 rounded-lg border-2 border-amber-500 px-8 py-4 decoration-amber-500 underline-offset-2 transition-colors delay-75 duration-200 ease-in-out hover:bg-amber-500 hover:text-white"
        >
          {i18n.error.back[DEFAULT_LANG]}
        </Link>
      </main>
    </>
  );
}
