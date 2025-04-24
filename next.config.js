/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.gravatar.com', pathname: '/**' },
      { protocol: 'https', hostname: 'amazonaws.com', pathname: '/**' },
      { protocol: 'https', hostname: 'new-storageforbackend.s3.eu-west-2.amazonaws.com', pathname: '/**' },
      { protocol: 'https', hostname: 'storageforbackend.s3.us-east-1.amazonaws.com', pathname: '/**' },
      { protocol: 'https', hostname: 'storageforbackend.s3.amazonaws.com', pathname: '/**' },
         { protocol: 'https', hostname: 'new-storageforbackend.s3.amazonaws.com', pathname: '/**' },
      
    ],
  },
};

module.exports = nextConfig;
