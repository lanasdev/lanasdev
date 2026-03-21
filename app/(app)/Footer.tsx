import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  TelegramLogoIcon,
  XLogoIcon,
} from "@/components/Icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projekte", href: "/#projekte" },
  { name: "Dienstleistungen", href: "/#dienstleistungen" },
  { name: "Blog", href: "/#blog" },
  { name: "Kontakt", href: "/#kontakt" },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: GithubLogoIcon,
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    name: "Instagram",
    icon: InstagramLogoIcon,
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
  {
    name: "X (Twitter)",
    icon: XLogoIcon,
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
  },
  {
    name: "Telegram",
    icon: TelegramLogoIcon,
    href: process.env.NEXT_PUBLIC_TELEGRAM_URL,
  },
  {
    name: "Mail",
    icon: EnvelopeSimpleIcon,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "hey@lanas.dev"}`,
  },
];

const linkClasses =
  "text-background/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md";

const Footer = () => {
  return (
    <footer className="bg-foreground px-6 pt-16 pb-8 text-background md:px-16">
      <nav aria-label="Footer" className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            >
              Lanas
            </Link>
            <p className="mt-2 text-sm text-background/60">
              Webdesign für blitzschnelle Shopify Shops
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClasses}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Rechtliches
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/impressum" className={linkClasses}>
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Kontakt
            </p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href || "/"}
                  aria-label={social.name}
                  className="text-background/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                >
                  <social.icon size={22} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 border-t border-background/10 pt-6">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} Lanas Webdesign
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
