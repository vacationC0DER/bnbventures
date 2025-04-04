/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Set output directory to dist for Nginx
  distDir: 'dist',
  // Configure static export
  output: 'export',
  // Configure asset handling
  assetPrefix: '/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
