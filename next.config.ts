import type { NextConfig } from "next";
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const nextConfig: NextConfig = {
  // output: 'export',
  // assetPrefix: './',
  // trailingSlash: true,
  // webpack: (config, { dev, isServer }) => {
  //   if (!dev && !isServer) {
  //     config.optimization.minimize = false;
  //     config.optimization.minimizer = [];
  //     if (config.optimization.minimizer) {
  //       config.optimization.minimizer = config.optimization.minimizer.filter(
  //         (plugin: any) => !(plugin instanceof CssMinimizerPlugin)
  //       );
  //     }
  //   }

  //   return config;
  // },
};

export default nextConfig;