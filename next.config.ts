import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Canonical domain: redirect bare domain (panchasheelgeoinfra.com) to www.
   * The `has: host` matcher ensures this only fires when the request hostname
   * is exactly "panchasheelgeoinfra.com" — localhost is unaffected.
   * No vercel.json exists, so there is no risk of conflicting redirect rules.
   * Permanent (308/301) tells search engines which URL to index.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "panchasheelgeoinfra.com" }],
        destination: "https://www.panchasheelgeoinfra.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
