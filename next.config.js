/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.gravatar.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://mytherapist.ng/for-therapists",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
