import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/steve-recommends",
        destination: "/expat-toolkit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
