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
// ...responsiveImageFragment

export const HomeQuery = gql`
  query HomeQuery {
    home {
      title
      subheading
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
      direction
      gradientdirection
      image {
        responsiveImage(imgixParams: { fm: webp, fit: fill, w: 600, h: 600 }) {
          ...responsiveImageFragment
        }
      }
    }
    allTestimonials {
      title
      content
      name
      company
      slug
      image {
        responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, ar: "1" }) {
          ...responsiveImageFragment
        }
      }
    }
    allPosts {
      id
      title
      excerpt
      slug
      createdAt
      author {
        name
      }
      coverImage {
        responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, ar: "1" }) {
          ...responsiveImageFragment
        }
      }
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
  });
  return data;
};

export const AllProjectSlug = gql`
  query AllProjectSlug {
    allProjects {
      slug
    }
  }
`;
const ProjectBySlug = gql`
  query ProjectBySlug($slug: String!) {
    home {
      title
      subheading
    }
    project(filter: { slug: { eq: $slug } }) {
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
      clientname
      projecttype
      year
      content {
        value
        links {
          __typename
          ... on ProjectRecord {
            id
            slug
            title
            description(markdown: false)
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
            title
            content
          }
        }
        blocks
      }
      image {
        responsiveImage(imgixParams: { auto: format, fit: fill, h: "900" }) {
          ...responsiveImageFragment
        }
      }
      otherprojects {
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
        __typename
        id
        createdAt
      }
    }
  }

  ${responsiveImageFragment}
`;

export const getAllProjectSlugs = async () => {
  // get all project slugs for getStaticPaths
  const data = await request({
    query: AllProjectSlug,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });

  const { allProjects } = data;
  // console.log(allProjects);

  // const slugs = allProjects.map((project) => {
  //     slug: project.slug
  // })
  // console.log(slugs);

  return allProjects;
};

export const getProjectBySlug = async (slug) => {
  const data = await request({
    query: ProjectBySlug,
    variables: { slug },
    excludeInvalid: true,
    includeDrafts: true,
  });
  return data.project;
};

const getOtherProjects = async (slug) => {
  const OtherProjects = gql`
    query OtherProjects($neq: String = "project-2") {
      project(filter: { slug: { neq: $neq } }, orderBy: _createdAt_DESC) {
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
        __typename
        id
        createdAt
      }
      _allProjectsMeta {
        count
      }
    }
  `;
  const data = await request({
    query: OtherProjects,
    variables: { neq: slug },
    excludeInvalid: true,
    includeDrafts: true,
  });
  return data;
};

const TopBarQuery = gql`
  query TopBarQuery {
    home {
      title
      subheading
    }
  }
`;

export const getTopBar = async () => {
  const data = await request({
    query: TopBarQuery,
    variables: {},
    excludeInvalid: false,
    includeDrafts: false,
  });
  return data;
};
