/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for build, not dev
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'out',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
