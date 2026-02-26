import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const AvailableBanner = ({ heroInfo }: { heroInfo: string }) => {
  return (
    <Link
      href="/#kontakt"
      className={cn(
        badgeVariants({ variant: "default" }),
        // "bg-green-300 text-green-800 hover:bg-green-100 hover:text-green-900",
        "group rounded-md px-2 py-1 hover:bg-accent-foreground hover:bg-white hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
    >
      <span className="mr-2 h-2 w-2">
        <svg
          //   className="mr-1 h-2 w-2 animate-pulse text-green-800"
          className="mr-1 h-2 w-2 animate-pulse text-white group-hover:text-green-600"
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      </span>
      <Balancer>{heroInfo}</Balancer>
    </Link>
  );
};

export default AvailableBanner;
