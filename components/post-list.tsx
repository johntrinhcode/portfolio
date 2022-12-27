import { Post } from 'lib/posts';
import Link from 'next/link';

type PostListProps = {
  posts: Post[];
};
export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="flex flex-col">
      {posts.map((post, index) => (
        <Link
          key={index}
          href={post.link}
          className="p-4 first:rounded-t-md last:rounded-b-md bg-slate-500/5 hover:bg-slate-500/10 transition-colors duration-200 border-t border-x last:border-b border-slate-200/5 backdrop-blur-[1px]"
        >
          <section className="flex flex-col gap-2 text-white">
            <h1 className="relative flex flex-row items-center gap-2 text-2xl lg:text-3xl font-semibold text-white">
              {post.title}
            </h1>
            <p className="text-white/70">{post.description}</p>
          </section>
        </Link>
      ))}
    </div>
  );
};
