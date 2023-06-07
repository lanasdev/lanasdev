// "use client";
import Link from "next/link";

import {
  TwitterLogo,
  InstagramLogo,
  TelegramLogo,
  GithubLogo,
  EnvelopeSimple,
} from "./Icons";
// import LanguageBar from "./LanguageBar";

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

const Footer = async () => {
  const edgeConfig: EdgeConfig = await getAll();

  const aClass =
    "rounded-lg px-3 py-2 text-gray-700 font-medium dark:text-white/75 hover:bg-gray-200 hover:text-gray-900 ";

  const socials = [
    {
      id: 1,
      name: "Twitter",
      slug: "twitter",
      icon: <TwitterLogo size={24} />,
      link: edgeConfig?.socials?.twitter || process.env.NEXT_PUBLIC_TWITTER_URL,
    },
    {
      id: 2,
      name: "Instagram",
      slug: "instagram",
      icon: <InstagramLogo size={24} />,
      link:
        edgeConfig?.socials.instagram || process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    },
    {
      id: 3,
      name: "Telegram",
      slug: "telegram",
      icon: <TelegramLogo size={24} />,
      link:
        edgeConfig?.socials.telegram || process.env.NEXT_PUBLIC_TELEGRAM_URL,
    },
    {
      id: 4,
      name: "Github",
      slug: "github",
      icon: <GithubLogo size={24} />,
      link: edgeConfig?.socials.github || process.env.NEXT_PUBLIC_GITHUB_URL,
    },
    {
      id: 5,
      name: "Email",
      slug: "email",
      icon: <EnvelopeSimple size={24} />,
      link:
        `mailto:${edgeConfig?.socials.email}?subject=Website` ||
        process.env.NEXT_PUBLIC_EMAIL,
    },
  ];

  return (
    <footer className=" pt-24 ">
      <div className="flex flex-col items-center justify-center space-y-4 pb-4 pt-32 sm:flex-row-reverse sm:justify-between sm:space-y-0 ">
        <div className="flex flex-row items-center gap-4 sm:gap-0 ">
          {socials.map((s, i) => (
            <Link
              href={s.link || "/"}
              key={s.id}
              className={aClass}
              aria-label={s.name}
            >
              {s.icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row-reverse">
          {/* <LanguageBar /> */}

          <Link
            href="/"
            className="hover:underline hover:decoration-amber-500 hover:decoration-2"
          >
            &copy; {new Date().getFullYear() || "2022"} Lanas.dev{" "}
            {/* <span className="hidden whitespace-pre-line md:inline-block">
              {"-"}
            </span> */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
