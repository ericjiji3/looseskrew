/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            pathname: '/vi/**',
        },
        ],
    }
      
}
module.exports = nextConfig
const withVideos = require('next-videos')

module.exports = withVideos({
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            pathname: '/vi/**',
        },
        ],
    }
})
