import SectionContainer from "@/app/SectionContainer";
import CalContact from "@/components/CallToAction/CalContact";
// // import CustomStructuredText from "@/components/CustomStructuredText";
import { performRequest } from "@/lib/datocms";
import { gql } from "@/lib/utils";
import Link from "next/link";
import {
  Image as DatoImage,
  ResponsiveImageType,
  StructuredText,
  toNextMetadata,
} from "react-datocms";
import BlogAuthor from "./BlogAuthor";
import BlogHeader from "./BlogHeader";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Bloglist from "@/components/Bloglist";
import OtherPosts from "./OtherPosts";
import ProgressBar from "@/components/ProgressBar";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  const query = gql`
    query getPostsSlugs {
      allPosts {
        slug
      }
    }
  `;
  const { data } = await performRequest({ query });

  const allPosts = data.allPosts;

  return allPosts.map((post: any) => ({
    params: {
      slug: post.slug,
    },
  }));
}

const PAGE_CONTENT_QUERY = gql`
  query getPost($eq: String) {
    allPosts(filter: { slug: { neq: $eq } }) {
      title
      slug
      excerpt
      createdAt
      coverImage {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
      }
    }
    _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    post(filter: { slug: { eq: $eq } }) {
      title
      slug
      date
      excerpt
      createdAt
      content {
        value
      }
      coverImage {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        role
        picture {
          responsiveImage(
            imgixParams: { auto: format, w: 150, h: 150, ar: "1:1" }
          ) {
            ...responsiveImageFragment
          }
        }
      }
      content {
        value
        links
        blocks {
          __typename
          ... on ImageRecord {
            id
            image {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      seo {
        title
        description
        noIndex
        twitterCard
      }
      seoFallback: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;

function getPageRequest({ params }: { params: { slug: string } }) {
  return {
    query: PAGE_CONTENT_QUERY,
    variables: { eq: params.slug },
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = PAGE_CONTENT_QUERY;
  const variables = { eq: params.slug };
  const { data } = await performRequest(
    getPageRequest({ params: { slug: params.slug } }),
  );

  const p = data?.post;

  return (
    <>
      <div className="pb-32">
        <BlogHeader title={p.title} date={p.date} author={p.author} />
        <DatoImage
          data={p.coverImage.responsiveImage}
          className="mt-8 max-h-screen"
          pictureClassName="object-cover"
        />
        <SectionContainer className="prose prose-stone mx-auto pt-32 prose-img:rounded-xl">
          <StructuredText
            data={p.content}
            renderBlock={({ record }) => {
              if (record.__typename === "ImageRecord") {
                return (
                  <DatoImage
                    data={(record.image as RecordImageType).responsiveImage}
                    className="mt-16 max-h-screen"
                    pictureClassName="object-cover"
                  />
                );
              }
              return null;
            }}
          />
          <ProgressBar />
        </SectionContainer>

        {/* <SectionContainer className="">
        <CalContact />
      </SectionContainer> */}
        <OtherPosts allPosts={data.allPosts} />
        {/* <SectionContainer className="">
        <pre className="max-w-xl pt-24">{JSON.stringify(data, null, 2)}</pre>
      </SectionContainer> */}
      </div>
    </>
  );
}

type MetadataProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const response = await performRequest(
    getPageRequest({ params: { slug: params.slug } }),
  );
  const p = response.data.post;

  return toNextMetadata(p.seoFallback || []);
}
