import {
  type DocumentLocationResolvers,
  defineLocations,
} from "sanity/presentation";

export const resolve: { locations: DocumentLocationResolvers } = {
  locations: {
    project: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Project",
            href: `/projekt/${doc?.slug}`,
          },
        ],
      }),
    }),
    post: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Post",
            href: `/blog/${doc?.slug}`,
          },
        ],
      }),
    }),
    home: defineLocations({
      locations: [{ title: "Home", href: "/" }],
    }),
    about: defineLocations({
      locations: [{ title: "Über uns", href: "/ueber" }],
    }),
    impressum: defineLocations({
      locations: [{ title: "Impressum", href: "/impressum" }],
    }),
  },
};
