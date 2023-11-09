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
          ["Lanas", "/"],
          ["About", "/about"],
          ["Contact", "/contact"],
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
      </div>
    </nav>
  );
};

export default Navbar;
