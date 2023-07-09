/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      }
}

module.exports = nextConfig
const withVideos = require('next-videos')

module.exports = withVideos()

