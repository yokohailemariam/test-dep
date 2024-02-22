/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lezastoragev100.blob.core.windows.net',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'lezastoragev100.blob.core.windows.net',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
