import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["zod"],
  },
  async redirects() {
    return [
      // Canonical host: the apex (matches the old site's backlinks).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.clicktostart.org" }],
        destination: "https://clicktostart.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
