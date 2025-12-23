import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blobcdn.same.energy',
      },
    ],
  },
};

export default nextConfig;
