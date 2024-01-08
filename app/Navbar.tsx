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
  ["Über uns", "/ueber"],
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
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="text-xl font-semibold">
                    Lanas Web design
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <p className="text-sm text-gray-500">
                    Wir erstellen Websites für Ihr Unternehmen, die Ihnen mehr
                    Kunden einbringen und tatsächlich konvertieren.
                  </p>
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 pt-8">
                {NavItems.map(([title, url]) => (
                  <Link
                    href={url}
                    key={title}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "rounded-lg px-4 py-2 text-foreground transition-all hover:underline hover:underline-offset-2",
                      pathname == url ? " font-bold" : "",
                    )}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <ContactButton />
        </div>
        <div className="hidden md:flex md:space-x-4 ">
          {NavItems.map(([title, url]) => (
            <Link
              href={url}
              key={title}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "rounded-lg px-4 py-2 text-foreground hover:bg-inherit hover:underline hover:underline-offset-2",
                pathname == url
                  ? " font-medium underline underline-offset-2 hover:underline-offset-1"
                  : "",
              )}
            >
              {title}
            </Link>
          ))}
          <ContactButton />
        </div>
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
      "rounded-md bg-foreground px-6 py-2 text-background transition-colors",
    )}
  >
    Kontakt
  </Link>
);
