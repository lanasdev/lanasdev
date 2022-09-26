import { gql } from "graphql-request";
import request from "./datocms";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

const responsiveImageFragment = gql`
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
    bgColor
    base64
  }
`;

export const HomeQuery = gql`
  query HomeQuery {
    home {
      title
      subheading
      updatedAt
    }
    allProjects {
      title
      description(markdown: false)
      slug
      classname
      position
      color1 {
        hex
      }
      color2 {
        hex
      }
      gradientdirection
      image {
        responsiveImage(imgixParams: { fm: webp, fit: fill, w: 600, h: 600 }) {
          ...responsiveImageFragment
        }
      }
    }
    allTestimonials {
      slug
      title
      text {
        value
      }
      content(markdown: false)
    }
  }
  ${responsiveImageFragment}
`;

export const getHome = async () => {
    const data = await request({
    query: HomeQuery,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  })
    return data
}
