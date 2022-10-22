import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TwitterLogo, InstagramLogo, GithubLogo } from "phosphor-react";
import LanguageBar from "./LanguageBar";

const Footer = () => {
  const aClass =
    "rounded-lg px-3 py-2 text-gray-700 font-medium dark:text-white/75 hover:bg-gray-200 hover:text-gray-900 ";
  const socials = [
    {
      id: 1,
      name: "Twitter",
      icon: <TwitterLogo size={24} />,
      link: process.env.NEXT_PUBLIC_TWITTER_URL,
    },
    {
      id: 2,
      name: "Instagram",
      icon: <InstagramLogo size={24} />,
      link: process.env.NEXT_PUBLIC_INSTGRAM_URL,
    },
    {
      id: 3,
      name: "Github",
      icon: <GithubLogo size={24} />,
      link: process.env.NEXT_PUBLIC_GITHUB_URL,
    },
  ];

  return (
    // a cool footer
    <footer className=" pt-24 ">
      <div className="flex flex-col items-center justify-center space-y-4 pb-4 pt-32 sm:flex-row-reverse sm:justify-between sm:space-y-0 ">
        <div className="flex flex-row items-center gap-4 sm:gap-0 ">
          {socials.map((s) => (
            <Link href={s.link} key={s.id}>
              <a className={aClass} aria-label={s.name}>
                {s.icon}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row-reverse">
          <LanguageBar />

          <Link href="/">
            <a className="hover:underline hover:decoration-amber-500 hover:decoration-2">
              &copy; {new Date().getFullYear() || "2022"} Lanas.dev{" "}
              <span className="hidden whitespace-pre-line md:inline-block">
                {"-"}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
