import Link from "next/link";
import { Metadata } from 'next';
import {
  Image as DatoImage,
  ResponsiveImageType,
  StructuredText,
  toNextMetadata
} from "react-datocms";
import { performRequest } from "@/lib/datocms";
import { gql } from "@/lib/utils";


export const revalidate = 300; // 5 minutes



const ABOUT_QUERY = gql`
  query MyQuery {
    _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    about {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      seoFallback: _seoMetaTags {
        attributes
        content
        tag
      }
      title
      description
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

function fetchContent() {
  return performRequest({ query: ABOUT_QUERY });
}

export default async function AboutPage() {
  const data = await performRequest({ query: ABOUT_QUERY });

  const about = data.data.about;

  return (
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-amber-600">
                  Schnelle & optimierte Webseiten
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                  {about.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-stone-700">
                  {about.description}
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt=""
            /> */}
            <DatoImage
              data={about.image.responsiveImage}
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              pictureClassName="object-cover"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <article className="prose prose-base prose-stone max-w-xl leading-7 lg:max-w-lg">
                <StructuredText data={about.content} />
              </article>
            </div>
          </div>
        </div>
      </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await performRequest({
    query: ABOUT_QUERY
  });

  const seoTags = [
    ...data._site.favicon,
    ...data.about.seo
  ];

  return toNextMetadata(seoTags);
}