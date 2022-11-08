import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/tailwind.css';

const Heading1 = ({ children }) => {
  return <div className="bg-red-500">{children}</div>;
};

// TODO: Continue working on these MDX components when I get to fleshing out the Markdown pages.
const components: MDXComponents = {
  h1: Heading1,
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
