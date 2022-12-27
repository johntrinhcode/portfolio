import { Breadcrumbs } from 'components/breadcrumbs';
import { PostList } from 'components/projects';
import { getPosts, Post } from 'lib/posts';

type PageProps = {
  posts: Post[];
};

const Page = ({ posts }: PageProps) => {
  return (
    <div className="flex flex-col gap-4 md:py-6 md:px-32 xl:px-60">
      <main className="flex flex-col gap-4 h-full w-full">
        <Breadcrumbs />
        <PostList posts={posts} />
      </main>
    </div>
  );
};

export default Page;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}
