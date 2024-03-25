/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    remotePatterns: [],
  },
  reactStrictMode: false,
  transpilePackages: ["@repo/ui", "@repo/utils", "@repo/database"],
};
