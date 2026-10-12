import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 92],
  },
  // Move public Vercel URLs to the official domain, preserving paths and queries.
  async redirects() {
    if (process.env.VERCEL_ENV === "preview") return [];

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        destination: "https://zoipantou.gr/:path*",
        permanent: true,
      },
    ];
  },
  // Keep Vercel previews out of search without blocking official domains.
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/images/zoi-pantou-logo.png",
        headers: [
          { key: "X-Robots-Tag", value: "noimageindex" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
