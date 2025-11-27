import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/impressum",
        destination: "/imprint",
        permanent: true,
      },
      {
        source: "/datenschutz",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/agb",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
