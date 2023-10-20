/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  images: {
    domains: ['cdn.sanity.io', 'storage.yandexcloud.net', 'storage.yandexcloud.net'],
  },
}

module.exports = nextConfig
