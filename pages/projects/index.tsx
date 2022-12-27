import { Breadcrumbs } from 'components/breadcrumbs';
import Projects from 'components/projects';
import { getProjects, Project } from 'lib/projects';

type PageProps = {
  projects: Project[];
};

const Page = ({ projects }: PageProps) => {
  return (
    <div className="flex flex-col gap-4 md:py-6 md:px-32 xl:px-60">
      <main className="flex flex-col gap-4 h-full w-full">
        <Breadcrumbs />
        <Projects projects={projects} />
      </main>
    </div>
  );
};

export default Page;

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: { projects },
  };
}
