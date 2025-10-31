import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

import { client } from "@/sanity/lib/client";

// fetch last 3 posts and projects from Sanity
async function getNavbarData() {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc) [0...3] {
      title,
      "slug": slug.current,
      excerpt
    },
    "projects": *[_type == "project"] | order(position asc, _createdAt desc) [0...3] {
      title,
      "slug": slug.current,
      description
    }
  }`;

  return await client.fetch(query);
}

const NavItems = [
  {
    title: "Home",
    href: "/",
    description: "Webdesign fürs Handwerk",
  },
  {
    title: "Projekte",
    href: "/#projekte",
    description: "Unsere Projekte",
  },
  {
    title: "Dienstleistungen",
    href: "/#dienstleistungen",
    description: "Unsere Dienstleistungen",
  },
  {
    title: "Blog",
    href: "/#blog",
    description: "Unser Blog",
  },
];

export default async function NavbarNew() {
  // fetch data from Sanity
  const { posts: allPosts, projects: allProjects } = await getNavbarData();

  return (
    <nav className="flex w-full items-center justify-between gap-4 px-6 py-2 pt-8 sm:px-8 md:px-16">
      <Link href="/" className="text-xl font-semibold">
        Lanas
      </Link>
      <NavbarNew />
      {/* <pre> */}
      {/* <code>{JSON.stringify(allPosts, null, 2)}</code> */}
      {/* </pre> */}
    </nav>
  );
}
