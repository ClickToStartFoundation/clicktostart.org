import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["zod"],
  },
  // www is canonical: the apex A record lives in Bluehost's zone and has been
  // reverted by them once already, so the indexed host is the one Bluehost
  // can't break. The apex just bounces here whenever its DNS is healthy.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "clicktostart.org" }],
        destination: "https://www.clicktostart.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
