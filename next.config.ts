import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "marshal-lms-yt-video-subscribe-gottajsx.fly.storage.tigris.dev",
        port: "",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
