/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindAttributes: ["className"],
  tailwindFunctions: ["cn", "tv"],
};

export default config;
