import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["chanhdai-macbook.local"],

  turbopack: {
    root: __dirname,
  },

  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    qualities: [75, 100],
  },

  async redirects() {
    return [
      {
        source:
          "/:section(blog|components)/writing-effect-inspired-by-apple:extension(.mdx)?",
        destination: "/:section/apple-hello-effect:extension",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/components/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/rss",
        destination: "/blog/rss",
      },
      {
        source: "/registry/rss",
        destination: "/components/rss",
      },
    ];
  },
};

export default nextConfig;
