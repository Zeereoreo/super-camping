/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  compiler: {
    styledComponents: true,
  },
  rewrites: () => [
    {
      source: "/api/camping",
      destination: "https://apis.data.go.kr/B551011/GoCamping/",
    },
  ],
};
