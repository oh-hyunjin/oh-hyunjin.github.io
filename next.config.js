/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      'www.notion.so',
      'images.unsplash.com'
    ]
  },
  basePath: "", // css 적용
};

module.exports = nextConfig
