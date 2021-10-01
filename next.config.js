const withPlugins = require('next-compose-plugins')
const withMdxEnhanced = require('next-mdx-enhanced')

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
  
const mdxConfig = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
  target: 'serverless'
})();

const nextConfig = {
  target: 'serverless'
}

module.exports = withPlugins(
  [
    mdxConfig
  ],
  nextConfig
)
