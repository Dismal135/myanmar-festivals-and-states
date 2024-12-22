import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        pathname: '/**', // Allows any path under the domain
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**', // Allows any path under the domain
      },
    ],
  },
};

export default nextConfig;
