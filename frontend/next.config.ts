import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Skip ESLint during builds (generated Prisma code causes lint errors)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip TypeScript errors during builds for now
  typescript: {
    ignoreBuildErrors: false,
  },
  // Configuração para permitir uploads de vídeos maiores
  experimental: {
    serverActions: {
      bodySizeLimit: "500mb",
    },
  },
  async rewrites() {
    return [
      {
        source: "/js/script.js",
        destination: "https://datafa.st/js/script.js",
      },
      {
        source: "/api/events",
        destination: "https://datafa.st/api/events",
      },
    ];
  },
};

export default nextConfig;
