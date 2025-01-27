// "use client";
import Link from "next/link";

import {
  TwitterLogo,
  InstagramLogo,
  TelegramLogo,
  GithubLogo,
  EnvelopeSimple,
  PhoneCall,
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
      name: "Github",
      slug: "github",
      icon: <GithubLogo size={24} />,
      link: process.env.NEXT_PUBLIC_GITHUB_URL,
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
      name: "X (Twitter)",
      slug: "x",
      icon: <TwitterLogo size={24} />,
      link: process.env.NEXT_PUBLIC_TWITTER_URL,
    },
    {
      id: 4,
      name: "Tiktok",
      slug: "tiktok",
      icon: <GithubLogo size={24} />,
      link: process.env.NEXT_PUBLIC_TIKTOK_URL,
    },
    {
      id: 5,
      name: "Telegram",
      slug: "telegram",
      icon: <TelegramLogo size={24} />,
      link: process.env.NEXT_PUBLIC_TELEGRAM_URL,
    },
    {
      id: 6,
      name: "Video Call",
      slug: "cal",
      icon: <PhoneCall size={24} />,
      link: process.env.NEXT_PUBLIC_CALCOM,
    },
    {
      id: 7,
      name: "Email",
      slug: "email",
      icon: <EnvelopeSimple size={24} />,
      link: `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Website`,
    },
    {
      id: 8,
      name: "Impressum",
      slug: "impressum",
      icon: <EnvelopeSimple size={24} />,
      link: "/impressum",
    },
  ];

  return (
    <footer className="flex justify-between bg-foreground px-8 py-8 text-background">
      <Link href="/" className="">
        &copy; {new Date().getFullYear() || "2022"} Lanas Webdesign für
        Photovoltaik{" "}
      </Link>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-y-12">
        {socials.map((s, i) => (
          <Link
            href={s.link || "/"}
            key={s.id}
            className={cn("hover:text-accent hover:underline")}
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
