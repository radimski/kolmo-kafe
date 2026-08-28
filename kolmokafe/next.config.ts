import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@websites/legal-cz", "@websites/form-engine"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
