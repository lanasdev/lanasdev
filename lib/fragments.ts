import { gql } from "graphql-request";

export const responsiveImageFragment = gql`
  fragment responsiveImageFragment on ResponsiveImage {
    src
    width
    height
    alt
    base64
  }
`;
// ...responsiveImageFragment
