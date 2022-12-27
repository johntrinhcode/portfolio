import { mdxComponents } from 'components/mdx/mdx-components';
import { PostLayout } from 'layouts/post-layout';
import { getPostBySlug, getPosts, Post } from 'lib/posts';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type PageProps = {
  post: Post;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

const Page = ({ post, source }: PageProps) => {
  return (
    <PostLayout post={post}>
      <MDXRemote {...source} components={mdxComponents} />
    </PostLayout>
  );
};

export default Page;

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug);
  const source = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [require('remark-prism')],
    },
  });

  return {
    props: { post, source },
  };
}
