/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  basePath: "/your-repo-name", // Replace with your GitHub repo name
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
