/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: [
      'www.notion.so',
      'images.unsplash.com'
    ]
  },
  images: {
    unoptimized: true,
    path: ""
  },
  basePath: "", // css 적용
  assetPrefix: "",
};

module.exports = nextConfig
