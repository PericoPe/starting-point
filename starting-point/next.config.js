/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      // puedes agregar más dominios si usas otras fuentes
    ],
  },
};

module.exports = nextConfig;
