"use client";

import * as React from "react";
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
import { gql } from "graphql-request";

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
  ["Home", "/", "Webdesign fürs Handwerk"],
  ["Projekte", "/#projekte", "Unsere Projekte"],
  ["Dienstleistungen", "/#dienstleistungen", "Unsere Dienstleistungen"],
  ["Blog", "/#blog", "Unser Blog"],
];

const NavItems2 = [
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
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavbarNew() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex gap-4 md:hidden">
        <Sheet>
          <SheetTrigger>
            <Icon path={mdiMenu} size={1.5} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="font-semibold text-xl">
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
                    "px-4 py-2 text-foreground transition-all rounded-lg hover:underline hover:underline-offset-2",
                    pathname == url ? " font-bold" : ""
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

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Lan.as
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Wir erstellen Websites für Ihr Unternehmen, die Ihnen
                          mehr Kunden einbringen und tatsächlich konvertieren.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ContactButton = () => (
  <Link
    href="/#kontakt"
    className={cn(
      buttonVariants({ variant: "default" }),
      "px-6 py-2 bg-foreground text-background transition-colors rounded-md"
    )}
  >
    Kontakt
  </Link>
);
