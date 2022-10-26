/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    path: ""
  },
  images:{
    domains: [
      'www.notion.so',
      'images.unsplash.com'
    ]
  },
  basePath: "", // css 적용
  assetPrefix: "",
};

module.exports = nextConfig
