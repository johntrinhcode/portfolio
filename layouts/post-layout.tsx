import { Breadcrumbs } from 'components/breadcrumbs';
import { Project } from 'lib/projects';
import Head from 'next/head';
import Image from 'next/image';

type PostLayoutProps = JSX.IntrinsicElements['div'] & { project: Project };

export const PostLayout = ({ project, children }: PostLayoutProps) => {
  return (
    <div className="flex flex-col gap-4 md:py-6 md:px-32 xl:px-60">
      <Head>
        <title>{`${project.title} - John Trinh`}</title>
        <meta name="description" content="John Trinh, frontend developer." />
      </Head>

      <Breadcrumbs />

      <div className="md:rounded-md bg-slate-500/5 backdrop-blur-[1px] text-white/70 border border-slate-200/5">
        <PostHeader
          title={project.title}
          author={project.author}
          timestamp={project.timestamp}
        />
        <PostBody>{children}</PostBody>
      </div>
    </div>
  );
};

const PostBody = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-4 lg:p-12">{children}</div>
  );
};

type PostHeaderProps = {
  title: string;
  author: string;
  timestamp: string;
};
const PostHeader = ({ title, author, timestamp }: PostHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-4 lg:p-12 border-b border-slate-200/5">
      <h1 className="text-2xl  lg:text-4xl font-semibold text-white">
        {title}
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex w-fit py-1 pl-1 pr-3 gap-2 items-center border border-slate-500/20 rounded-full">
          <Image
            src="/me.png"
            alt="Picture of me!"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col gap-[2px] items-start justify-start">
            <span className="text-white text-sm font-semibold">{author}</span>
            <span className="text-xs">on {timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
