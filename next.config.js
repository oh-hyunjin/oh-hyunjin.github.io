/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    path: "",
  },
  basePath: "/blog",
  assetPrefix: "/blog",
  images:{
    domains: [
      'www.notion.so',
      'images.unsplash.com'
    ]
  }
};

module.exports = nextConfig
