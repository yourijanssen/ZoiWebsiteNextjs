import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 92],
  },
  async headers() {
    return [
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
