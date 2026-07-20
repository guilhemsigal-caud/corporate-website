import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return [
      { source: "/publishers/monetization", destination: "/publishers", permanent: true },
      { source: "/publishers/data", destination: "/publishers", permanent: true },
      { source: "/publishers/editorial", destination: "/publishers", permanent: true },
      { source: "/publishers/partners", destination: "/publishers", permanent: true },
      { source: "/advertisers/formats", destination: "/advertisers", permanent: true },
      { source: "/advertisers/targeting", destination: "/advertisers", permanent: true },
      { source: "/advertisers/services", destination: "/advertisers", permanent: true },
      { source: "/advertisers/results", destination: "/advertisers", permanent: true },
    ];
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.collectiveaudience.co https://demo.collectiveaudience.co https://js.hsforms.net https://*.hubspot.com https://*.hs-scripts.com",
              "connect-src 'self' https://*.collectiveaudience.co https://*.beop.io https://beop.io https://*.hubspot.com https://*.hubapi.com https://forms.hsforms.com https://*.hsforms.net",
              "style-src 'self' 'unsafe-inline' https://*.collectiveaudience.co https://js.hsforms.net https://*.hubspot.com",
              "img-src 'self' data: blob: https://*.collectiveaudience.co https://*.beop.io https://*.googleapis.com https://*.gstatic.com https://cdn.sanity.io https://*.hubspot.com https://*.hs-banner.com",
              "font-src 'self' data: https://*.collectiveaudience.co https://*.gstatic.com https://*.hubspot.com",
              "frame-src 'self' https://*.collectiveaudience.co https://*.beop.io https://forms.hsforms.com https://*.hubspot.com https://js.hsforms.net",
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
