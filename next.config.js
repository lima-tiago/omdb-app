/** @type {import('next').NextConfig} */
const withSvgr = require("next-plugin-svgr");
const path = require("path");

const nextConfig = {
  sassOptions: { includePaths: [path.join(__dirname, "src", "styles")] },
};

module.exports = withSvgr(nextConfig);
