import CurrentlyPlaying from 'components/CurrentlyPlaying';
import Projects from 'components/Projects';
import TabItem from 'components/TabItem';
import Tabs from 'components/Tabs';
import { Project } from 'lib/projects';

import { getCurrentlyPlaying, Song } from 'lib/spotify';
import Head from 'next/head';
import Image from 'next/image';
import History from '../components/History';

export default function Home({ song }: { projects: Project[]; song: Song }) {
  return (
    <div className="flex min-h-screen w-screen px-4 md:px-64 py-12">
      <Head>
        <title>John Trinh</title>
        <meta name="description" content="John Trinh, frontend developer." />
      </Head>

      <main className="flex flex-col gap-8 h-full w-full">
        <section className="flex flex-wrap gap-8 items-center w-full h-32 text-gray-700 md:p-4 rounded-md">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image fill src="/me.png" alt="A picture of me." />
          </div>
          <div className="flex flex-col flex-1">
            <span className="flex items-center gap-2">
              <h1 className="text-2xl font-display font-bold tracking-tighter">
                John Trinh
              </h1>
              <span>📍 DC, USA</span>
            </span>

            <span className="opacity-70">
              Frontend SDE @{' '}
              <a
                href="https://www.interos.ai/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hover:text-white cursor-pointer">Interos</span>
              </a>
            </span>
          </div>
        </section>

        <section className="text-gray-700">
          <Tabs defaultSelected="Projects">
            <TabItem title="Projects" content={<Projects />} />
            <TabItem title="History" content={<History />} />
          </Tabs>
        </section>

        <CurrentlyPlaying song={song} />
      </main>
    </div>
  );
}

export async function getServerSideProps(): Promise<{
  props: { song: Song | null };
}> {
  const song = await getCurrentlyPlaying();

  // TODO: We can't actually read MDX files from a SSR page.
  // Can probably opt for providing a hardcoded slug to the blog post at this index page.
  // We can fetch the files and create a table of contents SSG page later though.

  //   const projects = await getProjects();

  return {
    props: {
      song,
    },
  };
}
