/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      }
      
}
supabase: {
    client: {
        auth: {
            persistSession: false //or true
        }
    }
  }
module.exports = nextConfig
const withVideos = require('next-videos')

module.exports = withVideos()

