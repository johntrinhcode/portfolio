import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/script.js",
      destination: "https://cloud.umami.is/script.js",
    },
  ],
};

export default nextConfig;
