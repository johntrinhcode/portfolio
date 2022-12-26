import CurrentlyPlaying from 'components/currently-playing';
import { Project } from 'lib/projects';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { Logo } from 'components/logo';
import { getCurrentlyPlaying, Song } from 'lib/spotify';
import Head from 'next/head';

export default function Home({ song }: { projects: Project[]; song: Song }) {
  return (
    <div className="flex w-screen px-6 py-[4.5rem] md:px-32 xl:px-60">
      <Head>
        <title>John Trinh</title>
        <meta name="description" content="John Trinh, frontend developer." />
      </Head>

      <main className="flex flex-col gap-4 h-full w-full">
        <section className="flex flex-wrap gap-8 items-center w-full h-32 text-white p-4 rounded-md bg-slate-500/5 border border-slate-200/5 backdrop-blur-[1px]">
          <Logo fill="rgba(55, 65, 81, .75)" stroke={'rgba(55, 65, 81, .5)'} />
          <div className="flex flex-col flex-1">
            <span className="flex items-center gap-2">
              <h1 className="uppercase tracking-widest text-sm font-display font-bold">
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

        <section className="text-white/70 bg-slate-500/5 border border-slate-200/5 backdrop-blur-[1px] rounded-md p-4 text-sm">
          Still working on this page, but feel free to reach out to me for more
          information!
        </section>

        <section className="flex flex-row items-center gap-2">
          <CurrentlyPlaying song={song} className="grow" />
          <a
            href="https://www.linkedin.com/in/john-trinh-code/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Link"
          >
            <AiFillLinkedin className="text-white/70 h-6 w-6" />
          </a>
          <a href="mailto:johntrinhcode@gmail.com" aria-label="Email Link">
            <AiFillMail className="text-white/70 h-6 w-6" />
          </a>
        </section>
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
