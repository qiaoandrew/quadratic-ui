import createMDX from "@next/mdx";

import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMdx = createMDX();
export default withMdx(config);
