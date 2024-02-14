import { MetadataRoute } from "next";
import { performRequest } from "@/lib/datocms";
import { gql } from "@/lib/utils";

const query = gql`
  query getSitemap {
    home {
      _updatedAt
    }
    impressum {
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

  const { home, impressum, allProjects, allPosts } = data;

  const projects = allProjects.map(
    (project: { slug: any; _updatedAt: any }) => ({
      url: `https://lan.as/projekt/${project.slug}`,
      lastModified: project._updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );
  const posts = allPosts.map((post: { slug: any; _updatedAt: any }) => ({
    url: `https://lan.as/blog/${post.slug}`,
    lastModified: post._updatedAt,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const other = [
    {
      url: "https://lan.as",
      lastModified: home._updatedAt,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://lan.as/kontakt",
      lastModified: home._updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lan.as/ueber",
      lastModified: home._updatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://lan.as/impressum",
      lastModified: impressum._updatedAt,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
  return [...other, ...projects, ...posts];
}
