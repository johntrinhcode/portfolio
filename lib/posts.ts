import { promises as fs } from 'fs';
import grayMatter from 'gray-matter';
import path from 'path';

export const getPosts = async () => {
  const postsDirectory = path.resolve(process.cwd(), 'mdx/');
  const filenames = await fs.readdir(postsDirectory);
  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.resolve(postsDirectory, filename);
      const content = await fs.readFile(filePath, 'utf8');
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const posts: Post[] = files
    .map((file) => {
      return {
        path: `/posts/${file.filename.replace('.mdx', '')}`,
        timestamp: file.matter.data.timestamp,
        title: file.matter.data.title,
        description: file.matter.data.description,
        link: '/posts/' + file.matter.data.slug,
        slug: file.matter.data.slug,
        author: file.matter.data.author,
        content: file.matter.content,
      };
    })
    .sort(
      (postA, postB) =>
        new Date(postB.timestamp).valueOf() -
        new Date(postA.timestamp).valueOf()
    );

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const postsDirectory = path.resolve(process.cwd(), 'mdx/');
  const filenames = await fs.readdir(postsDirectory);
  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.resolve(postsDirectory, filename);
      const content = await fs.readFile(filePath, 'utf8');
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const post: Post[] = files
    .map((file) => {
      return {
        path: `/posts/${file.filename.replace('.mdx', '')}`,
        timestamp: file.matter.data.timestamp,
        title: file.matter.data.title,
        description: file.matter.data.description,
        link: '/posts/' + file.matter.data.slug,
        slug: file.matter.data.slug,
        author: file.matter.data.author,
        content: file.matter.content,
      };
    })
    .filter((file) => file.slug === slug);

  if (post.length === 0) return null;
  return post[0];
};

export type Post = {
  path: string;
  timestamp: string;
  title: string;
  description: string;
  author: string;
  link: string;
  slug: string;
  content: string;
};
