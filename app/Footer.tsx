// "use client";
import Link from "next/link";

import {
  TwitterLogo,
  InstagramLogo,
  TelegramLogo,
  GithubLogo,
  EnvelopeSimple,
} from "@/components/Icons";
// import LanguageBar from "./LanguageBar";

import { getAll } from "@vercel/edge-config";
import { cn } from "@/lib/utils";

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
  // const edgeConfig: EdgeConfig = await getAll();

  const socials = [
    {
      id: 1,
      name: "Twitter",
      slug: "twitter",
      icon: <TwitterLogo size={24} />,
      link: process.env.NEXT_PUBLIC_TWITTER_URL,
    },
    {
      id: 2,
      name: "Instagram",
      slug: "instagram",
      icon: <InstagramLogo size={24} />,
      link: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    },
    {
      id: 3,
      name: "Telegram",
      slug: "telegram",
      icon: <TelegramLogo size={24} />,
      link: process.env.NEXT_PUBLIC_TELEGRAM_URL,
    },
    {
      id: 4,
      name: "Github",
      slug: "github",
      icon: <GithubLogo size={24} />,
      link: process.env.NEXT_PUBLIC_GITHUB_URL,
    },
    {
      id: 5,
      name: "Email",
      slug: "email",
      icon: <EnvelopeSimple size={24} />,
      link: `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Website`,
    },
  ];

  return (
    <footer className=" bg-foreground text-background px-8 flex justify-between py-8">
      <Link href="/" className="">
        &copy; {new Date().getFullYear() || "2022"} Lanas.dev{" "}
      </Link>
      <div className="flex flex-col md:flex-row items-center gap-4 ">
        {socials.map((s, i) => (
          <Link
            href={s.link || "/"}
            key={s.id}
            className={cn("")}
            aria-label={s.name}
          >
            {s.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
