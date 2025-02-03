import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ✅ Sabhi domains allow karne ke liye
      },
    ],
  },
  
};

export default nextConfig;
