import Head from 'next/head'
import Link from "next/link";
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import { promises as fs } from 'fs';
import path from 'path'
import grayMatter from 'gray-matter';
import Nav from '../components/Nav'
import Intro from '../components/Intro';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home({ latestPosts }) {
  let [isHomeVisible, setIsHomeVisible] = useState(false);
  let [isBlogVisible, setIsBlogVisible] = useState(false);
  let [isProjectsVisible, setIsProjectsVisible] = useState(false);
  let [isContactVisible, setIsContactVisible] = useState(false);
  
  return (
    <div className="w-full h-full">
      <Head>
        <title>John Trinh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen flex flex-col items-center justify-center">
        {/* Nav bar */}
        <Nav isHomeVisible={isHomeVisible} isBlogVisible={isBlogVisible} isProjectsVisible={isProjectsVisible} isContactVisible={isContactVisible} />
        
        {/* Intro */}
        <InView className="w-full h-screen" threshold={0.5} onChange={(inView, entry) => setIsHomeVisible(inView)}>
          <Intro />
        </InView>

        {/* Blog */}
        <InView className="w-full" threshold={0.5} onChange={(inView, entry) => setIsBlogVisible(inView)}>
          <Blog latestPosts={latestPosts} />
        </InView>

        {/* Projects */}
        <InView className="w-full h-screen" threshold={0.5} onChange={(inView, entry) => setIsProjectsVisible(inView)}>
          <Projects />
        </InView>

        {/* Contact */}
        <InView className="w-full relative pt-16" threshold={1} onChange={(inView, entry) => setIsContactVisible(inView)}>
          <Contact />
          <div className="custom-shape-divider-bottom-1632667082">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
            </svg>
          </div>
        </InView>

        <Footer />
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages/blog/posts');
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(postsDirectory, filename)
    const content = await fs.readFile(filePath, 'utf8')
    const matter = grayMatter(content);
    return {
      filename,
      matter
    }
  }));

  const latestPosts = files.map(file => {
    return {
      path: `/blog/posts/${file.filename.replace('.mdx', '')}`,
      timestamp: file.matter.data.timestamp,
      title: file.matter.data.title,
      link: '/blog/posts/' + file.matter.data.slug,
      summary: file.matter.data.summary
    }
  }).sort((postA, postB) => postB.timestamp - postA.timestamp).slice(0, 3);

  return {
    props: {
      latestPosts
    }
  }
}