/** @type {import('next').NextConfig} */
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

module.exports = nextConfig;
