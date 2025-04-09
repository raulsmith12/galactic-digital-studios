/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withPWA({
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    images: {
      loader: 'custom',
      loaderFile: './my-loader.js',
    },
    swcMinify: true,
  })
)
