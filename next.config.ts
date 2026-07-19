import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["zod"],
  },
  // No host redirect for now: the apex A record lives in Bluehost's zone and
  // was reverted to their old server. Once apex reliably points at Vercel,
  // redirect it to www here.
};

export default nextConfig;
