import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:shortCode', 
        destination: '/api/redirect/:shortCode', 
      },
    ];
  },
};

export default nextConfig;
