/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["www.datocms-assets.com"],
  },
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
};
module.exports = nextConfig;
