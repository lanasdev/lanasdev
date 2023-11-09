/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["www.datocms-assets.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datocms-assets.com",
        port: "",
        pathname: "/64642/**",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "/64642/**",
      },
    ],
  },
};

module.exports = nextConfig;
