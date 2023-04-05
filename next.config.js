
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["www.datocms-assets.com"],
  },
  // i18n: {
  //   locales: ["en", "de"],
  //   defaultLocale: "en",
  // },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  };
module.exports = nextConfig;
