/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "*.unsplash.com",
      },
      {
        hostname: 'img.clerk.com'
      },
      {hostname: 'loremflickr.com'}, {hostname: 'picsum.photos'}
    ]
  },
  logging: {
    fetches: { fullUrl: false },
  },
};
