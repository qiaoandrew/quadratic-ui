import type { NextConfig } from "next";
import createMDX from "@next/mdx";

await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
const withMDX = createMDX({});
export default withMDX(config);
