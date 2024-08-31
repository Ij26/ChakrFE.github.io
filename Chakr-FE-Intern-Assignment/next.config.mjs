const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/ChakrFE.github.io/" : "",
  basePath: isProd ? "/ChakrFE.github.io" : "",
  target: 'serverless',
  // Uncomment the following line if you are using `next export` to make a fully static site
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     // Add other paths here
  //   };
  // },
};

export default nextConfig;
