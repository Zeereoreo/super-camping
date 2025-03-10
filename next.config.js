/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};
