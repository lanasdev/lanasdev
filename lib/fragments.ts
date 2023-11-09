import { gql } from "graphql-request";

export const RESPONSIVE_IMAGE_FRAGMENT = gql`
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
