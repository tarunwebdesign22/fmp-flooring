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
      {
        source: "/flooring/closeout",
        destination: "/in-stock-specials",
        permanent: true,
      },
      {
        source: "/closeout",
        destination: "/in-stock-specials",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
