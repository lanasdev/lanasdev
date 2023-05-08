import { gql } from "graphql-request";
import { responsiveImageFragment } from "lib/fragments";
import request from "./datocms";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

export const DEFAULT_LANG = "en";

// const datoFetcher = async ({ query, variables }: { query: string }) => {
//   // fetch datocms
//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       // content type graphql

//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_TOKEN}`,
//       "X-Include-Drafts": "false",
//       "X-Exclude-Invalid": "true",
//     },
//     body: JSON.stringify({ query }),
//   });
//   const data = await res.json();
//   if (data.errors) {
//     throw new Error("Failed to fetch API");
//   }
//   console.log("data", data);
//   return data;
// };
// export default datoFetcher;

// export const ProjectBySlug = gql`
//   query ProjectBySlug($slug: String!, $locale: SiteLocale) {
//     site: _site {
//       favicon: faviconMetaTags {
//         attributes
//         content
//         tag
//       }
//     }

//     project(locale: $locale, filter: { slug: { eq: $slug } }) {
//       seo: _seoMetaTags(locale: $locale) {
//         attributes
//         content
//         tag
//       }
//       title
//       description
//       slug
//       position
//       color1 {
//         hex
//       }
//       color2 {
//         hex
//       }
//       gradientdirection
//       clientname
//       projecttype
//       year
//       liveurl
//       createdAt
//       content {
//         value
//         links {
//           __typename
//           ... on ProjectRecord {
//             id
//             slug
//             title
//             description
//             color1 {
//               hex
//             }
//             color2 {
//               hex
//             }
//             gradientdirection
//           }
//           ... on PostRecord {
//             id
//             title
//             slug
//             excerpt
//             createdAt
//             author {
//               name
//             }
//           }
//           ... on TestimonialRecord {
//             id
//             name
//             slug
//             title
//             company
//             content
//             image {
//               responsiveImage(
//                 imgixParams: {
//                   auto: format
//                   fit: crop
//                   w: 300
//                   h: 300
//                   ar: "1"
//                 }
//               ) {
//                 ...responsiveImageFragment
//               }
//             }
//           }
//         }
//         blocks {
//           __typename
//           ... on ImageRecord {
//             id
//             image {
//               responsiveImage(imgixParams: { auto: format }) {
//                 ...responsiveImageFragment
//               }
//             }
//           }
//         }
//       }
//       image {
//         responsiveImage(imgixParams: { auto: format }) {
//           ...responsiveImageFragment
//         }
//       }
//       otherprojects {
//         title
//         description
//         slug
//         classname
//         position
//         color1 {
//           hex
//         }
//         color2 {
//           hex
//         }
//         gradientdirection
//         __typename
//         id
//         createdAt
//       }
//     }
//   }

//   ${responsiveImageFragment}
// `;

// export const getProjectBySlug = async (
//   slug: string | string[],
//   locale: string = "en"
// ) => {

export const getHome = async (locale: string = "en") => {
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

// export const getAllProjectSlugs = async ({
// preview = false,
// locales = ["en"],
// }) => {
export const getAllProjectSlugs = async () => {
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
    includeDrafts: false,
  });

  // const paths: any = [];

  // data.allProjects.map((project) => {
  //   locales.map((language) => {
  //     paths.push({
  //       params: {
  //         slug: project.slug,
  //       },
  //       locale: language,
  //     });
  //   });
  // });
  const paths = data.allProjects.map((project) => ({
    slug: project.slug,
  }));

  return paths;
};

export const getProjectBySlug = async (
  slug: string | string[],
  preview: boolean,
  locale: string = "en"
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
        seo: _seoMetaTags(locale: $locale) {
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

export const getProjectBySlugQuick = async (
  slug: string | string[],
  preview: boolean,
  locale: string = DEFAULT_LANG
) => {
  const ProjectBySlug = gql`
    query ProjectBySlug($slug: String!, $locale: SiteLocale) {
      project(locale: $locale, filter: { slug: { eq: $slug } }) {
        seo: _seoMetaTags(locale: $locale) {
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
};

/// Blog POSTS
//
//

// export const getAllPostsSlugs = async ({ locales = ["en"] }) => {
export const getAllPostsSlugs = async () => {
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
    includeDrafts: false,
  });

  // const paths: any = [];
  // data.allPosts.map((post: { slug: any }) => {
  //   locales.map((language) => {
  //     paths.push({ params: { slug: post.slug }, locale: language });
  //   });
  // });

  const paths = data.allPosts.map((slug) => ({
    slug: slug.slug,
  }));

  return paths;
};

export const PostBySlugQuery = gql`
  query PostBySlug($slug: String!, $locale: SiteLocale) {
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
            imgixParams: { auto: format, fit: crop, w: 300, h: 300, ar: "1" }
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
  preview: boolean = false,
  locale: string = DEFAULT_LANG
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
