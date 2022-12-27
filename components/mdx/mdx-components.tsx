import { getAnchor } from 'lib/utils';
import { MDXComponents } from 'mdx/types';

const Heading1 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;

  return (
    <a href={link}>
      <h1
        id={anchor}
        className="relative group flex flex-row items-center gap-2 text-2xl lg:text-3xl [&:not(:first-child)]:pt-8 font-semibold text-white"
      >
        <span className="absolute text-lg md:text-2xl -left-5 md:-left-8 anchor-link group-hover:opacity-10 opacity-0 transition-opacity duration-200">
          #
        </span>
        {children}
      </h1>
    </a>
  );
};

const Heading2 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;

  return (
    <a href={link}>
      <h2
        id={anchor}
        className="relative group flex flex-row gap-2 text-xl lg:text-2xl [&:not(:first-child)]:pt-8 font-semibold text-white"
      >
        <span className="absolute text-lg md:text-2xl -left-5 md:-left-8 anchor-link group-hover:opacity-10 opacity-0 transition-opacity duration-200">
          #
        </span>
        {children}
      </h2>
    </a>
  );
};

const UnorderedList = ({ children }) => {
  return <ul className="pl-4 list-disc">{children}</ul>;
};

const OrderedList = ({ children }) => {
  return <ul className="pl-4 list-decimal">{children}</ul>;
};

const Blockquote = ({ children }) => {
  return (
    <blockquote className="relative py-2 pr-2 pl-4 bg-[#2E3440]/50 rounded-md overflow-hidden border border-[#2E3440]">
      <div className="absolute left-0 top-0 h-full w-2 bg-[#2E3440]/80" />
      {children}
    </blockquote>
  );
};

const Link = ({ children, ...rest }) => {
  return (
    <a {...rest} className="text-blue-400">
      {children}
    </a>
  );
};

const Code = ({ children, ...rest }) => {
  return (
    <code {...rest} className="bg-[#2E3440] p-1 rounded-md">
      {children}
    </code>
  );
};

export const mdxComponents: MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  ul: UnorderedList,
  ol: OrderedList,
  blockquote: Blockquote,
  a: Link,
  code: Code,
};
