import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Pin the workspace root to this project. Without this, Turbopack walks up the
  // tree, finds the parent monorepo's lockfile, and infers the wrong root.
  turbopack: { root: __dirname },
  // Allow the dev server to be previewed through tunnels (e.g. ngrok share links).
  allowedDevOrigins: ['*.ngrok-free.app', '*.ngrok.app', '*.trycloudflare.com'],
  compiler: {
    removeConsole: { exclude: ['error', 'warn'] },
  },
  images: {
    minimumCacheTTL: 604800, // 7 days
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
