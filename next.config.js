/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TOKEN: process.env.TOKEN,
    CHAT_ID: process.env.CHAT_ID,
  },
  experimental: { serverActions: true },
  images: {
    domains: ['cdn.sanity.io', 'storage.yandexcloud.net', 'storage.yandexcloud.net'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
