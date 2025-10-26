"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Icon from "@mdi/react";
import { mdiMenu, mdiClose } from "@mdi/js";
import { useState } from "react";

const NavItems = [
  ["Home", "/", "/"],
  ["Projekte", "/#projekte", "/projekt"],
  ["Dienstleistungen", "/#dienstleistungen", "/dienstleistungen"],
  ["Blog", "/#blog", "/blog"],
];

const Navbar = () => {
  const pathname = usePathname();
  const match = pathname.match(/^\/[^\/]+/);
  const firstPathname = match ? match[0] : null;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center px-4 pt-6 sm:px-6 md:px-8 md:w-auto md:justify-center">
      <nav
        className={cn(
          "w-full max-w-6xl backdrop-blur-3xl md:w-auto",
          "transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "rounded-3xl bg-stone-100/20 pb-4" : "rounded-[104px] bg-stone-100/20"
        )}
      >
        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center gap-24 px-12 py-3 md:inline-flex">
          <Link href="/" className="text-xl font-bold text-stone-950">
            Lanas
          </Link>

          <div className="flex items-center justify-end gap-6">
            {NavItems.map(([title, url, realUrl]) => (
              <Link
                key={title}
                href={url}
                className={cn(
                  "text-base font-medium text-black transition-all duration-200",
                  "hover:opacity-70",
                  firstPathname === realUrl ? "font-bold" : ""
                )}
              >
                {title}
              </Link>
            ))}
            <ContactButton />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold text-stone-950">
              Lanas
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-stone-950 transition-all hover:opacity-70"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <Icon
                path={mobileMenuOpen ? mdiClose : mdiMenu}
                size={1.2}
                className="transition-transform duration-200"
              />
            </button>
          </div>

          {/* Accordion Menu */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="border-t border-stone-950/10">
              <ul className="flex flex-col gap-1 px-6 pt-4">
                {NavItems.map(([title, url, realUrl]) => (
                  <li key={title}>
                    <Link
                      href={url}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block w-full rounded-lg px-4 py-3 text-base font-medium text-black transition-all",
                        "hover:bg-stone-950/5",
                        firstPathname === realUrl ? "font-bold bg-stone-950/5" : ""
                      )}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <ContactButton mobile onClick={() => setMobileMenuOpen(false)} />
                </li>‰
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const ContactButton = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => (
  <Link
    href="/#kontakt"
    onClick={onClick}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-lg bg-stone-950 px-4 py-1.5 backdrop-blur-[5.25px] transition-all",
      "text-base font-medium text-white",
      "hover:bg-stone-800",
      mobile ? "w-full" : ""
    )}
  >
    Kontakt
  </Link>
);
