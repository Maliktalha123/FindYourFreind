/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "media.istockphoto.com" },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
