import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.collectiveaudience.co https://demo.collectiveaudience.co",
              "connect-src 'self' https://*.collectiveaudience.co https://*.beop.io https://beop.io",
              "style-src 'self' 'unsafe-inline' https://*.collectiveaudience.co",
              "img-src 'self' data: blob: https://*.collectiveaudience.co https://*.beop.io https://*.googleapis.com https://*.gstatic.com https://cdn.sanity.io",
              "font-src 'self' data: https://*.collectiveaudience.co https://*.gstatic.com",
              "frame-src 'self' https://*.collectiveaudience.co https://*.beop.io",
              "media-src 'self' https://*.collectiveaudience.co https://*.beop.io",
              "frame-ancestors 'self' http://localhost:3333 https://*.sanity.studio https://*.collectiveaudience.co",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
