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
      {
        source: "/carpet-broadloom",
        destination: "/broadloom-carpet",
        permanent: true,
      },
      {
        source: "/luxury-vinyl-plank",
        destination: "/lvp",
        permanent: true,
      },
      {
        source: "/flooring/vinyl-composition-tiles",
        destination: "/vct",
        permanent: true,
      },
      {
        source: "/flooring/vinyl-composition-tiles/",
        destination: "/vct",
        permanent: true,
      },
      {
        source: "/vinyl-composition-tiles",
        destination: "/vct",
        permanent: true,
      },
      {
        source: "/our-work/commercial",
        destination: "/commercial",
        permanent: true,
      },
      {
        source: "/commercial-projects",
        destination: "/commercial",
        permanent: true,
      },
      {
        source: "/our-work/commercial/:slug",
        destination: "/commercial/:slug",
        permanent: true,
      },
      {
        source: "/our-work/residential",
        destination: "/residential",
        permanent: true,
      },
      {
        source: "/our-work/residential/:slug",
        destination: "/residential/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
