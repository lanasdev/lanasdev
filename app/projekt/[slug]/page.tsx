import SectionContainer from "@/app/SectionContainer";
// import CustomStructuredText from "@/components/CustomStructuredText";
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

const PAGE_CONTENT_QUERY = gql`
  query getProject($eq: String) {
    project(filter: { slug: { eq: $eq } }) {
      title
      slug
      description
      createdAt
      clientname
      liveurl
      content {
        value
      }
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
      content {
        value
        links {
          __typename
          ... on ProjectRecord {
            id
            slug
            title
            description
            color1 {
              hex
            }
            color2 {
              hex
            }
            gradientdirection
          }
          ... on PostRecord {
            id
            title
            slug
            excerpt
            createdAt
            author {
              name
            }
          }
          ... on TestimonialRecord {
            id
            name
            slug
            title
            company
            content
            image {
              responsiveImage(
                imgixParams: {
                  auto: format
                  fit: crop
                  w: 300
                  h: 300
                  ar: "1"
                }
              ) {
                ...responsiveImageFragment
              }
            }
          }
        }
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
      video {
        video {
          streamingUrl
          mp4Url
          thumbnailUrl(format: png)
          duration
          framerate
          muxPlaybackId
          muxAssetId
        }
        title
        smartTags
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
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

export default async function Page({ params }: { params: { slug: string } }) {
  const query = PAGE_CONTENT_QUERY;
  const variables = { eq: params.slug };
  const { data } = await performRequest({ query, variables });

  const p = data?.project;

  function formatDate(date: string) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date(date);
    const month = months[d.getMonth()];
    const day = d.getDate();
    return `${month} ${day}`;
  }

  return (
    <div>
      <SectionContainer className="pt-20 ">
        <h1 className="text-3xl font-semibold">Projekt: {p.title}</h1>
        <p className=" leading-7">
          {p.description ||
            "Durch eine dreifach so schnelle Ladegeschwindigkeit konnten wir bei Solar Sam die Conversion Rate verdoppeln."}
        </p>
      </SectionContainer>
      <DatoImage data={p.image.responsiveImage} className="mt-16" />
      <SectionContainer className="pt-8">
        <div className="flex gap-4 justify-around">
          <div className="">
            <p className="font-semibold text-xl">
              Client:{" "}
              <span className="font-normal">{p.clientname || "Solar Sam"}</span>
            </p>
          </div>

          <div className="">
            <p className="font-semibold text-xl">
              Created at: {/* format date like this: "Sept 21" */}
              <span className="font-normal">
                {p.createdAt ? formatDate(p.createdAt) : ""}
              </span>
            </p>
          </div>
          <div className="">
            <p className="font-medium text-xl">
              Live URL:{" "}
              <Link
                href={p.liveurl || "/"}
                className="font-normal hover:underline"
              >
                {p.liveurl || "https://solarsam.de"}
              </Link>
            </p>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="pt-64 mt-16 prose lg:prose-xl prose-stone prose-img:rounded-xl mx-auto">
        <StructuredText
          data={p.content}
          renderInlineRecord={({ record }) => {
            switch (record.__typename) {
              case "PostRecord":
                return (
                  <Link href={`/blog/${record.slug}`}>
                    {(record as any).title || "Link to Post"}
                  </Link>
                );
              case "ProjectRecord":
                return (
                  <Link href={`/project/${record.slug}`}>
                    {(record.name as string) || "Project Name"}
                  </Link>
                );
              default:
                return <p>{JSON.stringify(record)}</p>;
            }
            return <p>{JSON.stringify(record)}</p>;
          }}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "ImageRecord":
                return (
                  <DatoImage
                    data={(record.image as RecordImageType).responsiveImage}
                    className="mt-16"
                  />
                );
              default:
                return <p>{JSON.stringify(record)}</p>;
            }
            return <p>{JSON.stringify(record)}</p>;
          }}
        />
        {/* <CustomStructuredText data={p.content} /> */}
      </SectionContainer>

      <SectionContainer className="">
        <pre className="max-w-xl pt-24">{JSON.stringify(data, null, 2)}</pre>
      </SectionContainer>
    </div>
  );
}
