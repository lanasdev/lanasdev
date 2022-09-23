import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const aClass =
    "rounded-lg px-3 py-2 text-gray-700 font-medium dark:text-white/75 hover:bg-gray-200 hover:text-gray-900 ";

  return (
    // a cool footer
    <footer className="overflow-hidden py-24 ">
      <div className="flex flex-col items-center justify-center px-4">
        {/* <Image src="/img/LanasLogoYellow.svg" alt="Lanas Logo" width={108} height={32} /> */}
        <span className="text-xl">Lanas.</span>
        <div className="flex flex-row py-2 pt-6 sm:justify-center md:ml-0 ">
          {[
            ["Home", "/"],
            ["About", "/about"],

            // ["Blog", "/blog"],
            // ["Contact", "/contact"],
            // ["Privacy Policy", "/privacy-policy"],
          ].map(([title, url]) => (
            <Link href={url} key={title}>
              <a className={aClass}>{title}</a>
            </Link>
          ))}
        </div>

        <span className="pt-6 text-center text-gray-400">
          {" "}
          &copy; {new Date().getFullYear() || "2022"} Lanas.dev{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
