import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// @ts-ignore
export default function Projectlist({ allProjects }) {
  return (
    <div className="max-w-fit pt-16 ">
      <div className="flex justify-between items-center pb-8">
        <h3 className="text-3xl font-semibold ">Our Work</h3>
        <div className="flex gap-4">
          <Button
            variant={"ghost"}
            className="text-xl border-2 rounded-full py-2 px-2"
          >
            {"<"}
          </Button>
          <Button
            variant={"ghost"}
            className="text-xl border-2 rounded-full py-2 px-2"
          >
            {">"}
          </Button>
        </div>
      </div>
      <hr />

      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <div className="flex w-max space-x-4 py-4 snap-x scroll-pl-8">
          {/* TODO: Fix types */}
          {allProjects.map((p: any) => (
            <Link
              href={`/projects/${p.slug}`}
              key={p.slug}
              className="scroll-ml-6 snap-center w-[80%]"
            >
              <article className="shrink-0 group overflow-hidden">
                <figure className="overflow-auto relative rounded bg-indigo-700 object-cover border-2 transition-shadow duration-200 group-hover:shadow-medium ">
                  <Image
                    src={p.image.responsiveImage.src}
                    // sizes={p.image.responsiveImage.sizes}
                    alt={`Project: ${p.title}`}
                    className="aspect-3/4 max-h-[50ch] md:max-h-full md:aspect-video h-fit w-fit object-cover "
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-color duration-200 group-hover:bg-zinc-900/50 ">
                    <h4 className="px-4 text-xl text-zinc-100 opacity-0 group-hover:opacity-100">
                      {p.title}
                    </h4>
                  </div>
                </figure>
                <figcaption className="pt-4">
                  <h4 className="text-xl font-semibold">{p.title}</h4>
                  <p className="text-md">{p.description}</p>
                </figcaption>
              </article>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* <pre>{JSON.stringify(allProjects, null, 2)}</pre> */}
    </div>
  );
}
