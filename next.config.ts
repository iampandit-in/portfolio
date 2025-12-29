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
   extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig);
