import Head from 'next/head'
import React from 'react'
import Title from '../components/Title'
import Intro from '../components/Intro'
import Topics from '../components/Topics'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>John Trinh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen flex flex-col items-center justify-center">
        <Nav />
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
          <iframe className="z-0 absolute" src='https://my.spline.design/untitled-2a1f4898dfe50ac9f3841139d82eecce/' frameborder='0' width='100%' height='100%'></iframe>
          <span className="z-10 tracking-tighter font-display font-bold text-6xl text-gray-800">John Trinh</span>
          <div className="z-10 flex flex-row space-x-4 font-display text-gray-400">
            <span>Software Developer</span>
            <span>Designer</span>
            <span>Communicator</span>
          </div>
        </div>

        <div id="blog" className="relative w-full h-screen flex flex-col items-center justify-center">
          <span className="z-10 tracking-tighter font-display font-bold text-6xl text-gray-800">Blog</span>
        </div>

        <div id="projects" className="relative w-full h-screen flex flex-col items-center justify-center">
          <span className="z-10 tracking-tighter font-display font-bold text-6xl text-gray-800">Projects</span>
        </div>

        <div id="contact" className="relative w-full h-screen flex flex-col items-center justify-center">
          <span className="z-10 tracking-tighter font-display font-bold text-6xl text-gray-800">Contact</span>
        </div>

      </main>

{/*

      <Footer />

*/}
    </div>
  )
}
