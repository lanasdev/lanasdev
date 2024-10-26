import SectionContainer from "@/app/SectionContainer";
import CalContact from "@/components/CallToAction/CalContact";
// import CustomStructuredText from "@/components/CustomStructuredText";
import { performRequest } from "@/lib/datocms";
import { gql } from "@/lib/utils";
import { ResolvingMetadata } from "next";
import Link from "next/link";
import {
  Image as DatoImage,
  Metadata,
  ResponsiveImageType,
  SRCImage,
  StructuredText,
  toNextMetadata,
} from "react-datocms";
import ProjectCards from "./ProjectCards";
import Projectlist from "@/app/Projectlist";
import Projectgrid from "@/app/Projectgrid";
import Balancer from "react-wrap-balancer";
import ProgressBar from "@/components/ProgressBar";
import ClickableImage from "@/components/ClickableImage";
import Contact from "@/components/Contact";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  const query = gql`
    query getProjectSlugs {
      allProjects {
        slug
      }
    }
  `;
  const { data } = await performRequest({ query });

  const allProjects = data.allProjects;

  return allProjects.map((project: any) => ({
    params: {
      slug: project.slug,
    },
  }));
}

const PAGE_CONTENT_QUERY = gql`
  query getProject($eq: String) {
    _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
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
      otherprojects {
        title
        slug
        description
        image {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
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

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
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
    const year = d.getFullYear();
    return `${month} ${year}`;
  }

  return (
    <div className="">
      <SectionContainer className="pt-20 ">
        <h1 className="text-3xl font-semibold">
          <Balancer>Projekt: {p.title}</Balancer>
        </h1>
        <p className=" pt-4 leading-7">
          <Balancer>{p.description}</Balancer>
        </p>
      </SectionContainer>
      <DatoImage
        data={p.image.responsiveImage}
        className="mt-16"
        pictureClassName="object-cover"
      />
      <SectionContainer className="pt-8">
        <div className="flex justify-around gap-4">
          {p.clientname && (
            <div className="">
              <p className="font-medium ">
                Kunde:{" "}
                <span className="inline-block font-normal">
                  {p.clientname || "Solar Sam"}
                </span>
              </p>
            </div>
          )}

          {p.createdAt && (
            <div className="">
              <p className="font-medium ">
                Erstellt: {/* format date like this: "Sept 21" */}
                <span className="inline-block font-normal">
                  {p.createdAt ? formatDate(p.createdAt) : ""}
                </span>
              </p>
            </div>
          )}

          {p.liveurl && (
            <div className="">
              <p className="font-medium">
                Live URL:{" "}
                <Link
                  href={p.liveurl || "/"}
                  className="font-normal hover:underline"
                >
                  {p.liveurl}
                </Link>
              </p>
            </div>
          )}
        </div>
      </SectionContainer>
      <SectionContainer className="prose prose-stone mx-auto pt-32 prose-img:rounded-xl max-w-full break-words">
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
                  <ClickableImage
                    data={(record.image as RecordImageType).responsiveImage}
                  />
                );
              default:
                // return <p>{JSON.stringify(record)}</p>;
                return null;
            }
            return <p>{JSON.stringify(record)}</p>;
          }}
        />
        {/* <CustomStructuredText data={p.content} /> */}
        <ProgressBar />
      </SectionContainer>
      {/* <CalContact /> */}

      <SectionContainer className="pt-8">
        <ProjectCards projects={p.otherprojects} currentProjectSlug={p.slug} />
        {/* <Projectgrid allProjects={p.otherprojects} /> */}
      </SectionContainer>
      {/* <SectionContainer className="">
        <pre className="max-w-xl pt-24">{JSON.stringify(data, null, 2)}</pre>
      </SectionContainer> */}
      <Contact />
    </div>
  );
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: MetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const response = await performRequest(
    getPageRequest({ params: { slug: params.slug } }),
  );
  const p = response.data.project;

  return toNextMetadata(p.seoFallback || []);
}
