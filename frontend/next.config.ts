import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  experimental: {
    serverActions: {
      bodySizeLimit: "500mb", // ESSENCIAL para upload de vídeos
    },
  },
  async rewrites() {
    return [
      { source: "/js/script.js", destination: "https://datafa.st/js/script.js" },
      { source: "/api/events", destination: "https://datafa.st/api/events" },
    ];
  },
};

export default nextConfig;
