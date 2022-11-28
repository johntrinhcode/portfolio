// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM(
  withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.scdn.co',
          pathname: '/image/**',
        },
      ],
    },
    serverRuntimeConfig: {
      PROJECT_ROOT: __dirname,
    },
  })
);
