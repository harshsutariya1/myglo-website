import type { NextConfig } from "next";

// The About page is temporarily hidden: /about redirects (307) to the homepage.
// Set to false to bring it back (and re-add the About links in Navbar.tsx and app/sitemap.ts).
const HIDE_ABOUT_PAGE = true;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blobcdn.same.energy',
      },
    ],
  },
  async redirects() {
    return HIDE_ABOUT_PAGE
      ? [{ source: '/about', destination: '/', permanent: false }]
      : [];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Legal PDFs are embedded in an <object> on /terms and /privacy, so allow
        // same-origin framing for /legal/* only. Later matches override earlier ones.
        source: '/legal/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
