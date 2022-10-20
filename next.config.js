/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    path: "",
  },
  basePath: "/blog",
  assetPrefix: "/blog"
};

module.exports = nextConfig
