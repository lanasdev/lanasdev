import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const hsl = ({ item }) => `hsl(${item.h},${item.s}%,${item.l}%)`;

const colorList = [
  {
    name: "green",
    h: 83,
    s: 94,
    l: 48,
  },
  {
    name: "orange",
    h: 22,
    s: 94,
    l: 48,
  },
  {
    name: "blue",
    h: 207,
    s: 94,
    l: 48,
  },
  {
    name: "purple",
    h: 283,
    s: 94,
    l: 48,
  },
];

// @ts-ignore
export default function Projectgrid({ allProjects }) {
  return (
    <div className="max-w-fit pt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
        {/* <Link
          href="/projects"
          className={`bg-[${hsl(colorList[0])}] h-32 aspect-[4:3]`}
        >
          {" "}
        </Link> */}
        {/* make me 4 boxes with the colors from colorsList and ignore allProjects */}

        {colorList.map((color, index) => (
          <Link
            href="/projects"
            key={index}
            className={`h-32 aspect-[4:3] w-64`}
            style={{ backgroundColor: `hsl(${color.h}, 94%, 48%)` }}
          ></Link>
        ))}
      </div>
      {/* <pre>{JSON.stringify(allProjects, null, 2)}</pre> */}
    </div>
  );
}
