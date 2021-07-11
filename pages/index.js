import Head from 'next/head'
import React, { useRef, useState } from 'react'
import Title from '../components/Title'
import Intro from '../components/Intro'
import Topics from '../components/Topics'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import useOnScreen from '../components/utilities/useOnScreenHook';
import { InView } from 'react-intersection-observer';

export default function Home() {
  let [isHomeVisible, setIsHomeVisible] = useState(false);
  let [isBlogVisible, setIsBlogVisible] = useState(false);
  let [isProjectsVisible, setIsProjectsVisible] = useState(false);
  let [isContactVisible, setIsContactVisible] = useState(false);
  // const { homeRef, isHomeVisible, homeEntry } = useInView({ threshold: 0, trackVisibility: true, initialInView: true })
  // const { blogRef, isBlogVisible, blogEntry } = useInView()
  // const { projectsRef, isProjectsVisible, projectsEntry } = useInView()
  // const { contactRef, isContactVisible, contactEntry } = useInView()
  
  return (
    <div className="w-full h-full">
      <Head>
        <title>John Trinh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen flex flex-col items-center justify-center">
        <Nav isHomeVisible={isHomeVisible} isBlogVisible={isBlogVisible} isProjectsVisible={isProjectsVisible} isContactVisible={isContactVisible} />
        <InView className="w-full" threshold={0.5} onChange={(inView, entry) => setIsHomeVisible(inView)}>
            <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-36">
            {/* On small screens, image comes before hero text. */}
            <div className="w-full md:w-0 h-screen md:h-0 flex flex-col items-center justify-end">
              <div className="w-48 h-48 md:invisible">
                <img src="image_1.png"></img>
              </div>
            </div>

            <div className="w-full h-screen flex flex-col items-center justify-start md:justify-center mt-10 md:mt-0">
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
            <div className="w-0 md:w-full h-0 md:h-screen flex items-center justify-center">
              <div className="w-0 md:w-48 h-0 md:h-48">
                <img src="image_1.png"></img>
              </div>
            </div>
          </div>
          
        </InView>

        <InView className="w-full" threshold={0.5} onChange={(inView, entry) => setIsBlogVisible(inView)}>
          <div id="blog" className="relative w-full h-screen flex flex-col items-center justify-center">
            <span className="z-10 tracking-tighter font-display font-bold text-6xl text-gray-800">Blog</span>
          </div>
        </InView>

        <InView className="w-full" threshold={0.5} onChange={(inView, entry) => setIsProjectsVisible(inView)}>
          <div id="projects" className="relative w-full h-screen flex flex-col items-center justify-center">
            <span className="z-10 tracking-tighter font-display font-bold text-6xl text-gray-800">Projects</span>
          </div>
        </InView>

        <InView className="w-full" threshold={0.5} onChange={(inView, entry) => setIsContactVisible(inView)}>
          <div id="contact" className="relative w-full h-screen flex flex-col items-center justify-center">
            <span className="z-10 tracking-tighter font-display font-bold text-6xl text-gray-800">Contact</span>
          </div>
        </InView>
      </main>

{/*

      <Footer />

*/}
    </div>
  )
}
