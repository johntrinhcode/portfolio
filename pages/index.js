import Head from 'next/head'
import React, { useState } from 'react'
import Nav from '../components/Nav'
import { InView } from 'react-intersection-observer';
import Link from "next/link";
import { promises as fs } from 'fs';
import path from 'path'
import grayMatter from 'gray-matter';
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
        <Nav isHomeVisible={isHomeVisible} isBlogVisible={isBlogVisible} isProjectsVisible={isProjectsVisible} isContactVisible={isContactVisible} />
        <InView className="w-full h-screen" threshold={0.5} onChange={(inView, entry) => setIsHomeVisible(inView)}>
          <div id="home" className="relative w-full h-full flex flex-col md:flex-row items-center justify-center px-10 md:px-36 lg:px-64">
            {/* On small screens, image comes before hero text. */}
            <div className="w-full md:w-0 h-1/2 md:h-0 flex flex-col items-center justify-end bg-red-300">
              <div className="w-48 h-48 md:invisible">
                <img src="image_1.png"></img>
              </div>
            </div>

            <div className="w-full bg-blue-300 md:w-2/3 h-1/2 flex flex-col items-center justify-start md:justify-center mt-10 md:mt-0">
              <div className="w-full">
                <h1 className="z-10 tracking-tighter font-display font-bold text-6xl text-center md:text-left">
                  <span className="text-gray-400">Hey, i'm </span>
                  <span className="text-gray-800">John Trinh.</span>
                </h1>
              </div>
              <div className="w-full z-10 text-gray-400 mt-4 md:mt-8 flex flex-col text-center md:text-left">
                <h2>
                  <span>Let's create elegant experiences,</span>
                </h2>
                <h2>
                  <span> bounce ideas and deliver great work.</span>
                </h2>
              </div>
            </div>

            {/* On larger screens, image comes after hero text. */}
            <div className="w-0 md:w-1/3 h-0 md:h-screen flex items-center justify-end invisible md:visible">
              <div className="relative w-0 md:w-48 h-0 md:h-48">
              <div className="tape-top-left"></div>
              <div className="tape-bottom-right"></div>
              <span className="absolute -bottom-12 -left-12 transform rotate-12 font-handwriting text-2xl text-gray-700">(thats me!)</span>
                <img src="image_1.png"></img>
              </div>
            </div>
          </div>
          
        </InView>

        <InView className="w-full" threshold={0.5} onChange={(inView, entry) => setIsBlogVisible(inView)}>
          <Blog latestPosts={latestPosts} />
        </InView>

        <InView className="w-full h-screen" threshold={0.5} onChange={(inView, entry) => setIsProjectsVisible(inView)}>
          <Projects />
        </InView>

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