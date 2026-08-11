const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/homev2",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
