/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  // experimental: {
  //   serverActions: true,
  // },
  output: 'standalone',
};

module.exports = nextConfig;