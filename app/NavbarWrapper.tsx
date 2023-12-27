import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

import { gql } from "graphql-request";
import { performRequest } from "@/lib/datocms";

// fetch last 3 posts and projects from dato
const NAVBAR_QUERY = gql`
  query getNavbar {
    allPosts(first: 3) {
      title
      slug
      excerpt
    }
    allProjects(first: 3) {
      title
      slug
      description
    }
  }
`;

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
  // fetch data from dato
  const { allPosts, allProjects } = await performRequest({
    query: NAVBAR_QUERY,
  });

  return (
    <nav className="flex gap-4 py-2 pt-8 px-6 sm:px-8 md:px-16 items-center justify-between w-full">
      <Link href="/" className="font-semibold text-xl">
        Lanas
      </Link>
      <NavbarNew />
      {/* <pre> */}
      {/* <code>{JSON.stringify(allPosts, null, 2)}</code> */}
      {/* </pre> */}
    </nav>
  );
}

