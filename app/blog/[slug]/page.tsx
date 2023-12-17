import SectionContainer from "@/app/SectionContainer";
// // import CustomStructuredText from "@/components/CustomStructuredText";
import { performRequest } from "@/lib/datocms";
import { gql } from "graphql-request";
import Link from "next/link";
import {
  Image as DatoImage,
  ResponsiveImageType,
  StructuredText,
} from "react-datocms";

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

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = PAGE_CONTENT_QUERY;
  const variables = { eq: params.slug };
  const { data } = await performRequest({ query, variables });

  const p = data?.post;

  return (
    <div className="pb-32">
      <SectionContainer className="pt-20 ">
        <h1 className="text-3xl font-semibold">{p.title}</h1>
        <p className=" leading-7">{p.excerpt}</p>
      </SectionContainer>
      <DatoImage
        data={p.coverImage.responsiveImage}
        className="mt-16 max-h-screen"
        pictureClassName="object-cover"
      />
      <SectionContainer className="pt-32 prose lg:prose-xl prose-stone prose-img:rounded-xl mx-auto">
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
      </SectionContainer>
      {/* <SectionContainer className="">
        <pre className="max-w-xl pt-24">{JSON.stringify(data, null, 2)}</pre>
      </SectionContainer> */}
    </div>
  );
}
