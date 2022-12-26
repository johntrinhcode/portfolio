import { mdxComponents } from 'components/mdx/mdx-components';
import { PostLayout } from 'layouts/post-layout';
import { getProjectBySlug, getProjects, Project } from 'lib/projects';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type PageProps = {
  project: Project;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

const Page = ({ project, source }: PageProps) => {
  return (
    <PostLayout project={project}>
      <MDXRemote {...source} components={mdxComponents} />
    </PostLayout>
  );
};

export default Page;

export async function getStaticPaths() {
  const projects = await getProjects();
  const paths = projects.map((project) => {
    return { params: { slug: project.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const project = await getProjectBySlug(context.params.slug);
  const source = await serialize(project.content, {
    mdxOptions: {
      remarkPlugins: [require('remark-prism')],
    },
  });

  return {
    props: { project, source },
  };
}
