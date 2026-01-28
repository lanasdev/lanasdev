import { ImageResponse } from "next/og";
import { renderOGImage } from "@/lib/og";
import { client } from "@/sanity/lib/client";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const QUERY = `*[_type == "project" && slug.current == $slug][0] {
  title,
  description,
  image {
    asset-> {
      url,
      metadata { palette }
    }
  },
  seo {
    title,
    description,
    image {
      asset-> {
        url,
        metadata { palette }
      }
    }
  }
}`;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await client.fetch(QUERY, { slug });

  if (!project) {
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1a",
          color: "white",
          fontSize: 48,
        }}
      >
        Project not found
      </div>,
      { width: 1200, height: 630 },
    );
  }

  const title = project.seo?.title || project.title;
  const description = project.seo?.description || project.description;
  const coverImage = project.seo?.image || project.image;
  const coverImageUrl = coverImage?.asset?.url;
  const palette = coverImage?.asset?.metadata?.palette;

  return renderOGImage({
    title,
    description,
    coverImageUrl,
    palette,
  });
}
