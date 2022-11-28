import { promises as fs } from 'fs';
import grayMatter from 'gray-matter';
import path from 'path';

export const getProjects = async () => {
  const projectsDirectory = path.resolve(process.cwd(), 'pages/projects');
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
      };
    })
    .sort((postA, postB) => postB.timestamp - postA.timestamp);

  return projects;
};

export type Project = {
  path: string;
  timestamp: string;
  title: string;
  description: string;
  link: string;
  slug: string;
};
