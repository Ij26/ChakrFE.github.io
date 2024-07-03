const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/ChakrFE.github.io/" : "",
  basePath: isProd ? "/ChakrFE.github.io" : "",
};

export default nextConfig;
