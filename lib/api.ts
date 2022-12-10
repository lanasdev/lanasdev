import { gql } from "graphql-request";
import request from "./datocms";
import { responsiveImageFragment } from "lib/fragments";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

export const getHome = async (locale: string) => {
  const HomeQuery = gql`
    query HomeQuery($locale: SiteLocale) {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
      home(locale: $locale) {
        title
        subheading
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
      allProjects(locale: $locale) {
        title
        description
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
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
      }
      # allTestimonials {
      #   title
      #   content
      #   name
      #   company
      #   slug
      #   image {
      #     responsiveImage(
      #       imgixParams: { auto: format, fit: crop, w: 300, h: 300, ar: "1" }
      #     ) {
      #       ...responsiveImageFragment
      #     }
      #   }
      # }
      allPosts(locale: $locale, fallbackLocales: en) {
        id
        title
        excerpt
        slug
        createdAt
        author {
          name
        }
        coverImage {
          responsiveImage(
            imgixParams: { auto: format, fit: crop, w: 300, h: 300, ar: "1" }
          ) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `;
  const data = await request({
    query: HomeQuery,
    variables: {
      locale,
    },
    excludeInvalid: true,
    includeDrafts: false,
  });
  return data;
};

export const getAllProjectSlugs = async ({ locales = ["en", "de"] }) => {
  // get all project slugs for getStaticPaths
  const data = await request({
    query: gql`
      query AllProjectSlug {
        allProjects {
          slug
        }
      }
    `,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });

  const paths = [];

  data.allProjects.map((project) => {
    locales.map((language) => {
      paths.push({ params: { slug: project.slug }, locale: language });
    });
  });

  return paths;
};

export const getProjectBySlug = async (
  slug: string | string[],
  preview: boolean,
  locale: string
) => {
  const ProjectBySlug = gql`
    query ProjectBySlug($slug: String!, $locale: SiteLocale) {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }

      home(locale: $locale) {
        title
        subheading
      }
      project(locale: $locale, filter: { slug: { eq: $slug } }) {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
        title
        description
        slug
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
        liveurl
        createdAt
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
        image {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
        otherprojects {
          title
          description
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

  const graphqlRequest = {
    query: ProjectBySlug,
    variables: { limit: 10, locale, slug },
    includeDrafts: preview,
    excludeInvalid: true,
  };

  return {
    subscription: preview
      ? {
          ...graphqlRequest,
          initialData: await request(graphqlRequest),
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }
      : {
          enabled: false,
          initialData: await request(graphqlRequest),
        },
  };
};

export const getTopBar = async (locale: string) => {
  const data = await request({
    query: gql`
      query TopBarQuery($locale: SiteLocale) {
        home(locale: $locale) {
          title
          subheading
        }
      }
    `,
    variables: {
      locale,
    },
    excludeInvalid: false,
    includeDrafts: false,
  });
  return data;
};

export const getAllPostsSlugs = async ({ locales = ["en", "de"] }) => {
  const data = await request({
    query: gql`
      query AllPostSlug {
        allPosts {
          slug
        }
      }
    `,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });

  const paths = [];
  data.allPosts.map((post: { slug: any }) => {
    locales.map((language) => {
      paths.push({ params: { slug: post.slug }, locale: language });
    });
  });

  // const paths = data.allPosts.map((slug) => ({
  //   params: {
  //     slug: slug.slug,
  //   },
  // }));

  return paths;
};

export const PostBySlugQuery = gql`
  query PostBySlug($slug: String!, $locale: SiteLocale) {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    post(locale: $locale, filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      title
      slug
      author {
        name
        role
        picture {
          responsiveImage(
            imgixParams: { auto: format, fit: crop, w: 50, h: 50, ar: "1" }
          ) {
            ...responsiveImageFragment
          }
        }
      }
      excerpt
      date
      createdAt
      updatedAt
      content {
        value
        blocks {
          __typename
          ... on ImageRecord {
            id
            image {
              responsiveImage(
                imgixParams: { auto: format, fit: crop, h: 600 }
              ) {
                ...responsiveImageFragment
              }
              alt
            }
          }
        }
      }
      coverImage {
        responsiveImage(imgixParams: { auto: format, fit: crop, h: "900" }) {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`;

export const getPostBySlug = async (
  slug: any,
  preview: boolean,
  locale: string
) => {
  const graphqlRequest = {
    query: PostBySlugQuery,
    variables: { limit: 10, locale, slug },
    includeDrafts: preview,
    excludeInvalid: true,
  };

  return {
    subscription: preview
      ? {
          ...graphqlRequest,
          initialData: await request(graphqlRequest),
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }
      : {
          enabled: false,
          initialData: await request(graphqlRequest),
        },
  };
};

export const ErrorQuery = async () => {
  const ERRORQUERY = gql`
    {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
      home {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
    }
  `;

  const data = await request({
    query: ERRORQUERY,
    variables: {},
    excludeInvalid: true,
    includeDrafts: false,
  });

  return data;
};
