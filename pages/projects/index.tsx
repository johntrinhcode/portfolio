import { Breadcrumbs } from 'components/breadcrumbs';
import { getProjects, Project } from 'lib/projects';
import Link from 'next/link';

type PageProps = {
  projects: Project[];
};

const Page = ({ projects }: PageProps) => {
  return (
    <div className="flex flex-col gap-4 md:py-6 md:px-32 xl:px-60">
      <main className="flex flex-col gap-4 h-full w-full">
        <Breadcrumbs />
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="p-4 first:rounded-t-md last:rounded-b-md bg-slate-500/5 hover:bg-slate-500/10 transition-colors duration-200 border-t border-x last:border-b border-slate-200/5 backdrop-blur-[1px]"
            >
              <section className="flex flex-col gap-2 text-white">
                <h1 className="relative flex flex-row items-center gap-2 text-2xl lg:text-3xl font-semibold text-white">
                  {project.title}
                </h1>
                <p className="text-white/70">{project.description}</p>
              </section>
            </Link>
          ))}
        </div>
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
