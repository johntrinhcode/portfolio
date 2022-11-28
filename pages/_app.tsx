import { MDXProvider } from '@mdx-js/react';
import { Screensaver } from 'components/screensaver';
import { MDXComponents } from 'mdx/types';
import '../styles/globals.css';
import '../styles/tailwind.css';

// TODO: Continue working on these MDX components when I get to fleshing out the Markdown pages.
const Heading1 = ({ children }) => {
  return <div className="bg-red-500">{children}</div>;
};

// TODO: Continue working on these MDX components when I get to fleshing out the Markdown pages.
const components: MDXComponents = {
  h1: Heading1,
};

export default function MyApp() {
  return (
    <MDXProvider components={components}>
      <Screensaver />
      {/* <Component {...pageProps} /> */}
    </MDXProvider>
  );
}
