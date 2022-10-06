import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TwitterLogo, InstagramLogo, GithubLogo } from "phosphor-react";

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
    <footer className="overflow-hidden py-24 ">
      <div className="flex flex-col items-center justify-center px-4">
        {/* <Image src="/img/LanasLogoYellow.svg" alt="Lanas Logo" width={108} height={32} /> */}
        <Link href="/">
          <a className="text-xl hover:underline hover:decoration-amber-500">
            Lanas.
          </a>
        </Link>
        <div className="flex flex-row gap-6 py-2 pt-6 sm:justify-center md:ml-0 ">
          {socials.map((s) => (
            <Link href={s.link} key={s.id}>
              <a className={aClass} aria-label={s.name}>
                {s.icon}
              </a>
            </Link>
          ))}
        </div>

        <span className="pt-6 text-center text-gray-500">
          {" "}
          &copy; {new Date().getFullYear() || "2022"} Lanas.dev{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
