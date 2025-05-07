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
  async rewrites() {
    return [
      // Questa regola fa sì che /it/pages/chi-siamo punti a /it/chi-siamo
      {
        source: "/:locale/pages/:slug",
        destination: "/:locale/:slug",
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);

// const createNextIntlPlugin = require("next-intl/plugin");
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "false",
// });

// /** @type {import('next').NextConfig} */
// const withNextIntl = createNextIntlPlugin();

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "demo.reveliostudio.com",
//         port: "",
//         pathname: "/fleetmo/**",
//       },
//     ],
//   },
// };

// module.exports = withBundleAnalyzer(withNextIntl(nextConfig));
