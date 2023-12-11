"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
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
  ["Dienstleistungen", "/dienstleistungen"],
  ["Projekte", "/projekte"],
  ["Blog", "/blog"],
];

const Navbar = () => {
  const pathname = usePathname();
  // const aClass =
  //   "rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 ";

  return (
    <nav className="flex gap-4 py-2 pt-8 px-6 sm:px-8 md:px-16 items-center justify-between w-full">
      <Link href="/" className="font-semibold text-xl">
        Lanas
      </Link>
      <div className="flex gap-4 md:hidden">
        <Sheet>
          <SheetTrigger>
            <Icon path={mdiMenu} size={1.5} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
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
              "px-4 py-2 text-foreground transition-all rounded-lg hover:underline hover:underline-offset-2",
              pathname == url ? " font-semibold" : ""
            )}
          >
            {title}
          </Link>
        ))}
        <ContactButton />
      </div>
    </nav>
  );
};

export default Navbar;

const ContactButton = () => (
  <Link
    href="/contact"
    className={cn(
      buttonVariants({ variant: "default" }),
      "px-6 py-2 bg-foreground text-background transition-colors rounded-md hover:bg-foreground/90 hover:text-foreground"
    )}
  >
    Kontakt
  </Link>
);