import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
              "img-src 'self' data: blob: https://*.collectiveaudience.co https://*.beop.io https://*.googleapis.com https://*.gstatic.com",
              "font-src 'self' data: https://*.collectiveaudience.co https://*.gstatic.com",
              "frame-src 'self' https://*.collectiveaudience.co https://*.beop.io",
              "media-src 'self' https://*.collectiveaudience.co https://*.beop.io",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
