import { MetadataRoute } from "next";
import { getSitemapData } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getSitemapData();

  const { home, impressum, projects: allProjects, posts: allPosts } = data;

  const projects = allProjects.map(
    (project: { slug: string; _updatedAt: string }) => ({
      url: `https://lan.as/projekt/${project.slug}`,
      lastModified: project._updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );
  const posts = allPosts.map((post: { slug: string; _updatedAt: string }) => ({
    url: `https://lan.as/blog/${post.slug}`,
    lastModified: post._updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const other = [
    {
      url: "https://lan.as",
      lastModified: home?._updatedAt || new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://lan.as/kontakt",
      lastModified: home?._updatedAt || new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://lan.as/ueber",
      lastModified: home?._updatedAt || new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://lan.as/impressum",
      lastModified: impressum?._updatedAt || new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
  ];
  return [...other, ...projects, ...posts];
}
