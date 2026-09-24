import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/ceyjiylj/**'), new URL('https://images.unsplash.com/**')],
  },
  async redirects() {
    return [
      {
        source: '/sell',
        destination: '/buy?mode=sell',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
