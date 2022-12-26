import { promises as fs } from 'fs';
import grayMatter from 'gray-matter';
import path from 'path';

export const getProjects = async () => {
  const projectsDirectory = path.resolve(process.cwd(), 'mdx/');
  const filenames = await fs.readdir(projectsDirectory);
  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.resolve(projectsDirectory, filename);
      const content = await fs.readFile(filePath, 'utf8');
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const projects: Project[] = files
    .map((file) => {
      return {
        path: `/projects/${file.filename.replace('.mdx', '')}`,
        timestamp: file.matter.data.timestamp,
        title: file.matter.data.title,
        description: file.matter.data.description,
        link: '/projects/' + file.matter.data.slug,
        slug: file.matter.data.slug,
        author: file.matter.data.author,
        content: file.matter.content,
      };
    })
    .sort(
      (postA, postB) =>
        new Date(postA.timestamp).valueOf() -
        new Date(postB.timestamp).valueOf()
    );

  return projects;
};

export const getProjectBySlug = async (slug: string) => {
  const projectsDirectory = path.resolve(process.cwd(), 'mdx/');
  const filenames = await fs.readdir(projectsDirectory);
  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.resolve(projectsDirectory, filename);
      const content = await fs.readFile(filePath, 'utf8');
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const project: Project[] = files
    .map((file) => {
      return {
        path: `/projects/${file.filename.replace('.mdx', '')}`,
        timestamp: file.matter.data.timestamp,
        title: file.matter.data.title,
        description: file.matter.data.description,
        link: '/projects/' + file.matter.data.slug,
        slug: file.matter.data.slug,
        author: file.matter.data.author,
        content: file.matter.content,
      };
    })
    .filter((file) => file.slug === slug);

  if (project.length === 0) return null;
  return project[0];
};

export type Project = {
  path: string;
  timestamp: string;
  title: string;
  description: string;
  author: string;
  link: string;
  slug: string;
  content: string;
};
