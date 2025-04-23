const createNextIntlPlugin = require("next-intl/plugin");
/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.reveliostudio.com",
        port: "",
        pathname: "/fleetmo/**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
