import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Optional static output for the private Sites preview; default Next.js runtime remains available.
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" as const } : {}),
  images: { unoptimized: process.env.STATIC_EXPORT === "1" },
  ...(process.env.STATIC_EXPORT !== "1"
    ? {
        headers: async () => [
          {
            source: "/(.*)",
            headers: [
              { key: "X-Frame-Options", value: "DENY" },
              { key: "X-Content-Type-Options", value: "nosniff" },
              {
                key: "Referrer-Policy",
                value: "strict-origin-when-cross-origin",
              },
              {
                key: "Permissions-Policy",
                value: "camera=(), microphone=(), geolocation=()",
              },
            ],
          },
        ],
      }
    : {}),
};
export default nextConfig;
