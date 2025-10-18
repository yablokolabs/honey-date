/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/honey-date',
  assetPrefix: '/honey-date/',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig