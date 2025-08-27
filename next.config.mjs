/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'image.tmdb.org',pathname: '/t/p/**' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://*.clerk.accounts.dev; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.youtube.com https://www.youtube-nocookie.com https://*.clerk.accounts.dev https://clerk.accounts.dev; connect-src 'self' https://*.clerk.accounts.dev https://clerk.accounts.dev https://api.themoviedb.org https://image.tmdb.org; worker-src 'self' blob:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
