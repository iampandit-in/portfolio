import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
          protocol: "https",
          hostname: "cdn.simpleicons.org"
      }
    ]
  },
   // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Options can be added here if needed, but plugins should be configured
  // in next-mdx-remote where the MDX is actually compiled
})

export default withMDX(nextConfig);
