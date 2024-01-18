"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavItems = [
  ["Home", "/"],
  ["Projekte", "/#projekte"],
  ["Dienstleistungen", "/#dienstleistungen"],
  ["Blog", "/#blog"],
];

const Navbar = () => {
  const pathname = usePathname();
  // const aClass =
  //   "rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 ";

  return (
    <nav className="flex w-full items-center justify-between gap-4 px-6 py-2 pt-8 sm:px-8 md:px-16">
      <Link href="/" className="text-xl font-semibold">
        Lanas
      </Link>
      <div className="" role="navigation" aria-label="Main menu">
        <div className="flex gap-4 md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Hamburger menu">
              <Icon path={mdiMenu} size={1.5} />
            </SheetTrigger>
            <SheetContent className="h-full">
              <SheetHeader className="pt-2 text-left">
                <SheetTitle>
                  <Link href="/" className="text-xl font-semibold">
                    Lanas Webdesign
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <p className="text-sm text-accent-foreground">
                    Lanas ist eine Webagentur, die sich auf die Erstellung von
                    Landing Pages und kleinen Shops in der Solarbranche
                    spezialisiert hat.
                  </p>
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col justify-between gap-8">
                <ul className="flex flex-col items-start gap-y-4 pt-8">
                  {NavItems.map(([title, url]) => (
                    <li key={title}>
                      <Link
                        href={url}
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "rounded-lg py-2 pr-4 text-foreground transition-all hover:underline hover:underline-offset-2",
                          pathname == url ? " font-bold" : "",
                        )}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ContactButton />
              </div>
            </SheetContent>
          </Sheet>
          <ContactButton />
        </div>
        <ul className="hidden md:flex md:space-x-4 ">
          {NavItems.map(([title, url]) => (
            <li key={title}>
              <Link
                href={url}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  " border-collapse rounded-none border-b-2 border-hidden px-4 py-2 text-foreground transition-all duration-75 hover:border-b-2 hover:border-solid hover:border-primary hover:bg-inherit  ",
                  pathname == url
                    ? "border-b-2 border-solid border-primary font-semibold"
                    : "",
                )}
              >
                {title}
              </Link>
            </li>
          ))}
          <li>
            <ContactButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

const ContactButton = () => (
  <Link
    href="/#kontakt"
    className={cn(
      buttonVariants({ variant: "default" }),
      "rounded-md bg-foreground px-6 py-2 text-background transition-colors hover:bg-primary/80",
    )}
  >
    Kontakt
  </Link>
);
