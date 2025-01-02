import createMDX from "@next/mdx";

import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMdx = createMDX();
export default withMdx(config);
