import CurrentlyPlaying from 'components/currently-playing';
import { Post } from 'lib/posts';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { Logo } from 'components/logo';
import { getCurrentlyPlaying, Song } from 'lib/spotify';
import Head from 'next/head';
import Link from 'next/link';

const FEATURED_POSTS: Post = {
  path: '/posts/refresh',
  timestamp: '12/26/2022',
  title: 'Refresh!',
  description:
    'In what seems like a yearly tradition, I went through another round of revamping my personal website.',
  link: '/posts/refresh',
  slug: 'refresh',
  author: 'John Trinh',
  content:
    "\n## Fresh coat of paint\n\nAs is tradition for me it seems, I went through another round of revamping my personal website.\nThis time around was pretty fun and I had a good time redesigning the look to this _glass pane_ aesthetic.\n\nThe site is built with **React 18** and **Next.js**. There are a couple other libraries and APIs sprinkled in there to let me\ndo things like display my currently playing Spotify song or derive posts like this from a Markdown file.\n\n## Inspiration\n\nThere are plenty of exceptional portfolio websites out there that I've stumbled across on Twitter, Reddit and other places that\ninspired me to give it another whirl.\n\nSome of my favorites:\n\n- [Lee Robinson](https://leerob.io/)\n- [Rally](https://rallyinteractive.com/)\n- [Igor Bedesqui](https://www.igorbedesqui.com/)\n\n## On to the next\n\nI think I'm pretty satisfied with the base that I've established here and believe it's good enough to start pushing out some posts and random thoughts.\nThis time around also feels much more deliberate. The last iteration of my personal site was made while I was still learning the ropes\nof React and Next.js. Now that I'm using both of these tools at my day job, I've gotten a lot more comfortable with two!\n\nAnywho, here is the [Github](https://github.com/johntrinhcode/portfolio) if you're interested.\n\nHere's to an awesome 2023! 🤠\n",
};

export default function Home({ song }: { posts: Post[]; song: Song }) {
  return (
    <div className="flex w-screen px-6 py-12 md:py-[4.5rem] md:px-32 xl:px-60">
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

        <section className="flex flex-col text-white/70 rounded-md bg-slate-500/5 transition-colors duration-200 border border-slate-200/5 backdrop-blur-[1px]">
          <div className="flex px-4 text-sm justify-between border-b border-b-slate-500/10 p-2">
            <h1>Latest post</h1>
            <Link href="/posts">See all</Link>
          </div>
          <Link href={FEATURED_POSTS.link}>
            <section className="flex flex-col gap-2 text-white p-4 hover:bg-slate-500/10">
              <h1 className="relative flex flex-row items-center gap-2 text-2xl lg:text-3xl font-semibold text-white">
                {FEATURED_POSTS.title}
              </h1>
              <p className="text-white/70">{FEATURED_POSTS.description}</p>
            </section>
          </Link>
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

  return {
    props: {
      song,
    },
  };
}
