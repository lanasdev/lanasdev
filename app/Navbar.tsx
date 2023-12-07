"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();
  // const aClass =
  //   "rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 ";

  return (
    <nav className="flex gap-4 py-2 pt-4 px-6 sm:px-8 md:px-16 items-center justify-between w-full">
      <Link href="/" className="font-semibold">
        Lanas
      </Link>
      <div className="flex md:space-x-4 ">
        {[
          ["Home", "/"],
          ["Projekte", "/#projekte"],
          ["Testimonials", "/#testimonials"],
        ].map(([title, url]) => (
          <Link
            href={url}
            key={title}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "px-4 py-2 text-foreground transition-colors",
              pathname == url ? "bg-accent/25 hover:bg-accent" : ""
            )}
          >
            {title}
          </Link>
        ))}
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "default" }),
            "px-6 py-2 bg-foreground text-background transition-colors rounded-md hover:bg-foreground/90 hover:text-foreground"
          )}
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
