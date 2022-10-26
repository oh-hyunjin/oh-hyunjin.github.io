/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    path: "", // 다시 추가함
    domains: [
      'www.notion.so',
      'images.unsplash.com'
    ]
  },
  basePath: "", // css 적용
  assetPrefix: "",
};

module.exports = nextConfig
