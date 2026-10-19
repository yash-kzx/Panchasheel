import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Canonical domain enforcement:
   * Redirect bare domain to www (301 Permanent).
   * This eliminates duplicate content from Google indexing both versions.
   * Only active in production — dev is unaffected.
   */
  async redirects() {
    if (process.env.NODE_ENV !== "production") return [];
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
