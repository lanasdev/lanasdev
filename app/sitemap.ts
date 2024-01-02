import { MetadataRoute } from "next";
import { performRequest } from "@/lib/datocms";
import { gql } from "graphql-request";

const query = gql`
  query getSitemap {
    home {
      _updatedAt
    }
    allProjects {
      slug
      title
      _createdAt
      _updatedAt
    }
    allPosts {
      slug
      title
      _createdAt
      _updatedAt
    }
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await performRequest({ query });

  const { home, allProjects, allPosts } = data;

  const projects = allProjects.map(
    (project: { slug: any; _updatedAt: any }) => ({
      url: `https://lanas.dev/projekt/${project.slug}`,
      lastModified: project._updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );
  const posts = allPosts.map((post: { slug: any; _updatedAt: any }) => ({
    url: `https://lanas.dev/blog/${post.slug}`,
    lastModified: post._updatedAt,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const other = [
    {
      url: "https://lanas.dev",
      lastModified: home._updatedAt,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://lanas.dev/kontakt",
      lastModified: home._updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
  return [...other, ...projects, ...posts];
}
