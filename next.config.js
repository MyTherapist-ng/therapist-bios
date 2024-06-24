/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.gravatar.com", "amazonaws.com", "storageforbackend.s3.us-east-1.amazonaws.com"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "https://mytherapist.ng/for-therapists",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
