/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["www.datocms-assets.com"],
  },
  async redirects() {
    return [
      {
        source: "/call",
        destination: "https://cal.com/lanas/hallo",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
