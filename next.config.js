/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
    qualities: [25, 50, 75, 90],
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/ueber",
        permanent: false,
      },
      {
        source: "/meet",
        destination: "https://cal.com/lanas/hallo",
        permanent: true,
      },
      // redirect project/[slug] to projekt/[slug]
      {
        source: "/project/:slug",
        destination: "/projekt/:slug",
        permanent: true,
      },
      {
        source: "/simpleanalytics",
        destination: "https://www.simpleanalytics.com/?referral=matthias",
        permanent: true,
      },
      {
        source: "/netcup",
        destination: "https://www.netcup.de/?ref=174577",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
